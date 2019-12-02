import * as moment from 'moment';

export default {
  "status" : 200,
  "message": "success",
  "data": [{
    "id": 1,
    "username": "장만월 사장님",
    "profile": "/profiles/img-profile-1.png",
    "lastMessage": "어딘데 출근 안하니, 죽고싶니?",
    "lastMessageDateTime": moment().toISOString(),
    "unreadCount": 2
  }, {
    "id": 2,
    "username": "신정근 바텐더",
    "profile": "/profiles/img-profile-3.png",
    "lastMessage": "오시는 길에 와인 몇병만 사다주세요.",
    "lastMessageDateTime": moment().hours(6).toISOString()
  }, {
    "id": 3,
    "username": "이미라 의사",
    "profile": "/profiles/img-profile-4.png",
    "lastMessage": "휴가 잘 보내고 계신가요? 다름이 아니라 지난번 회의건 질문드리려 합니다.",
    "lastMessageDateTime": moment().subtract(1, 'day').toISOString()
  }, {
    "id": 4,
    "username": "구찬성 지배인",
    "profile": "/profiles/img-profile-5.png",
    "lastMessage": "아 휴가셨군요. 약속은 다음으로 미루시죠!",
    "lastMessageDateTime": moment().subtract(2, 'day').hours(12).toISOString()
  }, {
    "id": 5,
    "username": "노준석 총지배인",
    "profile": "/profiles/img-shot-6.png",
    "lastMessage": "휴가에서 언제 돌아오시는지요. 돌아오시면 일이 산더밉니다.",
    "lastMessageDateTime": moment().subtract(3, 'day').toISOString()
  }, {
    "id": 6,
    "username": "김유나 인턴",
    "profile": "/profiles/img-shot-7.png",
    "lastMessage": "304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ",
    "lastMessageDateTime": moment().subtract(4, 'day').toISOString()
  }, {
    "id": 7,
    "username": "구현모",
    "profile": "/profiles/img-profile-2.png",
    "lastMessage": "술먹자",
    "lastMessageDateTime": moment().subtract(5, 'day').toISOString()
  }]
}
