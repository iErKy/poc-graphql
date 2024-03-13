import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'albums-list',
  standalone: true,
  imports: [],
  templateUrl: './albums-list.component.html',
  styleUrl: './albums-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlbumsListComponent {}
