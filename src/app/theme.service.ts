import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService
{
  themeChosen: string = "Light";

  toggleThemeChosen() : void
  {
    this.themeChosen = this.themeChosen == "Light" ? "Dark" : "Light";
    localStorage.setItem("FazilAhamedK_WebsiteTheme", this.themeChosen);

    document.getElementsByTagName("body")[0].classList.toggle("dark");
  }
}