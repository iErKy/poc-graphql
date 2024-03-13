import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, input, Output } from '@angular/core';
import { MatButtonToggleChange, MatButtonToggleModule } from '@angular/material/button-toggle';

export interface Section {
    name: string;
    index: number;
}

@Component({
    selector: 'app-navigation-bar',
    standalone: true,
    imports: [CommonModule, MatButtonToggleModule],
    template: `
      <mat-button-toggle-group #navigationBar
                               (change)="manageChange($event)">
        <mat-button-toggle *ngFor="let section of $sections()"
                           [value]="section">{{ section.name }}
        </mat-button-toggle>
      </mat-button-toggle-group>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationBarComponent {

    @Output() selectionChanged = new EventEmitter<Section>();

    $sections = input.required<Array<Section>>();

    manageChange(event: MatButtonToggleChange) {
        this.selectionChanged.emit(event.value as Section);
    }
}
