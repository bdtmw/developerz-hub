import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
// Serialize libuv filesystem work to avoid recursive mkdir races on Windows.
const result = spawnSync(process.execPath, [require.resolve('next/dist/bin/next'), 'build'], {
  stdio: 'inherit', env: { ...process.env, UV_THREADPOOL_SIZE: process.platform === 'win32' ? '1' : (process.env.UV_THREADPOOL_SIZE || '4') }
});
if (result.error) throw result.error;
process.exit(result.status ?? 1);
