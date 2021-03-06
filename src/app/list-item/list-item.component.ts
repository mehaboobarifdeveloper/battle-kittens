import {Component, Input, OnInit} from '@angular/core';
import {Kitten} from '../kitten';
import {KittenService} from '../kitten.service';
import {BattlescoreService} from '../battlescore.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input()
  public kitten: Kitten;

  constructor(private kittenService: KittenService,
              public battlescoreService: BattlescoreService) {
  }

  ngOnInit() {
  }

  view() {
  }

  delete() {
    this.kittenService.delete(this.kitten);
  }

}
