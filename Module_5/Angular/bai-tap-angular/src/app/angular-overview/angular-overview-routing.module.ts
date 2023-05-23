import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from "./list/list.component";
import {FontSizeEditorComponent} from "./font-size-editor/font-size-editor.component";
import {PetComponent} from "./pet/pet.component";
import {CalculatorComponent} from "./calculator/calculator.component";
import {ColorComponent} from "./color/color.component";


const routes: Routes = [
  {path: 'list', component: ListComponent},
  {path: 'font-size-editor', component: FontSizeEditorComponent},
  {path: 'pet', component: PetComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'color', component: ColorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularOverviewRoutingModule {
}
