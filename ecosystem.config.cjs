module.exports = {
  apps: [
    {
      name: 'sns-academy',
      script: 'npm',
      args: 'run start',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork'
    }
  ]
}
