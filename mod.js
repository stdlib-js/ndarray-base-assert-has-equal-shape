// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r,n){var t=r.shape;return n?function(r){var n,t,e;for(t=r.length,n=[],e=0;e<t;e++)n.push(r[e]);return n}(t):t}function n(n,t){var e,u,f;if(e=r(n,!1),u=r(t,!1),e.length!==u.length)return!1;for(f=0;f<e.length;f++)if(e[f]!==u[f])return!1;return!0}export{n as default};
//# sourceMappingURL=mod.js.map
