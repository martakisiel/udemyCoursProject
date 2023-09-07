import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/recipe-list/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
//recepies will be always a array of object that we creaded model of. it is need to be importet into component
recipes: Recipe[] = [
  new Recipe('test recipe', 'this is simple desc', 'https://www.southernliving.com/thmb/HSEUOjJVCl4kIRJRMAZ1eblQlWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Millionaire_Spaghetti_019-34e9c04b1ae8405088f53450a048e413.jpg'),
  new Recipe('Recepie2','blabla','https://www.shutterstock.com/shutterstock/photos/370298699/display_1500/stock-photo-notepad-for-your-recipe-with-herbs-and-spices-over-black-stone-background-top-view-with-copy-space-370298699.jpg'),
  new Recipe('Recepie3','blabla','https://www.shutterstock.com/shutterstock/photos/370298699/display_1500/stock-photo-notepad-for-your-recipe-with-herbs-and-spices-over-black-stone-background-top-view-with-copy-space-370298699.jpg'),
  new Recipe('Recepie4','blabla','https://www.shutterstock.com/shutterstock/photos/370298699/display_1500/stock-photo-notepad-for-your-recipe-with-herbs-and-spices-over-black-stone-background-top-view-with-copy-space-370298699.jpg')
]; 

ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}
