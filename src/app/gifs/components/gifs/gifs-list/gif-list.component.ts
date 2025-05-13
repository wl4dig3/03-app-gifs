import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GifsListItemComponent } from '../gifs-list-item/gifs-list-item.component';
import { s } from 'node_modules/@angular/router/router_module.d-6zbCxc1T';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'app-gif-list',
  imports: [GifsListItemComponent],
  templateUrl: './gif-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifListComponent { 
  gifs = input.required<Gif[]>(); // string[] = [];
  
}
