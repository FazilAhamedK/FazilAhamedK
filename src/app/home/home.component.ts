import { Component, OnInit } from '@angular/core';

@Component
({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit
{
  themeChosen: string = "Light";

  constructor()
  { }

  ngOnInit() : void
  {
    if (localStorage.getItem("FazilAhamedK_Theme") == "Dark")
    {
      this.themeChosen = "Dark";
      document.getElementsByTagName("body")[0].classList.add("dark");
    }
  }

  toggleThemeChosen() : void
  {
    this.themeChosen = this.themeChosen == "Light" ? "Dark" : "Light";
    localStorage.setItem("FazilAhamedK_Theme", this.themeChosen);

    document.getElementsByTagName("body")[0].classList.toggle("dark");
  }
}