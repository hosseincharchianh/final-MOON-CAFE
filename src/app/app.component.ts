import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { SectComponent } from "./sect/sect.component";
import { AsideComponent } from "./aside/aside.component";
import { SisuComponent } from "./sisu/sisu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, SectComponent, AsideComponent, SisuComponent]
})
export class AppComponent {
  title = 'moonCafe';
}
