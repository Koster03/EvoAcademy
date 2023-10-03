import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResolveDataComponent } from './components/resolve-data/resolve-data.component';
import { MyResolver } from './pre-fetching.resolver';

const routes: Routes = [
  {
    path: 'resolve',
    component: ResolveDataComponent,
    resolve: [MyResolver],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
