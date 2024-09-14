import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestimonialCardsComponent } from './testimonial-cards/testimonial-cards.component';
const routes: Routes = [{ path: '', component: TestimonialCardsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestimonialRoutingModule { }
