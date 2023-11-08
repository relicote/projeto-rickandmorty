import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CharactersModule } from '@characters/characters.module';
import { CharactersDetailsComponent } from '../characters/characters-details/characters-details.component';
import { CharactersListComponent } from '../characters/characters-list/characters-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharactersDetailsComponent,
    CharactersListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CharactersModule,
  ],
  exports:[
    CharactersDetailsComponent,
    CharactersListComponent
  ]
})
export class HomeModule { }
