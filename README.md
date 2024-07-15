Angular
--------------------------------------------------------------------------------------

    1. is a TypeScript based SPA framework.
        (a) SPA - Single Page Application
        (b) TypeScript = JavaScript + Type-Safty

    2. Pre-Requisite Knowledge
        HTML 5
        CSS 3
        JavaScript (ES 6)
        NodeJS

    3. Lab Setup

        Chrome      Browser
        NodeJS      Dev Env
        npm         Build Tool
        VSCode      IDE

    Dynamic Web Application

        Server                                  Client / Browser
         Server Side Programs
         (php,asp,jsp,....etc)
                            <---------REQ1--------------
            prog executes on the
            server and generates
            some html content dynamically
                        ----(generated HTML) RESP-------->


    Single Page Application
    
        Server                                  Client / Browser
            spa-bundle
            (index.html + *.js)
                        <---------REQ1--------------
                        ----(spa-bundle) RESP--------> index.html along with the JS is loaded.

                                                    all event handling including forms and hyper links
                                                    are addressed by the JS on the client itself.

                                                    JS on the client will generate the needed html contnet,
                                                    and the generated content will be posted on the index.htm
                                                    replacing the old content.

            rest-api    <----------.xml/.json-----> spa-bundle

    Angular Introduction

        1. AngularJS is a javascript based.
        2. Angular 2 till date this framework is based on typescript.
        3. Angular offer HTML extendability. Custom html elements and attributes can be developed in angular.
        4. Angular is highly modularizd. 

    Angular CLI

        Angular Command Line Interface is a frontier of simple tools
        that help in managing the project structure and the project life cycle.

        ng version

        ng new app-name --no-standalone

        cd app-name
            ng serve                    compile .ts into .js and the bundle is hsoted on a dev-server @ 4200 port
            ng serve --port 7777 -o     compile .ts into .js and the bundle is hsoted on a dev-server @ 7777 port
            ng build                    compile .ts into .js and the bundle is saved into 'dist' folder
            ng test                     compile .ts into .js and invokes all test cases on the bundle.

            ng generate
            ng g                        generate a varity of angular artifacts.

    Angular Architecture

        1. Each angular artifact is a class.
        2. Decorators are used to identify the role of a class .
        3. Each of the decorators is passed with a json-object called meta-data, that has the config.

        Modules
            @NgModule({
                declarations:[],
                exports:[],
                imports:[],
                provider:[],
                bootstrap:[]
            })
            class SalesModule{

            }

        Directives
            @Directive({
                selector:'',
                providers:[]
            })
            class FastRunningStockDirective {

            }

        Components
            @Component({
                selector:'',
                templateUrl:'',
                styleUrls:[],
                providers:[]
            })
            class SalesDashboardComponent{

            }

        Pipes
            @Pipe({
                name:''
            })
            class InToWordsPipe{

            }

        Services
            @Injectable({
                providedIn:''
            })
            class SalesService {

            }                                

    Modules

        a module is a logical group of components, directives, pipes , services and other module.

        angular modules are different from JS modules.

        Each and every angular app is hosted inside one top-level module called the ROOT module regularly
        identifed as 'AppModule'. the 'exports' section is absent for root module.

        ng g module ModuleName

        @NgModule({
            declarations:[ /*list of components, directive and pipes that belong to this module */ ],
            exports:[ /*list of components, directive and pipes that belong to this module and are allowed to be access outside */ ],
            imports:[ /*list of other module to be acces inside the current module */ ],
            providers:[ /*list of services that belong to this module */],
            bootstrap:[ /*list of components to be instantiated along with the current module */]
        })
        class SalesModule{

        }

    Directves & Components

        Any element or attribute created using angular framework is called a Directive.

        Types of Directives
            Component Directive / Components

                is a angular based element

                ng-container
                ng-template
                ng-content
                router-outler
                ...etc.,

                ng g c DashboardComponent --skip-tests

                dashboard.component.ts              the class           hold state (data) and behaviours (methods)
                    @Component({
                        selector:'app-dashboard',                       <app-dashboard></app-dashboard>
                        templateUrl:'dashboard.component.html',
                        styleUrls:['dashboard.component.css']
                    })
                    class DashboardComponent{

                    }

                dashboard.component.html            the template        the html content the comonetn has to display on the browser
                dashboard.component.css             the stylesheet

            Attribute Directive / Directives

                is a angular based attribute.

                ngModel
                routerLink
                routerLinkActive
                ...etc.,

                ng g directive FastRunningStock --skip-tests

                    @Directive({
                        selector:'[appFastRunningStock]'
                    })
                    class FastRunningStockDirective {

                    }

            Structural Directive

                is an attribute directive that can alter the appearence or content of the hosting element.

                *ngIf
                *ngFor
                ngSwitch    *ngSwitchCase   *ngSwitchDefault

        Data Binding

            is about accessing the fields and method of a component class in its templates.

            Interpolation

                is to render the resultant value of an expression on to the content of an element.

                <element> {{expression}} </element>

                <h3>{{title}}</h3>

            Two Way Data Binding

                is to load the value of a field to an input-element and receive the value of the
                input-element back into the field. Can be done using a built-in attribute directive 'ngModel'
                from 'FormsModule' from '@angular/forms'

                <input [(ngModel)]="field" />

            One Way Data Binding
                Attribute Binding

                    the value of a field is bound to an attribute of an element. Each time the
                    value of the field changes, the attribute is as well updated.

                    <element [attribute]="field"> content </element>

                    <p width="500px"> This is test para </p> <!-- is not binding -->
                    <p [width]="w"> This is test para </p> <!-- is attribute binding -->

                Event Binding

                    to invoke a method when an event occurs.

                    <element (eventAttribute)="method()"> content </element>

                    <p (mouseover)="changeToColorSet1()" (mouseleave)="changeToColorSet2()"> a test para. </p>

                Style Binding

                    (a) style.cssProperty

                            <element [style.cssProperty]="field"> content </element>

                    (b) ngStyle

                            <element [ngStyle]="{cssProperty:vale,cssProperty:value}"> content </element>

                    (c) class.className

                        <element [class.className]="booleanField"> content </element>

                    (c) ngClass

                        <element [ngClass]="['className1','className2']"> content </element>

                        <element [ngClass]="{'className1':booelanValue,'className2':booleanValue}"> content </element>

    Standalone Components

        is a new feature introduced in angualr eliminating the neccacity of the root-module or any module
        to hold a component. This reduces the boilerplate code and as well it enables faster performence.

    Integrating Bootstrap With Angular

        npm i bootstrap  (or)

        ng add bootstrap

        in the angular.json 
            in styles section include 'node_modules/bootstrap/dist/css/bootstrap.min.css'
            in sscripts section include 'node_modules/bootstrap/dist/js/bootstrap.min.js'

    Angular Built-in Contol Flows

        @if(cond){
            <p> appears when the cond is true </p>
        } @else {
            <p> appears when the cond is false </p>
        }

        @for(loopingVar of array) {
            <p> this para repats itself once for each value in that array </p>
        } @empty {
            <p> a msg to appear when the array is empty </p>
        }

        @switch(expression) {
            @case(possibleValue1) {
                <p> this para appears if the expression evaluates to possibleValue1 </p>
            }
            @case(possibleValue2) {
                <p> this para appears if the expression evaluates to possibleValue2 </p>
            }
            @case(possibleValue3) {
                <p> this para appears if the expression evaluates to possibleValue3 </p>
            }
            @default {
                <p> this para appears when none of the valeus match the expression </p>
            }
        }

    Pipe

        a pipe is a tool that accepts a value and transform it into some other
        value before rendering.

        {{value|pipeName:'pipeArgs'}}

        built-in pipes

            lowercase
            uppercase
            titlecase
            number
            currency
            date
            async
            json

        custom pipe

            ng g pipe IntoWords --skip-tests

            @Pipe({
                name:"intoWords"
            })
            export class IntoWordsPipe implements PipeTranform {
                transform(value:any) : any{
                    //.....
                    return result;
                }
            }

    Services

        A service is used to hold presentation-independent bussiness logic like
        computations or api-calls ...etc.,

        ng g service SalesService --skip-tests

        @Injectable({
            providedIn:'root'
        })
        export class SalesService {

        }

        Objects of services are not instantiated by the developer, rather they are 
        injected into the components or pipes or directive throuygh their constructor.

    Routing

        allows us to display a componetn based on the path in the URL.

        'RouterModule'     from  '@angular/router'.

            Routes          Route[]

            Route           {
                                path:'/path',
                                component:ComponenetName,
                                redirectTo:'/anotherPath',
                                pathMatch:'startsWith|full'
                            }

            router-outlet       built-in component, and is the placeholder of the result of routing.

            ActivatedRoute      service, is used to retrive information from the url, like path variables ..etc.,

            Router              service, is used to navigate between components programatically
                                navigateByUrl("/sales/discounts")
                                navigate(["/sales","/discount"])

            routerLink          directive, used on 'a' tag instead of 'href' attribute to mention the path .

            routerLinkActive    directive, that applies a given css-class on teh 'a' element only when it is visited.

    Angular Forms

        Template Driven Forms
            FormsModule

                ngForm
                ngModel

        Model Driven forms / ReactiveForms
            ReactiveFormsModule

                FormConrol
                FormGroup

                The form is modeled in the component class and
                is wired in teh template.

                