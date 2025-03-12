const societies = [
  {
    name: "Knights of St. John International",
    details:
      "The Knights of St. John International is a Catholic fraternal organization dedicated to serving the Church and community through charitable works and spiritual development of its members.",
    whoCanJoin: "Catholic men in good standing with the Church who are at least 18 years old can join the Knights of St. John International. Candidates must be recommended by an existing member.",
    meetingDays: "• We meet on the second Sunday of each month after the 10:00 AM Mass in the parish hall.",
    howToJoin: "To join the Knights of St. John International, contact any member of the organization or speak with the Grand Knight after Mass. Prospective members will need to complete an application and participate in an initiation ceremony.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Christian Mothers Association",
    details:
      "The Christian Mothers Association provides spiritual and social support to mothers in the parish, helping them to raise their children in the Catholic faith and strengthen family life.",
    whoCanJoin: "All mothers in the parish, both biological and adoptive, are welcome to join the Christian Mothers Association. There are no age restrictions.",
    meetingDays: "• Our meetings are held on the first Saturday of each month at 3:00 PM in the parish hall.",
    howToJoin: "To become a member of the Christian Mothers Association, attend one of our monthly meetings and speak with the chairperson. New members are welcomed with a special blessing during Mass.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "St. Theresa of the Child Jesus",
    details:
      "The St. Theresa of the Child Jesus Society promotes devotion to St. Theresa and her way of spiritual childhood, encouraging members to perform small acts of love and service.",
    whoCanJoin: "Membership is opened to Catholic Women, who do not belong to any other women's group within the catholic church and a few men who shall act as organisers.",
    meetingDays: "• Regular Meetings: First Wednesday of every month from 5:30pm to 7:00pm\n• General Meetings: Third Sunday of every month after the first mass\n• Executive Meetings: Second Sunday of every month after the first mass",
    howToJoin: "One has to undergo a probational period of three (3) months before he/she is entered into the register as a full-fledged member. Member must be gainfully employed. Initiation will be conducted after a careful interview by the Archdiocesan Council before final admission.",
    contactInfo: "Opayin Margaret Kyeremeh (President): 0244759969 || Onua Roberta Tagoe (Secretary): 0244816931"
  },
  {
    name: "Holy Family Society",
    details:
      "The Holy Family Society is dedicated to promoting strong family values based on the model of Jesus, Mary, and Joseph. We support families through prayer, education, and community activities.",
    whoCanJoin: "All families in the parish are welcome to join the Holy Family Society. Single parents, couples, and extended families are all encouraged to participate.",
    meetingDays: "• Our society meets on the last Sunday of each month after the 12:00 PM Mass for a shared meal and program.",
    howToJoin: "Families interested in joining should attend one of our monthly gatherings and speak with any officer of the society. Registration forms are available at the parish office.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Knights and Ladies of Marshal",
    details:
      "The Knights and Ladies of Marshal is a Catholic fraternal organization that promotes Catholic values, supports the Church, and engages in charitable activities within the parish and wider community.",
    whoCanJoin: "Catholic men and women in good standing with the Church who are at least 18 years old can join. Candidates must demonstrate commitment to Catholic principles.",
    meetingDays: "• We hold meetings on the second Saturday of each month at 4:00 PM in the parish hall.",
    howToJoin: "To join the Knights and Ladies of Marshal, contact the Grand Knight or Grand Lady. Prospective members must complete an application, be interviewed, and participate in an initiation ceremony.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "St. Joseph Society",
    details:
      "The St. Joseph Society honors the foster father of Jesus and patron of the universal Church. We promote devotion to St. Joseph and his virtues of humility, obedience, and hard work.",
    whoCanJoin: "Anyone from Upper West, Upper East, Northern, North-East, and Savannah Regions of Ghana worshiping at the St. John the Evangelist Parish of the Accra Arch diocese of Ghana",
    meetingDays: "• Second Sunday of every month after first Mass",
    howToJoin: "Express interest to join the society either verbally or in writing to any member of the elected executives of the society who will facilitate the process of registering the prospective member and the issuance of a dues card/book to the new member.",
    contactInfo: "Zakaria Umar Sumalia: 0244605916 || Ivan Avereyireh: 0598765432 || Francis Avura : 0208137503"
  },
  {
    name: "Ladies Auxiliary",
    details:
      "The Ladies Auxiliary supports the parish through service, fundraising, and hospitality. We organize parish events, prepare meals for special occasions, and assist with various parish needs.",
    whoCanJoin: "All women of the parish who are at least 18 years old are invited to join the Ladies Auxiliary. We welcome members of all ages and backgrounds.",
    meetingDays: "• Our meetings are held on the second Thursday of each month at 5:00 PM in the parish hall.",
    howToJoin: "Women interested in joining should attend one of our monthly meetings or contact the president. New members are welcomed at a special ceremony during our annual installation dinner.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Michael Society",
    details:
      "The Michael Society is dedicated to St. Michael the Archangel, promoting awareness of spiritual warfare and the protection offered by this powerful intercessor. We engage in prayer for the Church and those in spiritual need.",
    whoCanJoin: "All parishioners with a devotion to St. Michael the Archangel can join. There are no age or gender restrictions.",
    meetingDays: "• Feast Day Celebration: September 29 (Feast of the Archangels)\n• Regular Meetings: Fourth Monday of each month at 7:00 PM",
    howToJoin: "Those interested should attend one of our monthly meetings or contact the society's coordinator. New members receive a St. Michael prayer card and medal.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Christian Fathers Association",
    details:
      "The Christian Fathers Association provides spiritual and fraternal support to fathers in the parish, helping them to fulfill their roles as spiritual leaders in their families and witnesses to the faith.",
    whoCanJoin: "All fathers in the parish, both biological and adoptive, are welcome to join the Christian Fathers Association. There are no age restrictions.",
    meetingDays: "• We meet on the third Saturday of each month at 7:00 AM for breakfast, prayer, and discussion.",
    howToJoin: "Fathers interested in joining should attend one of our monthly meetings or speak with the association's chairman. New members are welcomed with a special blessing during Father's Day Mass.",
    contactInfo: "0234567890 // 0598765432"
  },
  {
    name: "Catholic Charismatic Renewal",
    details:
      "The Catholic Charismatic Renewal promotes an awareness of the gifts of the Holy Spirit and encourages a personal relationship with Jesus Christ through prayer, worship, and community.",
    whoCanJoin: "All parishioners seeking a deeper experience of the Holy Spirit in their lives are welcome to join the Catholic Charismatic Renewal.",
    meetingDays: "• We gather every Friday at 6:00 PM for praise and worship, prayer, and teaching.",
    howToJoin: "Anyone interested in joining should simply attend one of our Friday gatherings. New members are welcomed and introduced to the community's prayer practices.",
    contactInfo: "0234567890 // 0598765432"
  },
].sort((a, b) => a.name.localeCompare(b.name));

export default societies;
