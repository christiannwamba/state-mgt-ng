import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClichComponent } from './clich.component';

describe('ClichComponent', () => {
  let component: ClichComponent;
  let fixture: ComponentFixture<ClichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClichComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
