import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  @Output('onSubmit') submitEmitter = new EventEmitter<string | undefined>();

  onSubmit(e: Event) {
    const value = (e.target as HTMLInputElement).value || undefined;
    this.submitEmitter.emit(value);
  }
}
