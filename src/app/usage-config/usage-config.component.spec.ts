import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsageConfigComponent } from './usage-config.component';

describe('UsageConfigComponent', () => {
  let component: UsageConfigComponent;
  let fixture: ComponentFixture<UsageConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsageConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsageConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
