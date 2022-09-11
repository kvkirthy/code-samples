import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdaptByScreensizeComponent } from './adapt-by-screensize.component';

describe('AdaptByScreensizeComponent', () => {
  let component: AdaptByScreensizeComponent;
  let fixture: ComponentFixture<AdaptByScreensizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdaptByScreensizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdaptByScreensizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
