import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SunComponent } from './svgs/sun/sun.component';
import { MoonComponent } from './svgs/moon/moon.component';
import { HomeComponent } from './home/home.component';
import { LaptopComponent } from './svgs/laptop/laptop.component';
import { LearningComponent } from './svgs/learning/learning.component';
import { SkillsComponent } from './skills/skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ThemeService } from './theme.service';

@NgModule
({
  declarations:
  [
    AppComponent,
    SunComponent,
    MoonComponent,
    HomeComponent,
    LaptopComponent,
    LearningComponent,
    SkillsComponent,
    PortfolioComponent
  ],
  imports:
  [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule
{ }