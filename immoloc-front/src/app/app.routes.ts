import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { AnalysePageComponent } from './pages/analyse-page/analyse-page.component'
import { EstimationPageComponent } from './pages/estimation-page/estimation-page.component'
import { GenerationPageComponent } from './pages/generation-page/generation-page.component'

export const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'analyse', component: AnalysePageComponent },
    { path: 'estimation', component: EstimationPageComponent },
    { path: 'generation', component: GenerationPageComponent },
    { path: '**', redirectTo: '' }
];
