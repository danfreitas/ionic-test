import { Component } from '@angular/core';
import { Tab4Page } from '../tab4/tab4.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  tab4 = Tab4Page;
  constructor() {}

}
