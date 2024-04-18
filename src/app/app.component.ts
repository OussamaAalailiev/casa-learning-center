import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ProductFeatureComponent } from './product/product.component';
import { SectionEventsComponent } from './section-events/section-events.component';
import { FeatureComponent } from './feature/feature.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    ProductFeatureComponent,
    SectionEventsComponent,
    FeatureComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'casa-learning-center';
}
