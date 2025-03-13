import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title!: string;
  @Input() desc!: string;
  @Input() imgsrc!: string;

  constructor(private router: Router) {}

  goToAbout() {
    this.router.navigate(['/about'], { 
      queryParams: { 
        name: this.title, 
        image: this.imgsrc, 
        description: this.desc 
      } 
    });
  }
}
