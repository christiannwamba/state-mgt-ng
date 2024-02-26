import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { AuthReducer } from './store';
import { AuthComponent } from './auth.component';
import { AuthModule } from './auth.module';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({
      auth: AuthReducer,
    }),
    AuthModule,
  ],
  exports: [AuthModule],
})
export class NgrxStoreModule {}
