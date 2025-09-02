import { NextResponse } from 'next/server';

export async function GET() {
  const config = {
    "accountAssociation": {
      "header": "eyJmaWQiOjcwODcwNywidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDQwMTJGRmQzQmE5ZTJiRjY3NDIzNTFEQzJDNDE1NWFDRjBEZjVhZWUifQ",
      "payload": "eyJkb21haW4iOiJiYW5rLWVuYi52ZXJjZWwuYXBwIn0",
      "signature": "MHg3M2VkOTIwYWE1NTA1ODQ1NDQyODQ4NTNhZjU2Zjg3YTc2NjFkMTgzNzhkNjJmNjY0ODZhNTg0MjQ5NDA5ZmZhMWNhY2VmZTg4YmY1ZjViOGM0NDkyM2M2NWM5YzI0OTc2MjUwZDVhYTVjNjZhOTBhNzZkMGFjYjJkNjFiODdlZTFj"
    },
    frame: {
      version: '1',
      name: 'Bank ENB',
      iconUrl: 'https://bank-enb.vercel.app/icon.png',
      splashImageUrl: 'https://bank-enb.vercel.app/splash.png',
      splashBackgroundColor: '#F8FDF7',
      homeUrl: 'https://bank-enb.vercel.app/',
      imageUrl: 'https://bank-enb.vercel.app/image.png',
      buttonTitle: 'Welcome',
      heroImageUrl:
        'https://bank-enb.vercel.app/image.png',
      webhookUrl: 'https://bank-enb.vercel.app/api/webhook',
      subtitle: 'Earn, stake, save',
      description: 'Your community-driven financial hub on Farcaster.',
      "screenshotUrls": [
      "https://bank-enb.vercel.app/IMG_1781.jpg",
      "https://bank-enb.vercel.app/IMG_1782.jpg",
      "https://bank-enb.vercel.app/IMG_1780.jpg"
    ],
      primaryCategory: 'finance',
     tags: [
      "earn",
      "stake",
      "save",
      "win"
    ],
      tagline: 'Earn, stake, save',
      ogTitle: 'Bank ENB',
      ogDescription: 'Your community-driven financial hub on Farcaster.',
      ogImageUrl:
        'https://bank-enb.vercel.app/og-image.png',
      castShareUrl: 'https://bank-enb.vercel.app/',
    },
  };

  return NextResponse.json(config);
}

export const runtime = 'edge';
