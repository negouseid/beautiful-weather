import {
  HttpModule,
  XHRBackend,
  Http,
  Response,
  ResponseOptions
} from '@angular/http';
import { TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { WeatherService } from './weather.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('WeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WeatherService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ],
      imports: [HttpModule, HttpClientTestingModule]
    });
  });

  it(
    'should be created',
    inject([WeatherService], (service: WeatherService) => {
      expect(service).toBeTruthy();
    })
  );

  it(
    'should return observable of Observable<any[]>',
    inject([WeatherService, XHRBackend], (weatherService, mockBackend) => {
      const mockResponse = {
        'cod': '200',
        'message': 0.0046,
        'cnt': 7,
        'list': [
          {
            'dt': 1537812000,
            'main': {
              'temp': 282.64,
              'temp_min': 281.488,
              'temp_max': 282.64,
              'pressure': 1044.29,
              'sea_level': 1052.05,
              'grnd_level': 1044.29,
              'humidity': 76,
              'temp_kf': 1.15
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '02n'
              }
            ],
            'clouds': {
              'all': 8
            },
            'wind': {
              'speed': 1.97,
              'deg': 346.01
            },
            'sys': {
              'pod': 'n'
            },
            'dt_txt': '2018-09-24 18:00:00'
          },
          {
            'dt': 1537822800,
            'main': {
              'temp': 277.09,
              'temp_min': 276.224,
              'temp_max': 277.09,
              'pressure': 1045.11,
              'sea_level': 1053.03,
              'grnd_level': 1045.11,
              'humidity': 92,
              'temp_kf': 0.86
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01n'
              }
            ],
            'clouds': {
              'all': 0
            },
            'wind': {
              'speed': 1.16,
              'deg': 39.5042
            },
            'sys': {
              'pod': 'n'
            },
            'dt_txt': '2018-09-24 21:00:00'
          },
          {
            'dt': 1537833600,
            'main': {
              'temp': 275.17,
              'temp_min': 274.593,
              'temp_max': 275.17,
              'pressure': 1045.32,
              'sea_level': 1053.38,
              'grnd_level': 1045.32,
              'humidity': 86,
              'temp_kf': 0.57
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01n'
              }
            ],
            'clouds': {
              'all': 0
            },
            'wind': {
              'speed': 0.96,
              'deg': 294.003
            },
            'sys': {
              'pod': 'n'
            },
            'dt_txt': '2018-09-25 00:00:00'
          },
          {
            'dt': 1537844400,
            'main': {
              'temp': 274.07,
              'temp_min': 273.782,
              'temp_max': 274.07,
              'pressure': 1045.14,
              'sea_level': 1053.21,
              'grnd_level': 1045.14,
              'humidity': 86,
              'temp_kf': 0.29
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01n'
              }
            ],
            'clouds': {
              'all': 0
            },
            'wind': {
              'speed': 1.16,
              'deg': 295.504
            },
            'sys': {
              'pod': 'n'
            },
            'dt_txt': '2018-09-25 03:00:00'
          },
          {
            'dt': 1537855200,
            'main': {
              'temp': 273.108,
              'temp_min': 273.108,
              'temp_max': 273.108,
              'pressure': 1045.18,
              'sea_level': 1053.18,
              'grnd_level': 1045.18,
              'humidity': 85,
              'temp_kf': 0
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01d'
              }
            ],
            'clouds': {
              'all': 0
            },
            'wind': {
              'speed': 1.16,
              'deg': 330.003
            },
            'sys': {
              'pod': 'd'
            },
            'dt_txt': '2018-09-25 06:00:00'
          },
          {
            'dt': 1537866000,
            'main': {
              'temp': 283.436,
              'temp_min': 283.436,
              'temp_max': 283.436,
              'pressure': 1045.7,
              'sea_level': 1053.55,
              'grnd_level': 1045.7,
              'humidity': 80,
              'temp_kf': 0
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01d'
              }
            ],
            'clouds': {
              'all': 0
            },
            'wind': {
              'speed': 1.77,
              'deg': 80.005
            },
            'sys': {
              'pod': 'd'
            },
            'dt_txt': '2018-09-25 09:00:00'
          },
          {
            'dt': 1537876800,
            'main': {
              'temp': 287.617,
              'temp_min': 287.617,
              'temp_max': 287.617,
              'pressure': 1044.72,
              'sea_level': 1052.38,
              'grnd_level': 1044.72,
              'humidity': 74,
              'temp_kf': 0
            },
            'weather': [
              {
                'id': 800,
                'main': 'Clear',
                'description': 'clear sky',
                'icon': '01d'
              }
            ],
            'clouds': {
              'all': 0
            },
            'wind': {
              'speed': 2.22,
              'deg': 172.5
            },
            'sys': {
              'pod': 'd'
            },
            'dt_txt': '2018-09-25 12:00:00'
          }
        ],
        'city': {
          'id': 2643743,
          'name': 'London',
          'coord': {
            'lat': 51.5085,
            'lon': -0.1258
          },
          'country': 'GB',
          'population': 1000000
        }
      };

      mockBackend.connections.subscribe(connection => {
        connection.mockRespond(
          new Response(
            new ResponseOptions({
              body: JSON.stringify(mockResponse)
            })
          )
        );
      });

      weatherService.getForecast().subscribe(weather => {
        weather = weather[0];
        expect(weather.length).toBe(2);
        expect(weather[0].dt).toEqual(1508738400);
      });
    })
  );
});
