import { SocialMedia } from './social-media.model';
export class Contact {
    public id: number;
    public name: string;
    public phone: string;
    public email: string;
    public socialMedias: SocialMedia[];
    public favorite: boolean;

    constructor(id: number, name: string, number: string, email: string, socialMedias: SocialMedia[], favorite: boolean) {
        this.id = id;
        this.name = name;
        this.phone = number;
        this.email = email;
        this.socialMedias = socialMedias;
        this.favorite = favorite;
    }
}
