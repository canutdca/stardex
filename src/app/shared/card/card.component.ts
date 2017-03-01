import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent implements OnInit {

  @Input() private titulo: any;
  @Input() private titulo1: any;
  @Input() private info1: any;
  @Input() private titulo2: any;
  @Input() private info2: any;
  @Input() private titulo3: any;
  @Input() private info3: any;


  constructor() { }

  ngOnInit() { }

}
