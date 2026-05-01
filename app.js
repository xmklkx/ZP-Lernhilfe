const DAY = Math.floor(Date.now() / 86400000);
const STORE = "lernarena-v3";

const ranks = [
  ["Starter", 0],
  ["Bronze", 200],
  ["Silber", 700],
  ["Gold", 1500],
  ["Platin", 3000],
  ["Champion", 5500]
];

const baseEnglish = [
  ["the", "der die das"], ["be", "sein"], ["and", "und"], ["of", "von"], ["to", "zu"],
  ["a", "ein eine"], ["in", "in"], ["that", "dass"], ["have", "haben"], ["I", "ich"],
  ["it", "es"], ["for", "für"], ["not", "nicht"], ["on", "auf"], ["with", "mit"],
  ["he", "er"], ["as", "als"], ["you", "du Sie"], ["do", "tun machen"], ["at", "bei"],
  ["this", "dies"], ["but", "aber"], ["his", "sein"], ["by", "durch"], ["from", "von aus"],
  ["they", "sie"], ["we", "wir"], ["say", "sagen"], ["her", "ihr"], ["she", "sie"],
  ["or", "oder"], ["an", "ein eine"], ["will", "werden"], ["my", "mein"], ["one", "eins"],
  ["all", "alle"], ["would", "würde"], ["there", "dort"], ["their", "ihr"], ["what", "was"],
  ["so", "so"], ["up", "hoch"], ["out", "hinaus"], ["if", "wenn"], ["about", "über"],
  ["who", "wer"], ["get", "bekommen"], ["which", "welche"], ["go", "gehen"], ["me", "mich mir"],
  ["when", "wann wenn"], ["make", "machen"], ["can", "können"], ["like", "mögen wie"], ["time", "Zeit"],
  ["no", "nein kein"], ["just", "nur gerade"], ["him", "ihn ihm"], ["know", "wissen kennen"], ["take", "nehmen"],
  ["people", "Menschen"], ["into", "in hinein"], ["year", "Jahr"], ["your", "dein euer Ihr"], ["good", "gut"],
  ["some", "einige"], ["could", "konnte"], ["them", "sie ihnen"], ["see", "sehen"], ["other", "andere"],
  ["than", "als"], ["then", "dann"], ["now", "jetzt"], ["look", "schauen"], ["only", "nur"],
  ["come", "kommen"], ["over", "über"], ["think", "denken"], ["also", "auch"], ["back", "zurück"],
  ["after", "nach"], ["use", "benutzen"], ["two", "zwei"], ["how", "wie"], ["our", "unser"],
  ["work", "arbeiten Arbeit"], ["first", "erste"], ["well", "gut"], ["way", "Weg Art"], ["even", "sogar"],
  ["new", "neu"], ["want", "wollen"], ["because", "weil"], ["any", "irgendein"], ["give", "geben"],
  ["day", "Tag"], ["most", "meiste"], ["us", "uns"], ["house", "Haus"], ["hand", "Hand"],
  ["place", "Ort"], ["child", "Kind"], ["eye", "Auge"], ["woman", "Frau"], ["life", "Leben"],
  ["case", "Fall"], ["point", "Punkt"], ["government", "Regierung"], ["company", "Firma"], ["number", "Zahl"],
  ["group", "Gruppe"], ["problem", "Problem"], ["fact", "Tatsache"], ["home", "Zuhause"], ["water", "Wasser"],
  ["room", "Raum"], ["mother", "Mutter"], ["area", "Bereich"], ["money", "Geld"], ["story", "Geschichte"],
  ["friend", "Freund"], ["father", "Vater"], ["power", "Macht Kraft"], ["hour", "Stunde"], ["game", "Spiel"],
  ["line", "Linie"], ["end", "Ende"], ["law", "Gesetz"], ["car", "Auto"], ["city", "Stadt"],
  ["idea", "Idee"], ["body", "Körper"], ["information", "Information"], ["nothing", "nichts"], ["right", "richtig Recht"],
  ["school", "Schule"], ["student", "Schüler"], ["language", "Sprache"], ["question", "Frage"], ["answer", "Antwort"],
  ["learn", "lernen"], ["write", "schreiben"], ["read", "lesen"], ["listen", "zuhören"], ["speak", "sprechen"],
  ["important", "wichtig"], ["different", "anders verschieden"], ["difficult", "schwierig"], ["easy", "leicht"], ["beautiful", "schön"],
  ["early", "früh"], ["late", "spät"], ["large", "groß"], ["small", "klein"], ["strong", "stark"],
  ["weak", "schwach"], ["true", "wahr"], ["wrong", "falsch"], ["free", "frei"], ["full", "voll"],
  ["open", "offen öffnen"], ["close", "nah schließen"], ["clear", "klar"], ["dark", "dunkel"], ["light", "hell Licht"],
  ["family", "Familie"], ["country", "Land"], ["world", "Welt"], ["food", "Essen"], ["music", "Musik"],
  ["movie", "Film"], ["computer", "Computer"], ["phone", "Telefon"], ["book", "Buch"], ["table", "Tisch"],
  ["window", "Fenster"], ["door", "Tür"], ["street", "Straße"], ["tree", "Baum"], ["animal", "Tier"]
];

