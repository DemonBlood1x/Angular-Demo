import { MaterialModule } from './../../material.model';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FiltroFechaPipe } from './FiltroFechaPipe';


@NgModule({
    declarations: [
        ProductsComponent,
        FiltroFechaPipe
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
