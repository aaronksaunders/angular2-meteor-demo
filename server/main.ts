import { Meteor } from 'meteor/meteor';
import {Parties} from '../collections/parties';

Meteor.startup(() => {
    // code to run on server at startup



    if (Parties.find().count() === 0) {
        
        console.log("Updating Data");

        var parties = [
            {
                'title': 'Dubstep-Free Zone...ITS WORKING !!!',
                'message': 'Can we please just for an evening not listen to dubstep.',
            },
            {
                'title': 'All dubstep all the time',
                'message': 'Get it on!',
            }
        ];

        for (var i = 0; i < parties.length; i++) {
            Parties.insert(parties[i]);
        }
    }

});
