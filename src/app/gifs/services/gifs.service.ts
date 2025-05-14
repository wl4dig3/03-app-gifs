import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from './../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';
import { map } from 'rxjs';


@Injectable({providedIn: 'root'})
export class GifService {
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);

    trendingGifLoading = signal(true);

    constructor() {
        this.loadTrendingGifs();
    }

    loadTrendingGifs() {
        this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).subscribe(resp => { // sin el .suscribe la promesa no se resuelve
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            this.trendingGifs.set(gifs);
            this.trendingGifLoading.set(false);
            console.log(gifs);
        });
    }  
    
    searchGifs(query: string) {
       return  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
            params: {
                api_key: environment.giphyApiKey,
                q: query,
                limit: 20
            }
        })
        .pipe(
            map( resp => GifMapper.mapGiphyItemsToGifArray(resp.data) )
            // TODO: historial
        )
       
    }
    
}
    