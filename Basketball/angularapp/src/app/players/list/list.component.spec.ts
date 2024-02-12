import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { PlayersService } from '../../services/players.service';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let playersService: PlayersService;

  const mockPlayersService = {
    ['getPlayers']: () => of([]), // Replace with mock data as needed
    ['deletePlayer']: (id: number) => of({}),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [{ provide: PlayersService, useValue: mockPlayersService }],
      schemas:[NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    playersService = TestBed.inject(PlayersService);
    fixture.detectChanges();
  });

  fit('ListComponent_should_create', () => {
    expect(component).toBeTruthy();
  });

  fit('ListComponent_should_render_players_in_the_table', () => {
    const mockPlayers = [
      { id: 1, shirtno: 10, name: 'Player 1'},
      { id: 2, shirtno: 7, name: 'Player 2' },
    ];

    spyOn(playersService as any, 'getPlayers').and.returnValue(of(mockPlayers));

    component['ngOnInit']();
    fixture.detectChanges();

    const playerRows = fixture.nativeElement.querySelectorAll('tbody tr');

    expect(playerRows.length).toBe(mockPlayers.length);

    // Replace these with your specific HTML structure and data
    expect(playerRows[0].textContent).toContain('Player 1');
    // expect(playerRows[0].textContent).toContain('Forward');
    expect(playerRows[1].textContent).toContain('Player 2');
    // expect(playerRows[1].textContent).toContain('Midfielder');
  });

  fit('ListComponent_should_call_deletePlayer_method_when_delete_button_is_clicked', () => {
    const playerId = 1;
    const mockPlayers = [
      { id: 1, shirtno: 10, name: 'Player 1' },
    ];

    component['players'] = mockPlayers;
    spyOn(component as any, 'deletePlayer');

    fixture.detectChanges();

    const deleteButton = fixture.nativeElement.querySelector('button#delete');
    deleteButton.click();

    expect(component['deletePlayer']).toHaveBeenCalledWith(playerId);
  });

  fit('ListComponent_should_render_a_table_with_headers', () => {
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    const table = compiled.querySelector('table');
    expect(table).toBeTruthy();
    const headers = compiled.querySelectorAll('th');
    expect(headers.length).toBe(7); // Assuming you have 8 headers
    expect(headers[0].textContent).toContain('Id');
    expect(headers[1].textContent).toContain('Shirt No');
    expect(headers[6].textContent).toContain('Action');
  });

  // fit('should delete a player', () => {
  //   const playerId = 1;
  //   const mockPlayers = [
  //     { id: 1, shirtno: 10, name: 'Player 1' },
  //     { id: 2, shirtno: 10, name: 'Player 1' },
  //     // Add more mock players as needed
  //   ];

  //   component.players = mockPlayers;

  //   spyOn(playersService, 'deletePlayer').and.returnValue(of());

  //   component.deletePlayer(playerId);
  //   component.players = mockPlayers;

  //   expect(playersService.deletePlayer).toHaveBeenCalledWith(playerId);
  //   expect(component.players.length).toBe(mockPlayers.length - 1);
  // });
});
