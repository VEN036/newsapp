import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EconomicsPage } from './economics.page';

describe('EconomicsPage', () => {
  let component: EconomicsPage;
  let fixture: ComponentFixture<EconomicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
