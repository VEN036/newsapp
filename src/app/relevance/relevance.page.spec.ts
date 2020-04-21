import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RelevancePage } from './relevance.page';

describe('RelevancePage', () => {
  let component: RelevancePage;
  let fixture: ComponentFixture<RelevancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelevancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RelevancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
