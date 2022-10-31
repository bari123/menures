import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  constructor() { }

  @ViewChild('container', { static: true }) container: ElementRef<HTMLElement>;

  ngOnInit() {
    this.setup();
  }

  setup() {
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);
    const container = this.container.nativeElement;

    Array.from(container.children).forEach((child: any, i: number) => {
      const order = i % numCols;
      child.style.order = order;
      colHeights[order] += parseFloat(child.clientHeight);
    });
    container.style.height = Math.max(...colHeights) + "px";
  }




}
