import { Component, OnInit, ɵConsole } from '@angular/core';
// jQuery
import $ from 'jquery';
import { ApiService } from 'src/app/services/ApiService';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-carriers',
  templateUrl: './carriers.component.html',
  styleUrls: ['./carriers.component.scss']
})
export class CarriersComponent implements OnInit {
  register: FormGroup;
  constructor(public apiService: ApiService, private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }

  public file64;
  submitted = false;
  public dataEmp = {
    name: "",
    middle_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    address_line: "",
    city: "",
    state: "",
    zipcode: "",
    date: "",
    desired_salary: "",
    position_aplied: "",
    citizen: "",
  }

  public eductaction1 = {
    institution: "",
    start_date: "",
    end_date: "",
    graduate: "",
    degree: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  }

  public education2 = {
    institution: "",
    start_date: "",
    end_date: "",
    graduate: "",
    degree: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",

  }



  public work1 = {
    company: "",
    phone: "",
    job_title: "",
    supervisor: "",
    start_salary: "",
    end_salary: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    start_date: "",
    end_date: "",
    reason_for_leaving: "",
    contact_supervisor: "",

  }

  public work2 = {
    company: "",
    phone: "",
    job_title: "",
    supervisor: "",
    start_salary: "",
    end_salary: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    start_date: "",
    end_date: "",
    reason_for_leaving: "",
    contact_supervisor: "",

  }


  public work3 = {
    company: "",
    phone: "",
    job_title: "",
    supervisor: "",
    start_salary: "",
    end_salary: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    start_date: "",
    end_date: "",
    reason_for_leaving: "",
    contact_supervisor: "",

  }

