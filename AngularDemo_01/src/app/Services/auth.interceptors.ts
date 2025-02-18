import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("Interceptor is called"+req);
        const modifiedreq = req.clone({headers: req.headers.append("auth", "abc")});
        return next.handle(modifiedreq).pipe(tap((event)=>{
            if(event.type=== HttpEventType.Response)
            {
                console.log("Response has arrived");
                console.log(event.body);
            }
        }));
    }
}