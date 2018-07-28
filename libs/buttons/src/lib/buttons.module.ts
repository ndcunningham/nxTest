import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostButtonComponent } from './post-button/post-button.component';
@NgModule({
  imports: [CommonModule],
  declarations: [PostButtonComponent],
  exports: [PostButtonComponent]
})
export class ButtonsModule {}
