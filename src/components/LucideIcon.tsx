import React from 'react';
import * as Icons from 'lucide-react';
import type { LucideProps } from 'lucide-react';

export interface LucideIconProps extends Partial<LucideProps> {
  name: string;
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const LucideIcon: React.FC<LucideIconProps> = ({
  name,
  size = 20,
  color,
  className = '',
  style,
  ...rest
}) => {
  const iconRecord = Icons as unknown as Record<string, React.ComponentType<LucideProps>>;
  const Fallback = iconRecord['HelpCircle'] || iconRecord['CircleHelp'] || null;
  const Component = iconRecord[name] || Fallback;

  if (!Component) {
    return null;
  }

  return <Component size={size} color={color} className={className} style={style} {...rest} />;
};
