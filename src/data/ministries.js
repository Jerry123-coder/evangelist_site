const ministries = [
  {
    name: "Ushers",
    details: "The Ushers Ministry at St. John the Evangelist Catholic Church is dedicated to providing a welcoming environment for all who enter our doors. We serve as the first point of contact for parishioners and visitors, helping them feel at home in our church community. Our ministry is responsible for greeting attendees, assisting with seating, maintaining order during services, and providing assistance to those in need. We strive to create a reverent and organized atmosphere that enhances the worship experience for everyone.",
    whoCanJoin: "Any interested person of St. John the Evangelist Catholic Church can join the Ushers Ministry. We welcome adults of all ages who have a heart for service and a friendly, welcoming demeanor. Both men and women are encouraged to participate in this important ministry.",
    meetingDays: "• Our meetings are held every first Sunday of the third month after the second Mass\n• We also have quarterly training sessions for all ushers",
    howToJoin: "To become a member of the Ushers Ministry, you must meet the eligibility requirements and attend an orientation session. New members will be paired with experienced ushers for training and will serve a probationary period before being fully commissioned. Please speak with any current usher or contact our ministry leaders for more information.",
    contactInfo: "Shirley A. Mawuli: 0545297088 || Guy-Marie: 0200508640"
  },
  {
    name: "Choir",
    details: "The Choir Ministry at St. John the Evangelist Catholic Church enhances our liturgical celebrations through sacred music. We lead the congregation in song, creating a prayerful atmosphere that elevates worship and brings hearts closer to God.",
    whoCanJoin: "Anyone with a love for music and a commitment to regular practice can join the Choir Ministry. While musical experience is helpful, we welcome those with various levels of ability who are willing to learn and grow.",
    meetingDays: "• Regular Rehearsals: Every Thursday from 6:00 PM to 8:00 PM\n• Pre-Mass Warm-up: 45 minutes before each Mass we serve",
    howToJoin: "Interested individuals should attend one of our Thursday rehearsals and speak with the choir director. New members undergo a simple voice assessment to determine vocal range and may participate in a probationary period before full membership.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Lectors",
    details: "The Lectors Ministry is entrusted with proclaiming the Word of God during liturgical celebrations. Our members prepare and read Scripture passages with clarity, reverence, and understanding, helping the congregation to receive God's message.",
    whoCanJoin: "Confirmed Catholics in good standing with the Church who possess clear speaking voices and a reverence for Sacred Scripture can join the Lectors Ministry. Candidates should be comfortable speaking in public and committed to preparation.",
    meetingDays: "• Formation Meetings: First Saturday of each month at 10:00 AM\n• Special Workshops: Quarterly for ongoing formation",
    howToJoin: "Those interested in becoming lectors should contact the ministry coordinator for an initial interview. Approved candidates will attend a training workshop and observe experienced lectors before being scheduled to read at Mass.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Eucharistic Ministers",
    details: "The Extraordinary Ministers of Holy Communion assist the priest in distributing the Eucharist during Mass and bringing Communion to the sick and homebound. This ministry requires deep reverence for the Blessed Sacrament and a commitment to serving the community.",
    whoCanJoin: "Fully initiated Catholics (having received Baptism, Confirmation, and First Communion) who are at least 18 years old and living in harmony with Church teachings can serve as Eucharistic Ministers. Candidates must be recommended by the pastor.",
    meetingDays: "• Monthly Meeting: Second Tuesday at 6:30 PM\n• Annual Retreat: Full-day spiritual renewal in Lent",
    howToJoin: "Interested parishioners should speak with the pastor or ministry coordinator. Approved candidates will complete diocesan training and participate in a commissioning ceremony before beginning their service.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Altar Servers",
    details: "The Altar Servers Ministry assists the priest during liturgical celebrations, helping to ensure that Mass and other services proceed with reverence and dignity. Our servers play an important role in enhancing the beauty and solemnity of our worship.",
    whoCanJoin: "Young people who have received their First Holy Communion and are at least 10 years old can become altar servers. Candidates should demonstrate maturity, responsibility, and a desire to serve the Church.",
    meetingDays: "• Training Sessions: Every Saturday at 9:00 AM\n• Monthly Meeting: First Saturday at 10:00 AM after training",
    howToJoin: "Parents should register their children with the Altar Server Coordinator. New servers will attend a series of training sessions before being scheduled to serve at Mass, beginning with simpler roles and advancing as they gain experience.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Pastoral Council",
    details: "The Pastoral Council serves as an advisory body to the pastor, assisting in developing and implementing the parish's pastoral plan. Members represent the diverse needs and perspectives of the parish community and help discern the direction of parish life.",
    whoCanJoin: "Active, registered parishioners who are at least 18 years old and have demonstrated commitment to the parish can be considered for the Pastoral Council. Members should possess wisdom, prudence, and a vision for the parish's future.",
    meetingDays: "• Regular Meetings: First Monday of each month at 7:00 PM\n• Annual Planning Retreat: Full weekend in January",
    howToJoin: "Members are selected through a discernment process that occurs annually. Parishioners may nominate themselves or others by submitting a form to the parish office. Selected candidates serve a three-year term.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Finance Council",
    details: "The Finance Council advises the pastor on financial matters, helping to ensure responsible stewardship of parish resources. The council oversees budgeting, financial reporting, and long-term financial planning for the sustainability of the parish.",
    whoCanJoin: "Parishioners with professional experience in finance, accounting, business, or related fields are ideal candidates for the Finance Council. Members must be practicing Catholics with integrity and discretion regarding confidential information.",
    meetingDays: "• Monthly Meetings: Third Tuesday at 6:00 PM\n• Quarterly Budget Reviews\n• Annual Financial Planning Session",
    howToJoin: "Potential members are appointed by the pastor based on their professional qualifications and commitment to the parish. Those interested should submit a resume and letter of interest to the parish office.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Religious Education",
    details: "The Religious Education Ministry provides faith formation for children, youth, and adults in the parish. We offer catechism classes, sacramental preparation, RCIA, Bible studies, and other educational programs to help parishioners grow in their understanding and practice of the Catholic faith.",
    whoCanJoin: "Practicing Catholics with knowledge of the faith and a desire to share it with others can serve in the Religious Education Ministry. Catechists should be confirmed Catholics in good standing with the Church and willing to complete certification requirements.",
    meetingDays: "• Catechist Meetings: Second Saturday of each month at 10:00 AM\n• Classes: Sunday mornings from 9:00 AM to 10:15 AM (September through May)\n• Adult Formation: Wednesday evenings at 7:00 PM",
    howToJoin: "Those interested in becoming catechists should contact the Director of Religious Education. New volunteers will complete diocesan safe environment training and catechist formation before being assigned to a class.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Youth Ministry",
    details: "The Youth Ministry provides spiritual, social, and service opportunities for young people in grades 6-12. We foster a sense of Catholic identity and community among youth while helping them develop a personal relationship with Christ and integrate faith into their daily lives.",
    whoCanJoin: "Young people in grades 6-12 can participate in Youth Ministry activities. Adult volunteers who enjoy working with youth and have completed safe environment training can serve as youth ministers and chaperones.",
    meetingDays: "• Middle School Youth Group: Fridays from 6:00 PM to 7:30 PM\n• High School Youth Group: Sundays from 6:00 PM to 8:00 PM\n• Monthly Service Projects: Second Saturday morning",
    howToJoin: "Youth can join by attending any meeting with a registration form signed by a parent/guardian. Adult volunteers should contact the Youth Minister and complete an application, interview, and required training.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Social Justice",
    details: "The Social Justice Ministry works to promote awareness of Catholic social teaching and address issues of poverty, inequality, and injustice. We organize educational events, advocacy campaigns, and direct service projects that put faith into action for the common good.",
    whoCanJoin: "All parishioners with a passion for social justice and a commitment to the dignity of human life can join this ministry. We welcome those with diverse skills and interests, from direct service to advocacy and education.",
    meetingDays: "• Monthly Planning Meetings: Fourth Thursday at 7:00 PM\n• Quarterly Service Projects\n• Annual Social Justice Forum",
    howToJoin: "Interested individuals should attend one of our monthly meetings or contact the ministry coordinator. New members can choose to participate in specific projects or join the core planning team.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Prayer Groups",
    details: "The Prayer Groups Ministry encompasses various prayer communities within the parish, including charismatic prayer, contemplative prayer, Divine Mercy devotion, and rosary groups. We provide opportunities for parishioners to deepen their prayer life and spiritual growth.",
    whoCanJoin: "All parishioners seeking to grow in their prayer life are welcome to join any of our prayer groups. No special qualifications are needed, just a desire to pray and grow spiritually.",
    meetingDays: "• Charismatic Prayer Group: Tuesdays at 7:00 PM\n• Divine Mercy Chaplet: Fridays at 3:00 PM\n• Rosary Group: Daily before morning Mass\n• Contemplative Prayer: Wednesdays at 9:00 AM",
    howToJoin: "Simply attend any prayer group meeting that interests you. Group leaders will welcome you and provide any materials or guidance needed for participation.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Hospitality",
    details: "The Hospitality Ministry creates a welcoming atmosphere for all who enter our parish. We organize social events, coordinate refreshments after Mass, welcome new parishioners, and help build community through fellowship opportunities.",
    whoCanJoin: "Parishioners with friendly, outgoing personalities and a desire to help others feel welcome can join the Hospitality Ministry. This is an excellent ministry for those who enjoy planning events and meeting new people.",
    meetingDays: "• Planning Meetings: First Tuesday of each month at 6:30 PM\n• Sunday Hospitality: Weekly after Masses on a rotating schedule\n• New Parishioner Welcome: Quarterly",
    howToJoin: "Contact the Hospitality Ministry coordinator or speak with any current member. New volunteers will be assigned to a team and trained in hospitality procedures and parish resources.",
    contactInfo: "0234567890 // 0598765432"
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default ministries;
