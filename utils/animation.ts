export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.5,
      duration: 0.8,
    },
  }),
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  }),
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  }),
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  }),
};

export const zoomIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i = 1) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  }),
};

export const popIn = {
  hidden: { scale: 0, opacity: 0 },
  visible: (i = 1) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.5,
      duration: 0.6,
    },
  }),
};

export const fadeRotate = {
  hidden: { opacity: 0, rotate: -10 },
  visible: (i = 1) => ({
    opacity: 1,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      bounce: 0.3,
      duration: 0.7,
    },
  }),
};
