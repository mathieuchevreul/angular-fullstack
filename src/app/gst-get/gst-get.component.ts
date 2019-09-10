// gst-get.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Business from '../Business';
import { BusinessService } from '../business.service';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {

  businesses: Business[];

  constructor(private bs: BusinessService,
              private router: Router,) { }

  ngOnInit() {
    this.getBusinesses();
  }

  getBusinesses(): void {
    this.bs
    .getBusinesses()
    .subscribe((data: Business[]) => {
    this.businesses = data;
    })
  }

  deleteBusiness(id) {
    this.bs.deleteBusiness(id).subscribe(res => {
      console.log('Deleted');
    });
    this.getBusinesses();
  }
}