import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact-list/contact/contact.component';
import { ContactListComponent } from './contact-list/contact-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactEditComponent } from './contact-list/contact-edit/contact-edit.component';

import {Routes, RouterModule} from '@angular/router';
import { ContactService } from './services/contact.service';
import { ContactCreateComponent } from './contact-list/contact-create/contact-create.component';
import { ContactCreateEditCommonComponent } from './contact-list/contact-create-edit-common/contact-create-edit-common.component';
import { MailBoxMainContainerComponent } from './mail-box/mail-box-main-container/mail-box-main-container.component';
import { MailProviderService } from './mail-box/mail-provider.service';
import { MailComponent } from './mail-box/mail/mail.component';
import { MailBoxNavigationBarComponent } from './mail-box/mail-box-navigation-bar/mail-box-navigation-bar.component';
import { CreateMailComponent } from './mail-box/create-mail/create-mail.component';

const appRoutes: Routes = [
  { path: '', component: AppComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: ContactCreateComponent },
  { path: 'contacts/:id', component: ContactComponent },
  { path: 'contacts/:id/edit', component: ContactEditComponent },

  { path: 'mailbox', component: MailBoxNavigationBarComponent, children: [
    { path: ':tab', component: MailBoxMainContainerComponent },
    { path: 'mails/mail/:id', component: MailComponent },
    { path: 'mails/new', component: CreateMailComponent, pathMatch: 'full' }
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
    CreateMailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ContactService,
    MailProviderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
