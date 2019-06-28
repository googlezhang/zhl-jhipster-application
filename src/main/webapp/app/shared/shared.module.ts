import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZhlJhipsterApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ZhlJhipsterApplicationSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ZhlJhipsterApplicationSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZhlJhipsterApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: ZhlJhipsterApplicationSharedModule
    };
  }
}
