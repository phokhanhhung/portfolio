"use client";

import * as React from "react";

import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";

import Image from "next/image";

interface ImageStackProps {
  paths: string[];
}

export default function ImageStack({ paths }: ImageStackProps) {
  const initialStack = React.useMemo(
    () => paths.map((src) => ({ src })),
    [paths]
  );
  const [stack, setStack] = React.useState(initialStack);
  const x = useMotionValue(0) || 0;
  const scale = useTransform(x, [-100, 0, 100], [0.5, 1, 0.5]) || 1;
  const rotate =
    useTransform(x, [-100, 0, 100], [-45, 0, 45], {
      clamp: false,
    }) || 0;

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (Math.abs(info.offset.x) > 100) {
      setStack((prev) => {
        const newStack = [...prev];
        const first = newStack.shift();
        if (first) newStack.push(first);
        return newStack;
      });
    }
  };

  const randomRotations = React.useMemo(
    () => stack.map(() => Math.random() * 20 - 10),
    [stack]
  );

  return (
    <div className="relative w-[150px] h-[150px]">
      {stack.map((image, index) => {
        const isTop = index === 0;
        return (
          <motion.div
            key={`image-${image.src}`}
            style={isTop ? { x, scale, rotate } : {}}
            drag="x"
            onDragEnd={handleDragEnd}
            dragConstraints={{ left: 0, right: 0 }}
            whileDrag={{ scale: 1.05, opacity: 0.6 }}
            animate={{
              scale: 1 - index * 0.05,
              y: index * 5,
              zIndex: stack.length - index,
              rotate: randomRotations[index],
              opacity: 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute top-0 left-0 w-[150px] h-[150px] rounded shadow-lg overflow-hidden cursor-grab"
          >
            <Image
              src={image.src}
              alt={`${index}`}
              className="object-cover w-full h-full"
              draggable={false}
              width={200}
              height={200}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
