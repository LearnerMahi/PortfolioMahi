// ============================================================
// ADMIN: HOW TO ADD A PROJECT
// ============================================================
// 1. Copy one of the existing objects below
// 2. Paste it at the top of the `projects` array
// 3. Fill in all the fields (id must be unique — it becomes the URL slug)
// 4. Set `featured: true` to show it on the homepage (keep max 3 featured)
// 5. Run `npm run build` and push to GitHub — your new project is live!
// ============================================================

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  category: string[]
  featured: boolean
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  date: string
  status: 'completed' | 'in-progress' | 'research'
}

export const projects: Project[] = [
  {
    id: 'malicious-website-detection',
    title: 'Malicious Website Detection',
    description:
      'Thesis research on detecting malicious websites using system provenance analysis — tracking OS-level events to identify threats that evade traditional URL/content filters.',
    longDescription: `
This thesis project tackles the challenge of identifying malicious websites by analyzing **system provenance graphs** — directed acyclic graphs that capture cause-and-effect relationships between OS-level entities (processes, files, network sockets).

**The Problem:** Traditional malicious website detection relies on URL blacklists, HTML content scanning, and JavaScript analysis. Sophisticated attackers easily bypass these with obfuscation, short-lived domains, and drive-by downloads.

**The Approach:** When a browser visits a website, it triggers a chain of system calls — DNS lookups, file writes, process spawns, network connections. By capturing these events as a provenance graph and analyzing graph-level features with machine learning, we can detect malicious behavior even when the website content looks benign.

**Key Techniques:**
- System call auditing using Linux audit framework
- Provenance graph construction and feature extraction
- Graph neural networks for classification
- Evaluation against real-world malware samples

**Status:** Final-year thesis in progress (2025–2026)
    `.trim(),
    tags: ['Python', 'Machine Learning', 'Graph Neural Networks', 'Cybersecurity', 'Linux', 'Research'],
    category: ['research', 'ml', 'security'],
    featured: true,
    date: '2025–2026',
    status: 'in-progress',
  },
  {
    id: 'study-nest',
    title: 'Study Nest',
    description:
      'A collaborative Android e-learning platform for students and teachers featuring course creation, video streaming, a built-in chatbot, and real-time messaging.',
    longDescription: `
**Study Nest** is a full-featured Android educational application built with Firebase as the backend, designed to bridge the gap between students and educators.

**Features:**
- **Course Management** — Teachers can create structured courses with modules, assignments, and quizzes
- **Video Upload & Streaming** — Supports course video uploads with a custom media player (adaptive quality)
- **AI Chatbot** — Integrated chatbot for answering student queries and navigating course material
- **Real-time Messaging** — Firebase Realtime Database powered chat between students and teachers
- **Push Notifications** — Course updates, assignment deadlines, and announcements

**Tech Stack:**
- Java (Android SDK)
- Firebase Realtime Database & Firestore
- Firebase Authentication & Storage
- ExoPlayer for media playback
- Material Design 3 UI components

This was a collaborative team project where I led the media player and chatbot integration modules.
    `.trim(),
    tags: ['Java', 'Android', 'Firebase', 'ExoPlayer', 'Chatbot', 'Material Design'],
    category: ['android', 'mobile'],
    featured: true,
    githubUrl: 'https://github.com/ahnafraismahi/study-nest', // ← update
    date: '2024',
    status: 'completed',
  },
  {
    id: 'virtual-campus-tour',
    title: 'Virtual Campus Tour — KUET',
    description:
      'Immersive 3D visualization of KUET campus built with OpenGL 3.3, featuring dynamic day-night cycles, interactive NPCs, real-time physics, and PBR rendering.',
    longDescription: `
A full 3D real-time rendering of the **Khulna University of Engineering & Technology** campus, built from scratch using OpenGL 3.3 and modern graphics techniques.

**Rendering Features:**
- **PBR Lighting** — Physically-based rendering with diffuse, specular, and ambient components
- **Dynamic Day-Night Cycle** — Real-time sun position simulation with color temperature shift
- **Shadow Mapping** — Directional shadow maps for all major structures
- **Skybox** — HDR cubemap skybox with atmospheric scattering approximation

**Gameplay / Interaction:**
- **Interactive NPCs** — Pathfinding-based NPC movement around campus walkways
- **First-Person Camera** — WASD + mouse look with collision detection
- **Physics Simulation** — Rigid body simulation for interactive objects
- **Building Interiors** — Seamless transition between outdoor and indoor spaces

**Architecture:**
- Custom scene graph for efficient rendering
- Vertex/fragment shader pipeline (GLSL)
- Assimp for 3D model loading (.obj, .fbx)
- GLFW for windowing, GLAD for OpenGL function loading

Built in C++ with a focus on performance — achieves 60+ FPS on mid-range hardware.
    `.trim(),
    tags: ['C++', 'OpenGL 3.3', 'GLSL', 'GLFW', 'Assimp', 'Physics'],
    category: ['opengl', '3d', 'graphics'],
    featured: true,
    githubUrl: 'https://github.com/ahnafraismahi/virtual-campus-tour', // ← update
    date: '2023–2024',
    status: 'completed',
  },
]

// ============================================================
// ADMIN: QUICK-ADD TEMPLATE (copy and fill in)
// ============================================================
// {
//   id: 'my-new-project',           // unique slug → becomes /projects/my-new-project
//   title: 'My New Project',
//   description: 'Short one-liner shown on cards.',
//   longDescription: 'Full markdown-style description shown on the project page.',
//   tags: ['Tag1', 'Tag2'],
//   category: ['web'],              // options: android, opengl, 3d, ml, research, security, web, mobile, game
//   featured: false,                // true = show on homepage (max 3)
//   githubUrl: 'https://github.com/...',
//   liveUrl: 'https://...',         // optional
//   imageUrl: '/images/project.png', // optional — place image in /public/images/
//   date: '2025',
//   status: 'completed',           // 'completed' | 'in-progress' | 'research'
// },
