import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./testimonial/testimonial.module').then(m => m.TestimonialModule) },
  { path: 'testimonial', loadChildren: () => import('./testimonial/testimonial.module').then(m => m.TestimonialModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
