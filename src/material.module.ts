import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
@NgModule({
  exports: [
    MatCardModule, MatButtonToggleModule, MatIconModule,  MatTabsModule
  ]
})
export class MaterialModule { }