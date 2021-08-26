import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrisioneirodeazcabanPage } from './prisioneirodeazcaban.page';

describe('PrisioneirodeazcabanPage', () => {
  let component: PrisioneirodeazcabanPage;
  let fixture: ComponentFixture<PrisioneirodeazcabanPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisioneirodeazcabanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrisioneirodeazcabanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
