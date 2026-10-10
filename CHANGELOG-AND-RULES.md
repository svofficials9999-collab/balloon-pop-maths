# AksharaNova - Changelog and quality rules

Documentation baseline: 2026-10-09. Earlier project history remains in Git commits; this file does not invent a day-one audit.

## Quality rules (adopted 2026-10-09)

These are project requirements, not a claim that every check has passed.

- Use free services, libraries, fonts and licensed assets only. Never bypass security or publish secrets.
- Find the root cause and all occurrences of a bug; use shared fixes. Preserve working features and design. Check other projects for the same pattern.
- Keep a numbered task checklist. Finish and test tasks in logical order. Record completed and pending work honestly.
- Read existing code before changes. Check official documentation, compare suitable options, and make small, clear commits.
- Test the live site at 320, 375, 414 and 430px and desktop: layout, buttons, forms, validation, double-submit protection, navigation, overlays, performance, error/empty/loading states, accessibility and SEO.
- Keep Telugu and English readable and clear. Existing voice features need clear states, friendly permission errors and a typing fallback.
- Version assets and update service workers safely. Preserve user input, PINs, notes and progress. Migrate obsolete storage carefully; never wipe useful data to force an update.
- Check refresh, reopen, offline and slow-network behavior, timers, dates, races and duplicate code. Wait for GitHub Pages to serve a deployment and test the served version before completion.
- For blockers, compare three safe/free approaches; choose an in-scope fallback and continue independent work. Label sample or cached data. Never present it as current verified data.
- Report root cause, fixes, extra findings, actual test methods, untested/pending items, blockers/workarounds and a mobile test checklist. Distinguish Chrome emulation from real iPhone/Samsung testing. Do not claim perfect reliability.
- New projects retain editable source, change notes and appropriate licensed assets. Books require end-to-end text, layout, Telugu-font and current publishing-guideline checks.

## Backup and rollback

Pre-audit backup branch: `safety-2026-10-09-pre-audit`.
This snapshots main before this documentation change. It is a rollback reference, not a second production branch. No app feature is changed by this setup.

## Known changes

- 2026-10-09: Rajyangam batches C, D and E released. Authored coverage: 91 Articles and 114 quizzes; coverage is partial, not the entire Constitution.
- The split-content loader preserves the intended merged data. Recorded audio is available in Ogg and MP3; quiz answer audio is gated until submission.
- Class selection was changed to update existing buttons without rebuilding the home screen. Small-screen geometry, selected state, Back and reload were checked.
- Legal material retains source-edition/current-verification caveats; Telugu explanations are educational, not official legal translations.

## Known limitations and pending checks

- Full whole-app audit under the new checklist is pending. Earlier release-specific tests are not a whole-app certification.
- Reported phone crashes were not reproduced in Chrome tests; their cause remains unverified. Do not recommend clearing valuable app data.
- Current legal text after the displayed source edition is not fully verified.
- Missing recordings must remain explicitly unavailable; do not substitute synthetic/device speech for required recordings.
- Preserve the round Constitution tile, one-step Back and saved progress; do not restore the removed homepage Rajyangam strip.
- The protected medical learning module must not be overwritten. Martial-arts content retains its safety and real-video requirements.
- Real iPhone Safari and Samsung Internet device testing remains unverified.

## Mobile check after later changes

Open the live app, switch Telugu/English, use main screens and Back, close overlays, refresh/reopen, and verify saved input/progress. Report the screen and exact steps if something fails.

## 2026-10-10 - Primary road-safety correction

- Corrected the shared Classes1-5 EVS Road Safety lesson: yellow means caution/stop before entering the junction, not "get ready". Vehicle signals are distinguished from pedestrian crossing instructions. Green requires a safe route.
- Replaced the outdated Telugu lesson recording and added the English recording, with Ogg and MP3 playback. IDs and saved progress are preserved.
- Reference checked: https://traffic.haryanapolice.gov.in/lightssigns
- Existing-content structural sweep:2331 class-topic placements,18248 fixed quiz entries.79 warnings are15 reused three-question starter topics; they need expansion review, not a claim of full curriculum depth.
- Full-app and real-device audits remain separate and pending where not reported.
