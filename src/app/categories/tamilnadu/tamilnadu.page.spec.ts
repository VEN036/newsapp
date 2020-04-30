import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TamilnaduPage } from './tamilnadu.page';

describe('TamilnaduPage', () => {
  let component: TamilnaduPage;
  let fixture: ComponentFixture<TamilnaduPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TamilnaduPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TamilnaduPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
