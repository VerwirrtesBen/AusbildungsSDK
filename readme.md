# Ausbildungs SDK

Dies ist eine Typescript SDK zur einfachen Nutzung der Folgen APIs von Andreas Fischer und der Agentur für Arbeit. Diese nutzt Axios.

## Ausbildungssuche per API

<https://rest.arbeitsagentur.de/infosysbub/absuche/pc/v1/ausbildungsangebot>

Diese API verfügt über eine Vielzahl an informationen zu Ausbildungs und Weiterbildungsstellen.

Diese Daten können für eine Darstellung ehnlich der Folgenden genutzt werden:

<https://web.arbeitsagentur.de/ausbildungssuche/berufsausbildung-suche>

Weitere Documentation:

<https://ausbildungssuche.api.bund.dev/>

<https://github.com/AndreasFischer1985/ausbildungssuche-api>

## Studiensuche

<https://rest.arbeitsagentur.de/infosysbub/studisu/pc/v1/studienangebote>

Diese API verfügt über eine Vielzahl an informationen zu Studienangeboten.

Auch diese Daten können für eine Darstellung ehnlich der Folgenden genutzt werden:

<https://web.arbeitsagentur.de/studiensuche/?uk=10&sty=0>

Weitere Dokumentation:

<https://studiensuche.api.bund.dev/>
<https://github.com/AndreasFischer1985/studiensuche-api>

## Begrenzung

Die Informationen, die über die APIs abgefragt werden können sich mit denen, auf der Website der Bundesagentur für Arbeit, unterscheiden.

## Nutzung der SDk

Das die Methode getAzubiAngebote() &ndash; bzw. getStudiAngebot() des Objektes AngeboteProvider gibt ein Objekt zurück. Dieses enthält ein Page (getPage()) Objekt mit Meta informationen, einen Status (getStatus()) und Liste mit Angebot-Objekten (getAngebotListe).
Diese Angebot Objekte wiederum enthalten ausgewählte Informationen aus der API.

## Weitere Informationen

### Weitere API

Weiterhin gibt es eine Job API **, diese ist jedoch nicht in der SDK implementiert.**

<https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v6/jobs>

Dafür können zum Beispiel folgende Werte für den Parameter "was" weitergegeben werden.

- Bundesfreiwilligendienst
- FSJ
- Freiwilliges%20Sociales%20Jahr

Dokumentation:

<https://jobsuche.api.bund.dev/>
<https://github.com/bundesAPI/jobsuche-api>

## Info Quellen ohne API

Platform von **Aktion Mensch**, zum Finden von Ehrenähmtern und Möglichkeiten zu freiwilligem Engagement:

<https://www.aktion-mensch.de/ehrenamt/engagement-plattform>

Ähnliche suche für freiwillige Angebote in Deutschland, Östereich und der Schweiz:

<https://www.vostel.de>

Auf einer Website von Verein für sociales Leben ev. kann man Angebote finden oder sich selbst zur Bewerbung stellen:

<https://www.bundes-freiwilligendienst.de/>
