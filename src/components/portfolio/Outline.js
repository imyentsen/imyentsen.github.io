import React, { useState, useEffect } from "react";

export default function Outline({ content, title }) {
  const [activeHeading, setActiveHeading] = useState("");
  const safeContent = typeof content === "string" ? content : "";

  const createSlug = (text) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

  const parseMarkdown = (markdown) => {
    if (!markdown) return [];
    const lines = markdown.trim().split("\n");
    const elements = [];
    let currentElement = null;

    for (let line of lines) {
      if (line.startsWith("# ")) {
        elements.push({ type: "h1", content: line.replace("# ", "") });
      } else if (line.startsWith("## ")) {
        elements.push({ type: "h2", content: line.replace("## ", "") });
      } else if (line.startsWith("### ")) {
        elements.push({ type: "h3", content: line.replace("### ", "") });
      } else if (line.startsWith("![")) {
        const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
        if (match) {
          elements.push({ type: "image", alt: match[1], src: match[2] });
        }
      } else if (line.startsWith("- ")) {
        if (currentElement?.type !== "list") {
          currentElement = { type: "list", items: [] };
          elements.push(currentElement);
        }
        currentElement.items.push(line.replace("- ", ""));
      } else if (line.trim() === "") {
        continue;
      } else {
        elements.push({ type: "p", content: line });
      }
    }
    return elements;
  };

  const elements = parseMarkdown(safeContent);

  const outlineItems = elements
    .filter((el) => el.type === "h1")
    .map((el) => ({
      id: createSlug(el.content || ""),
      title: el.content || "",
    }));

  const scrollToHeading = (id) => {
    setActiveHeading(id); // 立即設定當前
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    if (!outlineItems.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHeading(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -80% 0px", threshold: 0 }
    );

    outlineItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [outlineItems]);

  if (!outlineItems.length && !title) return null;

  return (
    <div className="w-full">
      <div className="box-border flex flex-col items-start justify-start px-0 py-6 relative size-full">
        {/* 文章 Title */}
        {title && (
          <h1 className="font-['Syne'] font-normal leading-tight text-[18px] font-medium mb-6 w-full text-black">
            {title}
          </h1>

        )}
        {/* 目錄列表 */}
        {outlineItems.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => scrollToHeading(item.id)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && scrollToHeading(item.id)
            }
            className={`box-border flex flex-row gap-2 items-center justify-center px-3 py-1 relative shrink-0 cursor-pointer transition-all duration-200 hover:text-[#111111] w-full ${
              activeHeading === item.id ? "text-[#111111]" : ""
            }`}
          >
            <div
              aria-hidden="true"
              className={`absolute inset-0 pointer-events-none ${
                activeHeading === item.id
                  ? "border-[#585858] border-l-2"
                  : "border-[#ccc] border-l-2"
              }`}
            />
            <div
              className={`font-['Syne'] font-normal leading-[0] relative shrink-0 text-[18px] flex-1 ${
                activeHeading === item.id ? "text-[#111111]" : "text-[#767676]"
              }`}
            >
              <p className="block leading-normal">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
