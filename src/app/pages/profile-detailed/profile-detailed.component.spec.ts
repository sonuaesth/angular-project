import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailedComponent } from './profile-detailed.component';

describe('ProfileDetailedComponent', () => {
  let component: ProfileDetailedComponent;
  let fixture: ComponentFixture<ProfileDetailedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileDetailedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
