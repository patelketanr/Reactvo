"use client"

import { useState } from "react"
import "./InboxPage.css"

interface Email {
  id: number
  sender: string
  senderEmail: string
  subject: string
  preview: string
  fullContent: string
  timestamp: string
  date: string
  isRead: boolean
  hasAttachment: boolean
  group: "today" | "yesterday" | "thisWeek" | "lastWeek" | "lastMonth" | "older"
}

const sampleEmails: Email[] = [
  {
    id: 1,
    sender: "Fathom",
    senderEmail: "no-reply@fathom.video",
    subject: "Recap for 'Projects update'",
    preview: "Internal Meeting - Projects update - October 03, 2025 - 31 mins",
    fullContent: `
      <div class="email-body">
        <div class="email-warning">
          Some content in this message has been blocked because the sender isn't in your Safe senders list.
        </div>
        <div class="email-content-body">
          <img src="/fathom-logo.png" alt="Fathom" class="email-logo" />
          <h3>Internal Meeting</h3>
          <h1>Projects update</h1>
          <p class="meeting-info">October 03, 2025 - 31 mins - <a href="#">View Meeting</a> or <a href="#">Ask Fathom</a></p>
          <h4>ACTION ITEMS ✨</h4>
          <ul class="action-items">
            <li><strong>Ensure camera working for future calls</strong><br/>Paresh Davdra</li>
            <li><strong>Ensure camera working for future calls</strong><br/>Pippa Seton</li>
            <li><strong>Assist w/ deployment & testing of recent changes; plan GitHub migration w/ Ketan; start planning testing implementation</strong><br/>Mehul Brahmvar</li>
            <li><strong>Complete LinkAPX background service for customer status monitoring; finish CSV validation API endpoint; plan GitHub migration w/ Mehul</strong><br/>Ketan Patel</li>
            <li><strong>Test platform on Monday; prep for Ed demo on Thu; create banking provider integrations list w/ Ioana; speak to Karan re: correct Outlook installation</strong><br/>Jigar Shah</li>
          </ul>
        </div>
      </div>
    `,
    timestamp: "2:01 PM",
    date: "Fri 10/3/2025 2:01 PM",
    isRead: false,
    hasAttachment: false,
    group: "today",
  },
  {
    id: 2,
    sender: "Fathom",
    senderEmail: "no-reply@fathom.video",
    subject: "Recap for 'Product Review'",
    preview: "Weekly sync meeting recap with action items and decisions",
    fullContent: "<p>Meeting recap content here...</p>",
    timestamp: "Thu 2:07 PM",
    date: "Thu 10/2/2025 2:07 PM",
    isRead: true,
    hasAttachment: false,
    group: "yesterday",
  },
  {
    id: 3,
    sender: "Pooja Mathur in Teams",
    senderEmail: "pooja@company.com",
    subject: "Pooja sent a message in Teams",
    preview: "Can you review the latest design mockups?",
    fullContent: "<p>Design review message...</p>",
    timestamp: "Thu 9:53 AM",
    date: "Thu 10/2/2025 9:53 AM",
    isRead: true,
    hasAttachment: false,
    group: "yesterday",
  },
  {
    id: 4,
    sender: "Pooja Mathur in Teams",
    senderEmail: "pooja@company.com",
    subject: "Pooja sent a message in Teams",
    preview: "Updated the project timeline",
    fullContent: "<p>Timeline update...</p>",
    timestamp: "Wed 8:44 PM",
    date: "Wed 10/1/2025 8:44 PM",
    isRead: true,
    hasAttachment: false,
    group: "thisWeek",
  },
  {
    id: 5,
    sender: "Fathom",
    senderEmail: "no-reply@fathom.video",
    subject: "Recap of your meeting",
    preview: "Summary of the client presentation meeting",
    fullContent: "<p>Client meeting recap...</p>",
    timestamp: "Wed 3:02 PM",
    date: "Wed 10/1/2025 3:02 PM",
    isRead: true,
    hasAttachment: false,
    group: "thisWeek",
  },
  {
    id: 6,
    sender: "Jigar Shah in Teams",
    senderEmail: "jigar@company.com",
    subject: "Jigar sent a message in Teams",
    preview: "Quick question about the deployment",
    fullContent: "<p>Deployment question...</p>",
    timestamp: "Tue 10:01 PM",
    date: "Tue 9/30/2025 10:01 PM",
    isRead: true,
    hasAttachment: false,
    group: "thisWeek",
  },
  {
    id: 7,
    sender: "Fathom",
    senderEmail: "no-reply@fathom.video",
    subject: "Recap for 'Growth Strategy'",
    preview: "Q4 planning session recap",
    fullContent: "<p>Strategy meeting recap...</p>",
    timestamp: "Tue 3:31 PM",
    date: "Tue 9/30/2025 3:31 PM",
    isRead: true,
    hasAttachment: false,
    group: "thisWeek",
  },
  {
    id: 8,
    sender: "Fathom",
    senderEmail: "no-reply@fathom.video",
    subject: "Recap for 'Product Demo'",
    preview: "Demo session with stakeholders",
    fullContent: "<p>Demo recap...</p>",
    timestamp: "Tue 1:36 PM",
    date: "Tue 9/30/2025 1:36 PM",
    isRead: true,
    hasAttachment: false,
    group: "thisWeek",
  },
  {
    id: 9,
    sender: "Jigar Shah in Teams",
    senderEmail: "jigar@company.com",
    subject: "Jigar sent a message in Teams",
    preview: "Updated the documentation",
    fullContent: "<p>Documentation update...</p>",
    timestamp: "Tue 3:45 AM",
    date: "Tue 9/30/2025 3:45 AM",
    isRead: true,
    hasAttachment: false,
    group: "thisWeek",
  },
  {
    id: 10,
    sender: "Atlassian",
    senderEmail: "notifications@atlassian.com",
    subject: "What's new in Jira",
    preview: "Check out the latest features and updates",
    fullContent: "<p>Jira updates...</p>",
    timestamp: "Mon 9/29",
    date: "Mon 9/29/2025",
    isRead: true,
    hasAttachment: false,
    group: "lastWeek",
  },
]

