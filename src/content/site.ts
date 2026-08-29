export const site = {
  name: "Dr. Joel Okutoyi",
  shortName: "Okutoyi",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  email: "ojoel@maseno.ac.ke",
  emailPersonal: "joelokutoyi@gmail.com",
  phone: "+254 726 989 854",
  phoneHref: "tel:+254726989854",
  linkedin: "https://www.linkedin.com/in/joel-okutoyi-470b572b",
  staffPage: "https://sbps.maseno.ac.ke/special-needs-staff",
  cvPdf:
    "https://sbps.maseno.ac.ke/sites/default/files/2020-11/full-CV-JOEL2.pdf",
  description:
    "Dr. Joel Okutoyi, PhD, is Senior Lecturer in Special Needs Education at Maseno University — a scholar of deaf education and Kenyan Sign Language, founder posture of the Okutoyi Foundation, preparing for the Butere Constituency parliamentary seat in 2032.",
};

export const person = {
  honorific: "Dr.",
  givenName: "Joel",
  familyName: "Okutoyi",
  credentials: "PhD",
  displayName: "Dr. Joel Okutoyi, PhD",
  role: "Senior Lecturer",
  department: "Department of Special Needs Education and Rehabilitation",
  school: "School of Education",
  institution: "Maseno University",
  tagline: "Educator. Advocate. Servant Leader.",
  email: site.email,
  emailPersonal: site.emailPersonal,
  phone: site.phone,
  phoneHref: site.phoneHref,
  address:
    "Department of Special Needs Education, Maseno University, Kisumu–Busia Road, P.O. Box 333–40105, Maseno, Kenya",
  taughtSince: 2009,
  phdYears: "2013–2017",
  degrees:
    "Ph.D. (2013–2017), M.Ed. (2009–2012) & B.Ed. First Class Honours (2005–2008) in Special Needs Education, Maseno University",
  daad: "PhD In-Country DAAD Scholarship (2014)",
  appointment: {
    title: "Senior Lecturer",
    announced: "June 2025",
    note: "Promoted to Senior Lecturer in the Department of Special Needs Education, Maseno University. The university staff directory still lists the earlier Lecturer title; the June 2025 appointment is from his public announcement.",
  },
  quote: {
    text: "It has been a journey of resilience, hard work and patience.",
    source: "On his appointment as Senior Lecturer, June 2025",
    href: "https://www.linkedin.com/posts/joel-okutoyi-470b572b_friends-join-me-as-i-celebrate-my-new-appointment-activity-7339553045166338048-mbA_",
  },
  experienceYears: 18,
  scholarlyWorks: "20+",
  roots: "Shitoyi Primary · St. Paul’s Boys High School, Lubinu–Mumias",
};

export type NavLink = { href: string; label: string };
export type NavItem =
  | NavLink
  | { label: string; children: NavLink[] };

