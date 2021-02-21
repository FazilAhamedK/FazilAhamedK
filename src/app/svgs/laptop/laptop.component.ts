import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent
{
  @Input()
  class : string = "fill-current text-gray-800";
  
  constructor()
  { }
}