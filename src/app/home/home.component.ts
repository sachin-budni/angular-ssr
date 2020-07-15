import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private seo: SeoService) {
  }

  ngOnInit(): void {
    this.seo.generateTags({
      title: 'Home-Page',
      description: 'Willntrix was established in 2016 and running successfully since then. It is an expert training institute in Advanced Excel, VBA, SQL, Data Analytics and Data Science. We have a number of effective trainers and we provide a great deal of flexibility to learners. We have framed our syllabus to match with the real-world requirements for both the beginner level and the advanced level.',
      image: 'https://www.willntrix.com/assets/Logo_v6.png'
    });
  }

}
