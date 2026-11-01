# W1 language check: website #69 app-screenshot strings (hi, ar, pcm)

Source: `scripts/app-screenshots/seed/strings.json` (worktree web-69). Checker: Fable 5.1, 2026-10-31. Read only; no edit made.

## Corrections

One row per distinct value. The id column lists every id that carries the value.

| # | id | lang | current | corrected | reason |
|---|---|---|---|---|---|
| C1 | mock-prog-2 | hi | ताबास्की सूट – कुम्बा | बकरीद सूट – कुम्बा | A Hindi reader does not know "Tabaski". बकरीद is the same festival (Eid al-Adha). Same length. |
| C2 | mock-prog-9 | hi | बपतिस्मा पोशाक – न्दियाये | नामकरण पोशाक – न्दियाये | In Senegal "baptême" is the naming ceremony, not Christian baptism. बपतिस्मा is a rare, church-only word. नामकरण is the everyday word for a naming ceremony. |
| C3 | mock-ptn-12b | hi | फ़िटिंग 1 12 अप्रैल को हुई। कंधों पर कुछ सुधार बाकी हैं। | पहली फ़िटिंग 12 अप्रैल को हुई। कंधों पर कुछ सुधार बाकी हैं। | "1 12" puts two numbers side by side and reads as "112". पहली = first. |
| C4 | mock-meas-1a, 2a, 5b, 7a, 9a, 11a, 15a, 16a, 18b; mock-pm-2a, 4a, 5a, 12a | hi | बस्ट | छाती | French "poitrine" is unisex and the list has male customers. छाती is the word on every Hindi tailor's measurement slip, for men and women. बस्ट is a women's-wear loanword. |
| C5 | mock-meas-1c, 5d, 11c, 15c, 18d; mock-pm-5c, 12c | hi | कूल्हे | हिप | कूल्हे is correct but bookish. Tailors write हिप on the slip. Shorter, fits the card. (Keep कूल्हे if you prefer textbook Hindi; meaning is right.) |
| C6 | mock-group-3 | hi | पुरुष परिधान | पुरुषों के कपड़े | परिधान is literary. A tailor says पुरुषों के कपड़े or जेंट्स. |
| C7 | mock-contact-18 | hi | वेड | वाद | Senegalese "Wade" is pronounced "wahd" (as in Abdoulaye Wade). वेड reads as English "Wade" (weyd). Matches ar واد. |
| C8 | mock-prog-2 | ar | تايور تابَسكي – كومبا | تايور تابسكي – كومبا | Stray fatha on one letter only; the rest of the file has no vowel marks. |
| C9 | mock-prog-3, mock-contact-15 | ar | عائساتو | عيساتو | Sound-based: عائساتو reads "Aa'isatu" with a glottal stop that the name does not have. عيساتو reads "Issatu", closer to Aïssatou. |
| C10 | mock-ptn-3a | ar | ...بلون أبيض مائل للكسر... | ...بلون أبيض مكسور... | "Off-white" is أبيض مكسور in fashion and paint. مائل للكسر means "tending to break". |
| C11 | mock-meas-1c, 5d, 11c, 15c, 18d; mock-pm-5c, 12c | ar | الورك | الأرداف | Arabic measurement charts use صدر / خصر / أرداف. الورك is the anatomical hip joint, singular. |
| C12 | mock-contact-6 | ar | كاديااتو | كادياتو | Double alif is a typo. |
| C13 | mock-contact-14 | ar | ثيرنو | تيرنو | Sound-based: ث reads as English "th". The name has a t/ch sound ("tyerno"), so ت is closer. |
| C14 | mock-contact-17 | ar | مريما | مرياما | Sound-based: مريما reads "Marima" and drops a syllable. مرياما reads "Mariama". |
| C15 | mock-prog-7 | pcm | Big boubou – Ibrahima | Correct boubou – Ibrahima | "Big boubou" already means "grand boubou" (the garment) in mock-ptn-3a. "Grand standing" = premium. In Pidgin "correct" = top quality. "Premium boubou" also works. |

