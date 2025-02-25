import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { SymbolsComponent } from './alarm/symbols/symbols.component';
import { VariantsComponent } from './general/variants/variants.component';
import { FontsComponent } from './matrix/fonts/fonts.component';
import { LanguagesComponent } from './matrix/languages/languages.component';
import { PlacementsComponent } from './minutes/placements/placements.component';

@NgModule({
    declarations: [
        SymbolsComponent,
        VariantsComponent,
        FontsComponent,
        LanguagesComponent,
        PlacementsComponent
    ],
    entryComponents: [
        SymbolsComponent,
        VariantsComponent,
        FontsComponent,
        LanguagesComponent,
        PlacementsComponent
    ],
    imports: [
        IonicModule,
        CommonModule
    ],
    exports: [
        SymbolsComponent,
        VariantsComponent,
        FontsComponent,
        LanguagesComponent,
        PlacementsComponent
    ]
})
export class ComponentsModule { }