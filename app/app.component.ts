import{ Component } from '@angular/core';

@Component({
     selector:'project-app',
     template: `<employee-app></employee-app>`
})

export class Appcomponent {
    Onclick():void {
         console.log('Button clicked');
 }
}