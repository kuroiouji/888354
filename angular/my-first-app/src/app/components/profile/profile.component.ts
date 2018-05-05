import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private code: number;
  private name: string;
  private email: string;
  private edu: { major: string, faculty: string, university: string }
  private skills: string[];

  constructor() { }

  ngOnInit() {
    this.code = 58160033;
    this.name = "Mr.Bulakorn Maneesang";
    this.email = "58160033@go.buu.ac.th";
    this.edu = { major: "IT", faculty: "Informatics", university: "Burapha University" };
    this.skills = ["HTML", "CSS", "JS", "PHP", "SQL"];
  }

  addSkill(val_skill) {
    this.skills.unshift(val_skill);
    return false;
  }

  removeSkill(skill) {
    this.skills.forEach((element, index) => {
      if (element == skill) {
        this.skills.splice(skill, 1);
      }
    });
  }

}
