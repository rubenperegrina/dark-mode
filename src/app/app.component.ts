import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }
}
