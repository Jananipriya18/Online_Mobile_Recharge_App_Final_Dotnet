import { UserSchedule } from "./user-schedule.model";

describe('UserSchedule Models', () => {
  fit('UserSchedule should create instance and have proper datatypes', () => {
    // Arrange
    const userSchedule: UserSchedule = {
      id: 1,
      fullName: "demo",
      mobileNumber: "789456123",
      email: "demo@gmail.com",
      address: "asd",
      pickupDay: "monday",
      pickupTimeSlot: "1 to 4 pm",
    };

    // Act & Assert
    // Check if the entire userSchedule object is truthy (defined)
    expect(userSchedule).toBeTruthy();

    // Check if individual properties are truthy (defined)
    expect(userSchedule.id).toBeTruthy();
    expect(userSchedule.fullName).toBeTruthy();
    expect(userSchedule.mobileNumber).toBeTruthy();
    expect(userSchedule.email).toBeTruthy();
    expect(userSchedule.address).toBeTruthy();
    expect(userSchedule.pickupDay).toBeTruthy();
    expect(userSchedule.pickupTimeSlot).toBeTruthy();

    // Check data types for each property
    expect(typeof userSchedule.id).toEqual('number');
    expect(typeof userSchedule.fullName).toEqual('string');
    expect(typeof userSchedule.mobileNumber).toEqual('string');
    expect(typeof userSchedule.email).toEqual('string');
    expect(typeof userSchedule.address).toEqual('string');
    expect(typeof userSchedule.pickupDay).toEqual('string');
    expect(typeof userSchedule.pickupTimeSlot).toEqual('string');
  });
});