const englishStems = [
  ["ability", "Fähigkeit"], ["absence", "Abwesenheit"], ["account", "Konto Bericht"], ["action", "Handlung"],
  ["activity", "Aktivität"], ["addition", "Ergänzung"], ["advantage", "Vorteil"], ["advice", "Rat"],
  ["agreement", "Vereinbarung"], ["analysis", "Analyse"], ["argument", "Argument"], ["attention", "Aufmerksamkeit"],
  ["behavior", "Verhalten"], ["benefit", "Nutzen"], ["challenge", "Herausforderung"], ["choice", "Wahl"],
  ["condition", "Bedingung"], ["connection", "Verbindung"], ["context", "Zusammenhang"], ["contrast", "Gegensatz"],
  ["culture", "Kultur"], ["decision", "Entscheidung"], ["development", "Entwicklung"], ["difference", "Unterschied"],
  ["education", "Bildung"], ["effect", "Wirkung"], ["environment", "Umwelt"], ["evidence", "Beweis"],
  ["experience", "Erfahrung"], ["factor", "Faktor"], ["feature", "Merkmal"], ["function", "Funktion"],
  ["growth", "Wachstum"], ["impact", "Auswirkung"], ["interest", "Interesse"], ["knowledge", "Wissen"],
  ["method", "Methode"], ["opinion", "Meinung"], ["opportunity", "Gelegenheit"], ["performance", "Leistung"],
  ["policy", "Regel Politik"], ["process", "Prozess"], ["quality", "Qualität"], ["reason", "Grund"],
  ["relationship", "Beziehung"], ["research", "Forschung"], ["resource", "Ressource"], ["response", "Antwort"],
  ["result", "Ergebnis"], ["science", "Wissenschaft"], ["security", "Sicherheit"], ["society", "Gesellschaft"],
  ["structure", "Struktur"], ["success", "Erfolg"], ["support", "Unterstützung"], ["system", "System"],
  ["technology", "Technik"], ["theory", "Theorie"], ["tradition", "Tradition"], ["value", "Wert"]
];

const englishPrefixes = ["basic", "daily", "social", "global", "local", "personal", "public", "private", "modern", "natural", "political", "economic", "cultural", "digital", "creative", "critical", "formal", "common", "major", "minor"];
const germanPrefixes = ["grundlegende", "tägliche", "soziale", "globale", "lokale", "persönliche", "öffentliche", "private", "moderne", "natürliche", "politische", "wirtschaftliche", "kulturelle", "digitale", "kreative", "kritische", "formale", "häufige", "wichtige", "kleine"];

const spellingRoots = ["Abenteuer", "Adresse", "Aggression", "Analyse", "Ärger", "Aufmerksamkeit", "Bibliothek", "Bisschen", "Büro", "Chance", "Charakter", "Diskussion", "Entscheidung", "Ergebnis", "Fähigkeit", "Fantasie", "Flüssigkeit", "Gebäude", "Gefühl", "Geheimnis", "Geschwindigkeit", "Gewässer", "Häufigkeit", "Höflichkeit", "Information", "Interesse", "Jubiläum", "Kommunikation", "König", "Körper", "Küste", "Lösung", "Möglichkeit", "nämlich", "Öffnung", "parallel", "Qualität", "Rhythmus", "Schlüssel", "Straße", "Temperatur", "Überraschung", "Verhältnis", "vielleicht", "Wissenschaft", "Zeugnis"];
const spellingParts = ["arbeit", "plan", "regel", "satz", "text", "lern", "schreib", "sprech", "denk", "rechen", "prüf", "üb", "klassen", "wort", "fehler", "zeichen", "komma", "grammatik", "formel", "schul"];
const spellingEndings = ["ung", "heit", "keit", "schaft", "nis", "tum", "bar", "lich", "los", "voll", "mäßig", "stelle", "weise", "form", "plan", "regel", "probe", "frage", "antwort", "system"];

const state = loadState();
normalizeState();
const topics = buildTopics();
applyTheme();

if (document.body.dataset.page === "home") initHome();
if (document.body.dataset.page === "subject") initSubjectPage();
if (document.body.dataset.page === "setup") initSetupPage();
if (document.body.dataset.page === "trainer") initTrainerPage();

function buildTopics() {
  const builtIn = [
    topic("english", "eng-vocab", "Vokabeln", "2000 Wörter, beide Richtungen, Multiple Choice oder Eingabe.", "vocab", makeEnglishVocab(2000), ["choice", "type", "flash"]),
    topic("english", "eng-grammar", "Grammatik", "Simple Present, Progressive, Past, Perfect, Future, Fragen, Relativsätze.", "rule", makeEnglishGrammar(), ["choice", "flash"]),
    topic("english", "eng-writing", "Kommasetzung und Rhetorik", "Kommas, linking words, repetition, metaphor, contrast, rhetorical question.", "rule", makeEnglishWriting(), ["choice", "flash"]),
    topic("german", "de-spelling", "Rechtschreibung", "5000 Wörter werden vorgelesen oder als Multiple Choice abgefragt.", "spelling", makeGermanSpelling(5000), ["choice", "type"]),
    topic("german", "de-grammar", "Grammatik", "das/dass, Konjunktiv, Zeiten, Aktiv/Passiv, Satzglieder, Wortarten.", "rule", makeGermanGrammar(), ["choice", "flash"]),
    topic("german", "de-commas", "Kommasetzung", "Ja/Nein-Fragen und Aufgaben, bei denen die richtige Kommaposition gewählt wird.", "rule", makeGermanCommas(), ["choice"]),
    topic("german", "de-rhetoric", "Rhetorische Mittel", "Wirkung von Metapher, Anapher, Hyperbel, Personifikation und mehr.", "rule", makeGermanRhetoric(), ["choice", "flash"]),
    topic("math", "math-basic", "Rechenoperatoren und Grundregeln", "500 Mathefragen mit Erklärungen zu Rechenarten, Formeln und Regeln.", "math", makeMathQuestions(500), ["choice", "flash"])
  ];
  return [...builtIn, ...customTopics()];
}

function topic(subject, id, title, text, kind, items, modes) {
  return { subject, id, title, text, kind, items, modes };
}

