(self["webpackChunktracking_view"] = self["webpackChunktracking_view"] || []).push([["src_app_home_home_module_ts"],{

/***/ 66538:
/*!********************************************************************!*\
  !*** ./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HTTP_INTERCEPTORS": function() { return /* binding */ HTTP_INTERCEPTORS; },
/* harmony export */   "HttpBackend": function() { return /* binding */ HttpBackend; },
/* harmony export */   "HttpClient": function() { return /* binding */ HttpClient; },
/* harmony export */   "HttpClientJsonpModule": function() { return /* binding */ HttpClientJsonpModule; },
/* harmony export */   "HttpClientModule": function() { return /* binding */ HttpClientModule; },
/* harmony export */   "HttpClientXsrfModule": function() { return /* binding */ HttpClientXsrfModule; },
/* harmony export */   "HttpContext": function() { return /* binding */ HttpContext; },
/* harmony export */   "HttpContextToken": function() { return /* binding */ HttpContextToken; },
/* harmony export */   "HttpErrorResponse": function() { return /* binding */ HttpErrorResponse; },
/* harmony export */   "HttpEventType": function() { return /* binding */ HttpEventType; },
/* harmony export */   "HttpHandler": function() { return /* binding */ HttpHandler; },
/* harmony export */   "HttpHeaderResponse": function() { return /* binding */ HttpHeaderResponse; },
/* harmony export */   "HttpHeaders": function() { return /* binding */ HttpHeaders; },
/* harmony export */   "HttpParams": function() { return /* binding */ HttpParams; },
/* harmony export */   "HttpRequest": function() { return /* binding */ HttpRequest; },
/* harmony export */   "HttpResponse": function() { return /* binding */ HttpResponse; },
/* harmony export */   "HttpResponseBase": function() { return /* binding */ HttpResponseBase; },
/* harmony export */   "HttpUrlEncodingCodec": function() { return /* binding */ HttpUrlEncodingCodec; },
/* harmony export */   "HttpXhrBackend": function() { return /* binding */ HttpXhrBackend; },
/* harmony export */   "HttpXsrfTokenExtractor": function() { return /* binding */ HttpXsrfTokenExtractor; },
/* harmony export */   "JsonpClientBackend": function() { return /* binding */ JsonpClientBackend; },
/* harmony export */   "JsonpInterceptor": function() { return /* binding */ JsonpInterceptor; },
/* harmony export */   "XhrFactory": function() { return /* binding */ XhrFactory; },
/* harmony export */   "ɵHttpInterceptingHandler": function() { return /* binding */ HttpInterceptingHandler; },
/* harmony export */   "ɵangular_packages_common_http_http_a": function() { return /* binding */ NoopInterceptor; },
/* harmony export */   "ɵangular_packages_common_http_http_b": function() { return /* binding */ JsonpCallbackContext; },
/* harmony export */   "ɵangular_packages_common_http_http_c": function() { return /* binding */ jsonpCallbackContext; },
/* harmony export */   "ɵangular_packages_common_http_http_d": function() { return /* binding */ XSRF_COOKIE_NAME; },
/* harmony export */   "ɵangular_packages_common_http_http_e": function() { return /* binding */ XSRF_HEADER_NAME; },
/* harmony export */   "ɵangular_packages_common_http_http_f": function() { return /* binding */ HttpXsrfCookieExtractor; },
/* harmony export */   "ɵangular_packages_common_http_http_g": function() { return /* binding */ HttpXsrfInterceptor; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 93806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 96900);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 53920);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 73645);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 86000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 27130);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 48740);
/**
 * @license Angular v12.2.0
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */






/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Transforms an `HttpRequest` into a stream of `HttpEvent`s, one of which will likely be a
 * `HttpResponse`.
 *
 * `HttpHandler` is injectable. When injected, the handler instance dispatches requests to the
 * first interceptor in the chain, which dispatches to the second, etc, eventually reaching the
 * `HttpBackend`.
 *
 * In an `HttpInterceptor`, the `HttpHandler` parameter is the next interceptor in the chain.
 *
 * @publicApi
 */


class HttpHandler {
}
/**
 * A final `HttpHandler` which will dispatch the request via browser HTTP APIs to a backend.
 *
 * Interceptors sit between the `HttpClient` interface and the `HttpBackend`.
 *
 * When injected, `HttpBackend` dispatches requests directly to the backend, without going
 * through the interceptor chain.
 *
 * @publicApi
 */
