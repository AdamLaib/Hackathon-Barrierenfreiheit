# Text-to-Speech Website

## Beschreibung
Diese Website bietet eine einfache Text-to-Speech-Funktionalität. Nutzer können Text in mehrere Eingabefelder eingeben, und durch das Drücken der Enter-Taste wird der Text laut vorgelesen. Die Seite ist eine Demonstration der Web Speech API, die in modernen Browsern unterstützt wird.

## Installation

1. **Dateien herunterladen:**
   Lade die `index.html` und `tts.js` Dateien herunter und platziere sie in einem Verzeichnis auf deinem Computer.

2. **Lokaler Webserver (optional):**
   Um die Website lokal zu betrachten, kannst du einen einfachen Webserver verwenden. Starte diesen im Verzeichnis der Website-Dateien:
   ```bash
   python -m http.server
   ```
   Gehe dann in deinem Browser zu `http://localhost:8000`.

## Verwendung

1. **Text eingeben:**
   Öffne die `index.html` Datei in einem Browser. Du wirst mehrere Textfelder sehen, in die du Text eingeben kannst.

2. **Text vorlesen lassen:**
   Nachdem du den Text eingegeben hast, drücke die Enter-Taste. Der Text wird dann laut vorgelesen.

3. **Nächstes Textfeld auswählen:**
   Wenn du die Enter-Taste erneut drückst, springt der Cursor zum nächsten leeren Textfeld, damit du weiteren Text eingeben kannst.
