import React, { useEffect, useMemo, useState } from "react";

type PhotoItem = string | { src: string; caption: string };

type Place = {
  id: number;
  slug: string;
  name: string;
  short: string;
  description: string;
  photos: PhotoItem[];
};

export default function App() {
  const secretSlug = "secret";

  const places: Place[] = [
    {
      id: 1,
      slug: "gungnamji",
      name: "1일차 야외활동 : 궁남지",
      short: "백제 귀족의 정원 문화를 느낄 수 있는 대표 명소",
      description:
        "궁남지는 백제 무왕 시기에 조성된 것으로 전해지는 우리나라에서 가장 오래된 인공 연못 중 하나입니다. 궁궐 남쪽에 위치했다고 하여 ‘궁남지’라는 이름이 붙었으며, 왕실 정원의 일부로 활용되었을 것으로 추정됩니다. 연못 중앙의 섬과 주변 식재 구조는 백제의 조경 기술을 보여주는 중요한 요소입니다. 특히 여름철 연꽃이 만개하는 시기에는 부여를 대표하는 관광 명소로 많은 방문객이 찾는 장소이며, 단순한 경관 감상을 넘어 백제의 자연관과 정원 문화를 함께 이해할 수 있는 공간으로 볼 수 있습니다.",
      photos: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQxkc5EnVvM0tKyfh5YCw8N4c3yymHXpd7qA&s",
      ],
    },
    {
      id: 2,
      slug: "haneulchae",
      name: "1일차 중식 : 하늘채",
      short: "편안한 식사 공간",
      description:
        "비법 육수로 자극적이지 않은 삼삼한 간장 불고기를 은은한 연향을 느낄 수 있는 찰연잎밥과 함께 즐겨보세요!",
      photos: [
        "https://mblogthumb-phinf.pstatic.net/MjAyMzA5MDlfOTYg/MDAxNjk0MjQxNjQwMzgx.zGJ9zhBV0k5nQr2zP9owSe4viXHTL-LufG-9kGDDmWwg.h0_9r_bxndutjVYZtGleqmHYkpuJBDTVOHo0h5CdNAIg.JPEG.lmb0124/1693919211785.jpg?type=w800",
      ],
    },
    {
      id: 3,
      slug: "seodong-hanwoo",
      name: "1일차 석식 : 서동한우",
      short: "지역 음식 체험",
      description:
        "국내 최초로 드라이에이징(건조 숙성) 기술을 도입한 한우 전문점! 일반적인 생고기나 웻에이징과는 차별화된 깊은 풍미와 부드러움을 느껴보세요!",
      photos: [
        "https://mblogthumb-phinf.pstatic.net/MjAyMzAyMjFfMTQ0/MDAxNjc2OTQ4NTk3OTky.PQRGbI1JBnb2fJ25Xnzj-LL-4nC4biDCxPTcLrHIMTsg.1xGZjUTsQv5yb2wjmjq2faA5ut5EvatJPlKBhx6Y_5Mg.JPEG.kyoonsun7/SE-4519fa91-3865-4c1f-818a-b0e7c6b3b82d.jpg?type=w800",
      ],
    },
    {
      id: 4,
      slug: "baekje",
      name: "A코스 역사투어 : 백제문화단지 + 국립부여박물관",
      short: "백제 역사 핵심 코스",
      description:
        "백제문화단지는 사비시대 백제의 궁궐과 생활 공간을 재현한 역사 공간이며, 국립부여박물관은 백제 문화유산을 실제 유물로 확인할 수 있는 대표 박물관입니다. 백제문화단지에서는 당시의 건축 양식과 도시 구조를 시각적으로 이해할 수 있고, 박물관에서는 유물을 통해 백제인의 생활상과 예술 수준, 종교문화를 보다 구체적으로 살펴볼 수 있습니다. 두 장소를 함께 관람하면 재현된 공간과 실제 유물을 연결하여 백제 문화를 더 깊이 이해할 수 있습니다.",
      photos: [
        {
          src: "https://www.chungnam.go.kr/static/cnportal/img/image%205.jpg",
          caption:
            "백제문화단지: 사비시대 백제의 궁궐과 생활 공간을 재현해 놓은 곳으로, 당시의 건축 양식과 도시 구조를 시각적으로 이해하는 데 도움이 되는 공간입니다.",
        },
        {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsLWFR5EnXojUdfZBGFQv9tx4WUu6J8WCMOg&s",
          caption:
            "국립부여박물관: 부여와 백제의 역사·문화를 대표하는 유물을 소장한 박물관으로, 관람을 통해 백제인의 생활상과 예술 수준, 종교문화를 보다 구체적으로 이해할 수 있습니다.",
        },
        {
          src: "https://tletter.co.kr/files/attach/images/157/874/052/2ee9ee114ed9555c4b3b51e5415de2ab.jpg",
          caption:
            "백제금동대향로: 백제를 대표하는 국보로, 정교한 조형미와 높은 금속공예 기술을 보여주는 유물입니다. 산 모양 뚜껑과 다채로운 장식은 당시 백제의 예술성과 세계관을 상징적으로 보여줍니다.",
        },
      ],
    },
    {
      id: 5,
      slug: "buso",
      name: "B코스 트래킹 : 부소산성 + 낙화암 + 황포돛배",
      short: "역사와 풍경의 마무리",
      description:
        "부소산성은 백제 사비도성을 방어하던 산성으로 전략적 요충지였습니다. 낙화암은 백제 멸망과 관련된 상징적인 장소이며, 황포돛배는 백마강을 따라 부여의 풍경을 체험할 수 있는 요소입니다. 세 장소를 함께 둘러보면 부여의 역사적 흐름과 자연 경관을 함께 느낄 수 있습니다.",
      photos: [
        {
          src: "https://cdn.tournews21.com/news/photo/202207/53335_94920_4246.jpg",
          caption:
            "부소산성: 백제 사비도성을 방어하던 핵심 산성으로, 부여 시내와 백마강을 한눈에 조망할 수 있는 전략적 요충지입니다.",
        },
        {
          src: "https://cdn.daejonilbo.com/news/photo/201112/981929_95962_4625.jpg",
          caption:
            "낙화암: 백제 멸망 당시 궁녀들이 절벽 아래로 몸을 던졌다는 전설이 전해지는 장소로, 백제의 마지막 순간을 상징적으로 보여주는 유적입니다. 절벽 위에서 내려다보는 백마강 풍경은 역사적 의미와 함께 깊은 인상을 남깁니다.",
        },
        {
          src: "https://img.khan.co.kr/news/2012/09/28/l_2012092801003851600045631.jpg",
          caption:
            "황포돛배: 백마강 위를 따라 이동하는 전통 배로, 부여의 자연 풍경을 여유롭게 감상할 수 있는 체험 요소입니다. 강 위에서 바라보는 부소산성과 주변 경관은 또 다른 시각에서 부여의 매력을 느끼게 해줍니다.",
        },
      ],
    },
    {
      id: 6,
      slug: "rain-course",
      name: "우천 시 : 국립부여박물관 + 금동대향로",
      short: "비 오는 날 대체 코스",
      description:
        "우천 시에는 야외 활동 대신 국립부여박물관 중심으로 관람을 진행할 수 있습니다. 특히 백제금동대향로는 백제를 대표하는 국보로, 정교한 조형미와 높은 금속공예 기술을 보여주는 유물입니다. 향로의 산 모양 뚜껑과 다양한 장식 요소는 당시 백제인의 세계관과 예술성을 상징적으로 보여주며, 실내에서도 충분히 깊이 있는 역사 체험이 가능합니다.",
      photos: [
        {
          src: "https://cdn.bzeronews.com/news/photo/202309/627138_947641_1756.jpg",
          caption:
            "백제금동대향로: 백제의 뛰어난 금속공예 기술과 예술성을 보여주는 대표 유물로, 세밀한 조각과 상징적 구조가 특징입니다.",
        },
      ],
    },
    {
      id: 7,
      slug: "chadang-kalguksu",
      name: "2일차 중식 : 초당 칼국수",
      short: "여행 중 즐기는 한 끼 식사",
      description: "시원한 육수와 쫄깃한 수육 보쌈으로 유명한 지역 맛집!",
      photos: [
        "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MTVfMTEy/MDAxNjAwMTUwNjczMTk3.k5gI8i8i6SE7f74xgqtoN--FkTGs_OcAqhYdRtgikgAg.j6Hvz_-0s1ZCAumU7Diu3FbEQoHiIy574T-76-U0iBMg.JPEG.yae4713/IMG_2280.jpg?type=w800",
      ],
    },
  ];

  const getSlug = () => {
    if (typeof window === "undefined") return "";
    return window.location.hash.replace("#", "");
  };

  const [slug, setSlug] = useState<string>(getSlug());

  useEffect(() => {
    const handler = () => setSlug(getSlug());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const selected = useMemo(() => places.find((p) => p.slug === slug), [slug]);

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    background: "#f5f5f4",
    padding: "16px",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle: React.CSSProperties = {
    maxWidth: "420px",
    margin: "0 auto",
    background: "white",
    borderRadius: "24px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    border: "1px solid #e7e5e4",
  };

  if (slug === secretSlug) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyMTEyMDNfMTAy/MDAxNjM4NDk4Njg2NDI3.GPomgqQM1zQXGJ6jxkcyy4QGyYlSqk-w48yzBDaUx38g.yAjMnA9RLBaL0PNbCWllHC4zs0NjbiQ7rPopkSNWq44g.JPEG.kokafilms/571b3f10cd44eddab7401035a585a88d82.jpg?type=w800"
            alt="secret"
            style={{ width: "100%", height: "240px", objectFit: "cover" }}
          />

          <div style={{ padding: "20px" }}>
            <a
              href="#"
              style={{
                display: "inline-block",
                marginBottom: "16px",
                color: "#0f766e",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              ← 목록으로
            </a>

            <div
              style={{
                background: "#fafaf9",
                border: "1px solid #e7e5e4",
                borderRadius: "16px",
                padding: "16px",
              }}
            >
              <h2
                style={{
                  fontSize: "17px",
                  margin: "0 0 10px",
                  color: "#1c1917",
                }}
              >
                🎉 비밀 발견!
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#44403c",
                  margin: 0,
                }}
              >
                개발자 임주형의 비밀 장소를 찾으셨군요! 총무팀 유영지 선생님한테 가서
                이 화면을 보여주면 육포를 줄 거에요! 따봉 육포!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (selected) {
    return (
      <div style={containerStyle}>
        <div style={cardStyle}>
          <img
            src={
              typeof selected.photos[0] === "string"
                ? selected.photos[0]
                : selected.photos[0].src
            }
            alt={selected.name}
            style={{ width: "100%", height: "240px", objectFit: "cover" }}
          />

          <div style={{ padding: "20px" }}>
            <a
              href="#"
              style={{
                display: "inline-block",
                marginBottom: "16px",
                color: "#0f766e",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: 700,
              }}
            >
              ← 목록으로
            </a>

            <h1
              style={{ fontSize: "24px", margin: "0 0 8px", color: "#1c1917" }}
            >
              {selected.name}
            </h1>
            <p
              style={{ fontSize: "14px", color: "#78716c", margin: "0 0 18px" }}
            >
              {selected.short}
            </p>

            <div
              style={{
                background: "#fafaf9",
                border: "1px solid #e7e5e4",
                borderRadius: "16px",
                padding: "16px",
                marginBottom: "20px",
              }}
            >
              <h2
                style={{
                  fontSize: "16px",
                  margin: "0 0 10px",
                  color: "#1c1917",
                }}
              >
                상세 설명
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "#44403c",
                  margin: 0,
                }}
              >
                {selected.description}
              </p>
            </div>

            {/* 영상 추가 (우천 시 코스만 표시) */}
            {selected.slug === "rain-course" && (
              <div style={{ marginBottom: "20px" }}>
                <iframe
                  width="100%"
                  height="220"
                  src="https://www.youtube.com/embed/vqORODKxtXA?autoplay=1&mute=1"
                  title="백제 미디어아트"
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{ borderRadius: "16px" }}
                />
                <p
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    color: "#44403c",
                    textAlign: "center",
                  }}
                >
                  환상적인 미디어아트와 함께 몰입감 있는 백제 문화를 즐겨봅시다!
                </p>
              </div>
            )}

            <div style={{ display: "grid", gap: "16px" }}>
              {selected.photos.map((photo, index) => {
                const src = typeof photo === "string" ? photo : photo.src;
                const caption = typeof photo === "string" ? "" : photo.caption;

                return (
                  <div key={index}>
                    <img
                      src={src}
                      alt={`${selected.name} 사진 ${index + 1}`}
                      style={{
                        width: "100%",
                        borderRadius: "16px",
                        border: "1px solid #e7e5e4",
                        display: "block",
                      }}
                    />
                    {caption ? (
                      <>
                        <p
                          style={{
                            fontSize: "13px",
                            lineHeight: 1.6,
                            color: "#57534e",
                            margin: "8px 4px 0",
                          }}
                        >
                          {caption}
                        </p>

                        {/* 국립부여박물관 영상 추가 */}
                        {selected.slug === "baekje" &&
                          caption.includes("국립부여박물관") && (
                            <div style={{ marginTop: "10px" }}>
                              <iframe
                                width="100%"
                                height="200"
                                src="https://www.youtube.com/embed/VEmWqfXmUxY?autoplay=1&mute=1"
                                title="국립부여박물관 영상"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                style={{ borderRadius: "12px" }}
                              />
                              <p
                                style={{
                                  fontSize: "13px",
                                  marginTop: "8px",
                                  color: "#44403c",
                                  textAlign: "center",
                                }}
                              >
                                신기술융합콘텐츠로 백제인의 예술성을 느껴봅시다!
                              </p>
                            </div>
                          )}
                      </>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={{ background: "#0f766e", color: "white", padding: "24px" }}>
          <div style={{ fontSize: "13px", opacity: 0.9 }}>Buyeo Tour Guide</div>
          <h1 style={{ fontSize: "28px", margin: "6px 0 0" }}>
            부여 투어 가이드
          </h1>
          <p style={{ fontSize: "14px", opacity: 0.9, margin: "10px 0 0" }}>
            장소를{" "}
            <a
              href="#secret"
              aria-label="hidden page"
              style={{
                color: "inherit",
                textDecoration: "none",
                cursor: "default",
              }}
            >
              눌러
            </a>{" "}
            상세 설명을 확인해보세요.
          </p>
        </div>

        <div style={{ padding: "16px", display: "grid", gap: "14px" }}>
          {places.map((place) => {
            const cover =
              typeof place.photos[0] === "string"
                ? place.photos[0]
                : place.photos[0].src;

            return (
              <a
                key={place.id}
                href={`#${place.slug}`}
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                  border: "1px solid #e7e5e4",
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: "white",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={cover}
                  alt={place.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                <div style={{ padding: "14px 16px" }}>
                  <h2
                    style={{
                      fontSize: "18px",
                      margin: "0 0 6px",
                      color: "#1c1917",
                    }}
                  >
                    {place.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#78716c",
                      margin: 0,
                      lineHeight: 1.5,
                    }}
                  >
                    {place.short}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
