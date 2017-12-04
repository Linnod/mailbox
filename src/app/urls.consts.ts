export class Urls {
  public static loginUrl = (): string => 'login';

  public static mailboxRootUrl = (): string => '/mailbox';
  public static mailBoxInboxUrl = (): string => `${Urls.mailboxRootUrl()}/inbox`;
  public static mailboxGoToMailUrl = (mailId: number): string => `${Urls.mailboxRootUrl()}/mails/mail/${mailId}`;
  public static mailboxCreateNewMailUrl = (): string => `${Urls.mailboxRootUrl()}/mails/new`;


  public static contactsRootUrl = (): string => '/contacts';
  public static contactsEditContactUrl = (contactId: number): string => `${Urls.contactsRootUrl()}/${contactId}/edit`;
  public static contactsCreateContactUrl = (): string => `${Urls.contactsRootUrl()}/new`;

}
