import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  TemplateRef,
  Input,
  ViewContainerRef,
  ViewChild,
  EmbeddedViewRef,
  OnDestroy,
  AfterContentInit
} from '@angular/core';
import { Subscription } from 'rxjs';
import { GoogleMapsWrapper } from '../../services/googlemaps-wrapper';

@Component({
  selector: 'gmtv-infowindow',
  template: `	<div style="display: none;" #root>
                <ng-template #defaultTemplate let-o>
                  <div id="rootNode">
                    <h3>{{o.name}}</h3>
                    <p>
                      <strong>ID:</strong> {{o.id}}<br>
                      <strong>Position:</strong> {{o.position?.toJSON() | json}}<br>
                      <strong>Heading:</strong> {{o.heading | number:'1.0-1'}}°<br>
                    </p>
                  </div>
                </ng-template>
                <ng-container #vc></ng-container>
              </div>`
})
export class InfowindowComponent implements AfterContentInit, OnDestroy {
  @ViewChild('root') root: ElementRef;
  // tslint:disable-next-line: no-any
  @ViewChild('defaultTemplate') defaultTemplateRef: TemplateRef<any>;
  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  /** When infowindow has closed */
  @Output() closed = new EventEmitter<void>();
  /** Triggered on clicking on the X button */
  @Output() closeclick = new EventEmitter<void>();

  @Input() noPadding = false;
  @Input() padding = false;
  /** Unique infowindow identifier */
  @Input() id: string;
  @Input() cssClass = '';
  /** Template for infowindow content */
  // tslint:disable-next-line: no-any
  @Input('template') contentTemplateRef: TemplateRef<any>;
  /** Implicit context for content template */
  // tslint:disable-next-line: no-any
  @Input('context') ctx: any;
  @Input() closeOnMapClick = true;

  content: Node;
  // tslint:disable-next-line: no-any
  view: EmbeddedViewRef<any>;
  subscription = new Subscription();

  constructor(protected googleMaps: GoogleMapsWrapper, protected el: ElementRef) { }

  get nativeInfowindow() {
    return this.googleMaps.getInfowindow(this.id);
  }

  get addPadding() {
    return (this.isMobile && this.noPadding === false) || this.padding !== false;
  }

  get isMobile() {
    return window.innerWidth < 768;
  }

  get isOpen() {
    return this.googleMaps.isInfowindowOpen(this.id);
  }

  ngAfterContentInit() {
    const template = this.contentTemplateRef || this.defaultTemplateRef;
    this.view = template && template.createEmbeddedView(this.ctx);
    this.googleMaps.click.subscribe(() => this.onMapClick());
    this.subscription = this.nativeInfowindow['closeclick'].subscribe(() => this.closeclick.emit());
  }

  ngOnDestroy() {
    if (this.id) this.googleMaps.destroyInfowindow(this.id);
    this.subscription.unsubscribe();
  }

  getNativeInfowindow(): google.maps.InfoWindow {
    return this.googleMaps.getInfowindow(this.id);
  }

  open(anchor: google.maps.MVCObject | google.maps.LatLng) {
    if (this.vc && this.view && !this.view.destroyed) this.vc.insert(this.view);
    this.content = this.view && this.view.rootNodes[0];
    this.googleMaps.openInfowindow(anchor, this.content, this.id);
  }

  close() {
    if (this.googleMaps.isInfowindowOpen(this.id)) {
      this.googleMaps.closeInfowindow(this.id);
      this.onClosed();
    }
  }

  onMapClick() {
    if (this.closeOnMapClick)
      this.close();
  }

  onClosed() {
    try {
      this.vc.remove(0);
      this.view.destroy();
      this.vc.clear();
    } catch (ex) {
      console.warn(ex);
    }
    this.closed.emit();
  }
}