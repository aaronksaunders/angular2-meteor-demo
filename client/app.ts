import {Component, OnInit} from 'angular2/core';
import {MeteorComponent} from 'angular2-meteor/meteor_component';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';
import {Parties} from '../collections/parties';
import {Mongo} from 'meteor/mongo';
import {AddItemsComponent} from './addItem';

@Component({
    selector: 'app',
    templateUrl: 'client/app.html',
    directives: [AddItemsComponent]
})
class AngTwoMeteorApp extends MeteorComponent implements OnInit {
    parties: Mongo.Cursor<Object>;

    constructor() {
        super();
    }

    ngOnInit() {
        console.log('ngOnInit');

        this.subscribe('parties', () => {
            this.parties = Parties.find();
        }, true);


    }
}

bootstrap(AngTwoMeteorApp);