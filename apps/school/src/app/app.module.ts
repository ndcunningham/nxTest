import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@sampleWorkspace/ui-components';
import { schoolLoginRoutes } from '@sampleWorkspace/school/login';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([{ path: 'school-login', children: schoolLoginRoutes }], { initialNavigation: 'enabled' }),
    UiComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
