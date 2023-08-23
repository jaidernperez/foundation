export class Comment {

    id: string;
    name: string;
    occupation: string;
    profile: string;
    comment: string;
    createdAt: Date;

    constructor(id: string, name: string, occupation: string, profile: string, comment: string, date: Date) {
        this.id = id;
        this.name = name;
        this.occupation = occupation;
        this.profile = profile;
        this.comment = comment;
        this.createdAt = date;
    }
}