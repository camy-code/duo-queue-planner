import { Service } from "@angular/core";
import { CardInterface } from "../interfaces/card-interface";
import { title } from "process";

@Service()
export class DateService {

    dummyCard :CardInterface = {
            title:"Blank title",
            body_text: "",
            imageURL: "",
            links:[]
        }

    getDummyCard():CardInterface {
       return this.dummyCard;
    }

}