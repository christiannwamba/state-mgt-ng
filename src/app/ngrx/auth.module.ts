import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [CommonModule, StoreModule.forFeature('auth', AuthReducer)],
  exports: [AuthComponent],
})
export class AuthModule {}
