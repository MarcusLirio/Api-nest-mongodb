import * as mongoose from 'mongoose';
import { Double } from 'typeorm';

export const ItemSchema = new mongoose.Schema({
  externalId: String,
  cpf: Number,
  installmentValue: Double,
  installmentNumber: Number,
  statusCharge: String,
  billingDate: Date,
});
