import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient} from '@angular/common/http';
import { routes } from './app.routes';
import { withInterceptors } from '@angular/common/http';
import { tokenInterceptor } from './token.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),  
    provideHttpClient(withInterceptors([tokenInterceptor]))
    ]
};
