import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  label: string;
  subLabel: string;
  route: string;
  icon: string;
}
@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterModule, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuOptionsComponent { 
  menuOptions: MenuOptions[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Buscador',
      subLabel: 'Buscar Gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
