import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from '../login/login.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgbTooltipModule, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent,LoginComponent,SignUpComponent],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    NgbTooltipModule
  ]
})
export class UiModule { }
