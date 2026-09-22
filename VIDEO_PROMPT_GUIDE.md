# Purcellville Family Restaurant — Cinematic Video Generation Guide
> Calibrated for Runway Gen-3 Alpha, Kling AI, Luma Dream Machine, and Sora
> Input Keyframe Images: Located in your `public/images/` folder

---

## 🎬 VIDEO 01 — Hero Intro (Desktop 16:9, 12–16 seconds)
- **Start Frame Asset**: `public/images/hero-desktop.jpg`
- **Target Aspect Ratio**: `16:9`
- **Tool Recommendation**: Runway Gen-3 Alpha (Image-to-Video) or Kling AI 1.5 Professional Mode
- **Prompt**:
  ```text
  Slow, smooth cinematic camera motion pulling back slowly from a warm Virginia diner booth table in morning window sunlight. 
  At first, the table has a steaming white ceramic coffee mug with soft wisps of steam rising into the air. 
  A server's friendly hands gently place down a turquoise swirl plate with spaghetti and garlic toast, followed by a red-rimmed plate of sauced barbecue ribs and crispy french fries. 
  The camera gently glides backwards and settles into a wide table composition. Natural morning sunlight, warm atmospheric dust motes, realistic steam physics, 35mm film look, 24fps. Zero morphing, zero glitches.
  ```
- **Motion Scale / Camera**: Smooth Zoom Out (`Speed: 2`, `Pan: 0`, `Roll: 0`)

---

## 🎬 VIDEO 02 — Hero Ambient Loop (Desktop 16:9, 6–10 seconds)
- **Start Frame Asset**: `public/images/hero-desktop.jpg`
- **Target Aspect Ratio**: `16:9`
- **Prompt**:
  ```text
  Static tripod shot of the diner table spread. The food is perfectly still. 
  Only the hot coffee mug has gentle, delicate wisps of steam continuously curling upward into the soft window sunlight. 
  Subtle shimmer of light through the glass. Peaceful morning diner atmosphere, photorealistic, seamless loop.
  ```
- **Settings**: Static Camera, Motion 1.

---

## 🎬 VIDEO 03 — Mobile Hero Intro (Mobile 9:16, 12–16 seconds)
- **Start Frame Asset**: `public/images/hero-mobile.jpg`
- **Target Aspect Ratio**: `9:16`
- **Prompt**:
  ```text
  Vertical 9:16 cinematic video. Slow gentle upward tilt and pull-back over a Virginia diner table. 
  Steaming white coffee mug with delicate steam, a turquoise plate of spaghetti with meat sauce, and a plate of sauced ribs with fries. 
  Warm morning window daylight illuminating the wood grain and cream booth. Natural diner ambiance, smooth documentary motion.
  ```

---

## 🎬 VIDEO 05 — Coffee Steam Transition (3–5 seconds)
- **Prompt**:
  ```text
  Macro tight close-up of a classic white ceramic diner mug filled with dark hot black coffee. 
  Dense, swirling white steam billows upward and drifts across the lens, momentarily creating a soft natural white wipe across the frame. Warm morning sunlight backlight.
  ```

---

## 🎬 VIDEO 09 — Closing Scene (Post-Meal Tabletop, 6–10 seconds)
- **Start Frame Asset**: `public/images/closing-table.jpg`
- **Target Aspect Ratio**: `16:9`
- **Prompt**:
  ```text
  Cinematic slow camera drift across a diner table after a satisfying meal. 
  Empty plates with crumbs, a fork rested on an empty turquoise plate, a crumpled paper napkin, and a half-finished ceramic coffee mug with faint remaining steam. 
  Warm golden late-afternoon sunlight angling through the window. Nostalgic, peaceful, contented atmosphere.
  ```

---

## 📁 How to Wire Generated MP4 Files:
Once rendered, simply place the files in `public/images/`:
- `hero-intro-desktop.mp4`
- `hero-loop-desktop.mp4`
- `hero-intro-mobile.mp4`
- `hero-loop-mobile.mp4`
The player in `src/components/home/Hero.jsx` will seamlessly play them with instant fallback to `hero-poster-desktop.jpg`.
