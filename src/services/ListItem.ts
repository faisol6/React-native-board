export const ListItem: {
  qId: number;
  question: string;
  answer: { id: number; text: string; check: boolean }[];
}[] = [
  {
    qId: 1,
    question: "หมายเลขที่ไม่มีตัวเลขของตัวเอง ?",
    answer: [
      { id: 1, text: "0", check: true },
      { id: 2, text: "9", check: false },
      { id: 3, text: "3", check: false },
      { id: 4, text: "1", check: false },
    ],
  },
  {
    qId: 2,
    question: "ตั้งชื่อเฉพาะเลขคู่เท่านั้น?",
    answer: [
      { id: 1, text: "2", check: true },
      { id: 2, text: "3", check: false },
      { id: 3, text: "4", check: false },
      { id: 4, text: "1", check: false },
    ],
  },
  {
    qId: 3,
    question: "เส้นรอบวงของวงกลมเรียกว่าอะไร?",
    answer: [
      { id: 1, text: "เส้นรอบวง", check: true },
      { id: 2, text: "เส้นรอบวงกลม", check: false },
      { id: 3, text: "เส้นรอบวงรี", check: false },
      { id: 4, text: "เส้นรอบตัว", check: false },
    ],
  },
  {
    qId: 4,
    question: "จำนวนสุทธิหลัง 7 คือเท่าใด?",
    answer: [
      { id: 1, text: "11", check: true },
      { id: 2, text: "7", check: false },
      { id: 3, text: "2", check: false },
      { id: 4, text: "10", check: false },
    ],
  },
  {
    qId: 5,
    question: "53 หารด้วยสี่ เท่ากับเท่าไหร่?",
    answer: [
      { id: 1, text: "13", check: true },
      { id: 2, text: "12", check: false },
      { id: 3, text: "2", check: false },
      { id: 4, text: "3", check: false },
    ],
  },
  {
    qId: 6,
    question: "Pi คืออะไร จำนวนตรรกยะหรือจำนวนอตรรกยะ?",
    answer: [
      { id: 1, text: "Pi เป็นจำนวนอตรรกยะ", check: true },
      { id: 2, text: "Pi เป็นจำนวนเต็ม", check: false },
      { id: 3, text: "Pi เป็นจำนวนตรรกยะ", check: false },
      { id: 4, text: "Pi เป็นจำนวนเต็มบวก", check: false },
    ],
  },
  {
    qId: 7,
    question: "เลขนำโชคที่ได้รับความนิยมสูงสุดระหว่าง 1-9 คือเลขใด?",
    answer: [
      { id: 1, text: "7", check: true },
      { id: 2, text: "8", check: false },
      { id: 3, text: "9", check: false },
      { id: 4, text: "10", check: false },
    ],
  },
  {
    qId: 8,
    question: "ในหนึ่งวันมีกี่วินาที?",
    answer: [
      { id: 1, text: "86,400 วินาที", check: true },
      { id: 2, text: "86,300 วินาที", check: false },
      { id: 3, text: "92,400 วินาที", check: false },
      { id: 4, text: "126,300 วินาที", check: false },
    ],
  },
  {
    qId: 9,
    question: "XNUMX ลิตรมีกี่มิลลิเมตร?",
    answer: [
      { id: 1, text: "มี 1000 มิลลิเมตรในหนึ่งลิตร", check: true },
      { id: 2, text: "มี 2000 มิลลิเมตรในหนึ่งลิตร", check: false },
      { id: 3, text: "มี 3000 มิลลิเมตรในหนึ่งลิตร", check: false },
      { id: 4, text: "มี 10000 มิลลิเมตรในหนึ่งลิตร", check: false },
    ],
  },
  {
    qId: 10,
    question: "9*N เท่ากับ 108 N คืออะไร?",
    answer: [
      { id: 1, text: "N = 12", check: true },
      { id: 2, text: "N = 13", check: false },
      { id: 3, text: "N = 2", check: false },
      { id: 4, text: "N = 9", check: false },
    ],
  },
  {
    qId: 11,
    question: "ภาพที่เห็นเป็นสามมิติได้ด้วย?",
    answer: [
      { id: 1, text: "โฮโลแกรม", check: true },
      { id: 2, text: "ฮีสโตเเกรม", check: false },
      { id: 3, text: "โอโลเเกรม", check: false },
      { id: 4, text: "โปรเเกรม", check: false },
    ],
  },
  {
    qId: 12,
    question: "เลขใดถือเป็น 'เลขวิเศษ'?",
    answer: [
      { id: 1, text: "9", check: true },
      { id: 2, text: "12", check: false },
      { id: 3, text: "2", check: false },
      { id: 4, text: "6", check: false },
    ],
  },
  {
    qId: 13,
    question: "วันปิคือวันอะไร?",
    answer: [
      { id: 1, text: "14 มีนาคม", check: true },
      { id: 2, text: "14 มกราคม", check: false },
      { id: 3, text: "14 สิงหาคม", check: false },
      { id: 4, text: "14 ธันวาคม", check: false },
    ],
  },
  {
    qId: 14,
    question: "ใครเป็นคนกลุ่มแรกที่ใช้จำนวนลบ?",
    answer: [
      { id: 1, text: "จีน", check: true },
      { id: 2, text: "ไทย", check: false },
      { id: 3, text: "อินเดีย", check: false },
      { id: 4, text: "พม่า", check: false },
    ],
  },
  {
    qId: 15,
    question: "ค่าเฉลี่ยของจำนวนธรรมชาติ 50 ตัวแรก?",
    answer: [
      { id: 1, text: "25.5", check: true },
      { id: 2, text: "22.3", check: false },
      { id: 3, text: "24.5", check: false },
      { id: 4, text: "25.6", check: false },
    ],
  },
  {
    qId: 16,
    question: "ค่าของ cos 360°?",
    answer: [
      { id: 1, text: "1", check: true },
      { id: 2, text: "1.93", check: false },
      { id: 3, text: "3", check: false },
      { id: 4, text: "4.56", check: false },
    ],
  },
  {
    qId: 17,
    question: "334×7+335 เท่ากับเลขอะไร?",
    answer: [
      { id: 1, text: "2673", check: true },
      { id: 2, text: "2735", check: false },
      { id: 3, text: "1347", check: false },
      { id: 4, text: "3479", check: false },
    ],
  },
  {
    qId: 18,
    question: "1203+806+409 เท่ากับเลขอะไร?",
    answer: [
      { id: 1, text: "2418", check: true },
      { id: 2, text: "2412", check: false },
      { id: 3, text: "2515", check: false },
      { id: 4, text: "2314", check: false },
    ],
  },
  {
    qId: 19,
    question: "45×25+452 เท่ากับเลขอะไร?",
    answer: [
      { id: 1, text: "1577", check: true },
      { id: 2, text: "2412", check: false },
      { id: 3, text: "1233", check: false },
      { id: 4, text: "1568", check: false },
    ],
  },
  {
    qId: 20,
    question: "807+542+277 เท่ากับเลขอะไร?",
    answer: [
      { id: 1, text: "1626", check: true },
      { id: 2, text: "2412", check: false },
      { id: 3, text: "1233", check: false },
      { id: 4, text: "1568", check: false },
    ],
  },
];
