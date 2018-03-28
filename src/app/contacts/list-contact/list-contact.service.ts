import { Contact } from '../contact.model';

export class ListContactService {
    private contacts: Contact[] = [
        new Contact(1, 'Alisson Santos de Souza', '83999415505', 'alissonssz@hotmail.com', [], false),
        new Contact(2, 'Pé de Mano da Silva', '83999415505', 'pepano@hotmail.com', [], false),
        new Contact(3, 'Pedro Alvares Cabral', '83999415505', 'pacabral@hotmail.com', [], false)
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

