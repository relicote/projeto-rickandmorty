import { Component, OnInit } from '@angular/core';
import { Character } from '@app/shared/interface/character.interface';
import { CharacterService } from '@app/shared/services/character.service';
import { take } from 'rxjs/operators';

type RequestInfo ={
  next:string;
}

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.scss']
})
export class CharactersListComponent implements OnInit {

  characters:Character[] = [];

  info:RequestInfo = {
    next: null,
  }


  private pageNum=1;
  private query:string;
  private hideScrollHeight=200;
  private showScrollHeight = 500;

  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService ():void{
    this.characterSvc.searchCharacters(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res:any)=>{
      console.log('Response ->', res)

      const {info, results} = res;
      this.characters = [...this.characters, ...results ];
      this.info = info;
    })
  }

}
