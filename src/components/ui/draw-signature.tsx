"use client";

import { distributeRange } from "../../lib/utils";
import { Section } from "@/components/ui/section";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

const transition = {
  duration: 0,
  ease: "linear",
} as const;

const ranges = distributeRange({
  weights: [2, 3, 1, 4, 2, 2, 2, 2, 2, 2, 1, 2],
  range: [0.25, 1],
});

export const DrawSignature = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  const pathLengthMotion = [
    useTransform(scrollYProgress, ranges[0], [0, 1]),
    useTransform(scrollYProgress, ranges[1], [0, 1]),
    useTransform(scrollYProgress, ranges[2], [0, 1]),
    useTransform(scrollYProgress, ranges[3], [0, 1]),
    useTransform(scrollYProgress, ranges[4], [0, 1]),
    useTransform(scrollYProgress, ranges[5], [0, 1]),
    useTransform(scrollYProgress, ranges[6], [0, 1]),
    useTransform(scrollYProgress, ranges[7], [0, 1]),
    useTransform(scrollYProgress, ranges[8], [0, 1]),
    useTransform(scrollYProgress, ranges[9], [0, 1]),
    useTransform(scrollYProgress, ranges[10], [0, 1]),
    useTransform(scrollYProgress, ranges[11], [0, 1]),
  ] as const;

  const slideDownMotion = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  return (
    <Section
      className="scroll-mb-16 flex items-center justify-center p-14 pb-32 print:hidden"
      ref={sectionRef}
      aria-hidden
    >
      <motion.svg
        width="256px"
        height="42px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="219.210 357.360 962.415 158.227"
        style={{
          y: slideDownMotion,
        }}
        transition={transition}
      >
        <motion.path
          d="M 266.44,381.27 C 265.15 381.83, 264.25 382.66, 262.78 385.35 C 261.32 388.04, 260.97 390.09, 259.12 394.73 C 257.26 399.36, 255.96 402.47, 253.50 408.52 C 251.03 414.57, 249.54 418.08, 246.78 424.96 C 244.02 431.84, 242.38 435.77, 239.72 442.90 C 237.06 450.03, 235.74 453.78, 233.48 460.60 C 231.22 467.43, 230.16 470.94, 228.43 477.04 C 226.69 483.15, 226.01 486.12, 224.80 491.12 C 223.60 496.12, 222.84 498.41, 222.42 502.05 C 222.00 505.68, 222.27 507.24, 222.71 509.28 C 223.14 511.32, 223.86 511.73, 224.58 512.27 C 225.30 512.81, 225.76 512.62, 226.29 511.99 C 226.81 511.36, 226.91 511.00, 227.21 509.13 C 227.51 507.26, 227.46 506.06, 227.80 502.62 C 228.13 499.18, 228.08 496.88, 228.88 491.95 C 229.69 487.01, 230.29 484.02, 231.83 477.96 C 233.37 471.89, 234.38 468.39, 236.57 461.61 C 238.75 454.83, 240.05 451.10, 242.74 444.04 C 245.43 436.98, 247.10 433.07, 250.02 426.31 C 252.95 419.54, 254.57 416.10, 257.36 410.22 C 260.15 404.35, 261.72 401.37, 263.97 396.93 C 266.22 392.48, 267.56 390.87, 268.61 387.99 C 269.67 385.11, 269.69 383.89, 269.26 382.55 C 268.83 381.20, 267.74 380.71, 266.44 381.27"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[0],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 270.36,377.64 C 269.57 378.22, 269.41 378.43, 269.05 379.53 C 268.70 380.62, 268.37 381.34, 268.59 383.12 C 268.81 384.89, 269.24 386.08, 270.14 388.41 C 271.05 390.74, 271.60 392.18, 273.10 394.78 C 274.60 397.38, 275.51 398.86, 277.66 401.42 C 279.80 403.99, 280.96 405.43, 283.83 407.62 C 286.70 409.82, 288.34 410.87, 292.01 412.39 C 295.68 413.92, 297.81 414.68, 302.19 415.25 C 306.56 415.81, 309.05 415.80, 313.89 415.22 C 318.73 414.64, 321.14 413.94, 326.41 412.35 C 331.67 410.75, 334.57 409.69, 340.21 407.25 C 345.86 404.81, 348.87 403.34, 354.63 400.15 C 360.40 396.96, 363.42 394.96, 369.03 391.31 C 374.64 387.66, 377.77 385.48, 382.71 381.92 C 387.65 378.36, 389.94 376.44, 393.73 373.51 C 397.53 370.57, 399.62 369.49, 401.67 367.26 C 403.71 365.03, 404.03 363.65, 403.96 362.36 C 403.89 361.07, 402.73 360.41, 401.31 360.82 C 399.88 361.23, 398.65 361.75, 396.82 364.41 C 395.00 367.07, 394.56 369.45, 392.19 374.13 C 389.82 378.81, 388.27 381.82, 384.98 387.81 C 381.69 393.79, 379.61 397.23, 375.74 404.04 C 371.88 410.85, 369.74 414.79, 365.66 421.87 C 361.58 428.95, 359.13 432.59, 355.35 439.46 C 351.56 446.32, 349.81 449.85, 346.74 456.20 C 343.66 462.56, 342.30 465.72, 339.98 471.24 C 337.66 476.77, 336.62 479.23, 335.14 483.82 C 333.65 488.42, 333.02 490.63, 332.56 494.21 C 332.10 497.80, 332.23 499.38, 332.83 501.74 C 333.43 504.10, 334.48 504.97, 335.57 506.01 C 336.65 507.04, 337.47 507.02, 338.25 506.91 C 339.03 506.80, 339.29 506.07, 339.45 505.46 C 339.62 504.84, 339.23 504.79, 339.08 503.83 C 338.92 502.86, 338.85 502.46, 338.66 500.64 C 338.47 498.81, 337.99 497.84, 338.12 494.71 C 338.25 491.58, 338.27 489.42, 339.31 484.99 C 340.35 480.56, 341.25 478.05, 343.31 472.57 C 345.37 467.08, 346.67 463.89, 349.60 457.56 C 352.54 451.23, 354.24 447.73, 357.97 440.90 C 361.70 434.06, 364.15 430.43, 368.27 423.39 C 372.40 416.35, 374.57 412.42, 378.60 405.71 C 382.62 399.00, 384.74 395.59, 388.42 389.85 C 392.10 384.11, 394.00 381.30, 396.99 377.00 C 399.98 372.70, 401.86 371.22, 403.37 368.36 C 404.88 365.49, 404.79 364.28, 404.53 362.68 C 404.26 361.08, 403.47 360.34, 402.04 360.36 C 400.60 360.39, 399.60 360.87, 397.35 362.80 C 395.09 364.73, 394.16 366.83, 390.77 370.03 C 387.38 373.23, 385.13 375.15, 380.38 378.79 C 375.64 382.44, 372.54 384.63, 367.03 388.24 C 361.52 391.86, 358.52 393.82, 352.85 396.88 C 347.17 399.94, 344.20 401.31, 338.67 403.54 C 333.14 405.78, 330.24 406.73, 325.19 408.06 C 320.14 409.39, 317.83 409.90, 313.41 410.21 C 308.99 410.52, 306.83 410.33, 303.08 409.61 C 299.33 408.89, 297.59 408.08, 294.65 406.60 C 291.71 405.11, 290.49 404.16, 288.38 402.19 C 286.26 400.22, 285.49 399.01, 284.09 396.72 C 282.69 394.44, 282.29 393.10, 281.38 390.75 C 280.47 388.40, 280.28 387.08, 279.55 384.97 C 278.83 382.85, 278.58 381.68, 277.75 380.18 C 276.92 378.68, 276.34 378.17, 275.39 377.45 C 274.45 376.74, 274.03 376.57, 273.02 376.60 C 272.02 376.64, 271.15 377.06, 270.36 377.64"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[1],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 408.98,504.58 C 409.98 503.78, 410.36 503.15, 410.35 503.23 C 410.34 503.31, 409.46 504.60, 408.92 504.98 C 408.37 505.35, 408.23 505.50, 407.64 505.11 C 407.05 504.72, 406.69 503.30, 405.95 503.03 C 405.20 502.77, 404.55 503.01, 403.92 503.78 C 403.28 504.56, 402.48 506.22, 402.76 506.91 C 403.04 507.60, 404.08 507.68, 405.32 507.21 C 406.57 506.75, 407.97 505.37, 408.98 504.58"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[2],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 692.20,384.61 C 692.27 383.18, 691.76 381.64, 690.14 379.97 C 688.53 378.30, 687.05 377.22, 684.13 376.27 C 681.20 375.33, 679.42 375.08, 675.50 375.27 C 671.59 375.46, 669.43 375.92, 664.55 377.20 C 659.67 378.49, 657.03 379.33, 651.10 381.69 C 645.18 384.05, 641.76 385.46, 634.92 389.00 C 628.08 392.54, 624.11 394.78, 616.89 399.40 C 609.67 404.02, 605.57 406.79, 598.81 412.10 C 592.05 417.42, 588.70 420.38, 583.10 425.98 C 577.51 431.58, 574.84 434.59, 570.83 440.11 C 566.82 445.64, 565.10 448.46, 563.05 453.60 C 561.00 458.74, 560.48 461.24, 560.58 465.79 C 560.68 470.35, 561.31 472.74, 563.57 476.38 C 565.84 480.03, 567.75 481.68, 571.92 484.03 C 576.09 486.38, 578.84 487.08, 584.40 488.12 C 589.97 489.16, 593.28 489.28, 599.76 489.22 C 606.24 489.16, 609.75 488.74, 616.80 487.83 C 623.85 486.93, 627.78 486.23, 635.01 484.70 C 642.24 483.17, 646.24 482.20, 652.96 480.18 C 659.68 478.17, 662.92 476.83, 668.61 474.62 C 674.30 472.41, 677.11 471.26, 681.40 469.14 C 685.69 467.01, 687.67 466.19, 690.08 464.00 C 692.48 461.81, 692.94 460.38, 693.44 458.18 C 693.94 455.97, 693.53 454.82, 692.59 452.98 C 691.66 451.14, 690.69 450.21, 688.77 448.97 C 686.84 447.74, 685.43 447.34, 682.95 446.82 C 680.47 446.31, 679.00 446.40, 676.36 446.40 C 673.72 446.41, 672.27 446.54, 669.74 446.84 C 667.21 447.14, 665.80 447.21, 663.69 447.89 C 661.57 448.56, 660.43 449.17, 659.16 450.22 C 657.90 451.26, 657.51 452.11, 657.37 453.12 C 657.23 454.12, 657.72 454.69, 658.46 455.24 C 659.21 455.79, 659.73 455.72, 661.09 455.87 C 662.45 456.02, 663.39 456.09, 665.26 456.00 C 667.13 455.90, 668.30 455.48, 670.45 455.38 C 672.61 455.28, 673.82 455.35, 676.04 455.52 C 678.26 455.69, 679.52 456.09, 681.57 456.24 C 683.63 456.39, 684.84 456.35, 686.33 456.26 C 687.82 456.17, 688.44 455.72, 689.01 455.80 C 689.59 455.87, 689.77 455.88, 689.20 456.64 C 688.63 457.40, 688.16 457.89, 686.17 459.60 C 684.18 461.32, 683.04 462.91, 679.25 465.22 C 675.46 467.54, 672.66 468.84, 667.20 471.19 C 661.75 473.53, 658.55 474.90, 651.97 476.95 C 645.39 479.00, 641.44 479.96, 634.32 481.44 C 627.21 482.92, 623.29 483.58, 616.38 484.36 C 609.47 485.14, 606.00 485.44, 599.77 485.33 C 593.55 485.22, 590.37 484.89, 585.27 483.80 C 580.17 482.70, 577.81 481.85, 574.28 479.85 C 570.75 477.85, 569.48 476.66, 567.61 473.81 C 565.74 470.97, 565.13 469.40, 564.92 465.63 C 564.71 461.85, 564.83 459.66, 566.54 454.93 C 568.25 450.20, 569.73 447.35, 573.46 441.97 C 577.18 436.60, 579.75 433.56, 585.17 428.04 C 590.60 422.51, 593.91 419.57, 600.57 414.34 C 607.23 409.12, 611.32 406.39, 618.49 401.92 C 625.66 397.46, 629.62 395.29, 636.42 392.00 C 643.22 388.71, 646.66 387.44, 652.50 385.49 C 658.33 383.53, 661.04 382.91, 665.60 382.22 C 670.16 381.53, 672.14 381.63, 675.29 382.04 C 678.44 382.44, 679.22 383.43, 681.35 384.25 C 683.48 385.07, 684.27 385.55, 685.95 386.13 C 687.64 386.71, 688.53 387.44, 689.78 387.14 C 691.03 386.83, 692.13 386.05, 692.20 384.61"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[3],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 763.82,442.22 C 763.42 441.08, 762.81 440.44, 761.14 439.75 C 759.47 439.05, 758.13 438.45, 755.46 438.73 C 752.79 439.01, 750.90 439.47, 747.79 441.16 C 744.68 442.85, 743.19 444.47, 739.93 447.19 C 736.66 449.91, 734.70 451.54, 731.46 454.76 C 728.21 457.97, 726.32 459.76, 723.69 463.25 C 721.07 466.75, 719.65 468.69, 718.33 472.23 C 717.02 475.77, 716.61 477.75, 717.12 480.96 C 717.63 484.16, 718.57 485.96, 720.88 488.23 C 723.20 490.51, 725.02 491.48, 728.70 492.33 C 732.37 493.19, 734.73 492.99, 739.25 492.50 C 743.77 492.00, 746.41 491.40, 751.29 489.86 C 756.18 488.32, 758.81 487.09, 763.69 484.79 C 768.56 482.50, 771.26 481.11, 775.68 478.39 C 780.09 475.66, 782.37 474.21, 785.77 471.18 C 789.17 468.15, 790.76 466.45, 792.66 463.25 C 794.56 460.06, 795.20 458.29, 795.26 455.22 C 795.32 452.14, 794.56 450.36, 792.96 447.90 C 791.35 445.44, 789.74 444.26, 787.23 442.92 C 784.73 441.59, 782.84 441.23, 780.43 441.23 C 778.02 441.23, 776.31 441.90, 775.19 442.91 C 774.08 443.93, 774.10 445.11, 774.85 446.31 C 775.60 447.51, 777.13 448.11, 778.94 448.92 C 780.75 449.74, 782.10 449.80, 783.90 450.39 C 785.71 450.98, 786.88 450.93, 787.95 451.86 C 789.02 452.78, 789.35 453.35, 789.26 455.03 C 789.17 456.71, 788.90 457.77, 787.50 460.25 C 786.10 462.73, 785.12 464.59, 782.25 467.41 C 779.38 470.24, 777.27 471.75, 773.16 474.37 C 769.05 476.98, 766.36 478.37, 761.70 480.48 C 757.03 482.59, 754.43 483.69, 749.85 484.90 C 745.27 486.12, 742.72 486.40, 738.79 486.56 C 734.86 486.73, 732.92 486.34, 730.21 485.73 C 727.49 485.12, 726.61 484.65, 725.22 483.52 C 723.84 482.39, 723.49 481.90, 723.29 480.08 C 723.09 478.27, 723.20 477.11, 724.23 474.45 C 725.25 471.79, 726.15 469.85, 728.42 466.78 C 730.69 463.70, 732.48 461.92, 735.57 459.06 C 738.67 456.21, 740.76 454.60, 743.91 452.51 C 747.07 450.41, 748.79 449.61, 751.35 448.59 C 753.91 447.57, 754.90 447.77, 756.71 447.40 C 758.52 447.04, 759.13 447.18, 760.42 446.79 C 761.71 446.39, 762.48 446.35, 763.16 445.43 C 763.84 444.52, 764.23 443.35, 763.82 442.22"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[4],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 822.55,446.83 C 821.39 446.95, 820.85 447.40, 819.53 448.64 C 818.22 449.89, 817.32 450.72, 815.97 453.04 C 814.63 455.37, 814.23 457.32, 812.81 460.27 C 811.38 463.22, 810.54 464.93, 808.85 467.80 C 807.16 470.67, 805.69 472.13, 804.37 474.64 C 803.05 477.14, 802.45 478.60, 802.27 480.35 C 802.09 482.10, 802.54 482.93, 803.45 483.39 C 804.36 483.85, 805.47 483.90, 806.82 482.66 C 808.17 481.42, 808.78 480.01, 810.21 477.21 C 811.65 474.40, 812.00 472.14, 814.00 468.62 C 816.00 465.10, 817.32 463.04, 820.21 459.58 C 823.10 456.12, 825.04 454.23, 828.45 451.32 C 831.86 448.40, 833.88 447.04, 837.25 444.99 C 840.61 442.95, 842.35 442.16, 845.26 441.08 C 848.18 440.01, 849.53 439.86, 851.82 439.62 C 854.12 439.39, 854.96 439.66, 856.74 439.92 C 858.51 440.17, 859.21 440.64, 860.68 440.91 C 862.15 441.18, 863.08 441.67, 864.08 441.25 C 865.08 440.83, 865.83 439.99, 865.68 438.81 C 865.52 437.64, 864.83 436.52, 863.29 435.37 C 861.76 434.22, 860.47 433.59, 857.99 433.07 C 855.51 432.55, 853.92 432.29, 850.91 432.76 C 847.89 433.23, 846.23 433.91, 842.91 435.43 C 839.59 436.95, 837.87 437.99, 834.30 440.37 C 830.72 442.74, 828.67 444.21, 825.03 447.32 C 821.39 450.43, 819.39 452.40, 816.08 455.91 C 812.76 459.42, 811.17 461.42, 808.46 464.89 C 805.75 468.36, 804.11 470.17, 802.52 473.26 C 800.93 476.35, 800.41 478.14, 800.50 480.35 C 800.59 482.56, 801.61 483.61, 802.99 484.31 C 804.37 485.01, 805.68 484.92, 807.41 483.85 C 809.15 482.78, 810.05 481.40, 811.66 478.97 C 813.28 476.54, 813.80 474.61, 815.50 471.70 C 817.21 468.80, 818.32 467.27, 820.17 464.44 C 822.02 461.61, 823.58 460.12, 824.75 457.55 C 825.92 454.99, 825.89 453.50, 826.01 451.61 C 826.13 449.71, 826.05 449.03, 825.36 448.07 C 824.67 447.12, 823.71 446.72, 822.55 446.83"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[5],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 878.68,476.78 C 879.71 477.59, 880.70 477.92, 883.13 477.81 C 885.57 477.69, 887.25 477.24, 890.85 476.20 C 894.44 475.16, 896.86 474.21, 901.12 472.60 C 905.39 470.99, 907.88 470.03, 912.19 468.16 C 916.49 466.29, 918.74 465.08, 922.64 463.26 C 926.54 461.44, 928.59 460.82, 931.68 459.06 C 934.77 457.31, 936.37 456.54, 938.08 454.49 C 939.79 452.44, 940.32 451.02, 940.23 448.83 C 940.13 446.63, 939.61 445.04, 937.61 443.50 C 935.62 441.96, 933.87 441.21, 930.26 441.14 C 926.64 441.06, 924.27 441.85, 919.54 443.12 C 914.81 444.39, 911.92 445.41, 906.61 447.50 C 901.29 449.59, 898.15 450.95, 892.97 453.55 C 887.78 456.15, 884.96 457.63, 880.68 460.50 C 876.39 463.37, 874.36 464.88, 871.53 467.91 C 868.70 470.93, 867.45 472.49, 866.53 475.62 C 865.60 478.75, 865.76 480.65, 866.90 483.56 C 868.04 486.47, 869.26 488.16, 872.24 490.16 C 875.21 492.15, 877.47 492.56, 881.79 493.53 C 886.11 494.51, 888.55 494.75, 893.85 495.03 C 899.14 495.32, 902.78 495.14, 908.26 494.94 C 913.74 494.75, 916.86 494.58, 921.25 494.05 C 925.64 493.51, 928.47 493.23, 930.19 492.27 C 931.92 491.31, 931.75 489.84, 929.88 489.25 C 928.02 488.66, 925.24 489.17, 920.88 489.31 C 916.53 489.46, 913.45 489.86, 908.12 489.97 C 902.78 490.07, 899.18 490.29, 894.21 489.85 C 889.25 489.41, 886.95 488.86, 883.29 487.76 C 879.63 486.66, 878.13 485.68, 875.92 484.37 C 873.71 483.06, 872.98 482.62, 872.23 481.22 C 871.48 479.82, 871.53 479.33, 872.18 477.37 C 872.82 475.41, 873.24 474.05, 875.47 471.44 C 877.70 468.83, 879.42 467.10, 883.32 464.33 C 887.21 461.55, 889.97 460.02, 894.96 457.57 C 899.95 455.12, 903.11 453.80, 908.27 452.08 C 913.44 450.35, 916.38 449.61, 920.77 448.95 C 925.16 448.29, 927.34 448.83, 930.22 448.78 C 933.10 448.74, 933.99 448.78, 935.19 448.72 C 936.39 448.66, 936.50 448.27, 936.21 448.50 C 935.92 448.72, 935.30 448.84, 933.74 449.85 C 932.18 450.86, 931.13 451.87, 928.42 453.55 C 925.70 455.23, 923.85 456.34, 920.17 458.25 C 916.50 460.15, 914.25 461.37, 910.05 463.06 C 905.85 464.75, 903.39 465.51, 899.17 466.71 C 894.96 467.91, 892.51 468.25, 888.99 469.07 C 885.46 469.88, 883.75 469.84, 881.55 470.78 C 879.34 471.71, 878.52 472.53, 877.95 473.73 C 877.37 474.93, 877.64 475.96, 878.68 476.78"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[6],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 1006.45,450.72 C 1006.13 449.49, 1005.31 448.63, 1003.57 447.71 C 1001.83 446.80, 1000.61 446.16, 997.76 446.16 C 994.90 446.15, 992.87 446.49, 989.30 447.66 C 985.73 448.84, 983.83 449.98, 979.89 452.04 C 975.95 454.10, 973.67 455.34, 969.59 457.96 C 965.51 460.58, 963.19 462.18, 959.49 465.13 C 955.78 468.08, 953.86 469.69, 951.09 472.70 C 948.32 475.72, 946.74 477.19, 945.63 480.21 C 944.53 483.23, 944.59 485.10, 945.58 487.80 C 946.58 490.50, 947.76 492.18, 950.62 493.72 C 953.48 495.26, 955.70 495.27, 959.87 495.52 C 964.03 495.78, 966.34 495.56, 971.43 495.00 C 976.52 494.44, 979.56 493.94, 985.32 492.73 C 991.08 491.51, 994.31 490.68, 1000.23 488.94 C 1006.16 487.20, 1009.72 485.92, 1014.93 484.03 C 1020.14 482.13, 1022.72 481.22, 1026.28 479.47 C 1029.84 477.73, 1031.67 476.61, 1032.73 475.30 C 1033.79 474.00, 1033.24 472.94, 1031.59 472.95 C 1029.94 472.96, 1028.12 473.95, 1024.48 475.33 C 1020.84 476.72, 1018.48 477.96, 1013.40 479.88 C 1008.31 481.79, 1004.83 483.22, 999.05 484.91 C 993.27 486.61, 990.08 487.40, 984.48 488.36 C 978.88 489.33, 975.85 489.60, 971.05 489.75 C 966.25 489.91, 964.00 489.62, 960.48 489.13 C 956.97 488.65, 955.50 487.96, 953.47 487.32 C 951.44 486.69, 950.73 486.88, 950.34 485.97 C 949.95 485.06, 950.48 484.64, 951.51 482.77 C 952.54 480.89, 953.22 479.28, 955.49 476.59 C 957.77 473.91, 959.49 472.12, 962.88 469.32 C 966.28 466.53, 968.55 464.94, 972.47 462.60 C 976.39 460.26, 978.74 459.13, 982.48 457.62 C 986.22 456.11, 988.09 455.58, 991.18 455.06 C 994.28 454.54, 995.76 455.13, 997.95 455.01 C 1000.14 454.89, 1000.68 454.69, 1002.12 454.46 C 1003.57 454.23, 1004.30 454.61, 1005.16 453.87 C 1006.03 453.12, 1006.77 451.95, 1006.45 450.72"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[7],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 1086.17,395.33 C 1085.12 394.99, 1084.36 394.85, 1082.71 395.82 C 1081.05 396.78, 1079.94 397.50, 1077.92 400.15 C 1075.90 402.80, 1075.05 404.96, 1072.60 409.05 C 1070.16 413.14, 1068.69 415.81, 1065.70 420.61 C 1062.71 425.41, 1060.79 428.08, 1057.67 433.04 C 1054.56 438.01, 1053.01 440.68, 1050.12 445.42 C 1047.23 450.15, 1045.70 452.51, 1043.20 456.70 C 1040.71 460.90, 1039.60 462.94, 1037.63 466.40 C 1035.67 469.86, 1034.37 471.24, 1033.39 473.99 C 1032.41 476.73, 1032.48 478.09, 1032.74 480.14 C 1033.00 482.19, 1033.66 483.09, 1034.70 484.25 C 1035.75 485.41, 1036.85 485.85, 1037.96 485.94 C 1039.07 486.04, 1039.96 485.62, 1040.26 484.73 C 1040.56 483.85, 1039.86 482.23, 1039.47 481.51 C 1039.09 480.80, 1038.59 481.15, 1038.32 481.14 C 1038.04 481.14, 1038.15 481.67, 1038.10 481.48 C 1038.05 481.30, 1037.76 481.26, 1038.07 480.22 C 1038.39 479.19, 1038.77 478.58, 1039.65 476.30 C 1040.54 474.03, 1040.98 472.30, 1042.49 468.83 C 1044.00 465.36, 1044.95 463.19, 1047.20 458.95 C 1049.45 454.70, 1050.93 452.32, 1053.74 447.61 C 1056.56 442.89, 1058.10 440.23, 1061.29 435.36 C 1064.48 430.50, 1066.45 427.85, 1069.71 423.28 C 1072.96 418.70, 1074.63 416.11, 1077.55 412.49 C 1080.48 408.88, 1082.34 407.62, 1084.31 405.18 C 1086.29 402.75, 1086.71 401.87, 1087.45 400.33 C 1088.18 398.78, 1088.23 398.48, 1087.97 397.48 C 1087.72 396.48, 1087.23 395.66, 1086.17 395.33"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[8],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 1094.29,438.80 C 1093.12 437.93, 1091.63 437.38, 1088.97 437.69 C 1086.31 438.01, 1084.55 438.78, 1081.00 440.37 C 1077.46 441.96, 1075.09 443.37, 1071.25 445.64 C 1067.41 447.92, 1065.29 449.43, 1061.80 451.77 C 1058.30 454.10, 1056.32 455.03, 1053.77 457.33 C 1051.21 459.63, 1050.01 460.81, 1049.03 463.26 C 1048.05 465.72, 1047.99 467.30, 1048.89 469.61 C 1049.80 471.92, 1050.91 473.43, 1053.55 474.83 C 1056.20 476.23, 1058.21 476.32, 1062.13 476.60 C 1066.05 476.87, 1068.40 476.51, 1073.16 476.23 C 1077.92 475.94, 1080.70 475.68, 1085.94 475.17 C 1091.19 474.66, 1094.54 474.20, 1099.38 473.68 C 1104.21 473.16, 1106.65 473.18, 1110.10 472.58 C 1113.55 471.98, 1115.38 471.57, 1116.64 470.67 C 1117.90 469.76, 1117.81 468.71, 1116.40 468.05 C 1114.98 467.40, 1113.10 467.32, 1109.59 467.41 C 1106.07 467.50, 1103.63 467.96, 1098.81 468.49 C 1093.99 469.02, 1090.65 469.67, 1085.50 470.07 C 1080.35 470.47, 1077.57 470.60, 1073.05 470.49 C 1068.53 470.38, 1066.27 470.04, 1062.91 469.52 C 1059.55 469.00, 1058.24 468.31, 1056.27 467.90 C 1054.29 467.49, 1053.52 467.83, 1053.05 467.47 C 1052.58 467.11, 1052.88 467.10, 1053.91 466.10 C 1054.94 465.11, 1055.93 464.34, 1058.20 462.50 C 1060.48 460.66, 1062.04 459.15, 1065.29 456.90 C 1068.53 454.66, 1070.71 453.26, 1074.42 451.29 C 1078.14 449.32, 1080.56 448.37, 1083.84 447.05 C 1087.13 445.73, 1088.67 445.70, 1090.87 444.70 C 1093.06 443.70, 1094.14 443.23, 1094.83 442.05 C 1095.51 440.87, 1095.46 439.67, 1094.29 438.80"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[9],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 1156.71,447.72 C 1155.54 447.67, 1154.96 447.97, 1153.46 449.08 C 1151.96 450.18, 1150.83 450.91, 1149.21 453.26 C 1147.59 455.61, 1146.99 457.62, 1145.36 460.83 C 1143.73 464.04, 1142.79 466.08, 1141.07 469.30 C 1139.35 472.53, 1138.15 474.08, 1136.77 476.97 C 1135.40 479.86, 1134.71 481.47, 1134.19 483.77 C 1133.68 486.06, 1133.98 487.06, 1134.19 488.46 C 1134.39 489.85, 1134.78 490.14, 1135.22 490.74 C 1135.66 491.34, 1135.95 491.37, 1136.38 491.45 C 1136.81 491.53, 1137.00 491.27, 1137.36 491.14 C 1137.73 491.01, 1137.74 491.17, 1138.20 490.79 C 1138.66 490.41, 1139.11 490.21, 1139.65 489.24 C 1140.19 488.27, 1140.12 487.72, 1140.92 485.93 C 1141.71 484.14, 1142.33 482.93, 1143.64 480.31 C 1144.94 477.68, 1145.72 475.88, 1147.46 472.81 C 1149.20 469.74, 1150.33 467.83, 1152.31 464.96 C 1154.29 462.09, 1155.94 460.87, 1157.36 458.45 C 1158.78 456.04, 1159.02 454.71, 1159.40 452.89 C 1159.78 451.07, 1159.81 450.38, 1159.27 449.35 C 1158.73 448.31, 1157.87 447.78, 1156.71 447.72"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[10],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
        <motion.path
          d="M 1177.43,400.25 C 1178.53 400.03, 1178.76 399.45, 1178.56 399.82 C 1178.36 400.19, 1177.29 401.17, 1176.42 402.08 C 1175.55 402.99, 1174.47 404.29, 1174.22 404.37 C 1173.97 404.45, 1174.34 403.77, 1175.15 402.49 C 1175.97 401.20, 1177.79 399.45, 1178.29 397.94 C 1178.78 396.44, 1178.51 395.12, 1177.64 394.97 C 1176.77 394.83, 1175.13 396.16, 1173.95 397.23 C 1172.78 398.29, 1171.95 399.56, 1171.78 400.30 C 1171.60 401.04, 1171.94 400.94, 1173.07 400.93 C 1174.20 400.92, 1176.33 400.47, 1177.43 400.25"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengthMotion[11],
          }}
          transition={transition}
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
        />
      </motion.svg>
    </Section>
  );
};
