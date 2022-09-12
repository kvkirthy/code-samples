import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adapt-by-screensize',
  templateUrl: './adapt-by-screensize.component.html',
  styleUrls: ['./adapt-by-screensize.component.scss']
})
export class AdaptByScreensizeComponent implements OnInit {
  message = "";
  isPortrait = false;

  constructor(private bpObserable: BreakpointObserver) { }

  ngOnInit(): void {
    this.bpObserable
      .observe([
        '(orientation: portrait)',
      ])
      .subscribe(result => {
        if(result.matches){
          this.isPortrait = true;
          this.message = 'Turn phone to landscape to see larger image';
        }
      });

      this.bpObserable
      .observe([
        '(orientation: landscape)',
      ])
      .subscribe(result => {
        if(result.matches){
          this.isPortrait = false;
          this.message = 'Turn phone to portrait to see museum timings';
        }
      });
  }

}