  ngOnInit() {
    this.register = this.formBuilder.group({
      name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: [''],
      phone_emp: ['', Validators.required],
      address_emp: ['', Validators.required],
      city_emp: [''],
      state_emp: [''],
      zipcode_emp: [''],
      /*
            institution_1: ['', Validators.required],
            start_date_1: [''],
            end_date_1: [''],
            graduate_1: ['0', Validators.min(1)],
            degree_1: [''],
            address_1: [''],
            city_1: [''],
            state_1: [''],
            zipcode_1: [''],
      
            institution_2: [''],
            start_date_2: [''],
            end_date_2: [''],
            graduate_2: [''],
            degree_2: [''],
            address_2: [''],
            city_2: [''],
            state_2: [''],
            zipcode_2: [''],
      
      
            company_1: ['', Validators.required],
            phone_work_1: ['', Validators.required],
            job_title_1: ['', Validators.required],
            supervisor_1: ['', Validators.required],
            start_salary_1: ['', Validators.required],
            end_salary_1: ['', Validators.required],
            address_work_1: ['', Validators.required],
            city_work_1: ['', Validators.required],
            state_work_1: ['', Validators.required],
            zipcode_work_1: ['', Validators.required],
            start_date_work_1: ['', Validators.required],
            end_date_work_1: ['', Validators.required],
            reason_for_leaving_1: ['', Validators.required],
            contact_supervisor_1: ['0', Validators.min(1)],
      
      
            company_2: [''],
            phone_work_2: [''],
            job_title_2: [''],
            supervisor_2: [''],
            start_salary_2: [''],
            end_salary_2: [''],
            address_work_2: [''],
            city_work_2: [''],
            state_work_2: [''],
            zipcode_work_2: [''],
            start_date_work_2: [''],
            end_date_work_2: [''],
            reason_for_leaving_2: [''],
            contact_supervisor_2: ['0'],
      
            company_3: [''],
            phone_work_3: [''],
            job_title_3: [''],
            supervisor_3: [''],
            start_salary_3: [''],
            end_salary_3: [''],
            address_work_3: [''],
            city_work_3: [''],
            state_work_3: [''],
            zipcode_work_3: [''],
            start_date_work_3: [''],
            end_date_work_3: [''],
            reason_for_leaving_3: [''],
            contact_supervisor_3: ['0'],
      */
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
    this.dataEmp.name = this.register.get("name").value;
    this.dataEmp.middle_name = this.register.get("middle_name").value;
    this.dataEmp.last_name = this.register.get("last_name").value;
    this.dataEmp.email = this.register.get("email").value;
    this.dataEmp.phone = this.register.get("phone_emp").value;
    this.dataEmp.address = this.register.get("address_emp").value;
    this.dataEmp.city = this.register.get("city_emp").value;
    this.dataEmp.state = this.register.get("state_emp").value;
    this.dataEmp.zipcode = this.register.get("zipcode_emp").value;

    /***Save Education1 */

    /**
     *   institution_1: ['', Validators.required],
        start_date_1: [''],
        end_date_1: [''],
        graduate_1: ['0', Validators.min(1)],
        degree_1: [''],
        address_1: [''],
        city_1: [''],
        state_1: [''],
        zipcode_1: [''],
    
    this.eductaction1.institution = this.register.get("institution_1").value;
    this.eductaction1.start_date = this.register.get("start_date_1").value;
    this.eductaction1.end_date = this.register.get("end_date_1").value;
    this.eductaction1.graduate = this.register.get("graduate_1").value;
    this.eductaction1.degree = this.register.get("degree_1").value;
    this.eductaction1.address = this.register.get("address_1").value;
    this.eductaction1.city = this.register.get("city_1").value;
    this.eductaction1.state = this.register.get("state_1").value;
    this.eductaction1.zipcode = this.register.get("zipcode_1").value;


    this.education2.institution = this.register.get("institution_2").value;
    this.education2.start_date = this.register.get("start_date_2").value;
    this.education2.end_date = this.register.get("end_date_2").value;
    this.education2.graduate = this.register.get("graduate_2").value;
    this.education2.degree = this.register.get("degree_2").value;
    this.education2.address = this.register.get("address_2").value;
    this.education2.city = this.register.get("city_2").value;
    this.education2.state = this.register.get("state_2").value;
    this.education2.zipcode = this.register.get("zipcode_2").value;
 */
    /***Save Works */

    /**
     * company_1: ['', Validators.required],
     phone_work_1: ['', Validators.required],
     job_title_1: ['', Validators.required],
     supervisor_1: ['', Validators.required],
     start_salary_1: ['', Validators.required],
     end_salary_1: ['', Validators.required],
     address_work_1: ['', Validators.required],
     city_work_1: ['', Validators.required],
     state_work_1: ['', Validators.required],
     zipcode_work_1: ['', Validators.required],
     start_date_work_1: ['', Validators.required],
     end_date_work_1: ['', Validators.required],
     reason_for_leaving_1: ['', Validators.required],
     contact_supervisor_1: ['0', Validators.min(1)],

   
    this.work1.company = this.register.get("company_1").value;
    this.work1.phone = this.register.get("phone_work_1").value;
    this.work1.job_title = this.register.get("job_title_1").value;
    this.work1.supervisor = this.register.get("supervisor_1").value;
    this.work1.start_salary = this.register.get("start_salary_1").value;
    this.work1.end_salary = this.register.get("end_salary_1").value;
    this.work1.address = this.register.get("address_work_1").value;
    this.work1.city = this.register.get("city_work_1").value;
    this.work1.state = this.register.get("state_work_1").value;
    this.work1.zipcode = this.register.get("zipcode_work_1").value;
    this.work1.start_date = this.register.get("start_date_work_1").value;
    this.work1.end_date = this.register.get("end_date_work_1").value;
    this.work1.reason_for_leaving = this.register.get("reason_for_leaving_1").value;
    this.work1.contact_supervisor = this.register.get("contact_supervisor_1").value;

    this.work2.company = this.register.get("company_2").value;
    this.work2.phone = this.register.get("phone_work_2").value;
    this.work2.job_title = this.register.get("job_title_2").value;
    this.work2.supervisor = this.register.get("supervisor_2").value;
    this.work2.start_salary = this.register.get("start_salary_2").value;
    this.work2.end_salary = this.register.get("end_salary_2").value;
    this.work2.address = this.register.get("address_work_2").value;
    this.work2.city = this.register.get("city_work_2").value;
    this.work2.state = this.register.get("state_work_2").value;
    this.work2.zipcode = this.register.get("zipcode_work_2").value;
    this.work2.start_date = this.register.get("start_date_work_2").value;
    this.work2.end_date = this.register.get("end_date_work_2").value;
    this.work2.reason_for_leaving = this.register.get("reason_for_leaving_2").value;
    this.work2.contact_supervisor = this.register.get("contact_supervisor_2").value;
      




    this.work3.company = this.register.get("company_3").value;
    this.work3.phone = this.register.get("phone_work_3").value;
    this.work3.job_title = this.register.get("job_title_3").value;
    this.work3.supervisor = this.register.get("supervisor_3").value;
    this.work3.start_salary = this.register.get("start_salary_3").value;
    this.work3.end_salary = this.register.get("end_salary_3").value;
    this.work3.address = this.register.get("address_work_3").value;
    this.work3.city = this.register.get("city_work_3").value;
    this.work3.state = this.register.get("state_work_3").value;
    this.work3.zipcode = this.register.get("zipcode_work_3").value;
    this.work3.start_date = this.register.get("start_date_work_3").value;
    this.work3.end_date = this.register.get("end_date_work_3").value;
    this.work3.reason_for_leaving = this.register.get("reason_for_leaving_3").value;
    this.work3.contact_supervisor = this.register.get("contact_supervisor_3").value;
*/


  }

  onSubmit(): void {
    this.submitted = true;
    this.getDataForm();
    if (this.register.invalid) {
      console.log("incompelte");
      return;
    }

    this.apiService.save(this.file64, this.dataEmp, this.eductaction1, this.education2, this.work1, this.work2, this.work3).then(res => {
      if (res.status == "success") {
        alert("Apply Complete");
        location.reload();
      }
    });

  }
  openFile() {
    $("#avatar").trigger("click");
  }
  // convenience getter for easy access to form fields
  get f() { return this.register.controls; }


  fileChangeEvent($event) {
    this.readThis($event.target);


  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.file64 = myReader.result;
      console.log(this.file64);
    }
    myReader.readAsDataURL(file);
  }
}
