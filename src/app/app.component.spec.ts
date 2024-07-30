import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
 
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });
  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should have a button with title Subscribe and disabled false', () => {
    let buttonElements = el.queryAll(By.css('.btn'));
    component.btnTitle= "Subscribe";
    component.isSubscribed = false;
    fixture.detectChanges();

    expect(buttonElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(buttonElements[0].nativeElement.disabled).toBeFalse();
  });
  
  
  it('should have a button with title Subscribed when clicked and disabled true', () => {
    let buttonElements = el.queryAll(By.css('.btn'));
    component.btnTitle= "Subscribed";
    component.isSubscribed = true;
    buttonElements[0].nativeElement.click();
    fixture.detectChanges();
    expect(buttonElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();
  });

});
