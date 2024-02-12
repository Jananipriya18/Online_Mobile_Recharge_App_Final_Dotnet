import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PlayersService } from './players.service';
import { Player } from '../models/player';

describe('PlayersService', () => {
  let service: PlayersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayersService],
    });
    service = TestBed.inject(PlayersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('PlayersService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('PlayersService_should_get_players_from_API', () => {
    const mockPlayers: Player[] = [
      { id: 1, shirtno: 10, name: 'Player 1', positionid: 1, appearances: 10, goals: 5 },
      { id: 2, shirtno: 7, name: 'Player 2', positionid: 2, appearances: 15, goals: 2 },
    ];

    service['getPlayers']().subscribe((players) => {
      expect(players).toEqual(mockPlayers);
    });

    const req = httpMock.expectOne(service['apiURL'] + '/players');
    expect(req.request.method).toBe('GET');
    req.flush(mockPlayers);
  });



  // it('should handle HTTP errors when getting players', () => {
  //   const errorMessage = '404 Not Found';
  //   const errorResponse = new HttpErrorResponse({ status: 404, statusText: 'Not Found' });

  //   spyOn(service, 'errorHandler').and.returnValue(of(errorMessage));

  //   service.getPlayers().subscribe(
  //     () => {
  //       // This should not be called
  //     },
  //     (error) => {
  //       expect(error).toBe(errorMessage);
  //     }
  //   );

  //   const req = httpMock.expectOne(service.apiURL + '/players');
  //   expect(req.request.method).toBe('GET');
  //   req.error(errorResponse);

  //   httpMock.verify();
  // });

  // Additional tests for other service methods like getPlayer, createPlayer, updatePlayer, and deletePlayer can be added similarly.
  // Ensure that you test both success and error cases for these methods.

  afterEach(() => {
    httpMock.verify();
  });
});
