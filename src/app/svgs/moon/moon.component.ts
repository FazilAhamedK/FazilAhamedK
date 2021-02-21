import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-moon',
  templateUrl: './moon.component.html',
  styleUrls: ['./moon.component.scss']
})
export class MoonComponent
{
  @Input()
  class: string = "fill-current text-gray-800";

  constructor()
  { }
}