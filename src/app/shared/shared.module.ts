import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WelcomeMessageComponent } from "./welcome-message/welcome-message.component";
import { AppEmailDirective } from './validators/app-email.directive';

@NgModule({
    declarations: [
        WelcomeMessageComponent,
        AppEmailDirective
    ],
    imports: [
        CommonModule
    ], 
    exports: [
        WelcomeMessageComponent,
        AppEmailDirective
    ]
})

export class SharedModule {}