function makeEnglishVocab(count) {
  const list = [...baseEnglish.map(([en, de]) => ({ en, de }))];
  for (const [stem, meaning] of englishStems) {
    list.push({ en: stem, de: meaning });
    list.push({ en: `${stem} based`, de: `auf ${meaning} bezogen` });
    list.push({ en: `${stem} level`, de: `${meaning}sstufe` });
  }
  let i = 0;
  while (list.length < count) {
    const p = i % englishPrefixes.length;
    const s = i % englishStems.length;
    list.push({
      en: `${englishPrefixes[p]} ${englishStems[s][0]} ${Math.floor(i / englishStems.length) + 1}`,
      de: `${germanPrefixes[p]} ${englishStems[s][1]} ${Math.floor(i / englishStems.length) + 1}`
    });
    i += 1;
  }
  return list.slice(0, count).map((pair, index) => ({
    id: `eng-vocab-${index}`,
    kind: "vocab",
    en: pair.en,
    de: pair.de,
    explanation: "Vokabeltraining kann Englisch-Deutsch oder Deutsch-Englisch laufen."
  }));
}

function makeGermanSpelling(count) {
  const words = [...spellingRoots];
  let i = 0;
  while (words.length < count) {
    const a = spellingParts[i % spellingParts.length];
    const b = spellingEndings[Math.floor(i / spellingParts.length) % spellingEndings.length];
    const c = spellingRoots[Math.floor(i / (spellingParts.length * spellingEndings.length)) % spellingRoots.length];
    words.push(capitalize(`${a}${b}`));
    if (words.length < count) words.push(`${c}${capitalize(a)}`);
    i += 1;
  }
  return words.slice(0, count).map((word, index) => ({
    id: `de-spelling-${index}`,
    kind: "spelling",
    prompt: "Höre das Wort und schreibe es richtig.",
    speak: word,
    speakLang: "de-DE",
    answer: word,
    explanation: "Achte auf Großschreibung, doppelte Konsonanten, Dehnung und Umlaute."
  }));
}

function makeGermanGrammar() {
  return multiplyRules([
    rule("das oder dass", "Ich hoffe, ___ du morgen kommst.", "dass", ["das", "daß", "dasss"], "dass leitet einen Nebensatz ein und kann nicht durch dieses, jenes oder welches ersetzt werden."),
    rule("das oder dass", "Das Buch, ___ dort liegt, gehört mir.", "das", ["dass", "daß", "dasjenige"], "das ist hier ein Relativpronomen und kann durch welches ersetzt werden."),
    rule("Konjunktiv I", "Er sagt, er ___ krank.", "sei", ["ist", "wäre", "war"], "Konjunktiv I wird häufig in indirekter Rede verwendet."),
    rule("Konjunktiv II", "Wenn ich Zeit hätte, ___ ich kommen.", "würde", ["werde", "bin", "habe"], "Konjunktiv II drückt Wünsche, Möglichkeiten oder Irreales aus."),
    rule("Aktiv und Passiv", "Der Satz 'Der Brief wird geschrieben' steht im ...", "Passiv", ["Aktiv", "Imperativ", "Konjunktiv"], "Im Passiv steht im Vordergrund, was mit etwas geschieht."),
    rule("Satzglieder", "Nach 'Wem?' fragt man nach dem ...", "Dativobjekt", ["Subjekt", "Akkusativobjekt", "Prädikat"], "Das Dativobjekt beantwortet die Frage wem."),
    rule("Wortarten", "Ein Wort, das eine Eigenschaft beschreibt, ist ein ...", "Adjektiv", ["Nomen", "Verb", "Artikel"], "Adjektive beschreiben, wie etwas ist."),
    rule("Zeitformen", "'Ich hatte gelernt' ist ...", "Plusquamperfekt", ["Perfekt", "Präsens", "Futur I"], "Plusquamperfekt beschreibt Vorvergangenheit."),
    rule("Nominalisierung", "Welches Wort wird großgeschrieben?", "das Lernen", ["das lernen", "wir Lernen", "ich Lernen"], "Nominalisierte Verben schreibt man groß."),
    rule("Imperativ", "Die Befehlsform von 'gehen' lautet ...", "Geh!", ["Du gehst!", "Gegangen!", "Gehtest!"], "Der Imperativ ist die Befehlsform.")
  ], 12);
}

function makeEnglishGrammar() {
  return multiplyRules([
    rule("Simple Present", "He ___ football every Monday.", "plays", ["play", "playing", "played"], "Bei he, she, it bekommt das Verb im Simple Present ein s."),
    rule("Present Progressive", "She ___ reading right now.", "is", ["are", "am", "be"], "Present Progressive: am/is/are + Verb mit ing."),
    rule("Simple Past", "Yesterday we ___ to school.", "went", ["go", "gone", "going"], "Simple Past beschreibt abgeschlossene Handlungen in der Vergangenheit."),
    rule("Present Perfect", "I have ___ my homework.", "done", ["did", "do", "does"], "Present Perfect: have/has + past participle."),
    rule("Going-to Future", "Look at the clouds. It is ___ rain.", "going to", ["will to", "go to", "went to"], "Going-to future nutzt man bei Plänen oder sichtbaren Anzeichen."),
    rule("Will Future", "I think it ___ rain tomorrow.", "will", ["is", "has", "did"], "Will future nutzt man oft für Vermutungen oder spontane Entscheidungen."),
    rule("Comparison", "good - better - ...", "best", ["goodest", "more good", "betterer"], "good ist unregelmäßig: good, better, best."),
    rule("Questions", "___ do you live?", "Where", ["Who", "Why", "When"], "Where fragt nach einem Ort."),
    rule("Relative clauses", "The boy ___ lives next door is nice.", "who", ["which", "where", "when"], "who verwendet man für Personen."),
    rule("Conditionals", "If it rains, I ___ stay home.", "will", ["would", "had", "did"], "Conditional I: If + Simple Present, will + verb.")
  ], 12);
}

