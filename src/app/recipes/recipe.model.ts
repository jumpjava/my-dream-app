export class Recipe{
    public name:string;
    public type: string;
    public description: string;
    public imagePath: string;

    constructor(name:string,type:string,desc:string,imagePath:string){

        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.type=type;
    }
}