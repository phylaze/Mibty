// Generates styles/tokens.css from docs/design-tokens.json.
// Run via `npm run tokens`. The generated file is committed so the
// runtime never depends on this script — but re-run it whenever tokens
// change so the CSS stays in sync.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");
const tokens = JSON.parse(readFileSync(resolve(root, "docs/design-tokens.json"), "utf8"));

const lines = [];
lines.push("/* Auto-generated from docs/design-tokens.json. Do not edit by hand. */");
lines.push("/* Run `npm run tokens` to regenerate. */");
lines.push("");
lines.push(":root {");

// Color
const flat = (prefix, obj) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = `${prefix}-${k}`.toLowerCase();
    if (v && typeof v === "object") flat(key, v);
    else lines.push(`  --${key}: ${v};`);
  }
};

flat("color", tokens.color);
flat("gradient", tokens.gradient);
flat("shadow", tokens.shadow);
flat("radius", tokens.radius);

for (const [k, v] of Object.entries(tokens.space)) {
  lines.push(`  --space-${k.replace(".", "_")}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.breakpoint)) {
  lines.push(`  --bp-${k}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.container)) {
  lines.push(`  --container-${k}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.z)) {
  lines.push(`  --z-${k}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.blur)) {
  lines.push(`  --blur-${k}: ${v};`);
}

// Motion
for (const [k, v] of Object.entries(tokens.motion.duration)) {
  lines.push(`  --dur-${k}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.motion.easing)) {
  lines.push(`  --ease-${k}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.motion.stagger)) {
  lines.push(`  --stagger-${k}: ${v};`);
}

// Font
for (const [k, v] of Object.entries(tokens.font.family)) {
  lines.push(`  --font-${k}: ${v};`);
}
for (const [k, v] of Object.entries(tokens.font.weight)) {
  lines.push(`  --weight-${k}: ${v};`);
}

// Typography scale → emit size + line-height + tracking + weight as separate vars
for (const [k, scale] of Object.entries(tokens.font.scale)) {
  const kebab = k.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  lines.push(`  --type-${kebab}-size: ${scale.size};`);
  lines.push(`  --type-${kebab}-leading: ${scale.lineHeight};`);
  lines.push(`  --type-${kebab}-tracking: ${scale.tracking};`);
  lines.push(`  --type-${kebab}-weight: ${scale.weight};`);
}

lines.push("}");
lines.push("");

const out = resolve(root, "styles/tokens.css");
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, lines.join("\n"));
console.log(`tokens → ${out}  (${lines.length} lines)`);
