import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CelsiusFahrenheitConverter} from './converters/celsius-fahrenheit.converter';
import {ConverterService} from './converter.service';
import {ConverterPlugin} from './converter.plugin';

export * from './converter.component';
export * from './converter.service';
export * from './converter.plugin';
export * from './converters/celsius-fahrenheit.converter';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [],
  declarations: []
})
export class SurveyorConverterModule {
  static forRoot(): ModuleWithProviders<SurveyorConverterModule> {
    return {
      ngModule: SurveyorConverterModule,
      providers: [
        CelsiusFahrenheitConverter,
        ConverterService,
        {provide: 'PLUGIN', useValue: ConverterPlugin, multi: true}
      ]
    };
  }
}