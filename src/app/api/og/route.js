// app/api/og/route.js
import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    // Query params (optional)
    const epTitle = searchParams.get('title') || '';
    const guest = searchParams.get('guest') || '';
    const episodeNumber = searchParams.get('episode') || '';

    // Local image served from /public
    const portraitUrl = new URL('/images/image-Bh3CIBq4Nlul53jbQSzYM3DN5mGWap.png', req.url).toString();

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            width: 1200,
            height: 630,
            backgroundColor: 'black',
            display: 'flex',            // root must be flex
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: '"Courier New", Courier, monospace',
            overflow: 'hidden',
          }}
        >
          {/* Glitch layer 1 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex', // silence OG renderer
              background:
                'repeating-linear-gradient(rgba(255,255,255,0.05) 1px, transparent 2px)',
              pointerEvents: 'none',
            }}
          />
          {/* Glitch layer 2 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              display: 'flex', // silence OG renderer
              background:
                'linear-gradient(90deg, rgba(255,0,0,0.05), rgba(0,255,255,0.05))',
              mixBlendMode: 'screen',
              pointerEvents: 'none',
            }}
          />

          {/* Portrait */}
          <img
            src={portraitUrl}
            width={200}
            height={200}
            style={{
              borderRadius: '50%',
              border: '4px solid #FF6719',
              marginBottom: 20,
            }}
          />

          {/* Line 1: Gavin Stephens */}
          <div
            style={{
              display: 'flex',
              fontSize: 44,
              fontWeight: 700,
              color: '#FF6719',
              textShadow:
                '1.5px 0 #FF0000, -1.5px 0 #00FFFF, 1px 1px #000, -1px -1px #000',
              marginBottom: 10,
              letterSpacing: 1.2,
            }}
          >
            Gavin Stephens
          </div>

          {/* Line 2: PARK BENCH // ONTOLOGY */}
          <div
            style={{
              display: 'flex',
              fontSize: 70,
              fontWeight: 800,
              color: '#FF6719',
              textShadow:
                '2px 0 #FF0000, -2px 0 #00FFFF, 1px 1px #000, -1px -1px #000',
              marginBottom: 18,
              letterSpacing: 1.5,
            }}
          >
            PARK BENCH // ONTOLOGY
          </div>

          {/* Optional episode title */}
          {epTitle && (
            <div
              style={{
                display: 'flex',
                fontSize: 42,
                fontWeight: 700,
                color: '#FF6719',
                textShadow:
                  '1px 0 #FF0000, -1px 0 #00FFFF, 1px 1px #000, -1px -1px #000',
                marginBottom: 8,
                maxWidth: 1000,
                lineHeight: 1.2,
              }}
            >
              {epTitle}
            </div>
          )}

          {/* Optional episode number */}
          {episodeNumber && (
            <div
              style={{
                display: 'flex',
                fontSize: 32,
                color: '#FF6719',
                textShadow:
                  '1px 0 #FF0000, -1px 0 #00FFFF, 1px 1px #000, -1px -1px #000',
                marginBottom: guest ? 6 : 0,
              }}
            >
              Episode {episodeNumber}
            </div>
          )}

          {/* Optional guest */}
          {guest && (
            <div
              style={{
                display: 'flex',
                fontSize: 28,
                fontStyle: 'italic',
                color: '#FF6719',
                textShadow:
                  '1px 0 #FF0000, -1px 0 #00FFFF, 1px 1px #000, -1px -1px #000',
              }}
            >
              Featuring {guest}
            </div>
          )}
        </div>
      ),
      { width: 1200, height: 630 }
    );
  } catch (err) {
    console.error(err);
    return new Response('Failed to generate image', { status: 500 });
  }
}


