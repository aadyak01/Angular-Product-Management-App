import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product_id!:number;
  constructor(private router:ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.product_id =  params['id'];
      console.log(this.product_id);
      });
  }

  onClickback():void{
    this.route.navigate(['/products']);
  }

}
