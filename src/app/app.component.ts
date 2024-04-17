import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductFeatureComponent } from './product-feature/product-feature.component';
import { SectionEventsComponent } from './section-events/section-events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    ProductFeatureComponent,
    SectionEventsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'casa-learning-center';
}
