import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LovedPage } from './loved.page';

describe('LovedPage', () => {
  let component: LovedPage;
  let fixture: ComponentFixture<LovedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
