/**
 * Catalyst AppSail entry point wrapper.
 * Maps X_ZOHO_CATALYST_LISTEN_PORT --> PORT before booting the Express server.
 * The obfuscated server.js reads `process.env.PORT` to bind its listener.
 */

const catalystPort = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;
process.env.PORT = catalystPort;

process.env.NODE_ENV = process.env.NODE_ENV || "PRODUCTION";

// Boot the main server
require("./server");