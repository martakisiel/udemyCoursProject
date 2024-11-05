import { Component, OnChanges, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit, OnChanges  {
  
  constructor(){
    console.log('constructor!')
  }
  ngOnChanges(): void{
    console.log('onChanges!')      
  }
  ngOnInit(){
    console.log('onInit!')      
  }
  


}
