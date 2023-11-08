import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from '@shared/interface/character.interface';
import { environment } from '@app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  // PAGE - Filtras as solicitações da API por pagina
  // query - Filtrar todos os personagens pela API ou por pesquisa de usuário

  searchCharacters(query='', page= 1){
    return this.http.get<Character[]>
    (`${environment.baseUrlAPI}/?name=${query}&page=${page}`
    );
  }

  getDetails(id:number){}
}
