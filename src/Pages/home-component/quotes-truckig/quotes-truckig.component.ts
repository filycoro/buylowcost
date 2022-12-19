import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
// jQuery
import $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/ApiService';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quotes-truckig',
  templateUrl: './quotes-truckig.component.html',
  styleUrls: ['./quotes-truckig.component.scss']
})
export class QuotesTruckigComponent implements OnInit {

  applies;
  register: FormGroup;
  constructor(public apiService: ApiService, private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }


  ngOnInit() {

    this.apiService.Get_quotes_applies().then(res => {
      this.applies = res;
    });


    this.register = this.formBuilder.group({
      name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: [''],
      phone_emp: ['', Validators.required],
      address_emp: ['', Validators.required],
      address_line: [''],
      city_emp: [''],
      state_emp: [''],
      zipcode_emp: [''],
      date_emp: ['', Validators.required],
      desired_salary: [''],
      position_aplied: ['', Validators.required],
      citizen: ['0', Validators.min(1)],
    }, {

    });


    this.initMenuScrollable();
  }

  initMenuScrollable() {
    $(function () {
      /* $("html, body").animate(
        {
          scrollTop: 0
        },
        1000
      ); */
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
      $('.menu-link, .nav-link').click(function () {
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

  getDataForm() {

  }

  setData(): void {




  }

  onSubmit(): void {

    this.getDataForm();
    if (this.register.invalid) {
      console.log("incompelte");
      return;
    }
  }

  getWorker(id): void {
    this.apiService.Getall_byid(id).then(res => {

    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.register.controls; }
}
