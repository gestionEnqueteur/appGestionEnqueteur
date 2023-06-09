export default interface MesureBsc {
  questionnaires?: Questionnaires;
  infoTrain?: InfoTrain;
  retards?: Retards;
  trainRemovalReason?: string;
}

export interface Questionnaires {
  distributedQuestionnaires?: number;
  unusableQuestionnaires?: number;
  emptyQuestionnaires?: number;
  usableQuestionnaires?: number;
}

export interface InfoTrain {
  composition?: "US" | "UM2" | "UM3";
  material?: number;
}

export interface Retards {
  lateDeparture: number | Date;
  lateArrival: number | Date;
}

export interface Investigator {
  dropOffStation: string;
}
