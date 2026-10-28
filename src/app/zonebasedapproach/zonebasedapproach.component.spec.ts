import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonebasedapproachComponent } from './zonebasedapproach.component';

describe('ZonebasedapproachComponent', () => {
  let component: ZonebasedapproachComponent;
  let fixture: ComponentFixture<ZonebasedapproachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZonebasedapproachComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonebasedapproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
