'use strict';
/**
 * Part of a course on Hyperledger Fabric: 
 * http://ACloudFan.com
 * 
 * Composer 0.19.0
 * 
 * Demostrates the getter functions for the registries
 * 1. Use the bn-connection-util to connect
 * 2. Get & Print the Asset Registries
 * 3. Get & Print the Participant Registries
 * 4. Get & Print the Transaction Registries
 * 5. Get & Print the Historian Registry
 * 6. Get & Print the Identity  Registriy
 */
const bnUtil = require('./dlt-connection-util');

// This creates the business network connection object
// and calls connect() on it. Calls the callback method 
// 'main' with error



// bnUtil.connect("admin", () => {
//   console.log("get registeries");
//   return bnUtil.connection.getParticipantRegistry('org.lloyds.market._Party')
//   .then(function (participantRegistry) {
//     console.log(participantRegistry);
//     // Get the specific driver from the driver participant registry.
//     return participantRegistry.get('3');
//   })
//   .then(function (driver) {
//     // Process the the driver object.
//     console.log(driver.password);
//     bnUtil.connection.disconnect();
//   })
//   .catch(function (error) {
//     // Add optional error handling here.
//   }); 
// });


// bnUtil.connect("Isabelle", () => {
//     console.log("get registeries1");
//     return bnUtil.connection.getHistorian()
//     .then(function (registry) {
//       console.log("Historian Registry: ", registry.registryType, "   ", registry.id);
//       console.log("get registeries2");



//       // Get the specific driver from the driver participant registry.
//       return registry.getAll();
//     })
//     .then(function (historianRecords) {
//       const bnDef = bnUtil.connection.getBusinessNetwork();
//       var serializer = bnDef.getSerializer();
//       // Process the the driver object.
//       console.log(( serializer.toJSON(historianRecords)));
     
//       bnUtil.connection.disconnect();
//     })
//     .catch(function (error) {
//       // Add optional error handling here.
//     }); 
// });



