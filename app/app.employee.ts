import { Component} from '@angular/core';

@Component ({
    selector:'employee-app',
    templateUrl:'app/app.employee.html',
})

export class Appemployee{
     columnSpan : number=2;
     firstname:string ='Hassan';
     Lastname:string='chinta';
     Gender:string='male';
     Age:number =24;
     showDetails :boolean=false;

     toogleDetails(): void {
         this.showDetails =!this.showDetails;
     }

}