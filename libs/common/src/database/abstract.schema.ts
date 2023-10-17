import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ReservationDocument } from "apps/reservations/src/models/reservation.schema";
import { SchemaTypes, Types } from "mongoose";

@Schema ()
export class AbstractDocument {
    @Prop()
    timestamp: Date;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop()
    userId: string;

    @Prop()
    placeId: string;

    @Prop()
    invoiceId: string;
}

export const ReservationSchema = 
    SchemaFactory.createForClass(ReservationDocument);