class HttpBackend {
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Represents the header configuration options for an HTTP request.
 * Instances are immutable. Modifying methods return a cloned
 * instance with the change. The original object is never changed.
 *
 * @publicApi
 */
class HttpHeaders {
    /**  Constructs a new HTTP header object with the given values.*/
    constructor(headers) {
        /**
         * Internal map of lowercased header names to the normalized
         * form of the name (the form seen first).
         */
        this.normalizedNames = new Map();
        /**
         * Queued updates to be materialized the next initialization.
         */
        this.lazyUpdate = null;
        if (!headers) {
            this.headers = new Map();
        }
        else if (typeof headers === 'string') {
            this.lazyInit = () => {
                this.headers = new Map();
                headers.split('\n').forEach(line => {
                    const index = line.indexOf(':');
                    if (index > 0) {
                        const name = line.slice(0, index);
                        const key = name.toLowerCase();
                        const value = line.slice(index + 1).trim();
                        this.maybeSetNormalizedName(name, key);
                        if (this.headers.has(key)) {
                            this.headers.get(key).push(value);
                        }
                        else {
                            this.headers.set(key, [value]);
                        }
                    }
                });
            };
        }
        else {
            this.lazyInit = () => {
                this.headers = new Map();
                Object.keys(headers).forEach(name => {
                    let values = headers[name];
                    const key = name.toLowerCase();
                    if (typeof values === 'string') {
                        values = [values];
                    }
                    if (values.length > 0) {
                        this.headers.set(key, values);
                        this.maybeSetNormalizedName(name, key);
                    }
                });
            };
        }
    }
    /**
     * Checks for existence of a given header.
     *
     * @param name The header name to check for existence.
     *
     * @returns True if the header exists, false otherwise.
     */
    has(name) {
        this.init();
        return this.headers.has(name.toLowerCase());
    }
    /**
     * Retrieves the first value of a given header.
     *
     * @param name The header name.
     *
     * @returns The value string if the header exists, null otherwise
     */
    get(name) {
        this.init();
        const values = this.headers.get(name.toLowerCase());
        return values && values.length > 0 ? values[0] : null;
    }
    /**
     * Retrieves the names of the headers.
     *
     * @returns A list of header names.
     */
    keys() {
        this.init();
        return Array.from(this.normalizedNames.values());
    }
    /**
     * Retrieves a list of values for a given header.
     *
     * @param name The header name from which to retrieve values.
     *
     * @returns A string of values if the header exists, null otherwise.
     */
    getAll(name) {
        this.init();
        return this.headers.get(name.toLowerCase()) || null;
    }
    /**
     * Appends a new value to the existing set of values for a header
     * and returns them in a clone of the original instance.
     *
     * @param name The header name for which to append the values.
     * @param value The value to append.
     *
     * @returns A clone of the HTTP headers object with the value appended to the given header.
     */
    append(name, value) {
        return this.clone({ name, value, op: 'a' });
    }
    /**
     * Sets or modifies a value for a given header in a clone of the original instance.
     * If the header already exists, its value is replaced with the given value
     * in the returned object.
     *
     * @param name The header name.
     * @param value The value or values to set or overide for the given header.
     *
     * @returns A clone of the HTTP headers object with the newly set header value.
     */
    set(name, value) {
        return this.clone({ name, value, op: 's' });
    }
    /**
     * Deletes values for a given header in a clone of the original instance.
     *
     * @param name The header name.
     * @param value The value or values to delete for the given header.
     *
     * @returns A clone of the HTTP headers object with the given value deleted.
     */
    delete(name, value) {
        return this.clone({ name, value, op: 'd' });
    }
    maybeSetNormalizedName(name, lcName) {
        if (!this.normalizedNames.has(lcName)) {
            this.normalizedNames.set(lcName, name);
        }
    }
    init() {
        if (!!this.lazyInit) {
            if (this.lazyInit instanceof HttpHeaders) {
                this.copyFrom(this.lazyInit);
            }
            else {
                this.lazyInit();
            }
            this.lazyInit = null;
            if (!!this.lazyUpdate) {
                this.lazyUpdate.forEach(update => this.applyUpdate(update));
                this.lazyUpdate = null;
            }
        }
    }
    copyFrom(other) {
        other.init();
        Array.from(other.headers.keys()).forEach(key => {
            this.headers.set(key, other.headers.get(key));
            this.normalizedNames.set(key, other.normalizedNames.get(key));
        });
    }
    clone(update) {
        const clone = new HttpHeaders();
        clone.lazyInit =
            (!!this.lazyInit && this.lazyInit instanceof HttpHeaders) ? this.lazyInit : this;
        clone.lazyUpdate = (this.lazyUpdate || []).concat([update]);
        return clone;
    }
    applyUpdate(update) {
        const key = update.name.toLowerCase();
        switch (update.op) {
            case 'a':
            case 's':
                let value = update.value;
                if (typeof value === 'string') {
                    value = [value];
                }
                if (value.length === 0) {
                    return;
                }
                this.maybeSetNormalizedName(update.name, key);
                const base = (update.op === 'a' ? this.headers.get(key) : undefined) || [];
                base.push(...value);
                this.headers.set(key, base);
                break;
            case 'd':
                const toDelete = update.value;
                if (!toDelete) {
                    this.headers.delete(key);
                    this.normalizedNames.delete(key);
                }
                else {
                    let existing = this.headers.get(key);
                    if (!existing) {
                        return;
                    }
                    existing = existing.filter(value => toDelete.indexOf(value) === -1);
                    if (existing.length === 0) {
                        this.headers.delete(key);
                        this.normalizedNames.delete(key);
                    }
                    else {
                        this.headers.set(key, existing);
                    }
                }
                break;
        }
    }
    /**
     * @internal
     */
    forEach(fn) {
        this.init();
        Array.from(this.normalizedNames.keys())
            .forEach(key => fn(this.normalizedNames.get(key), this.headers.get(key)));
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Provides encoding and decoding of URL parameter and query-string values.
 *
 * Serializes and parses URL parameter keys and values to encode and decode them.
 * If you pass URL query parameters without encoding,
 * the query parameters can be misinterpreted at the receiving end.
 *
 *
 * @publicApi
 */
class HttpUrlEncodingCodec {
    /**
     * Encodes a key name for a URL parameter or query-string.
     * @param key The key name.
     * @returns The encoded key name.
     */
    encodeKey(key) {
        return standardEncoding(key);
    }
    /**
     * Encodes the value of a URL parameter or query-string.
     * @param value The value.
     * @returns The encoded value.
     */
    encodeValue(value) {
        return standardEncoding(value);
    }
    /**
     * Decodes an encoded URL parameter or query-string key.
     * @param key The encoded key name.
     * @returns The decoded key name.
     */
    decodeKey(key) {
        return decodeURIComponent(key);
    }
    /**
     * Decodes an encoded URL parameter or query-string value.
     * @param value The encoded value.
     * @returns The decoded value.
     */
    decodeValue(value) {
        return decodeURIComponent(value);
    }
}
function paramParser(rawParams, codec) {
    const map = new Map();
    if (rawParams.length > 0) {
        // The `window.location.search` can be used while creating an instance of the `HttpParams` class
        // (e.g. `new HttpParams({ fromString: window.location.search })`). The `window.location.search`
        // may start with the `?` char, so we strip it if it's present.
        const params = rawParams.replace(/^\?/, '').split('&');
        params.forEach((param) => {
            const eqIdx = param.indexOf('=');
            const [key, val] = eqIdx == -1 ?
                [codec.decodeKey(param), ''] :
                [codec.decodeKey(param.slice(0, eqIdx)), codec.decodeValue(param.slice(eqIdx + 1))];
            const list = map.get(key) || [];
            list.push(val);
            map.set(key, list);
        });
    }
    return map;
}
function standardEncoding(v) {
    return encodeURIComponent(v)
        .replace(/%40/gi, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/gi, '$')
        .replace(/%2C/gi, ',')
        .replace(/%3B/gi, ';')
        .replace(/%2B/gi, '+')
        .replace(/%3D/gi, '=')
        .replace(/%3F/gi, '?')
        .replace(/%2F/gi, '/');
}
function valueToString(value) {
    return `${value}`;
}
/**
 * An HTTP request/response body that represents serialized parameters,
 * per the MIME type `application/x-www-form-urlencoded`.
 *
 * This class is immutable; all mutation operations return a new instance.
 *
 * @publicApi
 */
class HttpParams {
    constructor(options = {}) {
        this.updates = null;
        this.cloneFrom = null;
        this.encoder = options.encoder || new HttpUrlEncodingCodec();
        if (!!options.fromString) {
            if (!!options.fromObject) {
                throw new Error(`Cannot specify both fromString and fromObject.`);
            }
            this.map = paramParser(options.fromString, this.encoder);
        }
        else if (!!options.fromObject) {
            this.map = new Map();
            Object.keys(options.fromObject).forEach(key => {
                const value = options.fromObject[key];
                this.map.set(key, Array.isArray(value) ? value : [value]);
            });
        }
        else {
            this.map = null;
        }
    }
    /**
     * Reports whether the body includes one or more values for a given parameter.
     * @param param The parameter name.
     * @returns True if the parameter has one or more values,
     * false if it has no value or is not present.
     */
    has(param) {
        this.init();
        return this.map.has(param);
    }
    /**
     * Retrieves the first value for a parameter.
     * @param param The parameter name.
     * @returns The first value of the given parameter,
     * or `null` if the parameter is not present.
     */
    get(param) {
        this.init();
        const res = this.map.get(param);
        return !!res ? res[0] : null;
    }
    /**
     * Retrieves all values for a  parameter.
     * @param param The parameter name.
     * @returns All values in a string array,
     * or `null` if the parameter not present.
     */
    getAll(param) {
        this.init();
        return this.map.get(param) || null;
    }
    /**
     * Retrieves all the parameters for this body.
     * @returns The parameter names in a string array.
     */
    keys() {
        this.init();
        return Array.from(this.map.keys());
    }
    /**
     * Appends a new value to existing values for a parameter.
     * @param param The parameter name.
     * @param value The new value to add.
     * @return A new body with the appended value.
     */
    append(param, value) {
        return this.clone({ param, value, op: 'a' });
    }
    /**
     * Constructs a new body with appended values for the given parameter name.
     * @param params parameters and values
     * @return A new body with the new value.
     */
    appendAll(params) {
        const updates = [];
        Object.keys(params).forEach(param => {
            const value = params[param];
            if (Array.isArray(value)) {
                value.forEach(_value => {
                    updates.push({ param, value: _value, op: 'a' });
                });
            }
            else {
                updates.push({ param, value: value, op: 'a' });
            }
        });
        return this.clone(updates);
    }
    /**
     * Replaces the value for a parameter.
     * @param param The parameter name.
     * @param value The new value.
     * @return A new body with the new value.
     */
    set(param, value) {
        return this.clone({ param, value, op: 's' });
    }
    /**
     * Removes a given value or all values from a parameter.
     * @param param The parameter name.
     * @param value The value to remove, if provided.
     * @return A new body with the given value removed, or with all values
     * removed if no value is specified.
     */
    delete(param, value) {
        return this.clone({ param, value, op: 'd' });
    }
    /**
     * Serializes the body to an encoded string, where key-value pairs (separated by `=`) are
     * separated by `&`s.
     */
    toString() {
        this.init();
        return this.keys()
            .map(key => {
            const eKey = this.encoder.encodeKey(key);
            // `a: ['1']` produces `'a=1'`
            // `b: []` produces `''`
            // `c: ['1', '2']` produces `'c=1&c=2'`
            return this.map.get(key).map(value => eKey + '=' + this.encoder.encodeValue(value))
                .join('&');
        })
            // filter out empty values because `b: []` produces `''`
            // which results in `a=1&&c=1&c=2` instead of `a=1&c=1&c=2` if we don't
            .filter(param => param !== '')
            .join('&');
    }
    clone(update) {
        const clone = new HttpParams({ encoder: this.encoder });
        clone.cloneFrom = this.cloneFrom || this;
        clone.updates = (this.updates || []).concat(update);
        return clone;
    }
    init() {
        if (this.map === null) {
            this.map = new Map();
        }
        if (this.cloneFrom !== null) {
            this.cloneFrom.init();
            this.cloneFrom.keys().forEach(key => this.map.set(key, this.cloneFrom.map.get(key)));
            this.updates.forEach(update => {
                switch (update.op) {
                    case 'a':
                    case 's':
                        const base = (update.op === 'a' ? this.map.get(update.param) : undefined) || [];
                        base.push(valueToString(update.value));
                        this.map.set(update.param, base);
                        break;
                    case 'd':
                        if (update.value !== undefined) {
                            let base = this.map.get(update.param) || [];
                            const idx = base.indexOf(valueToString(update.value));
                            if (idx !== -1) {
                                base.splice(idx, 1);
                            }
                            if (base.length > 0) {
                                this.map.set(update.param, base);
                            }
                            else {
                                this.map.delete(update.param);
                            }
                        }
                        else {
                            this.map.delete(update.param);
                            break;
                        }
                }
            });
            this.cloneFrom = this.updates = null;
        }
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A token used to manipulate and access values stored in `HttpContext`.
 *
 * @publicApi
 */
class HttpContextToken {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
}
/**
 * Http context stores arbitrary user defined values and ensures type safety without
 * actually knowing the types. It is backed by a `Map` and guarantees that keys do not clash.
 *
 * This context is mutable and is shared between cloned requests unless explicitly specified.
 *
 * @usageNotes
 *
 * ### Usage Example
 *
 * ```typescript
 * // inside cache.interceptors.ts
 * export const IS_CACHE_ENABLED = new HttpContextToken<boolean>(() => false);
 *
 * export class CacheInterceptor implements HttpInterceptor {
 *
 *   intercept(req: HttpRequest<any>, delegate: HttpHandler): Observable<HttpEvent<any>> {
 *     if (req.context.get(IS_CACHE_ENABLED) === true) {
 *       return ...;
 *     }
 *     return delegate.handle(req);
 *   }
 * }
 *
 * // inside a service
 *
 * this.httpClient.get('/api/weather', {
 *   context: new HttpContext().set(IS_CACHE_ENABLED, true)
 * }).subscribe(...);
 * ```
 *
 * @publicApi
 */
class HttpContext {
    constructor() {
        this.map = new Map();
    }
    /**
     * Store a value in the context. If a value is already present it will be overwritten.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     * @param value The value to store.
     *
     * @returns A reference to itself for easy chaining.
     */
    set(token, value) {
        this.map.set(token, value);
        return this;
    }
    /**
     * Retrieve the value associated with the given token.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     *
     * @returns The stored value or default if one is defined.
     */
    get(token) {
        if (!this.map.has(token)) {
            this.map.set(token, token.defaultValue());
        }
        return this.map.get(token);
    }
    /**
     * Delete the value associated with the given token.
     *
     * @param token The reference to an instance of `HttpContextToken`.
     *
     * @returns A reference to itself for easy chaining.
     */
    delete(token) {
        this.map.delete(token);
        return this;
    }
    /**
     * @returns a list of tokens currently stored in the context.
     */
    keys() {
        return this.map.keys();
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Determine whether the given HTTP method may include a body.
 */
function mightHaveBody(method) {
    switch (method) {
        case 'DELETE':
        case 'GET':
        case 'HEAD':
        case 'OPTIONS':
        case 'JSONP':
            return false;
        default:
            return true;
    }
}
/**
 * Safely assert whether the given value is an ArrayBuffer.
 *
 * In some execution environments ArrayBuffer is not defined.
 */
function isArrayBuffer(value) {
    return typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer;
}
/**
 * Safely assert whether the given value is a Blob.
 *
 * In some execution environments Blob is not defined.
 */
function isBlob(value) {
    return typeof Blob !== 'undefined' && value instanceof Blob;
}
/**
 * Safely assert whether the given value is a FormData instance.
 *
 * In some execution environments FormData is not defined.
 */
function isFormData(value) {
    return typeof FormData !== 'undefined' && value instanceof FormData;
}
/**
 * Safely assert whether the given value is a URLSearchParams instance.
 *
 * In some execution environments URLSearchParams is not defined.
 */
function isUrlSearchParams(value) {
    return typeof URLSearchParams !== 'undefined' && value instanceof URLSearchParams;
}
/**
 * An outgoing HTTP request with an optional typed body.
 *
 * `HttpRequest` represents an outgoing request, including URL, method,
 * headers, body, and other request configuration options. Instances should be
 * assumed to be immutable. To modify a `HttpRequest`, the `clone`
 * method should be used.
 *
 * @publicApi
 */
class HttpRequest {
    constructor(method, url, third, fourth) {
        this.url = url;
        /**
         * The request body, or `null` if one isn't set.
         *
         * Bodies are not enforced to be immutable, as they can include a reference to any
         * user-defined data type. However, interceptors should take care to preserve
         * idempotence by treating them as such.
         */
        this.body = null;
        /**
         * Whether this request should be made in a way that exposes progress events.
         *
         * Progress events are expensive (change detection runs on each event) and so
         * they should only be requested if the consumer intends to monitor them.
         */
        this.reportProgress = false;
        /**
         * Whether this request should be sent with outgoing credentials (cookies).
         */
        this.withCredentials = false;
        /**
         * The expected response type of the server.
         *
         * This is used to parse the response appropriately before returning it to
         * the requestee.
         */
        this.responseType = 'json';
        this.method = method.toUpperCase();
        // Next, need to figure out which argument holds the HttpRequestInit
        // options, if any.
        let options;
        // Check whether a body argument is expected. The only valid way to omit
        // the body argument is to use a known no-body method like GET.
        if (mightHaveBody(this.method) || !!fourth) {
            // Body is the third argument, options are the fourth.
            this.body = (third !== undefined) ? third : null;
            options = fourth;
        }
        else {
            // No body required, options are the third argument. The body stays null.
            options = third;
        }
        // If options have been passed, interpret them.
        if (options) {
            // Normalize reportProgress and withCredentials.
            this.reportProgress = !!options.reportProgress;
            this.withCredentials = !!options.withCredentials;
            // Override default response type of 'json' if one is provided.
            if (!!options.responseType) {
                this.responseType = options.responseType;
            }
            // Override headers if they're provided.
            if (!!options.headers) {
                this.headers = options.headers;
            }
            if (!!options.context) {
                this.context = options.context;
            }
            if (!!options.params) {
                this.params = options.params;
            }
        }
        // If no headers have been passed in, construct a new HttpHeaders instance.
        if (!this.headers) {
            this.headers = new HttpHeaders();
        }
        // If no context have been passed in, construct a new HttpContext instance.
        if (!this.context) {
            this.context = new HttpContext();
        }
        // If no parameters have been passed in, construct a new HttpUrlEncodedParams instance.
        if (!this.params) {
            this.params = new HttpParams();
            this.urlWithParams = url;
        }
        else {
            // Encode the parameters to a string in preparation for inclusion in the URL.
            const params = this.params.toString();
            if (params.length === 0) {
                // No parameters, the visible URL is just the URL given at creation time.
                this.urlWithParams = url;
            }
            else {
                // Does the URL already have query parameters? Look for '?'.
                const qIdx = url.indexOf('?');
                // There are 3 cases to handle:
                // 1) No existing parameters -> append '?' followed by params.
                // 2) '?' exists and is followed by existing query string ->
                //    append '&' followed by params.
                // 3) '?' exists at the end of the url -> append params directly.
                // This basically amounts to determining the character, if any, with
                // which to join the URL and parameters.
                const sep = qIdx === -1 ? '?' : (qIdx < url.length - 1 ? '&' : '');
                this.urlWithParams = url + sep + params;
            }
        }
    }
    /**
     * Transform the free-form body into a serialized format suitable for
     * transmission to the server.
     */
    serializeBody() {
        // If no body is present, no need to serialize it.
        if (this.body === null) {
            return null;
        }
        // Check whether the body is already in a serialized form. If so,
        // it can just be returned directly.
        if (isArrayBuffer(this.body) || isBlob(this.body) || isFormData(this.body) ||
            isUrlSearchParams(this.body) || typeof this.body === 'string') {
            return this.body;
        }
        // Check whether the body is an instance of HttpUrlEncodedParams.
        if (this.body instanceof HttpParams) {
            return this.body.toString();
        }
        // Check whether the body is an object or array, and serialize with JSON if so.
        if (typeof this.body === 'object' || typeof this.body === 'boolean' ||
            Array.isArray(this.body)) {
            return JSON.stringify(this.body);
        }
        // Fall back on toString() for everything else.
        return this.body.toString();
    }
    /**
     * Examine the body and attempt to infer an appropriate MIME type
     * for it.
     *
     * If no such type can be inferred, this method will return `null`.
     */
    detectContentTypeHeader() {
        // An empty body has no content type.
        if (this.body === null) {
            return null;
        }
        // FormData bodies rely on the browser's content type assignment.
        if (isFormData(this.body)) {
            return null;
        }
        // Blobs usually have their own content type. If it doesn't, then
        // no type can be inferred.
        if (isBlob(this.body)) {
            return this.body.type || null;
        }
        // Array buffers have unknown contents and thus no type can be inferred.
        if (isArrayBuffer(this.body)) {
            return null;
        }
        // Technically, strings could be a form of JSON data, but it's safe enough
        // to assume they're plain strings.
        if (typeof this.body === 'string') {
            return 'text/plain';
        }
        // `HttpUrlEncodedParams` has its own content-type.
        if (this.body instanceof HttpParams) {
            return 'application/x-www-form-urlencoded;charset=UTF-8';
        }
        // Arrays, objects, boolean and numbers will be encoded as JSON.
        if (typeof this.body === 'object' || typeof this.body === 'number' ||
            typeof this.body === 'boolean') {
            return 'application/json';
        }
        // No type could be inferred.
        return null;
    }
    clone(update = {}) {
        var _a;
        // For method, url, and responseType, take the current value unless
        // it is overridden in the update hash.
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        // The body is somewhat special - a `null` value in update.body means
        // whatever current body is present is being overridden with an empty
        // body, whereas an `undefined` value in update.body implies no
        // override.
        const body = (update.body !== undefined) ? update.body : this.body;
        // Carefully handle the boolean options to differentiate between
        // `false` and `undefined` in the update args.
        const withCredentials = (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        const reportProgress = (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        // Headers and params may be appended to if `setHeaders` or
        // `setParams` are used.
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        // Pass on context if needed
        const context = (_a = update.context) !== null && _a !== void 0 ? _a : this.context;
        // Check whether the caller has asked to add headers.
        if (update.setHeaders !== undefined) {
            // Set every requested header.
            headers =
                Object.keys(update.setHeaders)
                    .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
        }
        // Check whether the caller has asked to set params.
        if (update.setParams) {
            // Set every requested param.
            params = Object.keys(update.setParams)
                .reduce((params, param) => params.set(param, update.setParams[param]), params);
        }
        // Finally, construct the new HttpRequest using the pieces from above.
        return new HttpRequest(method, url, body, {
            params,
            headers,
            context,
            reportProgress,
            responseType,
            withCredentials,
        });
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Type enumeration for the different kinds of `HttpEvent`.
 *
 * @publicApi
 */
var HttpEventType;
(function (HttpEventType) {
    /**
     * The request was sent out over the wire.
     */
    HttpEventType[HttpEventType["Sent"] = 0] = "Sent";
    /**
     * An upload progress event was received.
     */
    HttpEventType[HttpEventType["UploadProgress"] = 1] = "UploadProgress";
    /**
     * The response status code and headers were received.
     */
    HttpEventType[HttpEventType["ResponseHeader"] = 2] = "ResponseHeader";
    /**
     * A download progress event was received.
     */
    HttpEventType[HttpEventType["DownloadProgress"] = 3] = "DownloadProgress";
    /**
     * The full response including the body was received.
     */
    HttpEventType[HttpEventType["Response"] = 4] = "Response";
    /**
     * A custom event from an interceptor or a backend.
     */
    HttpEventType[HttpEventType["User"] = 5] = "User";
})(HttpEventType || (HttpEventType = {}));
/**
 * Base class for both `HttpResponse` and `HttpHeaderResponse`.
 *
 * @publicApi
 */
class HttpResponseBase {
    /**
     * Super-constructor for all responses.
     *
     * The single parameter accepted is an initialization hash. Any properties
     * of the response passed there will override the default values.
     */
    constructor(init, defaultStatus = 200 /* Ok */, defaultStatusText = 'OK') {
        // If the hash has values passed, use them to initialize the response.
        // Otherwise use the default values.
        this.headers = init.headers || new HttpHeaders();
        this.status = init.status !== undefined ? init.status : defaultStatus;
        this.statusText = init.statusText || defaultStatusText;
        this.url = init.url || null;
        // Cache the ok value to avoid defining a getter.
        this.ok = this.status >= 200 && this.status < 300;
    }
}
/**
 * A partial HTTP response which only includes the status and header data,
 * but no response body.
 *
 * `HttpHeaderResponse` is a `HttpEvent` available on the response
 * event stream, only when progress events are requested.
 *
 * @publicApi
 */
class HttpHeaderResponse extends HttpResponseBase {
    /**
     * Create a new `HttpHeaderResponse` with the given parameters.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.ResponseHeader;
    }
    /**
     * Copy this `HttpHeaderResponse`, overriding its contents with the
     * given parameter hash.
     */
    clone(update = {}) {
        // Perform a straightforward initialization of the new HttpHeaderResponse,
        // overriding the current parameters with new ones if given.
        return new HttpHeaderResponse({
            headers: update.headers || this.headers,
            status: update.status !== undefined ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A full HTTP response, including a typed response body (which may be `null`
 * if one was not returned).
 *
 * `HttpResponse` is a `HttpEvent` available on the response event
 * stream.
 *
 * @publicApi
 */
class HttpResponse extends HttpResponseBase {
    /**
     * Construct a new `HttpResponse`.
     */
    constructor(init = {}) {
        super(init);
        this.type = HttpEventType.Response;
        this.body = init.body !== undefined ? init.body : null;
    }
    clone(update = {}) {
        return new HttpResponse({
            body: (update.body !== undefined) ? update.body : this.body,
            headers: update.headers || this.headers,
            status: (update.status !== undefined) ? update.status : this.status,
            statusText: update.statusText || this.statusText,
            url: update.url || this.url || undefined,
        });
    }
}
/**
 * A response that represents an error or failure, either from a
 * non-successful HTTP status, an error while executing the request,
 * or some other failure which occurred during the parsing of the response.
 *
 * Any error returned on the `Observable` response stream will be
 * wrapped in an `HttpErrorResponse` to provide additional context about
 * the state of the HTTP layer when the error occurred. The error property
 * will contain either a wrapped Error object or the error response returned
 * from the server.
 *
 * @publicApi
 */
class HttpErrorResponse extends HttpResponseBase {
    constructor(init) {
        // Initialize with a default status of 0 / Unknown Error.
        super(init, 0, 'Unknown Error');
        this.name = 'HttpErrorResponse';
        /**
         * Errors are never okay, even when the status code is in the 2xx success range.
         */
        this.ok = false;
        // If the response was successful, then this was a parse error. Otherwise, it was
        // a protocol-level failure of some sort. Either the request failed in transit
        // or the server returned an unsuccessful status code.
        if (this.status >= 200 && this.status < 300) {
            this.message = `Http failure during parsing for ${init.url || '(unknown url)'}`;
        }
        else {
            this.message = `Http failure response for ${init.url || '(unknown url)'}: ${init.status} ${init.statusText}`;
        }
        this.error = init.error || null;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Constructs an instance of `HttpRequestOptions<T>` from a source `HttpMethodOptions` and
 * the given `body`. This function clones the object and adds the body.
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.
 *
 */
function addBody(options, body) {
    return {
        body,
        headers: options.headers,
        context: options.context,
        observe: options.observe,
        params: options.params,
        reportProgress: options.reportProgress,
        responseType: options.responseType,
        withCredentials: options.withCredentials,
    };
}
/**
 * Performs HTTP requests.
 * This service is available as an injectable class, with methods to perform HTTP requests.
 * Each request method has multiple signatures, and the return type varies based on
 * the signature that is called (mainly the values of `observe` and `responseType`).
 *
 * Note that the `responseType` *options* value is a String that identifies the
 * single data type of the response.
 * A single overload version of the method handles each response type.
 * The value of `responseType` cannot be a union, as the combined signature could imply.

 *
 * @usageNotes
 * Sample HTTP requests for the [Tour of Heroes](/tutorial/toh-pt0) application.
 *
 * ### HTTP Request Example
 *
 * ```
 *  // GET heroes whose name contains search term
 * searchHeroes(term: string): observable<Hero[]>{
 *
 *  const params = new HttpParams({fromString: 'name=term'});
 *    return this.httpClient.request('GET', this.heroesUrl, {responseType:'json', params});
 * }
 * ```
 *
 * Alternatively, the parameter string can be used without invoking HttpParams
 * by directly joining to the URL.
 * ```
 * this.httpClient.request('GET', this.heroesUrl + '?' + 'name=term', {responseType:'json'});
 * ```
 *
 *
 * ### JSONP Example
 * ```
 * requestJsonp(url, callback = 'callback') {
 *  return this.httpClient.jsonp(this.heroesURL, callback);
 * }
 * ```
 *
 * ### PATCH Example
 * ```
 * // PATCH one of the heroes' name
 * patchHero (id: number, heroName: string): Observable<{}> {
 * const url = `${this.heroesUrl}/${id}`;   // PATCH api/heroes/42
 *  return this.httpClient.patch(url, {name: heroName}, httpOptions)
 *    .pipe(catchError(this.handleError('patchHero')));
 * }
 * ```
 *
 * @see [HTTP Guide](guide/http)
 * @see [HTTP Request](api/common/http/HttpRequest)
 *
 * @publicApi
 */
class HttpClient {
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Constructs an observable for a generic HTTP request that, when subscribed,
     * fires the request through the chain of registered interceptors and on to the
     * server.
     *
     * You can pass an `HttpRequest` directly as the only parameter. In this case,
     * the call returns an observable of the raw `HttpEvent` stream.
     *
     * Alternatively you can pass an HTTP method as the first parameter,
     * a URL string as the second, and an options hash containing the request body as the third.
     * See `addBody()`. In this case, the specified `responseType` and `observe` options determine the
     * type of returned observable.
     *   * The `responseType` value determines how a successful response body is parsed.
     *   * If `responseType` is the default `json`, you can pass a type interface for the resulting
     * object as a type parameter to the call.
     *
     * The `observe` value determines the return type, according to what you are interested in
     * observing.
     *   * An `observe` value of events returns an observable of the raw `HttpEvent` stream, including
     * progress events by default.
     *   * An `observe` value of response returns an observable of `HttpResponse<T>`,
     * where the `T` parameter depends on the `responseType` and any optionally provided type
     * parameter.
     *   * An `observe` value of body returns an observable of `<T>` with the same `T` body type.
     *
     */
    request(first, url, options = {}) {
        let req;
        // First, check whether the primary argument is an instance of `HttpRequest`.
        if (first instanceof HttpRequest) {
            // It is. The other arguments must be undefined (per the signatures) and can be
            // ignored.
            req = first;
        }
        else {
            // It's a string, so it represents a URL. Construct a request based on it,
            // and incorporate the remaining arguments (assuming `GET` unless a method is
            // provided.
            // Figure out the headers.
            let headers = undefined;
            if (options.headers instanceof HttpHeaders) {
                headers = options.headers;
            }
            else {
                headers = new HttpHeaders(options.headers);
            }
            // Sort out parameters.
            let params = undefined;
            if (!!options.params) {
                if (options.params instanceof HttpParams) {
                    params = options.params;
                }
                else {
                    params = new HttpParams({ fromObject: options.params });
                }
            }
            // Construct the request.
            req = new HttpRequest(first, url, (options.body !== undefined ? options.body : null), {
                headers,
                context: options.context,
                params,
                reportProgress: options.reportProgress,
                // By default, JSON is assumed to be returned for all calls.
                responseType: options.responseType || 'json',
                withCredentials: options.withCredentials,
            });
        }
        // Start with an Observable.of() the initial request, and run the handler (which
        // includes all interceptors) inside a concatMap(). This way, the handler runs
        // inside an Observable chain, which causes interceptors to be re-run on every
        // subscription (this also makes retries re-run the handler, including interceptors).
        const events$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.concatMap)((req) => this.handler.handle(req)));
        // If coming via the API signature which accepts a previously constructed HttpRequest,
        // the only option is to get the event stream. Otherwise, return the event stream if
        // that is what was requested.
        if (first instanceof HttpRequest || options.observe === 'events') {
            return events$;
        }
        // The requested stream contains either the full response or the body. In either
        // case, the first step is to filter the event stream to extract a stream of
        // responses(s).
        const res$ = events$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)((event) => event instanceof HttpResponse));
        // Decide which stream to return.
        switch (options.observe || 'body') {
            case 'body':
                // The requested stream is the body. Map the response stream to the response
                // body. This could be done more simply, but a misbehaving interceptor might
                // transform the response body into a different format and ignore the requested
                // responseType. Guard against this by validating that the response is of the
                // requested type.
                switch (req.responseType) {
                    case 'arraybuffer':
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                            // Validate that the body is an ArrayBuffer.
                            if (res.body !== null && !(res.body instanceof ArrayBuffer)) {
                                throw new Error('Response is not an ArrayBuffer.');
                            }
                            return res.body;
                        }));
                    case 'blob':
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                            // Validate that the body is a Blob.
                            if (res.body !== null && !(res.body instanceof Blob)) {
                                throw new Error('Response is not a Blob.');
                            }
                            return res.body;
                        }));
                    case 'text':
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => {
                            // Validate that the body is a string.
                            if (res.body !== null && typeof res.body !== 'string') {
                                throw new Error('Response is not a string.');
                            }
                            return res.body;
                        }));
                    case 'json':
                    default:
                        // No validation needed for JSON responses, as they can be of any type.
                        return res$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((res) => res.body));
                }
            case 'response':
                // The response stream was requested directly, so return it.
                return res$;
            default:
                // Guard against new future observe types being added.
                throw new Error(`Unreachable: unhandled observe type ${options.observe}}`);
        }
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `DELETE` request to execute on the server. See the individual overloads for
     * details on the return type.
     *
     * @param url     The endpoint URL.
     * @param options The HTTP options to send with the request.
     *
     */
    delete(url, options = {}) {
        return this.request('DELETE', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `GET` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    get(url, options = {}) {
        return this.request('GET', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `HEAD` request to execute on the server. The `HEAD` method returns
     * meta information about the resource without transferring the
     * resource itself. See the individual overloads for
     * details on the return type.
     */
    head(url, options = {}) {
        return this.request('HEAD', url, options);
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes a request with the special method
     * `JSONP` to be dispatched via the interceptor pipeline.
     * The [JSONP pattern](https://en.wikipedia.org/wiki/JSONP) works around limitations of certain
     * API endpoints that don't support newer,
     * and preferable [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) protocol.
     * JSONP treats the endpoint API as a JavaScript file and tricks the browser to process the
     * requests even if the API endpoint is not located on the same domain (origin) as the client-side
     * application making the request.
     * The endpoint API must support JSONP callback for JSONP requests to work.
     * The resource API returns the JSON response wrapped in a callback function.
     * You can pass the callback function name as one of the query parameters.
     * Note that JSONP requests can only be used with `GET` requests.
     *
     * @param url The resource URL.
     * @param callbackParam The callback function name.
     *
     */
    jsonp(url, callbackParam) {
        return this.request('JSONP', url, {
            params: new HttpParams().append(callbackParam, 'JSONP_CALLBACK'),
            observe: 'body',
            responseType: 'json',
        });
    }
    /**
     * Constructs an `Observable` that, when subscribed, causes the configured
     * `OPTIONS` request to execute on the server. This method allows the client
     * to determine the supported HTTP methods and other capabilites of an endpoint,
     * without implying a resource action. See the individual overloads for
     * details on the return type.
     */
    options(url, options = {}) {
        return this.request('OPTIONS', url, options);
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PATCH` request to execute on the server. See the individual overloads for
     * details on the return type.
     */
    patch(url, body, options = {}) {
        return this.request('PATCH', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `POST` request to execute on the server. The server responds with the location of
     * the replaced resource. See the individual overloads for
     * details on the return type.
     */
    post(url, body, options = {}) {
        return this.request('POST', url, addBody(options, body));
    }
    /**
     * Constructs an observable that, when subscribed, causes the configured
     * `PUT` request to execute on the server. The `PUT` method replaces an existing resource
     * with a new set of values.
     * See the individual overloads for details on the return type.
     */
    put(url, body, options = {}) {
        return this.request('PUT', url, addBody(options, body));
    }
}
HttpClient.ɵfac = function HttpClient_Factory(t) { return new (t || HttpClient)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpHandler)); };
HttpClient.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpClient, factory: HttpClient.ɵfac });
HttpClient.ctorParameters = () => [
    { type: HttpHandler }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClient, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: HttpHandler }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * `HttpHandler` which applies an `HttpInterceptor` to an `HttpRequest`.
 *
 *
 */
class HttpInterceptorHandler {
    constructor(next, interceptor) {
        this.next = next;
        this.interceptor = interceptor;
    }
    handle(req) {
        return this.interceptor.intercept(req, this.next);
    }
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
const HTTP_INTERCEPTORS = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('HTTP_INTERCEPTORS');
class NoopInterceptor {
    intercept(req, next) {
        return next.handle(req);
    }
}
NoopInterceptor.ɵfac = function NoopInterceptor_Factory(t) { return new (t || NoopInterceptor)(); };
NoopInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: NoopInterceptor, factory: NoopInterceptor.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](NoopInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Every request made through JSONP needs a callback name that's unique across the
// whole page. Each request is assigned an id and the callback name is constructed
// from that. The next id to be assigned is tracked in a global variable here that
// is shared among all applications on the page.
let nextRequestId = 0;
// Error text given when a JSONP script is injected, but doesn't invoke the callback
// passed in its URL.
const JSONP_ERR_NO_CALLBACK = 'JSONP injected script did not invoke callback.';
// Error text given when a request is passed to the JsonpClientBackend that doesn't
// have a request method JSONP.
const JSONP_ERR_WRONG_METHOD = 'JSONP requests must use JSONP request method.';
const JSONP_ERR_WRONG_RESPONSE_TYPE = 'JSONP requests must use Json response type.';
/**
 * DI token/abstract type representing a map of JSONP callbacks.
 *
 * In the browser, this should always be the `window` object.
 *
 *
 */
class JsonpCallbackContext {
}
/**
 * Processes an `HttpRequest` with the JSONP method,
 * by performing JSONP style requests.
 * @see `HttpHandler`
 * @see `HttpXhrBackend`
 *
 * @publicApi
 */
class JsonpClientBackend {
    constructor(callbackMap, document) {
        this.callbackMap = callbackMap;
        this.document = document;
        /**
         * A resolved promise that can be used to schedule microtasks in the event handlers.
         */
        this.resolvedPromise = Promise.resolve();
    }
    /**
     * Get the name of the next callback method, by incrementing the global `nextRequestId`.
     */
    nextCallback() {
        return `ng_jsonp_callback_${nextRequestId++}`;
    }
    /**
     * Processes a JSONP request and returns an event stream of the results.
     * @param req The request object.
     * @returns An observable of the response events.
     *
     */
    handle(req) {
        // Firstly, check both the method and response type. If either doesn't match
        // then the request was improperly routed here and cannot be handled.
        if (req.method !== 'JSONP') {
            throw new Error(JSONP_ERR_WRONG_METHOD);
        }
        else if (req.responseType !== 'json') {
            throw new Error(JSONP_ERR_WRONG_RESPONSE_TYPE);
        }
        // Everything else happens inside the Observable boundary.
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            // The first step to make a request is to generate the callback name, and replace the
            // callback placeholder in the URL with the name. Care has to be taken here to ensure
            // a trailing &, if matched, gets inserted back into the URL in the correct place.
            const callback = this.nextCallback();
            const url = req.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/, `=${callback}$1`);
            // Construct the <script> tag and point it at the URL.
            const node = this.document.createElement('script');
            node.src = url;
            // A JSONP request requires waiting for multiple callbacks. These variables
            // are closed over and track state across those callbacks.
            // The response object, if one has been received, or null otherwise.
            let body = null;
            // Whether the response callback has been called.
            let finished = false;
            // Whether the request has been cancelled (and thus any other callbacks)
            // should be ignored.
            let cancelled = false;
            // Set the response callback in this.callbackMap (which will be the window
            // object in the browser. The script being loaded via the <script> tag will
            // eventually call this callback.
            this.callbackMap[callback] = (data) => {
                // Data has been received from the JSONP script. Firstly, delete this callback.
                delete this.callbackMap[callback];
                // Next, make sure the request wasn't cancelled in the meantime.
                if (cancelled) {
                    return;
                }
                // Set state to indicate data was received.
                body = data;
                finished = true;
            };
            // cleanup() is a utility closure that removes the <script> from the page and
            // the response callback from the window. This logic is used in both the
            // success, error, and cancellation paths, so it's extracted out for convenience.
            const cleanup = () => {
                // Remove the <script> tag if it's still on the page.
                if (node.parentNode) {
                    node.parentNode.removeChild(node);
                }
                // Remove the response callback from the callbackMap (window object in the
                // browser).
                delete this.callbackMap[callback];
            };
            // onLoad() is the success callback which runs after the response callback
            // if the JSONP script loads successfully. The event itself is unimportant.
            // If something went wrong, onLoad() may run without the response callback
            // having been invoked.
            const onLoad = (event) => {
                // Do nothing if the request has been cancelled.
                if (cancelled) {
                    return;
                }
                // We wrap it in an extra Promise, to ensure the microtask
                // is scheduled after the loaded endpoint has executed any potential microtask itself,
                // which is not guaranteed in Internet Explorer and EdgeHTML. See issue #39496
                this.resolvedPromise.then(() => {
                    // Cleanup the page.
                    cleanup();
                    // Check whether the response callback has run.
                    if (!finished) {
                        // It hasn't, something went wrong with the request. Return an error via
                        // the Observable error path. All JSONP errors have status 0.
                        observer.error(new HttpErrorResponse({
                            url,
                            status: 0,
                            statusText: 'JSONP Error',
                            error: new Error(JSONP_ERR_NO_CALLBACK),
                        }));
                        return;
                    }
                    // Success. body either contains the response body or null if none was
                    // returned.
                    observer.next(new HttpResponse({
                        body,
                        status: 200 /* Ok */,
                        statusText: 'OK',
                        url,
                    }));
                    // Complete the stream, the response is over.
                    observer.complete();
                });
            };
            // onError() is the error callback, which runs if the script returned generates
            // a Javascript error. It emits the error via the Observable error channel as
            // a HttpErrorResponse.
            const onError = (error) => {
                // If the request was already cancelled, no need to emit anything.
                if (cancelled) {
                    return;
                }
                cleanup();
                // Wrap the error in a HttpErrorResponse.
                observer.error(new HttpErrorResponse({
                    error,
                    status: 0,
                    statusText: 'JSONP Error',
                    url,
                }));
            };
            // Subscribe to both the success (load) and error events on the <script> tag,
            // and add it to the page.
            node.addEventListener('load', onLoad);
            node.addEventListener('error', onError);
            this.document.body.appendChild(node);
            // The request has now been successfully sent.
            observer.next({ type: HttpEventType.Sent });
            // Cancellation handler.
            return () => {
                // Track the cancellation so event listeners won't do anything even if already scheduled.
                cancelled = true;
                // Remove the event listeners so they won't run if the events later fire.
                node.removeEventListener('load', onLoad);
                node.removeEventListener('error', onError);
                // And finally, clean up the page.
                cleanup();
            };
        });
    }
}
JsonpClientBackend.ɵfac = function JsonpClientBackend_Factory(t) { return new (t || JsonpClientBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpCallbackContext), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT)); };
JsonpClientBackend.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: JsonpClientBackend, factory: JsonpClientBackend.ɵfac });
JsonpClientBackend.ctorParameters = () => [
    { type: JsonpCallbackContext },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpClientBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: JsonpCallbackContext }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }] }]; }, null); })();
/**
 * Identifies requests with the method JSONP and
 * shifts them to the `JsonpClientBackend`.
 *
 * @see `HttpInterceptor`
 *
 * @publicApi
 */
class JsonpInterceptor {
    constructor(jsonp) {
        this.jsonp = jsonp;
    }
    /**
     * Identifies and handles a given JSONP request.
     * @param req The outgoing request object to handle.
     * @param next The next interceptor in the chain, or the backend
     * if no interceptors remain in the chain.
     * @returns An observable of the event stream.
     */
    intercept(req, next) {
        if (req.method === 'JSONP') {
            return this.jsonp.handle(req);
        }
        // Fall through for normal HTTP requests.
        return next.handle(req);
    }
}
JsonpInterceptor.ɵfac = function JsonpInterceptor_Factory(t) { return new (t || JsonpInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](JsonpClientBackend)); };
JsonpInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: JsonpInterceptor, factory: JsonpInterceptor.ɵfac });
JsonpInterceptor.ctorParameters = () => [
    { type: JsonpClientBackend }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](JsonpInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: JsonpClientBackend }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSSI_PREFIX = /^\)\]\}',?\n/;
/**
 * Determine an appropriate URL for the response, by checking either
 * XMLHttpRequest.responseURL or the X-Request-URL header.
 */
function getResponseUrl(xhr) {
    if ('responseURL' in xhr && xhr.responseURL) {
        return xhr.responseURL;
    }
    if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
        return xhr.getResponseHeader('X-Request-URL');
    }
    return null;
}
/**
 * Uses `XMLHttpRequest` to send requests to a backend server.
 * @see `HttpHandler`
 * @see `JsonpClientBackend`
 *
 * @publicApi
 */
class HttpXhrBackend {
    constructor(xhrFactory) {
        this.xhrFactory = xhrFactory;
    }
    /**
     * Processes a request and returns a stream of response events.
     * @param req The request object.
     * @returns An observable of the response events.
     */
    handle(req) {
        // Quick check to give a better error message when a user attempts to use
        // HttpClient.jsonp() without installing the HttpClientJsonpModule
        if (req.method === 'JSONP') {
            throw new Error(`Attempted to construct Jsonp request without HttpClientJsonpModule installed.`);
        }
        // Everything happens on Observable subscription.
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((observer) => {
            // Start by setting up the XHR object with request method, URL, and withCredentials flag.
            const xhr = this.xhrFactory.build();
            xhr.open(req.method, req.urlWithParams);
            if (!!req.withCredentials) {
                xhr.withCredentials = true;
            }
            // Add all the requested headers.
            req.headers.forEach((name, values) => xhr.setRequestHeader(name, values.join(',')));
            // Add an Accept header if one isn't present already.
            if (!req.headers.has('Accept')) {
                xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
            }
            // Auto-detect the Content-Type header if one isn't present already.
            if (!req.headers.has('Content-Type')) {
                const detectedType = req.detectContentTypeHeader();
                // Sometimes Content-Type detection fails.
                if (detectedType !== null) {
                    xhr.setRequestHeader('Content-Type', detectedType);
                }
            }
            // Set the responseType if one was requested.
            if (req.responseType) {
                const responseType = req.responseType.toLowerCase();
                // JSON responses need to be processed as text. This is because if the server
                // returns an XSSI-prefixed JSON response, the browser will fail to parse it,
                // xhr.response will be null, and xhr.responseText cannot be accessed to
                // retrieve the prefixed JSON data in order to strip the prefix. Thus, all JSON
                // is parsed by first requesting text and then applying JSON.parse.
                xhr.responseType = ((responseType !== 'json') ? responseType : 'text');
            }
            // Serialize the request body if one is present. If not, this will be set to null.
            const reqBody = req.serializeBody();
            // If progress events are enabled, response headers will be delivered
            // in two events - the HttpHeaderResponse event and the full HttpResponse
            // event. However, since response headers don't change in between these
            // two events, it doesn't make sense to parse them twice. So headerResponse
            // caches the data extracted from the response whenever it's first parsed,
            // to ensure parsing isn't duplicated.
            let headerResponse = null;
            // partialFromXhr extracts the HttpHeaderResponse from the current XMLHttpRequest
            // state, and memoizes it into headerResponse.
            const partialFromXhr = () => {
                if (headerResponse !== null) {
                    return headerResponse;
                }
                // Read status and normalize an IE9 bug (https://bugs.jquery.com/ticket/1450).
                const status = xhr.status === 1223 ? 204 /* NoContent */ : xhr.status;
                const statusText = xhr.statusText || 'OK';
                // Parse headers from XMLHttpRequest - this step is lazy.
                const headers = new HttpHeaders(xhr.getAllResponseHeaders());
                // Read the response URL from the XMLHttpResponse instance and fall back on the
                // request URL.
                const url = getResponseUrl(xhr) || req.url;
                // Construct the HttpHeaderResponse and memoize it.
                headerResponse = new HttpHeaderResponse({ headers, status, statusText, url });
                return headerResponse;
            };
            // Next, a few closures are defined for the various events which XMLHttpRequest can
            // emit. This allows them to be unregistered as event listeners later.
            // First up is the load event, which represents a response being fully available.
            const onLoad = () => {
                // Read response state from the memoized partial data.
                let { headers, status, statusText, url } = partialFromXhr();
                // The body will be read out if present.
                let body = null;
                if (status !== 204 /* NoContent */) {
                    // Use XMLHttpRequest.response if set, responseText otherwise.
                    body = (typeof xhr.response === 'undefined') ? xhr.responseText : xhr.response;
                }
                // Normalize another potential bug (this one comes from CORS).
                if (status === 0) {
                    status = !!body ? 200 /* Ok */ : 0;
                }
                // ok determines whether the response will be transmitted on the event or
                // error channel. Unsuccessful status codes (not 2xx) will always be errors,
                // but a successful status code can still result in an error if the user
                // asked for JSON data and the body cannot be parsed as such.
                let ok = status >= 200 && status < 300;
                // Check whether the body needs to be parsed as JSON (in many cases the browser
                // will have done that already).
                if (req.responseType === 'json' && typeof body === 'string') {
                    // Save the original body, before attempting XSSI prefix stripping.
                    const originalBody = body;
                    body = body.replace(XSSI_PREFIX, '');
                    try {
                        // Attempt the parse. If it fails, a parse error should be delivered to the user.
                        body = body !== '' ? JSON.parse(body) : null;
                    }
                    catch (error) {
                        // Since the JSON.parse failed, it's reasonable to assume this might not have been a
                        // JSON response. Restore the original body (including any XSSI prefix) to deliver
                        // a better error response.
                        body = originalBody;
                        // If this was an error request to begin with, leave it as a string, it probably
                        // just isn't JSON. Otherwise, deliver the parsing error to the user.
                        if (ok) {
                            // Even though the response status was 2xx, this is still an error.
                            ok = false;
                            // The parse error contains the text of the body that failed to parse.
                            body = { error, text: body };
                        }
                    }
                }
                if (ok) {
                    // A successful response is delivered on the event stream.
                    observer.next(new HttpResponse({
                        body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                    // The full body has been received and delivered, no further events
                    // are possible. This request is complete.
                    observer.complete();
                }
                else {
                    // An unsuccessful request is delivered on the error channel.
                    observer.error(new HttpErrorResponse({
                        // The error in this case is the response body (error from the server).
                        error: body,
                        headers,
                        status,
                        statusText,
                        url: url || undefined,
                    }));
                }
            };
            // The onError callback is called when something goes wrong at the network level.
            // Connection timeout, DNS error, offline, etc. These are actual errors, and are
            // transmitted on the error channel.
            const onError = (error) => {
                const { url } = partialFromXhr();
                const res = new HttpErrorResponse({
                    error,
                    status: xhr.status || 0,
                    statusText: xhr.statusText || 'Unknown Error',
                    url: url || undefined,
                });
                observer.error(res);
            };
            // The sentHeaders flag tracks whether the HttpResponseHeaders event
            // has been sent on the stream. This is necessary to track if progress
            // is enabled since the event will be sent on only the first download
            // progerss event.
            let sentHeaders = false;
            // The download progress event handler, which is only registered if
            // progress events are enabled.
            const onDownProgress = (event) => {
                // Send the HttpResponseHeaders event if it hasn't been sent already.
                if (!sentHeaders) {
                    observer.next(partialFromXhr());
                    sentHeaders = true;
                }
                // Start building the download progress event to deliver on the response
                // event stream.
                let progressEvent = {
                    type: HttpEventType.DownloadProgress,
                    loaded: event.loaded,
                };
                // Set the total number of bytes in the event if it's available.
                if (event.lengthComputable) {
                    progressEvent.total = event.total;
                }
                // If the request was for text content and a partial response is
                // available on XMLHttpRequest, include it in the progress event
                // to allow for streaming reads.
                if (req.responseType === 'text' && !!xhr.responseText) {
                    progressEvent.partialText = xhr.responseText;
                }
                // Finally, fire the event.
                observer.next(progressEvent);
            };
            // The upload progress event handler, which is only registered if
            // progress events are enabled.
            const onUpProgress = (event) => {
                // Upload progress events are simpler. Begin building the progress
                // event.
                let progress = {
                    type: HttpEventType.UploadProgress,
                    loaded: event.loaded,
                };
                // If the total number of bytes being uploaded is available, include
                // it.
                if (event.lengthComputable) {
                    progress.total = event.total;
                }
                // Send the event.
                observer.next(progress);
            };
            // By default, register for load and error events.
            xhr.addEventListener('load', onLoad);
            xhr.addEventListener('error', onError);
            xhr.addEventListener('timeout', onError);
            xhr.addEventListener('abort', onError);
            // Progress events are only enabled if requested.
            if (req.reportProgress) {
                // Download progress is always enabled if requested.
                xhr.addEventListener('progress', onDownProgress);
                // Upload progress depends on whether there is a body to upload.
                if (reqBody !== null && xhr.upload) {
                    xhr.upload.addEventListener('progress', onUpProgress);
                }
            }
            // Fire the request, and notify the event stream that it was fired.
            xhr.send(reqBody);
            observer.next({ type: HttpEventType.Sent });
            // This is the return from the Observable function, which is the
            // request cancellation handler.
            return () => {
                // On a cancellation, remove all registered event listeners.
                xhr.removeEventListener('error', onError);
                xhr.removeEventListener('abort', onError);
                xhr.removeEventListener('load', onLoad);
                xhr.removeEventListener('timeout', onError);
                if (req.reportProgress) {
                    xhr.removeEventListener('progress', onDownProgress);
                    if (reqBody !== null && xhr.upload) {
                        xhr.upload.removeEventListener('progress', onUpProgress);
                    }
                }
                // Finally, abort the in-flight request.
                if (xhr.readyState !== xhr.DONE) {
                    xhr.abort();
                }
            };
        });
    }
}
HttpXhrBackend.ɵfac = function HttpXhrBackend_Factory(t) { return new (t || HttpXhrBackend)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory)); };
HttpXhrBackend.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpXhrBackend, factory: HttpXhrBackend.ɵfac });
HttpXhrBackend.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXhrBackend, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const XSRF_COOKIE_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_COOKIE_NAME');
const XSRF_HEADER_NAME = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.InjectionToken('XSRF_HEADER_NAME');
/**
 * Retrieves the current XSRF token to use with the next outgoing request.
 *
 * @publicApi
 */
class HttpXsrfTokenExtractor {
}
/**
 * `HttpXsrfTokenExtractor` which retrieves the token from a cookie.
 */
class HttpXsrfCookieExtractor {
    constructor(doc, platform, cookieName) {
        this.doc = doc;
        this.platform = platform;
        this.cookieName = cookieName;
        this.lastCookieString = '';
        this.lastToken = null;
        /**
         * @internal for testing
         */
        this.parseCount = 0;
    }
    getToken() {
        if (this.platform === 'server') {
            return null;
        }
        const cookieString = this.doc.cookie || '';
        if (cookieString !== this.lastCookieString) {
            this.parseCount++;
            this.lastToken = (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__["ɵparseCookieValue"])(cookieString, this.cookieName);
            this.lastCookieString = cookieString;
        }
        return this.lastToken;
    }
}
HttpXsrfCookieExtractor.ɵfac = function HttpXsrfCookieExtractor_Factory(t) { return new (t || HttpXsrfCookieExtractor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_COOKIE_NAME)); };
HttpXsrfCookieExtractor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpXsrfCookieExtractor, factory: HttpXsrfCookieExtractor.ɵfac });
HttpXsrfCookieExtractor.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID,] }] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [XSRF_COOKIE_NAME,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfCookieExtractor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DOCUMENT]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID]
            }] }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [XSRF_COOKIE_NAME]
            }] }]; }, null); })();
/**
 * `HttpInterceptor` which adds an XSRF token to eligible outgoing requests.
 */
class HttpXsrfInterceptor {
    constructor(tokenService, headerName) {
        this.tokenService = tokenService;
        this.headerName = headerName;
    }
    intercept(req, next) {
        const lcUrl = req.url.toLowerCase();
        // Skip both non-mutating requests and absolute URLs.
        // Non-mutating requests don't require a token, and absolute URLs require special handling
        // anyway as the cookie set
        // on our origin is not the same as the token expected by another origin.
        if (req.method === 'GET' || req.method === 'HEAD' || lcUrl.startsWith('http://') ||
            lcUrl.startsWith('https://')) {
            return next.handle(req);
        }
        const token = this.tokenService.getToken();
        // Be careful not to overwrite an existing header of the same name.
        if (token !== null && !req.headers.has(this.headerName)) {
            req = req.clone({ headers: req.headers.set(this.headerName, token) });
        }
        return next.handle(req);
    }
}
HttpXsrfInterceptor.ɵfac = function HttpXsrfInterceptor_Factory(t) { return new (t || HttpXsrfInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpXsrfTokenExtractor), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](XSRF_HEADER_NAME)); };
HttpXsrfInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpXsrfInterceptor, factory: HttpXsrfInterceptor.ɵfac });
HttpXsrfInterceptor.ctorParameters = () => [
    { type: HttpXsrfTokenExtractor },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [XSRF_HEADER_NAME,] }] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpXsrfInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: HttpXsrfTokenExtractor }, { type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
                args: [XSRF_HEADER_NAME]
            }] }]; }, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * An injectable `HttpHandler` that applies multiple interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * The interceptors are loaded lazily from the injector, to allow
 * interceptors to themselves inject classes depending indirectly
 * on `HttpInterceptingHandler` itself.
 * @see `HttpInterceptor`
 */
class HttpInterceptingHandler {
    constructor(backend, injector) {
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
    }
    handle(req) {
        if (this.chain === null) {
            const interceptors = this.injector.get(HTTP_INTERCEPTORS, []);
            this.chain = interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), this.backend);
        }
        return this.chain.handle(req);
    }
}
HttpInterceptingHandler.ɵfac = function HttpInterceptingHandler_Factory(t) { return new (t || HttpInterceptingHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](HttpBackend), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector)); };
HttpInterceptingHandler.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: HttpInterceptingHandler, factory: HttpInterceptingHandler.ɵfac });
HttpInterceptingHandler.ctorParameters = () => [
    { type: HttpBackend },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpInterceptingHandler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable
    }], function () { return [{ type: HttpBackend }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector }]; }, null); })();
/**
 * Constructs an `HttpHandler` that applies interceptors
 * to a request before passing it to the given `HttpBackend`.
 *
 * Use as a factory function within `HttpClientModule`.
 *
 *
 */
function interceptingHandler(backend, interceptors = []) {
    if (!interceptors) {
        return backend;
    }
    return interceptors.reduceRight((next, interceptor) => new HttpInterceptorHandler(next, interceptor), backend);
}
/**
 * Factory function that determines where to store JSONP callbacks.
 *
 * Ordinarily JSONP callbacks are stored on the `window` object, but this may not exist
 * in test environments. In that case, callbacks are stored on an anonymous object instead.
 *
 *
 */
function jsonpCallbackContext() {
    if (typeof window === 'object') {
        return window;
    }
    return {};
}
/**
 * Configures XSRF protection support for outgoing requests.
 *
 * For a server that supports a cookie-based XSRF protection system,
 * use directly to configure XSRF protection with the correct
 * cookie and header names.
 *
 * If no names are supplied, the default cookie name is `XSRF-TOKEN`
 * and the default header name is `X-XSRF-TOKEN`.
 *
 * @publicApi
 */
class HttpClientXsrfModule {
    /**
     * Disable the default XSRF protection.
     */
    static disable() {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                { provide: HttpXsrfInterceptor, useClass: NoopInterceptor },
            ],
        };
    }
    /**
     * Configure XSRF protection.
     * @param options An object that can specify either or both
     * cookie name or header name.
     * - Cookie name default is `XSRF-TOKEN`.
     * - Header name default is `X-XSRF-TOKEN`.
     *
     */
    static withOptions(options = {}) {
        return {
            ngModule: HttpClientXsrfModule,
            providers: [
                options.cookieName ? { provide: XSRF_COOKIE_NAME, useValue: options.cookieName } : [],
                options.headerName ? { provide: XSRF_HEADER_NAME, useValue: options.headerName } : [],
            ],
        };
    }
}
HttpClientXsrfModule.ɵfac = function HttpClientXsrfModule_Factory(t) { return new (t || HttpClientXsrfModule)(); };
HttpClientXsrfModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HttpClientXsrfModule });
HttpClientXsrfModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        HttpXsrfInterceptor,
        { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
        { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
        { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
        { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientXsrfModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                providers: [
                    HttpXsrfInterceptor,
                    { provide: HTTP_INTERCEPTORS, useExisting: HttpXsrfInterceptor, multi: true },
                    { provide: HttpXsrfTokenExtractor, useClass: HttpXsrfCookieExtractor },
                    { provide: XSRF_COOKIE_NAME, useValue: 'XSRF-TOKEN' },
                    { provide: XSRF_HEADER_NAME, useValue: 'X-XSRF-TOKEN' },
                ]
            }]
    }], null, null); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for XSRF. Automatically imported by `HttpClientModule`.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientModule {
}
HttpClientModule.ɵfac = function HttpClientModule_Factory(t) { return new (t || HttpClientModule)(); };
HttpClientModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HttpClientModule });
HttpClientModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        HttpClient,
        { provide: HttpHandler, useClass: HttpInterceptingHandler },
        HttpXhrBackend,
        { provide: HttpBackend, useExisting: HttpXhrBackend },
    ], imports: [[
            HttpClientXsrfModule.withOptions({
                cookieName: 'XSRF-TOKEN',
                headerName: 'X-XSRF-TOKEN'
            }),
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                /**
                 * Optional configuration for XSRF protection.
                 */
                imports: [
                    HttpClientXsrfModule.withOptions({
                        cookieName: 'XSRF-TOKEN',
                        headerName: 'X-XSRF-TOKEN'
                    }),
                ],
                /**
                 * Configures the [dependency injector](guide/glossary#injector) where it is imported
                 * with supporting services for HTTP communications.
                 */
                providers: [
                    HttpClient,
                    { provide: HttpHandler, useClass: HttpInterceptingHandler },
                    HttpXhrBackend,
                    { provide: HttpBackend, useExisting: HttpXhrBackend },
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](HttpClientModule, { imports: [HttpClientXsrfModule] }); })();
/**
 * Configures the [dependency injector](guide/glossary#injector) for `HttpClient`
 * with supporting services for JSONP.
 * Without this module, Jsonp requests reach the backend
 * with method JSONP, where they are rejected.
 *
 * You can add interceptors to the chain behind `HttpClient` by binding them to the
 * multiprovider for built-in [DI token](guide/glossary#di-token) `HTTP_INTERCEPTORS`.
 *
 * @publicApi
 */
class HttpClientJsonpModule {
}
HttpClientJsonpModule.ɵfac = function HttpClientJsonpModule_Factory(t) { return new (t || HttpClientJsonpModule)(); };
HttpClientJsonpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: HttpClientJsonpModule });
HttpClientJsonpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        JsonpClientBackend,
        { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
        { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
    ] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](HttpClientJsonpModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule,
        args: [{
                providers: [
                    JsonpClientBackend,
                    { provide: JsonpCallbackContext, useFactory: jsonpCallbackContext },
                    { provide: HTTP_INTERCEPTORS, useClass: JsonpInterceptor, multi: true },
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A wrapper around the `XMLHttpRequest` constructor.
 *
 * @publicApi
 * @see `XhrFactory`
 * @deprecated
 * `XhrFactory` has moved, please import `XhrFactory` from `@angular/common` instead.
 */
const XhrFactory = _angular_common__WEBPACK_IMPORTED_MODULE_6__.XhrFactory;

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 45801:
/*!******************************************!*\
  !*** ./node_modules/diacritics/index.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports) {

exports.remove = removeDiacritics;

var replacementList = [
  {
    base: ' ',
    chars: "\u00A0",
  }, {
    base: '0',
    chars: "\u07C0",
  }, {
    base: 'A',
    chars: "\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F",
  }, {
    base: 'AA',
    chars: "\uA732",
  }, {
    base: 'AE',
    chars: "\u00C6\u01FC\u01E2",
  }, {
    base: 'AO',
    chars: "\uA734",
  }, {
    base: 'AU',
    chars: "\uA736",
  }, {
    base: 'AV',
    chars: "\uA738\uA73A",
  }, {
    base: 'AY',
    chars: "\uA73C",
  }, {
    base: 'B',
    chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181",
  }, {
    base: 'C',
    chars: "\u24b8\uff23\uA73E\u1E08\u0106\u0043\u0108\u010A\u010C\u00C7\u0187\u023B",
  }, {
    base: 'D',
    chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779",
  }, {
    base: 'Dh',
    chars: "\u00D0",
  }, {
    base: 'DZ',
    chars: "\u01F1\u01C4",
  }, {
    base: 'Dz',
    chars: "\u01F2\u01C5",
  }, {
    base: 'E',
    chars: "\u025B\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07",
  }, {
    base: 'F',
    chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B",
  }, {
    base: 'G',
    chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262",
  }, {
    base: 'H',
    chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D",
  }, {
    base: 'I',
    chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197",
  }, {
    base: 'J',
    chars: "\u24BF\uFF2A\u0134\u0248\u0237",
  }, {
    base: 'K',
    chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2",
  }, {
    base: 'L',
    chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780",
  }, {
    base: 'LJ',
    chars: "\u01C7",
  }, {
    base: 'Lj',
    chars: "\u01C8",
  }, {
    base: 'M',
    chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB",
  }, {
    base: 'N',
    chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E",
  }, {
    base: 'NJ',
    chars: "\u01CA",
  }, {
    base: 'Nj',
    chars: "\u01CB",
  }, {
    base: 'O',
    chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C",
  }, {
    base: 'OE',
    chars: "\u0152",
  }, {
    base: 'OI',
    chars: "\u01A2",
  }, {
    base: 'OO',
    chars: "\uA74E",
  }, {
    base: 'OU',
    chars: "\u0222",
  }, {
    base: 'P',
    chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754",
  }, {
    base: 'Q',
    chars: "\u24C6\uFF31\uA756\uA758\u024A",
  }, {
    base: 'R',
    chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782",
  }, {
    base: 'S',
    chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784",
  }, {
    base: 'T',
    chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786",
  }, {
    base: 'Th',
    chars: "\u00DE",
  }, {
    base: 'TZ',
    chars: "\uA728",
  }, {
    base: 'U',
    chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244",
  }, {
    base: 'V',
    chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245",
  }, {
    base: 'VY',
    chars: "\uA760",
  }, {
    base: 'W',
    chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72",
  }, {
    base: 'X',
    chars: "\u24CD\uFF38\u1E8A\u1E8C",
  }, {
    base: 'Y',
    chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE",
  }, {
    base: 'Z',
    chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762",
  }, {
    base: 'a',
    chars: "\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251",
  }, {
    base: 'aa',
    chars: "\uA733",
  }, {
    base: 'ae',
    chars: "\u00E6\u01FD\u01E3",
  }, {
    base: 'ao',
    chars: "\uA735",
  }, {
    base: 'au',
    chars: "\uA737",
  }, {
    base: 'av',
    chars: "\uA739\uA73B",
  }, {
    base: 'ay',
    chars: "\uA73D",
  }, {
    base: 'b',
    chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182",
  }, {
    base: 'c',
    chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184",
  }, {
    base: 'd',
    chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA",
  }, {
    base: 'dh',
    chars: "\u00F0",
  }, {
    base: 'dz',
    chars: "\u01F3\u01C6",
  }, {
    base: 'e',
    chars: "\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD",
  }, {
    base: 'f',
    chars: "\u24D5\uFF46\u1E1F\u0192",
  }, {
    base: 'ff',
    chars: "\uFB00",
  }, {
    base: 'fi',
    chars: "\uFB01",
  }, {
    base: 'fl',
    chars: "\uFB02",
  }, {
    base: 'ffi',
    chars: "\uFB03",
  }, {
    base: 'ffl',
    chars: "\uFB04",
  }, {
    base: 'g',
    chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79",
  }, {
    base: 'h',
    chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265",
  }, {
    base: 'hv',
    chars: "\u0195",
  }, {
    base: 'i',
    chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131",
  }, {
    base: 'j',
    chars: "\u24D9\uFF4A\u0135\u01F0\u0249",
  }, {
    base: 'k',
    chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3",
  }, {
    base: 'l',
    chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D",
  }, {
    base: 'lj',
    chars: "\u01C9",
  }, {
    base: 'm',
    chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F",
  }, {
    base: 'n',
    chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509",
  }, {
    base: 'nj',
    chars: "\u01CC",
  }, {
    base: 'o',
    chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11",
  }, {
    base: 'oe',
    chars: "\u0153",
  }, {
    base: 'oi',
    chars: "\u01A3",
  }, {
    base: 'oo',
    chars: "\uA74F",
  }, {
    base: 'ou',
    chars: "\u0223",
  }, {
    base: 'p',
    chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1",
  }, {
    base: 'q',
    chars: "\u24E0\uFF51\u024B\uA757\uA759",
  }, {
    base: 'r',
    chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783",
  }, {
    base: 's',
    chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282",
  }, {
    base: 'ss',
    chars: "\xDF",
  }, {
    base: 't',
    chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787",
  }, {
    base: 'th',
    chars: "\u00FE",
  }, {
    base: 'tz',
    chars: "\uA729",
  }, {
    base: 'u',
    chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289",
  }, {
    base: 'v',
    chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C",
  }, {
    base: 'vy',
    chars: "\uA761",
  }, {
    base: 'w',
    chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73",
  }, {
    base: 'x',
    chars: "\u24E7\uFF58\u1E8B\u1E8D",
  }, {
    base: 'y',
    chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF",
  }, {
    base: 'z',
    chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763",
  }
];

var diacriticsMap = {};
for (var i = 0; i < replacementList.length; i += 1) {
  var chars = replacementList[i].chars;
  for (var j = 0; j < chars.length; j += 1) {
    diacriticsMap[chars[j]] = replacementList[i].base;
  }
}

function removeDiacritics(str) {
  return str.replace(/[^\u0000-\u007e]/g, function(c) {
    return diacriticsMap[c] || c;
  });
}

exports.replacementList = replacementList;
exports.diacriticsMap = diacriticsMap;


/***/ }),

/***/ 46962:
/*!**************************************************!*\
  !*** ./node_modules/extract-svg-path/browser.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var parseXml = __webpack_require__(/*! xml-parse-from-string */ 10307)

function extractSvgPath (svgDoc) {
  // concat all the <path> elements to form an SVG path string
  if (typeof svgDoc === 'string') {
    svgDoc = parseXml(svgDoc)
  }
  if (!svgDoc || typeof svgDoc.getElementsByTagName !== 'function') {
    throw new Error('could not get an XML document from the specified SVG contents')
  }

  var paths = Array.prototype.slice.call(svgDoc.getElementsByTagName('path'))
  return paths.reduce(function (prev, path) {
    var d = path.getAttribute('d') || ''
    return prev + ' ' + d.replace(/\s+/g, ' ').trim()
  }, '').trim()
}

module.exports = function () {
  throw new Error('use extract-svg-path/transform to inline SVG contents into your bundle')
}

module.exports.parse = extractSvgPath

//deprecated
module.exports.fromString = extractSvgPath


/***/ }),

/***/ 50762:
/*!***************************************************************!*\
  !*** ./node_modules/geolocation-marker/geolocation-marker.js ***!
  \***************************************************************/
/***/ (function() {

(function(){
/*
 geolocation-marker version 2.0.5
 @copyright 2012, 2015 Chad Killingsworth
 @see https://github.com/ChadKillingsworth/geolocation-marker/blob/master/LICENSE.txt
*/
'use strict';var b;function e(a,c){function f(){}f.prototype=c.prototype;a.B=c.prototype;a.prototype=new f;a.prototype.constructor=a;for(var g in c)if("prototype"!=g)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(c,g);d&&Object.defineProperty(a,g,d)}else a[g]=c[g]}
function h(a,c,f,g){var d=google.maps.MVCObject.call(this)||this;d.c=null;d.b=null;d.a=null;d.i=-1;var l={clickable:!1,cursor:"pointer",draggable:!1,flat:!0,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:"#C8D6EC",fillOpacity:.7,scale:12,strokeWeight:0},position:new google.maps.LatLng(0,0),title:"Current location",zIndex:2},m={clickable:!1,cursor:"pointer",draggable:!1,flat:!0,icon:{path:google.maps.SymbolPath.CIRCLE,fillColor:"#4285F4",fillOpacity:1,scale:6,strokeColor:"white",strokeWeight:2},
optimized:!1,position:new google.maps.LatLng(0,0),title:"Current location",zIndex:3};c&&(l=k(l,c));f&&(m=k(m,f));c={clickable:!1,radius:0,strokeColor:"1bb6ff",strokeOpacity:.4,fillColor:"61a0bf",fillOpacity:.4,strokeWeight:1,zIndex:1};g&&(c=k(c,g));d.c=new google.maps.Marker(l);d.b=new google.maps.Marker(m);d.a=new google.maps.Circle(c);google.maps.MVCObject.prototype.set.call(d,"accuracy",null);google.maps.MVCObject.prototype.set.call(d,"position",null);google.maps.MVCObject.prototype.set.call(d,
"map",null);d.set("minimum_accuracy",null);d.set("position_options",{enableHighAccuracy:!0,maximumAge:1E3});d.a.bindTo("map",d.c);d.a.bindTo("map",d.b);a&&d.setMap(a);return d}e(h,google.maps.MVCObject);b=h.prototype;b.set=function(a,c){if(n.test(a))throw"'"+a+"' is a read-only property.";"map"===a?this.setMap(c):google.maps.MVCObject.prototype.set.call(this,a,c)};b.f=function(){return this.get("map")};b.l=function(){return this.get("position_options")};
b.w=function(a){this.set("position_options",a)};b.g=function(){return this.get("position")};b.m=function(){return this.get("position")?this.a.getBounds():null};b.j=function(){return this.get("accuracy")};b.h=function(){return this.get("minimum_accuracy")};b.v=function(a){this.set("minimum_accuracy",a)};
b.setMap=function(a){google.maps.MVCObject.prototype.set.call(this,"map",a);a?navigator.geolocation&&(this.i=navigator.geolocation.watchPosition(this.A.bind(this),this.o.bind(this),this.l())):(this.c.unbind("position"),this.b.unbind("position"),this.a.unbind("center"),this.a.unbind("radius"),google.maps.MVCObject.prototype.set.call(this,"accuracy",null),google.maps.MVCObject.prototype.set.call(this,"position",null),navigator.geolocation.clearWatch(this.i),this.i=-1,this.c.setMap(a),this.b.setMap(a))};
b.u=function(a){this.b.setOptions(k({},a))};b.s=function(a){this.a.setOptions(k({},a))};
b.A=function(a){var c=new google.maps.LatLng(a.coords.latitude,a.coords.longitude),f=!this.b.getMap();if(f){if(null!=this.h()&&a.coords.accuracy>this.h())return;this.c.setMap(this.f());this.b.setMap(this.f());this.c.bindTo("position",this);this.b.bindTo("position",this);this.a.bindTo("center",this,"position");this.a.bindTo("radius",this,"accuracy")}this.j()!=a.coords.accuracy&&google.maps.MVCObject.prototype.set.call(this,"accuracy",a.coords.accuracy);!f&&this.g()&&this.g().equals(c)||google.maps.MVCObject.prototype.set.call(this,
"position",c)};b.o=function(a){google.maps.event.trigger(this,"geolocation_error",a)};function k(a,c){for(var f in c)!0!==p[f]&&(a[f]=c[f]);return a}var p={map:!0,position:!0,radius:!0},n=/^(?:position|accuracy)$/i;var q=window;function r(){h.prototype.getAccuracy=h.prototype.j;h.prototype.getBounds=h.prototype.m;h.prototype.getMap=h.prototype.f;h.prototype.getMinimumAccuracy=h.prototype.h;h.prototype.getPosition=h.prototype.g;h.prototype.getPositionOptions=h.prototype.l;h.prototype.setCircleOptions=h.prototype.s;h.prototype.setMap=h.prototype.setMap;h.prototype.setMarkerOptions=h.prototype.u;h.prototype.setMinimumAccuracy=h.prototype.v;h.prototype.setPositionOptions=h.prototype.w;return h}
"function"===typeof q.define&&q.define.amd?q.define([],r):"object"===typeof q.exports?q.module.exports=r():q.GeolocationMarker=r();
}).call(this)



/***/ }),

/***/ 99336:
/*!***************************************!*\
  !*** ./node_modules/global/window.js ***!
  \***************************************/
/***/ (function(module) {

var win;

if (typeof window !== "undefined") {
    win = window;
} else if (typeof global !== "undefined") {
    win = global;
} else if (typeof self !== "undefined"){
    win = self;
} else {
    win = {};
}

module.exports = win;


/***/ }),

/***/ 22646:
/*!**************************************************!*\
  !*** ./node_modules/i18n-iso-countries/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var codes = __webpack_require__(/*! ./codes.json */ 26796);
var removeDiacritics = __webpack_require__(/*! diacritics */ 45801).remove;
var registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
var alpha2 = {},
  alpha3 = {},
  numeric = {},
  invertedNumeric = {};

codes.forEach(function(codeInformation) {
  var s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3[s[1]] = s[0];
  numeric[s[2]] = s[0];
  invertedNumeric[s[0]] = s[2];
});

function formatNumericCode(code) {
  return String('000'+(code ? code : '')).slice(-3);
}

function registerLocale(localeData) {
  if (!localeData.locale) {
    throw new TypeError('Missing localeData.locale');
  }

  if (!localeData.countries) {
    throw new TypeError('Missing localeData.countries');
  }

  registeredLocales[localeData.locale] = localeData.countries;
}

exports.registerLocale = registerLocale;

/*
 * @param code Alpha-3 code
 * @return Alpha-2 code or undefined
 */
function alpha3ToAlpha2(code) {
  return alpha3[code];
}
exports.alpha3ToAlpha2 = alpha3ToAlpha2;

/*
 * @param code Alpha-2 code
 * @return Alpha-3 code or undefined
 */
function alpha2ToAlpha3(code) {
  return alpha2[code];
}
exports.alpha2ToAlpha3 = alpha2ToAlpha3;

/*
 * @param code Alpha-3 code
 * @return Numeric code or undefined
 */
function alpha3ToNumeric(code) {
  return invertedNumeric[alpha3ToAlpha2(code)];
}
exports.alpha3ToNumeric = alpha3ToNumeric;

/*
 * @param code Alpha-2 code
 * @return Numeric code or undefined
 */
function alpha2ToNumeric(code) {
  return invertedNumeric[code];
}
exports.alpha2ToNumeric = alpha2ToNumeric;

/*
 * @param code Numeric code
 * @return Alpha-3 code or undefined
 */
function numericToAlpha3(code) {
  var padded = formatNumericCode(code);
  return alpha2ToAlpha3(numeric[padded]);
}
exports.numericToAlpha3 = numericToAlpha3;

/*
 * @param code Numeric code
 * @return Alpha-2 code or undefined
 */
function numericToAlpha2(code) {
  var padded = formatNumericCode(code);
  return numeric[padded];
}
exports.numericToAlpha2 = numericToAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-3
 */
function toAlpha3(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha3(code);
    }
    if(code.length === 2) {
      return alpha2ToAlpha3(code.toUpperCase());
    }
    if (code.length === 3) {
      return code.toUpperCase();
    }
  }
  if (typeof code === "number") {
    return numericToAlpha3(code);
  }
  return undefined;
}
exports.toAlpha3 = toAlpha3;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return ISO 3166-1 alpha-2
 */
function toAlpha2(code) {
  if (typeof code === "string") {
    if (/^[0-9]*$/.test(code)) {
      return numericToAlpha2(code);
    }
    if (code.length === 2) {
      return code.toUpperCase();
    }
    if(code.length === 3) {
      return alpha3ToAlpha2(code.toUpperCase());
    }
  }
  if (typeof code === "number") {
    return numericToAlpha2(code);
  }
  return undefined;
}
exports.toAlpha2 = toAlpha2;

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @param lang language for country name
 * @return name or undefined
 */
exports.getName = function(code, lang) {
  try {
    var d = registeredLocales[lang.toLowerCase()];
    return d[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
};

/*
 * @param lang language for country names
 * @return Object of country code mapped to county name
 */
exports.getNames = function(lang) {
  var d = registeredLocales[lang.toLowerCase()];
  if (d === undefined) {
    return {};
  }
  return d;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getAlpha2Code = function(name, lang) {
  try {
    var p, codenames = registeredLocales[lang.toLowerCase()];
    for (p in codenames) {
      if (codenames.hasOwnProperty(p)) {
        if (codenames[p].toLowerCase() === name.toLowerCase()) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-2 or undefined
 */
exports.getSimpleAlpha2Code = function(name, lang) {
  try {
    var p, codenames = registeredLocales[lang.toLowerCase()];
    for (p in codenames) {
      if (codenames.hasOwnProperty(p)) {
        if (removeDiacritics(codenames[p].toLowerCase()) === removeDiacritics(name.toLowerCase())) {
          return p;
        }
      }
    }
    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @return Object of alpha-2 codes mapped to alpha-3 codes
 */
exports.getAlpha2Codes = function() {
  return alpha2;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getAlpha3Code = function(name, lang) {
  var alpha2 = this.getAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 3166-1 alpha-3 or undefined
 */
exports.getSimpleAlpha3Code = function(name, lang) {
  var alpha2 = this.getSimpleAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @return Object of alpha-3 codes mapped to alpha-2 codes
 */
exports.getAlpha3Codes = function() {
  return alpha3;
};

/*
 * @return Object of numeric codes mapped to alpha-2 codes
 */
exports.getNumericCodes = function() {
  return numeric;
};

/*
 * @return Array of supported languages
 */
exports.langs = function() {
  return Object.keys(registeredLocales);
};

/*
 * @param code ISO 3166-1 alpha-2, alpha-3 or numeric code
 * @return Boolean
 */
exports.isValid = function(code) {
  if (!code) {
    return false;
  }

  var coerced = code.toString().toUpperCase();
  return alpha3.hasOwnProperty(coerced) || alpha2.hasOwnProperty(coerced) ||
    numeric.hasOwnProperty(coerced);
};


/***/ }),

/***/ 86508:
/*!****************************************!*\
  !*** ./node_modules/load-svg/index.js ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var xhr = __webpack_require__(/*! xhr */ 33147);

module.exports = function (opts, cb) {
    if (typeof opts === 'string') opts = { uri: opts };
    
    xhr(opts, function (err, res, body) {
        if (err) return cb(err);
        if (!/^2/.test(res.statusCode)) {
            return cb(new Error('http status code: ' + res.statusCode));
        }
        var div = document.createElement('div');
        div.innerHTML = body;
        var svg = div.querySelector('svg');
        if (!svg) return cb(new Error('svg not present in resource'));
        cb(null, svg);
    });
};


/***/ }),

/***/ 37505:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ngx-googlemaps-tracking-view/__ivy_ngcc__/fesm2015/ngx-googlemaps-tracking-view.js ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeolocationButtonComponent": function() { return /* binding */ GeolocationButtonComponent; },
/* harmony export */   "InfowindowComponent": function() { return /* binding */ InfowindowComponent; },
/* harmony export */   "NgxGooglemapsTrackingViewComponent": function() { return /* binding */ NgxGooglemapsTrackingViewComponent; },
/* harmony export */   "NgxGooglemapsTrackingViewModule": function() { return /* binding */ NgxGooglemapsTrackingViewModule; },
/* harmony export */   "ɵa": function() { return /* binding */ GoogleMapsWrapper; },
/* harmony export */   "ɵb": function() { return /* binding */ TrackedObjectComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96900);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 48888);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 31303);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59651);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 53920);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 25276);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 77123);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1621);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 80225);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 93806);
/* harmony import */ var geolocation_marker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! geolocation-marker */ 50762);
/* harmony import */ var geolocation_marker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(geolocation_marker__WEBPACK_IMPORTED_MODULE_0__);







/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/googlemaps-wrapper.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper class for handling common GoogleMaps SDK functions
 */



const _c0 = ["map"];
function NgxGooglemapsTrackingViewComponent_gmtv_tracked_object_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gmtv-tracked-object", 4);
} if (rf & 2) {
    const trkObj_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", ctx_r1.template)("triggerInfowindow", ctx_r1.triggerInfowindow)("trackedObject", trkObj_r2);
} }
const _c1 = ["root"];
const _c2 = ["defaultTemplate"];
const _c3 = ["vc"];
function InfowindowComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "ID:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Position:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Heading:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](o_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", o_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 4, o_r4.position == null ? null : o_r4.position.toJSON()), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 6, o_r4.heading, "1.0-1"), "\u00B0");
} }
const _c4 = function (a0) { return { $implicit: a0 }; };
class GoogleMapsWrapper {
    constructor() {
        this._infowindows = { default: null };
        this.markers = [];
        this.polylines = [];
        this.polygons = [];
        this._isReady = false;
        /**
         * If `true` the infowindows will close on clicking on any point on the map
         */
        this.closeInfowindowOnClick = true;
        /**
         * Emits when the map has been inited by calling `GoogleMapsWrapper.init()`
         */
        this.onReady = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * When the user clicks on the map
         */
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * When visible maps change but zooming or dragging the map
         */
        this.boundsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this._ready = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        (resolve, reject) => {
            this.resolver = { resolve: resolve, reject: reject };
        }));
    }
    /**
     * The default infowindow object
     * @return {?}
     */
    get infowindow() { return this.getInfowindow('default'); }
    /**
     * @param {?} val
     * @return {?}
     */
    set infowindow(val) { this._infowindows['default'] = val; }
    /**
     * `True` if the map has been inited by calling `GoogleMapsWrapper.init()`
     * @return {?}
     */
    isReady() { return this._isReady; }
    /**
     * Resolves when the map has been inited by calling `GoogleMapsWrapper.init()`
     * @return {?}
     */
    ready() { return this._ready; }
    /**
     * @return {?}
     */
    get map() {
        return this._map;
    }
    /**
     * @param {?=} tag
     * @return {?}
     */
    isInfowindowOpen(tag) {
        return this.getInfowindow(tag)['isOpen'];
    }
    /**
     * Call this before using any other function
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    initMap(element, options) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            try {
                this._map = new google.maps.Map(element, Object.assign({ center: new google.maps.LatLng(19.53124, -96.91589), zoom: 14, clickableIcons: false, disableDefaultUI: false, zoomControl: true, streetViewControl: false, scaleControl: true, rotateControl: true, fullscreenControl: true, mapTypeControlOptions: {
                        mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
                    } }, options));
                // Add listeners
                this.map.addListener('click', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    if (this.closeInfowindowOnClick)
                        this.closeInfowindow();
                    this.click.emit(e.latLng);
                }));
                this.map.addListener('bounds_changed', (/**
                 * @return {?}
                 */
                () => {
                    /** @type {?} */
                    const bounds = this.map.getBounds();
                    this.boundsChanged.emit(bounds);
                }));
                console.debug('map created ');
                // Wait for SDK to load
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._isReady = true;
                    this.resolver.resolve();
                    this.onReady.emit();
                }), 1000);
                yield this._isReady;
                return this.map;
            }
            catch (e) {
                this.resolver.reject(e);
            }
        });
    }
    /**
     * Formula taken from:
     * [What ratio scales do Google Maps zoom levels correspond to?
     * ](https://gis.stackexchange.com/questions/7430/what-ratio-scales-do-google-maps-zoom-levels-correspond-to)
     * @param {?} latitude
     * @return {?}
     */
    getMetersPerPx(latitude) {
        if (!latitude || !this.map)
            return 0;
        /** @type {?} */
        const zoom = this.map.getZoom();
        return 156543.03392 * Math.cos(latitude * Math.PI / 180) / Math.pow(2, zoom);
    }
    /**
     * Subscribe to map event
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    // tslint:disable-next-line: no-any
    subscribe(eventName, callback) {
        this.map.addListener(eventName, callback);
    }
    /**
     * Unsubscribe from map event
     * @param {?} eventName
     * @return {?}
     */
    unsubscribe(eventName) {
        google.maps.event.clearListeners(this.map, eventName);
    }
    /**
     * Unsubscribe from all map events
     * @return {?}
     */
    unsubcribeAll() {
        google.maps.event.clearInstanceListeners(this.map);
    }
    /**
     * Add a marker and show it on the map
     * @param {?} params
     * @return {?}
     */
    addMarker(params) {
        /** @type {?} */
        let marker;
        if (!(params instanceof google.maps.Marker)) {
            params.map = this.map;
            marker = new google.maps.Marker(params);
        }
        else {
            marker = params;
            marker.setMap(this.map);
        }
        this.markers.push(marker);
        return marker;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    addPolyline(params) {
        /** @type {?} */
        let line;
        if (!(params instanceof google.maps.Polyline)) {
            params.map = this.map;
            line = new google.maps.Polyline(params);
        }
        else {
            line = params;
            line.setMap(this.map);
        }
        this.polylines.push(line);
        return line;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    addPolygone(params) {
        /** @type {?} */
        let polygon;
        if (!(params instanceof google.maps.Polygon)) {
            params.map = this.map;
            polygon = new google.maps.Polygon(params);
        }
        else {
            polygon = params;
            polygon.setMap(this.map);
        }
        this.polygons.push(polygon);
        return polygon;
    }
    /**
     * @return {?}
     */
    clearMarkers() {
        this.markers.forEach((/**
         * @param {?} m
         * @return {?}
         */
        m => {
            m.setMap(null);
        }));
        this.markers = [];
    }
    /**
     * @return {?}
     */
    clearPolylines() {
        this.polylines.forEach((/**
         * @param {?} l
         * @return {?}
         */
        l => {
            l.setMap(null);
        }));
        this.polylines = [];
    }
    /**
     * @return {?}
     */
    clearPolygones() {
        this.polygons.forEach((/**
         * @param {?} l
         * @return {?}
         */
        l => {
            l.setMap(null);
        }));
        this.polygons = [];
    }
    /**
     * Removes current markers an copies all the markers of an array into the map
     * @param {?} array
     * @return {?}
     */
    setMarkers(array) {
        this.clearMarkers();
        array.forEach((/**
         * @param {?} m
         * @return {?}
         */
        m => {
            m.setMap(this.map);
        }));
        this.markers = [...array];
    }
    /**
     * @param {?=} anchor
     * @param {?=} content
     * @param {?=} id In case more than one infowindows are required to be shown. If no parameter is passed,
     * the default infowindow will be opened. If a string is passed, a new infowindow will be created
     * with that specifier.
     * @return {?}
     */
    openInfowindow(anchor, content, id) {
        /** @type {?} */
        const infowindow = id ? this.getInfowindow(id) : this.infowindow;
        if (content)
            infowindow.setContent(content);
        if (anchor instanceof google.maps.LatLng) {
            infowindow.setPosition(anchor);
            infowindow.open(this.map);
        }
        else {
            infowindow.open(this.map, anchor);
        }
        infowindow['isOpen'] = true;
        return infowindow;
    }
    /**
     * @param {?=} id Unique identifier for an infowindow in case more than one exist
     * @return {?}
     */
    closeInfowindow(id) {
        /** @type {?} */
        const infowindow = id ? this.getInfowindow(id) : this.infowindow;
        if (infowindow) {
            infowindow.close();
            infowindow['isOpen'] = false;
        }
    }
    /**
     * Retrieve a reference to a specific infowindow
     * @param {?=} id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     * @return {?}
     */
    getInfowindow(id = 'default') {
        /** @type {?} */
        let infowindow = this._infowindows[id];
        if (!infowindow) {
            infowindow = new google.maps.InfoWindow({
                content: '[info]',
                position: this.map.getCenter()
            });
            infowindow['closeclick'] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
            infowindow.addListener('closeclick', (/**
             * @return {?}
             */
            () => infowindow['closeclick'].emit()));
            this._infowindows[id] = infowindow;
        }
        return infowindow;
    }
    /**
     * Destroy a reference to a specific infowindow.
     * @param {?} id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     * @return {?}
     */
    destroyInfowindow(id) {
        if (!id)
            return;
        /** @type {?} */
        const infowindow = this._infowindows[id];
        if (infowindow) {
            infowindow.close();
            infowindow.set('map', null);
            google.maps.event.clearInstanceListeners(infowindow);
            delete this._infowindows[id];
        }
    }
}
GoogleMapsWrapper.ɵfac = function GoogleMapsWrapper_Factory(t) { return new (t || GoogleMapsWrapper)(); };
GoogleMapsWrapper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleMapsWrapper, factory: GoogleMapsWrapper.ɵfac });
/** @nocollapse */
GoogleMapsWrapper.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleMapsWrapper, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable
    }], function () { return []; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/center-marker/center-marker.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let API_KEY = '';
/** @type {?} */
const INFOWINDOW_ID = 'center-pin';
/**
 * A marker fixed to the center of the map which emits the geo-decoded location
 * as a full address.
 *
 * @see {\@link CenterMarker}
 * \@emits CenterMarker#locationChanges locationChanges When the pin's location has changed
 * (by zooming or dragging) and the map has become idle again.
 * \@emits CenterMarker#addressChanges addressChanges The the geocoded address has resolved.
 *
 * \@example
 * <button (click)="map.centerPin.enable(infowindowLocation, <yourGMapsApiKey)">Add center Pin</button>
 * <button (click)="map.centerPin.disable()">Remove Pin</button>
 *
 * <ng-template #infowindowLocation let-address>
 *   <div>
 *     <span *ngIf="!address">Loading...</span>
 *       <div *ngIf="!!address">
 *       {{address}}
 *       <br>
 *       <button (click)="map.centerPin.fix = !map.centerPin.fix">Fix</button>
 *     </div>
 *   </div>
 * </ng-template>
 */
class CenterMarker {
    /**
     * @param {?} googlemapsWrapper
     * @param {?} viewContainer
     * @param {?} cdr
     */
    constructor(googlemapsWrapper, viewContainer, cdr) {
        this.googlemapsWrapper = googlemapsWrapper;
        this.viewContainer = viewContainer;
        this.cdr = cdr;
        /**
         * Emitted when the the geocoded address has resolved.
         */
        this.addressChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Emitted when the pin's location has changed (by zooming or dragging) and the map has become idle again.
         */
        this.locationChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * @ignore
         */
        this._centerChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        /**
         * @ignore
         */
        this._mapEventSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        /**
         * @ignore
         */
        this._geocoder = new google.maps.Geocoder();
    }
    /**
     * Fix the pin to its current position on map instead of floating over it.
     * This value is reset on calling `disable()`.
     * @return {?}
     */
    get fix() { return !!this._fixedMarker; }
    /**
     * @param {?} val
     * @return {?}
     */
    set fix(val) {
        if (!this.googlemapsWrapper.isReady()) {
            console.warn('Map is not ready');
            return;
        }
        this.disable();
        if (val) {
            this.setFixedMarker();
        }
        else {
            this.enable(this._infowindowTemplate, API_KEY);
        }
    }
    /**
     * Activates the pin to show at the map's center
     * \@example
     *
     * <button (click)="map.centerPin.enable(infowindowLocation, '<yourApiKey>')">
     *   Add center Pin
     * </button>
     *
     * <ng-template #infowindowLocation let-address>
     *   <div style="min-height: 20px; min-width: 50px;">
     *     {{address}}
     *   </div>
     * </ng-template>
     * @param {?} infowindowTemplate A template for rendering the infowindow on top of the marker.
     * It must have a single root element. The address string will be passed as implicit context.
     * @param {?} apiKey GoogleMaps API key. TODO: remove the need for this param in future versions.
     *
     * @return {?}
     */
    enable(infowindowTemplate, apiKey) {
        this.removeFixedMarker();
        API_KEY = apiKey;
        this._infowindowTemplate = infowindowTemplate;
        if (this._centerMarker)
            return;
        /** @type {?} */
        const mapDiv = (/** @type {?} */ (this.googlemapsWrapper.map.getDiv()));
        this._centerMarker = document.createElement('div');
        this._centerMarker.classList.add('centerMarker');
        this._centerMarker.style.cssText =
            `position:absolute;
      background:url(https://maps.gstatic.com/mapfiles/markers/marker.png) no-repeat;
      top:50%;left:50%;
      z-index:1;
      margin-left:-10px;
      margin-top:-34px;
      height:34px;
      width:20px;
      cursor: pointer;`;
        mapDiv.parentElement.appendChild(this._centerMarker);
        this._centerMarker.onclick = (/**
         * @return {?}
         */
        () => this.displayInfowindowOverPin());
        this._mapEventSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this._mapEventSubscription.add(this._centerChanged$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((/**
         * @return {?}
         */
        () => {
            this.address = null;
            this.displayInfowindowOverPin();
        })), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((/**
         * @param {?} latLng
         * @return {?}
         */
        latLng => (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(latLng))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounce)((/**
         * @return {?}
         */
        () => (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.timer)(1000))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((/**
         * @param {?} location
         * @return {?}
         */
        (location) => {
            /** @type {?} */
            const geoCoder = new google.maps.Geocoder();
            /** @type {?} */
            const geocodeFn$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.bindCallback)(geoCoder.geocode);
            return geocodeFn$({ location });
        })))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([results, status]) => {
            if (status !== google.maps.GeocoderStatus.OK) {
                console.error(status);
            }
            /** @type {?} */
            const firstResult = results && results[0];
            this.address = firstResult && firstResult.formatted_address || 'desconocido';
            this.addressChanges.emit(this.address);
            this.displayInfowindowOverPin();
            this.cdr.detectChanges();
        })));
        this.updateAddress();
        this._idleListener = this.googlemapsWrapper.map.addListener('idle', (/**
         * @return {?}
         */
        () => this.onMapIdle()));
        this._clickListener = this.googlemapsWrapper.map.addListener('click', (/**
         * @return {?}
         */
        () => this.googlemapsWrapper.closeInfowindow(INFOWINDOW_ID)));
    }
    /**
     * Removes the pin from the map
     * @return {?}
     */
    disable() {
        if (this._centerMarker)
            this._centerMarker.remove();
        this._centerMarker = null;
        this._mapEventSubscription.unsubscribe();
        this.googlemapsWrapper.closeInfowindow();
        google.maps.event.removeListener(this._idleListener);
        google.maps.event.removeListener(this._clickListener);
        this.removeFixedMarker();
        this.googlemapsWrapper.closeInfowindow(INFOWINDOW_ID);
    }
    /**
     * @ignore
     * @return {?}
     */
    displayInfowindowOverPin() {
        this.viewContainer.clear();
        /** @type {?} */
        const view = this.viewContainer.createEmbeddedView(this._infowindowTemplate, { $implicit: this.address });
        /** @type {?} */
        const content = (/** @type {?} */ (view.rootNodes[0]));
        /** @type {?} */
        const markerPosition = this.fix ? this._fixedMarker.getPosition() : this.googlemapsWrapper.map.getCenter();
        /** @type {?} */
        const offset = this.googlemapsWrapper.getMetersPerPx(markerPosition.lat()) * 36;
        /** @type {?} */
        const pos = google.maps.geometry.spherical.computeOffset(markerPosition, offset, 0);
        this.googlemapsWrapper
            .openInfowindow(pos, content, INFOWINDOW_ID)
            .setOptions({ disableAutoPan: true });
    }
    /**
     * Geodecode the current pin's location.
     * @return {?}
     */
    updateAddress() {
        /** @type {?} */
        const markerPosition = this.fix ? this._fixedMarker.getPosition() : this.googlemapsWrapper.map.getCenter();
        this._centerChanged$.next(markerPosition);
    }
    /**
     * @ignore
     * @private
     * @return {?}
     */
    setFixedMarker() {
        if (this._fixedMarker)
            this.removeFixedMarker();
        this._fixedMarker = new google.maps.Marker({
            icon: 'https://maps.gstatic.com/mapfiles/markers/marker.png',
            map: this.googlemapsWrapper.map,
            position: this.googlemapsWrapper.map.getCenter(),
        });
        this._fixedMarker.addListener('click', (/**
         * @return {?}
         */
        () => this.displayInfowindowOverPin()));
    }
    /**
     * @ignore
     * @private
     * @return {?}
     */
    removeFixedMarker() {
        if (!this._fixedMarker)
            return;
        this._fixedMarker.setMap(null);
        google.maps.event.clearInstanceListeners(this._fixedMarker);
        this._fixedMarker = null;
    }
    /**
     * @private
     * @return {?}
     */
    onMapIdle() {
        /** @type {?} */
        const center = this.googlemapsWrapper.map.getCenter();
        this.locationChanges.emit(center.toJSON());
        this.updateAddress();
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-googlemaps-tracking-view.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates an embeded google map with polygons representing the tracked objects.
 *
 * \@example
 * <gmtv-map [data]="objectArray" [template]="infowindow" [mapOptions]="mapOptions" [showLocationButton]="true">
 *  <ng-template #infowindow let-o>
 *   <div id="root">
 *     <h4>{{o.name}}</h4>
 *   </div>
 *  </ng-template>
 * </gmtv-map>
 */
class NgxGooglemapsTrackingViewComponent {
    /**
     * @param {?} googlemapsWrapper
     * @param {?} vc
     * @param {?} cdr
     */
    constructor(googlemapsWrapper, vc, cdr) {
        this.googlemapsWrapper = googlemapsWrapper;
        this.vc = vc;
        this.cdr = cdr;
        /**
         * A marker fixed to the center of the map which emits the geo-decoded location
         * as a full address.
         * @see {\@link CenterMarker}
         */
        this.centerPin = new CenterMarker(this.googlemapsWrapper, this.vc, this.cdr);
        this._data = [];
        /**
         * Show location button in controls to retrieve user's location.
         * An https connection is required.
         */
        this.showLocationButton = true;
        /**
         * Set this to `'hover'` to display the infowindow when hovering on the objects.
         * Set this to `'click'` to display the infowindow when clicking on the objects.
         */
        this.triggerInfowindow = 'hover';
    }
    /**
     * Array of {\@link TrackedObject} to draw on map
     * @param {?} val
     * @return {?}
     */
    set data(val) { this._data = val || []; }
    /**
     * @return {?}
     */
    get data() { return this._data; }
    /**
     * Currently inited GoogleMaps  {\@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Map} object
     * @return {?}
     */
    get map() { return this.googlemapsWrapper.map; }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.googlemapsWrapper.initMap(this.mapDiv.nativeElement, this.mapOptions);
    }
    /**
     * Resolves when map has been inited
     * @return {?}
     */
    ready() {
        return this.googlemapsWrapper.ready();
    }
    /**
     * @ignore
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    trackById(_index, item) {
        return item.id;
    }
}
NgxGooglemapsTrackingViewComponent.ɵfac = function NgxGooglemapsTrackingViewComponent_Factory(t) { return new (t || NgxGooglemapsTrackingViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
NgxGooglemapsTrackingViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgxGooglemapsTrackingViewComponent, selectors: [["gmtv-map"]], viewQuery: function NgxGooglemapsTrackingViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.mapDiv = _t.first);
    } }, inputs: { showLocationButton: "showLocationButton", triggerInfowindow: "triggerInfowindow", data: "data", mapOptions: "mapOptions", template: "template" }, decls: 4, vars: 2, consts: [["id", "map"], ["map", ""], ["id", "tracked-object-list"], [3, "template", "triggerInfowindow", "trackedObject", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "template", "triggerInfowindow", "trackedObject"]], template: function NgxGooglemapsTrackingViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgxGooglemapsTrackingViewComponent_gmtv_tracked_object_3_Template, 1, 3, "gmtv-tracked-object", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data)("ngForTrackBy", ctx.trackById);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, TrackedObjectComponent]; }, styles: ["#map[_ngcontent-%COMP%]{height:100%;width:100%;z-index:0}#map[_ngcontent-%COMP%]     .gm-style>div:first-child>div:first-child{z-index:-1!important}"] });
/** @nocollapse */
NgxGooglemapsTrackingViewComponent.ctorParameters = () => [
    { type: GoogleMapsWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef }
];
NgxGooglemapsTrackingViewComponent.propDecorators = {
    mapDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['map', { static: true },] }],
    mapOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    showLocationButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    triggerInfowindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGooglemapsTrackingViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'gmtv-map',
                template: "<div id=\"map\" #map></div>\n\n<div id=\"tracked-object-list\">\n  <gmtv-tracked-object [template]=\"template\" *ngFor=\"let trkObj of data; trackBy: trackById\"\n                       [triggerInfowindow]=\"triggerInfowindow\"\n                       [trackedObject]=\"trkObj\">\n  </gmtv-tracked-object>\n</div>",
                styles: ["#map{height:100%;width:100%;z-index:0}#map ::ng-deep .gm-style>div:first-child>div:first-child{z-index:-1!important}"]
            }]
    }], function () { return [{ type: GoogleMapsWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef }]; }, { showLocationButton: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], triggerInfowindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], mapDiv: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['map', { static: true }]
        }], mapOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/infowindow/infowindow.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InfowindowComponent {
    /**
     * @param {?} googleMaps
     * @param {?} el
     */
    constructor(googleMaps, el) {
        this.googleMaps = googleMaps;
        this.el = el;
        /**
         * When infowindow has closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        /**
         * Triggered on clicking on the X button
         */
        this.closeclick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.noPadding = false;
        this.padding = false;
        this.cssClass = '';
        this.closeOnMapClick = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    /**
     * @return {?}
     */
    get nativeInfowindow() {
        return this.googleMaps.getInfowindow(this.id);
    }
    /**
     * @return {?}
     */
    get addPadding() {
        return (this.isMobile && this.noPadding === false) || this.padding !== false;
    }
    /**
     * @return {?}
     */
    get isMobile() {
        return window.innerWidth < 768;
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this.googleMaps.isInfowindowOpen(this.id);
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        /** @type {?} */
        const template = this.contentTemplateRef || this.defaultTemplateRef;
        this.view = template && template.createEmbeddedView(this.ctx);
        this.googleMaps.click.subscribe((/**
         * @return {?}
         */
        () => this.onMapClick()));
        this.subscription = this.nativeInfowindow['closeclick'].subscribe((/**
         * @return {?}
         */
        () => this.closeclick.emit()));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.id)
            this.googleMaps.destroyInfowindow(this.id);
        this.subscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    getNativeInfowindow() {
        return this.googleMaps.getInfowindow(this.id);
    }
    /**
     * @param {?} anchor
     * @return {?}
     */
    open(anchor) {
        if (this.vc && this.view && !this.view.destroyed)
            this.vc.insert(this.view);
        this.content = this.view && this.view.rootNodes[0];
        this.googleMaps.openInfowindow(anchor, this.content, this.id);
    }
    /**
     * @return {?}
     */
    close() {
        if (this.googleMaps.isInfowindowOpen(this.id)) {
            this.googleMaps.closeInfowindow(this.id);
            this.onClosed();
        }
    }
    /**
     * @ignore
     * @private
     * @return {?}
     */
    onMapClick() {
        if (this.closeOnMapClick)
            this.close();
    }
    /**
     * @ignore
     * @private
     * @return {?}
     */
    onClosed() {
        try {
            this.vc.remove(0);
            this.view.destroy();
            this.vc.clear();
        }
        catch (ex) {
            console.warn(ex);
        }
        this.closed.emit();
    }
}
InfowindowComponent.ɵfac = function InfowindowComponent_Factory(t) { return new (t || InfowindowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsWrapper), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef)); };
InfowindowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InfowindowComponent, selectors: [["gmtv-infowindow"]], viewQuery: function InfowindowComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.root = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.defaultTemplateRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.vc = _t.first);
    } }, inputs: { noPadding: "noPadding", padding: "padding", cssClass: "cssClass", closeOnMapClick: "closeOnMapClick", id: "id", contentTemplateRef: ["template", "contentTemplateRef"], ctx: ["context", "ctx"] }, outputs: { closed: "closed", closeclick: "closeclick" }, decls: 6, vars: 0, consts: [[2, "display", "none"], ["root", ""], ["defaultTemplate", ""], ["vc", ""], ["id", "rootNode"]], template: function InfowindowComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InfowindowComponent_ng_template_2_Template, 18, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](4, null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.JsonPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DecimalPipe], encapsulation: 2 });
/** @nocollapse */
InfowindowComponent.ctorParameters = () => [
    { type: GoogleMapsWrapper },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }
];
InfowindowComponent.propDecorators = {
    root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['root', { static: true },] }],
    defaultTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['defaultTemplate', { static: true },] }],
    vc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: ['vc', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef },] }],
    closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    closeclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }],
    noPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    contentTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['template',] }],
    ctx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input, args: ['context',] }],
    closeOnMapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InfowindowComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
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
            }]
    }], function () { return [{ type: GoogleMapsWrapper }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef }]; }, { closed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], closeclick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }], noPadding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], padding: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], cssClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], closeOnMapClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], root: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['root', { static: true }]
        }], defaultTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['defaultTemplate', { static: true }]
        }], vc: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: ['vc', { static: true, read: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef }]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], contentTemplateRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['template']
        }], ctx: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
            args: ['context']
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/tracked-object/tracked-object.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Size in meters to draw each unity speed on map in a dashed line
 * @type {?}
 */
const SPEED_UNIT_LENGTH_M = 20;
/**
 * Level of detail.
 * Minimal zoom to start drawing objects
 *
 * @type {?}
 */
const LOD = {
    speed: 15,
    scaleTriangle: 15,
    nameLabels: 0
}
/**
 * This class renders a trackable object on the map
 *
 * @example
 * // component.ts
 * const objectsToTrack: TrackedObject[] = [{
 *   id: '1',
 *   color: 'blue',
 *   heading: 45,
 *   label: {text: 'Test object #1' },
 *   position: new google.maps.LatLng(19.53124, -96.91589),
 * }]
 *
 * // component.html
 * <gmtv-map [data]="objectsToTrack"></gmtv-map>
 */
;
/**
 * This class renders a trackable object on the map
 *
 * \@example
 * // component.ts
 * const objectsToTrack: TrackedObject[] = [{
 *   id: '1',
 *   color: 'blue',
 *   heading: 45,
 *   label: {text: 'Test object #1' },
 *   position: new google.maps.LatLng(19.53124, -96.91589),
 * }]
 *
 * // component.html
 * <gmtv-map [data]="objectsToTrack"></gmtv-map>
 */
class TrackedObjectComponent {
    /**
     * @param {?} googleMaps
     */
    constructor(googleMaps) {
        this.googleMaps = googleMaps;
        this.dotMarker = new google.maps.Marker({ position: { lat: NaN, lng: NaN } });
        this.hoverDotListeners = [];
        this.hoverPolygonListeners = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
        this.defaultColor = 'red';
        this.polygon = new google.maps.Polygon({
            strokeColor: this.color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: this.color,
            fillOpacity: !this.offline ? .55 : 0,
            draggable: false
        });
        this.drawSpeedVector = false;
        /**
         * Set this to `'hover'` to display the infowindow when hovering on the object.
         * Set this to `'click'` to display the infowindow when clicking on the object.
         */
        this.triggerInfowindow = 'hover';
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.googleMaps.ready();
            // Add bounds changed event
            this.checkRenderObject();
            this.subscription.add(this.googleMaps.boundsChanged
                .subscribe((/**
             * @return {?}
             */
            () => this.checkRenderObject())));
            this.drawObject();
        });
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.trackedObject)
            return;
        this.drawObject();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.polygon.setMap(null);
        this.vectorLine.setMap(null);
        this.dotMarker.setMap(null);
        this.subscription.unsubscribe();
        if (this.zoomListener)
            this.zoomListener.remove();
    }
    /**
     * Current color for the current tracked object
     * @return {?}
     */
    get color() { return this.trackedObject && this.trackedObject.color || this.defaultColor; }
    /**
     * @protected
     * @return {?}
     */
    get isMoving() { return !!this.trackedObject && this.trackedObject.speed > 0; }
    /**
     * @protected
     * @return {?}
     */
    get offline() { return this.trackedObject && this.trackedObject.isOffline; }
    /**
     * @protected
     * @return {?}
     */
    get hasValidMeasures() { return true; }
    /**
     * Adaptive scale according to current zoom
     * @protected
     * @return {?}
     */
    get scale() {
        /** @type {?} */
        const zoom = this.googleMaps && this.googleMaps.map && this.googleMaps.map.getZoom() || 1;
        /** @type {?} */
        const s = Math.ceil(LOD.scaleTriangle - zoom);
        return Math.pow(2, s) * (this.trackedObject.scale && this.trackedObject.scale || 1);
    }
    /**
     * Tip point
     * @return {?}
     */
    get tipLatLng() {
        if (this.hasValidMeasures)
            return this.polygon && this.polygon.getPath().getAt(3);
        else
            return this.trackedObject.position;
    }
    /**
     * Rear point
     * @return {?}
     */
    get rearLatLng() {
        if (this.hasValidMeasures)
            return this.polygon && this.polygon.getPath().getAt(0);
        else
            return this.trackedObject.position;
    }
    /**
     * @protected
     * @return {?}
     */
    get canDrawPolygon() {
        return this.hasValidMeasures;
    }
    /**
     * Current map's zoom
     * @protected
     * @return {?}
     */
    get zoom() {
        return this.googleMaps.map && this.googleMaps.map.getZoom();
    }
    /**
     * Current relation to convert pixels to meters on the map
     * @return {?}
     */
    getMetersPerPx() {
        if (!this.trackedObject.position || !this.googleMaps.map)
            return 0;
        return this.googleMaps.getMetersPerPx(this.trackedObject.position.lat());
    }
    /**
     * Checks if object is on screen and renders/unrenders it
     * @protected
     * @return {?}
     */
    checkRenderObject() {
        /** @type {?} */
        const path = this.polygon && this.polygon.getPath();
        // If showing a polygon
        if (path && !!path.getLength()) {
            /** @type {?} */
            let isPolygonOnScreen = false;
            if (path.getArray().length) {
                /** @type {?} */
                const bounds = this.googleMaps.map.getBounds();
                path.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                p => isPolygonOnScreen = isPolygonOnScreen || bounds && bounds.contains(p)));
            }
            if (isPolygonOnScreen) {
                this.dotMarker.setVisible(true);
                this.polygon.setVisible(true);
                this.vectorLine.setVisible(true);
            }
            else {
                this.dotMarker.setVisible(false);
                this.polygon.setVisible(false);
                this.vectorLine.setVisible(false);
            }
        }
        // If using the dot marker
        else if (this.dotMarker) {
            /** @type {?} */
            const bounds = this.googleMaps.map.getBounds();
            /** @type {?} */
            const visible = !!bounds && bounds.contains(this.dotMarker.getPosition());
            this.dotMarker.setVisible(visible);
            this.polygon.setVisible(visible);
            this.vectorLine.setVisible(visible);
        }
    }
    /**
     * @protected
     * @return {?}
     */
    clearEventListeners() {
        this.hoverPolygonListeners.forEach((/**
         * @param {?} l
         * @return {?}
         */
        l => l.remove()));
        this.hoverPolygonListeners = [];
        this.hoverDotListeners.forEach((/**
         * @param {?} l
         * @return {?}
         */
        l => l.remove()));
        this.hoverDotListeners = [];
    }
    /**
     * @protected
     * @return {?}
     */
    setupEventListeners() {
        /** @type {?} */
        const showPolygon = (this.canDrawPolygon && this.zoom >= LOD.scaleTriangle) || (this.isMoving && this.zoom < LOD.scaleTriangle);
        if (showPolygon && !this.trackedObject.icon) {
            // Add listeners for polygon, not do
            if (this.hoverPolygonListeners.length < 1) {
                this.clearEventListeners();
                if (this.triggerInfowindow === 'click') {
                    this.hoverPolygonListeners.push(this.polygon.addListener('click', (/**
                     * @return {?}
                     */
                    () => this.onMouseOver())));
                }
                else {
                    if (this.triggerInfowindow === 'hover') {
                        this.hoverPolygonListeners.push(this.polygon.addListener('mouseover', (/**
                         * @return {?}
                         */
                        () => this.onMouseOver())), this.polygon.addListener('mouseout', (/**
                         * @return {?}
                         */
                        () => this.onMouseOut())));
                    }
                }
            }
        }
        else {
            // Add listeners for dot, not polygon
            if (this.hoverDotListeners.length < 1) {
                this.clearEventListeners();
                if (this.triggerInfowindow === 'click') {
                    this.hoverDotListeners.push(this.dotMarker.addListener('click', (/**
                     * @return {?}
                     */
                    () => this.onMouseOver())));
                }
                else {
                    this.hoverDotListeners.push(this.dotMarker.addListener('mouseover', (/**
                     * @return {?}
                     */
                    () => this.onMouseOver())), this.dotMarker.addListener('mouseout', (/**
                     * @return {?}
                     */
                    () => this.onMouseOut())));
                }
            }
        }
        // Listen for zoom change
        if (!this.zoomListener)
            this.zoomListener = this.googleMaps.map.addListener('zoom_changed', (/**
             * @return {?}
             */
            () => this.onZoomChanged()));
    }
    /**
     * Returns the series of icons according to the current zoom level
     * @protected
     * @return {?}
     */
    getSpeedLineIcons() {
        /** @type {?} */
        const s = Math.ceil(this.zoom - LOD.scaleTriangle);
        s <= 0 ? 1 : Math.pow(2, s);
        /** @type {?} */
        const icons = [];
        /** @type {?} */
        const l = SPEED_UNIT_LENGTH_M * this.scale;
        /** @type {?} */
        const dashLength = Math.round(l / this.getMetersPerPx() * .5);
        /** @type {?} */
        const skipIconOnFifth = false;
        // Units
        /** @type {?} */
        const iconUnits = {
            path: `M 0 0 L 0 ${dashLength}`,
            scale: 1,
            strokeWeight: 2,
            fillOpacity: 1
        };
        /** @type {?} */
        const units = Math.round(this.trackedObject.speed);
        for (let i = 1; i <= units; i++) {
            /** @type {?} */
            const percent = Math.round(100 / units * i);
            icons.push({
                icon: (i % 5 == 0 && skipIconOnFifth) ? null : iconUnits,
                offset: `${percent}%`
            });
        }
        // Fifths
        /** @type {?} */
        const iconFifths = {
            path: `M ${dashLength} ${dashLength / 2} L -${dashLength} ${dashLength / 2}`,
            scale: 1,
            strokeWeight: 2,
        };
        /** @type {?} */
        const fifths = Math.floor(units / 5);
        for (let i = 1; i <= fifths; i++) {
            /** @type {?} */
            const percent = Math.round(100 / units * 5 * i);
            icons.push({
                icon: iconFifths,
                offset: `${percent}%`
            });
        }
        return icons;
    }
    /**
     * Initis/updates polyline with icons according to current zoom level
     * @protected
     * @return {?}
     */
    initSpeedPolyline() {
        if (this.vectorLine)
            this.vectorLine.setMap(null);
        this.vectorLine = new google.maps.Polyline({
            strokeColor: 'green',
            strokeWeight: 0,
            draggable: false,
            editable: false,
            path: [],
            icons: this.getSpeedLineIcons(),
            map: this.googleMaps.map,
        });
        this.vectorLine.setVisible(false);
    }
    /**
     * @protected
     * @return {?}
     */
    initDotaMarker() {
        if (this.dotMarker)
            this.dotMarker.setMap(null);
        this.googleMaps.addMarker(this.dotMarker);
    }
    /**
     * @protected
     * @return {?}
     */
    getTrianglePath() {
        if (!this.polygon)
            return [];
        /** @type {?} */
        const positionDot = this.trackedObject.position;
        /** @type {?} */
        const center = positionDot;
        /** @type {?} */
        const h = this.trackedObject.heading || 0;
        /** @type {?} */
        const w = 50;
        /** @type {?} */
        const l = 100;
        /** @type {?} */
        const rear = google.maps.geometry.spherical.computeOffset(center, l / 2 * this.scale, h + 180);
        /** @type {?} */
        const rearLeft = google.maps.geometry.spherical.computeOffset(rear, w / 2 * this.scale, h - 90);
        /** @type {?} */
        const rearRight = google.maps.geometry.spherical.computeOffset(rear, w / 2 * this.scale, h + 90);
        /** @type {?} */
        const tip = google.maps.geometry.spherical.computeOffset(rear, l * this.scale, h);
        return [rear, rearLeft, tip, rearRight];
    }
    /**
     * @protected
     * @param {?} start
     * @return {?}
     */
    getVectorLinePath(start) {
        /** @type {?} */
        const l = SPEED_UNIT_LENGTH_M * this.trackedObject.speed;
        /** @type {?} */
        const end = google.maps.geometry.spherical.computeOffset(start, l, this.trackedObject.speed);
        return [start, end];
    }
    /**
     * @param {?} show
     * @return {?}
     */
    displayInfowindow(show) {
        if (!this.infowindow)
            return;
        if (show) {
            /** @type {?} */
            const o = this.trackedObject.position;
            this.infowindow.open(o);
        }
        else {
            this.infowindow.close();
        }
    }
    /**
     * @return {?}
     */
    drawObject() {
        if (!this.dotMarker)
            this.initDotaMarker();
        this.initSpeedPolyline();
        if (!this.trackedObject.position)
            return;
        this.setupEventListeners();
        /** @type {?} */
        const showDot = !this.isMoving;
        /** @type {?} */
        const showTriangle = this.isMoving && !this.trackedObject.icon;
        /** @type {?} */
        const showSpeedLine = this.drawSpeedVector && this.isMoving && this.zoom >= LOD.speed;
        // Show triangle
        if (showTriangle) {
            /** @type {?} */
            const polygonPath = this.getTrianglePath();
            if (polygonPath.length) {
                this.polygon.setOptions({
                    fillOpacity: !this.offline ? .55 : 0,
                    fillColor: this.color,
                    strokeColor: this.color,
                });
                this.polygon.setPath(polygonPath);
                this.polygon.setVisible(true);
                this.polygon.setMap(this.googleMaps.map);
            }
        }
        else {
            this.polygon.setVisible(false);
            this.polygon.setMap(null);
        }
        // Draw speed vector
        if (showSpeedLine) {
            /** @type {?} */
            const o = this.trackedObject.position;
            /** @type {?} */
            const linePath = this.getVectorLinePath(o);
            this.vectorLine.setPath(linePath);
            this.vectorLine.setVisible(true);
            this.vectorLine.setMap(this.googleMaps.map);
        }
        else {
            this.vectorLine.setVisible(false);
            this.vectorLine.setMap(null);
        }
        // Update dot icon
        this.dotMarker.setIcon(this.trackedObject.icon ||
            {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: this.color,
                fillOpacity: !this.offline && showDot ? 0.6 : 0,
                strokeColor: this.color,
                strokeOpacity: showDot ? 0.9 : 0,
                strokeWeight: 1,
                scale: 10 * (this.trackedObject.scale || 1),
                labelOrigin: new google.maps.Point(0, 3),
                anchor: new google.maps.Point(.5, .5),
            });
        this.dotMarker.setLabel(this.zoom >= LOD.nameLabels ? this.trackedObject.label : '');
        this.dotMarker.setPosition(this.trackedObject.position);
        this.dotMarker.setMap(this.googleMaps.map);
        this.dotMarker.setVisible(true);
    }
    /**
     * @protected
     * @return {?}
     */
    onMouseOver() {
        this.displayInfowindow(true);
    }
    /**
     * @protected
     * @return {?}
     */
    onMouseOut() {
        this.displayInfowindow(false);
    }
    /**
     * @protected
     * @return {?}
     */
    onZoomChanged() {
        this.drawObject();
    }
}
TrackedObjectComponent.ɵfac = function TrackedObjectComponent_Factory(t) { return new (t || TrackedObjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsWrapper)); };
TrackedObjectComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TrackedObjectComponent, selectors: [["gmtv-tracked-object"]], viewQuery: function TrackedObjectComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](InfowindowComponent, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.infowindow = _t.first);
    } }, inputs: { triggerInfowindow: "triggerInfowindow", trackedObject: "trackedObject", template: "template" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 4, consts: [[3, "template", "context"]], template: function TrackedObjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "gmtv-infowindow", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("template", ctx.template)("context", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c4, ctx.trackedObject));
    } }, directives: [InfowindowComponent], encapsulation: 2 });
/** @nocollapse */
TrackedObjectComponent.ctorParameters = () => [
    { type: GoogleMapsWrapper }
];
TrackedObjectComponent.propDecorators = {
    trackedObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    triggerInfowindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    infowindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild, args: [InfowindowComponent, { static: true },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TrackedObjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'gmtv-tracked-object',
                template: "<gmtv-infowindow [template]=\"template\" [context]=\"{$implicit: trackedObject}\"></gmtv-infowindow>"
            }]
    }], function () { return [{ type: GoogleMapsWrapper }]; }, { triggerInfowindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], trackedObject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], infowindow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewChild,
            args: [InfowindowComponent, { static: true }]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/geolocation-button/geolocation-button.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
(geolocation_marker__WEBPACK_IMPORTED_MODULE_0___default());
/**
 * Creates the default user location button.
 *
 * ⚠ Add this component as sibling **AFTER the
 * map element**, so if renders on top of it.
 *
 * \@example
 * <div id="parent" style="height: 100%; width: 100%;">
 *   <div id="map" #map></div>
 *   <gmtv-geolocation-button (locate)="onLocation()"></gmtv-geolocation-button>
 * </div>
 */
class GeolocationButtonComponent {
    /**
     * @param {?} googlemapsWrapper
     */
    constructor(googlemapsWrapper) {
        this.googlemapsWrapper = googlemapsWrapper;
        /**
         * If `true`, the button won't attempt to center the map on the user when clicked,
         * but will emit the event `click` instead.
         *
         * \@example
         *
         * <gmtv-geolocation-button
         *   [useCustomClickFn]="true"
         *   (click)="myCustomFunction()"></gmtv-geolocation-button>
         */
        this.useCustomClickFn = false;
        /**
         * Emited after obtaining the user's location
         */
        this.locate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    /**
     * Get user's location and center map on it
     * @return {?}
     */
    centerOnUser() {
        if (this.useCustomClickFn) {
            return;
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.onPosition(position)), console.error, { enableHighAccuracy: true });
        }
        else {
            console.error('No support for geolocation');
        }
    }
    /**
     * Center the map on a specific position and draw the geoLocationMarker
     * @param {?} lat
     * @param {?} lng
     * @return {?}
     */
    setUserPosition(lat, lng) {
        this.googlemapsWrapper.map.setCenter({ lat, lng });
        if (this._geoLocationMarker)
            this._geoLocationMarker.setMap(null);
        this._geoLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
        this.locate.emit(this._geoLocationMarker.position);
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    onPosition(position) {
        /** @type {?} */
        const lng = position.coords.longitude;
        /** @type {?} */
        const lat = position.coords.latitude;
        // this.googlemapsWrapper.map.setCenter({ lat, lng });
        // if (this._geoLocationMarker) this._geoLocationMarker.setMap(null);
        // this._geoLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
        // this.locate.emit(this._geoLocationMarker.position);
        this.setUserPosition(lat, lng);
    }
}
GeolocationButtonComponent.ɵfac = function GeolocationButtonComponent_Factory(t) { return new (t || GeolocationButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GoogleMapsWrapper)); };
GeolocationButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GeolocationButtonComponent, selectors: [["gmtv-geolocation-button"]], inputs: { useCustomClickFn: "useCustomClickFn" }, outputs: { locate: "locate" }, decls: 2, vars: 0, consts: [["aria-label", "Show Your Location", "id", "widget-mylocation", 1, "widget-mylocation-button", "ripple-container", 3, "click"], [1, "widget-mylocation-button-icon-common", "widget-mylocation-button-normal", "widget-mylocation-cookie"]], template: function GeolocationButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GeolocationButtonComponent_Template_button_click_0_listener() { return ctx.centerOnUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["#widget-mylocation[_ngcontent-%COMP%]{bottom:110px;padding:0;position:absolute;right:10px}.widget-mylocation-button[_ngcontent-%COMP%]{background-color:#fff;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,.3);cursor:pointer;display:block;height:40px;overflow:hidden;transition:background-color .16s ease-out;width:40px}.widget-mylocation-button[_ngcontent-%COMP%]   .widget-mylocation-button-normal[_ngcontent-%COMP%]{background-position:0 0}.widget-mylocation-button[_ngcontent-%COMP%]   .widget-mylocation-cookie[_ngcontent-%COMP%]{background-image:url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png);background-position:2px 2px;background-repeat:no-repeat;background-size:200px 20px;height:100%;width:21px}.widget-mylocation-button-icon-common[_ngcontent-%COMP%]{display:block;height:18px;left:6px;margin:0;padding:0;position:absolute;top:6px;width:18px}"] });
/** @nocollapse */
GeolocationButtonComponent.ctorParameters = () => [
    { type: GoogleMapsWrapper }
];
GeolocationButtonComponent.propDecorators = {
    useCustomClickFn: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input }],
    locate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeolocationButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Component,
        args: [{
                selector: 'gmtv-geolocation-button',
                template: "<button aria-label=\"Show Your Location\" id=\"widget-mylocation\" class=\"widget-mylocation-button ripple-container\"\n  (click)=\"centerOnUser()\">\n  <div class=\"widget-mylocation-button-icon-common widget-mylocation-button-normal widget-mylocation-cookie\"></div>\n</button>",
                styles: ["#widget-mylocation{bottom:110px;padding:0;position:absolute;right:10px}.widget-mylocation-button{background-color:#fff;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,.3);cursor:pointer;display:block;height:40px;overflow:hidden;transition:background-color .16s ease-out;width:40px}.widget-mylocation-button .widget-mylocation-button-normal{background-position:0 0}.widget-mylocation-button .widget-mylocation-cookie{background-image:url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png);background-position:2px 2px;background-repeat:no-repeat;background-size:200px 20px;height:100%;width:21px}.widget-mylocation-button-icon-common{display:block;height:18px;left:6px;margin:0;padding:0;position:absolute;top:6px;width:18px}"]
            }]
    }], function () { return [{ type: GoogleMapsWrapper }]; }, { useCustomClickFn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input
        }], locate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-googlemaps-tracking-view.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxGooglemapsTrackingViewModule {
}
NgxGooglemapsTrackingViewModule.ɵfac = function NgxGooglemapsTrackingViewModule_Factory(t) { return new (t || NgxGooglemapsTrackingViewModule)(); };
NgxGooglemapsTrackingViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: NgxGooglemapsTrackingViewModule });
NgxGooglemapsTrackingViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [GoogleMapsWrapper], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NgxGooglemapsTrackingViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
        args: [{
                declarations: [
                    NgxGooglemapsTrackingViewComponent,
                    TrackedObjectComponent,
                    InfowindowComponent,
                    GeolocationButtonComponent
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
                ],
                providers: [GoogleMapsWrapper],
                exports: [
                    NgxGooglemapsTrackingViewComponent,
                    InfowindowComponent,
                    GeolocationButtonComponent
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](NgxGooglemapsTrackingViewModule, { declarations: function () { return [NgxGooglemapsTrackingViewComponent, TrackedObjectComponent, InfowindowComponent, GeolocationButtonComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule]; }, exports: function () { return [NgxGooglemapsTrackingViewComponent, InfowindowComponent, GeolocationButtonComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/tracked-object.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/// <reference types="@types/googlemaps" />
/// <reference types="@types/googlemaps" />
/**
 * Interface that tracked objects must implement
 * @record
 */
function TrackedObject() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-googlemaps-tracking-view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 39745:
/*!*****************************************************!*\
  !*** ./node_modules/parse-headers/parse-headers.js ***!
  \*****************************************************/
/***/ (function(module) {

var trim = function(string) {
  return string.replace(/^\s+|\s+$/g, '');
}
  , isArray = function(arg) {
      return Object.prototype.toString.call(arg) === '[object Array]';
    }

module.exports = function (headers) {
  if (!headers)
    return {}

  var result = {}

  var headersArr = trim(headers).split('\n')

  for (var i = 0; i < headersArr.length; i++) {
    var row = headersArr[i]
    var index = row.indexOf(':')
    , key = trim(row.slice(0, index)).toLowerCase()
    , value = trim(row.slice(index + 1))

    if (typeof(result[key]) === 'undefined') {
      result[key] = value
    } else if (isArray(result[key])) {
      result[key].push(value)
    } else {
      result[key] = [ result[key], value ]
    }
  }

  return result
}


/***/ }),

/***/ 22757:
/*!**********************************************!*\
  !*** ./node_modules/parse-svg-path/index.js ***!
  \**********************************************/
/***/ (function(module) {


module.exports = parse

/**
 * expected argument lengths
 * @type {Object}
 */

var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}

/**
 * segment pattern
 * @type {RegExp}
 */

var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
	var data = []
	path.replace(segment, function(_, command, args){
		var type = command.toLowerCase()
		args = parseValues(args)

		// overloaded moveTo
		if (type == 'm' && args.length > 2) {
			data.push([command].concat(args.splice(0, 2)))
			type = 'l'
			command = command == 'm' ? 'l' : 'L'
		}

		while (true) {
			if (args.length == length[type]) {
				args.unshift(command)
				return data.push(args)
			}
			if (args.length < length[type]) throw new Error('malformed path data')
			data.push([command].concat(args.splice(0, length[type])))
		}
	})
	return data
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig

function parseValues(args) {
	var numbers = args.match(number)
	return numbers ? numbers.map(Number) : []
}


/***/ }),

/***/ 29339:
/*!*************************************************!*\
  !*** ./node_modules/randomcolor/randomColor.js ***!
  \*************************************************/
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
// randomColor by David Merfield under the CC0 license
// https://github.com/davidmerfield/randomColor/

;(function(root, factory) {

  // Support CommonJS
  if (true) {
    var randomColor = factory();

    // Support NodeJS & Component, which allow module.exports to be a function
    if ( true && module && module.exports) {
      exports = module.exports = randomColor;
    }

    // Support CommonJS 1.1.1 spec
    exports.randomColor = randomColor;

  // Support AMD
  } else {}

}(this, function() {

  // Seed to get repeatable colors
  var seed = null;

  // Shared color dictionary
  var colorDictionary = {};

  // Populate the color dictionary
  loadColorBounds();

  // check if a range is taken
  var colorRanges = [];

  var randomColor = function (options) {

    options = options || {};

    // Check if there is a seed and ensure it's an
    // integer. Otherwise, reset the seed value.
    if (options.seed !== undefined && options.seed !== null && options.seed === parseInt(options.seed, 10)) {
      seed = options.seed;

    // A string was passed as a seed
    } else if (typeof options.seed === 'string') {
      seed = stringToInteger(options.seed);

    // Something was passed as a seed but it wasn't an integer or string
    } else if (options.seed !== undefined && options.seed !== null) {
      throw new TypeError('The seed value must be an integer or string');

    // No seed, reset the value outside.
    } else {
      seed = null;
    }

    var H,S,B;

    // Check if we need to generate multiple colors
    if (options.count !== null && options.count !== undefined) {

      var totalColors = options.count,
          colors = [];
      // Value false at index i means the range i is not taken yet.
      for (var i = 0; i < options.count; i++) {
        colorRanges.push(false)
        }
      options.count = null;

      while (totalColors > colors.length) {

        // Since we're generating multiple colors,
        // incremement the seed. Otherwise we'd just
        // generate the same color each time...
        if (seed && options.seed) options.seed += 1;

        colors.push(randomColor(options));
      }

      options.count = totalColors;

      return colors;
    }

    // First we pick a hue (H)
    H = pickHue(options);

    // Then use H to determine saturation (S)
    S = pickSaturation(H, options);

    // Then use S and H to determine brightness (B).
    B = pickBrightness(H, S, options);

    // Then we return the HSB color in the desired format
    return setFormat([H,S,B], options);
  };

  function pickHue(options) {
    if (colorRanges.length > 0) {
      var hueRange = getRealHueRange(options.hue)

      var hue = randomWithin(hueRange)

      //Each of colorRanges.length ranges has a length equal approximatelly one step
      var step = (hueRange[1] - hueRange[0]) / colorRanges.length

      var j = parseInt((hue - hueRange[0]) / step)

      //Check if the range j is taken
      if (colorRanges[j] === true) {
        j = (j + 2) % colorRanges.length
      }
      else {
        colorRanges[j] = true
           }

      var min = (hueRange[0] + j * step) % 359,
          max = (hueRange[0] + (j + 1) * step) % 359;

      hueRange = [min, max]

      hue = randomWithin(hueRange)

      if (hue < 0) {hue = 360 + hue;}
      return hue
    }
    else {
      var hueRange = getHueRange(options.hue)

      hue = randomWithin(hueRange);
      // Instead of storing red as two seperate ranges,
      // we group them, using negative numbers
      if (hue < 0) {
        hue = 360 + hue;
      }

      return hue;
    }
  }

  function pickSaturation (hue, options) {

    if (options.hue === 'monochrome') {
      return 0;
    }

    if (options.luminosity === 'random') {
      return randomWithin([0,100]);
    }

    var saturationRange = getSaturationRange(hue);

    var sMin = saturationRange[0],
        sMax = saturationRange[1];

    switch (options.luminosity) {

      case 'bright':
        sMin = 55;
        break;

      case 'dark':
        sMin = sMax - 10;
        break;

      case 'light':
        sMax = 55;
        break;
   }

    return randomWithin([sMin, sMax]);

  }

  function pickBrightness (H, S, options) {

    var bMin = getMinimumBrightness(H, S),
        bMax = 100;

    switch (options.luminosity) {

      case 'dark':
        bMax = bMin + 20;
        break;

      case 'light':
        bMin = (bMax + bMin)/2;
        break;

      case 'random':
        bMin = 0;
        bMax = 100;
        break;
    }

    return randomWithin([bMin, bMax]);
  }

  function setFormat (hsv, options) {

    switch (options.format) {

      case 'hsvArray':
        return hsv;

      case 'hslArray':
        return HSVtoHSL(hsv);

      case 'hsl':
        var hsl = HSVtoHSL(hsv);
        return 'hsl('+hsl[0]+', '+hsl[1]+'%, '+hsl[2]+'%)';

      case 'hsla':
        var hslColor = HSVtoHSL(hsv);
        var alpha = options.alpha || Math.random();
        return 'hsla('+hslColor[0]+', '+hslColor[1]+'%, '+hslColor[2]+'%, ' + alpha + ')';

      case 'rgbArray':
        return HSVtoRGB(hsv);

      case 'rgb':
        var rgb = HSVtoRGB(hsv);
        return 'rgb(' + rgb.join(', ') + ')';

      case 'rgba':
        var rgbColor = HSVtoRGB(hsv);
        var alpha = options.alpha || Math.random();
        return 'rgba(' + rgbColor.join(', ') + ', ' + alpha + ')';

      default:
        return HSVtoHex(hsv);
    }

  }

  function getMinimumBrightness(H, S) {

    var lowerBounds = getColorInfo(H).lowerBounds;

    for (var i = 0; i < lowerBounds.length - 1; i++) {

      var s1 = lowerBounds[i][0],
          v1 = lowerBounds[i][1];

      var s2 = lowerBounds[i+1][0],
          v2 = lowerBounds[i+1][1];

      if (S >= s1 && S <= s2) {

         var m = (v2 - v1)/(s2 - s1),
             b = v1 - m*s1;

         return m*S + b;
      }

    }

    return 0;
  }

  function getHueRange (colorInput) {

    if (typeof parseInt(colorInput) === 'number') {

      var number = parseInt(colorInput);

      if (number < 360 && number > 0) {
        return [number, number];
      }

    }

    if (typeof colorInput === 'string') {

      if (colorDictionary[colorInput]) {
        var color = colorDictionary[colorInput];
        if (color.hueRange) {return color.hueRange;}
      } else if (colorInput.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorInput)[0];
        return [ hue, hue ];
      }
    }

    return [0,360];

  }

  function getSaturationRange (hue) {
    return getColorInfo(hue).saturationRange;
  }

  function getColorInfo (hue) {

    // Maps red colors to make picking hue easier
    if (hue >= 334 && hue <= 360) {
      hue-= 360;
    }

    for (var colorName in colorDictionary) {
       var color = colorDictionary[colorName];
       if (color.hueRange &&
           hue >= color.hueRange[0] &&
           hue <= color.hueRange[1]) {
          return colorDictionary[colorName];
       }
    } return 'Color not found';
  }

  function randomWithin (range) {
    if (seed === null) {
      //generate random evenly destinct number from : https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
      var golden_ratio = 0.618033988749895
      var r=Math.random()
      r += golden_ratio
      r %= 1
      return Math.floor(range[0] + r*(range[1] + 1 - range[0]));
    } else {
      //Seeded random algorithm from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
      var max = range[1] || 1;
      var min = range[0] || 0;
      seed = (seed * 9301 + 49297) % 233280;
      var rnd = seed / 233280.0;
      return Math.floor(min + rnd * (max - min));
}
  }

  function HSVtoHex (hsv){

    var rgb = HSVtoRGB(hsv);

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }

    var hex = '#' + componentToHex(rgb[0]) + componentToHex(rgb[1]) + componentToHex(rgb[2]);

    return hex;

  }

  function defineColor (name, hueRange, lowerBounds) {

    var sMin = lowerBounds[0][0],
        sMax = lowerBounds[lowerBounds.length - 1][0],

        bMin = lowerBounds[lowerBounds.length - 1][1],
        bMax = lowerBounds[0][1];

    colorDictionary[name] = {
      hueRange: hueRange,
      lowerBounds: lowerBounds,
      saturationRange: [sMin, sMax],
      brightnessRange: [bMin, bMax]
    };

  }

  function loadColorBounds () {

    defineColor(
      'monochrome',
      null,
      [[0,0],[100,0]]
    );

    defineColor(
      'red',
      [-26,18],
      [[20,100],[30,92],[40,89],[50,85],[60,78],[70,70],[80,60],[90,55],[100,50]]
    );

    defineColor(
      'orange',
      [19,46],
      [[20,100],[30,93],[40,88],[50,86],[60,85],[70,70],[100,70]]
    );

    defineColor(
      'yellow',
      [47,62],
      [[25,100],[40,94],[50,89],[60,86],[70,84],[80,82],[90,80],[100,75]]
    );

    defineColor(
      'green',
      [63,178],
      [[30,100],[40,90],[50,85],[60,81],[70,74],[80,64],[90,50],[100,40]]
    );

    defineColor(
      'blue',
      [179, 257],
      [[20,100],[30,86],[40,80],[50,74],[60,60],[70,52],[80,44],[90,39],[100,35]]
    );

    defineColor(
      'purple',
      [258, 282],
      [[20,100],[30,87],[40,79],[50,70],[60,65],[70,59],[80,52],[90,45],[100,42]]
    );

    defineColor(
      'pink',
      [283, 334],
      [[20,100],[30,90],[40,86],[60,84],[80,80],[90,75],[100,73]]
    );

  }

  function HSVtoRGB (hsv) {

    // this doesn't work for the values of 0 and 360
    // here's the hacky fix
    var h = hsv[0];
    if (h === 0) {h = 1;}
    if (h === 360) {h = 359;}

    // Rebase the h,s,v values
    h = h/360;
    var s = hsv[1]/100,
        v = hsv[2]/100;

    var h_i = Math.floor(h*6),
      f = h * 6 - h_i,
      p = v * (1 - s),
      q = v * (1 - f*s),
      t = v * (1 - (1 - f)*s),
      r = 256,
      g = 256,
      b = 256;

    switch(h_i) {
      case 0: r = v; g = t; b = p;  break;
      case 1: r = q; g = v; b = p;  break;
      case 2: r = p; g = v; b = t;  break;
      case 3: r = p; g = q; b = v;  break;
      case 4: r = t; g = p; b = v;  break;
      case 5: r = v; g = p; b = q;  break;
    }

    var result = [Math.floor(r*255), Math.floor(g*255), Math.floor(b*255)];
    return result;
  }

  function HexToHSB (hex) {
    hex = hex.replace(/^#/, '');
    hex = hex.length === 3 ? hex.replace(/(.)/g, '$1$1') : hex;

    var red = parseInt(hex.substr(0, 2), 16) / 255,
          green = parseInt(hex.substr(2, 2), 16) / 255,
          blue = parseInt(hex.substr(4, 2), 16) / 255;

    var cMax = Math.max(red, green, blue),
          delta = cMax - Math.min(red, green, blue),
          saturation = cMax ? (delta / cMax) : 0;

    switch (cMax) {
      case red: return [ 60 * (((green - blue) / delta) % 6) || 0, saturation, cMax ];
      case green: return [ 60 * (((blue - red) / delta) + 2) || 0, saturation, cMax ];
      case blue: return [ 60 * (((red - green) / delta) + 4) || 0, saturation, cMax ];
    }
  }

  function HSVtoHSL (hsv) {
    var h = hsv[0],
      s = hsv[1]/100,
      v = hsv[2]/100,
      k = (2-s)*v;

    return [
      h,
      Math.round(s*v / (k<1 ? k : 2-k) * 10000) / 100,
      k/2 * 100
    ];
  }

  function stringToInteger (string) {
    var total = 0
    for (var i = 0; i !== string.length; i++) {
      if (total >= Number.MAX_SAFE_INTEGER) break;
      total += string.charCodeAt(i)
    }
    return total
  }

  // get The range of given hue when options.count!=0
  function getRealHueRange(colorHue)
  { if (!isNaN(colorHue)) {
    var number = parseInt(colorHue);

    if (number < 360 && number > 0) {
      return getColorInfo(colorHue).hueRange
    }
  }
    else if (typeof colorHue === 'string') {

      if (colorDictionary[colorHue]) {
        var color = colorDictionary[colorHue];

        if (color.hueRange) {
          return color.hueRange
       }
    } else if (colorHue.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
        var hue = HexToHSB(colorHue)[0]
        return getColorInfo(hue).hueRange
    }
  }

    return [0,360]
}
  return randomColor;
}));


/***/ }),

/***/ 83588:
/*!*************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/AsyncSubject.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncSubject": function() { return /* binding */ AsyncSubject; }
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subject */ 31303);
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ 59651);


class AsyncSubject extends _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject {
    constructor() {
        super(...arguments);
        this.value = null;
        this.hasNext = false;
        this.hasCompleted = false;
    }
    _subscribe(subscriber) {
        if (this.hasError) {
            subscriber.error(this.thrownError);
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
        }
        else if (this.hasCompleted && this.hasNext) {
            subscriber.next(this.value);
            subscriber.complete();
            return _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription.EMPTY;
        }
        return super._subscribe(subscriber);
    }
    next(value) {
        if (!this.hasCompleted) {
            this.value = value;
            this.hasNext = true;
        }
    }
    error(error) {
        if (!this.hasCompleted) {
            super.error(error);
        }
    }
    complete() {
        this.hasCompleted = true;
        if (this.hasNext) {
            super.next(this.value);
        }
        super.complete();
    }
}


/***/ }),

/***/ 76186:
/*!**********************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/Scheduler.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Scheduler": function() { return /* binding */ Scheduler; }
/* harmony export */ });
class Scheduler {
    constructor(SchedulerAction, now = Scheduler.now) {
        this.SchedulerAction = SchedulerAction;
        this.now = now;
    }
    schedule(work, delay = 0, state) {
        return new this.SchedulerAction(this, work).schedule(state, delay);
    }
}
Scheduler.now = () => Date.now();


/***/ }),

/***/ 79441:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/bindCallback.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindCallback": function() { return /* binding */ bindCallback; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 73645);
/* harmony import */ var _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AsyncSubject */ 83588);
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/map */ 48740);
/* harmony import */ var _util_canReportError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/canReportError */ 60591);
/* harmony import */ var _util_isArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArray */ 20275);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isScheduler */ 28029);






function bindCallback(callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_0__.isScheduler)(resultSelector)) {
            scheduler = resultSelector;
        }
        else {
            return (...args) => bindCallback(callbackFunc, scheduler)(...args).pipe((0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)((args) => (0,_util_isArray__WEBPACK_IMPORTED_MODULE_2__.isArray)(args) ? resultSelector(...args) : resultSelector(args)));
        }
    }
    return function (...args) {
        const context = this;
        let subject;
        const params = {
            context,
            subject,
            callbackFunc,
            scheduler,
        };
        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
            if (!scheduler) {
                if (!subject) {
                    subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__.AsyncSubject();
                    const handler = (...innerArgs) => {
                        subject.next(innerArgs.length <= 1 ? innerArgs[0] : innerArgs);
                        subject.complete();
                    };
                    try {
                        callbackFunc.apply(context, [...args, handler]);
                    }
                    catch (err) {
                        if ((0,_util_canReportError__WEBPACK_IMPORTED_MODULE_5__.canReportError)(subject)) {
                            subject.error(err);
                        }
                        else {
                            console.warn(err);
                        }
                    }
                }
                return subject.subscribe(subscriber);
            }
            else {
                const state = {
                    args, subscriber, params,
                };
                return scheduler.schedule(dispatch, 0, state);
            }
        });
    };
}
function dispatch(state) {
    const self = this;
    const { args, subscriber, params } = state;
    const { callbackFunc, context, scheduler } = params;
    let { subject } = params;
    if (!subject) {
        subject = params.subject = new _AsyncSubject__WEBPACK_IMPORTED_MODULE_4__.AsyncSubject();
        const handler = (...innerArgs) => {
            const value = innerArgs.length <= 1 ? innerArgs[0] : innerArgs;
            this.add(scheduler.schedule(dispatchNext, 0, { value, subject }));
        };
        try {
            callbackFunc.apply(context, [...args, handler]);
        }
        catch (err) {
            subject.error(err);
        }
    }
    this.add(subject.subscribe(subscriber));
}
function dispatchNext(state) {
    const { value, subject } = state;
    subject.next(value);
    subject.complete();
}
function dispatchError(state) {
    const { err, subject } = state;
    subject.error(err);
}


/***/ }),

/***/ 25276:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/observable/timer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timer": function() { return /* binding */ timer; }
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Observable */ 73645);
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scheduler/async */ 24248);
/* harmony import */ var _util_isNumeric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isNumeric */ 46178);
/* harmony import */ var _util_isScheduler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isScheduler */ 28029);




function timer(dueTime = 0, periodOrScheduler, scheduler) {
    let period = -1;
    if ((0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(periodOrScheduler)) {
        period = Number(periodOrScheduler) < 1 && 1 || Number(periodOrScheduler);
    }
    else if ((0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(periodOrScheduler)) {
        scheduler = periodOrScheduler;
    }
    if (!(0,_util_isScheduler__WEBPACK_IMPORTED_MODULE_1__.isScheduler)(scheduler)) {
        scheduler = _scheduler_async__WEBPACK_IMPORTED_MODULE_2__.async;
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(subscriber => {
        const due = (0,_util_isNumeric__WEBPACK_IMPORTED_MODULE_0__.isNumeric)(dueTime)
            ? dueTime
            : (+dueTime - scheduler.now());
        return scheduler.schedule(dispatch, due, {
            index: 0, period, subscriber
        });
    });
}
function dispatch(state) {
    const { index, period, subscriber } = state;
    subscriber.next(index);
    if (subscriber.closed) {
        return;
    }
    else if (period === -1) {
        return subscriber.complete();
    }
    state.index = index + 1;
    this.schedule(state, period);
}


/***/ }),

/***/ 80225:
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/operators/debounce.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "debounce": function() { return /* binding */ debounce; }
/* harmony export */ });
/* harmony import */ var _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../OuterSubscriber */ 48629);
/* harmony import */ var _util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/subscribeToResult */ 78568);


function debounce(durationSelector) {
    return (source) => source.lift(new DebounceOperator(durationSelector));
}
class DebounceOperator {
    constructor(durationSelector) {
        this.durationSelector = durationSelector;
    }
    call(subscriber, source) {
        return source.subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
    }
}
class DebounceSubscriber extends _OuterSubscriber__WEBPACK_IMPORTED_MODULE_0__.OuterSubscriber {
    constructor(destination, durationSelector) {
        super(destination);
        this.durationSelector = durationSelector;
        this.hasValue = false;
        this.durationSubscription = null;
    }
    _next(value) {
        try {
            const result = this.durationSelector.call(this, value);
            if (result) {
                this._tryNext(value, result);
            }
        }
        catch (err) {
            this.destination.error(err);
        }
    }
    _complete() {
        this.emitValue();
        this.destination.complete();
    }
    _tryNext(value, duration) {
        let subscription = this.durationSubscription;
        this.value = value;
        this.hasValue = true;
        if (subscription) {
            subscription.unsubscribe();
            this.remove(subscription);
        }
        subscription = (0,_util_subscribeToResult__WEBPACK_IMPORTED_MODULE_1__.subscribeToResult)(this, duration);
        if (subscription && !subscription.closed) {
            this.add(this.durationSubscription = subscription);
        }
    }
    notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        this.emitValue();
    }
    notifyComplete() {
        this.emitValue();
    }
    emitValue() {
        if (this.hasValue) {
            const value = this.value;
            const subscription = this.durationSubscription;
            if (subscription) {
                this.durationSubscription = null;
                subscription.unsubscribe();
                this.remove(subscription);
            }
            this.value = null;
            this.hasValue = false;
            super._next(value);
        }
    }
}


/***/ }),

/***/ 40503:
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/Action.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Action": function() { return /* binding */ Action; }
/* harmony export */ });
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subscription */ 59651);

class Action extends _Subscription__WEBPACK_IMPORTED_MODULE_0__.Subscription {
    constructor(scheduler, work) {
        super();
    }
    schedule(state, delay = 0) {
        return this;
    }
}


/***/ }),

/***/ 90083:
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncAction.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncAction": function() { return /* binding */ AsyncAction; }
/* harmony export */ });
/* harmony import */ var _Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Action */ 40503);

class AsyncAction extends _Action__WEBPACK_IMPORTED_MODULE_0__.Action {
    constructor(scheduler, work) {
        super(scheduler, work);
        this.scheduler = scheduler;
        this.work = work;
        this.pending = false;
    }
    schedule(state, delay = 0) {
        if (this.closed) {
            return this;
        }
        this.state = state;
        const id = this.id;
        const scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    }
    requestAsyncId(scheduler, id, delay = 0) {
        return setInterval(scheduler.flush.bind(scheduler, this), delay);
    }
    recycleAsyncId(scheduler, id, delay = 0) {
        if (delay !== null && this.delay === delay && this.pending === false) {
            return id;
        }
        clearInterval(id);
        return undefined;
    }
    execute(state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        const error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    }
    _execute(state, delay) {
        let errored = false;
        let errorValue = undefined;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    }
    _unsubscribe() {
        const id = this.id;
        const scheduler = this.scheduler;
        const actions = scheduler.actions;
        const index = actions.indexOf(this);
        this.work = null;
        this.state = null;
        this.pending = false;
        this.scheduler = null;
        if (index !== -1) {
            actions.splice(index, 1);
        }
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
        }
        this.delay = null;
    }
}


/***/ }),

/***/ 84445:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/AsyncScheduler.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AsyncScheduler": function() { return /* binding */ AsyncScheduler; }
/* harmony export */ });
/* harmony import */ var _Scheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Scheduler */ 76186);

class AsyncScheduler extends _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler {
    constructor(SchedulerAction, now = _Scheduler__WEBPACK_IMPORTED_MODULE_0__.Scheduler.now) {
        super(SchedulerAction, () => {
            if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
                return AsyncScheduler.delegate.now();
            }
            else {
                return now();
            }
        });
        this.actions = [];
        this.active = false;
        this.scheduled = undefined;
    }
    schedule(work, delay = 0, state) {
        if (AsyncScheduler.delegate && AsyncScheduler.delegate !== this) {
            return AsyncScheduler.delegate.schedule(work, delay, state);
        }
        else {
            return super.schedule(work, delay, state);
        }
    }
    flush(action) {
        const { actions } = this;
        if (this.active) {
            actions.push(action);
            return;
        }
        let error;
        this.active = true;
        do {
            if (error = action.execute(action.state, action.delay)) {
                break;
            }
        } while (action = actions.shift());
        this.active = false;
        if (error) {
            while (action = actions.shift()) {
                action.unsubscribe();
            }
            throw error;
        }
    }
}


/***/ }),

/***/ 24248:
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/scheduler/async.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "async": function() { return /* binding */ async; }
/* harmony export */ });
/* harmony import */ var _AsyncAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AsyncAction */ 90083);
/* harmony import */ var _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AsyncScheduler */ 84445);


const async = new _AsyncScheduler__WEBPACK_IMPORTED_MODULE_0__.AsyncScheduler(_AsyncAction__WEBPACK_IMPORTED_MODULE_1__.AsyncAction);


/***/ }),

/***/ 46178:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/_esm2015/internal/util/isNumeric.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isNumeric": function() { return /* binding */ isNumeric; }
/* harmony export */ });
/* harmony import */ var _isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isArray */ 20275);

function isNumeric(val) {
    return !(0,_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(val) && (val - parseFloat(val) + 1) >= 0;
}


/***/ }),

/***/ 33147:
/*!***********************************!*\
  !*** ./node_modules/xhr/index.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var window = __webpack_require__(/*! global/window */ 99336)
var once = __webpack_require__(/*! once */ 76785)
var parseHeaders = __webpack_require__(/*! parse-headers */ 39745)

var messages = {
    "0": "Internal XMLHttpRequest Error",
    "4": "4xx Client Error",
    "5": "5xx Server Error"
}

var XHR = window.XMLHttpRequest || noop
var XDR = "withCredentials" in (new XHR()) ? XHR : window.XDomainRequest

module.exports = createXHR

function createXHR(options, callback) {
    if (typeof options === "string") {
        options = { uri: options }
    }

    options = options || {}
    callback = once(callback)

    var xhr = options.xhr || null

    if (!xhr) {
        if (options.cors || options.useXDR) {
            xhr = new XDR()
        }else{
            xhr = new XHR()
        }
    }

    var uri = xhr.url = options.uri || options.url
    var method = xhr.method = options.method || "GET"
    var body = options.body || options.data
    var headers = xhr.headers = options.headers || {}
    var sync = !!options.sync
    var isJson = false
    var key
    var load = options.response ? loadResponse : loadXhr

    if ("json" in options) {
        isJson = true
        headers["Accept"] = "application/json"
        if (method !== "GET" && method !== "HEAD") {
            headers["Content-Type"] = "application/json"
            body = JSON.stringify(options.json)
        }
    }

    xhr.onreadystatechange = readystatechange
    xhr.onload = load
    xhr.onerror = error
    // IE9 must have onprogress be set to a unique function.
    xhr.onprogress = function () {
        // IE must die
    }
    // hate IE
    xhr.ontimeout = noop
    xhr.open(method, uri, !sync)
                                    //backward compatibility
    if (options.withCredentials || (options.cors && options.withCredentials !== false)) {
        xhr.withCredentials = true
    }

    // Cannot set timeout with sync request
    if (!sync) {
        xhr.timeout = "timeout" in options ? options.timeout : 5000
    }

    if (xhr.setRequestHeader) {
        for(key in headers){
            if(headers.hasOwnProperty(key)){
                xhr.setRequestHeader(key, headers[key])
            }
        }
    } else if (options.headers) {
        throw new Error("Headers cannot be set on an XDomainRequest object")
    }

    if ("responseType" in options) {
        xhr.responseType = options.responseType
    }
    
    if ("beforeSend" in options && 
        typeof options.beforeSend === "function"
    ) {
        options.beforeSend(xhr)
    }

    xhr.send(body)

    return xhr

    function readystatechange() {
        if (xhr.readyState === 4) {
            load()
        }
    }

    function getBody() {
        // Chrome with requestType=blob throws errors arround when even testing access to responseText
        var body = null

        if (xhr.response) {
            body = xhr.response
        } else if (xhr.responseType === 'text' || !xhr.responseType) {
            body = xhr.responseText || xhr.responseXML
        }

        if (isJson) {
            try {
                body = JSON.parse(body)
            } catch (e) {}
        }

        return body
    }

    function getStatusCode() {
        return xhr.status === 1223 ? 204 : xhr.status
    }

    // if we're getting a none-ok statusCode, build & return an error
    function errorFromStatusCode(status, body) {
        var error = null
        if (status === 0 || (status >= 400 && status < 600)) {
            var message = (typeof body === "string" ? body : false) ||
                messages[String(status).charAt(0)]
            error = new Error(message)
            error.statusCode = status
        }

        return error
    }

    // will load the data & process the response in a special response object
    function loadResponse() {
        var status = getStatusCode()
        var body = getBody()
        var error = errorFromStatusCode(status, body)
        var response = {
            body: body,
            statusCode: status,
            statusText: xhr.statusText,
            raw: xhr
        }
        if(xhr.getAllResponseHeaders){ //remember xhr can in fact be XDR for CORS in IE
            response.headers = parseHeaders(xhr.getAllResponseHeaders())
        } else {
            response.headers = {}
        }

        callback(error, response, response.body)
    }

    // will load the data and add some response properties to the source xhr
    // and then respond with that
    function loadXhr() {
        var status = getStatusCode()
        var error = errorFromStatusCode(status)

        xhr.status = xhr.statusCode = status
        xhr.body = getBody()
        xhr.headers = parseHeaders(xhr.getAllResponseHeaders())

        callback(error, xhr, xhr.body)
    }

    function error(evt) {
        callback(evt, xhr)
    }
}


function noop() {}


/***/ }),

/***/ 76785:
/*!****************************************************!*\
  !*** ./node_modules/xhr/node_modules/once/once.js ***!
  \****************************************************/
/***/ (function(module) {

module.exports = once

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })
})

function once (fn) {
  var called = false
  return function () {
    if (called) return
    called = true
    return fn.apply(this, arguments)
  }
}


/***/ }),

/***/ 10307:
/*!*****************************************************!*\
  !*** ./node_modules/xml-parse-from-string/index.js ***!
  \*****************************************************/
/***/ (function(module) {

module.exports = (function xmlparser() {
  //common browsers
  if (typeof self.DOMParser !== 'undefined') {
    return function(str) {
      var parser = new self.DOMParser()
      return parser.parseFromString(str, 'application/xml')
    }
  } 

  //IE8 fallback
  if (typeof self.ActiveXObject !== 'undefined'
      && new self.ActiveXObject('Microsoft.XMLDOM')) {
    return function(str) {
      var xmlDoc = new self.ActiveXObject("Microsoft.XMLDOM")
      xmlDoc.async = "false"
      xmlDoc.loadXML(str)
      return xmlDoc
    }
  }

  //last resort fallback
  return function(str) {
    var div = document.createElement('div')
    div.innerHTML = str
    return div
  }
})()


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": function() { return /* binding */ HomePageModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 93806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 41407);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 69134);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 62267);
/* harmony import */ var ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-googlemaps-tracking-view */ 37505);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 66538);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 96900);








class HomePageModule {
}
HomePageModule.ɵfac = function HomePageModule_Factory(t) { return new (t || HomePageModule)(); };
HomePageModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomePageModule });
HomePageModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[
            ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_2__.NgxGooglemapsTrackingViewModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
                }
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomePageModule, { declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage], imports: [ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_2__.NgxGooglemapsTrackingViewModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 62267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": function() { return /* binding */ HomePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 15396);
/* harmony import */ var ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-googlemaps-tracking-view */ 37505);
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18n-iso-countries */ 22646);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! randomcolor */ 29339);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var parse_svg_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse-svg-path */ 22757);
/* harmony import */ var parse_svg_path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse_svg_path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var extract_svg_path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! extract-svg-path */ 46962);
/* harmony import */ var extract_svg_path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(extract_svg_path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var load_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! load-svg */ 86508);
/* harmony import */ var load_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(load_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 96900);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 66538);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 41407);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 93806);

/// <reference types="@types/googlemaps" />
/// <reference types="@types/googlemaps" />














const _c0 = ["infowindowLocation"];
function HomePage_ng_template_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HomePage_ng_template_18_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " (add your gMaps Api Key to call geolocation service) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_ng_template_18_div_2_Template_ion_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); return _r2.centerPin.fix = !_r2.centerPin.fix; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _r2.centerPin.fix ? "Move" : "Fix Pin", "");
} }
function HomePage_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomePage_ng_template_18_span_1_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomePage_ng_template_18_div_2_Template, 5, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const address_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !address_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !!address_r5);
} }
function HomePage_ng_template_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Altitude: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const o_r10 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Flight #", o_r10.label == null ? null : o_r10.label.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("flag-icon flag-icon-", (tmp_1_0 = ctx_r4.getIsoCode(o_r10.country)) == null ? null : tmp_1_0.toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("title", o_r10.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](8, 6, o_r10.altitude, "1.0-0"), "m");
} }
i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.registerLocale(__webpack_require__(/*! i18n-iso-countries/langs/en.json */ 1662));
const SAMPLE_OBJECT = (icon) => ({
    id: randomcolor__WEBPACK_IMPORTED_MODULE_1__(),
    position: new google.maps.LatLng({
        lat: 42.504154,
        lng: 12.646361
    }),
    color: randomcolor__WEBPACK_IMPORTED_MODULE_1__(),
    heading: 33,
    icon,
    speed: 1,
    label: {
        text: 'Sample Aircraft',
        color: 'white'
    },
});
class HomePage {
    constructor(http, vc, platform) {
        this.http = http;
        this.vc = vc;
        this.platform = platform;
        this.objectsToTrack = [];
        this.symbolPath = '';
        this.mapOptions = {
            center: {
                lat: 42.504154,
                lng: 12.646361
            },
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
        };
        // Load svg as symbol path
        load_svg__WEBPACK_IMPORTED_MODULE_4__('assets/baseline-local_airport-24px.svg', (err, svg) => {
            const paths = parse_svg_path__WEBPACK_IMPORTED_MODULE_2__(extract_svg_path__WEBPACK_IMPORTED_MODULE_3__.parse(svg));
            const i = paths.findIndex(p => p[0] === 'z');
            this.symbolPath = paths
                .slice(0, i - 1)
                .map(p => p.join(' ')).join(' ');
            this.objectsToTrack = [SAMPLE_OBJECT(this.getIcon(33))];
        });
    }
    get isMobile() { return this.platform.is('mobile'); }
    ngAfterContentInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.mapView.ready();
            this.getAircracts();
            setInterval(() => this.getAircracts(), 10000);
        });
    }
    getAircracts() {
        const bounds = this.mapView.map.getBounds();
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        this.http.get(`https://opensky-network.org/api/states/all?lamin=${sw.lat()}&lomin=${sw.lng()}&lamax=${ne.lat()}&lomax=${ne.lng()}`)
            .subscribe((response) => {
            this.objectsToTrack = response.states &&
                response.states.map(aircraft => {
                    const found = this.objectsToTrack.find(a => a.id === aircraft[0]);
                    const trkObj = {
                        altitude: aircraft[13],
                        id: aircraft[0],
                        color: found && found.color || randomcolor__WEBPACK_IMPORTED_MODULE_1__(),
                        country: aircraft[2],
                        heading: aircraft[10],
                        icon: found && found.icon || this.getIcon(aircraft[10]),
                        speed: 1,
                        label: {
                            text: aircraft[0].toLocaleUpperCase(),
                            color: 'white'
                        },
                        // isOffline: true,
                        onGround: aircraft[8],
                        position: new google.maps.LatLng(aircraft[6], aircraft[5]),
                        // scale: 2,
                    };
                    return trkObj;
                })
                    .filter(a => !a.onGround)
                    .splice(0, 50)
                || [];
        });
    }
    getIsoCode(countryName) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_0__.getAlpha2Code(countryName, 'en');
    }
    getIcon(rotation) {
        const color = randomcolor__WEBPACK_IMPORTED_MODULE_1__();
        return {
            path: this.symbolPath,
            labelOrigin: new google.maps.Point(0, 5),
            fillColor: color,
            fillOpacity: .6,
            strokeColor: color,
            strokeOpacity: 1,
            strokeWeight: 2,
            scale: 2,
            rotation
        };
    }
    openDocumentation() {
        open('https://raschidjfr.github.io/ngx-googlemaps-tracking-view/reference/', '_blank');
    }
}
HomePage.ɵfac = function HomePage_Factory(t) { return new (t || HomePage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform)); };
HomePage.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomePage, selectors: [["app-home"]], viewQuery: function HomePage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_9__.NgxGooglemapsTrackingViewComponent, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mapView = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.infowindowLocation = _t.first);
    } }, decls: 26, vars: 6, consts: [["slot", "end"], ["size", "small", "fill", "clear", "color", "primary", 3, "click"], ["size", "small", "fill", "outline", 3, "click"], [3, "fullscreen"], ["id", "header", 1, "container", "text-center", "bg-white"], [1, "ion-margin-vertical"], ["infowindowLocation", ""], ["id", "parent"], [3, "data", "triggerInfowindow", "template", "mapOptions", "showLocationButton"], ["map", ""], ["infowindow", ""], [2, "min-height", "20px", "min-width", "50px"], [4, "ngIf"], ["class", "ion-text-center", 4, "ngIf"], [1, "ion-text-center"], ["size", "small", 3, "click"], [3, "title"]], template: function HomePage_Template(rf, ctx) { if (rf & 1) {
        const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Tracking View Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_6_listener() { return ctx.openDocumentation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](19); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); return _r2.centerPin.enable(_r0, "<yourApiKey>"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Add Pin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomePage_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); return _r2.centerPin.disable(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Remove Pin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " This demo shows 50 real-time aircrafts flying over the location, updated every 10 seconds. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, " The map includes geolocation functions. Click on the top right buttons to add a pick-location pin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, HomePage_ng_template_18_Template, 3, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "gmtv-map", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, HomePage_ng_template_23_Template, 9, 9, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "gmtv-geolocation-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullscreen", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", ctx.objectsToTrack)("triggerInfowindow", ctx.isMobile ? "click" : "hover")("template", _r3)("mapOptions", ctx.mapOptions)("showLocationButton", true);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonHeader, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonToolbar, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonTitle, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButtons, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonButton, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_9__.NgxGooglemapsTrackingViewComponent, ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_9__.GeolocationButtonComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DecimalPipe], styles: ["*[_ngcontent-%COMP%] {\n  --header-height: 90px;\n}\n\n#header[_ngcontent-%COMP%] {\n  height: var(--header-height);\n  overflow-y: auto;\n}\n\n#parent[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  height: calc(100% - var(--header-height));\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7QUFDRjs7QUFFQTtFQUNFLDRCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcbiAgLS1oZWFkZXItaGVpZ2h0OiA5MHB4O1xufVxuXG4jaGVhZGVyIHtcbiAgaGVpZ2h0OiB2YXIoLS1oZWFkZXItaGVpZ2h0KTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuI3BhcmVudCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gdmFyKC0taGVhZGVyLWhlaWdodCkpO1xufVxuIl19 */"] });


/***/ }),

/***/ 48888:
/*!*************!*\
  !*** tslib ***!
  \*************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": function() { return /* binding */ __extends; },
/* harmony export */   "__assign": function() { return /* binding */ __assign; },
/* harmony export */   "__rest": function() { return /* binding */ __rest; },
/* harmony export */   "__decorate": function() { return /* binding */ __decorate; },
/* harmony export */   "__param": function() { return /* binding */ __param; },
/* harmony export */   "__metadata": function() { return /* binding */ __metadata; },
/* harmony export */   "__awaiter": function() { return /* binding */ __awaiter; },
/* harmony export */   "__generator": function() { return /* binding */ __generator; },
/* harmony export */   "__createBinding": function() { return /* binding */ __createBinding; },
/* harmony export */   "__exportStar": function() { return /* binding */ __exportStar; },
/* harmony export */   "__values": function() { return /* binding */ __values; },
/* harmony export */   "__read": function() { return /* binding */ __read; },
/* harmony export */   "__spread": function() { return /* binding */ __spread; },
/* harmony export */   "__spreadArrays": function() { return /* binding */ __spreadArrays; },
/* harmony export */   "__spreadArray": function() { return /* binding */ __spreadArray; },
/* harmony export */   "__await": function() { return /* binding */ __await; },
/* harmony export */   "__asyncGenerator": function() { return /* binding */ __asyncGenerator; },
/* harmony export */   "__asyncDelegator": function() { return /* binding */ __asyncDelegator; },
/* harmony export */   "__asyncValues": function() { return /* binding */ __asyncValues; },
/* harmony export */   "__makeTemplateObject": function() { return /* binding */ __makeTemplateObject; },
/* harmony export */   "__importStar": function() { return /* binding */ __importStar; },
/* harmony export */   "__importDefault": function() { return /* binding */ __importDefault; },
/* harmony export */   "__classPrivateFieldGet": function() { return /* binding */ __classPrivateFieldGet; },
/* harmony export */   "__classPrivateFieldSet": function() { return /* binding */ __classPrivateFieldSet; }
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || from);
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ 26796:
/*!****************************************************!*\
  !*** ./node_modules/i18n-iso-countries/codes.json ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[["AF","AFG","004","ISO 3166-2:AF"],["AX","ALA","248","ISO 3166-2:AX"],["AL","ALB","008","ISO 3166-2:AL"],["DZ","DZA","012","ISO 3166-2:DZ"],["AS","ASM","016","ISO 3166-2:AS"],["AD","AND","020","ISO 3166-2:AD"],["AO","AGO","024","ISO 3166-2:AO"],["AI","AIA","660","ISO 3166-2:AI"],["AQ","ATA","010","ISO 3166-2:AQ"],["AG","ATG","028","ISO 3166-2:AG"],["AR","ARG","032","ISO 3166-2:AR"],["AM","ARM","051","ISO 3166-2:AM"],["AW","ABW","533","ISO 3166-2:AW"],["AU","AUS","036","ISO 3166-2:AU"],["AT","AUT","040","ISO 3166-2:AT"],["AZ","AZE","031","ISO 3166-2:AZ"],["BS","BHS","044","ISO 3166-2:BS"],["BH","BHR","048","ISO 3166-2:BH"],["BD","BGD","050","ISO 3166-2:BD"],["BB","BRB","052","ISO 3166-2:BB"],["BY","BLR","112","ISO 3166-2:BY"],["BE","BEL","056","ISO 3166-2:BE"],["BZ","BLZ","084","ISO 3166-2:BZ"],["BJ","BEN","204","ISO 3166-2:BJ"],["BM","BMU","060","ISO 3166-2:BM"],["BT","BTN","064","ISO 3166-2:BT"],["BO","BOL","068","ISO 3166-2:BO"],["BQ","BES","535","ISO 3166-2:BQ"],["BA","BIH","070","ISO 3166-2:BA"],["BW","BWA","072","ISO 3166-2:BW"],["BV","BVT","074","ISO 3166-2:BV"],["BR","BRA","076","ISO 3166-2:BR"],["IO","IOT","086","ISO 3166-2:IO"],["BN","BRN","096","ISO 3166-2:BN"],["BG","BGR","100","ISO 3166-2:BG"],["BF","BFA","854","ISO 3166-2:BF"],["BI","BDI","108","ISO 3166-2:BI"],["KH","KHM","116","ISO 3166-2:KH"],["CM","CMR","120","ISO 3166-2:CM"],["CA","CAN","124","ISO 3166-2:CA"],["CV","CPV","132","ISO 3166-2:CV"],["KY","CYM","136","ISO 3166-2:KY"],["CF","CAF","140","ISO 3166-2:CF"],["TD","TCD","148","ISO 3166-2:TD"],["CL","CHL","152","ISO 3166-2:CL"],["CN","CHN","156","ISO 3166-2:CN"],["CX","CXR","162","ISO 3166-2:CX"],["CC","CCK","166","ISO 3166-2:CC"],["CO","COL","170","ISO 3166-2:CO"],["KM","COM","174","ISO 3166-2:KM"],["CG","COG","178","ISO 3166-2:CG"],["CD","COD","180","ISO 3166-2:CD"],["CK","COK","184","ISO 3166-2:CK"],["CR","CRI","188","ISO 3166-2:CR"],["CI","CIV","384","ISO 3166-2:CI"],["HR","HRV","191","ISO 3166-2:HR"],["CU","CUB","192","ISO 3166-2:CU"],["CW","CUW","531","ISO 3166-2:CW"],["CY","CYP","196","ISO 3166-2:CY"],["CZ","CZE","203","ISO 3166-2:CZ"],["DK","DNK","208","ISO 3166-2:DK"],["DJ","DJI","262","ISO 3166-2:DJ"],["DM","DMA","212","ISO 3166-2:DM"],["DO","DOM","214","ISO 3166-2:DO"],["EC","ECU","218","ISO 3166-2:EC"],["EG","EGY","818","ISO 3166-2:EG"],["SV","SLV","222","ISO 3166-2:SV"],["GQ","GNQ","226","ISO 3166-2:GQ"],["ER","ERI","232","ISO 3166-2:ER"],["EE","EST","233","ISO 3166-2:EE"],["ET","ETH","231","ISO 3166-2:ET"],["FK","FLK","238","ISO 3166-2:FK"],["FO","FRO","234","ISO 3166-2:FO"],["FJ","FJI","242","ISO 3166-2:FJ"],["FI","FIN","246","ISO 3166-2:FI"],["FR","FRA","250","ISO 3166-2:FR"],["GF","GUF","254","ISO 3166-2:GF"],["PF","PYF","258","ISO 3166-2:PF"],["TF","ATF","260","ISO 3166-2:TF"],["GA","GAB","266","ISO 3166-2:GA"],["GM","GMB","270","ISO 3166-2:GM"],["GE","GEO","268","ISO 3166-2:GE"],["DE","DEU","276","ISO 3166-2:DE"],["GH","GHA","288","ISO 3166-2:GH"],["GI","GIB","292","ISO 3166-2:GI"],["GR","GRC","300","ISO 3166-2:GR"],["GL","GRL","304","ISO 3166-2:GL"],["GD","GRD","308","ISO 3166-2:GD"],["GP","GLP","312","ISO 3166-2:GP"],["GU","GUM","316","ISO 3166-2:GU"],["GT","GTM","320","ISO 3166-2:GT"],["GG","GGY","831","ISO 3166-2:GG"],["GN","GIN","324","ISO 3166-2:GN"],["GW","GNB","624","ISO 3166-2:GW"],["GY","GUY","328","ISO 3166-2:GY"],["HT","HTI","332","ISO 3166-2:HT"],["HM","HMD","334","ISO 3166-2:HM"],["VA","VAT","336","ISO 3166-2:VA"],["HN","HND","340","ISO 3166-2:HN"],["HK","HKG","344","ISO 3166-2:HK"],["HU","HUN","348","ISO 3166-2:HU"],["IS","ISL","352","ISO 3166-2:IS"],["IN","IND","356","ISO 3166-2:IN"],["ID","IDN","360","ISO 3166-2:ID"],["IR","IRN","364","ISO 3166-2:IR"],["IQ","IRQ","368","ISO 3166-2:IQ"],["IE","IRL","372","ISO 3166-2:IE"],["IM","IMN","833","ISO 3166-2:IM"],["IL","ISR","376","ISO 3166-2:IL"],["IT","ITA","380","ISO 3166-2:IT"],["JM","JAM","388","ISO 3166-2:JM"],["JP","JPN","392","ISO 3166-2:JP"],["JE","JEY","832","ISO 3166-2:JE"],["JO","JOR","400","ISO 3166-2:JO"],["KZ","KAZ","398","ISO 3166-2:KZ"],["KE","KEN","404","ISO 3166-2:KE"],["KI","KIR","296","ISO 3166-2:KI"],["KP","PRK","408","ISO 3166-2:KP"],["KR","KOR","410","ISO 3166-2:KR"],["KW","KWT","414","ISO 3166-2:KW"],["KG","KGZ","417","ISO 3166-2:KG"],["LA","LAO","418","ISO 3166-2:LA"],["LV","LVA","428","ISO 3166-2:LV"],["LB","LBN","422","ISO 3166-2:LB"],["LS","LSO","426","ISO 3166-2:LS"],["LR","LBR","430","ISO 3166-2:LR"],["LY","LBY","434","ISO 3166-2:LY"],["LI","LIE","438","ISO 3166-2:LI"],["LT","LTU","440","ISO 3166-2:LT"],["LU","LUX","442","ISO 3166-2:LU"],["MO","MAC","446","ISO 3166-2:MO"],["MK","MKD","807","ISO 3166-2:MK"],["MG","MDG","450","ISO 3166-2:MG"],["MW","MWI","454","ISO 3166-2:MW"],["MY","MYS","458","ISO 3166-2:MY"],["MV","MDV","462","ISO 3166-2:MV"],["ML","MLI","466","ISO 3166-2:ML"],["MT","MLT","470","ISO 3166-2:MT"],["MH","MHL","584","ISO 3166-2:MH"],["MQ","MTQ","474","ISO 3166-2:MQ"],["MR","MRT","478","ISO 3166-2:MR"],["MU","MUS","480","ISO 3166-2:MU"],["YT","MYT","175","ISO 3166-2:YT"],["MX","MEX","484","ISO 3166-2:MX"],["FM","FSM","583","ISO 3166-2:FM"],["MD","MDA","498","ISO 3166-2:MD"],["MC","MCO","492","ISO 3166-2:MC"],["MN","MNG","496","ISO 3166-2:MN"],["ME","MNE","499","ISO 3166-2:ME"],["MS","MSR","500","ISO 3166-2:MS"],["MA","MAR","504","ISO 3166-2:MA"],["MZ","MOZ","508","ISO 3166-2:MZ"],["MM","MMR","104","ISO 3166-2:MM"],["NA","NAM","516","ISO 3166-2:NA"],["NR","NRU","520","ISO 3166-2:NR"],["NP","NPL","524","ISO 3166-2:NP"],["NL","NLD","528","ISO 3166-2:NL"],["NC","NCL","540","ISO 3166-2:NC"],["NZ","NZL","554","ISO 3166-2:NZ"],["NI","NIC","558","ISO 3166-2:NI"],["NE","NER","562","ISO 3166-2:NE"],["NG","NGA","566","ISO 3166-2:NG"],["NU","NIU","570","ISO 3166-2:NU"],["NF","NFK","574","ISO 3166-2:NF"],["MP","MNP","580","ISO 3166-2:MP"],["NO","NOR","578","ISO 3166-2:NO"],["OM","OMN","512","ISO 3166-2:OM"],["PK","PAK","586","ISO 3166-2:PK"],["PW","PLW","585","ISO 3166-2:PW"],["PS","PSE","275","ISO 3166-2:PS"],["PA","PAN","591","ISO 3166-2:PA"],["PG","PNG","598","ISO 3166-2:PG"],["PY","PRY","600","ISO 3166-2:PY"],["PE","PER","604","ISO 3166-2:PE"],["PH","PHL","608","ISO 3166-2:PH"],["PN","PCN","612","ISO 3166-2:PN"],["PL","POL","616","ISO 3166-2:PL"],["PT","PRT","620","ISO 3166-2:PT"],["PR","PRI","630","ISO 3166-2:PR"],["QA","QAT","634","ISO 3166-2:QA"],["RE","REU","638","ISO 3166-2:RE"],["RO","ROU","642","ISO 3166-2:RO"],["RU","RUS","643","ISO 3166-2:RU"],["RW","RWA","646","ISO 3166-2:RW"],["BL","BLM","652","ISO 3166-2:BL"],["SH","SHN","654","ISO 3166-2:SH"],["KN","KNA","659","ISO 3166-2:KN"],["LC","LCA","662","ISO 3166-2:LC"],["MF","MAF","663","ISO 3166-2:MF"],["PM","SPM","666","ISO 3166-2:PM"],["VC","VCT","670","ISO 3166-2:VC"],["WS","WSM","882","ISO 3166-2:WS"],["SM","SMR","674","ISO 3166-2:SM"],["ST","STP","678","ISO 3166-2:ST"],["SA","SAU","682","ISO 3166-2:SA"],["SN","SEN","686","ISO 3166-2:SN"],["RS","SRB","688","ISO 3166-2:RS"],["SC","SYC","690","ISO 3166-2:SC"],["SL","SLE","694","ISO 3166-2:SL"],["SG","SGP","702","ISO 3166-2:SG"],["SX","SXM","534","ISO 3166-2:SX"],["SK","SVK","703","ISO 3166-2:SK"],["SI","SVN","705","ISO 3166-2:SI"],["SB","SLB","090","ISO 3166-2:SB"],["SO","SOM","706","ISO 3166-2:SO"],["ZA","ZAF","710","ISO 3166-2:ZA"],["GS","SGS","239","ISO 3166-2:GS"],["SS","SSD","728","ISO 3166-2:SS"],["ES","ESP","724","ISO 3166-2:ES"],["LK","LKA","144","ISO 3166-2:LK"],["SD","SDN","729","ISO 3166-2:SD"],["SR","SUR","740","ISO 3166-2:SR"],["SJ","SJM","744","ISO 3166-2:SJ"],["SZ","SWZ","748","ISO 3166-2:SZ"],["SE","SWE","752","ISO 3166-2:SE"],["CH","CHE","756","ISO 3166-2:CH"],["SY","SYR","760","ISO 3166-2:SY"],["TW","TWN","158","ISO 3166-2:TW"],["TJ","TJK","762","ISO 3166-2:TJ"],["TZ","TZA","834","ISO 3166-2:TZ"],["TH","THA","764","ISO 3166-2:TH"],["TL","TLS","626","ISO 3166-2:TL"],["TG","TGO","768","ISO 3166-2:TG"],["TK","TKL","772","ISO 3166-2:TK"],["TO","TON","776","ISO 3166-2:TO"],["TT","TTO","780","ISO 3166-2:TT"],["TN","TUN","788","ISO 3166-2:TN"],["TR","TUR","792","ISO 3166-2:TR"],["TM","TKM","795","ISO 3166-2:TM"],["TC","TCA","796","ISO 3166-2:TC"],["TV","TUV","798","ISO 3166-2:TV"],["UG","UGA","800","ISO 3166-2:UG"],["UA","UKR","804","ISO 3166-2:UA"],["AE","ARE","784","ISO 3166-2:AE"],["GB","GBR","826","ISO 3166-2:GB"],["US","USA","840","ISO 3166-2:US"],["UM","UMI","581","ISO 3166-2:UM"],["UY","URY","858","ISO 3166-2:UY"],["UZ","UZB","860","ISO 3166-2:UZ"],["VU","VUT","548","ISO 3166-2:VU"],["VE","VEN","862","ISO 3166-2:VE"],["VN","VNM","704","ISO 3166-2:VN"],["VG","VGB","092","ISO 3166-2:VG"],["VI","VIR","850","ISO 3166-2:VI"],["WF","WLF","876","ISO 3166-2:WF"],["EH","ESH","732","ISO 3166-2:EH"],["YE","YEM","887","ISO 3166-2:YE"],["ZM","ZMB","894","ISO 3166-2:ZM"],["ZW","ZWE","716","ISO 3166-2:ZW"],["XK","XKX","","ISO 3166-2:XK"]]');

/***/ }),

/***/ 1662:
/*!*******************************************************!*\
  !*** ./node_modules/i18n-iso-countries/langs/en.json ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"locale":"en","countries":{"AF":"Afghanistan","AL":"Albania","DZ":"Algeria","AS":"American Samoa","AD":"Andorra","AO":"Angola","AI":"Anguilla","AQ":"Antarctica","AG":"Antigua and Barbuda","AR":"Argentina","AM":"Armenia","AW":"Aruba","AU":"Australia","AT":"Austria","AZ":"Azerbaijan","BS":"Bahamas","BH":"Bahrain","BD":"Bangladesh","BB":"Barbados","BY":"Belarus","BE":"Belgium","BZ":"Belize","BJ":"Benin","BM":"Bermuda","BT":"Bhutan","BO":"Bolivia","BA":"Bosnia and Herzegovina","BW":"Botswana","BV":"Bouvet Island","BR":"Brazil","IO":"British Indian Ocean Territory","BN":"Brunei Darussalam","BG":"Bulgaria","BF":"Burkina Faso","BI":"Burundi","KH":"Cambodia","CM":"Cameroon","CA":"Canada","CV":"Cape Verde","KY":"Cayman Islands","CF":"Central African Republic","TD":"Chad","CL":"Chile","CN":"China","CX":"Christmas Island","CC":"Cocos (Keeling) Islands","CO":"Colombia","KM":"Comoros","CG":"Congo","CD":"Congo, the Democratic Republic of the","CK":"Cook Islands","CR":"Costa Rica","CI":"Cote D\'Ivoire","HR":"Croatia","CU":"Cuba","CY":"Cyprus","CZ":"Czech Republic","DK":"Denmark","DJ":"Djibouti","DM":"Dominica","DO":"Dominican Republic","EC":"Ecuador","EG":"Egypt","SV":"El Salvador","GQ":"Equatorial Guinea","ER":"Eritrea","EE":"Estonia","ET":"Ethiopia","FK":"Falkland Islands (Malvinas)","FO":"Faroe Islands","FJ":"Fiji","FI":"Finland","FR":"France","GF":"French Guiana","PF":"French Polynesia","TF":"French Southern Territories","GA":"Gabon","GM":"Gambia","GE":"Georgia","DE":"Germany","GH":"Ghana","GI":"Gibraltar","GR":"Greece","GL":"Greenland","GD":"Grenada","GP":"Guadeloupe","GU":"Guam","GT":"Guatemala","GN":"Guinea","GW":"Guinea-Bissau","GY":"Guyana","HT":"Haiti","HM":"Heard Island and Mcdonald Islands","VA":"Holy See (Vatican City State)","HN":"Honduras","HK":"Hong Kong","HU":"Hungary","IS":"Iceland","IN":"India","ID":"Indonesia","IR":"Iran, Islamic Republic of","IQ":"Iraq","IE":"Ireland","IL":"Israel","IT":"Italy","JM":"Jamaica","JP":"Japan","JO":"Jordan","KZ":"Kazakhstan","KE":"Kenya","KI":"Kiribati","KP":"North Korea","KR":"South Korea","KW":"Kuwait","KG":"Kyrgyzstan","LA":"Lao People\'s Democratic Republic","LV":"Latvia","LB":"Lebanon","LS":"Lesotho","LR":"Liberia","LY":"Libya","LI":"Liechtenstein","LT":"Lithuania","LU":"Luxembourg","MO":"Macao","MG":"Madagascar","MW":"Malawi","MY":"Malaysia","MV":"Maldives","ML":"Mali","MT":"Malta","MH":"Marshall Islands","MQ":"Martinique","MR":"Mauritania","MU":"Mauritius","YT":"Mayotte","MX":"Mexico","FM":"Micronesia, Federated States of","MD":"Moldova, Republic of","MC":"Monaco","MN":"Mongolia","MS":"Montserrat","MA":"Morocco","MZ":"Mozambique","MM":"Myanmar","NA":"Namibia","NR":"Nauru","NP":"Nepal","NL":"Netherlands","NC":"New Caledonia","NZ":"New Zealand","NI":"Nicaragua","NE":"Niger","NG":"Nigeria","NU":"Niue","NF":"Norfolk Island","MK":"North Macedonia, Republic of","MP":"Northern Mariana Islands","NO":"Norway","OM":"Oman","PK":"Pakistan","PW":"Palau","PS":"Palestinian Territory, Occupied","PA":"Panama","PG":"Papua New Guinea","PY":"Paraguay","PE":"Peru","PH":"Philippines","PN":"Pitcairn","PL":"Poland","PT":"Portugal","PR":"Puerto Rico","QA":"Qatar","RE":"Reunion","RO":"Romania","RU":"Russian Federation","RW":"Rwanda","SH":"Saint Helena","KN":"Saint Kitts and Nevis","LC":"Saint Lucia","PM":"Saint Pierre and Miquelon","VC":"Saint Vincent and the Grenadines","WS":"Samoa","SM":"San Marino","ST":"Sao Tome and Principe","SA":"Saudi Arabia","SN":"Senegal","SC":"Seychelles","SL":"Sierra Leone","SG":"Singapore","SK":"Slovakia","SI":"Slovenia","SB":"Solomon Islands","SO":"Somalia","ZA":"South Africa","GS":"South Georgia and the South Sandwich Islands","ES":"Spain","LK":"Sri Lanka","SD":"Sudan","SR":"Suriname","SJ":"Svalbard and Jan Mayen","SZ":"Swaziland","SE":"Sweden","CH":"Switzerland","SY":"Syrian Arab Republic","TW":"Taiwan","TJ":"Tajikistan","TZ":"Tanzania, United Republic of","TH":"Thailand","TL":"Timor-Leste","TG":"Togo","TK":"Tokelau","TO":"Tonga","TT":"Trinidad and Tobago","TN":"Tunisia","TR":"Turkey","TM":"Turkmenistan","TC":"Turks and Caicos Islands","TV":"Tuvalu","UG":"Uganda","UA":"Ukraine","AE":"United Arab Emirates","GB":"United Kingdom","US":"United States of America","UM":"United States Minor Outlying Islands","UY":"Uruguay","UZ":"Uzbekistan","VU":"Vanuatu","VE":"Venezuela","VN":"Viet Nam","VG":"Virgin Islands, British","VI":"Virgin Islands, U.S.","WF":"Wallis and Futuna","EH":"Western Sahara","YE":"Yemen","ZM":"Zambia","ZW":"Zimbabwe","AX":"Åland Islands","BQ":"Bonaire, Sint Eustatius and Saba","CW":"Curaçao","GG":"Guernsey","IM":"Isle of Man","JE":"Jersey","ME":"Montenegro","BL":"Saint Barthélemy","MF":"Saint Martin (French part)","RS":"Serbia","SX":"Sint Maarten (Dutch part)","SS":"South Sudan","XK":"Kosovo"}}');

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts-es2015.js.map