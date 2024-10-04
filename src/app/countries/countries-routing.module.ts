import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PorCapitalPageComponent } from './pages/por-capital-page/por-capital-page.component';
import { PorPaisPageComponent } from './pages/por-pais-page/por-pais-page.component';
import { PorRegionPageComponent } from './pages/por-region-page/por-region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

const routes:Routes=[
    {
        path:'by-pais',
        component:PorPaisPageComponent
    },
    {
        path:'by-capital',
        component:PorCapitalPageComponent
    },
    {
        path:'by-region',
        component:PorRegionPageComponent
    },
    {
        path: 'country/:name',
        component:CountryPageComponent
    },
    {
        path:'**',
        redirectTo:'by-pais'
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
   
})
export class CountriesRoutingModule { }
