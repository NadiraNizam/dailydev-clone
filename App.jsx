import {
  Bell, BriefcaseBusiness, ChevronDown, CircleHelp, Compass, Eye, Gift,
  Github, Home, Menu, Plus, Search, Settings2, ShieldCheck, Sparkles,
  Users, Zap, Coins, MessageCircle, ThumbsDown, ThumbsUp, ArrowRight,
  Bookmark, Flame, X
} from "lucide-react";
import { useState } from "react";

const news = [
  {
    title: "Moonshot AI prepares to release Kimi K3, a 3-trillion-parameter open frontier model",
    time: "8m ago",
  },
  {
    title: "Nvidia discusses $250B guarantee to backstop OpenAI's 10GW Ohio data center",
    time: "2h ago",
  },
  {
    title: "Cursor zero-day lets malicious git.exe hijack Windows developers on project open",
    time: "13h ago",
  },
  {
    title: "WordPress patches pre-auth RCE requiring no plugins and activates forced auto-updates",
    time: "1d ago",
  },
];

const navItems = [
  { icon: Home, label: "Home" },
  { icon: Compass, label: "Explore" },
  { icon: Users, label: "Community" },
  { icon: Eye, label: "Reading history" },
  { icon: Flame, label: "Popular" },
  { icon: Sparkles, label: "Discover" },
];

function IconButton({ children, label, className = "" }) {
  return (
    <button aria-label={label} title={label} className={`icon-button ${className}`}>
      {children}
    </button>
  );
}

function DailyLogo() {
  return (
    <div className="flex items-center gap-2.5 whitespace-nowrap">
      <svg viewBox="0 0 42 28" className="h-7 w-10" fill="none" aria-hidden="true">
        <path d="M2 14 13 3l10 10-10 10L2 14Z" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round"/>
        <path d="M19 14 29 4h9L27 15" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round"/>
        <path d="m25 16 5 6h7" stroke="currentColor" strokeWidth="3.2" strokeLinejoin="round"/>
      </svg>
      <span className="text-[21px] font-bold tracking-tight">daily.dev</span>
    </div>
  );
}

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <header className="topbar">
      <button className="mobile-menu" aria-label="Open menu"><Menu size={22}/></button>
      <div className="brand"><DailyLogo /></div>
      <button className={`search-box ${searchOpen ? "search-active" : ""}`} onClick={() => setSearchOpen(!searchOpen)}>
        <Search size={25} className="text-slate-300" />
        <span className="flex-1 text-left">Search</span>
        <span className="shortcut">Ctrl</span><span className="text-slate-500">+</span><span className="shortcut">K</span>
      </button>
      <div className="header-actions">
        <IconButton label="Reading list"><BriefcaseBusiness size={22}/></IconButton>
        <IconButton label="Streak" className="round-count"><span className="text-sm font-semibold">8</span></IconButton>
        <IconButton label="Rewards"><Gift size={24}/></IconButton>
        <IconButton label="Notifications"><Bell size={23}/></IconButton>
        <div className="points">
          <span className="dotted-ring"></span><span className="points-zero">0</span>
          <Coins size={22} className="text-amber-300 fill-amber-300/20"/><span>1.1K</span>
          <Zap size={22} className="text-violet-400 fill-violet-400"/><span>510</span>
        </div>
        <button className="avatar" aria-label="Profile"><span>✦</span></button>
      </div>
    </header>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      {navItems.map(({ icon: Icon, label }, i) => (
        <button key={label} title={label} aria-label={label} className={`side-link ${i === 0 ? "side-selected" : ""}`}>
          <Icon size={21} strokeWidth={2.1}/>
        </button>
      ))}
      <div className="side-divider"/>
      <button className="side-link" title="GitHub" aria-label="GitHub"><Github size={22}/></button>
      <button className="side-link" title="Help" aria-label="Help"><CircleHelp size={22}/></button>
      <button className="side-link small-avatar" title="Profile" aria-label="Profile">🌞</button>
      <button className="side-link bottom-spark" title="Daily.dev" aria-label="Daily.dev"><Sparkles size={22}/></button>
    </aside>
  );
}

function TopicBar() {
  const [active, setActive] = useState("For you");
  const topics = ["For you", "Web Development", "PHP", "GitHub"];
  return (
    <div className="topic-row">
      <button className="chips-button">Want chips <span>🍟</span> <span className="question">?</span></button>
      {topics.map(topic => (
        <button key={topic} onClick={() => setActive(topic)} className={`topic-pill ${active === topic ? "topic-active" : ""}`}>{topic}</button>
      ))}
      <button className="topic-pill settings-pill"><Settings2 size={21}/> <span>Feed settings</span></button>
      <button className="topic-pill shortcut-pill"><Plus size={22}/> <span>Shortcuts</span></button>
      <button className="topic-pill progress-pill"><ShieldCheck size={22}/> <span>4/5</span></button>
    </div>
  );
}

function HappeningCard() {
  return (
    <section className="happening-card">
      <h2 className="gradient-heading">Happening Now</h2>
      <div className="news-list">
        {news.map((item) => (
          <article className="news-item" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.time} <span className="tiny-status">◉</span></p>
          </article>
        ))}
      </div>
      <button className="read-all">Read all <ArrowRight size={22}/></button>
    </section>
  );
}

function RedditPreview() {
  return (
    <div className="reddit-preview">
      <div className="fake-browser">
        <div className="browser-top"><span/><span/><span/></div>
        <div className="login-panel">
          <div className="google-login"><b>G</b>Continue with Google</div>
          <div className="email-login"><span>↗</span>Email me a one-time link</div>
          <div className="or-divider"><span/>OR<span/></div>
          <div className="email-field">Email or username <b>*</b></div>
        </div>
      </div>
    </div>
  );
}

function PostCard() {
  const [vote, setVote] = useState(0);
  const [saved, setSaved] = useState(false);
  return (
    <article className="post-card">
      <div className="post-source">
        <div className="source-icon">Y</div>
      </div>
      <h2>So Reddit has decided that plain HTML is unsafe</h2>
      <div className="tags">
        <span>#javascript</span><span>#html</span><span>#crawling</span>
      </div>
      <p className="post-meta">Jul 22 · 9m read time</p>
      <RedditPreview />
      <div className="post-footer">
        <button className={`reaction ${vote === 1 ? "reaction-active" : ""}`} onClick={() => setVote(vote === 1 ? 0 : 1)} aria-label="Upvote">
          <ThumbsUp size={22}/><span>{73 + (vote === 1 ? 1 : 0)}</span>
        </button>
        <button className={`reaction ${vote === -1 ? "reaction-active" : ""}`} onClick={() => setVote(vote === -1 ? 0 : -1)} aria-label="Downvote">
          <ThumbsDown size={22}/>
        </button>
        <button className="reaction comment-reaction" aria-label="Comments"><MessageCircle size={22}/><span>12</span></button>
        <button className={`save-button ${saved ? "reaction-active" : ""}`} onClick={() => setSaved(!saved)} aria-label="Save post"><Bookmark size={18}/></button>
      </div>
    </article>
  );
}

function FeedbackToast() {
  return (
    <button className="feedback-toast">
      <div className="feedback-copy"><strong>Feedback</strong><span>Real people reply</span></div>
      <div className="mini-avatars"><span>👩🏻</span><span>🧑🏽</span><span>👨🏻</span></div>
    </button>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <Sidebar />
      <main className="main-content">
        <TopicBar />
        <div className="feed-grid">
          <HappeningCard />
          <PostCard />
        </div>
      </main>
      <FeedbackToast />
    </div>
  );
}