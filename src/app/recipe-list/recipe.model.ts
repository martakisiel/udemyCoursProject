//no decorator
export class Recipe{
//new objects
public name: string;
public description: string;
public imagePath: string;

constructor(name:string, description: string, imagePath: string){
    //instance of the class
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
}
}