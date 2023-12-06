import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiComponent } from './episodi.component';

describe('EpisodiComponent', () => {
  let component: EpisodiComponent;
  let fixture: ComponentFixture<EpisodiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EpisodiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
