
import { Attendee} from "../model-attendee/model-attendee";
import { Action} from "../model-action/model-action";
import {Decision} from "../model-decision/model-decision";
import {Discussion} from "../model-discussion/model-discussion";

/*
 * format should be
 * {
 *  attendees:[{name:"...", email:"...@...", phone_number:"..."}<,...> ]
 *  discussion:[{title:"...", description:"..."}<,...>]
 *  decisions:[{title:"...", description:"..."}<,...>]
 *  actions:[{title:"...", description:"..." owner_id:"...", due_date:"...", tasks:[{owner_id:"...", description:"...", due_date:"...", status:[]}]}<,...>]
 * }
 */
export class Meeting {

  id: string;
  title: string;
  description: string;

  createdAt: number;
  updatedAt: number;

  attendees : Attendee[];
  discussions: Discussion[];
  decisions: Decision[];
  actions: Action[];
}
