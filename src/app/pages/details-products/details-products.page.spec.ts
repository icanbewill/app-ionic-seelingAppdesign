import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetailsProductsPage } from './details-products.page';

describe('DetailsProductsPage', () => {
  let component: DetailsProductsPage;
  let fixture: ComponentFixture<DetailsProductsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsProductsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsProductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
