/* ═══════════════════════════════════════════════════════════════
   VESPERWOOD · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "vesperwood",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Wren",                      // SAMPLE
    partnerTwo: "Theodore",                  // SAMPLE
    initials:  "W · T",                      // SAMPLE — used on seals & monograms
    namesLine: "Wren & Theodore"             // SAMPLE — used across the site
  },

  /* ── The wedding date & time ─────────────────────────────────
     iso : ISO 8601 date-time WITH an explicit UTC offset, so the
           countdown and the calendar files are correct on every
           guest's device, wherever they are in the world.
           Format: "YYYY-MM-DDTHH:MM:SS±HH:MM"
           The sample below = 19 June 2027, 6:30 PM, GMT-4 (EDT).
     display / words / numerals : how the date reads in the copy. */
  wedding: {
    iso: "2027-06-19T18:30:00-04:00",                                        // EDIT
    endIso: "2027-06-20T01:00:00-04:00",                                     // EDIT — end of the celebration
    display: "Saturday, 19 June 2027 · 6:30 in the evening",                 // EDIT
    zoneLabel: "",                                                           // EDIT — optional note for guests abroad, e.g. "EDT"
    words: "Saturday · The Nineteenth of June · Two Thousand Twenty-Seven",  // EDIT
    numerals: "19 · 06 · 2027",                                              // EDIT
    eventTitle: "Wren & Theodore — Wedding"                                  // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Glasshouse at Aldergrove",        // SAMPLE
    address: "Aldergrove Estate, Hudson Valley, New York", // SAMPLE
    mapsQuery: "",                               // optional Maps search override
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Wren & Theodore · 19 June 2027 — Wedding Invitation",
    pageDescription: "Wren and Theodore request the pleasure of your company at the Glasshouse at Aldergrove — ferns, fireflies and one perfect evening, on Saturday the nineteenth of June 2027. Open your invitation.",
    socialTitle: "Wren & Theodore — An Invitation · 19.06.2027",
    socialDescription: "Ferns, fireflies and a forever kind of love — you are cordially invited.",
    navStory: "Story",
    navDetails: "Details",
    navVenue: "Venue",
    navRsvp: "RSVP",
    menuInvitation: "The Invitation",
    menuStory: "Our Story",
    menuSaveDate: "Save the Date",
    menuDetails: "The Details",
    menuPalette: "The Palette",
    menuWeddingDay: "The Wedding Day",
    menuVenue: "Venue & Location",
    menuRsvp: "Kindly Respond",
    menuCountdown: "The Countdown",
    menuClosing: "A Closing Note",
    openingEyebrow: "You are cordially invited to the wedding of",
    openingHint: "Touch the doors to enter",
    openButton: "Enter the Celebration",
    skipButton: "Skip straight to the invitation",
    envelopeAddress: "their honoured guests",
    invitationEyebrow: "Together with their families",
    invitationLead: "request the honour of your presence at the celebration of their marriage — an evening of fireflies, ferns and dancing beneath the boughs.",
    invitationVenueSuffix: "· Hudson Valley",
    storyKicker: "№ 02 · Their Story",
    storyTitle: "Once upon",
    storyTitleScript: "a time",
    storyParagraphOne: "Every great story deserves a beautiful beginning, and ours began quietly — a glasshouse full of ferns, one shared umbrella, and a first conversation that outlasted the rain.",
    storyParagraphTwo: "Six years, two cities and a thousand small kindnesses later, we are writing our next chapter in the oldest language we know — love. Nothing would mean more than to have you standing beside us when we do.",
    storyQuote: "Whatever our souls are made of, his and mine are the same.",
    storyQuoteLabel: "— Emily Brontë, read aloud on our first walk home",
    storyNote: "chapter the first, and all the rest",
    storyNoteCredit: "— written in the margin of a field guide, on our first trip",
    storyCaptionOne: "the beginning",
    storyCaptionTwo: "always, us",
    storyCaptionFour: "the long path",
    storyAside: "and they lived",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "an evening of fireflies & first dances",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "№ 04 · The Particulars",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Details",
    detailsIntro: "The day, at a glance.",
    ceremonyLabel: "The Ceremony",
    ceremonyTime: "Half past six",
    ceremonyNote: "Vows in the fern court as the light turns to gold.",
    receptionLabel: "The Reception",
    receptionTime: "Eight o'clock",
    receptionNote: "Dinner and dancing in the glasshouse, until the last lantern fades.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Garden formal",
    particularsAttireNote: "Evening dress with a flourish of green and gold is most welcome.",
    particularsCarriagesLabel: "The Carriages",
    particularsCarriagesTime: "At one o'clock",
    particularsCarriagesNote: "The last lantern dims as the nightingales begin.",
    paletteKicker: "№ 05 · The Colours of the Day",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "Deep pine and glimmering gold, ivory birch and fern — the colours of the celebration.",
    dressCodeLabel: "Attire · Evening Dress",
    dressCodeTitle: "Garden formal",
    dressCodeNote: "Deep green, ivory and a flourish of gold are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "№ 06 · The Celebration",
    weddingDayTitleFirst: "The Wedding",
    weddingDayTitleSecond: "Day",
    venueKicker: "№ 07 · The Place",
    venueDescription: "A Victorian glasshouse deep in an old-growth estate — ferns in the rafters, candlelit paths through the pines, and a moonlit clearing glowing with lanterns for one unforgettable evening.",
    venueCeremonyLabel: "Ceremony",
    venueCeremonyText: "in the fern court, as the sun sets",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & dancing in the glasshouse",
    mapButton: "View Location",
    rsvpKicker: "№ 08 · Your Reply",
    rsvpTitle: "Kindly Respond",
    rsvpLead: "Kindly reply by",
    rsvpNameLabel: "Your name",
    rsvpNamePlaceholder: "e.g. Eleanor Whitmore",
    rsvpNameError: "May we have your name? Two letters or more will do.",
    rsvpAttendanceLabel: "Will you be joining us?",
    rsvpAcceptLabel: "Joyfully accepts",
    rsvpDeclineLabel: "Regretfully declines",
    rsvpAttendanceError: "Please let us know whether you can come.",
    rsvpGuestsLabel: "Seats in your party",
    rsvpGuestsError: "May we have a seat count between one and the party size allowed?",
    rsvpGuestSingular: "guest",
    rsvpGuestPlural: "guests",
    rsvpDietaryLabel: "Dietary requirements",
    rsvpDietaryPlaceholder: "Allergies, intolerances, or dishes to avoid",
    rsvpMessageLabel: "A note for the couple",
    rsvpMessagePlaceholder: "Song requests, memories, well wishes…",
    rsvpSubmitLabel: "Send Response",
    rsvpAmendLabel: "Amend the reply",
    countdownDaysLabel: "Days",
    countdownHoursLabel: "Hours",
    countdownMinutesLabel: "Minutes",
    countdownSecondsLabel: "Seconds",
    countdownKicker: "№ 09 · The Grand Countdown",
    countdownTitle: "counting the hours until",
    countdownPromise: "“I do”",
    closingScript: "with all our love",
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. We cannot wait to celebrate with you among the ferns and the fireflies — an evening worthy of a fairy tale.",
    footerTagline: "A vow, a firefly, a forever."
  },

  palette: [
    { name: "Deep Pine",     color: "#0F2417" },
    { name: "Fern & Moss",   color: "#6F7C53" },
    { name: "Antique Gold",  color: "#CDA750" },
    { name: "Ivory Birch",   color: "#F7F3E4" },
    { name: "Firefly Amber", color: "#E8C06B" }
  ],
  theme: "grove",
  themeColors: {},
  fonts: {
    editorial: "italiana",
    display: "ebGaramond",
    script: "allura",
    hand: "cedarville",
    body: "karla"
  },

  /* ── Wedding-day moments — SAMPLE words for the wedding programme.
     Use one short word per entry; an empty list hides the section. */
  moments: ["Gathering", "Vows", "The Feast", "Toasts", "The Waltz", "Fireflies", "Carriages"],

  /* ── RSVP ─────────────────────────────────────────────────────
     endpoint : leave "" for the honest demonstration mode — the
                form validates and shows a preview of the reply and
                states clearly that nothing is sent or stored.
                Cloudflare's publishing service supplies the invitation-
                specific RSVP endpoint to public invitation pages.
     maxGuests: the number allowed by the invitation.
     deadline  : shown above the form.                                  */
  rsvp: {
    endpoint: "",
    maxGuests: 2,
    deadline: "the first of May, 2027"             // SAMPLE
  },

  /* ── Countdown wording (invalid or passed dates) ─────────────── */
  countdown: {
    invalidMessage: "The exact hour is still being pressed between the pages — see the details below.",
    pastMessage: "The celebration has begun — thank you for being part of our story."
  },

  /* ── Optional ambient music ───────────────────────────────────
     Drop a small looping file at assets/audio/theme.mp3 and set
     src to enable the volume toggle in the navigation. Never
     autoplays; stays silent if the file is missing.                  */
  audio: {
    src: ""             // e.g. "assets/audio/theme.mp3"
  }
};
