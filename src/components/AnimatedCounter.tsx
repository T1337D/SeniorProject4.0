import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useSpring, useTransform } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const springConfig = {
    damping: 30,
    stiffness: 200,
  };

  const spring = useSpring(0, springConfig);
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [inView, value, spring, hasAnimated]);

  return (
    <div ref={ref} className="inline-block">
      <motion.span>{display}</motion.span>%
    </div>
  );
}