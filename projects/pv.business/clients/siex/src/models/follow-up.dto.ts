/**
 * DTO des suivis SIEX
 */
export interface IFollowUpDTO {
  //Identifiant du dépôt
  id: string;
  //Date de dépôt UTC
  depositDate: Date;
  //Date de dernière mise à jour du suivi en BDD Geofolia en UTC
  updateDate: Date;
  //Etat du dépot : en cours, ok, en erreur... (string de l'enum)
  state: string;
  //Liste des infos de suivi
  details: IFollowUpDetailDTO[];
  //Tableau qui contient la listes du couple exploitation-exploitant
  farmAndIncumbentCIFs: IFarmAndIncumbentCIFDTO[];
  //Nom du demandeur
  applicantLastName: string;
  //Prénom du demandeur
  applicantFirstName: string;
  //Unité de gestion
  managementUnit: string;
  //Communauté autonome
  autonomousCommunityLabel: string;
}

/**
 * Détail du dépôt
 */
export interface IFollowUpDetailDTO {
  //Code du message
  code: string;
  //Détail du message
  detail: string;
  //Signification du message
  meaning: string;
}

/**
 * Exploitation + Exploitant
 */
export interface IFarmAndIncumbentCIFDTO {
  //CIF exploitation
  farmCIF: string;
  //CIF exploitant
  incumbentCIF: string;
}
