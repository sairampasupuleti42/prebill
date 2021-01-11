import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerifyEmailComponent } from './send-verify-email.component';

describe('SendVerifyEmailComponent', () => {
  let component: SendVerifyEmailComponent;
  let fixture: ComponentFixture<SendVerifyEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendVerifyEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendVerifyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
