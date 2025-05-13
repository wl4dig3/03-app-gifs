import { GifService } from './../../services/gifs.service';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gifs/gifs-list/gif-list.component";


@Component({
  selector: 'app-trending-page',
  imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent { 
  // gifs = signal(imageUrls)

  GifService = inject(GifService) 
}
