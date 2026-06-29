import { Service } from "@angular/core";
import { CardInterface } from "../interfaces/card-interface";
import { title } from "process";

@Service()
export class DateService {

    dummyCard :CardInterface = {
            title:"Blank title",
            body_text: "Here is some body text that will be used for a post and that will look really cool and we can cook.",
            imageURL: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
            links:[{link: "https://www.google.com", linkText: "Example Link"}]
        }

    getDummyCard():CardInterface {
       return this.dummyCard;
    }

}