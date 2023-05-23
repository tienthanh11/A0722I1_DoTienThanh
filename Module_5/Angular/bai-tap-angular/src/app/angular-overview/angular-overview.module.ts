import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AngularOverviewRoutingModule} from './angular-overview-routing.module';
import {ListComponent} from './list/list.component';
import {FontSizeEditorComponent} from './font-size-editor/font-size-editor.component';
import {FormsModule} from "@angular/forms";
import {PetComponent} from './pet/pet.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {ColorComponent} from './color/color.component';


@NgModule({
  declarations: [
    ListComponent,
    FontSizeEditorComponent,
    PetComponent,
    CalculatorComponent,
    ColorComponent
  ],
  imports: [
    CommonModule,
    AngularOverviewRoutingModule,
    FormsModule
  ]
})
export class AngularOverviewModule {
}
