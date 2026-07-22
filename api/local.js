const app = require('./index');
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`==================================================`);
  console.log(`🚀 [Backend] Express server active at http://localhost:${PORT}`);
  console.log(`📁 API routes:`);
  console.log(`   - Data store: http://localhost:${PORT}/api/portfolio-data`);
  console.log(`   - Live stats: http://localhost:${PORT}/api/live-stats`);
  console.log(`   - Contact POST: http://localhost:${PORT}/api/contact`);
  console.log(`==================================================`);
});
