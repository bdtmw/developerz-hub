export const serviceDepth: Record<string, {title:string; body:string}[]> = {
 'hire-sql-developers': [
  {title:'Hire a database developer for the workload you actually have',body:'Database development includes modeling records, enforcing rules, querying efficiently and planning safe changes. Start with the questions the application must answer and the operations that must remain consistent. Record the engine, representative data volumes, growth expectations and the people responsible for operation. The right scope can include relational SQL work or evaluation of a non-relational data model.'},
  {title:'Compare relational and non-relational requirements',body:'Relational models can make relationships and transactional rules explicit. Document, key-value and other models can suit different access patterns, but they introduce their own query and consistency decisions. Evaluate required queries, updates, reporting, recovery and team operating capacity before changing engines. A different database is not automatically a fix for a slow application.'},
  {title:'Plan migration, reconciliation and recovery together',body:'Create a field mapping and define how duplicates, missing values and invalid records will be handled. Rehearse with representative data, reconcile counts and important business totals, and document rollback boundaries. Agree on downtime or parallel operation before scheduling the change. A successful import is only one part of a safe migration.'},
 ],
 'hire-shopify-developers': [
  {title:'Storefront work and Shopify app development',body:'Theme development changes how shoppers browse and interact with the store. An app can provide merchant workflows, reusable logic or external-system integration. Installation, authorization and data synchronization are additional responsibilities beyond editing storefront sections. Define those requirements separately so a theme estimate does not conceal a larger application scope.'},
  {title:'Define the source of truth for commerce data',body:'List the systems that own product descriptions, pricing, inventory and fulfillment status. Specify synchronization direction and how operators resolve conflicts. Repeated events and temporary outages must not create duplicate operations. Agree on reconciliation and visible failure reporting before connecting live business systems.'},
 ],
 'hire-wordpress-developers': [
  {title:'Compare a WordPress estimate on equal terms',body:'Separate theme configuration, custom blocks, migration and ongoing maintenance in the proposal. Identify premium licenses and the accounts that own them. For a store, scope checkout and order testing explicitly. Our WordPress developer cost guide explains how to turn those work areas into an illustrative budget without treating a headline hourly rate as the whole project price.'},
 ],
 'hire-web-developers': [
  {title:'Freelance web developer or a development partner?',body:'The right arrangement depends on the scope and how much delivery coordination your team can provide. Compare who owns design, implementation, testing and maintenance, along with the actual allocation offered. Our freelance-versus-agency guide provides a comparison checklist. Discuss your preferred arrangement with us; individual contracting, exclusivity and availability require explicit agreement.'},
 ],
 'hire-php-developers': [
  {title:'A defined PHP project or an ongoing backlog',body:'A bounded feature or upgrade can be scoped as a project. An evolving application may need ongoing development capacity with regular priority reviews. Dedicated PHP engagement planning should specify allocation, overlap, release ownership and continuity. It does not automatically imply full-time exclusivity or an immediate start.'},
 ],
};

export const serviceExtraLinks: Record<string, {path:string; label:string}[]> = {
 'hire-shopify-developers': [{path:'/hire-shopify-app-developers/',label:'Explore Shopify app development'}],
 'hire-php-developers': [{path:'/hire-dedicated-php-developers/',label:'Plan a dedicated PHP engagement'}],
 'hire-mobile-app-developers': [{path:'/hire-react-native-developers/',label:'Explore React Native mobile development'}],
 'hire-react-developers': [{path:'/hire-react-native-developers/',label:'Need a mobile app? Explore React Native'}],
 'hire-full-stack-developers': [{path:'/hire-software-developers/',label:'Explore broader custom software development'},{path:'/hire-dedicated-developers/',label:'Plan ongoing development capacity'}],
};
