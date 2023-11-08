import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor() { }

  // PAGE - Filtras as solicitações da API por pagina
  // query - Filtrar todos os personagens pela API ou por pesquisa de usuário

  searchCharacters(query='', page= 1){}
  getDetails(id:number){}
}
