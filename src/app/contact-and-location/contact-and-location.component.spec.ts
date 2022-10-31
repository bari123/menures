import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactAndLocationComponent } from './contact-and-location.component';

describe('ContactAndLocationComponent', () => {
  let component: ContactAndLocationComponent;
  let fixture: ComponentFixture<ContactAndLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactAndLocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactAndLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
