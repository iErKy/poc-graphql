import { Component, signal } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AlbumsListComponent } from './albums-list/albums-list.component';
import { NavigationBarComponent, Section } from './navigation-bar/navigation-bar.component';

@Component({
  standalone: true,
  imports: [RouterModule, MatToolbar, NavigationBarComponent, AlbumsListComponent],
  selector: 'poc-graphql-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  $selectedIndex = signal(-1);

  sections: Array<Section> = [
    { index: 0, name: 'Albums' },
    { index: 1, name: 'Comments' },
  ];

  manageNavigation(section: Section) {
    this.$selectedIndex.set(section.index);
  }
}
