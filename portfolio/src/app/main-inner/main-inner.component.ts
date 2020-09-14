import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-inner',
  templateUrl: './main-inner.component.html',
  styleUrls: ['./main-inner.component.css']
})
export class MainInnerComponent implements OnInit {
  currentSection = 'aboutme';
  smallProjects = [ 'The Psychic Game', 'The Crystal Collector', 'Totally Trivial Trivia'];
  skills = [ { name: 'C#', imagePath: '../../assets/cSharp-logo'}, 
             { name: 'ASP.NET Core', imagePath: '../../assets/cSharp-logo'}, 
             { name: 'Angular', imagePath: '../../assets/cSharp-logo'}, 
             { name: 'JavaScript', imagePath: '../../assets/cSharp-logo'}, 
             { name: 'JQuery', imagePath: '../../assets/cSharp-logo'},
             { name: 'MySql', imagePath: '../../assets/cSharp-logo'},
             { name: 'Bootstrap', imagePath: '../../assets/cSharp-logo'},
             { name: 'HTML5', imagePath: '../../assets/cSharp-logo'},
             { name: 'CSS', imagePath: '../../assets/cSharp-logo'}  ]
    // 'C#', 'ASP.NET Core', 'Angular', 'JavaScript', 'Node.JS', 'MySql', 'JQuery', 'Bootstrap']

  constructor() { }

  ngOnInit(): void {
  }

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

}
