import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewPartyDetailsComponent } from './create-new-party-details.component';

describe('CreateNewPartyDetailsComponent', () => {
  let component: CreateNewPartyDetailsComponent;
  let fixture: ComponentFixture<CreateNewPartyDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateNewPartyDetailsComponent]
    });
    fixture = TestBed.createComponent(CreateNewPartyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
