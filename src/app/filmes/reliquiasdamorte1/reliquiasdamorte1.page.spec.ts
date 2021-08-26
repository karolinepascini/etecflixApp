import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reliquiasdamorte1Page } from './reliquiasdamorte1.page';

describe('Reliquiasdamorte1Page', () => {
  let component: Reliquiasdamorte1Page;
  let fixture: ComponentFixture<Reliquiasdamorte1Page>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Reliquiasdamorte1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reliquiasdamorte1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
