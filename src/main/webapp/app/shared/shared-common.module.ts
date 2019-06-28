import { NgModule } from '@angular/core';

import { ZhlJhipsterApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ZhlJhipsterApplicationSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ZhlJhipsterApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZhlJhipsterApplicationSharedCommonModule {}
