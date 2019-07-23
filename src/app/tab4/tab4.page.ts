import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public nome_usuario:string = "Dan Freitas";

  constructor() { }

  public somaDoisNumeros(num1:number, num2:number): void{
    alert(num1 + num2);
  }
  ngOnInit() {
   // this.somaDoisNumeros(10, 99);
  }

}
