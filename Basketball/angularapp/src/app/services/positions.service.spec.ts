import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PositionsService } from './positions.service';
import { Position } from '../models/position';

describe('PositionsService', () => {
  let service: PositionsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PositionsService],
    });
    service = TestBed.inject(PositionsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  fit('PositionsService_should_be_created', () => {
    expect(service).toBeTruthy();
  });

  fit('PositionsService_return_positions_from_API', () => {
    const mockPositions: Position[] = [
      { id: 1, name: 'Forward' },
      { id: 2, name: 'Midfielder' },
    ];

    service['getPositions']().subscribe((positions) => {
      expect(positions).toEqual(mockPositions);
    });

    const req = httpMock.expectOne(service['apiURL'] + '/positions');
    expect(req.request.method).toBe('GET');
    req.flush(mockPositions);
  });


  afterEach(() => {
    httpMock.verify();
  });
});
