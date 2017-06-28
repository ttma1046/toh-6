/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from './dashboard.component.css.shim.ngstyle';
import * as import1 from '@angular/core';
import * as import2 from '@angular/router';
import * as import3 from '@angular/common';
import * as import4 from './hero-search.component.ngfactory';
import * as import5 from '../../../src/app/hero-search.service';
import * as import6 from '@angular/http';
import * as import7 from '../../../src/app/hero-search.component';
import * as import8 from '../../../src/app/dashboard.component';
import * as import9 from '../../../src/app/hero.service';
const styles_DashboardComponent:any[] = [import0.styles];
export const RenderType_DashboardComponent:import1.RendererType2 = import1.ɵcrt({
  encapsulation: 0,
  styles: styles_DashboardComponent,
  data: {}
}
);
function View_DashboardComponent_1(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
      (l()(),import1.ɵeld(0,(null as any),(null as any),9,'a',[[
        'class',
        'col-1-4'
      ]
    ],[
      [
        1,
        'target',
        0
      ]
      ,
      [
        8,
        'href',
        4
      ]

    ]
      ,[[
        (null as any),
        'click'
      ]
    ],(v,en,$event) => {
      var ad:boolean = true;
      if (('click' === en)) {
        const pd_0:any = ((<any>import1.ɵnov(v,1).onClick($event.button,$event.ctrlKey,$event.metaKey)) !== false);
        ad = (pd_0 && ad);
      }
      return ad;
    },(null as any),(null as any))),
    import1.ɵdid(335872,(null as any),0,import2.RouterLinkWithHref,[
      import2.Router,
      import2.ActivatedRoute,
      import3.LocationStrategy
    ]
      ,{routerLink: [
        0,
        'routerLink'
      ]
    },(null as any)),
    import1.ɵpad(2),
    (l()(),import1.ɵted((null as any),['\n    '])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'module hero'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n      '])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h4',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),[
      '',
      ''
    ]
    )),
    (l()(),import1.ɵted((null as any),['\n    '])),
    (l()(),import1.ɵted((null as any),['\n  ']))
  ]
  ,(ck,v) => {
    const currVal_2:any = ck(v,2,0,'/detail',v.context.$implicit.id);
    ck(v,1,0,currVal_2);
  },(ck,v) => {
    const currVal_0:any = import1.ɵnov(v,1).target;
    const currVal_1:any = import1.ɵnov(v,1).href;
    ck(v,0,0,currVal_0,currVal_1);
    const currVal_3:any = v.context.$implicit.name;
    ck(v,7,0,currVal_3);
  });
}
export function View_DashboardComponent_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'h3',([] as any[]),(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['Top Heroes'])),
    (l()(),import1.ɵted((null as any),['\n'])),
      (l()(),import1.ɵeld(0,(null as any),(null as any),4,'div',[[
        'class',
        'grid grid-pad'
      ]
    ],(null as any),(null as any),(null as any),(null as any),(null as any))),
    (l()(),import1.ɵted((null as any),['\n  '])),
    (l()(),import1.ɵand(8388608,(null as any),(null as any),1,(null as any),View_DashboardComponent_1)),
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
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵted((null as any),['\n'])),
    (l()(),import1.ɵeld(0,(null as any),(null as any),2,'hero-search',([] as any[]),(null as any),(null as any),(null as any),import4.View_HeroSearchComponent_0,import4.RenderType_HeroSearchComponent)),
    import1.ɵprd(256,(null as any),import5.HeroSearchService,import5.HeroSearchService,[import6.Http]),
    import1.ɵdid(57344,(null as any),0,import7.HeroSearchComponent,[
      import5.HeroSearchService,
      import2.Router
    ]
    ,(null as any),(null as any)),
    (l()(),import1.ɵted((null as any),['\n']))
  ]
  ,(ck,v) => {
    var co:import8.DashboardComponent = v.component;
    const currVal_0:any = co.heroes;
    ck(v,6,0,currVal_0);
    ck(v,11,0);
  },(null as any));
}
function View_DashboardComponent_Host_0(l:any):import1.ɵViewDefinition {
  return import1.ɵvid(0,[
    (l()(),import1.ɵeld(0,(null as any),(null as any),1,'my-dashboard',([] as any[]),(null as any),(null as any),(null as any),View_DashboardComponent_0,RenderType_DashboardComponent)),
    import1.ɵdid(57344,(null as any),0,import8.DashboardComponent,[import9.HeroService],(null as any),(null as any))
  ]
  ,(ck,v) => {
    ck(v,1,0);
  },(null as any));
}
export const DashboardComponentNgFactory:import1.ComponentFactory<import8.DashboardComponent> = import1.ɵccf('my-dashboard',import8.DashboardComponent,View_DashboardComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiRDovTXlQcm9qZWN0L0FuZ3VsYXIyL3RvaC02L3NyYy9hcHAvZGFzaGJvYXJkLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9EOi9NeVByb2plY3QvQW5ndWxhcjIvdG9oLTYvc3JjL2FwcC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIiwibmc6Ly8vRDovTXlQcm9qZWN0L0FuZ3VsYXIyL3RvaC02L3NyYy9hcHAvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vRDovTXlQcm9qZWN0L0FuZ3VsYXIyL3RvaC02L3NyYy9hcHAvZGFzaGJvYXJkLmNvbXBvbmVudC50cy5EYXNoYm9hcmRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDM+VG9wIEhlcm9lczwvaDM+XHJcbjxkaXYgY2xhc3M9XCJncmlkIGdyaWQtcGFkXCI+XHJcbiAgPGEgKm5nRm9yPVwibGV0IGhlcm8gb2YgaGVyb2VzXCIgIFtyb3V0ZXJMaW5rXT1cIlsnL2RldGFpbCcsIGhlcm8uaWRdXCIgIGNsYXNzPVwiY29sLTEtNFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1vZHVsZSBoZXJvXCI+XHJcbiAgICAgIDxoND57e2hlcm8ubmFtZX19PC9oND5cclxuICAgIDwvZGl2PlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcbjxoZXJvLXNlYXJjaD48L2hlcm8tc2VhcmNoPlxyXG4iLCI8bXktZGFzaGJvYXJkPjwvbXktZGFzaGJvYXJkPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQ0VFO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQWdDO0lBQXFEO01BQ25GO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBeUI7SUFDdkI7SUFBSTtNQUFBO01BQUE7SUFBQTtJQUFBO0lBQWtCO0lBQ2xCOzs7SUFId0I7SUFBaEMsU0FBZ0MsU0FBaEM7O0lBQUE7SUFBQTtJQUFBLFNBQUEsbUJBQUE7SUFFUTtJQUFBOzs7OztJQUpWO0lBQUk7SUFBZTtNQUNuQjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQTJCO0lBQ3pCO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBSUk7SUFDQTtJQUNOO2dCQUFBO2dCQUFBOzs7SUFBQTtLQUFBO0lBQTJCOzs7O0lBTnRCO0lBQUgsU0FBRyxTQUFIO0lBTUY7Ozs7O0lDUkE7Z0JBQUE7OztJQUFBOzs7In0=
