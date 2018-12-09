import {ButtonsInterface} from "./Buttons";
import {UpdatedListInterface} from "./UpdatedList";

export default interface SanabuttonClientInterface {
  buttons(): Promise<ButtonsInterface>;
  updatedList(): Promise<UpdatedListInterface>;
}
