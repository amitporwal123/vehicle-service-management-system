import { Component } from '@angular/core';

@Component({
    selector: 'header',
    template: `<div class="navbar-fixed">
                <nav>
                <div class="nav-wrapper">
                    <a href="/" class="brand-logo center">{{title}}</a>
                </div>
                </nav>
                </div>`
})
export class HeaderComponent {
    title = 'Vehicle Service Management System';
}