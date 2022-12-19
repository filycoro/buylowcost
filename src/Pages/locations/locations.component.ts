import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// jQuery
import $ from 'jquery';
@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
