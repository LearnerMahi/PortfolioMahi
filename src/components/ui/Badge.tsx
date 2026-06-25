import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  color?: 'blue' | 'purple' | 'cyan' | 'green' | 'orange' | 'red' | 'default'
  className?: string
}

const colorMap = {
  blue: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  green: 'bg-green-500/10 text-green-400 border-green-500/20',
  orange: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  red: 'bg-red-500/10 text-red-400 border-red-500/20',
  default: 'bg-[#21262d] text-[#8b949e] border-[#30363d]',
}

export function Badge({ children, color = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border',
        colorMap[color],
        className
      )}
    >
      {children}
    </span>
  )
}
