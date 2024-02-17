import { Component } from '@angular/core';

@Component({
  selector: 'app-feature-box',
  templateUrl: './feature-box.component.html',
  styleUrls: ['./feature-box.component.css']
})
export class FeatureBoxComponent {

  arr:Array<Object> = [{"img" : "https://1000logos.net/wp-content/uploads/2022/06/Logo-Motorola.png" , "name" : "Motorola"}, 
                       {"img" : "https://1000logos.net/wp-content/uploads/2022/06/Logo-Canon.png" , "name" : "Canon"}, 
                       {"img" : "https://logos-world.net/wp-content/uploads/2022/07/Logo-Suzuki.png" , "name" : "Suzuki"}, 
                       {"img" : "https://imgv3.fotor.com/images/blog-richtext-image/CNN-Logo.png" , "name" : "CNN"}, 
                         
          ]

}
