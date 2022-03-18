import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking'; 
import { action } from '@ember/object';

export default class RentalImageComponent extends Component {

    @tracked isLarge = false;  // @tracked tells emebr to track the changes of the specified instance variable

    @action toggleSize() { //
      this.isLarge = !this.isLarge;
    }
}


//this file holds the state