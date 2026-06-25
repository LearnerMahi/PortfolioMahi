export interface SkillCategory {
  label: string
  icon: string
  color: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    icon: '⌨️',
    color: 'blue',
    skills: ['C++', 'Java', 'Python', 'Swift', 'C', 'SQL'],
  },
  {
    label: 'Mobile & Frameworks',
    icon: '📱',
    color: 'green',
    skills: ['Android SDK', 'iOS (SwiftUI)', 'Material Design', 'ExoPlayer'],
  },
  {
    label: 'Graphics & Game Dev',
    icon: '🎮',
    color: 'purple',
    skills: ['OpenGL 3.3', 'GLSL Shaders', 'Godot Engine', 'GLFW', 'Assimp'],
  },
  {
    label: 'Databases',
    icon: '🗄️',
    color: 'orange',
    skills: ['Firebase', 'Oracle DB', 'Firestore', 'Realtime Database'],
  },
  {
    label: 'Tools & Others',
    icon: '🛠️',
    color: 'cyan',
    skills: ['Git', 'GitHub', 'LaTeX', 'Linux', 'VS Code', 'Android Studio'],
  },
  {
    label: 'Areas of Interest',
    icon: '🔬',
    color: 'red',
    skills: ['Cybersecurity', 'Competitive Programming', '3D Graphics', 'Machine Learning', 'System Security'],
  },
]

export const competitiveProgramming = {
  codeforces: { label: 'Codeforces', solved: 132 },
  leetcode: { label: 'LeetCode', solved: 72 },
}
