"use client"

import { useState } from "react"
import "./InboxPage.css"

interface Email {
  id: number
  sender: string
  subject: string
  preview: string
  timestamp: string
  isRead: boolean
  isStarred: boolean
  hasAttachment: boolean
}

const sampleEmails: Email[] = [
  {
    id: 1,
    sender: "Sarah Johnson",
    subject: "Q4 Project Review Meeting",
    preview:
      "Hi team, I wanted to schedule our quarterly review meeting for next week. Please let me know your availability...",
    timestamp: "10:30 AM",
    isRead: false,
    isStarred: true,
    hasAttachment: true,
  },
  {
    id: 2,
    sender: "Microsoft Teams",
    subject: "You have a new message from John Smith",
    preview: "John Smith mentioned you in a conversation: Can you review the latest design mockups?",
    timestamp: "9:15 AM",
    isRead: false,
    isStarred: false,
    hasAttachment: false,
  },
  {
    id: 3,
    sender: "GitHub",
    subject: "Pull Request #234 merged successfully",
    preview: "Your pull request 'Add new authentication flow' has been merged into main branch by Alex Chen.",
    timestamp: "Yesterday",
    isRead: true,
    isStarred: false,
    hasAttachment: false,
  },
  {
    id: 4,
    sender: "Emily Davis",
    subject: "Updated Design System Documentation",
    preview:
      "I've updated the design system docs with the new color palette and typography guidelines. Please review...",
    timestamp: "Yesterday",
    isRead: true,
    isStarred: true,
    hasAttachment: true,
  },
  {
    id: 5,
    sender: "Slack",
    subject: "Daily Digest - 5 new messages",
    preview: "You have 5 new messages across 3 channels. #engineering: 3 messages, #design: 2 messages",
    timestamp: "Dec 15",
    isRead: true,
    isStarred: false,
    hasAttachment: false,
  },
  {
    id: 6,
    sender: "Robert Martinez",
    subject: "Budget Approval Request",
    preview:
      "Hi, I need your approval for the Q1 marketing budget. The total amount is $50,000 for digital campaigns...",
    timestamp: "Dec 14",
    isRead: true,
    isStarred: false,
    hasAttachment: true,
  },
  {
    id: 7,
    sender: "LinkedIn",
    subject: "Your weekly job recommendations",
    preview: "Based on your profile, we found 12 new job opportunities that match your skills and experience.",
    timestamp: "Dec 13",
    isRead: true,
    isStarred: false,
    hasAttachment: false,
  },
  {
    id: 8,
    sender: "Jennifer Lee",
    subject: "Team Building Event - Save the Date",
    preview: "Mark your calendars! We're planning a team building event on January 20th. More details to follow...",
    timestamp: "Dec 12",
    isRead: true,
    isStarred: false,
    hasAttachment: false,
  },
]

export function InboxPage() {
  const [emails, setEmails] = useState<Email[]>(sampleEmails)
  const [selectedEmails, setSelectedEmails] = useState<Set<number>>(new Set())
  const [searchQuery, setSearchQuery] = useState("")

  const toggleEmailSelection = (id: number) => {
    const newSelected = new Set(selectedEmails)
    if (newSelected.has(id)) {
      newSelected.delete(id)
    } else {
      newSelected.add(id)
    }
    setSelectedEmails(newSelected)
  }

  const toggleSelectAll = () => {
    if (selectedEmails.size === emails.length) {
      setSelectedEmails(new Set())
    } else {
      setSelectedEmails(new Set(emails.map((e) => e.id)))
    }
  }

  const toggleStar = (id: number) => {
    setEmails(emails.map((email) => (email.id === id ? { ...email, isStarred: !email.isStarred } : email)))
  }

  const deleteSelected = () => {
    setEmails(emails.filter((email) => !selectedEmails.has(email.id)))
    setSelectedEmails(new Set())
  }

  const markAsRead = () => {
    setEmails(emails.map((email) => (selectedEmails.has(email.id) ? { ...email, isRead: true } : email)))
    setSelectedEmails(new Set())
  }

  const markAsUnread = () => {
    setEmails(emails.map((email) => (selectedEmails.has(email.id) ? { ...email, isRead: false } : email)))
    setSelectedEmails(new Set())
  }

  return (
    <div className="inbox-page">
      <div className="inbox-header">
        <h1>Inbox</h1>
        <button className="compose-button">
          <span className="compose-icon">✉️</span>
          Compose
        </button>
      </div>

      <div className="inbox-toolbar">
        <div className="toolbar-left">
          <input
            type="checkbox"
            checked={selectedEmails.size === emails.length && emails.length > 0}
            onChange={toggleSelectAll}
            className="select-all-checkbox"
          />
          {selectedEmails.size > 0 && (
            <>
              <button className="toolbar-button" onClick={deleteSelected} title="Delete">
                🗑️
              </button>
              <button className="toolbar-button" onClick={markAsRead} title="Mark as read">
                ✓
              </button>
              <button className="toolbar-button" onClick={markAsUnread} title="Mark as unread">
                ✉️
              </button>
              <span className="selected-count">{selectedEmails.size} selected</span>
            </>
          )}
        </div>
        <div className="toolbar-right">
          <button className="toolbar-button" title="Refresh">
            🔄
          </button>
          <button className="toolbar-button" title="Settings">
            ⚙️
          </button>
        </div>
      </div>

      <div className="email-list">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`email-item ${!email.isRead ? "unread" : ""} ${selectedEmails.has(email.id) ? "selected" : ""}`}
          >
            <input
              type="checkbox"
              checked={selectedEmails.has(email.id)}
              onChange={() => toggleEmailSelection(email.id)}
              className="email-checkbox"
            />
            <button
              className={`star-button ${email.isStarred ? "starred" : ""}`}
              onClick={() => toggleStar(email.id)}
              title={email.isStarred ? "Unstar" : "Star"}
            >
              {email.isStarred ? "★" : "☆"}
            </button>
            <div className="email-content">
              <div className="email-sender">{email.sender}</div>
              <div className="email-subject-line">
                <span className="email-subject">{email.subject}</span>
                <span className="email-preview"> - {email.preview}</span>
              </div>
            </div>
            <div className="email-meta">
              {email.hasAttachment && (
                <span className="attachment-icon" title="Has attachment">
                  📎
                </span>
              )}
              <span className="email-timestamp">{email.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
