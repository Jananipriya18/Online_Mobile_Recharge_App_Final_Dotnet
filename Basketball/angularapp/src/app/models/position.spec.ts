import { Position } from "./position";

describe('Position Models', () => {
  fit('Position_Model_should_create_Position_instance_Interface', () => {
    const Job_Application: Position = {
      id:1,
      displayOrder: 1,
      name: "Demo"
    };
    expect(Job_Application).toBeTruthy();
    expect(Job_Application['id']).toBe(1);
    expect(Job_Application['displayOrder']).toBe(1);
    expect(Job_Application['name']).toBe("Demo");
  });

  // it('Week4_Day3_should_create_Position_instance_with_default_values', () => {
  //   const Position: Position = {
  //     name: 'Jane',
  //     age: 30
  //   };
  //   expect(Position).toBeTruthy();
  //   expect(Position.name).toBe('Jane');
  //   expect(Position.age).toBe(30);
  //   expect(Position.category).toBeUndefined();
  //   expect(Position.biddingPrice).toBeUndefined();
  //   expect(Position.selectedTeamId).toBeUndefined();
  // });
});

// type JobApplication = {
//   [key: string]: any;
//   id: number;
//   "jobPositionId"?: number;
//   "applicatName": string;
//   "status": string;
// };

// describe('Position Models', () => {
//   fit('should_create_Job_Application_instance', () => {
//     const Job_Application: JobApplication = {
//       id: 1,
//       "applicatName": "Demo",
//       "status": 'A',
//       // You can use any field name in double quotes and omit or misspell them without causing compilation errors
//     };

//     expect(Job_Application).toBeTruthy();
//     expect(Job_Application.id).toBe(1);
//     expect(Job_Application["applicatName"]).toBe("Demo");
//     expect(Job_Application["status"]).toBe("A");
//     expect(Job_Application["jobPositionId"]).toBeUndefined(); // Check if "jobPositionId" is undefined
//   });
// });

