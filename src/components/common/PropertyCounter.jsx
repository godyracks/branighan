
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';

export const PropertyCounter = ({ count = 500, animationConfig = { duration: 2, ease: 'easeOut' }, label = 'Premium Properties' }) => {
  const controls = useCounterAnimation(animationConfig);

  return (
    <div className="flex items-center justify-center space-x-3 mt-6 sm:mt-8">
      <motion.div
        className="h-1.5 bg-border-light dark:bg-border-dark rounded-full overflow-hidden"
        initial={{ width: 0 }}
        animate={controls}
      >
        <div className="h-full bg-gradient-to-r from-accent-light to-accent-dark" />
      </motion.div>
      <span className="text-[11px] italic font-medium text-text-light dark:text-text-dark">
        {count}+ {label}
      </span>
    </div>
  );
};

PropertyCounter.propTypes = {
  count: PropTypes.number,
  animationConfig: PropTypes.shape({
    duration: PropTypes.number,
    ease: PropTypes.string,
  }),
  label: PropTypes.string,
};