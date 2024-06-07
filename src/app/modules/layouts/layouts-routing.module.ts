import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { PageoneComponent } from './components/pageone/pageone.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'pageone', component : PageoneComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
