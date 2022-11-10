import { Double } from "typeorm";

export class CreateItemDto {
  readonly externalId: string;
  readonly cpf: number;
  readonly installmentValue: Double;
  readonly installmentNumber: number;
  readonly statusCharge: string;
  readonly billingDate: Date;
}
