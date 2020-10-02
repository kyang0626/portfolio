import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentSection = '';
  collapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
    console.log(this.currentSection);
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
    console.log(this.currentSection);
  }

}
