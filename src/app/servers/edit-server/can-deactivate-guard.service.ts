import { Observable } from "rxjs";
import {
  CanDeactivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { EditServerComponent } from "./edit-server.component";

export interface CanComponentDeactivate {
  canDeactive: () => Observable<boolean> | Promise<boolean> | boolean;
}
export class CanDeactivateGuard implements CanDeactivate<EditServerComponent> {
  canDeactivate(
    component: EditServerComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    console.log(component.canDeactive);
    return component.canDeactive();
  }
}
