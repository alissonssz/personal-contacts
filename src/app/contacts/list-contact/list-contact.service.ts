export class ListContactService {
    private contacts = [
        {
            id: 1,
            name: 'Alisson Santos de Souza',
            number: ['83999415505', '83999998888'],
            email: 'alissonssz@hotmail.com',
            socialMedias: [],
            favorite: false
        },
        {
            id: 2,
            name: 'Pé de Mano da Silva',
            number: ['83999415505', '83999998888'],
            email: 'pepano@hotmail.com',
            socialMedias: [],
            favorite: false
        },
        {
            id: 3,
            name: 'Pedro Alvares Cabral',
            number: ['83999415505', '83999998888'],
            email: 'pcabral@hotmail.com',
            socialMedias: [],
            favorite: false
        }
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

