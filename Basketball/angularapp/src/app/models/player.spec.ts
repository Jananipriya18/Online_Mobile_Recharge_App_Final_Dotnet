import { Player } from "./player";

describe('Player Models', () => {
  fit('Player_Model_should_create_Player_instance_Interface', () => {
    const Job_Application: Player = {
      id:1,
      shirtno: 1,
      name: "Demo",
      positionid:1,
      appearances:1,
      goals:50,
    };
    expect(Job_Application).toBeTruthy();
    expect(Job_Application['id']).toBe(1);
    expect(Job_Application['shirtno']).toBe(1);
    expect(Job_Application['name']).toBe("Demo");
    expect(Job_Application['positionid']).toBe(1);
    expect(Job_Application['appearances']).toBe(1);
    expect(Job_Application['goals']).toBe(50);
  });

  // it('Week4_Day3_should_create_Player_instance_with_default_values', () => {
  //   const player: Player = {
  //     name: 'Jane',
  //     age: 30
  //   };
  //   expect(player).toBeTruthy();
  //   expect(player.name).toBe('Jane');
  //   expect(player.age).toBe(30);
  //   expect(player.category).toBeUndefined();
  //   expect(player.biddingPrice).toBeUndefined();
  //   expect(player.selectedTeamId).toBeUndefined();
  // });
});

// type JobApplication = {
//   [key: string]: any;
//   id: number;
//   "jobPositionId"?: number;
//   "applicatName": string;
//   "status": string;
// };

// describe('Player Models', () => {
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

