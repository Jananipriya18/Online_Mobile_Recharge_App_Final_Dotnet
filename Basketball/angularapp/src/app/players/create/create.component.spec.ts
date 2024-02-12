import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';

import { CreateComponent } from './create.component';
import { PlayersService } from '../../services/players.service';
import { PositionsService } from '../../services/positions.service';
import { Position } from '../../models/position';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let playersService: jasmine.SpyObj<PlayersService>;
  let positionsService: jasmine.SpyObj<PositionsService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const playersServiceSpy = jasmine.createSpyObj('PlayersService', ['createPlayer']);
    const positionsServiceSpy = jasmine.createSpyObj('PositionsService', ['getPositions']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      declarations: [CreateComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: PlayersService, useValue: playersServiceSpy },
        { provide: PositionsService, useValue: positionsServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    playersService = TestBed.inject(PlayersService) as jasmine.SpyObj<PlayersService>;
    positionsService = TestBed.inject(PositionsService) as jasmine.SpyObj<PositionsService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    // Provide a mock implementation for positionsService.getPositions()
    positionsService.getPositions.and.returnValue(of([]));

    fixture.detectChanges();
  });

  fit('CreateComponent_should_create', () => {
    expect(component).toBeTruthy();
  });

  fit('CreateComponent_should_initialize_the_form', () => {
    expect(component['createForm']).toBeDefined();
  });

  fit('CreateComponent_should_load_positions_on_ngOnInit', () => {
    const positions: Position[] = [{ id: 1, name: 'Position 1' }];
    positionsService['getPositions'].and.returnValue(of(positions));

    component['ngOnInit']();

    expect(component['positions']).toEqual(positions);
  });

  fit('CreateComponent_should_validate_required_fields_in_the_create_player_form', () => {
    const form = component['createForm'];
    expect(form.valid).toBeFalsy();

    // Set values for each form control
    form.controls['shirtno'].setValue('Test Shirt No');
    form.controls['name'].setValue('Test Name');
    form.controls['positionid'].setValue('1'); // Assuming '1' is a valid position id
    form.controls['appearances'].setValue('10');
    form.controls['goals'].setValue('5');

    // Trigger change detection to update form validity
    fixture.detectChanges();

    expect(form.valid).toBeTruthy();
  });

  fit('PlayerCreateComponent_should_render_the_form_fields', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h3').textContent).toContain('Create Player'); // Assuming the heading is <h3>
    expect(compiled.querySelector('form')).toBeTruthy();

    // Shirt No field
    expect(compiled.querySelector('label[for="shirtno"]').textContent).toContain('Shirt No:');
    expect(compiled.querySelector('input[id="shirtno"]')).toBeTruthy();

    // Name field
    expect(compiled.querySelector('label[for="name"]').textContent).toContain('Name:');
    expect(compiled.querySelector('input[id="name"]')).toBeTruthy();

    // Position field (assuming it's a select)
    expect(compiled.querySelector('label[for="positionid"]').textContent).toContain('Position:');
    expect(compiled.querySelector('select[id="positionid"]')).toBeTruthy();

    // Appearances field
    expect(compiled.querySelector('label[for="appearances"]').textContent).toContain('Appearances:');
    expect(compiled.querySelector('input[id="appearances"]')).toBeTruthy();

    // Goals field
    expect(compiled.querySelector('label[for="goals"]').textContent).toContain('Goals:');
    expect(compiled.querySelector('input[id="goals"]')).toBeTruthy();

    // Submit button
    expect(compiled.querySelector('button[type="submit"]').textContent).toContain('Create');
  });

});