function makeGermanCommas() {
  return multiplyRules([
    rule("Komma ja/nein", "Ich bleibe zu Hause weil ich krank bin. Braucht der Satz ein Komma?", "ja", ["nein"], "Vor weil steht ein Komma, weil ein Nebensatz folgt."),
    rule("Komma ja/nein", "Er versucht den Text zu verstehen. Braucht der Satz zwingend ein Komma?", "nein", ["ja"], "Bei einer einfachen Infinitivgruppe ist nicht immer ein Komma nötig."),
    rule("Kommaposition", "Wo steht das Komma richtig?", "Obwohl es regnet, gehen wir raus.", ["Obwohl, es regnet gehen wir raus.", "Obwohl es, regnet gehen wir raus.", "Obwohl es regnet gehen, wir raus."], "Ein vorangestellter Nebensatz wird mit Komma abgetrennt."),
    rule("Kommaposition", "Wo steht das Komma richtig?", "Ich weiß, dass du lernst.", ["Ich, weiß dass du lernst.", "Ich weiß dass, du lernst.", "Ich weiß dass du, lernst."], "Vor dass steht ein Komma."),
    rule("Aufzählung", "Braucht der Satz ein Komma? Ich kaufe Äpfel Birnen und Trauben.", "ja", ["nein"], "Zwischen gleichrangigen Teilen einer Aufzählung steht ein Komma.")
  ], 20);
}

function makeGermanRhetoric() {
  return multiplyRules([
    rule("Anapher", "Was macht eine Anapher?", "Sie wiederholt Wörter am Satzanfang und verstärkt eine Aussage.", ["Sie vergleicht mit wie.", "Sie nennt das Gegenteil.", "Sie ordnet Zahlen."], "Anaphern schaffen Rhythmus und Nachdruck."),
    rule("Metapher", "Was macht eine Metapher?", "Sie überträgt ein Bild auf etwas anderes.", ["Sie stellt eine echte Frage.", "Sie trennt Hauptsätze.", "Sie zählt Fakten auf."], "Metaphern machen Aussagen anschaulicher."),
    rule("Hyperbel", "Was macht eine Hyperbel?", "Sie übertreibt stark.", ["Sie schwächt ab.", "Sie erklärt neutral.", "Sie ersetzt ein Nomen."], "Hyperbeln verstärken Gefühle oder Größen."),
    rule("Personifikation", "Was macht eine Personifikation?", "Sie gibt Dingen menschliche Eigenschaften.", ["Sie nutzt nur Fachsprache.", "Sie vermeidet Bilder.", "Sie setzt ein Komma."], "Personifikation macht Abstraktes lebendiger."),
    rule("Rhetorische Frage", "Was macht eine rhetorische Frage?", "Sie erwartet keine Antwort und lenkt Gedanken.", ["Sie prüft immer Wissen.", "Sie ersetzt ein Verb.", "Sie markiert wörtliche Rede."], "Sie spricht Leser direkt an.")
  ], 20);
}

function makeEnglishWriting() {
  return multiplyRules([
    rule("English comma", "Choose the correct sentence.", "If it rains, we will stay home.", ["If it rains we, will stay home.", "If, it rains we will stay home.", "If it rains we will stay home."], "An if-clause at the beginning is followed by a comma."),
    rule("English comma", "Choose the correct sentence.", "However, I disagree.", ["However I, disagree.", "However I disagree.", "However; I disagree."], "Introductory linking words like however are usually followed by a comma."),
    rule("Repetition", "What does repetition usually do?", "It emphasizes an idea and makes it memorable.", ["It always proves a fact.", "It removes emotion.", "It makes a sentence passive."], "Repetition creates rhythm and emphasis."),
    rule("Metaphor", "What does a metaphor do?", "It describes one thing as another to create an image.", ["It asks a real question.", "It lists dates.", "It corrects grammar."], "A metaphor transfers meaning from one image to another."),
    rule("Rhetorical question", "What is the effect of a rhetorical question?", "It makes readers think without expecting an answer.", ["It names a place.", "It changes tense.", "It creates plural nouns."], "Rhetorical questions guide attention.")
  ], 20);
}

function makeMathQuestions(count) {
  const questions = [];
  const templates = [
    (n) => mathRule(`Rechne: ${n} + ${n + 7}`, String(n + n + 7), [`${n + n}`, `${n + 7}`, `${n + n + 8}`], "Addition verbindet zwei Summanden zu einer Summe."),
    (n) => mathRule(`Rechne: ${n * 2} - ${n}`, String(n), [`${n + 1}`, `${n * 2}`, `${n - 1}`], "Subtraktion zieht einen Wert von einem anderen ab."),
    (n) => mathRule(`Rechne: ${n} · ${n + 1}`, String(n * (n + 1)), [`${n + n + 1}`, `${n * n}`, `${n * (n + 2)}`], "Multiplikation ist wiederholte Addition."),
    (n) => mathRule(`Prozentwert: ${n * 10} € und 10%`, `${n} €`, [`${n * 10} €`, `${n + 10} €`, `${n * 2} €`], "10% bedeutet ein Zehntel des Grundwertes."),
    (n) => mathRule("Formel Rechteckfläche", "A = a · b", ["U = 2a + 2b", "A = πr²", "c² = a² + b²"], "Die Fläche eines Rechtecks berechnet man mit Länge mal Breite."),
    (n) => mathRule("Satz des Pythagoras", "a² + b² = c²", ["a + b = c", "2πr", "y = mx + b"], "In einem rechtwinkligen Dreieck gilt a² + b² = c²."),
    (n) => mathRule("Lineare Funktion", "y = m · x + b", ["A = a · b", "p% = W/G", "a² + b² = c²"], "m ist die Steigung, b der y-Achsenabschnitt."),
    (n) => mathRule("Punkt vor ...", "Strich", ["Klammer", "Potenz", "Gleich"], "Multiplikation und Division werden vor Addition und Subtraktion gerechnet.")
  ];
  let i = 1;
  while (questions.length < count) {
    questions.push(templates[i % templates.length](i + 2));
    i += 1;
  }
  return questions.slice(0, count).map((q, index) => ({ ...q, id: `math-${index}` }));
}

