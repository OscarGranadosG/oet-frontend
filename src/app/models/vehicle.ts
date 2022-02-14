import { Driver } from "./driver";
import { Owner } from "./owner";

export interface Vehicle {
    id: number;
    license_plate: string;
    color:	string;
    type: string;
    driver_id: number;
    owner_id: number;
    driver: Driver;
    owner: Owner;
}