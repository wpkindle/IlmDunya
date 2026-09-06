const API_BASE = 'https://ilmportal-backend.onrender.com/api';

const handleResponse = async (response) => {
  let data = {};
  const text = await response.text();
  try {
    data = JSON.parse(text);
  } catch (e) {
    let cleanMsg = response.statusText;
    if (response.status === 502 || response.status === 503 || response.status === 504) {
      cleanMsg = 'Server is waking up. Please retry in a few moments.';
    } else if (text && text.length < 150 && !text.includes('<')) {
      cleanMsg = text;
    } else if (!cleanMsg) {
      cleanMsg = 'Unable to connect to service. Please try again.';
    }
    data = { message: cleanMsg };
  }
  if (!response.ok) {
    const error = new Error(data.message || 'An error occurred while processing your request');
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
};

export const api = {
  registerTutor: async (body) => {
    try {
      // First attempt dedicated /auth/early-tutor endpoint (no OTP required)
      let res = await fetch(`${API_BASE}/auth/early-tutor`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...body, role: 'tutor' })
      });

      // If backend is rolling update and early-tutor is not yet live (404), fallback to /auth/register
      if (res.status === 404) {
        res = await fetch(`${API_BASE}/auth/register`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...body, role: 'tutor' })
        });
      }

      return await handleResponse(res);
    } catch (err) {
      if (err.message && err.message.includes('Failed to fetch')) {
        throw new Error('Server connection error. Please ensure internet access or try again in a few seconds.');
      }
      throw err;
    }
  },

  verifyOtp: async (email, otp) => {
    try {
      const res = await fetch(`${API_BASE}/auth/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), otp: otp.trim() })
      });
      return await handleResponse(res);
    } catch (err) {
      if (err.message && err.message.includes('Failed to fetch')) {
        throw new Error('Server connection error. Please try again in a few seconds.');
      }
      throw err;
    }
  },

  resendOtp: async (email) => {
    try {
      const res = await fetch(`${API_BASE}/auth/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase() })
      });
      return await handleResponse(res);
    } catch (err) {
      if (err.message && err.message.includes('Failed to fetch')) {
        throw new Error('Server connection error. Please try again in a few seconds.');
      }
      throw err;
    }
  }
};

