import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  currentSection = 'aboutme';

  person = { name: 'Kong Yang', title: "Full-Stack-Web Developer", imageUrl: "https://kyang0626.github.io/assets/images/port-pic.jpeg"}
  socialMedia = [ 'LinkedIn', 'FaceBook', 'Instagram'];

  constructor() { }

  ngOnInit(): void {
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section) {
    document.querySelector('#' + section)
      .scrollIntoView();
  }

}
