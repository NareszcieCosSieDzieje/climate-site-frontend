import {Component} from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    public list: Array<string> =  ['1', '2', '3'];

    // TODO: dodac responsywnosc
}
