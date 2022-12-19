import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core'; 
import { NgxSpinnerService } from 'ngx-spinner';
// jQuery
import $ from 'jquery';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent implements OnInit {

  public imageSlider: any[] = [
    'assets/images/image-1.jpg',
    'assets/images/image-2.jpg',
    'assets/images/image-3.jpg',
    'assets/images/image-4.jpg',
    'assets/images/image-5.jpg'
  ];

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    // show spinner
    /* this.spinner.show();
    setTimeout(() => {
      // spinner ends after 5 seconds 
      this.spinner.hide();
    }, 5000); */

    // init scrollable menu
    this.initMenuScrollable();
  }

  initMenuScrollable(){
    $(function() {
      /* $("html, body").animate(
        {
          scrollTop: 0
        },
        1000
      ); */

      $( "#btn-covid" ).trigger( "click" );
      let scroll = window.scrollY;
      if (scroll > 0) {
        $('#menu').addClass('menu-sm');
      } else {
        $('#menu').removeClass('menu-sm');
      }
      function scrollFunction() {
        //console.log('asda');
        scroll = window.scrollY;
        //console.log(scroll);
        if (scroll > 0) {
          $('#menu').addClass('menu-sm');
        } else {
          $('#menu').removeClass('menu-sm');
        }
      }
      window.onscroll = scrollFunction;
      $('.menu-link, .nav-link').click(function() {
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
        if ($(this).attr('href') == '#home') {
          console.log('home');
          $("html, body").animate(
            {
              scrollTop: 0
            },
            1000
          );
          return;
        }
        var target = $(this.hash);
        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
        }
      });
    });
  }

}
