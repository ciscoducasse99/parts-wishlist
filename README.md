## Car Parts Wishlist

Small Angular app that let's me keep track of parts needed for my drift car. Made as an exercise to continue learning Angular's fundementals whenever I have some free time. 

### Launch App
Clone repo. `ng serve` deploys angular app & `npm run server` launches fake server via json-server.

#### Todos:
- ~~Create fake server so CRUD operations can be used~~ | **json-server** is being used.
- Launch app using free hosting site
- ~~Design basic UI~~ | **Tailwind CSS**
- ~~Implement services for server requests & UI changes~~
- ~~Forms for creating and updating parts~~ 
- Error handling
- ~~Implement Modal~~ | **app-add-part-btn & app-part-listing** lazy load components into modal component via Component Factory Resolver in modal-service (**note: look into ViewContainerRef for future cases**)
- ~~Use @Input & @Output decorators to use pass properties and methods in child components~~ 
- Write tests
- Implement routing | Not really needed, but doesn't hurt to learn how to implement.
- Implement auth | Not really needed, but doesn't hurt to learn how to implement.
