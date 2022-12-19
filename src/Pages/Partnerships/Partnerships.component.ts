import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/ApiService';
@Component({
  selector: 'app-Partnerships',
  templateUrl: './Partnerships.component.html',
  styleUrls: ['./Partnerships.component.scss']
})
export class PartnershipsComponent implements OnInit {
  QuoteForm: FormGroup;
  submitted = false;
  data = {
    business_name: "",
    name: "",
    last_name: "",
    phone: "",
    email: "",
    usdot: "",

  };
  constructor(public apiService: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    // show spinner
    /* this.spinner.show();
    setTimeout(() => {
      // spinner ends after 5 seconds 
      this.spinner.hide();
    }, 5000); */

    // init scrollable menu
    this.initMenuScrollable();

    this.QuoteForm = this.formBuilder.group({
      Business_name: ['', Validators.required],
      Name: ['', Validators.required],
      Last_name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      usdot: ['', Validators.required],



    }, {

    });
  }
  get f() { return this.QuoteForm.controls; }
  initMenuScrollable() {
    $(function () {
      /* $("html, body").animate(
        {
          scrollTop: 0
        },
        1000
      ); */
      $('#menu').addClass('menu-sm');
      $("#btn-covid").trigger("click");
      let scroll = window.scrollY;
      if (scroll > 0) {
        $('#menu').addClass('menu-sm');
      } else {
      //  $('#menu').removeClass('menu-sm');
      }
      function scrollFunction() {
        //console.log('asda');
        scroll = window.scrollY;
        //console.log(scroll);
        if (scroll > 0) {
          $('#menu').addClass('menu-sm');
        } else {
         // $('#menu').removeClass('menu-sm');
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

  getData(): void {
    this.data.business_name = this.QuoteForm.get('Business_name').value;
    this.data.name = this.QuoteForm.get('Name').value;
    this.data.last_name = this.QuoteForm.get('Last_name').value;
    this.data.phone = this.QuoteForm.get('phone').value;
    this.data.email = this.QuoteForm.get('email').value;
    this.data.usdot = this.QuoteForm.get('usdot').value;


  }

  onSubmit(): void {
    this.getData();
    // this.customer.id_user = this.user.id;
    //this.customer.id_agency = this.user.id_agency;
    this.submitted = true;
    // stop here if form is invalid
    if (this.QuoteForm.invalid) {
      return;
    }
    // display form values on success

    this.apiService.save_truck_quote(this.data).then(res => {
      if (res.status == "success") {
        alert("Quote Complete");
        location.reload();
      }
    });

  }
}