/** Flat list for footer, sitemap helpers, and mobile menu */
export const navFlat: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/cv", label: "Curriculum Vitae" },
  { href: "/work", label: "Work" },
  { href: "/foundation", label: "Okutoyi Foundation" },
  { href: "/community", label: "Community Impact" },
  { href: "/recognition", label: "Recognition" },
  { href: "/speaking", label: "Speaking" },
  { href: "/mentorship", label: "Mentorship" },
  { href: "/vision", label: "Vision 2032" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

/**
 * Desktop nav — Craig groups, with Vision 2032 & Foundation elevated
 * (political ambition + philanthropic vehicle, Mudavadi-style).
 */
export const navPrimary: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Work",
    children: [
      { href: "/work", label: "Research & publications" },
      { href: "/cv", label: "Curriculum vitae" },
      { href: "/mentorship", label: "Mentorship" },
      { href: "/community", label: "Impact on the record" },
    ],
  },
  { href: "/vision", label: "Vision 2032" },
  { href: "/foundation", label: "Foundation" },
  {
    label: "Recognition",
    children: [
      { href: "/recognition", label: "Honours & milestones" },
      { href: "/speaking", label: "Speaking" },
    ],
  },
  {
    label: "Media",
    children: [
      { href: "/news", label: "News & features" },
      { href: "/gallery", label: "Gallery" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

/** Slim footer links */
export const footerNav: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/vision", label: "Vision 2032" },
  { href: "/foundation", label: "Foundation" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

/** @deprecated use navFlat / navPrimary */
export const nav = navFlat;

export const timeline = [
  {
    year: "1991–2002",
    title: "Shitoyi & Lubinu–Mumias",
    body: "Primary education at Shitoyi Primary School (KCPE 496 marks) and secondary at St. Paul’s Boys High School, Lubinu–Mumias (KCSE B+) — roots in Western Kenya that still shape his public vocation.",
  },
  {
    year: "2005–2008",
    title: "First Class Honours",
    body: "B.Ed. Special Needs Education, Maseno University — First Class Honours.",
  },
  {
    year: "2008–2009",
    title: "Model Centre for Deaf Education, Ngong",
    body: "Teacher and Head Teacher at the Model Centre for Deaf Education and Training — practice before the lecture hall.",
  },
  {
    year: "2009",
    title: "Joins Maseno University",
    body: "Begins as Graduate Assistant in the Department of Special Needs Education — a vocation held without interruption since 2009.",
  },
  {
    year: "2013–2017",
    title: "Doctoral study · DAAD",
    body: "Ph.D. in Special Needs Education at Maseno University; awarded the PhD In-Country DAAD Scholarship in 2014. Deepens work on communication, inclusion, and learners too often left at the back of the class.",
  },
  {
    year: "2013–2016",
    title: "Tutorial Fellow → Lecturer",
    body: "Tutorial Fellow (2013–2016), then Lecturer from December 2016 — forming special needs educators while publishing on hearing impairment and stuttering in Kakamega schools.",
  },
  {
    year: "2018–2020",
    title: "Funded research & postgraduate mentorship",
    body: "Researcher on Leonard Cheshire GEC-T, Nottingham SPHEIR, and NRF Kenya projects; supervises a cohort of M.Ed. and Ph.D. candidates in inclusive education, deaf education, and disability studies.",
  },
  {
    year: "2023–2025",
    title: "AI4KSL",
    body: "Co-Investigator on Artificial Intelligence for Kenyan Sign Language — an open dataset and assistive technology for deaf learners.",
  },
  {
    year: "June 2025",
    title: "Senior Lecturer",
    body: "Appointed Senior Lecturer. In his own words: a journey of resilience, hard work, and patience.",
  },
  {
    year: "2032",
    title: "Butere Constituency",
    body: "Preparing to offer himself for the parliamentary seat for Butere — not as a break from scholarship, but as its next classroom.",
  },
];

/** One home-page paragraph — Craig-length identity, not a CV dump */
export const homeBio =
  "Dr. Joel Okutoyi is a senior lecturer, teacher educator, and researcher who understands special needs education from the classroom of the child who is present and still not included. Formed at Shitoyi and Lubinu–Mumias, and at Maseno — First Class Honours, a DAAD doctorate, sixteen years of uninterrupted teaching — he studies Kenyan Sign Language, deaf pedagogy, and inclusive regular schools. Funded work with Leonard Cheshire, Nottingham SPHEIR, Kenya’s National Research Fund, and AI4KSL has taken that vocation from Kakamega classrooms to Dadaab and an open KSL dataset for the nation. He is preparing to offer himself for Butere Constituency in 2032 — not as a break from scholarship, but as its next classroom.";

export const about = {
  lede: "From Shitoyi Primary and Lubinu–Mumias to a First Class Honours degree, a DAAD doctorate, and the Senior Lectureship — an educator whose scholarship is written from real Kenyan classrooms.",
  paragraphs: [
    "Dr. Joel Okutoyi is Senior Lecturer in the Department of Special Needs Education and Rehabilitation at Maseno University. He holds a Ph.D. (2013–2017), M.Ed. (2009–2012), and B.Ed. First Class Honours (2005–2008) in Special Needs Education from Maseno, and was awarded the PhD In-Country DAAD Scholarship in 2014. He has served the department continuously since 2009 — Graduate Assistant, Tutorial Fellow, Lecturer, and now Senior Lecturer.",
    "Before the university, he was Teacher and Head Teacher at the Model Centre for Deaf Education and Training in Ngong (2008–2009). That early practice still shows: Kenyan Sign Language, deaf pedagogy, communication disorders, inclusive education, and curriculum for special needs remain the centre of his research interest.",
    "His field is the child who is present in the room and still not included — the deaf learner in a regular primary school; the adolescent who stutters; the teacher who wants to help and has not been given the tools. Funded work with Leonard Cheshire International, the University of Nottingham (SPHEIR), Kenya’s National Research Fund, and AI4KSL has taken that vocation from Kakamega classrooms to Dadaab, Kisumu, and an open KSL dataset for the nation.",
    "As a postgraduate mentor he has guided M.Ed. and Ph.D. candidates through inclusive education, deaf education, low vision, intellectual disability, Braille, and Kenyan Sign Language literacy. In the department he has served as Timetabling and Examination Coordinator, IT Champion, and Shows and Exhibitions Coordinator.",
    "Of life beyond the lecture hall he has said that he runs community-based activities in Western Kenya to empower persons with disabilities, orphans, and the vulnerable. He is preparing to offer himself for the people of Butere Constituency in the National Assembly in 2032. The work that qualifies him is already on the record — including his full curriculum vitae.",
  ],
};

export const researchThemes = [
  {
    title: "Deaf education & Kenyan Sign Language",
    body: "From classroom attitude studies to the AI4KSL dataset: making KSL a language of instruction, not an afterthought.",
  },
  {
    title: "Inclusive regular schools",
    body: "Support services, resources, and co-curricular strategies so a child with hearing impairment can belong in an ordinary Kenyan primary school.",
  },
  {
    title: "Speech, stuttering, and dignity",
    body: "Documenting how fear, stigma, and embarrassment keep learners who stutter from the front of the class — and what schools can change.",
  },
  {
    title: "Curriculum that reaches the child",
    body: "Mathematics for deaf learners, teaching resources in Dadaab, and the slow work of matching content to the learner in front of the teacher.",
  },
];

export const publications = [
  {
    year: 2024,
    title:
      "Kenyan Sign Language (KSL) Dataset: Using Artificial Intelligence (AI) in Bridging Communication Barrier among the Deaf Learners",
    authors: "L. Wanzare, J. Okutoyi, M. Kang’ahi, M. Ayere",
    venue: "arXiv:2410.18295 (cs.AI)",
    href: "https://arxiv.org/abs/2410.18295",
    note: "Open dataset: ~14,000 English sentences, ~20,000 signed videos, 4,000 HamNoSys transcriptions. Data from 48 teachers/tutors and 400 deaf learners.",
  },
  {
    year: 2024,
    title:
      "Leveraging Artificial Intelligence for Kenyan Sign Language Production to Support Deaf Learners",
    authors: "M. Ayere, L. Wanzare, J. Okutoyi, M. Kangahi, E. Maina",
    venue: "ICERI 2024, pp. 2325–2334",
    href: "https://library.iated.org/publications/ICERI2024",
  },
  {
    year: 2024,
    title:
      "Influence of Curriculum Perspectives on Academic Performance in Mathematics in Schools for Deaf in Kenya",
    authors: "Fondo Kalama Hassan; Okutoyi Joel",
    venue: "Greener Journal of Educational Research, 14(1), 72–80",
    href: "https://www.gjournals.org/2024/09/05/090124107-fondo-and-okutoyi/",
  },
  {
    year: 2025,
    title: "Kenyan sign language word-based pose dataset",
    authors:
      "E. Maina, L. Wanzare, J. Obuhuma, M. Ayere, M. Kang’ahi, J. Okutoyi",
    venue: "Data in Brief / PMC (data curation & validation)",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11999445/",
    note: "Dr. Okutoyi credited for data curation and validation.",
  },
  {
    year: 2020,
    title:
      "Assessment of Availability and Use of Teaching and Learning Resources for Retention of Learners with Special Needs in Regular Primary Schools in Dadaab Sub-County, Kenya",
    authors: "Dure Mohammed Osman, P. Oracha, Joel Okutoyi",
    venue:
      "IRA International Journal of Education and Multidisciplinary Studies, 16(2)",
    href: "https://doi.org/10.21013/jems.v16.n2.p4",
  },
  {
    year: 2020,
    title:
      "Influence of Language of Instruction on Academic Performance in English Grammar among Learners who are Deaf in Class Seven in Deaf Primary Schools in Lake Victoria Region, Kenya",
    authors: "Akoth Rosemary Oketch & Okutoyi Joel",
    venue: "African Annals of the Deaf, Issue 4, pp. 1–13",
  },
  {
    year: 2020,
    title:
      "Coping Strategies for Inclusion of Learners with Hearing Impairment in Regular Schools in Kakamega County, Kenya",
    authors: "Okutoyi Joel",
    venue: "International Journal of Education and Multidisciplinary Studies, 16(2)",
  },
  {
    year: 2020,
    title:
      "Extent of Adaptation of Teaching and Learning Strategies in Public Centers in Kisumu County, Kenya",
    authors: "Kundu Scholastic & Okutoyi Joel",
    venue: "European Journal of Special Education, Vol. 5",
  },
  {
    year: 2020,
    title:
      "Influence of Kenyan Sign Language on Syntactical Patterns of Written English in Primary Schools for the Deaf in Kenya",
    authors: "Samoei C. Ruth, Adoyo Peter Oracha & Okutoyi Joel",
    venue: "European Journal of Special Education, Vol. 5",
  },
  {
    year: 2016,
    title:
      "Inclusive Teaching-Learning Strategies to Meet Academic Needs of Learners with Special Needs in Kenya (A Case of Kakamega East Sub-county)",
    authors: "Otundo Denis Tsisindu, Joel Okutoyi, Khasakhala Edward",
    venue:
      "IRA International Journal of Education and Multidisciplinary Studies, 5(2)",
    href: "https://doi.org/10.21013/jems.v5.n2.p7",
  },
  {
    year: 2016,
    title:
      "Extent Stuttering Effects Occur Among Learners Who Stutter in Primary Schools in Kenya (A Case of Kakamega County)",
    authors: "Okutoyi Joel, Kochung J. Edward, Mbagaya V. Catherine",
    venue: "Greener Journal of Educational Research, 6(6), 223–229",
    href: "https://gjournals.org/GJER/archive/nov-2016-vol-66/okutoyi-et-al.html",
  },
  {
    year: 2016,
    title:
      "Effects of Stuttering on Social Interaction among Young Adolescents in Kakamega County, Kenya",
    authors: "Joel Okutoyi, Kochung J. Edwards, Mbagaya V. Catherine",
    venue: "Scholars Journal of Arts, Humanities and Social Sciences, 4(7)",
    href: "https://doi.org/10.21276/sjahss.2016.4.7.12",
  },
  {
    year: 2015,
    title:
      "Primary School Deaf Children’s Competence in Kenyan Sign Language in Kenya: An Investigation",
    authors: "Adoyo Peter Oracha & Okutoyi Joel",
    venue:
      "International Journal of Research in Humanities and Social Studies, 2(7), pp. 25–33",
  },
  {
    year: 2014,
    title:
      "Effects of Television on Academic Performance and Languages Acquisition of Pre-School Children",
    authors:
      "Avosa Arthur Ahinda, Zadock Obuchere Murundu, Michael Okello Okwara, Benson Charles Odongo, Joel Okutoyi",
    venue: "International Journal of Education and Research, 2(11)",
    href: "http://www.ijern.com/journal/2014/November-2014/40.pdf",
    note: "Study in Tiriki East Division, Hamisi Sub-County, Vihiga County.",
  },
  {
    year: 2013,
    title:
      "Support Services and Resources in Regular Primary Schools with Hearing Impaired Learners in Kenya: A Case Study of Kakamega County",
    authors:
      "Okutoyi J., Kochung E., Kabuka E.K., Were M.C., Oracha A.P.",
    venue: "International Journal of Scientific & Technology Research, 2(4)",
    href: "https://www.ijstr.org",
  },
  {
    year: 2013,
    title:
      "Strategies of Promoting Positive Attitude towards Learners with Hearing Impairment by Regular Primary Schools in Kenya (Kakamega County)",
    authors:
      "Okutoyi J., Kochung E., Ayieko Y., Kabuka E., Mbogani W.J., Oracha P.A., Were M.C.",
    venue: "Greener Journal of Educational Research, 3(2), 65–71",
    href: "https://doi.org/10.15580/gjer.2013.2.021313454",
  },
  {
    year: 2013,
    title:
      "Strategies Employed by Regular Primary Schools with Hearing Impaired Learners in Co-curricular Activities: Kakamega County, Kenya",
    authors:
      "Okutoyi J., Kochung E., Kabuka E.K., Were C., Adoyo P.O., Fwamba H.S., Mbogani W.J., Asesa E.",
    venue: "European Journal of Educational Sciences, 1(2), 79–92",
    href: "https://soe.maseno.ac.ke/Dr_Eric_Kabuka",
  },
];

export const ai4ksl = {
  name: "AI4KSL",
  fullName: "Artificial Intelligence for Kenyan Sign Language",
  role: "Co-Investigator",
  pi: "Dr. Lilian Wanzare (Lead Investigator)",
  coInvestigators: [
    "Dr. Mildred Ayere",
    "Dr. Maurine Kang’ahi",
    "Dr. Joel Okutoyi",
  ],
  funders:
    "AI for Education Innovation Network (AI4D Africa), co-funded by Canada’s IDRC-CRDI and Sweden’s Sida; managed by the EduAI Hub (University of Lagos, Université d’Abomey-Calavi, Data Science Nigeria).",
  href: "https://www.maseno.ac.ke/stakeholder-workshop-ai4ksl-bridging-language-barrier-using-artificial-intelligence-kenyan-sign",
  aim: "An assistive AI that translates spoken and written English into Kenyan Sign Language, rendered with virtual signing characters — so a deaf learner and a hearing classmate can share the same lesson.",
  stats: [
    { value: "400", label: "Deaf learners in the dataset" },
    { value: "48", label: "Teachers and tutors of the deaf" },
    { value: "20,000", label: "Signed KSL videos" },
    { value: "14,000", label: "English sentences with KSL gloss" },
  ],
  centres: [
    "St Angela Girls Secondary",
    "Ematundu Boys",
    "Nyangoma Mixed",
    "Maseno School",
    "Ebukuyu Primary",
  ],
};

export const impact = [
  {
    id: "ai4ksl",
    verified: true,
    title: "AI4KSL — language, made visible",
    image: "/images/ksl-hands.jpg",
    imageAlt:
      "A teacher’s hands mid-sign in a sunlit classroom, standing in for Kenyan Sign Language instruction.",
    body: "As Co-Investigator, Dr. Okutoyi helped build Kenya’s open KSL dataset and a prototype that turns spoken English into signed language. It is research with a classroom destination: deaf learners who should never have to wait for meaning to arrive second-hand.",
    stat: "400 deaf learners · 48 teachers",
    href: ai4ksl.href,
  },
  {
    id: "kakamega-inclusion",
    verified: true,
    title: "Kakamega classrooms that include",
    image: "/images/school-courtyard.jpg",
    imageAlt:
      "A Kenyan primary school courtyard in morning light — the geography of his early inclusion studies.",
    body: "A decade of published work on hearing-impaired learners in regular primary schools in Kakamega County: support services, co-curricular participation, teacher attitude, and inclusive strategies in Kakamega East. Scholarship that names the gap so a school can close it.",
    stat: "Kakamega County · 2013–2016",
  },
  {
    id: "stuttering",
    verified: true,
    title: "Learners who stutter, heard",
    image: "/images/lecture-hall.jpg",
    imageAlt: "An empty lecture hall waiting for a voice to finish.",
    body: "In Kakamega County some 4,400 school-age children were estimated among those who stutter. His studies found fear of speaking, frustration, anxiety, embarrassment, and stigma occurring to a large extent. The recommendation was not more silence — it was a school that accepts how a child speaks.",
    stat: "Kakamega County · 2016",
  },
  {
    id: "teachers",
    verified: true,
    title: "Forming special needs teachers",
    image: "/images/library-stacks.jpg",
    imageAlt: "University library stacks — the long apprenticeship of teaching teachers.",
    body: "Since 2009 he has taught in Maseno’s Department of Special Needs Education and Rehabilitation: the quiet, compounding work of sending teachers into Kenyan schools who already know that disability is not a deficit of the child.",
    stat: "Maseno University · since 2009",
  },
  {
    id: "western-kenya",
    verified: true,
    title: "Community work in Western Kenya",
    image: "/images/community-tree.jpg",
    imageAlt:
      "A community gathering under a large tree in Western Kenya, photographed at a respectful distance.",
    body: "In his public professional profile he states that he runs community-based activities in Western Kenya to empower persons with disabilities, orphans, and the vulnerable. Specific programme names, beneficiary numbers, and partners will be added here once they are confirmed in writing.",
    stat: "Western Kenya · ongoing",
    pendingDetail: true,
  },
  {
    id: "named-programmes",
    verified: false,
    title: "Named programmes — forthcoming",
    image: "/images/scholars-desk.jpg",
    imageAlt: "A scholar’s desk, waiting for the next page of the public record.",
    body: "Scholarships, mentorship cohorts, church and school partnerships, and any formal foundation work belong on this page — with names, years, and impact. They will appear when Dr. Okutoyi provides them. Credibility is a form of respect.",
    stat: "To be confirmed",
    pendingDetail: true,
  },
];

/** Mudavadi-style promise line — political vocation in one sentence */
export const politicalPromise =
  "Including the child who cannot hear — and lifting the household that carries them — is my promise to the people of Butere.";

export const pillars = [
  {
    roman: "I",
    label: "Education",
    title: "Education that includes",
    body: "A Butere in which a deaf child, a child who stutters, and a child without a textbook are still the Republic’s children. Teacher training, special needs resourcing, and schools that do not quietly sort learners out.",
  },
  {
    roman: "II",
    label: "Disability",
    title: "Disability with dignity",
    body: "Kenyan Sign Language in public services, accessible classrooms, and an economy that does not treat disability as charity. What AI4KSL began in the lab should reach the ward office, the clinic, and the market.",
  },
  {
    roman: "III",
    label: "Teachers & youth",
    title: "Teachers and the young",
    body: "The next generation of this place will be taught by someone. Invest in that someone: stipends, in-service training, and pathways for youth who want to serve with their minds, not only wait for a job.",
  },
  {
    roman: "IV",
    label: "Economy",
    title: "A local economy that keeps its people",
    body: "Western Kenya has sent too many of its children away. Agriculture, small enterprise, and skills that match the land — developed with the same evidence habit he brought to research, not with slogans.",
  },
  {
    roman: "V",
    label: "Health",
    title: "Health that reaches the village",
    body: "Speech and hearing services, maternal care, and clinics that do not require a family to choose between a bus fare and a diagnosis. Inclusion begins when a child can hear the lesson — or is taught as if they can.",
  },
  {
    roman: "VI",
    label: "Agriculture",
    title: "Food security for the homestead",
    body: "Butere’s farms and markets must feed the household that sends a child to school. Support for smallholders, cooperatives, and value chains that keep money in Kakamega — not only in the capital.",
  },
];

export const vision = {
  kicker: "Butere · Toward 2032",
  title: "Public service, after the lecture",
  lede: "He is not campaigning yet. He is preparing for Butere Constituency — the way a careful teacher prepares a lesson: by knowing the room.",
  promise: politicalPromise,
  seat: "Member of Parliament · Butere Constituency",
  horizon: "2032",
  paragraphs: [
    "In 2032 Dr. Okutoyi intends to seek the National Assembly seat for Butere Constituency in Kakamega County. The geography of his published work is Western Kenya, and Kakamega in particular — the schools, the assessment desks, the co-curricular fields where a child is either invited in or quietly left out. The people who already appear in his research — deaf learners, children who stutter, teachers in ordinary primary schools — are the people a serious Member of Parliament for Butere would refuse to forget.",
    "This platform is therefore not a manifesto of empty promises. It is a political agenda drawn from work already done — and from the Okutoyi Foundation’s duty to the same communities. If Butere is to be taught well, someone who has spent his life teaching the teachers should be in the room where the syllabus, the capitation, and the clinic budget are decided.",
  ],
  path: [
    {
      year: "Now–2030",
      title: "Listen, document, serve",
      body: "Deepen community work through the Okutoyi Foundation; keep publishing and forming teachers; walk Butere’s wards with a notebook, not a slogan.",
    },
    {
      year: "2030–2031",
      title: "Organise the classroom of politics",
      body: "Build a transparent team, a written platform from the six pillars, and partnerships that outlast a single election cycle.",
    },
    {
      year: "2032",
      title: "Offer himself for Butere",
      body: "Seek the National Assembly seat — accountable to the child who cannot hear, the teacher who has not been equipped, and the household that feeds them both.",
    },
  ],
  disclaimer:
    "This is a personal and professional site, not an IEBC-nominated campaign. Language about 2032 and Butere Constituency describes stated intention, not an electoral petition. Pillar language is inferred from published work and will be replaced by his own manifesto text when written.",
};

/**
 * Okutoyi Foundation — philanthropic vehicle (Mudavadi Foundation structure:
 * founders’ message, Education / Health / Socio-Economic / Outreach, partner invite).
 * Named programmes stay pending until confirmed in writing.
 */
export const foundation = {
  name: "Okutoyi Foundation",
  kicker: "Philanthropy · Western Kenya",
  title: "A vehicle for the work already begun",
  lede: "You cannot hope to build a better constituency without improving the individuals it leaves behind. The Okutoyi Foundation is the formal home for community work among persons with disabilities, orphans, and the vulnerable — and for the partnerships that make that work durable.",
  /** Classic line used by similar Kenyan foundations — attributed correctly, not claimed as his words */
  foundersQuote:
    "You cannot hope to build a better world without improving individuals. As we work for our own improvement, let us also share a general responsibility for all humanity.",
  foundersQuoteAttribution: "Marie Curie",
  foundersBridge:
    "For the Okutoyi Foundation that responsibility begins with the child who is present in the classroom and still not included — and with the household in Western Kenya that carries them.",
  message: [
    "Dr. Joel Okutoyi has said that beyond the lecture hall he runs community-based activities in Western Kenya to empower persons with disabilities, orphans, and the vulnerable. One-on-one giving is not enough when the need is structural. The Okutoyi Foundation exists so that assistance can be channelled transparently, with beneficiaries and stakeholders in the room where solutions are decided.",
    "Our focus mirrors what his scholarship already teaches: education that includes, health that reaches the homestead, socio-economic dignity for households living with disability, and outreach that does not treat orphanhood or vulnerability as a footnote. Lasting solutions are only realised if the people who need support help determine them.",
    "We humbly invite partners — schools, churches, clinics, county actors, diaspora friends, and fellow Kenyans — to walk with the Foundation as we build programmes that can be named, audited, and improved in public.",
  ],
  statusNote:
    "Programme names, bursary rolls, facility partnerships, and registration particulars will be published here as they are confirmed. Until then, the Foundation page states the vocation and the structure — not invented statistics.",
  /** Fill when confirmed — leave null to keep the page honest */
  facts: {
    legalName: null as string | null,
    registrationNumber: null as string | null,
    registeredIn: null as string | null,
    yearEstablished: null as string | null,
    trustees: [] as string[],
    bankPaybill: null as string | null,
    programmes: [] as {
      name: string;
      focus: string;
      year?: string;
      beneficiaries?: string;
    }[],
    partners: [] as string[],
  },
  pillars: [
    {
      title: "Education",
      body: "Bursaries and learning support for bright but needy learners; teacher formation; Kenyan Sign Language and inclusive classroom practice — so a child’s right to education is not a slogan.",
      href: "/community",
    },
    {
      title: "Health",
      body: "Speech, hearing, and related support so families are not forced to choose between a bus fare and a diagnosis. Dignity in care before charity in speeches.",
      href: "/contact",
    },
    {
      title: "Socio-economic dignity",
      body: "A hand up, not a hand-out: livelihoods and micro-enterprise pathways for persons with disabilities and vulnerable households in Western Kenya.",
      href: "/contact",
    },
    {
      title: "Outreach",
      body: "Orphans, early childhood support, and community days that keep the most vulnerable inside the circle of the Republic — not outside the school gate.",
      href: "/community",
    },
  ],
  invite: {
    title: "Partner with the Foundation",
    body: "Volunteer your time, share an idea, or help strengthen the kitty. Transparent structures make goodwill useful.",
    cta: "Write to us",
    href: "/contact",
  },
};

/** Brief home teasers — Mudavadi political + foundation presence without a long home */
export const homeServiceTeasers = [
  {
    href: "/vision",
    kicker: "Political ambition · 2032",
    title: "Vision for Butere",
    body: politicalPromise,
    cta: "Read the agenda →",
  },
  {
    href: "/foundation",
    kicker: "Okutoyi Foundation",
    title: "Service before the seat",
    body: "Education, health, socio-economic dignity, and outreach for persons with disabilities, orphans, and the vulnerable in Western Kenya.",
    cta: "Visit the Foundation →",
  },
];

export const gallery = [
  {
    src: "/images/campus-colonnade.jpg",
    alt: "A university colonnade at golden hour — standing in for the Maseno years.",
    caption: "The academy",
    credit: "Atmospheric study; official campus photography to be added.",
  },
  {
    src: "/images/ksl-hands.jpg",
    alt: "Hands signing in a classroom.",
    caption: "Kenyan Sign Language",
    credit: "Atmospheric study for AI4KSL; field photographs to be added.",
  },
  {
    src: "/images/school-courtyard.jpg",
    alt: "A Kenyan primary school courtyard.",
    caption: "The regular school",
    credit: "Atmospheric study for the Kakamega inclusion research.",
  },
  {
    src: "/images/community-tree.jpg",
    alt: "Community gathering under a tree.",
    caption: "Western Kenya",
    credit: "Atmospheric study for community work; event photographs to be added.",
  },
  {
    src: "/images/lecture-hall.jpg",
    alt: "An empty lecture hall.",
    caption: "The lecture",
    credit: "Atmospheric study.",
  },
  {
    src: "/images/library-stacks.jpg",
    alt: "Library stacks in warm light.",
    caption: "The record",
    credit: "Atmospheric study.",
  },
  {
    src: "/images/western-kenya-hills.jpg",
    alt: "Rolling hills of Western Kenya at late afternoon.",
    caption: "Home ground",
    credit: "Atmospheric landscape.",
  },
  {
    src: "/images/scholars-desk.jpg",
    alt: "A scholar’s desk.",
    caption: "The page",
    credit: "Atmospheric study.",
  },
];

export const news = [
  {
    slug: "senior-lecturer-2025",
    date: "2025-06-14",
    title: "Appointed Senior Lecturer, Maseno University",
    excerpt:
      "Dr. Okutoyi announced his appointment as Senior Lecturer in the Department of Special Needs Education — “a journey of resilience, hard work and patience.”",
    href: "https://www.linkedin.com/posts/joel-okutoyi-470b572b_friends-join-me-as-i-celebrate-my-new-appointment-activity-7339553045166338048-mbA_",
    source: "LinkedIn",
  },
  {
    slug: "ksl-pose-dataset-2025",
    date: "2025-03-01",
    title: "KSL word-based pose dataset released",
    excerpt:
      "A companion open dataset for Kenyan Sign Language production, with Dr. Okutoyi credited for data curation and validation.",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11999445/",
    source: "Data in Brief / PMC",
  },
  {
    slug: "ksl-arxiv-2024",
    date: "2024-10-23",
    title: "KSL dataset paper posted to arXiv",
    excerpt:
      "Wanzare, Okutoyi, Kang’ahi and Ayere describe the methodology behind ~20,000 signed videos and 14,000 English–KSL sentence pairs.",
    href: "https://arxiv.org/abs/2410.18295",
    source: "arXiv",
  },
  {
    slug: "ai4ksl-workshop",
    date: "2024-01-15",
    title: "Maseno launches AI4KSL with the deaf community",
    excerpt:
      "Investigators, research assistants, members of the deaf community, and teachers from schools for the deaf mapped the road to an English-to-KSL assistive technology.",
    href: "https://www.maseno.ac.ke/stakeholder-workshop-ai4ksl-bridging-language-barrier-using-artificial-intelligence-kenyan-sign",
    source: "Maseno University",
  },
  {
    slug: "deaf-mathematics-2024",
    date: "2024-09-05",
    title: "New paper on mathematics curriculum in schools for the deaf",
    excerpt:
      "With Fondo Kalama Hassan: how content, resources, methods, and time shape mathematics performance for deaf learners in Kenya.",
    href: "https://www.gjournals.org/2024/09/05/090124107-fondo-and-okutoyi/",
    source: "Greener Journal of Educational Research",
  },
];

export const sources = [
  {
    label: "Full CV (PDF) — Maseno School of Education",
    href: "https://sbps.maseno.ac.ke/sites/default/files/2020-11/full-CV-JOEL2.pdf",
    what: "Complete curriculum vitae (November 2020): education, research projects, postgraduate mentorship, appointments, leadership, conferences, publications, contact details.",
  },
  {
    label: "Maseno University — Special Needs staff directory",
    href: "https://sbps.maseno.ac.ke/special-needs-staff",
    what: "Lists Dr. Joel Okutoyi, Lecturer; Ph.D., M.Ed. & B.Ed. in Special Needs Education, Maseno University; ojoel@maseno.ac.ke.",
  },
  {
    label: "LinkedIn — Joel Okutoyi",
    href: "https://www.linkedin.com/in/joel-okutoyi-470b572b",
    what: "Professional biography: 18 years in special and inclusive education; taught at Maseno since 2009; DAAD scholar; community activities in Western Kenya for persons with disabilities, orphans, and the vulnerable.",
  },
  {
    label: "LinkedIn — Senior Lecturer announcement, June 2025",
    href: "https://www.linkedin.com/posts/joel-okutoyi-470b572b_friends-join-me-as-i-celebrate-my-new-appointment-activity-7339553045166338048-mbA_",
    what: "Public announcement of appointment as Senior Lecturer.",
  },
  {
    label: "Maseno University — AI4KSL stakeholders workshop",
    href: "https://www.maseno.ac.ke/stakeholder-workshop-ai4ksl-bridging-language-barrier-using-artificial-intelligence-kenyan-sign",
    what: "Project aims, funders, investigators (Dr. Okutoyi as Co-Investigator), and pilot centres.",
  },
  {
    label: "arXiv:2410.18295",
    href: "https://arxiv.org/abs/2410.18295",
    what: "KSL dataset paper; methodology and dataset sizes.",
  },
  {
    label: "Greener Journal — Fondo & Okutoyi (2024)",
    href: "https://www.gjournals.org/2024/09/05/090124107-fondo-and-okutoyi/",
    what: "Mathematics curriculum and deaf learners.",
  },
  {
    label: "Greener Journal — Okutoyi, Kochung & Mbagaya (2016)",
    href: "https://gjournals.org/GJER/archive/nov-2016-vol-66/okutoyi-et-al.html",
    what: "Stuttering effects among learners in Kakamega County.",
  },
  {
    label: "IJERN — television and pre-school language (2014)",
    href: "http://www.ijern.com/journal/2014/November-2014/40.pdf",
    what: "Co-authored study in Hamisi Sub-County, Vihiga County.",
  },
];

export const stats = [
  { value: "2009", label: "Teaching at Maseno" },
  { value: "18 yrs", label: "Special & inclusive education" },
  { value: "PhD", label: "Special Needs Education" },
  { value: "2032", label: "Butere Constituency" },
];

/** Mission line — Craig-style hero quote, grounded in his field */
export const missionQuote =
  "Making classrooms include the child who cannot hear — and the Republic that forgets them.";

/** Craig-style home metrics — short labels, verified counts */
export const impactMetrics = [
  { value: "20+", label: "Publications" },
  { value: "9+", label: "Postgraduate mentees" },
  { value: "12+", label: "Conference papers" },
  { value: "16+", label: "Years at Maseno" },
  { value: "4", label: "Funded projects" },
];

/**
 * Hero “Research impact” card — a small bar chart of verified counts
 * (not a Dimensions export; we do not have citation indexes to show).
 */
export const researchImpact = {
  title: "Research impact",
  blurb:
    "Published work at the meeting of education and disability rights — quality schooling, reduced inequality, and language access for deaf Kenyans.",
  source: "From the public CV and papers — not a Dimensions export.",
  bars: [
    { value: "20+", n: 20, label: "Publications" },
    { value: "12+", n: 12, label: "Conferences" },
    { value: "9+", n: 9, label: "Mentees" },
    { value: "4", n: 4, label: "Projects" },
    { value: "16+", n: 16, label: "Years" },
  ],
};

export const featuredWork = {
  kicker: "Featured work",
  title: "AI4KSL: Bridging English and Kenyan Sign Language",
  subtitle: "Maseno University · Co-Investigator",
  href: "https://www.maseno.ac.ke/stakeholder-workshop-ai4ksl-bridging-language-barrier-using-artificial-intelligence-kenyan-sign",
  image: "/images/ksl-hands.jpg",
  imageAlt:
    "Hands in a classroom — standing in for Kenyan Sign Language until project photography is supplied.",
  cta: "Explore the project",
};

export const recognition = [
  {
    year: "2025",
    title: "Senior Lecturer, Maseno University",
    body: "Appointed Senior Lecturer in the Department of Special Needs Education and Rehabilitation — a public milestone after sixteen years of continuous service.",
    href: "https://www.linkedin.com/posts/joel-okutoyi-470b572b_friends-join-me-as-i-celebrate-my-new-appointment-activity-7339553045166338048-mbA_",
  },
  {
    year: "2023–2025",
    title: "AI4KSL Co-Investigator",
    body: "Named Co-Investigator on Maseno’s Artificial Intelligence for Kenyan Sign Language project, funded through the AI4D Africa / EduAI network (IDRC & Sida).",
    href: "https://www.maseno.ac.ke/stakeholder-workshop-ai4ksl-bridging-language-barrier-using-artificial-intelligence-kenyan-sign",
  },
  {
    year: "2014",
    title: "PhD In-Country DAAD Scholarship",
    body: "Awarded the DAAD In-Country Scholarship for doctoral study in Special Needs Education at Maseno University (Ph.D. completed 2013–2017).",
  },
  {
    year: "2005–2008",
    title: "B.Ed. First Class Honours",
    body: "Bachelor of Education in Special Needs Education, Maseno University — First Class Honours.",
  },
  {
    year: "2009–present",
    title: "Teacher educator, Maseno University",
    body: "Uninterrupted service — Graduate Assistant, Tutorial Fellow, Lecturer, Senior Lecturer — and departmental leadership as Timetabling & Examination Coordinator, IT Champion, and Shows & Exhibitions Coordinator.",
  },
];

export const speaking = [
  {
    year: "2024",
    title: "AI4KSL stakeholders workshop — Maseno University",
    body: "Capacity-building with investigators, research assistants, members of the deaf community, and teachers from schools for the deaf.",
    href: "https://www.maseno.ac.ke/stakeholder-workshop-ai4ksl-bridging-language-barrier-using-artificial-intelligence-kenyan-sign",
    kind: "Workshop",
  },
  {
    year: "2024",
    title: "Kenyan Sign Language dataset — MIRG-ICAIR / ICERI",
    body: "Methodology for the KSL open dataset and AI for KSL production supporting deaf learners.",
    href: "https://arxiv.org/abs/2410.18295",
    kind: "Conference paper",
  },
  {
    year: "2019",
    title: "Inclusive education in ECDE in Kenya",
    body: "Paper presented at the 13th MMUST Conference, July 2019.",
    kind: "Conference paper",
  },
  {
    year: "2018",
    title: "Stuttering: Personal Challenges, Self-Therapy Strategies and Way Forward",
    body: "International Conference on Communication Disabilities in East Africa, Kisumu, 12–13 July 2018.",
    kind: "Conference paper",
  },
  {
    year: "2017",
    title:
      "Inclusion of Learners Who Stutter in Classroom Discourse — Quality Education (SDG)",
    body: "3rd Biennial International Conference on Inclusive Education, Kisumu Hotel, July 2017 — with Kochung & Mbagaya.",
    kind: "Conference paper",
  },
  {
    year: "2013–2014",
    title: "Inclusive education, assistive technology, Vision 2030",
    body: "Papers at Kenyatta University, Mt. Kenya University, University of Eldoret, and Maseno University interdisciplinary conferences.",
    kind: "Conference papers",
  },
  {
    year: "Ongoing",
    title: "Invite a talk",
    body: "Schools, conferences, DAAD forums, and Butere community gatherings — write with dates and audience.",
    kind: "Invitation",
  },
];

export const mentorship = {
  lede: "Forming the teachers who will form the next classroom — and guiding a generation of M.Ed. and Ph.D. researchers into the work of inclusion.",
  paragraphs: [
    "Since 2009 Dr. Okutoyi has taught in Maseno University’s Department of Special Needs Education. Mentorship is not a side programme: it is the daily work of preparing special needs educators who already know that disability is not a deficit of the child — and of supervising postgraduate research that reaches Dadaab, Kisumu, Kakamega, Nairobi, and schools for the deaf across the Lake Region.",
    "His 2020 curriculum vitae records nine postgraduate mentees at M.Ed. and Ph.D. level — on inclusive education, deaf learners’ English and science performance, low vision, intellectual disability, Braille mathematics, and Kenyan Sign Language literacy. Several theses had been submitted to the School of Graduate Studies by June 2020.",
    "Through AI4KSL he has also worked alongside teachers and tutors of deaf learners, research assistants, and graduate collaborators. The invitation remains open: teachers, graduate students, and community partners who share this vocation should write.",
  ],
  pillars: [
    {
      title: "Teacher formation",
      body: "Undergraduate and postgraduate teaching since 2009 — Graduate Assistant to Senior Lecturer — plus KSL interpretation and curriculum skills.",
    },
    {
      title: "Postgraduate supervision",
      body: "M.Ed. and Ph.D. candidates across inclusive education, deaf education, low vision, Braille, and Kenyan Sign Language (nine named on the 2020 CV).",
    },
    {
      title: "Funded research mentorship",
      body: "Leonard Cheshire GEC-T, Nottingham SPHEIR, NRF Kenya research-competency project, and AI4KSL — where students meet real field work.",
    },
  ],
};

export const affiliations = [
  { name: "Maseno University", note: "School of Education" },
  { name: "DAAD", note: "In-Country PhD scholarship · Scholars Association" },
  { name: "Leonard Cheshire International", note: "GEC-T research" },
  { name: "University of Nottingham", note: "SPHEIR" },
  { name: "National Research Fund — Kenya", note: "Teacher education research" },
  { name: "AI4D Africa / EduAI", note: "AI4KSL network" },
  { name: "IDRC–CRDI & Sida", note: "AI4KSL co-funders" },
  { name: "SEREK", note: "Professional membership" },
];

export const closingQuote = {
  text: "Teaching and research should leave no child waiting outside the lesson.",
  attribution: "Dr. Joel Okutoyi",
};
