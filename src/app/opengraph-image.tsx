import { ImageResponse } from "next/og";

export const alt = "Dr. Joel Okutoyi — Senior Lecturer, Maseno University";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e1520",
          padding: "64px 72px",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 56,
            height: 2,
            background: "#9a8158",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#d4c4a8",
              fontSize: 18,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: 28,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Maseno University · Inclusive education · Public service
          </div>
          <div
            style={{
              color: "#f6f4f0",
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 600,
              maxWidth: 920,
            }}
          >
            Dr. Joel Okutoyi, PhD
          </div>
          <div
            style={{
              color: "#d4c4a8",
              fontSize: 26,
              marginTop: 22,
              maxWidth: 820,
              fontFamily: "system-ui, sans-serif",
            }}
          >
            Senior Lecturer · Special Needs Education · Okutoyi Foundation
          </div>
        </div>
        <div
          style={{
            color: "#9a8158",
            fontSize: 16,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Scholar · Educator · Public servant
        </div>
      </div>
    ),
    { ...size },
  );
}
