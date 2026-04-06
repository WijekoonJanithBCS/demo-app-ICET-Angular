import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './common/header/header';
import { Dashboard } from './pages/dashboard/dashboard';
import { Products } from './pages/products/products';


@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, Header, Dashboard, Products],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('demo-app');
}
