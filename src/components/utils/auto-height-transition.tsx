/*
 * MIT License
 *
 * Copyright (c) 2019 Trevor Healy
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in al
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
import React, { FC, PropsWithChildren, memo, useEffect, useRef } from "react";

const BaseAutoHeightTransition: FC<
  PropsWithChildren<{
    /** Duration of animation in milliseconds. */
    duration?: number;
  }>
> = ({ children, duration }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const heightTransitionedContainer = ref.current;
    if (heightTransitionedContainer?.firstChild) {
      const child = heightTransitionedContainer.firstChild as HTMLDivElement;
      console.log(child);
      heightTransitionedContainer.style.height = `${child.scrollHeight}px`;
    }
  });

  return (
    <div className={`flex flex-col overflow-hidden transition-all`} ref={ref}>
      <div>{children}</div>
    </div>
  );
};

/**
 * Container that automatically smoothly resizes to the height of contained children.
 */
export const AutoHeightTransition = memo(BaseAutoHeightTransition);
