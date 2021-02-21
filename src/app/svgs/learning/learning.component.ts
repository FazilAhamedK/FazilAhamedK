import { Component, Input } from '@angular/core';

@Component
({
  selector: 'svg-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.scss']
})
export class LearningComponent
{
  @Input()
  class : string = "fill-current text-gray-800";

  constructor()
  { }
}