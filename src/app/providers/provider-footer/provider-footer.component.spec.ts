import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderFooterComponent } from './provider-footer.component';

describe('ProviderFooterComponent', () => {
  let component: ProviderFooterComponent;
  let fixture: ComponentFixture<ProviderFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviderFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProviderFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
