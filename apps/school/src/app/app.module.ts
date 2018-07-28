import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NxModule } from '@nrwl/nx';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { UiComponentsModule } from '@sampleWorkspace/ui-components';
import { schoolLoginRoutes, SchoolLoginModule } from '@sampleWorkspace/school/login';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    RouterModule.forRoot([{ path: '', children: schoolLoginRoutes }], { initialNavigation: 'enabled' }),
    UiComponentsModule,
    SchoolLoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
