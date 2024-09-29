export const languages = {
    en: 'English',
    it: 'Italiano',
};
export type LanguageCode = keyof typeof languages;
export const defaultLang = 'it';
export const showDefaultLang = false;

export const ui = {
    en: {
        'nav.home': 'Home',
        'nav.schedule': 'Schedule',
        'nav.sessions': 'Sessions',
        'nav.speakers': 'Speakers',
        'nav.location': 'Location',
        'nav.lang': 'Language',
        'nav.faq': 'Faq',
        'nav.team': 'Team',
        'hero.ticketsAvailable': 'TICKETS AVAILABLE',
        'footer.share': 'Share',
        'footer.followUs': 'Follow us',
        'info.locationName': 'Polythecnic of Bari',
        'info.partecipants': 'Participants',
        'info.speakers': 'Speakers',
        'info.tracks': 'Tracks',
        'info.categories': 'Categories',
        'speaker.seeAll': 'See all speakers',
        'ticket.title': 'Book your ticket now',
        'ticket.free': 'FREE',
        'ticket.cta': 'Get your ticket',
        'community.cta': 'Join us',
        'sessions.listTitle': 'Sessions',
        'sessions.shortMinutes': 'mins',
        'sessions.shortHours': 'hrs',
        'sessions.toBeAnnunced': 'To be annunced',
        'session.detailTitle': 'Session details',
        'session.speakers': 'Speakers',
        'session.topics.listTitle': 'Topics',
        'session.topics.topicSessionList': '$topic$\'s sessions',
        'speakers.listTitle': 'Speakers',
        'speakers.detailTitle': 'Speaker details',
        'speakers.sessionList': 'Sessions',
        'scheduling.noschedule': 'Schedule not available',
        'session.room': 'Room',
    },
    it: {
        'nav.home': 'Home',
        'nav.schedule': 'Schedule',
        'nav.sessions': 'Sessioni',
        'nav.speakers': 'Speaker',
        'nav.location': 'Location',
        'nav.lang': 'Lingua',
        'nav.faq': 'Faq',
        'nav.team': 'Team',
        'footer.share': 'Condividi',
        'footer.followUs': 'Seguici su',
        'info.locationName': 'Politecnico di Bari',
        'info.partecipants': 'Partecipanti',
        'info.speakers': 'Speaker',
        'info.tracks': 'Track',
        'info.categories': 'Categorie',
        'speaker.seeAll': 'Vedi tutti gli speaker',
        'hero.ticketsAvailable': 'BIGLIETTI DISPONIBILI',
        'ticket.title': 'Prenota ora il tuo biglietto',
        'ticket.free': 'GRATIS',
        'ticket.cta': 'Iscriviti',
        'community.cta': 'Unisciti',
        'sessions.listTitle': 'Sessioni',
        'sessions.shortMinutes': 'min',
        'sessions.shortHours': 'ore',
        'sessions.toBeAnnunced': 'Da annuncare',
        'session.detailTitle': 'Dettagli sessione',
        'session.speakers': 'Speaker',
        'session.topics.listTitle': 'Topic',
        'session.topics.topicSessionList': 'Sessioni su \'$topic$\'',
        'speakers.listTitle': 'Speaker',
        'speakers.detailTitle': 'Dettagli speaker',
        'speakers.sessionList': 'Sessioni',
        'scheduling.noschedule': 'Schedule non disponibile',
        'session.room': 'Aula',
    },
} as const;