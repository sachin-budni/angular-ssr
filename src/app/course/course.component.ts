import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../seo.service';

interface Course {
  hour: string;
  icon: string;
  name: string;
  order: number;
  route: string;
  sal: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  course: Course;
  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private seo: SeoService) { }

  ngOnInit(): void {
    this.http.get('assets/courses.json').subscribe((courses) => {
      const courseName = this.route.snapshot.paramMap.get('course');
      this.course = courses[courseName] as Course;
      console.log(this.course);
      this.seo.generateTags({
        title: this.course.name,
        description: this.course.route,
        image: this.course.icon
      });
    });
  }

}
