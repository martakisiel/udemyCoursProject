import { Component } from '@angular/core';
import { Ingridient } from '../shared/igridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
ingridients:Ingridient[] = [
  new Ingridient('Apples', 5),
  new Ingridient('Eggs', 10)

];
}
