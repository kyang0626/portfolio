import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-inner',
  templateUrl: './main-inner.component.html',
  styleUrls: ['./main-inner.component.css']
})
export class MainInnerComponent implements OnInit {

  smallProjects = [ 'The Psychic Game', 'The Crystal Collector', 'Totally Trivial Trivia'];
  skills = [ { name: 'C#', imagePath: '../../assets/cSharp-logo'}, 
             { name: 'ASP.NET Core', imagePath: '../../assets/skills-icons/cSharp-logo'}, 
             { name: 'Angular', imagePath: '../../assets/skills-icons/cSharp-logo'}, 
             { name: 'JavaScript', imagePath: '../../assets/skills-icons/cSharp-logo'}, 
             { name: 'JQuery', imagePath: '../../assets/skills-icons/cSharp-logo'},
             { name: 'MySql', imagePath: '../../assets/skills-icons/cSharp-logo'},
             { name: 'Bootstrap', imagePath: '../../assets/skills-icons/cSharp-logo'},
             { name: 'HTML5', imagePath: '../../assets/skills-icons/cSharp-logo'},
             { name: 'CSS', imagePath: '../../assets/skills-icons/cSharp-logo'}  ]
    // 'C#', 'ASP.NET Core', 'Angular', 'JavaScript', 'Node.JS', 'MySql', 'JQuery', 'Bootstrap']

  constructor() { }

  ngOnInit(): void {
  }
}
