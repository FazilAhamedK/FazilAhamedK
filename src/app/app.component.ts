import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from './theme.service';

@Component
({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  constructor(private router : Router, public themeService : ThemeService)
  { }

  ngOnInit() : void
  {
    if (localStorage.getItem("FazilAhamedK_WebsiteTheme") == "Dark")
    {
      this.themeService.themeChosen = "Dark";
      document.getElementsByTagName("body")[0].classList.add("dark");
    }
  }

  isHomePageActive() : boolean
  {
    return this.router.url === "/";
  }

  getCurrentPage() : string
  {
    return this.router.url.slice(1);
  }
}