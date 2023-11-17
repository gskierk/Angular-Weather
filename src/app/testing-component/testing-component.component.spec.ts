import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { TestingComponentComponent } from './testing-component.component';

describe('WeatherTemplateComponent', () => {
  let component: TestingComponentComponent;
  let fixture: ComponentFixture<TestingComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingComponentComponent]
    });
    fixture = TestBed.createComponent(TestingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // renderowanie
  it("should show 'title: xyz'", () => {
    component.title = 'xyz';
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('h2').innerText).toEqual('title: "xyz"');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // event
  it('should call onButtonClick when clicked', fakeAsync(() => {
    spyOn(component, 'onButtonClick');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    tick();
    expect(component.onButtonClick).toHaveBeenCalled();
  }));
});

