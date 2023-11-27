/**
 * Énuméré des états de suivis SIEX
 */
export enum FollowUpState {
  pendienteDeProcesar = 'PENDIENTE DE PROCESAR',
  ficheroProcesado = 'FICHERO PROCESADO',
  ok = 'OK',
  parcial = 'PARCIAL',
  fallo = 'FAIL',
  undefined = 'UNDEFINED',
}

/**
 * Classe métier des suivis SIEX
 */
export class FollowUp {
  //Identifiant du dépôt
  id!: string;
  //Date de dépôt UTC
  depositDate!: Date;
  //Date de dernière mise à jour du suivi en BDD Geofolia en UTC
  updateDate!: Date;
  //État du dépôt : en cours, ok, en erreur... (string de l'enum)
  state!: FollowUpState;
  //Liste des infos de suivi
  details!: FollowUpDetail[];
  //Tableau qui contient la listes du couple exploitation-exploitant
  farmAndIncumbentCIFs!: FarmAndIncumbentCIF[];
  //Nom du demandeur
  applicantLastName!: string;
  //Prénom du demandeur
  applicantFirstName!: string;
  //Unité de gestion
  managementUnit!: string;
  //Communauté autonome
  autonomousCommunityLabel!: string;
}

/**
 * Détail du dépôt
 */
export class FollowUpDetail {
  //Code du message
  code!: string;
  //Détail du message
  detail!: string;
  //Signification du message
  meaning!: string;
}

/**
 * Exploitation + Exploitant
 */
export class FarmAndIncumbentCIF {
  //CIF exploitation
  farmCIF!: string;
  //CIF exploitant
  incumbentCIF!: string;
}
