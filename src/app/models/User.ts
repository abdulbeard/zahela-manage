export enum Gender {
    male,
    female,
    nonBinary
}

export class User {
    username: string;
    firstName: string;
    lastName: string;
    middleInitial: string;
    categories: string[];
    description: string;
    facebookUrl: ContactInfo;
    twitterUrl: ContactInfo;
    instagramUrl: ContactInfo;
    email: ContactInfo;
    interests: string[];
    avatarImage: string;
    images: string[];
    gender: Gender;
    id: string;
    linkedGuests: User[];
    allergies: string[];
    dietaryRestrictions: string[];
    religiousRestrictions: string[];
    freeformRestrictions: string;
    freeformAllergies: string;
    rsvpStatus: RSVPStatus;
    type: UserType;

    public static default(): User {
        return new User("User1", "Jon", "Doe", ["Anonymous"], "The Doest of Jons", new ContactInfo("https://www.facebook.com", true),
            new ContactInfo("https://www.twitter.com", true), new ContactInfo("https://www.instagram.com", true),
            new ContactInfo("jon@doe.com", true), ["Joning", "Doe-ing", "Pingpong"], "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-1.svg",
            [
                "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-1.svg", 
                "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-2.svg"
            ],
            Gender.male, 
            [
                new User("Jane Smith", "Jane", "Smith", ["Anonymous"], "The Doest of Jons", new ContactInfo("https://www.facebook.com", true),
                    new ContactInfo("https://www.twitter.com", true), new ContactInfo("https://www.instagram.com", true),
                    new ContactInfo("jon@doe.com", true), ["Joning", "Doe-ing", "Pingpong"], "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-1.svg",
                    ["https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-1.svg", "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-2.svg"],
                    Gender.male, 
                    null, ["Peanuts"], ["Pescetarian"], ["Islam"], "I dont wike beef/chicken",
                    "Kinda don't like pansies", RSVPStatus.coming, UserType.guestUser),
                new User("John Spawn", "John", "Spawn", ["Anonymous"], "The Doest of Jons", new ContactInfo("https://www.facebook.com", true),
                    new ContactInfo("https://www.twitter.com", true), new ContactInfo("https://www.instagram.com", true),
                    new ContactInfo("jon@doe.com", true), ["Joning", "Doe-ing", "Pingpong"], "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-1.svg",
                    ["https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-1.svg", "https://zahelastorage.blob.core.windows.net/zahela-assets/defaultAvatars/male-2.svg"],
                    Gender.male, 
                    null, ["Peanuts"], ["Pescetarian"], ["Islam"], "I dont wike beef/chicken",
                    "Kinda don't like pansies", RSVPStatus.coming, UserType.guestUser)
            ]
            , ["Peanuts"], ["Pescatarian"], ["Islam"], "I dont wike beef/chicken",
            "Kinda don't like pansies", RSVPStatus.coming, UserType.guestUser);
    }

    constructor(username: string, firstname: string, lastname: string, categories: string[], description: string, facebookInfo: ContactInfo,
        twitterInfo: ContactInfo, instagramInfo: ContactInfo, email: ContactInfo, interests: string[],
        avatar: string, images: string[], gender: Gender, linkedGuests: User[], allergies: string[],
        dietaryRestrictions: string[], religiousRestrictions: string[], freeformRestrictions: string,
        freeformAllergies: string, rsvpStatus: RSVPStatus, type: UserType) {
        this.username = username;
        this.firstName = firstname;
        this.lastName = lastname;
        this.categories = categories;
        this.description = description;
        this.facebookUrl = facebookInfo;
        this.twitterUrl = twitterInfo;
        this.instagramUrl = instagramInfo;
        this.email = email;
        this.interests = interests;
        this.avatarImage = avatar;
        this.images = images;
        this.gender = gender;
        this.linkedGuests = linkedGuests;
        this.allergies = allergies;
        this.dietaryRestrictions = dietaryRestrictions;
        this.religiousRestrictions = religiousRestrictions;
        this.freeformRestrictions = freeformRestrictions;
        this.freeformAllergies = freeformAllergies;
        this.rsvpStatus = rsvpStatus;
        this.type = type;
    }

    public getPronounText(firstCapital: boolean): string {
        if (this.gender === Gender.male) {
            return firstCapital ? "He is" : "he is";
        }
        if (this.gender === Gender.female) {
            return firstCapital ? "She is" : "she is";
        }
        if (this.gender === Gender.nonBinary) {
            return firstCapital ? "They are" : "they are";
        }
    }

    public getInterestsText(): string {
        var result = [];
        for (var i = 0; i < this.interests.length; i++) {
            if (i === 0) {
                result.push(this.interests[i]);
                continue;
            }
            else if (i > 0 && i < this.interests.length - 1) {
                result.push(`, ${this.interests[i]}`);
                continue;
            }
            else if (i === this.interests.length - 1) {
                result.push(` and ${this.interests[i]}`);
                continue;
            }
        }
        return result.join("");
    }
}

export class ContactInfo {
    uri: string;
    isPublic: boolean;

    constructor(uri: string, ispublic: boolean) {
        this.uri = uri;
        this.isPublic = ispublic;
    }
}

export enum RSVPStatus {
    coming,
    notComing,
    maybe
}

export enum UserType {
    guestUser,
    registeredUser,
    posse,
    admin
}