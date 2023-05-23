import { notificationData } from "../../store";

class Notification{
    constructor(type){
        this.type = type;
    }
    push(data = notificationData){
        switch(data.type){
            case 'info': {
                
            }
        }
    }
}