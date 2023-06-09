import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RepositoryComponent } from './repository/repository.component';
import { AgeComponent } from './age/age.component';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { TypingAnimatorModule } from 'angular-typing-animator';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    AgeComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, FormsModule, TypingAnimatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
