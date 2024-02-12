export interface UserSchedule {
  id: number;
  fullName: string;
  mobileNumber: string;
  email: string;
  address: string;
  area: string;
  pincode: string;
  pickupDay: string;
  pickupTimeSlot: string;
  packageId: number;
  statusId: number;
  expectedDeliveryDate?: Date | null;
}
