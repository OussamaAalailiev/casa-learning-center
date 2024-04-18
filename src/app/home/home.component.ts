import { Component } from '@angular/core';
import { HeaderComponent } from '../nav/header/header.component';
import { ProductFeatureComponent } from '../product/product.component';
import { FeatureComponent } from '../feature/feature.component';
import { NewsLetterComponent } from '../news-letter/news-letter.component';
import { SectionEventsComponent } from '../section-events/section-events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    ProductFeatureComponent,
    SectionEventsComponent,
    FeatureComponent,
    NewsLetterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
