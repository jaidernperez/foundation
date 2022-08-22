export class Comment {

    id: number;
    name: string;
    occupation: string;
    profile: string;
    comment: string;

    constructor(id: number, name: string, occupation: string, profile: string, comment: string) {
        this.id = id;
        this.name = name;
        this.occupation = occupation;
        this.profile = profile;
        this.comment = comment;
    }
}