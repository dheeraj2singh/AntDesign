import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { SliderComponent } from './header-footer/slider/slider.component';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzMenuModule } from 'ng-zorro-antd/menu';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    DetailsFormComponent,
    AddressFormComponent,
    FeedbackFormComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
  ],
  imports: [
    NzMenuModule,
    ReactiveFormsModule,
    NzTableModule,
    NzCheckboxModule,
    NzInputModule,
    NzRateModule,
    NzSelectModule,
    NzGridModule,
    NzFormModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzStepsModule,
    NzTypographyModule,
    NzAlertModule,
    NzLayoutModule,
    NzCascaderModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