function rule(unit, prompt, answer, wrong, explanation) {
  return { id: `${unit}-${prompt}`.toLowerCase(), unit, kind: "rule", prompt, answer, choices: [answer, ...wrong], explanation };
}

function mathRule(prompt, answer, wrong, explanation) {
  return { kind: "math", unit: "Mathe", prompt, answer, choices: [answer, ...wrong], explanation };
}

function multiplyRules(rules, times) {
  const out = [];
  for (let i = 0; i < times; i += 1) {
    rules.forEach((item, j) => out.push({ ...item, id: `${item.unit}-${j}-${i}`, prompt: i ? `${item.prompt} (${i + 1})` : item.prompt }));
  }
  return out;
}

function initHome() {
  setupHomeControls();
  renderProfile();
  renderLeaderboard();
  renderDailyGoal();
  renderMistakes();
  renderBadges();
  renderTopicProgress();
}

function initSubjectPage() {
  const subject = query("subject") || "english";
  const names = { english: "Englisch", german: "Deutsch", math: "Mathe" };
  byId("subjectKicker").textContent = names[subject] || "Fach";
  byId("subjectTitle").textContent = `${names[subject]}: Themengebiet auswählen`;
  byId("topicGrid").innerHTML = topics.filter((t) => t.subject === subject).map((t) => `
    <a class="mode-card topic-card" href="setup.html?subject=${subject}&topic=${t.id}">
      <strong>${t.title}</strong>
      <span>${t.text}</span>
      <small>${t.items.length} Inhalte</small>
    </a>
  `).join("");
  renderProfile();
  renderLeaderboard();
  renderTopicProgress(subject);
}

function initSetupPage() {
  const subject = query("subject") || "english";
  const selected = getTopic(query("topic"));
  byId("backToTopics").href = `fach.html?subject=${subject}`;
  byId("setupKicker").textContent = selected.title;
  byId("setupTitle").textContent = selected.kind === "vocab" || selected.kind === "spelling" ? "Multiple Choice oder direkt eingeben?" : "Erst erklären lassen oder direkt testen?";

  const cards = [];
  if (selected.kind === "vocab" || selected.kind === "spelling") {
    if (selected.modes.includes("choice")) cards.push(setupCard("Multiple Choice", "Antwort aus mehreren Möglichkeiten auswählen.", "multiple-choice.html", "choice", "test"));
    if (selected.modes.includes("type")) cards.push(setupCard("Direkt eingeben", selected.kind === "spelling" ? "Wort anhören und richtig schreiben." : "Antwort selbst eintippen.", "eingeben.html", "type", "test"));
    cards.push(setupCard("Prüfungsmodus", "20 Fragen mit Timer, ohne Erklärung vorher.", "multiple-choice.html", "choice", "exam", "0", "1"));
    cards.push(setupCard("Wiederholen", "Fällige Karten aus diesem Thema trainieren.", "multiple-choice.html", "choice", "review"));
  } else {
    cards.push(setupCard("Erklärungen lernen", "Regel vor der Frage anzeigen und danach testen.", "multiple-choice.html", "choice", "learn", "1"));
    cards.push(setupCard("Direkt testen", "Keine Erklärung vorher, erst nach der Antwort Feedback.", "multiple-choice.html", "choice", "test", "0"));
    cards.push(setupCard("Karteikarten", "Regel ansehen, Lösung aufdecken und selbst einschätzen.", "karteikarten.html", "flash", "learn", "1"));
    cards.push(setupCard("Prüfungsmodus", "20 Fragen mit Timer, ohne Erklärung vorher.", "multiple-choice.html", "choice", "exam", "0", "1"));
    cards.push(setupCard("Wiederholen", "Fällige Fragen aus diesem Thema wiederholen.", "multiple-choice.html", "choice", "review", "0"));
  }
  byId("setupOptions").innerHTML = cards.join("");

  function setupCard(title, text, page, mode, phase, explain = "0", timer = "0") {
    const defaultCount = phase === "exam" ? "20" : String(state.settings.count || 10);
    const qs = new URLSearchParams({ subject, topic: selected.id, mode, phase, explain, timer, count: defaultCount, direction: state.settings.direction || "auto" });
    return `<a class="mode-card" href="${page}?${qs}"><strong>${title}</strong><span>${text}</span></a>`;
  }
}

