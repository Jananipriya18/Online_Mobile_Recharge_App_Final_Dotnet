import { Player } from "./player.model";

describe('Player Models', () => {
  fit('Player should create instance and have proper datatypes', () => {
    // Arrange
    const player: Player = {
      id: 1,
      shirtno: 10,
      name: "Charles",
      positionid: 2,
      position: "Forward",
      appearances: 20,
      goals: 5,
    };

    // Act & Assert
    // Check if the entire player object is truthy (defined)
    expect(player).toBeTruthy();

    // Check if individual properties are truthy (defined)
    expect(player.id).toBeTruthy();
    expect(player.shirtno).toBeTruthy();
    expect(player.name).toBeTruthy();
    expect(player.positionid).toBeTruthy();
    expect(player.position).toBeTruthy();
    expect(player.appearances).toBeTruthy();
    expect(player.goals).toBeTruthy();

    // Check data types for each property
    expect(typeof player.id).toEqual('number');
    expect(typeof player.shirtno).toEqual('number');
    expect(typeof player.name).toEqual('string');
    expect(typeof player.positionid).toEqual('number');
    expect(typeof player.position).toEqual('string');
    expect(typeof player.appearances).toEqual('number');
    expect(typeof player.goals).toEqual('number');
  });
});
