import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-form-search',
  template: `
  <input
    #inputSearch
    autofocus
    type="text"
    class="form-control-lg"
    placeholder="Procurar..."
    (keyup)="onSearch(inputSearch.value)"
    />
  `,
  styles: ['input {width: 100%}'],
})
export class FormSearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value:string){
    // Validando se o valor inserido pelo usuário é maior que 3 caracteres, SE for, o valor passado será pesquisado pela váriavel VALUE

    if(value && value.length > 3){
      this.router.navigate(['/character-list'],{
        queryParams:{q:value}
      })
    }
  }

}
