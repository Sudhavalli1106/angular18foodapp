Module level lazy loading:
Orders
--orderhistory
--orderlist
--orderdetails
--orderdeliverd


component level lazy loading:
--orderlist
--orderhistory

standalone component
=====================
optional in angular 16
all the component should belong - app.module.ts
ng g c comp_name --standalone
angular 18 and later
all components are stand-alone component. they do not belong a particular module
concept of app.module.ts is not present
angular 18:
standalone:true  - this component is standalone
a component standalone:false - its possible

angular 21: all component are by default standalone
imports[] - compusorily present in all created components
