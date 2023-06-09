import MesureBsc from "./bsc/MesureBsc";

export default interface Course {
  mission: string;
  date: string;
  depart: string;
  arrivee: string;
  hd: string;
  ha: string;
  trainCourse?: string;
  ligne?: string;
  prQuota?: number;
  mesureBsc?: MesureBsc;
}
