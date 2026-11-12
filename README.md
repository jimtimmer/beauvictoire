# beauvictoire-thuiszorg.nl

Statische website voor Beau Victoire Thuiszorg. Gewone HTML/CSS/JS zonder build-stap, gehost op GitHub Pages.

## Structuur

| Pad | Inhoud |
| --- | --- |
| `/` | Home |
| `/zorg/` | 24-uurszorg, blok-/dag-/nachtzorg, palliatieve zorg, OVV en pedicure, pruiken, kosten, FAQ |
| `/training/` | Trainingen, stage, agressietraining, coaching |
| `/over/` | Biografie, geloof, registraties, media |
| `/contact/` | Contactgegevens en formulier |
| `/bedankt/` | Pagina na het versturen van het formulier |
| `/documenten/` | Privacyverklaring, algemene voorwaarden, klachtenregeling (PDF) |
| `/biografie/`, `/zzp/`, … | Doorverwijzingen vanaf de oude WordPress-adressen |

## Beschikbaarheid aan/uit

Pas `config.json` aan en commit:

```json
{ "neemtClientenAan": false }
```

`true` toont een groene balk "Er is plek", `false` een oranje balk "Alle plekken bezet". De teksten staan ook in `config.json`.

## Contactformulier (Web3Forms)

1. Maak op https://web3forms.com een gratis access key aan met beauvictoirethuiszorg@gmail.com.
2. Vervang `WEB3FORMS_ACCESS_KEY` in `contact/index.html` door die key.

## Live zetten

1. Push naar een GitHub-repo, ga naar Settings → Pages en kies branch `main`, map `/ (root)`.
2. Het bestand `CNAME` bevat al `www.beauvictoire-thuiszorg.nl`.
3. Zet bij de domeinbeheerder (Quickhost/Duocast) de DNS:
   - `www` → CNAME naar `<gebruikersnaam>.github.io`
   - kaal domein → A-records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
4. Zet in GitHub Pages "Enforce HTTPS" aan zodra het certificaat klaar is.
5. Laat de MX-records (e-mail) ongemoeid.
6. Pas daarna de WordPress-hosting opzeggen.

## Lokaal bekijken

```bash
python3 -m http.server 8000
```
