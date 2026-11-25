// The Robot Apology: a two-line robot confession.
// Line 1 owns one specific mistake; line 2 says what was learned and what changes.
// Revision: comment wording tightened; entry text untouched.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I am sorry I watered the wrong plant, the fern you have kept alive for six years, and let it drown.\n" +
  "I have learned to check the label before the tap, and from now on I water only the plant whose name matches the tag.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
