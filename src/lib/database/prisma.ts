// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
import { config } from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { NODE_ENV } from '$env/static/private';

let prisma: PrismaClient;

if (NODE_ENV === 'development') {
  // where Prisma should get DATABASE_URL
  config({ path: '.env.development' });

	// In development mode, use a global variable so that the value
	// is preserved across module reloads caused by HMR (Hot Module Replacement).
	if (!global._prisma) {
		global._prisma = new PrismaClient();
	}
	prisma = global._prisma;
  
} else {
	// In production mode, it's best to not use a global variable.
	prisma = new PrismaClient();
}

// Export a module-scoped prisma object. 
// By doing this in a separate module, the client can be shared across functions.
export default prisma;