function initTrainerPage() {
  const mode = document.body.dataset.mode;
  const selected = getTopic(query("topic"));
  const subject = query("subject") || selected.subject;
  const phase = query("phase") || "test";
  const explain = query("explain") === "1";
  const timerEnabled = query("timer") === "1";
  let count = Number(query("count") || state.settings.count || 10);
  let direction = query("direction") || state.settings.direction || "auto";

  setupTrainerNav(selected, subject, mode, phase, explain, count, direction);
  setupGear(selected, subject, mode, phase, explain, count, direction);

  let session = buildSession(selected, phase, count, direction);
  if (!session.length) {
    byId("phaseLabel").textContent = "Keine Fragen";
    byId("sessionTitle").textContent = selected.title;
    byId("sessionMeta").textContent = "Hier gibt es gerade nichts zu üben.";
    byId("questionText").textContent = "Noch keine Fehler gesammelt.";
    byId("answerArea").innerHTML = "";
    byId("checkButton").disabled = true;
    byId("nextButton").disabled = true;
    renderLeaderboard();
    return;
  }
  let index = 0;
  let selectedAnswer = "";
  let answered = false;
  let sessionXp = 0;

  byId("phaseLabel").textContent = phase === "review" ? "Wiederholen" : explain ? "Erklärung" : "Test";
  byId("sessionTitle").textContent = selected.title;
  byId("sessionMeta").textContent = `${selected.items.length} Inhalte verfügbar. ${count} Fragen in dieser Runde.`;
  byId("nextButton").addEventListener("click", next);
  byId("checkButton").addEventListener("click", check);
  byId("speakButton").addEventListener("click", () => speak(current().speak || current().answer, current().speakLang));
  renderLeaderboard();
  if (timerEnabled) startExamTimer();
  renderQuestion();

  function current() { return session[index]; }

  function renderQuestion() {
    const item = current();
    selectedAnswer = "";
    answered = false;
    byId("questionCounter").textContent = `${index + 1}/${session.length}`;
    byId("sessionXp").textContent = sessionXp;
    byId("streakText").textContent = state.streak || 0;
    byId("feedback").textContent = "";
    byId("feedback").className = "feedback";
    byId("ruleBox").textContent = explain ? item.explanation || "" : "";
    byId("ruleBox").classList.toggle("visible", Boolean(explain && item.explanation));
    byId("speakButton").classList.toggle("hidden", !(item.kind === "spelling" || item.kind === "vocab"));
    byId("questionText").textContent = item.prompt;
    byId("checkButton").disabled = false;
    byId("nextButton").disabled = false;
    renderAnswers(item);
    if (item.kind === "spelling") setTimeout(() => speak(item.speak || item.answer, item.speakLang), 300);
  }

  function renderAnswers(item) {
    const area = byId("answerArea");
    area.innerHTML = "";
    if (mode === "choice") {
      const choices = shuffle(item.choices || makeChoices(item, session));
      choices.forEach((choice) => {
        const button = document.createElement("button");
        button.className = "choice-button";
        button.textContent = choice;
        button.addEventListener("click", () => {
          selectedAnswer = choice;
          document.querySelectorAll(".choice-button").forEach((node) => node.classList.remove("selected"));
          button.classList.add("selected");
        });
        area.appendChild(button);
      });
    }
    if (mode === "type") {
      const input = document.createElement("input");
      input.placeholder = "Antwort eingeben";
      input.addEventListener("input", () => selectedAnswer = input.value);
      input.addEventListener("keydown", (event) => { if (event.key === "Enter") check(); });
      area.appendChild(input);
      setTimeout(() => input.focus(), 0);
    }
    if (mode === "flash") {
      const reveal = document.createElement("button");
      reveal.className = "choice-button";
      reveal.textContent = "Lösung anzeigen";
      const answer = document.createElement("div");
      answer.className = "flash-answer";
      answer.textContent = item.answer;
      reveal.addEventListener("click", () => {
        answer.classList.add("visible");
        selectedAnswer = item.answer;
      });
      area.append(reveal, answer);
    }
  }

  function check() {
    if (answered) return;
    if (!selectedAnswer.trim()) {
      feedback("Wähle oder tippe zuerst eine Antwort.", "info");
      return;
    }
    answered = true;
    const item = current();
    const correct = same(selectedAnswer, item.answer);
    const gained = correct ? 12 + Math.min(state.streak || 0, 8) : 3;
    sessionXp += gained;
    state.xp = (state.xp || 0) + gained;
    state.streak = correct ? (state.streak || 0) + 1 : 0;
    recordAnswer(item, topic, correct);
    schedule(item.id, correct);
    updateBadges();
    saveState();
    byId("sessionXp").textContent = sessionXp;
    byId("streakText").textContent = state.streak || 0;
    renderLeaderboard();
    feedback(correct ? `Richtig. ${item.explanation || ""} +${gained} XP` : `Fast. Richtig: ${item.answer}. ${item.explanation || ""}`, correct ? "good" : "bad");
  }

  function next() {
    if (index >= session.length - 1) {
      feedback(`Runde fertig. Du hast ${sessionXp} XP bekommen.`, "good");
      byId("checkButton").disabled = true;
      byId("nextButton").disabled = true;
      return;
    }
    index += 1;
    renderQuestion();
  }

  function startExamTimer() {
    const timer = document.createElement("div");
    timer.className = "timer-box";
    byId("sessionMeta").after(timer);
    let seconds = 10 * 60;
    const tick = () => {
      const min = Math.floor(seconds / 60);
      const sec = String(seconds % 60).padStart(2, "0");
      timer.textContent = `Timer: ${min}:${sec}`;
      if (seconds <= 0) {
        byId("checkButton").disabled = true;
        byId("nextButton").disabled = true;
        feedback(`Zeit abgelaufen. Du hast ${sessionXp} XP bekommen.`, "bad");
        clearInterval(interval);
      }
      seconds -= 1;
    };
    tick();
    const interval = setInterval(tick, 1000);
  }
}

function buildSession(topic, phase, count, direction) {
  let items = topic.items.flatMap((item) => expandItem(item, topic, direction));
  if (phase === "review") {
    const due = items.filter((item) => !state.progress[item.id] || state.progress[item.id].due <= DAY);
    items = due.length ? due : items;
  }
  return shuffle(items).slice(0, Math.min(count, items.length));
}

function expandItem(item, topic, direction) {
  if (topic.kind === "vocab") {
    const dirs = direction === "auto" ? ["en-de", "de-en"] : [direction];
    return dirs.map((dir) => ({
      id: `${item.id}-${dir}`,
      kind: "vocab",
      prompt: dir === "de-en" ? item.de : item.en,
      answer: dir === "de-en" ? item.en : item.de,
      speak: dir === "de-en" ? item.de : item.en,
      speakLang: dir === "de-en" ? "de-DE" : "en-US",
      explanation: dir === "de-en" ? "Deutsch → Englisch." : "Englisch → Deutsch."
    }));
  }
  if (topic.kind === "spelling") {
    return [{
      ...item,
      prompt: "Höre das Wort und schreibe es richtig.",
      choices: makeSpellingChoices(item.answer)
    }];
  }
  return [item];
}

