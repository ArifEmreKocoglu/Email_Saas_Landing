"use client";

import { useEffect, useRef } from "react";

export default function MailFlowBackground() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const tagList = [
      "Marketing",
      "Spam",
      "Personal",
      "Finance",
      "Orders",
      "Support",
      "Billing",
      "Promotions",
      "HR",
      "Updates",
      "Clients",
      "Team",
      "Invoices",
      "AI Categorized",
      "Important"
    ];

    const colors = [
      "#8B5CF6",
      "#06B6D4",
      "#F43F5E",
      "#F59E0B",
      "#10B981",
      "#6366F1"
    ];

    const createTag = () => {
      if (!container) return;

      const currentTags = container.querySelectorAll(".mail-tag");
      if (currentTags.length > 18) return;

      const allIcons = container.querySelectorAll(".gmail-icon");
      const icons = Array.prototype.filter.call(allIcons, function (icon) {
        return icon.offsetWidth > 0 && icon.offsetHeight > 0;
      });

      const chip = document.createElement("div");

      let startX = 0;
      let startY = 0;

      const containerRect = container.getBoundingClientRect();

      if (icons.length > 0) {
        const icon = icons[Math.floor(Math.random() * icons.length)];
        const iconRect = icon.getBoundingClientRect();
        const jitterX = Math.random() * 10 - 5;
        const jitterY = Math.random() * 10;
        startX =
          iconRect.left +
          iconRect.width / 2 -
          containerRect.left +
          jitterX;
        startY =
          iconRect.bottom -
          containerRect.top +
          12 +
          jitterY;
      } else {
        startX = containerRect.width * (0.3 + Math.random() * 0.4);
        startY = containerRect.height * 0.18;
      }

      const color = colors[Math.floor(Math.random() * colors.length)];
      const tagText = tagList[Math.floor(Math.random() * tagList.length)];

      const viewportHeight =
        typeof window !== "undefined"
          ? window.innerHeight
          : containerRect.height || 800;

      const travelY = viewportHeight * (0.6 + Math.random() * 0.4);
      const driftX = Math.random() * 80 - 40;
      const duration = 26000 + Math.random() * 9000;

      chip.className = "mail-tag";
      chip.style.position = "absolute";
      chip.style.left = startX + "px";
      chip.style.top = startY + "px";
      chip.style.padding = "6px 14px 6px 10px";
      chip.style.borderRadius = "9999px";
      chip.style.fontSize = "12px";
      chip.style.fontWeight = "600";
      chip.style.background =
        "linear-gradient(135deg, rgba(15,23,42,0.96), rgba(15,23,42,0.92))";
      chip.style.color = "#F9FAFB";
      chip.style.opacity = "0";
      chip.style.boxShadow = "0 10px 32px rgba(15,23,42,0.55)";
      chip.style.whiteSpace = "nowrap";
      chip.style.letterSpacing = "0.03em";
      chip.style.border = "1px solid rgba(148,163,184,0.65)";
      chip.style.display = "inline-flex";
      chip.style.alignItems = "center";
      chip.style.backdropFilter = "blur(5px)";
      chip.style.transform = "translateY(-16px) scale(0.94)";

      const dot = document.createElement("span");
      dot.style.display = "inline-block";
      dot.style.width = "7px";
      dot.style.height = "7px";
      dot.style.borderRadius = "9999px";
      dot.style.marginRight = "8px";
      dot.style.background = color;
      dot.style.boxShadow = "0 0 0 2px rgba(15,23,42,0.9)";

      const text = document.createElement("span");
      text.textContent = tagText;

      chip.appendChild(dot);
      chip.appendChild(text);

      container.appendChild(chip);

      const sideFactor = Math.random() < 0.5 ? -1 : 1;
      const midDrift = driftX * 0.6 * sideFactor;

      chip.animate(
        [
          {
            transform: "translateY(-16px) scale(0.94)",
            opacity: 0
          },
          {
            transform: "translateY(0px) scale(1)",
            opacity: 0.95,
            offset: 0.2
          },
          {
            transform:
              "translateY(" +
              travelY * 0.5 +
              "px) translateX(" +
              midDrift +
              "px) scale(1.03)",
            opacity: 1,
            offset: 0.7
          },
          {
            transform:
              "translateY(" +
              travelY +
              "px) translateX(" +
              driftX +
              "px) scale(1.02)",
            opacity: 0
          }
        ],
        {
          duration,
          easing: "cubic-bezier(0.25, 0.9, 0.3, 1)",
          fill: "forwards"
        }
      );

      const lifespan = duration + 2200;

      setTimeout(() => {
        if (container && container.contains(chip)) {
          container.removeChild(chip);
        }
      }, lifespan);
    };

    const baseInterval = 2200;
    const interval = setInterval(createTag, baseInterval);

    for (let i = 0; i < 4; i += 1) {
      setTimeout(() => {
        createTag();
      }, i * 260);
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  const gmailIcons = [
    {
      left: "30%",
      top: "3.5rem",
      size: "w-8 h-8 md:w-10 md:h-10",
      delay: "0s",
      duration: "10.5s",
      drift: "16px"
    },
    {
      left: "60%",
      top: "3.5rem",
      size: "w-8 h-8 md:w-10 md:h-10",
      delay: "1.2s",
      duration: "11.2s",
      drift: "-16px"
    },
    {
      left: "45%",
      top: "5rem",
      size: "hidden md:block md:w-9 md:h-9",
      delay: "0.6s",
      duration: "12.4s",
      drift: "20px"
    }
  ];

  return (
    <div
      ref={ref}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
    >
      {gmailIcons.map((icon, index) => (
        <img
          key={index}
          src="/gmail.svg"
          alt="Inbox"
          className={`gmail-icon absolute ${icon.size}`}
          style={{
            left: icon.left,
            top: icon.top,
            opacity: 0.9,
            animationDuration: icon.duration,
            animationDelay: icon.delay,
            "--float-x": icon.drift
          }}
          draggable="false"
        />
      ))}
      <style jsx>{`
        .gmail-icon {
          animation-name: floatIconSoft;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          transform-origin: center;
          filter: drop-shadow(0 8px 22px rgba(15, 23, 42, 0.55));
        }
        @keyframes floatIconSoft {
          0% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate3d(calc(var(--float-x) * 0.35), 4px, 0)
              scale(1.02) rotate(-2deg);
          }
          50% {
            transform: translate3d(calc(var(--float-x) * -0.2), 10px, 0)
              scale(1.04) rotate(2deg);
          }
          75% {
            transform: translate3d(calc(var(--float-x) * 0.2), 5px, 0)
              scale(1.02) rotate(-1deg);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}