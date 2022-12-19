import { Component, OnInit, Input } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() type: boolean;
  @Input() InverseStyle:boolean;
  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    
  }

}
