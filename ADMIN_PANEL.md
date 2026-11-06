# Website admin panel

Open `/admin` on the Node server. The panel manages the homepage masthead, section copy and slider cards/order; uploaded/replaced logo and photos; both doctor profiles and expertise; contact details and clinic hours; consultation fees; FAQs, the patient counter and clinic videos. The Video and Home Physio menus open dedicated editors at `/admin/video` and `/admin/home-physio`.

## Access

Create `.env.local` from `.env.example` and set `ADMIN_PASSWORD` before signing in at `/admin`. The ignored local environment file is not included in the project ZIP. Restart the Next.js Node server after setting or changing the password.

Sessions use a 12-hour, HTTP-only, same-site cookie. Image uploads accept JPG, PNG, WebP, GIF and AVIF files up to 10 MB. To add photos to the Clinic gallery, choose “Clinic gallery” in the upload folder selector and use “Upload a gallery image”. Clinic videos accept MP4, WebM or MOV files up to 100 MB; manage the homepage video in Video and add one or more physiotherapy videos in Home Physio, then save.

## Storage and deployment

Content is saved in `data/site-content.json`. Uploaded images are saved under `public/images/<folder>/` and videos under `public/videos/`. Run the site on a Node server with write access to those paths and persistent disk storage. Back up `data/site-content.json`, `public/images/` and `public/videos/`; redeploys must preserve them. This file-based storage is intended for a single Node/VPS instance, not serverless hosts or multiple instances without shared storage.
