import { Double } from "typeorm";

export interface Item {
  id?: string;
  externalId: string;
  cpf?: number;
  installmentValue: Double;
  installmentNumber: number;
  statusCharge: string;
  billingDate: Date;
}
