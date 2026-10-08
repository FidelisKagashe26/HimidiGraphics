import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Himidi Graphics: graphic design and branding studio in Tanzania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const asset = async (file: string, type: string) =>
  `data:${type};base64,${await readFile(join(process.cwd(), "public", file), "base64")}`;

const logo = await asset("HGLogo.png", "image/png");
const posterA = await asset("images/image9.jpg", "image/jpeg");
const posterB = await asset("images/image5.jpg", "image/jpeg");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0c0c0d",
          color: "#f4f2ee",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} width={84} height={84} alt="" />
            <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
              Himidi<span style={{ color: "#f5a900" }}>.</span>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.02, letterSpacing: -2 }}>
              Bold visuals that fill rooms and build brands.
            </div>
            <div style={{ fontSize: 28, color: "#a6a29b" }}>
              Posters · Branding · Social media · Motion | Tanzania
            </div>
          </div>
        </div>
        <div style={{ display: "flex", position: "relative", flex: 1 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={posterA}
            width={300}
            height={375}
            alt=""
            style={{ position: "absolute", left: 10, top: 40, borderRadius: 18, transform: "rotate(-7deg)" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={posterB}
            width={300}
            height={375}
            alt=""
            style={{ position: "absolute", left: 150, top: 110, borderRadius: 18, transform: "rotate(6deg)" }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}
