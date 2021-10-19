import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from './game/game.component';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';
import {SummaryComponent} from './summary/summary.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'select', component: SelectComponent },
    { path: 'game', component: GameComponent },
    { path: 'summary', component: SummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
