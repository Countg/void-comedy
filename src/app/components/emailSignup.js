'use client';
import { useState } from 'react';
import { supabase } from '@/lib/SuperBaseClient';
import CardContainer from './CardContainer';




export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);

const handleEmailSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  console.log("Form submitted:", email);
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
<CardContainer>
  <section className=" bg-[#131427]/40 text-[#e6e6e6] px-4 py-12 w-full max-w-5xl mx-auto rounded-xl border border-white/20  shadow-xl font-mono space-y-12" id="contact">

  {/* Header */}
  <div className="text-center">
    <h2 className="text-3xl text-accent-orange font-bold animate-glitch">Enter The Void</h2>
    <p className="text-gray-400 text-sm mt-2">Get updates or send a message from the abyss.</p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Email Signup */}
 <form
  onSubmit={handleEmailSubmit}
  className="glitch border border-white/20 p-6 rounded-xl bg-[#131427]/40 space-y-4 w-full max-w-md mx-auto"
>
  <h3 className="text-lg text-accent-orange">Join The Void</h3>

  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="you@void.zone"
    className="w-full p-2 bg-black text-white border border-accent-orange rounded placeholder:text-gray-400"
    required
  />

<p className="text-sm text-gray-400 break-words overflow-hidden">
  No spam, just the void. Unsubscribe anytime.
</p>

  <div className="flex flex-wrap gap-3">
    <button
      type="submit"
      disabled={submitted}
      className={`px-4 py-2 border-2 rounded-lg font-mono text-sm tracking-wide transition text-center
        ${
          submitted
            ? 'bg-gray-600 text-white border-gray-500 cursor-not-allowed'
            : 'bg-accent-orange text-dark-indigo border-accent-orange hover:animate-vhsFlicker'
        }`}
    >
      {submitted ? 'Signed Up' : 'Sign Up'}
    </button>
  </div>
</form>



    {/* Contact Form */}
    <form onSubmit={handleContactSubmit} className="space-y-4 border border-white/20 p-6 rounded-xl bg-[#131427]/40">
      <h3 className="text-lg text-accent-orange">Contact Me</h3>
      <input
        className="w-full p-2 bg-black text-white border border-accent-orange rounded placeholder:text-gray-400"
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        className="w-full p-2 bg-black text-white border border-accent-orange rounded placeholder:text-gray-400"
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full p-2 bg-black text-white border border-accent-orange rounded placeholder:text-gray-400 h-32"
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="animate-floatForever inline-block px-6 py-3 border-2 border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-dark-indigo transition-colors duration-200 rounded-lg font-mono text-sm tracking-wide mr-2"
      >
        Send
      </button>

      {status === 'loading' && <p className="text-sm text-accent-orange">Sending...</p>}
      {status === 'success' && <p className="text-sm text-green-400">Message sent!</p>}
      {status === 'error' && <p className="text-sm text-red-500">Error sending message.</p>}
    </form>
  </div>
</section>


</CardContainer>
   


   
  );
}

