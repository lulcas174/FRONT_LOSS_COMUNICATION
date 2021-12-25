import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LavouraRoutingModule } from './lavoura-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { StepModule } from 'ngx-credilab';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastroComponent
  ],
  imports: [
    CommonModule,
    LavouraRoutingModule,
    StepModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LavouraModule { }
