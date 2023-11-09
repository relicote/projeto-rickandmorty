import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable, take } from 'rxjs';
import { CharacterService } from '@app/shared/services/character.service';
import { Character } from '@app/shared/interface/character.interface';

@Component({
  selector: 'app-characters-details',
  templateUrl: './characters-details.component.html',
  styleUrls: ['./characters-details.component.scss']
})
export class CharactersDetailsComponent implements OnInit {
  characters$: Observable<Character>;

  constructor(private route:ActivatedRoute, private characterSvc:CharacterService, private location:Location) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id = params['id'];
      this.characters$ = this.characterSvc.getDetails(id);
    });
  }

  onGoBack():void{
    this.location.back();
    //window.history.back
  }

}
