import { PerformanceAssessmentInterface } from 'interfaces/performance-assessment';
import { ReservationInterface } from 'interfaces/reservation';
import { VehicleUsageInterface } from 'interfaces/vehicle-usage';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  make: string;
  model: string;
  year?: number;
  color?: string;
  license_plate: string;
  owner_id?: string;
  created_at?: any;
  updated_at?: any;
  performance_assessment?: PerformanceAssessmentInterface[];
  reservation?: ReservationInterface[];
  vehicle_usage?: VehicleUsageInterface[];
  user?: UserInterface;
  _count?: {
    performance_assessment?: number;
    reservation?: number;
    vehicle_usage?: number;
  };
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  owner_id?: string;
}
