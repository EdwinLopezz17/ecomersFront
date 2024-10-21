import { Component } from '@angular/core';
import {NgClass} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgClass,
    MatIcon
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isCollapsed: boolean = false;

  toggleCollapse(){
    this.isCollapsed = !this.isCollapsed;
  }
  closeSidenav(){
    this.isCollapsed = true;
  }
}
