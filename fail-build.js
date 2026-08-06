console.log("Starting test build for Site Tools deployment logs...");
console.log("Installing dependencies completed successfully.");
console.error("Intentional build failure: DES-15862 deployment log test.");
console.error("This archive is expected to fail during npm run build.");
process.exit(1);
