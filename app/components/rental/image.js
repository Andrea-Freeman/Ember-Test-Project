import Component from '@glimmer/component';

export default class RentalImageComponent extends Component {

    constructor(...args) {
        super(...args);
        this.isLarge = false;
      }
}

//older way of calling state here 
//this file holds the state