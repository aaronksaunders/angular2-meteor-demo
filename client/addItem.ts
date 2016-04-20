import {Component, OnInit} from 'angular2/core';
import {Parties} from '../collections/parties';
import {MeteorComponent} from 'angular2-meteor/meteor_component';
import { Meteor } from 'meteor/meteor'

import {Mongo} from 'meteor/mongo';

@Component({
    selector: 'add-item',
    templateUrl: 'client/addItem.html'
})
export class AddItemsComponent extends MeteorComponent implements OnInit {
    newItem: any

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('ngOnInit: AddItemComponent');
        this.newItem = {}
    }

    doAddNewItem() {
        Meteor.call('addItem', this.newItem, function (error, result) {
            if (error) {
                console.log(error)
            } else {
                console.log(result)
            }
        });
    }
}