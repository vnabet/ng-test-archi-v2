import { Observable } from "rxjs";
import { FollowUp } from "../models";


export abstract class SiexClientGateway {
  /**
   * Récupère les données de suivi des dossier SIEX
   * @returns tableau de données de suivi
   */
  public abstract getAllFollowUp(): Observable<FollowUp[]>

}
