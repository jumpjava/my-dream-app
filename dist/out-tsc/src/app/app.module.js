import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Http, Headers, ResponseContentType } from '@angular/http';
import { AppComponent } from './app.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { SqrtPipe } from './new-cmp/app.sqrt';
import { MyserviceService } from './myservice.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                SqrtPipe,
                AppComponent,
                NewCmpComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                Http,
                Headers,
                ResponseContentType,
                RouterModule.forRoot([
                    {
                        path: 'new-cmp',
                        component: NewCmpComponent
                    }
                ])
            ],
            providers: [MyserviceService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map