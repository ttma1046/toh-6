/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './hero-search.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '../../../src/app/hero-search.component';
import * as import3 from '@angular/common';
import * as import4 from '../../../src/app/hero-search.service';
import * as import5 from '@angular/http';
import * as import6 from '@angular/router';
const styles_HeroSearchComponent:any[] = [import0.styles];
export const RenderType_HeroSearchComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_HeroSearchComponent,
  data: {}
}
);
function View_HeroSearchComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),1,'div',[[
        'class',
        'search-result'
      ]
      ],(null as any),[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:any = v.component;
      if (('click' === en)) {
        const pd_0:any = ((<any>co.gotoDetail(v.context.$implicit)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '\n      ',
      '\n    '
    ]
    ))
  ]
  ,(null as any),(ck,v) => {
    const currVal_0:any = v.context.$implicit.name;
    ck(v,1,0,currVal_0);
  });
}
export function View_HeroSearchComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),13,'div',[[
        'id',
        'search-component'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Hero Search'])),
    (l()(),import1.ɵted((null as any),['\n  '])),
      (l()(),import1.ɵeld(0,[[
        'searchBox',
        1
      ]
      ],(null as any),0,'input',[[
        'id',
        'search-box'
      ]
      ],(null as any),[[
        (null as any),
        'keyup'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      var co:import2.HeroSearchComponent = v.component;
      if (('keyup' === en)) {
        const pd_0:any = ((<any>co.search(import1.ɵnov(v,5).value)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),5,'div',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),2,(null as any),View_HeroSearchComponent_1)),
    import1.ɵdid(401408,(null as any),0,import3.NgForOf,[
      import1.ViewContainerRef,
      import1.TemplateRef,
      import1.IterableDiffers
    ]
      ,{ngForOf: [
        0,
        'ngForOf'
      ]
    },(null as any)),
    import1.ɵpid(65536,import3.AsyncPipe,[import1.ChangeDetectorRef]),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import2.HeroSearchComponent = v.component;
    const currVal_0:any = import1.ɵunv(v,10,0,import1.ɵnov(v,11).transform(co.heroes));
    ck(v,10,0,currVal_0);
  },(null as any));
}
function View_HeroSearchComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'hero-search',([] as any[]),(null as any),(null as any),(null as any),View_HeroSearchComponent_0,RenderType_HeroSearchComponent)),
    import1.ɵprd(256,(null as any),import4.HeroSearchService,import4.HeroSearchService,[import5.Http]),
    import1.ɵdid(57344,(null as any),0,import2.HeroSearchComponent,[
      import4.HeroSearchService,
      import6.Router
    ]
    ,(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,2,0);
  },(null as any));
}
export const HeroSearchComponentNgFactory:import1.ComponentFactory<import2.HeroSearchComponent> = import1.ɵccf('hero-search',import2.HeroSearchComponent,View_HeroSearchComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovTXlQcm9qZWN0L0FuZ3VsYXIyL3RvaC02L3NyYy9hcHAvaGVyby1zZWFyY2guY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0Q6L015UHJvamVjdC9Bbmd1bGFyMi90b2gtNi9zcmMvYXBwL2hlcm8tc2VhcmNoLmNvbXBvbmVudC50cyIsIm5nOi8vL0Q6L015UHJvamVjdC9Bbmd1bGFyMi90b2gtNi9zcmMvYXBwL2hlcm8tc2VhcmNoLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovTXlQcm9qZWN0L0FuZ3VsYXIyL3RvaC02L3NyYy9hcHAvaGVyby1zZWFyY2guY29tcG9uZW50LnRzLkhlcm9TZWFyY2hDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8ZGl2IGlkPVwic2VhcmNoLWNvbXBvbmVudFwiPlxyXG4gIDxoND5IZXJvIFNlYXJjaDwvaDQ+XHJcbiAgPGlucHV0ICNzZWFyY2hCb3ggaWQ9XCJzZWFyY2gtYm94XCIgKGtleXVwKT1cInNlYXJjaChzZWFyY2hCb3gudmFsdWUpXCIgLz5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiAqbmdGb3I9XCJsZXQgaGVybyBvZiBoZXJvZXMgfCBhc3luY1wiXHJcbiAgICAgICAgIChjbGljayk9XCJnb3RvRGV0YWlsKGhlcm8pXCIgY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCIgPlxyXG4gICAgICB7e2hlcm8ubmFtZX19XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiIsIjxoZXJvLXNlYXJjaD48L2hlcm8tc2VhcmNoPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0lJO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO01BQUE7TUFDSztRQUFBO1FBQUE7TUFBQTtNQURMO0lBQUE7SUFDdUQ7TUFBQTtNQUFBO0lBQUE7SUFBQTs7O0lBQUE7SUFBQTs7Ozs7TUFMM0Q7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUEyQjtJQUN6QjtJQUFJO0lBQWdCO01BQ3BCO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtNQUFrQztRQUFBO1FBQUE7TUFBQTtNQUFsQztJQUFBO0lBQXNFO0lBQ3RFO0lBQUs7SUFDSDtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBSztJQUdDO0lBQ0Y7SUFDRjs7OztJQUxHO0lBQUwsVUFBSyxTQUFMOzs7OztJQ0pKO2dCQUFBO2dCQUFBOzs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
