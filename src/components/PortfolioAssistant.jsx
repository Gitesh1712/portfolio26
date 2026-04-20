import React, { useEffect, useMemo, useRef, useState } from 'react';
import Icon from './AppIcon';

const CHAT_ENDPOINT = 'https://www.gitesh.dev/chat-assist/chat';

const SUGGESTED_PROMPTS = [
  'Tell me about Gitesh in brief',
  'Show key technical skills',
  'Which projects are most relevant for hiring?',
  'What experience does he have with scalable systems?',
];

const createWelcomeMessage = () => ({
  id: `welcome-${Date.now()}`,
  role: 'assistant',
  content:
    "Hi! I am Gitesh's Portfolio Assistant. Ask me about his experience, skills, projects, and impact so you can evaluate fit quickly.",
  timestamp: new Date().toISOString(),
});

const formatTime = (isoString) => {
  try {
    return new Date(isoString).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '';
  }
};

const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState(() => [createWelcomeMessage()]);
  const [error, setError] = useState('');
  const [hasUnread, setHasUnread] = useState(false);

  const messagesContainerRef = useRef(null);

  const assistantSubtitle = useMemo(() => 'Recruitment-ready portfolio guide', []);

  useEffect(() => {
    if (!messagesContainerRef.current) return;
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages, isLoading]);

  useEffect(() => {
    if (!isOpen && messages.length > 1) {
      setHasUnread(true);
    }
  }, [messages, isOpen]);

  const addMessage = (role, content) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        role,
        content,
        timestamp: new Date().toISOString(),
      },
    ]);
  };

  const sendMessage = async (messageText) => {
    const trimmed = messageText.trim();

    if (!trimmed || isLoading) return;

    setError('');
    addMessage('user', trimmed);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await fetch(CHAT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const reply = typeof data?.reply === 'string' ? data.reply.trim() : '';

      addMessage(
        'assistant',
        reply || 'I received your question, but could not generate a response. Please try again.'
      );
    } catch {
      setError('Unable to reach portfolio assistant right now. Please try again in a moment.');
      addMessage(
        'assistant',
        'Sorry, I am temporarily unavailable. Please try again in a few seconds.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      sendMessage(inputValue);
    }
  };

  const openAssistant = () => {
    setIsOpen(true);
    setHasUnread(false);
  };

  const clearConversation = () => {
    setMessages([createWelcomeMessage()]);
    setInputValue('');
    setError('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-[60] sm:bottom-6 sm:right-6">
      {isOpen && (
        <section
          className="mb-4 h-[min(70vh,36rem)] w-[min(24rem,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-purple-xl animate-scale-in"
          aria-label="Portfolio assistant chat panel"
        >
          <div className="relative border-b border-border px-4 py-3">
            <div className="pointer-events-none absolute inset-0 bg-gradient-purple opacity-[0.08]" />
            <div className="relative flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-purple text-white shadow-purple">
                  <Icon name="Bot" size={20} />
                  <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-card bg-success" />
                </div>
                <div>
                  <h3 className="font-heading text-sm text-foreground">Portfolio Assistant</h3>
                  <p className="text-xs text-muted-foreground">{assistantSubtitle}</p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearConversation}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  aria-label="Clear conversation"
                  title="Clear conversation"
                >
                  <Icon name="Trash2" size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  aria-label="Close assistant"
                >
                  <Icon name="X" size={18} />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={messagesContainerRef}
            className="flex h-[calc(100%-9.75rem)] flex-col gap-3 overflow-y-auto px-3 py-3"
          >
            {messages.map((message) => {
              const isAssistant = message.role === 'assistant';

              return (
                <article
                  key={message.id}
                  className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm shadow-sm ${
                    isAssistant
                      ? 'self-start border border-border bg-muted text-foreground'
                      : 'self-end bg-gradient-purple text-white'
                  }`}
                >
                  <p className="whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  <p
                    className={`mt-1 text-[10px] ${
                      isAssistant ? 'text-muted-foreground' : 'text-white/80'
                    }`}
                  >
                    {formatTime(message.timestamp)}
                  </p>
                </article>
              );
            })}

            {isLoading && (
              <div className="self-start rounded-2xl border border-border bg-muted px-3 py-2 shadow-sm">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.2s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:-0.1s]" />
                  <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary" />
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="mt-1 grid grid-cols-1 gap-2">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => sendMessage(prompt)}
                    className="rounded-xl border border-border bg-background px-3 py-2 text-left text-xs text-muted-foreground transition hover:border-primary/60 hover:bg-accent hover:text-foreground"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-border bg-card px-3 py-3">
            <form onSubmit={handleSubmit} className="flex items-end gap-2">
              <label htmlFor="portfolio-assistant-message" className="sr-only">
                Ask the portfolio assistant
              </label>
              <textarea
                id="portfolio-assistant-message"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about experience, stack, or projects..."
                rows={1}
                className="max-h-24 min-h-10 flex-1 resize-y rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Icon name="SendHorizontal" size={16} />
              </button>
            </form>
            {error && <p className="mt-2 text-xs text-error">{error}</p>}
          </div>
        </section>
      )}

      <button
        type="button"
        onClick={isOpen ? () => setIsOpen(false) : openAssistant}
        className="group relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-purple text-white shadow-purple-xl transition duration-300 hover:scale-105"
        aria-label={isOpen ? 'Minimize portfolio assistant' : 'Open portfolio assistant'}
      >
        <span className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 transition group-hover:opacity-100" />
        <Icon name={isOpen ? 'Minus' : 'MessageCircle'} size={24} className="relative" />
        {hasUnread && !isOpen && (
          <span className="absolute -right-1 -top-1 inline-flex h-3.5 w-3.5 rounded-full border-2 border-background bg-success" />
        )}
      </button>
    </div>
  );
};

export default PortfolioAssistant;
