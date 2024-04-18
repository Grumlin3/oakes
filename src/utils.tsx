import { colors } from './theme';

export const renderHighlightedText = (text: any, query: any) => {
  if (!query) return text
  try {
    const regex = new RegExp(`(${query})`, 'gi')
    const parts = text.split(regex)
    return parts.map((part: any, index: any) => regex.test(part) 
      ? <span key={index} style={{ color:  colors[8] }}><strong>{part}</strong></span> 
      : part);
  } catch (e) {
    return text
  }
}

export const searchMap = {
  "information management": { 
    tab: "services",
    highlight: ""
   },
  "compliance services": { 
    tab: "services",
    highlight: ""
   },
  "programming services": { 
    tab: "services",
    highlight: ""
   },
  "accessibility solutions": { 
    tab: "services",
    highlight: ""
   },
  "business continuity": { 
    tab: "services",
    highlight: ""
   },
  "technology integrations": { 
    tab: "services",
    highlight: ""
   },
  "faq": { 
    tab: "faq",
    highlight: ""
   },
  "records management program": { 
    tab: "faq",
    highlight: ""
   },
   "information management program": { 
    tab: "faq",
    highlight: ""
   },
  "iso 15489": { 
    tab: "faq",
    highlight: ""
   },
  "about": { 
    tab: "about",
    highlight: ""
   },
  "contact": { 
    tab: "contact",
    highlight: ""
   },
  "records management consulting": { 
    tab: "services",
    highlight: ""
   },
  "information governance": { 
    tab: "services",
    highlight: ""
   },
  "data hygienics": { 
    tab: "services",
    highlight: ""
   },
  "retention by design": { 
    tab: "faqs",
    highlight: ""
   },
  "data value": { 
    tab: "faqs",
    highlight: ""
   },
  "data minimization": { 
    tab: "faqs",
    highlight: ""
   },
  "risk management": { 
    tab: "home",
    highlight: ""
   },
  "nonprofit consulting": { 
    tab: "services",
    highlight: ""
   },
  "government consulting": { 
    tab: "services",
    highlight: ""
   },
  "corporate consulting": { 
    tab: "services",
    highlight: ""
   },
  "training programs": { 
    tab: "services",
    highlight: ""
   },
  "interim management": { 
    tab: "services",
    highlight: ""
   },
  "file classification systems": { 
    tab: "faq",
    highlight: ""
   },
  "taxonomies": { 
    tab: "home",
    highlight: ""
   },
  "inventory management": { 
    tab: "services",
    highlight: ""
   },
  "office planning": { 
    tab: "services",
    highlight: ""
   },
  "records center planning": { 
    tab: "services",
    highlight: ""
   },
  "disaster recovery": { 
    tab: "services",
    highlight: ""
   },
  "risk assessments": { 
    tab: "services",
    highlight: ""
   },
  "resource planning": { 
    tab: "services",
    highlight: ""
   },
  "electronic infrastructure": { 
    tab: "services",
    highlight: ""
   },
  "electronic records management": { 
    tab: "services",
    highlight: ""
   },
  "vendor selection": { 
    tab: "services",
    highlight: ""
   },
  "software selection": { 
    tab: "services",
    highlight: ""
   },
  "legal compliance": { 
    tab: "faq",
    highlight: ""
   },
  "regulatory compliance": { 
    tab: "faq",
    highlight: ""
   },
  "data security": { 
    tab: "faq",
    highlight: ""
   },
  "confidential information": { 
    tab: "faq",
    highlight: ""
   },
  "cost reduction": { 
    tab: "faq",
    highlight: ""
   },
  "efficiency": { 
    tab: "faq",
    highlight: ""
   },
  "iso certification": { 
    tab: "faq",
    highlight: ""
   },
  "client testimonials": { 
    tab: "about",
    highlight: ""
   },
  "leadership team": { 
    tab: "about",
    highlight: ""
   },
  "company history": { 
    tab: "about",
    highlight: ""
   },
  "mission statement": { 
    tab: "about",
    highlight: ""
   },
  "office locations": { 
    tab: "contact",
    highlight: ""
   },
  "contact form": { 
    tab: "contact",
    highlight: ""
   }
}

