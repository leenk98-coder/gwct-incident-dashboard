// index.html 에 내장할 Tailwind CSS 를 다시 빌드할 때 쓰는 설정.
//   npx tailwindcss@3.4.17 -c tailwind.config.js -i input.css -o out.css --minify
// 결과(out.css)를 index.html 의 "Tailwind CSS ..." 주석 아래 <style> 블록에 넣는다.
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: { extend: {
    colors: {
      border:"hsl(var(--border))", input:"hsl(var(--input))", ring:"hsl(var(--ring))",
      background:"hsl(var(--background))", foreground:"hsl(var(--foreground))",
      primary:{DEFAULT:"hsl(var(--primary))", foreground:"hsl(var(--primary-foreground))"},
      secondary:{DEFAULT:"hsl(var(--secondary))", foreground:"hsl(var(--secondary-foreground))"},
      muted:{DEFAULT:"hsl(var(--muted))", foreground:"hsl(var(--muted-foreground))"},
      accent:{DEFAULT:"hsl(var(--accent))", foreground:"hsl(var(--accent-foreground))"},
      card:{DEFAULT:"hsl(var(--card))", foreground:"hsl(var(--card-foreground))"},
      destructive:{DEFAULT:"hsl(var(--destructive))", foreground:"hsl(var(--destructive-foreground))"},
      ok:{DEFAULT:"hsl(var(--ok))", foreground:"hsl(var(--ok-foreground))"},
      warn:{DEFAULT:"hsl(var(--warn))", foreground:"hsl(var(--warn-foreground))"},
    },
    fontFamily:{
      sans:['"IBM Plex Sans KR"','system-ui','-apple-system','"Segoe UI"','sans-serif'],
      mono:['"IBM Plex Mono"','ui-monospace','monospace'],
    },
    borderRadius:{ sm:"0.25rem", DEFAULT:"0.375rem", md:"0.375rem", lg:"0.5rem", xl:"0.75rem" },
  }}
};
