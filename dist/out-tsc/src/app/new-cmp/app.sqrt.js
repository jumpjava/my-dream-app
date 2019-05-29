import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var SqrtPipe = /** @class */ (function () {
    function SqrtPipe() {
    }
    SqrtPipe.prototype.transform = function (val) {
        return Math.sqrt(val);
    };
    SqrtPipe = tslib_1.__decorate([
        Pipe({
            name: 'sqrt'
        })
    ], SqrtPipe);
    return SqrtPipe;
}());
export { SqrtPipe };
//# sourceMappingURL=app.sqrt.js.map