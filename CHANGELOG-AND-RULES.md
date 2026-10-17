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


## 2026-10-16 - Daily GK editorial refresh
- Added dated Oct16 edition:7 bilingual cards(4 current affairs,3 static GK),2 original readings,10 MCQs;latest.json matches;Oct15 moved to archive. GK app app.js?v101,cache13.
- Scope honesty:INSPIRE exhibition Oct12-14 with Oct14 ceremony/Oct15 report,not new registration;ESTIC curtain-raiser Oct15 with conclave Oct27-29 ahead;Rural Women observance Oct15;UN Women statement dated Oct13. NSP renewal dates rechecked Oct16(student Oct31,institute Nov15,L2 Nov30);scholarship card is planning context,not eligibility advice. VVM earlier Oct15 deadline neither promoted open nor confirmed closed;no fresh extension verified.
- 58 Listen scripts published for the recording pipeline;recordings pending with truthful inline status;no substitute device speech. Telugu editorial review recommended.
- Scoped live Chrome QA and pixel checks reported separately;no physical-device or full-curriculum certification.

## 2026-10-11 - Daily GK editorial refresh
- Preserved existing learning/audio implementation, PIN and saved progress. Added dated Oct11 edition:7 bilingual cards,2 original readings,10 MCQs. Selected news/static GK, not full news coverage.
- Source/scope check: IIT teaching start date unspecified; WHO awareness not diagnosis; NSP renewal deadline31Oct applies only to named eligible renewal applicants, not all scholarships. Verification deadlines separate; cutoff time unspecified.
- Added Oct10 archive access, kept Oct9/Oct8. GK app?v96, cache8; latest and dated edition match.
-58 Listen scripts published for recording pipeline; actual recordings remain pending, truthful inline status retained. No substitute device speech.
-Scoped mobile emulation/live testing reported separately; real-device and whole-app semantic audit not certified by this release.


## 2026-10-11 - v4.15.143-dayNightAudio
- Existing sharedClasses1-4Day and Night corrected:Earth rotation,sunlight-side,daytimeMoon/reflection;no always-visible-nightMoon claim. SameID/progress retained;6 bilingual MCQs,notnewtopic. NASA sources checked.
-58Oct11GK and2DayNight recordings (60 IDs) added via40newOgg/MP3 shards;oneoldDayNight mapping replaced,59newIDs. Allothermapentriesretained. Playback engine unchanged,Sadaltager recordings only.
-Clip transcripts inspected,format-reworded quiz options retain answers. Actualliveplayback/visual test scope reported separately;realdevice/fullcurriculum audit not claimed.


## 2026-10-12 - Daily GK editorial refresh
-7 bilingual dated cards,2 original readings,10 MCQs. Selected coverage,not all news. OUbiogas ongoing/slurryexploratory;roboticsOct10event/Oct11report/globalfinalJune2027;NSPrenewal31Oct/verification15Nov30Nov,currentnotice rechecked. Not universal eligibility.
-AddedOct11archive,preservedOct10/9/8 and allrecordedplayback/progress/PIN. GKapp?v97/cache9.
-58Listen scripts pending freshrecordings;truthfulinlinependingretained,no devicevoice. Oct11recordingsremainavailableviaarchive.
-ScopedliveChromeQAandpixelsreportedseparately;no physicaldevice/fullcurriculum certification.


## 2026-10-12 - Compulsory name and mobile registration
-User11:11:51voice-noteinstructionverified.Name is now required (blank/whitespace blocked) beforeentry;mobile/PIN rulespreserved,notphoneownership verification. Fingerprintcannotbypassmissingregisteredname.
-Name+mobile mapped to existingprivateGoogleForm/Sheet;MECHONICnewrequiredShortanswerNameentry205745422,existingMobileentry1612654723unchanged. Oldrows/PIN/progressnotdeleted;oldnamelessqueuedrowswaitfor matchingname.
-Prepared/liveQA usesinterceptedFormPOSTs,notfakeleads. ActualSheetrowarrivalnotclaimeduntilverified. Physicalphone/fingerprintscan notclaimed.


## 2026-10-13 - Daily GK editorial refresh
-7 bilingual cards,2originalreadings,10MCQs. Dated/sourcecheckedselectedcoverage,notfullnewscoverage. Meetingdateabsent;educationcollaborationnotadmissioneligibility/fee/deadlineverification;economicprizeexactnamepreserved;NSPrenewalonlyscope.
-Oct12archiveappend,priorarchives/progress/audio preserved. GKapp?v98/cache10;sharedlock?v144requirednameversionrefreshed.
-58Listen scripts pendingSadaltagerrecordings,inlinependingstatushonest,no devicevoice. ScopedliveQA/visualevidence reportedseparately;no physicaldevice/fullcurriculumapprovalclaim.


## 2026-10-13 - Existing EVS quiz depth
- Plants Around Us, Weather, Healthy and Clean Habits: 3 to 7 bilingual questions each, same IDs/classes 1-4. Added roots/stem/leaves, weather measurement/forecast uncertainty, handwashing duration/toilet/elbow/drying checks.
- Lesson narration and Sadaltager recordings unchanged; no new topics or audio claim. Shared existing-topic change, preserve progress/PIN/name gate, med.js untouched.
- v4.15.145-evsQuizDepth. Scoped visual/live QA and structural warning totals reported separately, not whole-curriculum or Telugu teacher certification.


