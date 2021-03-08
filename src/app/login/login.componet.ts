import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    template: '<h3>Logowaanie</h3><p>{{discription}}</p>'
})
export class LoginComponent {
    public description = 'Podaj dane autorzacyjne'
} 