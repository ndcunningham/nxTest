import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@sampleWorkspace/buttons';
@NgModule({
  imports: [CommonModule, ButtonsModule],
  exports: [ButtonsModule]
})
export class UiComponentsModule {}
