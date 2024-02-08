/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          fontSize: 60,
          color: "black",
          background: "black",
          width: "100%",
          height: "100%",
          paddingTop: 50,
          justifyContent: "center",
          alignItems: "center",
          gap: 32,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            opacity: "0.15",
            filter: "blur(120px)",
            borderRadius: "9999px",
            background: "linear-gradient(to right, #58AEF1, #ec4899)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 32,
          }}
        >
          <img
            width="256"
            height="256"
            src={`https://github.com/slayerpart.png`}
            alt="Profile Picture"
            style={{
              borderRadius: 32,
              boxShadow: "3px 3px 15px #d4d4d410",
            }}
          />
          <span
            style={{
              width: 1.5,
              height: 192,
              backgroundColor: "#d4d4d4D0",
            }}
          />
          <p style={{ fontSize: 128, color: "#d4d4d4D0" }}>CV</p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}
