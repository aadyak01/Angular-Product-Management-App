import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from "@angular/core";


@Component({
    selector:'pm-star',
    templateUrl:'./star-component.html',
    styleUrls:['./star-component.css']
})
export class StarComponent implements OnChanges{
   
    cropWidth:number=75;
    @Input() rating:number=0;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75 / 5;
    }

    onClick(): void {
        //emit ratingClicked event and pass the message to the container component
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
        
      }

}