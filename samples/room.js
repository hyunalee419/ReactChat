// index: room id
import * as moment from 'moment';

export default [{
	username: '장만월 사장님',
	messages: [{
		id: 0,
		message: '출근했니?',
		dateTime: moment().toISOString()
	}, {
		id: 1,
		message: '출근했냐?',
		dateTime: moment().toISOString()
	}, {
		id: 2,
		message: '어딘데 출근 안하니, 죽고싶니?',
		dateTime: moment().toISOString()
	}, {
		id: 3,
		message: '해외 출장중입니다.',
		dateTime: moment().toISOString(),
		send: true
	}]
}, {
	username: '신정근 바텐더',
	messages: [{
		id: 0,
		message: '오시는 길에 와인 몇병만 사다주세요.',
		dateTime: moment().hours(6).toISOString()
	}]
}, {
	username: '이미라 의사',
	messages: [{
		id: 0,
		message: '휴가 잘 보내고 계신가요? 다름이 아니라 지난번 회의건 질문드리려 합니다.',
		dateTime: moment().subtract(1, 'day').toISOString()
	}]
}, {
	username: '구찬성 지배인',
	messages: [{
		id: 0,
		message: '아 휴가셨군요. 약속은 다음으로 미루시죠!',
		dateTime: moment().subtract(2, 'day').hours(12).toISOString()
	}]
}, {
	username: '노준석 총지배인',
	messages: [{
		id: 0,
		message: '휴가에서 언제 돌아오시는지요. 돌아오시면 일이 산더밉니다.',
		dateTime: moment().subtract(3, 'day').toISOString()
	}]
}, {
	username: '김유나 인턴',
	messages: [{
		id: 0,
		message: '304호 키를 잃어버렸어요 어떻게 해야하죠 ㅠ',
		dateTime: moment().subtract(4, 'day').toISOString()
	}]
}, {
	username: '구현모',
	messages: [{
		id: 0,
		message: '술먹자',
		dateTime: moment().subtract(5, 'day').toISOString()
	}]
}];
