import { Injectable } from "@angular/core";
import { IProduct } from "./products";

@Injectable({
    providedIn:'root'
})
export class ProductService{

    getProducts():IProduct[]{
        return [
                {
                  "productId": 1,
                  "productName": "Laptop",
                  "productCode": "GDN-0011",
                  "releaseDate": "March 19, 2021",
                  "description": "UltraWide Curved Screen",
                  "price": 79995,
                  "starRating": 3.5,
                  "imageUrl": "assets/images/laptop.png"
                },
                {
                  "productId": 2,
                  "productName": "Bluetooth Headset",
                  "productCode": "GDN-0023",
                  "releaseDate": "March 18, 2021",
                  "description": "Bluetooth Headset with Noise Cancellation Feature",
                  "price": 3299,
                  "starRating": 4.0,
                  "imageUrl": "assets/images/headset.png"
                },
                {
                  "productId": 5,
                  "productName": "Journal",
                  "productCode": "TBX-0048",
                  "releaseDate": "May 21, 2021",
                  "description": "Productivity Planner Journal",
                  "price": 809,
                  "starRating": 5,
                  "imageUrl": "assets/images/journal.png"
                },
                {
                  "productId": 8,
                  "productName": "Wireless Charging Pad",
                  "productCode": "TBX-0022",
                  "releaseDate": "May 15, 2021",
                  "description": " a sleek solution that powers up your devices effortlessly while decluttering your workspace",
                  "price": 1155,
                  "starRating": 3.5,
                  "imageUrl": "assets/images/saw.png"
                },
                {
                  "productId": 10,
                  "productName": "High-Speed Document Scanner",
                  "productCode": "GMG-0042",
                  "releaseDate": "October 15, 2020",
                  "description": "Providing quick and reliable scanning for seamless paper-to-digital workflows",
                  "price": 35595,
                  "starRating": 4.5,
                  "imageUrl": "assets/images/xbox-controller.png"
                }
        ]

    } 

}