import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdaptByScreensizeComponent } from './breakpoint-sample/adapt-by-screensize/adapt-by-screensize.component';

const routes: Routes = [{
  path: 'breakpoint-sample',
  component:AdaptByScreensizeComponent
},{
  path: '',
  redirectTo: '/breakpoint-sample',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
