import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/