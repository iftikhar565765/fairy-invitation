/* ═══════════════════════════════════════════════════════════════
   FAEGLEN · config.js
   ---------------------------------------------------------------
   Main personalisation data for the site and visual editor.
   Longer copy, palette, and theme are editable here. Values
   marked SAMPLE are tasteful placeholders — replace them with
   your own before sending the link to your guests.
   ═══════════════════════════════════════════════════════════════ */

window.HEIRLOOM = {
  templateId: "faeglen",

  /* ── The couple — SAMPLE content, replace with your names ────── */
  couple: {
    partnerOne: "Elowen",                    // SAMPLE
    partnerTwo: "Finnian",                   // SAMPLE
    initials:  "E · F",                      // SAMPLE — used on seals & monograms
    namesLine: "Elowen & Finnian"            // SAMPLE — used across the site
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
    eventTitle: "Elowen & Finnian — Wedding"                                 // EDIT (calendar entry)
  },

  /* ── The venue ──────────────────────────────────────────────── */
  venue: {
    name: "The Wisteria Pavilion at Starhollow",         // SAMPLE
    address: "Starhollow Gardens, Hudson Valley, New York", // SAMPLE
    mapsQuery: "",                               // optional Maps search override
    /* A full URL here overrides the map link built above, e.g. an
       exact Google Maps place link or an Apple Maps URL.          */
    mapUrl: ""
  },

  /* ── Copy shown throughout the invitation ────────────────────
     The visual editor can change these values without editing HTML. */
  content: {
    pageTitle: "Elowen & Finnian · 19 June 2027 — Wedding Invitation",
    pageDescription: "Elowen and Finnian request the pleasure of your company at the Wisteria Pavilion at Starhollow — starlight, blossoms and one perfect evening, on Saturday the nineteenth of June 2027. Open your invitation.",
    socialTitle: "Elowen & Finnian — An Invitation · 19.06.2027",
    socialDescription: "Starlight, blossoms and a happily ever after — you are cordially invited.",
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
    invitationLead: "request the honour of your presence at the celebration of their marriage — an evening of starlight, blossoms and dancing until midnight.",
    invitationVenueSuffix: "· Hudson Valley",
    storyKicker: "№ 02 · Their Story",
    storyTitle: "Once upon",
    storyTitleScript: "a time",
    storyParagraphOne: "Every true story deserves a beautiful beginning, and ours began quietly — a garden full of wisteria, one shared umbrella, and a first conversation that outlasted the rain.",
    storyParagraphTwo: "Six years, two cities and a thousand small kindnesses later, we are writing our next chapter in the oldest language we know — love. Nothing would mean more than to have you beside us when we do.",
    storyQuote: "Whatever our souls are made of, his and mine are the same.",
    storyQuoteLabel: "— Emily Brontë, read aloud on our first walk home",
    storyNote: "chapter the first, and all the rest",
    storyNoteCredit: "— scribbled in the margin of a storybook, on our first trip",
    storyCaptionOne: "the beginning",
    storyCaptionTwo: "always, us",
    storyCaptionFour: "the long path",
    storyAside: "and they lived",
    saveDateTitle: "Save the Date",
    saveDateCrossing: "an evening of wishes & first dances",
    saveDateNote: "Add the date to your calendar and keep these particulars close.",
    calendarDownloadLabel: "Add to Calendar",
    calendarGoogleLabel: "Google Calendar",
    detailsKicker: "№ 04 · The Particulars",
    detailsTitleFirst: "Wedding",
    detailsTitleSecond: "Details",
    detailsIntro: "The day, at a glance.",
    ceremonyLabel: "The Ceremony",
    ceremonyTime: "Half past six",
    ceremonyNote: "Vows beneath the wisteria as the light turns to gold.",
    receptionLabel: "The Reception",
    receptionTime: "Eight o'clock",
    receptionNote: "Dinner and dancing in the pavilion, until the last lantern fades.",
    kindlyReplyLabel: "Kindly Reply",
    kindlyReplyNote: "Kindly send your response using the reply card further below.",
    particularsEyebrow: "The Particulars",
    particularsDateLabel: "The Date",
    particularsPlaceLabel: "The Place",
    particularsAttireLabel: "The Attire",
    particularsAttire: "Garden formal",
    particularsAttireNote: "Evening dress with a flourish of gold and wisteria is most welcome.",
    particularsCarriagesLabel: "The Carriages",
    particularsCarriagesTime: "At one o'clock",
    particularsCarriagesNote: "The last lantern dims as the nightingales begin.",
    paletteKicker: "№ 05 · The Colours of the Day",
    paletteTitleFirst: "The wedding",
    paletteTitleSecond: "palette",
    paletteIntro: "Twilight indigo and gleaming gold, moonlit ivory and wisteria — the colours of the celebration.",
    dressCodeLabel: "Attire · Evening Dress",
    dressCodeTitle: "Garden formal",
    dressCodeNote: "Twilight indigo, ivory and a flourish of gold are most welcome — dress as splendidly as you feel.",
    weddingDayKicker: "№ 06 · The Celebration",
    weddingDayTitleFirst: "The Wedding",
    weddingDayTitleSecond: "Day",
    venueKicker: "№ 07 · The Place",
    venueDescription: "A moonlit pavilion deep in an old garden estate — wisteria in the rafters, lantern-lit paths through the roses, and a terrace glowing with wishes for one unforgettable evening.",
    venueCeremonyLabel: "Ceremony",
    venueCeremonyText: "beneath the wisteria, as the sun sets",
    venueReceptionLabel: "Reception",
    venueReceptionText: "dinner & dancing in the pavilion",
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
    closingMessage: "Thank you, from the depths of our hearts, for being part of our story. We cannot wait to celebrate with you beneath the wisteria and the stars — an evening straight out of a fairy tale.",
    footerTagline: "A wish, a vow, a happily ever after."
  },

  palette: [
    { name: "Twilight Indigo", color: "#1C2244" },
    { name: "Wisteria",        color: "#5C5593" },
    { name: "Pixie Gold",      color: "#E9CC86" },
    { name: "Moonlit Ivory",   color: "#F8F3E6" },
    { name: "Blossom Rose",    color: "#D9A8BC" }
  ],
  theme: "twilight",
  themeColors: {},
  fonts: {
    editorial: "prata",
    display: "cormorant",
    script: "greatVibes",
    hand: "shadowsIntoLight",
    body: "jost"
  },

  /* ── Wedding-day moments — SAMPLE words for the wedding programme.
     Use one short word per entry; an empty list hides the section. */
  moments: ["Gathering", "The Vows", "The Feast", "Toasts", "The First Dance", "Starlight", "Carriages"],

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
    invalidMessage: "The exact hour is still being written between the pages — see the details below.",
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
