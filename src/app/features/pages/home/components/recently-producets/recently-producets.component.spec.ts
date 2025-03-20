import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentlyProducetsComponent } from './recently-producets.component';

describe('RecentlyProducetsComponent', () => {
  let component: RecentlyProducetsComponent;
  let fixture: ComponentFixture<RecentlyProducetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentlyProducetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentlyProducetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