export function InboxPage() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(sampleEmails[0])
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(["today", "yesterday", "thisWeek", "lastWeek"]),
  )

  const toggleGroup = (group: string) => {
    const newExpanded = new Set(expandedGroups)
    if (newExpanded.has(group)) {
      newExpanded.delete(group)
    } else {
      newExpanded.add(group)
    }
    setExpandedGroups(newExpanded)
  }

  const getInitials = (name: string) => {
    const words = name.split(" ")
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  const getAvatarColor = (name: string) => {
    const colors = ["#92c353", "#8764b8", "#00a4ef", "#ffb900", "#e74856", "#0078d4", "#00b294", "#ff8c00"]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  const groupLabels = {
    today: "Today",
    yesterday: "Yesterday",
    thisWeek: "This week",
    lastWeek: "Last week",
    lastMonth: "Last month",
    older: "Older",
  }

  const groupedEmails = sampleEmails.reduce(
    (acc, email) => {
      if (!acc[email.group]) {
        acc[email.group] = []
      }
      acc[email.group].push(email)
      return acc
    },
    {} as Record<string, Email[]>,
  )

  return (
    <div className="inbox-page-outlook">
      <div className="inbox-toolbar-outlook">
        <div className="toolbar-left-outlook">
          <button className="tab-button active">Focused</button>
          <button className="tab-button">Other</button>
        </div>
        <div className="toolbar-actions">
          <button className="action-button">
            <input type="checkbox" /> Select
          </button>
          <button className="action-button">↓ Jump to</button>
          <button className="action-button">≡ Filter</button>
          <button className="action-button">⋮ By Date</button>
        </div>
      </div>

      <div className="inbox-content-outlook">
        <div className="email-list-pane">
          <div className="email-list-header">
            <div className="list-header-col">From</div>
            <div className="list-header-col">Subject</div>
            <div className="list-header-col">Received ∨</div>
          </div>

          <div className="email-list-scroll">
            {Object.entries(groupedEmails).map(([group, emails]) => (
              <div key={group} className="email-group">
                <button className="group-header" onClick={() => toggleGroup(group)}>
                  <span className="group-toggle">{expandedGroups.has(group) ? "∨" : "›"}</span>
                  <span className="group-label">{groupLabels[group as keyof typeof groupLabels]}</span>
                </button>

                {expandedGroups.has(group) &&
                  emails.map((email) => (
                    <div
                      key={email.id}
                      className={`email-item-outlook ${selectedEmail?.id === email.id ? "selected" : ""} ${!email.isRead ? "unread" : ""}`}
                      onClick={() => setSelectedEmail(email)}
                    >
                      <input type="checkbox" className="email-checkbox-outlook" onClick={(e) => e.stopPropagation()} />
                      <div className="email-avatar" style={{ backgroundColor: getAvatarColor(email.sender) }}>
                        {getInitials(email.sender)}
                      </div>
                      <div className="email-from">{email.sender}</div>
                      <div className="email-subject-outlook">{email.subject}</div>
                      <div className="email-time">{email.timestamp}</div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <div className="email-preview-pane">
          {selectedEmail ? (
            <>
              <div className="preview-header">
                <h2 className="preview-subject">{selectedEmail.subject}</h2>
                <button className="summarize-button">
                  <span className="summarize-icon">✨</span> Summarize
                </button>
              </div>

              <div className="preview-meta">
                <div className="sender-info">
                  <div className="sender-avatar" style={{ backgroundColor: getAvatarColor(selectedEmail.sender) }}>
                    {getInitials(selectedEmail.sender)}
                  </div>
                  <div className="sender-details">
                    <div className="sender-name">
                      {selectedEmail.sender} &lt;{selectedEmail.senderEmail}&gt;
                    </div>
                    <div className="recipient-info">
                      To: <span className="recipient-badge">✓ Ketan Patel</span>
                    </div>
                  </div>
                </div>
                <div className="email-date">{selectedEmail.date}</div>
              </div>

              <div className="preview-actions">
                <button className="preview-action-btn" title="Reply">
                  ↩
                </button>
                <button className="preview-action-btn" title="Reply all">
                  ⇄
                </button>
                <button className="preview-action-btn" title="Forward">
                  →
                </button>
                <button className="preview-action-btn" title="Copy link">
                  🔗
                </button>
                <button className="preview-action-btn" title="More">
                  ⋮
                </button>
              </div>

              <div className="preview-body" dangerouslySetInnerHTML={{ __html: selectedEmail.fullContent }} />
            </>
          ) : (
            <div className="no-email-selected">
              <p>Select an email to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
