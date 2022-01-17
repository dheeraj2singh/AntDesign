
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { DetailsFormComponent } from './form/details-form/details-form.component';
import { AddressFormComponent } from './form/address-form/address-form.component';
import { FeedbackFormComponent } from './form/feedback-form/feedback-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReactiveFormsModule } from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    AddressFormComponent,
    FeedbackFormComponent
   
  ],
  imports: [
    ReactiveFormsModule,
    NzTableModule,
    NzCheckboxModule,
    NzInputModule,
    NzRateModule,
    NzSelectModule,
    NzGridModule,
    NzFormModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzStepsModule,
    NzTypographyModule,
    Ng2SearchPipeModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
