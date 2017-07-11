import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component ({
     selector: 'footer',
     templateUrl: 'app/views/footer.html'
})
export class FooterComponent {
    constructor(private route: ActivatedRoute) { }
}
