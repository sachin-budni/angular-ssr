import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Subject, interval, Observable } from 'rxjs';
import { map, take, startWith } from 'rxjs/operators';
import { NguCarouselConfig } from '@ngu/carousel';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'angular-ssr';
  spinnerFlag = new Subject();
  @ViewChild('myCanvas') canvas: ElementRef;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    // const c = this.canvas.nativeElement;
    // console.log(c);
    // this.http.get('/todos').subscribe(d => {
    //   console.log(d);
    // });
    // this.http.get('https://reqres.in/api/users?delay=3').subscribe(u => {
    //   this.spinnerFlag.next(true);
    // });
    // setTimeout(() => {
    // }, 1000);



    this.tempData = [];
    this.carouselTileItems.forEach(el => {
      this.carouselTileLoad(el);
    });
    
    this.carouselTileItems$ = interval(500).pipe(
      startWith(-1),
      take(30),
      map(val => {
        const data = (this.tempData = [
          ...this.tempData,
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        ]);
        return data;
      })
    );
  }


  // ngAfterViewInit(): void {
  //     console.log(this.canvas.nativeElement);
  // }
  // tslint:disable-next-line: member-ordering
  imgags = ['assets/bg.jpg', 'assets/car.png', 'assets/canberra.jpg', 'assets/holi.jpg'];
  // tslint:disable-next-line: member-ordering
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
  // tslint:disable-next-line: member-ordering
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: []
  };
  // tslint:disable-next-line: member-ordering
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 3, lg: 5, all: 0 },
    slide: 3,
    speed: 350,
    interval: {
      timing: 3000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    loop: true,
    touch: true,
    animation: 'lazy',
    easing: 'cubic-bezier(.17,.67,.83,.67)'
  };

  // tslint:disable-next-line: member-ordering
  public carouselTileItems$: Observable<number[]>;
  // tslint:disable-next-line: member-ordering
  public carouselTileConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 5, all: 0 },
    speed: 250,
    point: {
      visible: true
    },
    touch: true,
    loop: true,
    interval: { timing: 1500 },
    animation: 'lazy'
  };
  // tslint:disable-next-line: member-ordering
  tempData: any[];

  // constructor(private cdr: ChangeDetectorRef) {}

  // ngOnInit() {
  //   this.tempData = [];
  //   this.carouselTileItems.forEach(el => {
  //     this.carouselTileLoad(el);
  //   });

  //   this.carouselTileItems$ = interval(500).pipe(
  //     startWith(-1),
  //     take(30),
  //     map(val => {
  //       const data = (this.tempData = [
  //         ...this.tempData,
  //         this.imgags[Math.floor(Math.random() * this.imgags.length)]
  //       ]);
  //       return data;
  //     })
  //   );
  // }

  // switchMap(val => {
  //   const data =
  //     val >= 5
  //       ? this.shuffle(this.tempData)
  //       : (this.tempData = [
  //           ...this.tempData,
  //           this.imgags[Math.floor(Math.random() * this.imgags.length)]
  //         ]);
  //   return of(data);
  // })

  ngAfterViewInit(): any {
    this.cdr.detectChanges();
  }

  public carouselTileLoad(j): any {
    // console.log(this.carouselTiles[j]);
    const len = this.carouselTiles[j].length;
    if (len <= 30) {
      for (let i = len; i < len + 100; i++) {
        this.carouselTiles[j].push(this.imgags[Math.floor(Math.random() * this.imgags.length)]);
      }
    }
  }

  shuffle(array): any {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
}
