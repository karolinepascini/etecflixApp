import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reliquiasdamorte2Page } from './reliquiasdamorte2.page';

describe('Reliquiasdamorte2Page', () => {
  let component: Reliquiasdamorte2Page;
  let fixture: ComponentFixture<Reliquiasdamorte2Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Reliquiasdamorte2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reliquiasdamorte2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
