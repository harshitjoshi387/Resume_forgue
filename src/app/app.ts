import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  title = 'frontend';
  name ="harsh"
  greet(): string {
    return(`hello ${this.name}`)
  }
}