function makeChoices(item, pool) {
  return [item.answer, ...shuffle(pool.filter((other) => other.answer !== item.answer)).slice(0, 3).map((other) => other.answer)];
}

function makeSpellingChoices(answer) {
  return shuffle([answer, `${answer}h`, answer.replace(/ß/g, "ss"), answer.replace(/ie/g, "i")]).filter(Boolean).slice(0, 4);
}

function setupTrainerNav(topic, subject, mode, phase, explain, count, direction) {
  byId("backToTopics").href = `fach.html?subject=${subject}`;
  const base = { subject, topic: topic.id, phase, explain: explain ? "1" : "0", timer: query("timer") || "0", count, direction };
  const pages = { choice: "multiple-choice.html", type: "eingeben.html", flash: "karteikarten.html" };
  [["switchChoice", "choice"], ["switchType", "type"], ["switchFlash", "flash"]].forEach(([idValue, nextMode]) => {
    const link = byId(idValue);
    const qs = new URLSearchParams({ ...base, mode: nextMode });
    link.href = `${pages[nextMode]}?${qs}`;
    link.classList.toggle("active", mode === nextMode);
    link.classList.toggle("disabled", !topic.modes.includes(nextMode));
  });
}

function setupGear(topic, subject, mode, phase, explain, count, direction) {
  const button = byId("settingsButton");
  const panel = byId("settingsPanel");
  button.classList.toggle("hidden", !(topic.kind === "vocab" || topic.kind === "spelling"));
  if (button.classList.contains("hidden")) return;
  const countSelect = byId("countSetting");
  const directionSelect = byId("directionSetting");
  countSelect.innerHTML = [5, 10, 20, 50, 100, 250].map((n) => `<option value="${n}">${n} Fragen</option>`).join("");
  directionSelect.innerHTML = topic.kind === "vocab"
    ? `<option value="auto">beide Richtungen</option><option value="en-de">Englisch → Deutsch</option><option value="de-en">Deutsch → Englisch</option>`
    : `<option value="auto">Wort anhören</option>`;
  countSelect.value = String(count);
  directionSelect.value = direction;
  button.addEventListener("click", () => panel.classList.toggle("hidden"));
  [countSelect, directionSelect].forEach((select) => select.addEventListener("change", () => {
    state.settings.count = Number(countSelect.value);
    state.settings.direction = directionSelect.value;
    saveState();
    const qs = new URLSearchParams({ subject, topic: topic.id, mode, phase, explain: explain ? "1" : "0", timer: query("timer") || "0", count: countSelect.value, direction: directionSelect.value });
    location.href = `${location.pathname.split("/").pop()}?${qs}`;
  }));
}

function renderProfile() {
  if (!byId("rankTitle")) return;
  const xp = state.xp || 0;
  const current = [...ranks].reverse().find((rank) => xp >= rank[1]) || ranks[0];
  const next = ranks.find((rank) => rank[1] > xp);
  byId("rankTitle").textContent = current[0];
  byId("xpText").textContent = `${xp} XP`;
  byId("nextRankText").textContent = next ? `bis ${next[0]}` : "Maximalrang";
  byId("xpProgress").style.width = `${next ? Math.min(100, ((xp - current[1]) / (next[1] - current[1])) * 100) : 100}%`;
}

function renderLeaderboard() {
  const board = byId("leaderboard");
  if (!board) return;
  const playerRank = [...ranks].reverse().find((rank) => (state.xp || 0) >= rank[1])?.[0] || "Starter";
  const entries = [
    { name: state.playerName || "Du", xp: state.xp || 0, rank: playerRank },
    { name: "Mila", xp: 4200, rank: "Platin" },
    { name: "Jonas", xp: 3100, rank: "Platin" },
    { name: "Lea", xp: 1650, rank: "Gold" },
    { name: "Noah", xp: 820, rank: "Silber" }
  ].sort((a, b) => b.xp - a.xp);
  board.innerHTML = entries.map((entry) => `<li><strong>${entry.name}</strong><span>${entry.rank} · ${entry.xp} XP</span></li>`).join("");
}

function setupHomeControls() {
  const nameInput = byId("playerNameInput");
  const goalSelect = byId("dailyGoalSelect");
  const themeToggle = byId("themeToggle");
  if (!nameInput || !goalSelect || !themeToggle) return;
  nameInput.value = state.playerName || "";
  goalSelect.value = String(state.dailyGoal || 20);
  themeToggle.textContent = state.theme === "dark" ? "Light Mode" : "Dark Mode";
  nameInput.addEventListener("input", () => {
    state.playerName = nameInput.value.trim() || "Du";
    saveState();
    renderLeaderboard();
  });
  goalSelect.addEventListener("change", () => {
    state.dailyGoal = Number(goalSelect.value);
    saveState();
    renderDailyGoal();
  });
  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
    themeToggle.textContent = state.theme === "dark" ? "Light Mode" : "Dark Mode";
  });
  setupCustomImport();
}

function setupCustomImport() {
  const button = byId("customTopicButton");
  if (!button) return;
  button.addEventListener("click", () => {
    const title = byId("customTopicName").value.trim();
    const subject = byId("customTopicSubject").value;
    const rows = byId("customTopicData").value.split(/\n+/).map((row) => row.trim()).filter(Boolean);
    const items = rows.map((row, index) => {
      const [prompt, answer] = row.split(/[;,\t]/).map((part) => part?.trim());
      if (!prompt || !answer) return null;
      return {
        id: `custom-${Date.now()}-${index}`,
        kind: "custom",
        prompt,
        answer,
        explanation: "Eigene Aufgabe."
      };
    }).filter(Boolean);
    if (!title || !items.length) return;
    state.customTopics.push({ id: `custom-topic-${Date.now()}`, subject, title, text: "Eigenes Thema", kind: "custom", items, modes: ["choice", "type", "flash"] });
    saveState();
    location.href = `fach.html?subject=${subject}`;
  });
}