## 2026-10-14 - Daily GK selected coverage
-7bilingualcards,2readings,10MCQs,58Listen scripts. VVMIndia deadline NOT VERIFIED today;deadline_date null,reportedOct15dateonly. No VVMquiz. Otherselectedreport/staticGKsourcechecks,notallcardsverified.
-Oct13archiveappended;olderarchives/progress/audio retained. GKapp?v99/cache11. RecordingspendingSadaltager,inlinependingstatus.


## 2026-10-14 03:33 IST - VVM India verification correction
- Official India dynamic dates page now verified: registration extended up to October15,2026;GCCOctober31separate. CardTE/EN and2Listen scriptsupdated;deadline_dateOct15,closingtimenotsupplied,noVVMquiz. Earlierunverifiedlabelreplacedwithsource/checktime. Othercontentunchanged.


## 2026-10-14 - Lesson Listen loading/error feedback
- Shared lesson Listen now immediately shows inline loading; indexfetch aborts after12s and failedindex retries on nexttap; shardloadtimeout/error visibleinline. No deviceTTSfallback,existingSadaltagerclips retained.
- v4.15.146-audioFeedback;no med.js/content/branding/progress/PIN changes. QA DOMaudioabsence is notproof: clips use detached newAudio in window.__aud. Scopedactualplaybackandfailuretests reportedseparately.


## 2026-10-15 - Daily GK
8 cards,2 readings,10 MCQs,60 recorded-voice scripts; Oct14 archived,older topics/progress/audio preserved. VVM official India page rendered02:38IST: registration extendedup toOct15, no cutoff stated. Prior extensions and GCC distinction visible; no VVMquiz. app100/cache12. Recordings pending, do not claim Listen complete.


## 2026-10-15 - Existing EVS practice depth
Materials,Birds,SaveWater expanded3to7bilingualquestions each;12newquestions across classes1-5(52questionplacements). ExistingIDs/lessons/narration/recordings/progress/PIN unchanged; med.js untouched. v4.15.147-evsProperties. Sources: EPAWaterSenseKids https://www.epa.gov/watersense/watersense-kids ;CornellK12 https://www.birds.cornell.edu/k12/feathered-friends/ ;RSCmaterials https://edu.rsc.org/primary-science/materials-cards/2360.article ;BBC https://www.bbc.co.uk/bitesize/articles/z9jx2v4 . Addedproperties/object-material/nestexceptions/leakadulthelp practice. Nofullcurriculum/teacher certification claim.

2026-10-17 GK daily edition 2026-10-17 published ~00:50 IST: 7 cards (Telangana El Nino/water appeal per NDTV Oct 16; BHASHINI-Manipur MoU per PIB Oct 15; World Food Day Oct 16 theme; Hyderabad T20I WI win, series 2-2 per Cricinfo; static: 22 scheduled languages, FAO facts; NSP renewal Oct 31 re-verified live at publish), 2 readings, 10 quiz. verified_at 2026-10-17T00:47+05:30. Archive +2026-10-16; index ?v=145; cache akn-gkdaily-14.

2026-10-17 GK daily edition 2026-10-17 second pass ~02:40 IST: added 2 verified cards (Hyderabad water/power conservation review per Deccan Chronicle Oct 16; Karela Lake 4,600-year monsoon study per DD News Oct 16, past-climate research not forecast) + 2 quiz (12 total), listen TSV 70 rows. No cards replaced/removed; sources tgreview, instudy added. verified_at 2026-10-17T02:36+05:30. Content-only change; sw network-first for JSON so no cache bump.

2026-10-17 GK daily edition 2026-10-17 guardian fix ~02:45 IST: reading 2 (series score) garbled Telugu sentence replaced with reviewed wording; listen TSV row 17 updated. verified_at 2026-10-17T02:42+05:30.

2026-10-18 GK daily edition 2026-10-18 published ~22:50 IST: 7 cards (Telangana: NPA Dikshant Parade officer-trainee count + Automated Testing Stations cost revision; India: IND-WI T20I series decider at Bengaluru Chinnaswamy (result pending at publish, decider framing kept, cid india_3 to avoid clash with static india_2 Dussehra card); static: 22 scheduled languages etc.; 2 readings, 12 quiz, listen TSV 66 rows). Archive +2026-10-17; index ?v=146; cache akn-gkdaily-15 incl. content/2026-10-18.json; sw asset pins aligned to v146.

2026-10-18 GK daily edition 2026-10-18 correction ~02:45 IST (revision 2): (1) IPS Dikshant Parade card + reading 1 corrected - parade marks completion of FIRST PHASE of basic training only (151 trainees = 135 IPS probationers + 16 foreign trainees from Nepal/Bhutan/Maldives, 37 women); "formally begin service" / "real officers" wording replaced (source added: Telangana Today tgnews3). (2) IND vs WI 5th T20I card rewritten - match abandoned due to rain after India 118/5 in 7.4 overs, no result, series drawn 2-2 (Cricbuzz). Quiz q1/q9/q10 questions/options/answer keys/explanations updated; listen TSV regenerated (66 rows). index ?v=147; cache akn-gkdaily-16; sw asset pins aligned to v147.
