import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { MailBoxMainContainerComponent } from './mail-agent/mail-box/mail-box-main-container/mail-box-main-container.component';
import { MailProviderService } from './mail-agent//mail-box/mail-provider.service';
import { MailComponent } from './mail-agent//mail-box/mail/mail.component';
import { MailBoxNavigationBarComponent } from './mail-agent//mail-box/mail-box-navigation-bar/mail-box-navigation-bar.component';
import { CreateMailComponent } from './mail-agent//mail-box/create-mail/create-mail.component';
import { ContactMainPageComponent } from './mail-agent//address-book/contact-main-page/contact-main-page.component';
import { ContactListComponent } from './mail-agent//address-book/contact-list/contact-list.component';
import { ContactComponent } from './mail-agent//address-book/contact/contact.component';
import { ContactCreateComponent } from './mail-agent//address-book/contact-create-edit-common/contact-create/contact-create.component';
import { ContactEditComponent } from './mail-agent//address-book/contact-create-edit-common/contact-edit/contact-edit.component';
import { ContactService } from './mail-agent//address-book/contact.service';
import { ContactCreateEditCommonComponent } from './mail-agent//address-book/contact-create-edit-common/contact-create-edit-common.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { MailAgentComponent } from './mail-agent/mail-agent.component';
import { AuthGuard } from './login/auth-guard';
import { AuthService } from './auth.service';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },

  { path: '', canActivate: [AuthGuard], component: MailAgentComponent, children: [
    { path: 'contacts', component: ContactMainPageComponent, children: [
      { path: 'new', component: ContactCreateComponent },
      { path: ':id', component: ContactComponent },
      { path: ':id/edit', component: ContactEditComponent }
    ]},

    { path: 'mailbox', component: MailBoxNavigationBarComponent, children: [
      { path: ':tab', component: MailBoxMainContainerComponent },
      { path: 'mails/mail/:id', component: MailComponent },
      { path: 'mails/new', component: CreateMailComponent }
    ]}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactListComponent,
    ContactEditComponent,
    ContactCreateComponent,
    MailBoxMainContainerComponent,
    MailComponent,
    MailBoxNavigationBarComponent,
    CreateMailComponent,
    ContactMainPageComponent,
    LoginPageComponent,
    MailAgentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService,
    MailProviderService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