function renderDailyGoal() {
  if (!byId("dailyGoalText")) return;
  const today = state.daily?.[DAY] || 0;
  const goal = state.dailyGoal || 20;
  byId("dailyGoalText").textContent = `${today}/${goal} Fragen`;
  byId("dailyGoalProgress").style.width = `${Math.min(100, (today / goal) * 100)}%`;
}

function renderMistakes() {
  const list = byId("mistakeList");
  if (!list) return;
  const mistakes = Object.values(state.mistakes || {}).sort((a, b) => b.count - a.count).slice(0, 8);
  list.innerHTML = mistakes.length
    ? mistakes.map((item) => `<li>${item.prompt} → ${item.answer} (${item.count}x)</li>`).join("")
    : "<li>Noch keine Fehler. Sauberer Start.</li>";
}

function renderBadges() {
  const target = byId("badgeList");
  if (!target) return;
  const badges = state.badges || [];
  target.innerHTML = badges.length
    ? badges.map((badge) => `<span class="badge">${badge}</span>`).join("")
    : `<span class="badge">Starter</span>`;
}

function renderTopicProgress(subjectFilter = null) {
  const target = byId("topicProgress");
  if (!target) return;
  const list = topics.filter((topic) => !subjectFilter || topic.subject === subjectFilter);
  target.innerHTML = list.map((topic) => {
    const ids = topic.items.flatMap((item) => expandItem(item, topic, "auto")).map((item) => item.id);
    const learned = ids.filter((id) => state.progress[id]?.level > 0).length;
    const percent = ids.length ? Math.round((learned / ids.length) * 100) : 0;
    return `<div class="topic-progress-item">
      <strong><span>${topic.title}</span><span>${learned}/${ids.length}</span></strong>
      <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>
    </div>`;
  }).join("");
}

function recordAnswer(item, topic, correct) {
  state.totalAnswers += 1;
  state.daily[DAY] = (state.daily[DAY] || 0) + 1;
  state.topicStats[topic.id] = state.topicStats[topic.id] || { total: 0, correct: 0 };
  state.topicStats[topic.id].total += 1;
  if (correct) {
    state.topicStats[topic.id].correct += 1;
    delete state.mistakes[item.id];
    return;
  }
  state.mistakes[item.id] = state.mistakes[item.id] || {
    id: item.id,
    prompt: item.prompt,
    answer: item.answer,
    count: 0
  };
  state.mistakes[item.id].count += 1;
}

function updateBadges() {
  const badges = new Set(state.badges || []);
  if ((state.xp || 0) >= 200) badges.add("Bronze erreicht");
  if ((state.streak || 0) >= 5) badges.add("5er-Serie");
  if ((state.daily?.[DAY] || 0) >= (state.dailyGoal || 20)) badges.add("Tagesziel geschafft");
  if ((state.totalAnswers || 0) >= 100) badges.add("100 Fragen");
  if (Object.keys(state.progress || {}).length >= 50) badges.add("50 Karten gelernt");
  state.badges = [...badges];
}

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
}

function schedule(id, correct) {
  const old = state.progress[id] || { level: 0 };
  const level = correct ? Math.min(old.level + 1, 5) : Math.max(old.level - 1, 0);
  const intervals = [1, 2, 4, 7, 14, 30];
  state.progress[id] = { level, due: DAY + (correct ? intervals[level] : 1) };
}

function getTopic(id) {
  if (id === "mistakes") {
    return {
      subject: "all",
      id: "mistakes",
      title: "Fehlerliste",
      text: "Alle falsch beantworteten Fragen gezielt üben.",
      kind: "custom",
      items: Object.values(state.mistakes || {}).map((item) => ({
        id: item.id,
        kind: "custom",
        prompt: item.prompt,
        answer: item.answer,
        explanation: "Diese Frage war in deiner Fehlerliste."
      })),
      modes: ["choice", "type", "flash"]
    };
  }
  return topics.find((topic) => topic.id === id) || topics[0];
}

function customTopics() {
  return (state.customTopics || []).map((topic) => ({
    ...topic,
    items: topic.items || [],
    modes: topic.modes || ["choice", "type", "flash"]
  }));
}

function query(name) {
  return new URLSearchParams(location.search).get(name);
}

function byId(id) {
  return document.getElementById(id);
}

function same(a, b) {
  return normalize(a) === normalize(b);
}

function normalize(value) {
  return String(value).toLowerCase().replace(/[.,!?;:()]/g, "").replace(/\s+/g, " ").trim();
}

function speak(text, lang = "de-DE") {
  if (!("speechSynthesis" in window)) return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.85;
  speechSynthesis.speak(utterance);
}

function feedback(text, type) {
  byId("feedback").textContent = text;
  byId("feedback").className = `feedback ${type}`;
}

function shuffle(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(STORE)) || { xp: 0, streak: 0, progress: {} };
  } catch {
    return { xp: 0, streak: 0, progress: {} };
  }
}

function saveState() {
  localStorage.setItem(STORE, JSON.stringify(state));
}

function normalizeState() {
  state.xp = state.xp || 0;
  state.streak = state.streak || 0;
  state.progress = state.progress || {};
  state.playerName = state.playerName || "Du";
  state.dailyGoal = state.dailyGoal || 20;
  state.daily = state.daily || {};
  state.mistakes = state.mistakes || {};
  state.topicStats = state.topicStats || {};
  state.customTopics = state.customTopics || [];
  state.badges = state.badges || [];
  state.totalAnswers = state.totalAnswers || 0;
  state.settings = state.settings || { count: 10, direction: "auto" };
  state.theme = state.theme || "light";
}
