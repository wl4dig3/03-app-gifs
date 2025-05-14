import { Component, inject, signal } from '@angular/core';
import { GifListComponent } from "../../components/gifs/gifs-list/gif-list.component";
import { GifService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [ GifListComponent],
  templateUrl: './search-page.component.html',
})
export default class SearchPageComponent {

  gifs = signal<Gif[]>([])

  GifService = inject(GifService) 
  onSearch(query: string) {
    this.GifService.searchGifs(query)
    .subscribe(resp => {
      this.gifs.set(resp);
      console.log(resp);
    });
      
  }
 }
