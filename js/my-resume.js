
import {Element as PolymerElement}
  from "../node_modules/@polymer/polymer/polymer-element.js";

export class MyResume extends PolymerElement {
  static get template(){
    return "<div>This is demo of Polymer 3 [[name]] app</div> ";
  }

  constructor() {
    super();
    
    var self = this;
    self.name = "3.0 Preview";
  }

  static get properties() {
    name: {
      Type: String
    }
  }
}

customElements.define( "my-resume", MyResume );