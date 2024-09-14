import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-testimonial-cards',
  templateUrl: './testimonial-cards.component.html',
  styleUrls: ['./testimonial-cards.component.scss']
})
export class TestimonialCardsComponent implements OnInit {
  @ViewChild('carouselTrack', { static: false })
  carouselTrack!: ElementRef;

  @ViewChild('carouselContainer')
  carouselContainer!: ElementRef;
  currentPosition = 0;
  cardWidth = 200;
  slideStore: any = [
    {
      "id": 1,
      "image": "../../../assets/customer1.png",
      "name": "Jacob Jones",
      "description": "As a budding startup, we sought a financial solution that was simple, secure, and scalable. Swift Revel checked all the boxes, enabling focus on growth."
    },
    {
      "id": 2,
      "image": "../../../assets/customer2.png",
      "name": "Emily Clark",
      "description": "Swift Revel's tailored financial solutions helped us streamline our processes and focus on expanding our customer base."
    },
    {
      "id": 3,
      "image": "../../../assets/customer1.png",
      "name": "Michael Brown",
      "description": "Partnering with Swift Revel was a game changer. Their financial tools enabled us to grow without worrying about backend complexities."
    },
    {
      "id": 4,
      "image": "../../../assets/customer2.png",
      "name": "Sophia Turner",
      "description": "Their user-friendly platform provided the scalability we needed while ensuring the security of our financial operations."
    },
    {
      "id": 5,
      "image": "../../../assets/customer1.png",
      "name": "James Wilson",
      "description": "Swift Revel provided the perfect solution for our growing business, allowing us to focus on what really matters: innovation and growth."
    },
    {
      "id": 6,
      "image": "../../../assets/customer1.png",
      "name": "Olivia Martinez",
      "description": "We were looking for financial services that would grow with us, and Swift Revel exceeded our expectations in both functionality and support."
    },
    {
      "id": 7,
      "image": "../../../assets/customer2.png",
      "name": "Liam Anderson",
      "description": "Their seamless integration with our existing systems made Swift Revel the perfect partner for scaling our operations globally."
    },
    {
      "id": 8,
      "image": "../../../assets/customer1.png",
      "name": "Liam Anderson",
      "description": "Their seamless integration with our existing systems made Swift Revel the perfect partner for scaling our operations globally."
    }
  ]
  constructor() { }

  ngOnInit(): void {
    this.initiateScroll();
  }

  ngAfterViewInit(): void {
    this.initiateScroll();
  }
  initiateScroll() {

    const carouselTrack = this.carouselTrack?.nativeElement;
    if (carouselTrack) {
      carouselTrack.style.transform = 'translateX(0)';

    }
    setTimeout(() => {
      this.startScrollAnimation(carouselTrack);
    }, 100);
  }

  startScrollAnimation(carouselTrack: HTMLElement) {
    const scrollDuration = 30;
    if (carouselTrack) {
      carouselTrack.style.transition = `transform ${scrollDuration}s linear`;
      carouselTrack.style.transform = `translateX(-100%)`;
      carouselTrack.addEventListener('transitionend', () => {
        carouselTrack.style.transition = 'none';
        carouselTrack.style.transform = 'translateX(0)';
        setTimeout(() => {
          carouselTrack.style.transition = `transform ${scrollDuration}s linear`;
          carouselTrack.style.transform = `translateX(-100%)`;
        }, 40);
      });
    }

  }

  getAnimationClass(index: number) {
    if (index % 2 === 0) return 'group-1';
    if (index % 2 === 1) return 'group-2';
    if (index % 2 === 2) return 'group-3';
    return 'group-4';
  }

}
