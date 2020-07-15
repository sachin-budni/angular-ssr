import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta) { }

  // tslint:disable-next-line: typedef
  public generateTags(config){
    config = {
      title: 'Something',
      description: 'Our unique training delivery methods helps students or professionals to understand the core concepts of any technology and crack the interview, this made a big list of successful candidates who are placed in esteem organisations like Infosys, Dell, Oracle etc.',
      image: 'https://www.willntrix.com/assets/Logo_v6.png',
      slug: '',
      ...config
    };
    this.meta.updateTag({ name: 'twitter:card', content: 'summery' });
    this.meta.updateTag({ name: 'twitter:site', content: 'willntrix' });
    this.meta.updateTag({ name: 'twitter:title', content: config.title });
    this.meta.updateTag({ name: 'twitter:description', content: config.description });
    this.meta.updateTag({ name: 'twitter:image', content: config.image });

    this.meta.updateTag({ property: 'og:type', content: 'article' });
    this.meta.updateTag({ property: 'og:site_name', content: 'willntrix' });
    this.meta.updateTag({ property: 'og:title', content: config.title });
    this.meta.updateTag({ property: 'og:description', content: config.description });
    this.meta.updateTag({ property: 'og:image', content: config.image });
  }
}
