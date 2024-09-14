import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialRoutingModule } from './testimonial-routing.module';
import { TestimonialCardsComponent } from './testimonial-cards/testimonial-cards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [

    TestimonialCardsComponent
  ],
  imports: [
    CommonModule,
    TestimonialRoutingModule,
    CarouselModule,


  ]
})
export class TestimonialModule { }
