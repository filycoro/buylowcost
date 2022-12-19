import { Component, OnInit, Input } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';  

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  // Inputs
  @Input() images: any[];

  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = {
    loop:true, 
    dots: false, 
    nav: true, 
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        700:{
            items:2,
        },
        1000:{
            items:3,
        },
        1400:{
            items:4,
        }
    },
    navContainer: '#customNav',
    navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'] 
  };

  constructor() { }

  ngOnInit() {
    console.log(this.images);
  }

}
