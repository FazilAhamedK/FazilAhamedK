import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component
({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent
{
  constructor(public themeService : ThemeService)
  { }
}