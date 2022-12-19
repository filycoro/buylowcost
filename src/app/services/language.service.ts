import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public activeLang = 'en';

  constructor(
    private translate: TranslateService
  ) {
    console.log("language");
    this.translate.setDefaultLang(this.activeLang);
  }

  public changeLanguage(lang) {
    this.activeLang = lang;
    this.translate.use(lang);
  }

}
