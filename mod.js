// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function n(n,r){var t=n.shape;return r?function(n){var r,t,e;for(t=n.length,r=[],e=0;e<t;e++)r.push(n[e]);return r}(t):t}function r(r,t){return function(n,r){var t;if(n.length!==r.length)return!1;for(t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0}(n(r,!1),n(t,!1))}export{r as default};
//# sourceMappingURL=mod.js.map
