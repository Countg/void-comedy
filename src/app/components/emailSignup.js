'use client';
import { useState } from 'react';
import { supabase } from '@/lib/SuperBaseClient';

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from('email_signups').insert([{ email }]);
    setLoading(false);
    if (error) {
      console.error("Insert error:", error.message);
    } else {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="pbo-section">
      <div className="pbo-kicker">Enter The Void</div>

      <div className="pbo-contact">
        <form onSubmit={handleEmailSubmit} className="pbo-contactcol">
          <h3>Join The Void</h3>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@void.zone"
            className="pbo-input"
            required
          />

          <p className="pbo-note">No spam, just the void. Unsubscribe anytime.</p>

          <button type="submit" disabled={submitted || loading} className="pbo-btn">
            {submitted ? 'Signed Up' : loading ? 'Sending…' : 'Sign Up'}
          </button>
        </form>

        <form onSubmit={handleContactSubmit} className="pbo-contactcol">
          <h3>Contact Me</h3>

          <input
            className="pbo-input"
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className="pbo-input"
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            className="pbo-input"
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="pbo-btn">Send</button>

          {status === 'loading' && <p className="pbo-status" style={{ color: 'var(--pbo-accent)' }}>Sending...</p>}
          {status === 'success' && <p className="pbo-status" style={{ color: '#6ee7a8' }}>Message sent!</p>}
          {status === 'error' && <p className="pbo-status" style={{ color: '#ff6b6b' }}>Error sending message.</p>}
        </form>
      </div>
    </section>
  );
}
