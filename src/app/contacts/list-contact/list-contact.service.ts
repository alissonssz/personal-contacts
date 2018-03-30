import { Contact } from '../contact.model';
import { SocialMedia } from '../social-media.model';

export class ListContactService {
    private contacts: Contact[] = [

        // tslint:disable-next-line:max-line-length
        new Contact(1, 'Alisson Santos de Souza', '83999415505', 'alissonssz@hotmail.com', [new SocialMedia('Twitter', 'twitter.com/alissonssz', 'twitter'), new SocialMedia('Linkedin', 'linkedin.com/alissonssz', 'linkedin')], false),
        new Contact(2, 'Pé de Mano da Silva', '83999415505', 'pepano@hotmail.com', null, false),
        // tslint:disable-next-line:max-line-length
        new Contact(3, 'Pedro Alvares Cabral', '83999415505', 'pacabral@hotmail.com', [new SocialMedia('Instagram', '@pacabral', 'instagram')], false)
    ];

    getContacts() {
        return this.contacts;
    }

    getContact(id: number) {
        const contact = this.contacts.find(
            (s) => {
                return s.id === id;
            }
        );
        return contact;
    }

    updateContact(id: number, contactInfo: { name: string}) {
        const contact = this.contacts.find(
            (s) => {
                return s.id === id;
            }
        );
        if (contact) {
            contact.name = contactInfo.name;
        }
    }
}

