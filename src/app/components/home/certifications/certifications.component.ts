import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.scss']
})
export class CertificationsComponent implements OnInit {

 
  customOptions: any;

  constructor() {
    this.customOptions = {
      loop: true,
      nav: true,
      dots: true,
      responsive: {
        0: {
          items: 1 // Show 1 item on small screens
        },
        768: {
          items: 1 // Adjust as needed for larger screens
        }
      }
    };
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;



  ngOnInit(): void {



  }

debug(){
  console.log("Clicked on project description.");

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
