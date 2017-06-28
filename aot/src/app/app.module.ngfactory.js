/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as import0 from '@angular/core';
import * as import1 from '../../../src/app/app.module';
import * as import2 from '@angular/common';
import * as import3 from '@angular/router';
import * as import4 from '@angular/platform-browser';
import * as import5 from '@angular/forms';
import * as import6 from '@angular/http';
import * as import7 from 'angular-in-memory-web-api/in-memory-web-api.module';
import * as import8 from '../../../src/app/app-routing.module';
import * as import9 from '../../../src/app/in-memory-data.service';
import * as import10 from '../../../src/app/hero.service';
import * as import11 from './dashboard.component.ngfactory';
import * as import12 from './hero-detail.component.ngfactory';
import * as import13 from './heroes.component.ngfactory';
import * as import14 from './app.component.ngfactory';
import * as import15 from '../../../src/app/dashboard.component';
import * as import16 from '../../../src/app/hero-detail.component';
import * as import17 from '../../../src/app/heroes.component';
import * as import18 from 'angular-in-memory-web-api/in-memory-backend.service';
var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            import11.DashboardComponentNgFactory,
            import12.HeroDetailComponentNgFactory,
            import13.HeroesComponentNgFactory,
            import14.AppComponentNgFactory
        ], [import14.AppComponentNgFactory]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_27", {
        get: function () {
            if ((this.__LOCALE_ID_27 == null)) {
                (this.__LOCALE_ID_27 = import0.ɵn(this.parent.get(import0.LOCALE_ID, null)));
            }
            return this.__LOCALE_ID_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_28", {
        get: function () {
            if ((this.__NgLocalization_28 == null)) {
                (this.__NgLocalization_28 = new import2.NgLocaleLocalization(this._LOCALE_ID_27));
            }
            return this.__NgLocalization_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_29", {
        get: function () {
            if ((this.__APP_ID_29 == null)) {
                (this.__APP_ID_29 = import0.ɵg());
            }
            return this.__APP_ID_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_30", {
        get: function () {
            if ((this.__IterableDiffers_30 == null)) {
                (this.__IterableDiffers_30 = import0.ɵl());
            }
            return this.__IterableDiffers_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_31", {
        get: function () {
            if ((this.__KeyValueDiffers_31 == null)) {
                (this.__KeyValueDiffers_31 = import0.ɵm());
            }
            return this.__KeyValueDiffers_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_32", {
        get: function () {
            if ((this.__DomSanitizer_32 == null)) {
                (this.__DomSanitizer_32 = new import4.ɵe(this.parent.get(import4.DOCUMENT)));
            }
            return this.__DomSanitizer_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_33", {
        get: function () {
            if ((this.__Sanitizer_33 == null)) {
                (this.__Sanitizer_33 = this._DomSanitizer_32);
            }
            return this.__Sanitizer_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_34", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_34 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_34 = new import4.HammerGestureConfig());
            }
            return this.__HAMMER_GESTURE_CONFIG_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_35", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_35 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_35 = [
                    new import4.ɵDomEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵKeyEventsPlugin(this.parent.get(import4.DOCUMENT)),
                    new import4.ɵHammerGesturesPlugin(this.parent.get(import4.DOCUMENT), this._HAMMER_GESTURE_CONFIG_34)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_36", {
        get: function () {
            if ((this.__EventManager_36 == null)) {
                (this.__EventManager_36 = new import4.EventManager(this._EVENT_MANAGER_PLUGINS_35, this.parent.get(import0.NgZone)));
            }
            return this.__EventManager_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_37", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_37 == null)) {
                (this.__ɵDomSharedStylesHost_37 = new import4.ɵDomSharedStylesHost(this.parent.get(import4.DOCUMENT)));
            }
            return this.__ɵDomSharedStylesHost_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_38", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_38 == null)) {
                (this.__ɵDomRendererFactory2_38 = new import4.ɵDomRendererFactory2(this._EventManager_36, this._ɵDomSharedStylesHost_37));
            }
            return this.__ɵDomRendererFactory2_38;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_39", {
        get: function () {
            if ((this.__RendererFactory2_39 == null)) {
                (this.__RendererFactory2_39 = this._ɵDomRendererFactory2_38);
            }
            return this.__RendererFactory2_39;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_40", {
        get: function () {
            if ((this.__ɵSharedStylesHost_40 == null)) {
                (this.__ɵSharedStylesHost_40 = this._ɵDomSharedStylesHost_37);
            }
            return this.__ɵSharedStylesHost_40;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_41", {
        get: function () {
            if ((this.__Testability_41 == null)) {
                (this.__Testability_41 = new import0.Testability(this.parent.get(import0.NgZone)));
            }
            return this.__Testability_41;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_42", {
        get: function () {
            if ((this.__Meta_42 == null)) {
                (this.__Meta_42 = new import4.Meta(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Meta_42;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_43", {
        get: function () {
            if ((this.__Title_43 == null)) {
                (this.__Title_43 = new import4.Title(this.parent.get(import4.DOCUMENT)));
            }
            return this.__Title_43;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_44", {
        get: function () {
            if ((this.__ɵi_44 == null)) {
                (this.__ɵi_44 = new import5.ɵi());
            }
            return this.__ɵi_44;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_InMemoryDbService_45", {
        get: function () {
            if ((this.__InMemoryDbService_45 == null)) {
                (this.__InMemoryDbService_45 = new import9.InMemoryDataService());
            }
            return this.__InMemoryDbService_45;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_47", {
        get: function () {
            if ((this.__XHRBackend_47 == null)) {
                (this.__XHRBackend_47 = import7.inMemoryBackendServiceFactory(this, this._InMemoryDbService_45, this._InMemoryBackendConfig_46));
            }
            return this.__XHRBackend_47;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_48", {
        get: function () {
            if ((this.__RequestOptions_48 == null)) {
                (this.__RequestOptions_48 = new import6.BaseRequestOptions());
            }
            return this.__RequestOptions_48;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_49", {
        get: function () {
            if ((this.__Http_49 == null)) {
                (this.__Http_49 = import6.ɵc(this._XHRBackend_47, this._RequestOptions_48));
            }
            return this.__Http_49;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_50", {
        get: function () {
            if ((this.__BrowserXhr_50 == null)) {
                (this.__BrowserXhr_50 = new import6.BrowserXhr());
            }
            return this.__BrowserXhr_50;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_51", {
        get: function () {
            if ((this.__ResponseOptions_51 == null)) {
                (this.__ResponseOptions_51 = new import6.BaseResponseOptions());
            }
            return this.__ResponseOptions_51;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_52", {
        get: function () {
            if ((this.__XSRFStrategy_52 == null)) {
                (this.__XSRFStrategy_52 = import6.ɵb());
            }
            return this.__XSRFStrategy_52;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_53", {
        get: function () {
            if ((this.__ActivatedRoute_53 == null)) {
                (this.__ActivatedRoute_53 = import3.ɵf(this._Router_23));
            }
            return this.__ActivatedRoute_53;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_54", {
        get: function () {
            if ((this.__NoPreloading_54 == null)) {
                (this.__NoPreloading_54 = new import3.NoPreloading());
            }
            return this.__NoPreloading_54;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_55", {
        get: function () {
            if ((this.__PreloadingStrategy_55 == null)) {
                (this.__PreloadingStrategy_55 = this._NoPreloading_54);
            }
            return this.__PreloadingStrategy_55;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_56", {
        get: function () {
            if ((this.__RouterPreloader_56 == null)) {
                (this.__RouterPreloader_56 = new import3.RouterPreloader(this._Router_23, this._NgModuleFactoryLoader_21, this._Compiler_20, this, this._PreloadingStrategy_55));
            }
            return this.__RouterPreloader_56;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_57", {
        get: function () {
            if ((this.__PreloadAllModules_57 == null)) {
                (this.__PreloadAllModules_57 = new import3.PreloadAllModules());
            }
            return this.__PreloadAllModules_57;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_58", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_58 == null)) {
                (this.__ROUTER_INITIALIZER_58 = import3.ɵi(this._ɵg_3));
            }
            return this.__ROUTER_INITIALIZER_58;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_59", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_59 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_59 = [this._ROUTER_INITIALIZER_58]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_59;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HeroService_60", {
        get: function () {
            if ((this.__HeroService_60 == null)) {
                (this.__HeroService_60 = new import10.HeroService(this._Http_49));
            }
            return this.__HeroService_60;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ErrorHandler_1 = import4.ɵa();
        this._NgProbeToken_2 = [import3.ɵb()];
        this._ɵg_3 = new import3.ɵg(this);
        this._APP_INITIALIZER_4 = [
            import0.ɵo,
            import4.ɵc(this.parent.get(import4.NgProbeToken, null), this._NgProbeToken_2),
            import3.ɵh(this._ɵg_3)
        ];
        this._ApplicationInitStatus_5 = new import0.ApplicationInitStatus(this._APP_INITIALIZER_4);
        this._ɵf_6 = new import0.ɵf(this.parent.get(import0.NgZone), this.parent.get(import0.ɵConsole), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._ApplicationModule_8 = new import0.ApplicationModule(this._ApplicationRef_7);
        this._BrowserModule_9 = new import4.BrowserModule(this.parent.get(import4.BrowserModule, null));
        this._ɵba_10 = new import5.ɵba();
        this._FormsModule_11 = new import5.FormsModule();
        this._HttpModule_12 = new import6.HttpModule();
        this._InMemoryWebApiModule_13 = new import7.InMemoryWebApiModule();
        this._ɵa_14 = import3.ɵd(this.parent.get(import3.Router, null));
        this._UrlSerializer_15 = new import3.DefaultUrlSerializer();
        this._RouterOutletMap_16 = new import3.RouterOutletMap();
        this._ROUTER_CONFIGURATION_17 = {};
        this._LocationStrategy_18 = import3.ɵc(this.parent.get(import2.PlatformLocation), this.parent.get(import2.APP_BASE_HREF, null), this._ROUTER_CONFIGURATION_17);
        this._Location_19 = new import2.Location(this._LocationStrategy_18);
        this._Compiler_20 = new import0.Compiler();
        this._NgModuleFactoryLoader_21 = new import0.SystemJsNgModuleLoader(this._Compiler_20, this.parent.get(import0.SystemJsNgModuleLoaderConfig, null));
        this._ROUTES_22 = [[
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: import15.DashboardComponent
                },
                {
                    path: 'detail/:id',
                    component: import16.HeroDetailComponent
                },
                {
                    path: 'heroes',
                    component: import17.HeroesComponent
                }
            ]
        ];
        this._Router_23 = import3.ɵe(this._ApplicationRef_7, this._UrlSerializer_15, this._RouterOutletMap_16, this._Location_19, this, this._NgModuleFactoryLoader_21, this._Compiler_20, this._ROUTES_22, this._ROUTER_CONFIGURATION_17, this.parent.get(import3.UrlHandlingStrategy, null), this.parent.get(import3.RouteReuseStrategy, null));
        this._RouterModule_24 = new import3.RouterModule(this._ɵa_14, this._Router_23);
        this._AppRoutingModule_25 = new import8.AppRoutingModule();
        this._AppModule_26 = new import1.AppModule();
        this._InMemoryBackendConfig_46 = undefined;
        return this._AppModule_26;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import0.ErrorHandler)) {
            return this._ErrorHandler_1;
        }
        if ((token === import0.NgProbeToken)) {
            return this._NgProbeToken_2;
        }
        if ((token === import3.ɵg)) {
            return this._ɵg_3;
        }
        if ((token === import0.APP_INITIALIZER)) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === import0.ApplicationInitStatus)) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === import0.ɵf)) {
            return this._ɵf_6;
        }
        if ((token === import0.ApplicationRef)) {
            return this._ApplicationRef_7;
        }
        if ((token === import0.ApplicationModule)) {
            return this._ApplicationModule_8;
        }
        if ((token === import4.BrowserModule)) {
            return this._BrowserModule_9;
        }
        if ((token === import5.ɵba)) {
            return this._ɵba_10;
        }
        if ((token === import5.FormsModule)) {
            return this._FormsModule_11;
        }
        if ((token === import6.HttpModule)) {
            return this._HttpModule_12;
        }
        if ((token === import7.InMemoryWebApiModule)) {
            return this._InMemoryWebApiModule_13;
        }
        if ((token === import3.ɵa)) {
            return this._ɵa_14;
        }
        if ((token === import3.UrlSerializer)) {
            return this._UrlSerializer_15;
        }
        if ((token === import3.RouterOutletMap)) {
            return this._RouterOutletMap_16;
        }
        if ((token === import3.ROUTER_CONFIGURATION)) {
            return this._ROUTER_CONFIGURATION_17;
        }
        if ((token === import2.LocationStrategy)) {
            return this._LocationStrategy_18;
        }
        if ((token === import2.Location)) {
            return this._Location_19;
        }
        if ((token === import0.Compiler)) {
            return this._Compiler_20;
        }
        if ((token === import0.NgModuleFactoryLoader)) {
            return this._NgModuleFactoryLoader_21;
        }
        if ((token === import3.ROUTES)) {
            return this._ROUTES_22;
        }
        if ((token === import3.Router)) {
            return this._Router_23;
        }
        if ((token === import3.RouterModule)) {
            return this._RouterModule_24;
        }
        if ((token === import8.AppRoutingModule)) {
            return this._AppRoutingModule_25;
        }
        if ((token === import1.AppModule)) {
            return this._AppModule_26;
        }
        if ((token === import0.LOCALE_ID)) {
            return this._LOCALE_ID_27;
        }
        if ((token === import2.NgLocalization)) {
            return this._NgLocalization_28;
        }
        if ((token === import0.APP_ID)) {
            return this._APP_ID_29;
        }
        if ((token === import0.IterableDiffers)) {
            return this._IterableDiffers_30;
        }
        if ((token === import0.KeyValueDiffers)) {
            return this._KeyValueDiffers_31;
        }
        if ((token === import4.DomSanitizer)) {
            return this._DomSanitizer_32;
        }
        if ((token === import0.Sanitizer)) {
            return this._Sanitizer_33;
        }
        if ((token === import4.HAMMER_GESTURE_CONFIG)) {
            return this._HAMMER_GESTURE_CONFIG_34;
        }
        if ((token === import4.EVENT_MANAGER_PLUGINS)) {
            return this._EVENT_MANAGER_PLUGINS_35;
        }
        if ((token === import4.EventManager)) {
            return this._EventManager_36;
        }
        if ((token === import4.ɵDomSharedStylesHost)) {
            return this._ɵDomSharedStylesHost_37;
        }
        if ((token === import4.ɵDomRendererFactory2)) {
            return this._ɵDomRendererFactory2_38;
        }
        if ((token === import0.RendererFactory2)) {
            return this._RendererFactory2_39;
        }
        if ((token === import4.ɵSharedStylesHost)) {
            return this._ɵSharedStylesHost_40;
        }
        if ((token === import0.Testability)) {
            return this._Testability_41;
        }
        if ((token === import4.Meta)) {
            return this._Meta_42;
        }
        if ((token === import4.Title)) {
            return this._Title_43;
        }
        if ((token === import5.ɵi)) {
            return this._ɵi_44;
        }
        if ((token === import18.InMemoryDbService)) {
            return this._InMemoryDbService_45;
        }
        if ((token === import18.InMemoryBackendConfig)) {
            return this._InMemoryBackendConfig_46;
        }
        if ((token === import6.XHRBackend)) {
            return this._XHRBackend_47;
        }
        if ((token === import6.RequestOptions)) {
            return this._RequestOptions_48;
        }
        if ((token === import6.Http)) {
            return this._Http_49;
        }
        if ((token === import6.BrowserXhr)) {
            return this._BrowserXhr_50;
        }
        if ((token === import6.ResponseOptions)) {
            return this._ResponseOptions_51;
        }
        if ((token === import6.XSRFStrategy)) {
            return this._XSRFStrategy_52;
        }
        if ((token === import3.ActivatedRoute)) {
            return this._ActivatedRoute_53;
        }
        if ((token === import3.NoPreloading)) {
            return this._NoPreloading_54;
        }
        if ((token === import3.PreloadingStrategy)) {
            return this._PreloadingStrategy_55;
        }
        if ((token === import3.RouterPreloader)) {
            return this._RouterPreloader_56;
        }
        if ((token === import3.PreloadAllModules)) {
            return this._PreloadAllModules_57;
        }
        if ((token === import3.ROUTER_INITIALIZER)) {
            return this._ROUTER_INITIALIZER_58;
        }
        if ((token === import0.APP_BOOTSTRAP_LISTENER)) {
            return this._APP_BOOTSTRAP_LISTENER_59;
        }
        if ((token === import10.HeroService)) {
            return this._HeroService_60;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_37 && this._ɵDomSharedStylesHost_37.ngOnDestroy());
        (this.__RouterPreloader_56 && this._RouterPreloader_56.ngOnDestroy());
    };
    return AppModuleInjector;
}(import0.ɵNgModuleInjector));
export var AppModuleNgFactory = new import0.NgModuleFactory(AppModuleInjector, import1.AppModule);
//# sourceMappingURL=app.module.ngfactory.js.map