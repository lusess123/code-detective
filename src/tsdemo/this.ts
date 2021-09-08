
interface User {
    admin : boolean ;
}
interface DB {
    filterUsers(filter: (this: User) => boolean): User[];
  }
   
  const db  =  {} as DB ;
  const admins = db.filterUsers(function (this: User) {
    return this.admin;
  });

  // Inferred as 2-length tuple
const args = [8, 5] as const;
// OK
const angle = Math.atan2(...args);

function identity<Type>(arg: Type): Type {
    return arg;
  }
   
  let myIdentity1: <Type>(arg: Type) => Type = identity;
  let myIdentity2: <Input>(arg: Input) => Input = identity;
  let myIdentity3: { <Type>(arg: Type): Type } = identity;

  type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };
   
  type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };
   
  type UnlockedAccount = CreateMutable<LockedAccount>;
             
//   type UnlockedAccount = {
//       id: string;
//       name: string;
//   }

// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };
   
  type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };
   
  type User1 = Concrete<MaybeUser>;
        
//   type User = {
//       id: string;
//       name: string;
//       age: number;
//   }
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type Lang = "en" | "ja" | "pt";
 
type LocaleMessageIDs1 = `${Lang}_${AllLocaleIDs}`;
            
//type LocaleMessageIDs2 = "en_welcome_email_id" | "en_email_heading_id" | "en_footer_title_id" | "en_footer_sendoff_id" | "ja_welcome_email_id" | "ja_email_heading_id" | "ja_footer_title_id" | "ja_footer_sendoff_id" | "pt_welcome_email_id" | "pt_email_heading_id" | "pt_footer_title_id" | "pt_footer_sendoff_id"


type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void ): void;
};
 
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
 
const person = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person.on("firstNameChanged", newName => {
                                
    console.log(`new name is ${newName.toUpperCase()}`);
});
 
person.on("ageChanged", newAge => {
                          
    if (newAge < 0) {
        console.warn("warning! negative age");
    }
})


class Box {
    content: string = "";
    sameAs(other: this) {
      return other.content === this.content;
    }
  }
   
  class DerivedBox extends Box {
    otherContent: string = "?";
  }
   
  const base = new Box();
  const derived = new DerivedBox();
  derived.sameAs(derived);
