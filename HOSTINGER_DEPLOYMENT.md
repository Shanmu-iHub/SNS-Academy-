# Hostinger Deployment Guide for Next.js (App Router)

This project has been successfully migrated from Hono/Vite (Cloudflare Pages) to **Next.js (App Router)**. To deploy this application to Hostinger, follow these instructions to use their Node.js hosting or VPS environment.

## 1. Preparing the Project
1. Commit all your changes to your Git repository (e.g., GitHub, GitLab, Bitbucket).
2. Ensure you have the latest packages by verifying local functionality using `npm run dev` and `npm run build`.

## 2. Deploying via Hostinger hPanel (Shared/Cloud Node.js Hosting)
If your Hostinger plan supports Node.js apps via the hPanel:

1. Log in to your Hostinger hPanel.
2. Go to **Advanced -> Node.js**.
3. Create a new Node.js application:
   - Application URL: Choose your domain or subdomain.
   - Application root: `public_html` (or wherever you clone the repo).
   - Application startup file: `node_modules/next/dist/bin/next` or you can use a custom `server.js` if you created one. Alternatively, if Hostinger allows running npm scripts, set the start command to `npm run start`.
4. Under "Environment variables", define your environment variables based on `.env.example`.
5. Save the configuration.
6. SSH into your Hostinger account or use the File Manager / Git deployment to fetch your code.
7. Run `npm install` and `npm run build` via SSH terminal in your project directory.
8. Restart your Node.js application from the hPanel.

## 3. Deploying via Hostinger VPS (Ubuntu/AlmaLinux)
If you are using a Hostinger VPS, you will set up a Node/Nginx reverse proxy.

### Prerequisites:
- SSH access to your given VPS.
- Node.js installed (v18+ recommended): `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs`
- PM2 installed globally: `sudo npm install -g pm2`
- Nginx installed: `sudo apt install nginx`

### Deployment Steps:
1. Clone your repository into `/var/www/sns-school-main`:
   ```bash
   cd /var/www
   git clone <your-repo-url> sns-school-main
   cd sns-school-main
   ```
2. Install dependencies and build:
   ```bash
   npm install
   npm run build
   ```
3. Start the Next.js process using PM2:
   ```bash
   pm2 start npm --name "sns-nextjs" -- start
   pm2 save
   pm2 startup
   ```
4. Configure Nginx proxy:
   ```bash
   sudo nano /etc/nginx/sites-available/sns-school
   ```
   Add the following Server block configuration:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com www.yourdomain.com;

       location / {
           proxy_pass http://localhost:3000; # The default Next.js port
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
5. Enable the site and restart Nginx:
   ```bash
   sudo ln -s /etc/nginx/sites-available/sns-school /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl restart nginx
   ```
6. Secure your site with an SSL certificate using Let's Encrypt / Certbot:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

Your SNS Academy website should now be live on your Hostinger Node.js/VPS setup!
