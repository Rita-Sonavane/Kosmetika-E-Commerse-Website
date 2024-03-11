import { Schema, model } from 'mongoose';

export interface Skin_Care {
    id: string;
    name: string;
    skinType: string,
    price: number;
    categories: string[];
    favorite: boolean;
    stars: number;
    imageUrl: string;
    brand:string;
    item_form:string; 
    item_volume:string;
    type_Product:string;
    discription:string;

}

export const Skin_CareSchema = new Schema<Skin_Care>(
    {
        name: {
            type: String,
            //  required:true
        },
        skinType: {
            type: String,
            // required:true
        },
        price: {
            type: Number,
            // required:true
        },
        categories: { type: [String] },
        favorite: {
            type: Boolean,
            default: false
        },
        stars: {
            type: Number,
            //  required:true
        },
        imageUrl: {
            type: String,
            // required:true
        },
        brand: {
            type: String,
            // required:true
        },
        item_form: {
            type: String,
            // required:true
        },
        item_volume: {
            type: String,
            // required:true
        },
        type_Product: {
            type: String,
            // required:true
        },
        discription: {
            type: String,
            // required:true
        },
    }, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
}
);


export const SKin_CareModel = model<Skin_Care>('skin_care', Skin_CareSchema);