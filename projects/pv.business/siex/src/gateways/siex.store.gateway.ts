import { Observable } from "rxjs";
import { FollowUp } from "../models";

export abstract class SiexStoreGateway {
  abstract followUps$:Observable<FollowUp[]>;

  abstract initializeFollowUps(followUps:FollowUp[]):void;

}
