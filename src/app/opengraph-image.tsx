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
          background: "#13241c",
          padding: "64px 72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 48,
            height: 6,
            background: "linear-gradient(90deg, #171412 0%, #9e1b1b 50%, #1c5c38 100%)",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#c4a36a",
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Maseno University · Butere 2032
          </div>
          <div
            style={{
              color: "#f3ebe0",
              fontSize: 72,
              lineHeight: 1.05,
              fontStyle: "italic",
              maxWidth: 900,
            }}
          >
            Dr. Joel Okutoyi, PhD
          </div>
          <div
            style={{
              color: "#e2d0ab",
              fontSize: 28,
              marginTop: 20,
              maxWidth: 820,
            }}
          >
            Senior Lecturer · Special Needs Education · Okutoyi Foundation
          </div>
        </div>
        <div style={{ color: "#c4a36a", fontSize: 20, letterSpacing: "0.12em" }}>
          Educator · Advocate · Servant Leader
        </div>
      </div>
    ),
    { ...size },
  );
}
