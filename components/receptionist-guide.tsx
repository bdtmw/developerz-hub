import Link from 'next/link';

const sections = [
  {
    id: 'ai-answering-service', title: 'What does an AI receptionist do for a small business?',
    paragraphs: [
      'An AI receptionist provides a first point of contact when customers call your business. Instead of asking someone to leave an unstructured voicemail, it can guide a short conversation, answer approved questions and collect the information your team needs. The aim is a useful next step: a booking request, a callback, a service enquiry or a transfer to the right person.',
      'The setup matters as much as the voice. A receptionist for a mobile tradesperson needs to understand service areas and job enquiries. A receptionist for a studio needs different questions about sessions and availability. Developerz Hub starts with those practical details, then scopes the phone connection, business knowledge and integrations needed to support the agreed workflow.',
    ],
  },
  {
    id: 'after-hours-answering', title: 'After-hours answering and overflow call handling',
    paragraphs: [
      'You do not need to automate every incoming call. One option is overflow handling: your phone rings normally, and the assistant receives the call if nobody answers. Another is an after-hours route that changes the greeting and gathers details when the business is closed. Your phone provider, forwarding settings and selected platform determine which arrangements are available.',
      'Consider the difference between receiving a call and promising a service. If a customer phones a plumber in the evening, the assistant can capture the job location and request a callback without promising an immediate visit. We define those boundaries in the call flow. Coverage hours, transfer destinations and fallback messages should match what your team can actually deliver, including holidays and periods when everyone is occupied.',
    ],
  },
  {
    id: 'lead-capture', title: 'Capture useful enquiries instead of incomplete messages',
    paragraphs: [
      'A name and phone number are a start, but your team may need more context before returning a call. For a cleaning business, that could be the property type, location and preferred date. For a consultant, it might be the service requested and the best time to speak. Choose a small set of relevant questions so callers do not have to complete a lengthy interview.',
      'A useful enquiry summary also distinguishes a new customer from an existing booking, supplier query or complaint. Agree who receives each type of message and what information should trigger a human response. We can scope an email notification or a connection to an existing customer system, depending on its integration options. Collect only information needed for the next step, and make sure someone owns the follow-up after the call ends.',
    ],
  },
  {
    id: 'appointment-booking', title: 'Appointment requests with your booking rules built in',
    paragraphs: [
      'An AI appointment receptionist should follow the same scheduling rules as your staff. Before connecting a calendar, clarify service duration, opening hours, preparation time, staff availability and any restrictions on locations or services. A request for a consultation may need a different process from a repeat appointment. Existing bookings, cancellations and rescheduling also need clear handling instructions.',
      'Some businesses only need the assistant to collect a preferred time for staff to confirm. Others want supported integrations that check availability and create a booking. We agree which outcome the caller will hear and test what happens if a calendar cannot be reached. A requested appointment must not be presented as confirmed unless the booking system has accepted it. Where automated booking is unsuitable, a well-structured callback request can be the better starting point.',
    ],
  },
  {
    id: 'business-examples', title: 'AI receptionist use cases for local businesses and small teams',
    paragraphs: [
      'Trades and home services can use a call flow that gathers the service required, the customer’s area and a callback number while the owner is on a job. A salon or studio might focus on opening hours, service information and appointment requests. A repair business may need to distinguish a new repair enquiry from a status question about an item already booked in.',
      'For consultants and other appointment-led teams, a receptionist can ask which service the caller needs before directing them to a consultation request. A property services business might separate landlord, tenant and maintenance enquiries. These are examples of workflows to discuss, rather than prebuilt packages with identical capabilities. The right design follows your actual operations, available tools and staff responsibilities. Start with the two or three call types that create the most interruption, then decide whether other workflows justify additional setup.',
    ],
  },
  {
    id: 'human-handoff', title: 'Keep a clear route to a human',
    paragraphs: [
      'A good AI phone answering service has a defined limit. Complaints, unclear requests, sensitive conversations and anything outside the approved business information may need a person. Decide whether the assistant should attempt a transfer, collect a callback request or give a specific contact route. If someone asks to speak to staff, the response should explain the available option rather than trapping them in repeated questions.',
      'Test the less convenient cases too: a caller declines to share details, gives a number that is difficult to understand or asks a question the assistant cannot answer. Your fallback should be simple and honest. For urgent or emergency situations, the assistant must follow the instructions agreed for your business rather than imply it can provide emergency assistance. Human handoff, escalation ownership and business availability belong in the scope before launch, not as assumptions added later.',
    ],
  },
  {
    id: 'integrations', title: 'Connect your phone, calendar and customer workflow',
    paragraphs: [
      'Useful automation continues after the call. Your team may want a summary in an inbox, a task in a customer relationship management system or an appointment request in a booking tool. We review the systems you already use and the access they support. An integration should have a defined purpose, destination and failure response, rather than simply connecting every available tool.',
      'For example, a service enquiry might create a customer record only when the necessary details are present, while a message about an existing job might be sent to a shared inbox. We agree how to avoid duplicate records and what happens if the destination system is unavailable. If a suitable direct connection is not supported, a simpler notification workflow may be enough. Our development work can also include a separately scoped custom connection where the relevant platforms provide the required interfaces.',
    ],
  },
  {
    id: 'costs', title: 'What affects AI receptionist pricing?',
    paragraphs: [
      'The cost of an AI receptionist for a small business depends on both implementation and operation. Setup work can include call-flow design, business information preparation, phone routing, calendar connections and testing. A straightforward enquiry-capture workflow has a different scope from a multi-location service with several calendars and transfer rules. We discuss these differences before preparing a quote.',
      'Ongoing costs may include platform subscriptions, telephone numbers, call minutes, transfers and connected services. Ask how usage is measured, what happens above an included allowance and who holds each provider account. Compare a typical month with a busier month using your own call volume and call duration assumptions. Developerz Hub can help define those inputs, but no savings percentage or fixed monthly charge is assumed on this page. The proposal should identify setup fees, recurring charges, support responsibilities and the process for future changes.',
    ],
  },
  {
    id: 'compare-options', title: 'AI receptionist, voicemail or human answering service?',
    paragraphs: [
      'Voicemail can be sufficient when call volume is low and callers are comfortable leaving a message. Its limitation is that it cannot ask a missing follow-up question during the call. A human answering service can suit conversations that require judgement, reassurance or a flexible discussion. Availability, training, pricing and access to your business information vary between providers.',
      'An AI receptionist is worth considering when a useful portion of your calls follows repeatable questions and clear next steps. It still needs approved information, testing and an escalation route. A mixed approach can work well: staff answer during normal hours, the assistant handles overflow, and unusual enquiries return to a person. Choose the arrangement by call type and customer experience. The aim is a manageable workflow, not replacing every conversation with automation regardless of what the caller needs.',
    ],
  },
  {
    id: 'launch-checklist', title: 'Prepare your business for a practical launch',
    paragraphs: [
      'Bring your current business hours, service descriptions, coverage area and the questions customers regularly ask. Include any wording that must be used or avoided, who can approve answers and which requests need staff attention. You should also identify your phone provider, booking tools and the people who will receive follow-up messages. This gives the project a usable starting point without requiring customer records or confidential documents in the initial enquiry.',
      'Before going live, test normal enquiries alongside unclear speech, unavailable staff, failed integrations and questions outside the agreed knowledge. Review whether the assistant captured the correct details and explained the next step accurately. After launch, agree who updates holiday hours, service changes and booking rules. A receptionist should evolve with the business, so the proposal also needs a clear way to request changes and review the calls that are not following the intended path.',
    ],
  },
];

export default function ReceptionistGuide() {
  return <div className="ar-wrap ar-guide">
    <nav className="ar-guide-nav" aria-label="AI receptionist page contents"><p className="eyebrow">EXPLORE THE SERVICE</p>{sections.map(section=><a key={section.id} href={`#${section.id}`}>{section.title}</a>)}</nav>
    <div>{sections.map(section=><section className="ar-guide-section" id={section.id} key={section.id}><h2>{section.title}</h2>{section.paragraphs.map(paragraph=><p key={paragraph}>{paragraph}</p>)}</section>)}
      <aside className="ar-guide-next"><h3>Need a wider customer-service workflow?</h3><p>Explore our <Link href="/hire-chatbot-developers/">AI and chatbot development services</Link> for website conversations, or discuss <Link href="/hire-full-stack-developers/">custom application integrations</Link> when your call workflow needs to connect several systems. For an AI receptionist brief, share your call types and current tools in the <a href="#enquiry">service enquiry form</a>.</p></aside>
    </div>
  </div>;
}
