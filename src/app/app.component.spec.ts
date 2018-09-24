import { TestBed, async } from '@angular/core/testing';
import { AppComponent, RoundPipe } from './app.component';
import { WeatherService } from './services/weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatCardModule, MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent, RoundPipe
      ],
      imports: [
        MatFormFieldModule,
        MatCardModule,
        HttpClientTestingModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        WeatherService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Beautiful Weather'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Beautiful Weather');
  }));
  it('should render title in a button tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain('Submit');
  }));
});