Counts: hi 7 rows (25 cells), ar 7 rows (14 cells), pcm 1 row (1 cell).

## Answers to the drafter's questions

- Q1: बकरीद. A Hindi reader does not know ताबास्की; बकरीद is the same festival. For ar keep تابسكي (known in Mauritanian and Senegalese Arabic); العيد is the fallback if you want every Arabic reader to understand.
- Q2: छाती. Unisex, the tailor's slip word, and matches French "poitrine". बस्ट is only for women's wear (C4).
- Q3: कूल्हे is correct Hindi. Tailors write हिप. Change for naturalness, not for meaning (C5).
- Q4: बाज़ीन रिश is fine. It is a product name; keep it.
- Q5: ट्रेन is fine. Indian bridal tailors use it as a loanword.
- Q6: बपतिस्मा is wrong for Senegal: it means Christian baptism and is rare. Use नामकरण (C2).
- Q7: फ़िटिंग is fine. It is the standard tailor word. फिटिंग without the nukta is the more common spelling; both pass.
- Q8: تايور is fine for Maghreb readers (Egypt and the Levant say تايير). Keep.
- Q9: البروفة is right. It is the standard word for a fitting at the tailor.
- Q10: البازان الريش is fine (Mauritanian and Senegalese Arabic use البازان). الورك should be الأرداف (C11).
- Q11: بوبو and ملابس البوبو are fine.
- Q12: طقم is right for "ensemble".
- Q13: "cloth" = outfit is good Pidgin, but "Baptism" has the same problem as hi बपतिस्मा; see U1. "Big boubou" clashes with "Grand boubou" (C15).
- Q14: "Men clothes" passes; "Men cloth" is a shade more Pidgin, either is fine. "Chest" is fine and unisex like "poitrine".
- Q15: All four are natural Pidgin. "Fitting dey for week 12" = the fitting is in week 12. "Fitting 1 don do" = fitting 1 is done. "cloth no dey" = no fabric available. "style idea wey mix" = design idea that mixes. Keep all.
- Q16: 12/04 in the French source is 12 April. en, pcm, hi (12 अप्रैल) and ar (12 أبريل) all say 12 April. Correct. Maghreb readers also know أفريل, but أبريل is understood everywhere.
- Q17: Both are fine. If the card is tight, plain "Boubou" works in every language (fr already uses "Boubous" alone).

## Values I am not sure of

- U1: mock-prog-9 en "Christening outfit", pcm "Baptism cloth", ar ثوب معمودية. All three mean Christian baptism, like hi बपतिस्मा (C2). In Senegal "baptême" is the naming ceremony. Alternatives: en "Naming-day outfit", pcm "Naming ceremony cloth" (the Nigerian term), ar ثوب عقيقة or ثوب تسمية. Not in the table because the choice should be made once for en, pcm and ar together.
- U2: mock-contact-18 ar أليون. Readable. In Senegal the name is usually written عليون (from علي). Optional change.
- U3: mock-contact-14 hi तिएर्नो. Letter-by-letter, like the other names. The phonetic form is चेर्नो. Acceptable either way; the file is consistent in using letters, not sounds (दियालो, दियोप).
- U4: profile hi आवा कूचर स्टूडियो. कूचर for "couture" is the common Hindi press spelling. Fine, but a reader may not know the word. Acceptable.
- U5: mock-meas-5a / 18a pcm "Neck round". Nigerian tailors write "Neck" or "Round neck". "Neck round" is understood. Acceptable.
- U6: hi alternates between पोशाक (prog-1, 5, 9, 12, album groups) and ड्रेस (prog-10, ptn-12a, labels). Both are right; a reader will not stumble. Consistency note only.
- U7: Contact-name transliterations follow the French letters, not the Wolof sound (दियालो for "Jallo", दियोप for "Jop", न्दियाये for "Njaay"). Consistent across hi and ar, so I left them. Flag only if the screenshots will be shown to Wolof speakers reading Hindi or Arabic, which is unlikely.
