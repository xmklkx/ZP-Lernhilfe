# Lernarena

Eine statische Lern-Webapp für Englischvokabeln, Deutsch und Mathe.

## Start

`START_HIER.html` oder `index.html` direkt im Browser öffnen.

## Enthalten

- Neues Grundkonzept: Fach wählen, Themengebiet wählen, Lernart wählen, dann Training.
- Nur noch Englisch, Deutsch und Mathe.
- Englisch: 2000 Vokabelkarten, Grammatik, Kommasetzung und rhetorische Mittel.
- Deutsch: 5000 Rechtschreibwörter mit Aussprache, Grammatik, Kommasetzung und rhetorische Mittel.
- Mathe: 500 Fragen zu Rechenoperatoren, Grundregeln und Formeln.
- Vokabeln: Englisch-Deutsch, Deutsch-Englisch oder beide Richtungen.
- Vokabeln und Rechtschreibung: Multiple Choice oder direkt eingeben.
- Grammatik, Rhetorik und Mathe: erst erklären lassen oder direkt testen.
- Zahnrad im Training für Anzahl und Sprachrichtung bei Vokabeln/Rechtschreibung.
- XP, Ränge, Serie, Leaderboard und Wiederholung nach Tagen.
- Nutzername, Tagesziel, Dark Mode, Badges und Fortschritt pro Thema.
- Fehlerliste mit eigener Wiederholrunde.
- Eigene Themen per Import im Format `Frage;Antwort`.
- Prüfungsmodus mit Timer.

## Datenbasis

Die Englischstufen orientieren sich an häufigen Wörtern und Lernerwortschatz-Quellen:

- Wiktionary Frequency Lists
- Oxford 3000/5000
- EF Top 3000 English Words

Die großen Mengen werden in `app.js` aus Startlisten und Mustern erzeugt, damit die App lokal ohne Server läuft. Dadurch sind die geforderten Mengen direkt verfügbar: 2000 Englisch-Vokabelkarten, 5000 Deutsch-Rechtschreibkarten und 500 Mathefragen.
