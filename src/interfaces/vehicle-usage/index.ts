import { VehicleInterface } from 'interfaces/vehicle';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleUsageInterface {
  id?: string;
  vehicle_id?: string;
  date: any;
  duration?: number;
  mileage?: number;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  vehicle?: VehicleInterface;
  user?: UserInterface;
  _count?: {};
}

export interface VehicleUsageGetQueryInterface extends GetQueryInterface {
  id?: string;
  vehicle_id?: string;
  user_id?: string;
}
