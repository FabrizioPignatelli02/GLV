import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimoEpisodioComponent } from './ultimo-episodio.component';

describe('UltimoEpisodioComponent', () => {
  let component: UltimoEpisodioComponent;
  let fixture: ComponentFixture<UltimoEpisodioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimoEpisodioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UltimoEpisodioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
