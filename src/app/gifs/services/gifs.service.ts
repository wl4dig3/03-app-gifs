import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from './../interfaces/gif.interface';
import type { GiphyResponse } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapper/gif.mapper';


@Injectable({providedIn: 'root'})
export class GifService {
    private http = inject(HttpClient);

    trendingGifs = signal<Gif[]>([]);

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
            console.log(gifs);
        });
    }   
    
}
    