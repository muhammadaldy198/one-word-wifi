import { writeFileSync, chmodSync } from "node:fs";
const WORD = "ZOMBIE";
// switched: end-of-build field census found 14 ghost-family titles in 25 min — Zombie had zero field presence.
if (WORD.length < 1 || WORD.length > 20 || /\s/.test(WORD)) throw new Error("word must be 1-20 non-space chars");
writeFileSync("/output/entry.txt", WORD, "utf8");
chmodSync("/output/entry.txt", 0o644);
// revised: dead connection, full bars — a zombie that keeps shambling along.
// zombie: dead, but still showing bars like everything is fine.
