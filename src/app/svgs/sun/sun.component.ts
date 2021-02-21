import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-sun',
  templateUrl: './sun.component.html',
  styleUrls: ['./sun.component.scss']
})
export class SunComponent
{
  @Input()
  class: string = "fill-current text-gray-800";
  
  constructor()
  { }
}