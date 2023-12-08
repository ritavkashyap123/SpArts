# Installation
> `npm install --save @types/polylabel`

# Summary
This package contains type definitions for polylabel (https://github.com/mapbox/polylabel).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/polylabel.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/polylabel/index.d.ts)
````ts
/**
 * Polylabel returns the pole of inaccessibility coordinate in [x, y] format.
 *
 * @param polygon - Given polygon coordinates in GeoJSON-like format
 * @param precision - Precision (1.0 by default)
 * @param debug - Debugging for Console
 * @example
 * var p = polylabel(polygon, 1.0);
 */
declare function polylabel(polygon: number[][][], precision?: number, debug?: boolean): number[] & { distance: number };
declare namespace polylabel {}
export default polylabel;

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 09:09:39 GMT
 * Dependencies: none

# Credits
These definitions were written by [Denis Carriere](https://github.com/DenisCarriere).
