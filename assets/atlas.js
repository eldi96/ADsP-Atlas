(()=>{'use strict';
const COLORS={root:'#92a3b6',a:'#879da6',b:'#9b95a8',c:'#8795ab',cyan:'#8b9dac',rose:'#a4919b',yellow:'#acaa92',blue:'#8299ac'};
const defaultNodes=[];const defaultLinks=[];let number=0;
function add(parent,title,icon,short,detail='',example='',exam='',memory='',priority='★★★',color=''){
 const p=defaultNodes.find(n=>n.id===parent);const id='n'+(++number);defaultNodes.push({id,parent,title,icon,short,detail,example,exam,memory,priority,color:color||(p?p.color:'root'),builtIn:true});return id;
}
const root=add(null,'ADsP','✧','데이터를 이해하고, 분석을 기획하고, 실제 분석으로 문제를 해결하는 전체 과정입니다.','개념을 따로 암기하지 말고 과목 → 주제 → 기법 순으로 연결해 보세요.','개념을 누르면 다음 단계가 펼쳐집니다.','합격 기준: 50문항 중 30문항 이상과 과목별 40% 이상.','전체 흐름 = 이해 → 기획 → 분석','★★★','root');
const a=add(root,'1과목 · 데이터 이해','◈','데이터 자체의 특징과 가치, 지식의 개념을 이해합니다.','DIKW, 데이터 유형, 빅데이터, 지식경영 등을 배우는 과목.','무엇이 데이터이고 왜 가치가 있는지 이해합니다.','총 10문항. 기본 개념·용어와 비교 문제를 중심으로 학습.','데이터란 무엇인가?','★★★','a');
const b=add(root,'2과목 · 분석 기획','◇','비즈니스 문제를 데이터 분석 과제로 바꾸고 실행 순서를 정합니다.','KDD·CRISP-DM·분석 과제 발굴·마스터플랜·거버넌스가 연결됩니다.','어떤 문제를 어떤 절차로 해결할지 결정합니다.','총 10문항. 방법론 순서와 유사 용어 구별에 집중.','문제를 어떻게 분석할까?','★★★','b');
const c=add(root,'3과목 · 데이터분석','✳','실제로 통계와 머신러닝으로 데이터를 분석하고 결과를 평가합니다.','통계, 가설검정, 회귀, 분류, 군집, 모델 성능평가를 다룹니다.','고객 이탈 예측 또는 이상 로그인 탐지 모델 만들기.','총 30문항. 출제 비중이 가장 크므로 가장 많이 학습.','통계 → 분석 기법 → 평가','★★★','c');
// 1과목
const a1=add(a,'DIKW','⬡','데이터가 정보·지식·지혜로 발전하는 단계입니다.','Data(사실) → Information(의미 부여) → Knowledge(패턴·규칙) → Wisdom(판단·활용).','30℃ → 어제보다 5℃ 높음 → 더우면 냉방 수요 증가 → 냉방 시설 미리 가동.','데이터·정보·지식·지혜의 순서 및 차이.','데 → 정 → 지 → 혜');
const a2=add(a,'데이터의 유형','◩','정성적은 종류와 특징, 정량적은 수량과 크기를 표현합니다.','정성적(범주형): 명목형·순서형. 정량적(수치형): 이산형·연속형. 숫자 코드라도 수량을 뜻하지 않으면 정성적일 수 있습니다.','혈액형은 정성적, 몸무게는 정량적, 만족도 1~5등급은 순서형.','문자냐 숫자냐보다 수량을 의미하는지에 주의.','정성 = 종류 / 정량 = 수량');
add(a2,'정성·정량','◌','정성적: 어떤 종류인가? 정량적: 얼마나 많은가?','정성적 데이터는 문자·범주 등으로 표현되며 비정형인 경우가 많습니다. 정량적 데이터는 수치로 나타내고 평균·분산 등의 통계 분석이 용이합니다.','직업=개발자(정성), 나이=27세(정량).','숫자로 표시된 우편번호는 수량이 아니므로 정성적 데이터.','정성=종류 / 정량=수량');
add(a2,'측정 척도','⊞','명목·서열·등간·비율척도는 데이터에 허용되는 비교와 계산이 다릅니다.','명목: 단순 구분. 서열: 순위 존재. 등간: 간격이 일정하지만 절대영점 없음. 비율: 간격 일정·절대영점 존재.','혈액형(명목), 성적등급(서열), 섭씨온도(등간), 몸무게(비율).','척도 순서: 명목 → 서열 → 등간 → 비율.','명서등비');
const a3=add(a,'데이터베이스','▦','관련된 데이터를 체계적으로 저장하고 관리하는 공간입니다.','DB는 데이터 저장소, DBMS는 DB를 생성·관리하는 소프트웨어입니다. 정형·반정형·비정형 데이터를 구분합니다.','고객·상품·주문을 관계형 테이블로 관리.','DB와 DBMS를 구분, 데이터 유형별 특징 파악.','DB=저장 / DBMS=관리');
add(a3,'데이터 형태','◫','정형·반정형·비정형 데이터를 구분합니다.','정형: 고정된 표 구조. 반정형: 태그·키 등 내부 구조가 있음. 비정형: 정해진 구조가 없는 경우가 많음.','정형=DB 표, 반정형=JSON·XML, 비정형=이미지·영상·자유 문서.','JSON/XML은 반정형 데이터의 대표 예시.','표 / 구조 표시 / 자유 형식');
const a4=add(a,'빅데이터 3V·4V','✦','빅데이터 특징 3V에 가치(Value)를 더하면 4V입니다.','Volume(규모), Velocity(속도), Variety(다양성), Value(가치).','온라인 쇼핑몰은 방대한 클릭 로그를 빠르게 분석해 맞춤 추천으로 비즈니스 가치를 만듭니다.','3V는 데이터 특징, 추가된 Value는 비즈니스 가치.','규모·속도·다양성 + 가치');
add(a4,'비즈니스 가치','◆','빅데이터는 데이터 양 자체보다 활용해서 만드는 성과가 중요합니다.','Value는 매출 증대, 비용 절감, 위험 감소, 의사결정 개선 등으로 나타납니다.','이상 거래를 조기 발견해 금융 사고 비용 절감.','마스터플랜 ROI에서 3V는 비용 측면, Value는 효과 측면과 연관.','4V의 효과 = Value');
const a5=add(a,'빅데이터 위기','⚑','데이터 활용이 커지면서 발생하는 대표적인 위험을 이해합니다.','대표 위기 요인은 사생활 침해, 책임 원칙 훼손, 데이터 오용입니다.','개인의 행동을 예측한 결과만으로 불이익을 주거나 동의 범위를 벗어나 개인정보를 결합하는 문제.','세 위기 요인과 대응 방안을 짝지어 구분.','사생활·책임·오용');
add(a5,'사생활 침해','◉','개인정보가 원치 않는 방식으로 수집·결합·활용되는 문제.','통제 핵심은 단순 동의제에서 데이터를 사용하는 주체의 책임까지 중시하는 방향입니다.','다른 데이터와 결합해 개인을 재식별.','사생활 침해 → 동의제에서 책임제로.','사생활 = 책임');
add(a5,'책임 원칙 훼손','⚖','아직 하지 않은 행동에 대해 예측만으로 책임을 묻는 문제.','범죄·위험 가능성이 높다는 예측만으로 처벌 또는 불이익을 주는 것을 경계합니다.','예측 위험 점수만으로 개인에게 부당한 불이익.','책임 원칙 훼손 → 결과 기반 책임 원칙.','예측만으로 처벌 X');
add(a5,'데이터 오용','⌁','분석 결과를 잘못 해석하거나 부적절하게 사용하는 문제.','통제 방안으로 알고리즘 접근권, 오류·편향 검증, 전문적인 알고리즘 감시 등이 거론됩니다.','편향된 데이터로 만든 대출 심사 모델을 무비판적으로 사용.','데이터 오용 → 알고리즘 접근권·알고리즈미스트.','오용 = 알고리즘 검증');
const a6=add(a,'SECI 지식경영','◎','암묵지와 형식지가 변환되며 지식이 공유·창출되는 모델입니다.','암묵지: 경험으로 습득한 노하우. 형식지: 문서·매뉴얼 등으로 표현된 지식. SECI는 공통화→표출화→연결화→내면화 순서입니다.','선배의 노하우를 보고 익히고, 문서로 만들고, 문서를 합치고, 실습으로 체득합니다.','4단계 방향을 정확히 암기하세요.','공 → 표 → 연 → 내');
add(a6,'공통화 S','↝','암묵지 → 암묵지','Socialization: 경험을 함께하면서 말로 표현하기 어려운 노하우를 전수합니다.','선배의 작업 과정을 옆에서 보고 익히기.','직접 경험·관찰·도제식 교육.','경험 → 경험');
add(a6,'표출화 E','⇢','암묵지 → 형식지','Externalization: 경험과 노하우를 글·그림·문서로 표현합니다.','선배의 노하우를 매뉴얼로 작성.','문서화·개념화·표현.','경험 → 문서');
add(a6,'연결화 C','⟷','형식지 → 형식지','Combination: 서로 다른 명시적 지식을 통합·재구성합니다.','여러 부서의 매뉴얼을 합쳐 통합 지침서 작성.','기존 문서의 결합·분류.','문서 → 문서');
add(a6,'내면화 I','⇠','형식지 → 암묵지','Internalization: 문서 속 지식을 실습과 경험으로 습득합니다.','지침서로 반복 훈련해 몸에 익히기.','학습·실습·체득.','문서 → 경험');
add(a,'데이터 사이언스','✎','통계·프로그래밍·도메인 지식을 결합해 데이터에서 가치를 만듭니다.','데이터 사이언티스트는 데이터를 다루는 기술뿐 아니라 현업 문제를 이해하고 분석 결과를 설명하는 능력이 중요합니다.','보안 분야에서 로그를 분석해 침해 위험을 예측.','분석 기술과 비즈니스 이해는 함께 필요.','기술 + 통계 + 업무 이해');
// 2과목
const b1=add(b,'과제 발굴 방식','⌕','하향식은 문제에서, 상향식은 데이터에서 출발합니다.','하향식(Top-Down)은 정의된 문제를 해결하고, 상향식(Bottom-Up)은 데이터를 탐색하며 문제를 발견합니다.','고객 이탈을 줄이기(하향식) / 고객 데이터를 탐색하다 새로운 세그먼트 발견(상향식).','하향식 4단계와 상향식 비지도학습·프로토타이핑 연결.','하향식=문제 / 상향식=데이터');
add(b1,'하향식 접근','↓','문제가 비교적 명확한 상태에서 해결 방안을 찾아갑니다.','문제 탐색 → 문제 정의 → 해결방안 탐색 → 타당성 검토의 4단계입니다.','매출 하락 문제를 정의한 후 고객 이탈 모델 검토.','문탐 → 문정 → 해탐 → 타검.','문제를 알고 해결책 탐색');
add(b1,'상향식 접근','↑','데이터 탐색을 통해 숨겨진 문제나 기회를 발견합니다.','문제가 명확하지 않은 상황에서 비지도학습, 프로토타이핑 등으로 패턴을 발견합니다.','K-means로 고객 그룹을 나누다가 고위험 이탈 집단 발견.','문제 불명확·데이터 기반 발견.','데이터에서 문제 발견');
const b2=add(b,'KDD','⬡','데이터에서 유용한 지식을 발견하는 5단계 과정입니다.','Selection(선택) → Preprocessing(전처리) → Transformation(변환) → Data Mining(마이닝) → Interpretation/Evaluation(해석·평가).','필요한 로그 선택 → 오류 정리 → 변수 변환 → 패턴 탐색 → 결과 해석.','KDD는 마이닝 한 단계가 아니라 전체 지식 발견 절차.','선 → 전 → 변 → 마 → 해');
const b3=add(b,'CRISP-DM','✳','업무 목적에서 시작해 분석 결과를 실제로 적용하는 6단계 방법론입니다.','업무 이해 → 데이터 이해 → 데이터 준비 → 모델링 → 평가 → 전개. 반복적으로 이전 단계로 돌아갈 수 있습니다.','고객 이탈 문제 → 데이터 확인 → 정제 → 예측 모델 → 목표 검증 → 운영 적용.','KDD와 비교: CRISP-DM은 업무 이해·전개가 명시적.','업 → 데 → 준 → 모 → 평 → 전');
add(b3,'업무 이해','◌','무엇을 위해 분석하는지 비즈니스 목표를 파악합니다.','업무 목적 파악, 상황 평가, 데이터 마이닝 목표 설정, 프로젝트 계획 수립.','매출 감소를 해결하기 위해 고객 이탈률 분석 목표 수립.','목표 설정은 업무 이해.','업무 문제 → 분석 목표');
add(b3,'데이터 이해','◫','필요한 데이터를 수집·탐색하고 품질을 확인합니다.','초기 데이터 수집, 데이터 기술, 데이터 탐색, 품질 검증.','고객 데이터에 결측값이 있는지 확인.','결측값 확인은 데이터 이해, 결측값 처리는 데이터 준비.','수집·탐색·품질 확인');
add(b3,'데이터 준비','▤','실제 분석에 쓸 수 있도록 데이터를 정리합니다.','선택·정제·구성·통합·형식화 작업을 수행합니다.','빠진 고객 나이를 적절한 값으로 대체.','결측값 처리·변수 변환.','정제·통합·변환');
add(b3,'모델링','⬠','분석 알고리즘을 선택하여 모델을 만듭니다.','기법 선택, 테스트 설계, 모델 생성, 모델 성능 검토.','의사결정나무로 고객 이탈 모델 생성.','모델 자체 성능 검증은 모델링에도 포함됨.','모델 선택·생성');
add(b3,'평가','◈','모델 결과가 업무 목표를 충족하는지 평가합니다.','분석 결과의 사업적 적절성과 프로세스를 검토하고 다음 단계를 결정합니다.','정확도가 높아도 이탈 방지에 도움이 되는지 확인.','평가 단계는 비즈니스 목적 충족 여부에 주목.','업무 목표에 부합?');
add(b3,'전개','↗','분석 결과를 실제 업무에 적용합니다.','전개 계획, 모니터링·유지보수 계획, 최종 보고와 검토.','이탈 위험 알림을 실제 쇼핑몰 마케팅에 적용.','CRISP-DM 마지막 단계 = 전개(Deployment).','모델을 현실에 적용');
const b4=add(b,'과제 우선순위','◇','분석 효과와 실행 난이도를 함께 평가해 순서를 정합니다.','전략적 중요도, ROI(비즈니스 성과), 실행 용이성을 함께 고려합니다.','위험도가 높고 적은 비용으로 개선할 수 있는 보안 탐지 과제부터 수행.','전략적 중요도·성과·실행 용이성 구분.','전 · 비 · 실');
const b5=add(b,'분석 마스터플랜','◴','분석 과제를 언제, 어떤 범위로 추진할지 정하는 중장기 계획입니다.','우선순위 기준(전략적 중요도·비즈니스 성과·실행 용이성)과 적용 범위(업무 내재화·데이터·기술)를 검토합니다.','로그 분석부터 시작해 탐지 모델을 차례로 고도화하는 로드맵.','우선순위 전·비·실 / 적용 범위 업·데·기.','전비실 + 업데기');
add(b5,'우선순위 3기준','☷','전략적 중요도, 비즈니스 성과(ROI), 실행 용이성.','전략적 중요도=중요한가, 비즈니스 성과=이익이 되는가, 실행 용이성=할 수 있는가.','고객정보 보호 과제가 시급하고 비용 대비 효과가 큰지 평가.','우선순위와 적용 범위를 혼동하지 않기.','전·비·실');
add(b5,'적용 범위 3기준','⊞','업무 내재화 수준, 데이터 적용 수준, 기술 적용 수준.','업무에 얼마나 녹여 넣을지, 어떤 범위의 데이터를 쓸지, 어느 정도 기술을 적용할지 결정합니다.','분석 서비스를 기존 관제 시스템에 통합, 내부+외부 로그 활용.','적용범위 = 업·데·기.','업·데·기');
const b6=add(b,'분석 준비도','▤','데이터 분석을 수행할 조건을 갖추었는지 평가합니다.','6영역: 분석 업무 파악, 분석 인력·조직, 분석 기법, 분석 데이터, 분석 문화, IT 인프라.','데이터·인력·분석 환경이 있는지 점검.','준비도는 6개 평가 영역.','업·인·기·데·문·IT');
add(b6,'준비도 6영역','☷','업무·인력/조직·기법·데이터·문화·IT 인프라.','분석 준비 상태를 검토할 때 사용하는 여섯 가지 평가 항목입니다.','데이터는 충분하지만 분석 담당 인력이 없는 기업.','성숙도의 3개 부문과 혼동하지 않기.','준비도 = 6영역');
const b7=add(b,'분석 성숙도','◷','조직이 실제로 데이터 분석을 활용하는 수준을 평가합니다.','도입 → 활용 → 확산 → 최적화의 4단계. 3개 평가 부문은 비즈니스, 조직·역량, IT입니다.','엑셀 분석 시작 → 전문팀 활용 → 전사 확산 → 실시간 최적화.','성숙도=4단계, 평가 부문=3가지.','도 → 활 → 확 → 최');
add(b7,'성숙도 4단계','⟶','도입·활용·확산·최적화.','도입: 시작. 활용: 전문 부서 중심. 확산: 전사 확대. 최적화: 분석 기반 혁신.','개별 매출 보고서에서 전사 실시간 의사결정으로 고도화.','성숙도 4단계 순서를 외우기.','도활확최');
add(b7,'준비도×성숙도','⊞','두 지표의 높고 낮음을 결합한 4가지 조직 유형.','준비형(둘 다 낮음), 도입형(준비도 높고 성숙도 낮음), 정착형(준비도 낮고 성숙도 높음), 확산형(둘 다 높음).','시스템은 잘 갖춰져 있지만 활용이 적다면 도입형.','도입 단계와 도입형은 다른 개념.','낮낮=준비 / 높높=확산');
const b8=add(b,'데이터 거버넌스','⚙','조직 전체에서 데이터를 일관되고 안전하게 관리하기 위한 규칙·조직·절차입니다.','원칙(규칙), 조직(담당자·책임), 프로세스(관리 절차)의 3대 구성요소. 데이터 표준화, 관리체계, 저장소 관리, 표준화 활동도 알아두세요.','고객 정보 조회 권한을 정의하고 관리자 승인 절차를 운영.','원·조·프로 / 표준화·관리체계·저장소·표준화활동.','원 → 조 → 프로');
add(b8,'3대 구성요소','☷','원칙·조직·프로세스.','원칙은 규정, 조직은 담당자와 책임, 프로세스는 승인과 점검 절차를 의미합니다.','접근 정책 → 관리 담당자 → 권한 승인 절차.','3대 구성요소를 암기.','원·조·프');
add(b8,'표준화·관리','▦','데이터 표준화와 관리 체계, 저장소 관리, 표준화 활동.','표준화: 이름·형식 통일. 관리 체계: 책임과 지침. 저장소 관리: 전사적 데이터 보관. 표준화 활동: 준수 여부 점검.','고객ID 명명 규칙 정하고 월마다 위반 여부 검사.','표준화(규칙 마련)와 표준화 활동(유지·점검) 구분.','표·관·저·활');
// 3과목
const c1=add(c,'R·전처리','⌘','데이터를 불러오고, 정리하고, 분석하기 쉬운 형태로 준비합니다.','기본 자료구조(벡터·행렬·데이터프레임), 결측치·이상치 처리, 변수 변환을 이해합니다.','매출 CSV 불러와 결측값을 확인하고 분석용 변수 작성.','데이터프레임은 표 구조, 벡터는 같은 자료형 값의 모음.','가져오기 → 정리 → 변환');
const c2=add(c,'기초통계','◫','데이터를 요약하고 흩어짐을 숫자로 표현합니다.','대표값: 평균·중앙값·최빈값. 산포: 분산·표준편차. 모집단과 표본의 차이도 중요합니다.','학생 점수의 평균과 표준편차로 수준과 편차 파악.','표준편차=분산의 제곱근.','대표값 + 산포');
add(c2,'평균·중앙값·최빈값','◉','자료의 중심을 대표하는 세 가지 값.','평균=전체 합/개수. 중앙값=정렬 후 가운데 값. 최빈값=가장 자주 나온 값.','점수 10,20,30,100의 평균 40, 중앙값 25.','이상치에 민감한 것은 평균.','평균=합/개수');
add(c2,'분산·표준편차','⊙','데이터가 평균에서 얼마나 떨어져 있는지 나타냅니다.','분산: 평균과의 차이를 제곱해 평균낸 값(표본분산은 n−1로 나눔). 표준편차: 분산의 제곱근.','시험 점수가 고르게 모이면 표준편차가 작습니다.','표준편차는 원래 데이터와 단위가 같음.','표준편차 = √분산');
add(c2,'표본·모집단','▣','모집단은 전체 대상, 표본은 일부를 추출한 집합입니다.','모수는 모집단의 특성 값, 통계량은 표본에서 계산한 값입니다.','전체 수험생=모집단, 조사한 100명=표본.','표본분산은 일반적으로 n−1로 나눔.','모집단=전체 / 표본=일부');
const c3=add(c,'확률·분포','◷','우연히 발생하는 사건의 가능성과 값의 분포를 다룹니다.','확률은 0~1 사이 값. 분포는 어떤 값이 얼마나 자주 나타나는지 나타냅니다.','고객의 구매 횟수나 시험 점수의 분포 분석.','정규분포·이항분포의 기본 특징 파악.','확률 = 발생 가능성');
add(c3,'정규분포','∩','평균을 중심으로 좌우 대칭인 종 모양 분포.','평균·중앙값·최빈값이 같으며 평균 μ, 표준편차 σ로 형태가 결정됩니다.','시험 점수가 평균 부근에 몰리고 양 끝으로 갈수록 적음.','표준화 Z=(X−μ)/σ.','평균 중심 종 모양');
add(c3,'이항분포','▥','성공·실패처럼 결과가 두 가지인 독립 시행의 성공 횟수 분포.','각 시행의 성공 확률 p가 일정하고 시행 횟수 n이 고정됩니다.','10회 로그인 시도 중 실패 횟수.','결과 두 종류·독립·일정 p.','성공/실패 n회');
const c4=add(c,'가설검정','⚖','표본 데이터를 이용해 주장에 통계적 근거가 있는지 판단합니다.','귀무가설(H0)은 기본 가정, 대립가설(H1)은 입증하고 싶은 주장. p값과 유의수준 α를 비교해 판단합니다.','새 학습법이 기존보다 성적을 높였는지 검정.','일반적으로 p ≤ α면 귀무가설 기각.','귀무가설 vs 대립가설');
add(c4,'p값·유의수준','●','p값은 귀무가설 아래에서 관찰 결과만큼 또는 더 극단적인 결과의 가능성입니다.','유의수준 α는 귀무가설을 기각할 기준(예: 0.05). p≤α면 기각.','p=0.03, α=0.05 → 귀무가설 기각.','p값은 귀무가설이 참일 확률이 아님.','p≤α → 기각');
add(c4,'제1·2종 오류','⚑','제1종 오류: 참인 귀무가설 기각. 제2종 오류: 거짓 귀무가설 기각 못함.','제1종 오류 확률을 α, 제2종 오류 확률을 β라고 합니다. 검정력은 1−β.','문제가 없는데 있다고 판단(1종), 문제가 있는데 놓침(2종).','1종=억울한 기각 / 2종=놓침.','1종=참을 기각');
const c5=add(c,'회귀·분산분석','⌁','변수의 관계를 설명·예측하거나 집단 평균 차이를 검정합니다.','회귀분석은 종속변수의 값을 설명·예측하고, 분산분석은 여러 집단 평균이 같은지 검정합니다.','공부시간→시험성적: 회귀분석. 세 학습법의 평균 점수 비교: 분산분석.','회귀/상관/분산분석 차이 구별.','회귀=예측 / ANOVA=평균비교');
const reg=add(c5,'회귀분석','↗','독립변수로 종속변수의 값을 설명하고 예측합니다.','단순선형회귀: Y=a+bX. b는 X가 1단위 증가할 때 예측 Y의 변화량. 관계가 있다고 바로 인과를 뜻하지는 않습니다.','공부시간에 따른 시험성적 예측.','단순=독립변수 1개, 다중=2개 이상.','Y = a + bX');
add(c5,'t통계량','t','회귀계수가 0과 다른지 평가할 때 사용하는 검정 통계량.','귀무가설이 회귀계수=0이라면 t=회귀계수 추정값/표준오차.','2.348 ÷ 0.312 ≈ 7.526.','표준오차를 계수로 나누지 않도록 주의.','t = 계수 ÷ 표준오차');
add(c5,'분산분석 ANOVA','≋','두 개 이상의 집단 평균에 차이가 있는지 검정합니다.','집단 간 분산과 집단 내 분산을 비교해 F통계량으로 판단합니다.','세 학습법의 평균 점수가 같은지 비교.','집단 평균 비교 = ANOVA.','평균 비교 → F');
add(c5,'상관분석','↔','두 변수 사이의 선형적 관계의 방향과 강도를 측정합니다.','피어슨 상관계수 r은 −1~1. 양수는 같은 방향, 음수는 반대 방향, 0 부근은 선형 관계가 약함.','공부시간과 성적 사이 상관계수 계산.','상관관계는 인과관계를 의미하지 않음.','상관=관계 강도');
const c6=add(c,'시계열분석','◴','시간 순서에 따른 데이터의 패턴을 분석하고 미래를 예측합니다.','추세·계절·순환·불규칙 요인으로 시계열을 분해할 수 있습니다.','월별 매출이나 일별 웹 접속량 변화 분석.','계절과 순환의 주기 특성을 구별.','추·계·순·불');
add(c6,'분해시계열 4요인','◈','추세요인·계절요인·순환요인·불규칙요인.','추세: 장기 상승/하락. 계절: 고정된 주기 반복. 순환: 주기가 일정하지 않은 장기 변동. 불규칙: 우발적 변동.','여름 아이스크림 매출 증가=계절, 경기 호황·불황=순환.','계절=일정한 주기 / 순환=불규칙한 장기 주기.','추·계·순·불');
add(c6,'이동평균','≈','연속된 구간의 평균으로 시계열의 단기 변동을 부드럽게 합니다.','일정 기간(윈도우)을 옮겨 가면서 평균을 계산합니다.','최근 7일 평균 방문자 수 표시.','구간 길이에 따라 반응 속도 달라짐.','구간을 옮기는 평균');
const c7=add(c,'머신러닝','⬡','데이터에서 패턴을 학습해 분류·예측 또는 구조 발견을 수행합니다.','지도학습은 정답이 있는 데이터로 예측, 비지도학습은 정답 없이 패턴 발견. 딥러닝은 머신러닝의 하위 분야.','정상/비정상 로그인 분류(지도)와 고객 세분화(비지도).','지도=분류·회귀 / 비지도=군집·연관.','지도=정답 O / 비지도=정답 X');
const sup=add(c7,'지도학습','◉','정답(label)이 있는 데이터를 이용해 학습합니다.','대표 과제: 분류(범주 예측), 회귀(숫자 예측). 의사결정나무, SVM, KNN, 회귀, 랜덤 포레스트 등이 있습니다.','정상/악성 로그인 정답을 학습해 새 로그인 분류.','KNN(지도)과 K-means(비지도)를 구분.','분류·회귀');
const unsup=add(c7,'비지도학습','◌','정답 없이 데이터 안의 패턴을 발견합니다.','대표 과제: 군집분석, 연관분석, 주성분분석(PCA) 등.','고객을 비슷한 구매 성향끼리 나누기.','군집은 미리 정해진 정답 범주가 없음.','군집·연관');
const cla=add(c7,'분류분석','⚑','미리 정해진 범주 중 하나를 예측합니다.','의사결정나무, SVM, KNN, 로지스틱 회귀 등이 쓰입니다.','피싱 메일 여부를 정상/악성으로 예측.','분류=범주, 회귀=수치.','분류 = 종류 예측');
add(cla,'SVM','╱','두 집단을 구분하는 마진이 큰 경계를 찾는 전통적 머신러닝 기법.','SVM(Support Vector Machine)은 초평면을 이용하고 커널 기법으로 비선형 경계도 다룰 수 있습니다.','정상 접속과 공격 접속 분류.','SVM은 일반적으로 딥러닝에 속하지 않음.','SVM = 큰 마진의 경계');
add(cla,'의사결정나무','♧','질문을 반복하면서 데이터를 가지처럼 나누어 예측합니다.','범주형 목표변수의 분할 기준에 지니·엔트로피·카이제곱 등이 사용됩니다.','구매횟수 > 3? 예/아니오로 이탈 여부 예측.','CART 범주형 지니, CHAID 카이제곱.','질문 → 분기 → 결과');
add(cla,'KNN','∴','가장 가까운 K개 이웃을 참고해 새로운 데이터의 정답을 예측합니다.','K-Nearest Neighbors. 분류에서는 주변 이웃의 다수결 등을 사용합니다.','주변 5개 로그인 패턴 중 4개가 악성이면 악성으로 분류.','KNN은 지도학습, K-means는 비지도학습.','KNN = 가까운 이웃');
const clu=add(c7,'군집분석','◎','비슷한 데이터끼리 묶는 비지도학습 기법입니다.','분할적 군집(K-means), 계층적 군집, 밀도 기반(DBSCAN), 혼합분포군집 등이 있습니다.','구매 습관이 비슷한 고객을 여러 그룹으로 나누기.','분류와 달리 그룹 정답이 주어지지 않음.','군집 = 비슷한 것끼리');
add(clu,'K-means','⋮','K개 중심점을 기준으로 가까운 데이터를 묶습니다.','군집 개수 K를 먼저 지정하고 각 데이터와 중심 사이 거리를 바탕으로 반복적으로 중심을 갱신합니다.','방문 횟수·구매 금액으로 고객을 3그룹 분류(군집화).','비지도학습, KNN과 구분.','K-means = 중심점');
add(clu,'혼합분포·EM','◍','데이터가 여러 확률분포의 혼합에서 왔다고 가정하고 군집을 추정합니다.','EM: E-step(군집 소속 확률 추정) ↔ M-step(모수 갱신)을 반복합니다.','고객이 각 소비자 유형에 속할 확률 계산.','혼합분포군집의 대표 추정 알고리즘 = EM.','EM = E ↔ M');
add(clu,'DBSCAN','◌','데이터가 밀집한 곳을 군집으로 묶고 외딴 점을 잡음으로 구분합니다.','군집 개수를 미리 지정할 필요가 없고 밀도 기준(eps, minPts)을 활용합니다.','GPS 좌표에서 밀집 지역 찾기, 이상 접속 위치 감지.','밀도 기반 군집=DBSCAN.','DBSCAN = 밀도');
add(clu,'계층적 군집','⊕','비슷한 항목을 차례로 합치거나 나눠 계층 구조를 형성합니다.','최단·최장·평균·와드 연결법 등이 있습니다. 덴드로그램으로 관계를 표현할 수 있습니다.','종류가 비슷한 고객을 단계적으로 묶기.','계층적 군집은 덴드로그램.','계층적 = 나무 구조');
const assoc=add(c7,'연관분석','⛓','무엇과 무엇이 함께 나타나는지 찾아 규칙으로 표현합니다.','장바구니 분석에서 Apriori, FP-Growth를 이용하며 지지도·신뢰도·향상도를 평가합니다.','노트북을 구매한 고객이 마우스도 구매하는 경향 분석.','연관=함께 등장 / 군집=비슷한 것끼리.','연관 = 함께 구매');
add(assoc,'지지도','▦','전체 거래에서 A와 B가 동시에 등장한 비율.','Support(A→B)=A와 B를 함께 포함한 거래 수 / 전체 거래 수.','100건 중 두 상품 함께 구매가 20건 → 지지도 0.2.','전체 분모.','지지도 = 함께/전체');
add(assoc,'신뢰도','✓','A가 등장한 거래 중 B도 등장하는 비율.','Confidence(A→B)=A와 B 동시 거래 수 / A가 있는 거래 수.','A 구매 40건 중 B도 구매 20건 → 신뢰도 0.5.','A가 전제 조건일 때 분모는 A 거래.','신뢰도 = 함께/A');
add(assoc,'향상도','↗','A를 알 때 B의 발생 가능성이 독립일 때보다 얼마나 높아지는지.','Lift(A→B)=Confidence(A→B)/Support(B). 1 초과면 양의 연관, 1이면 독립에 가까움.','신뢰도 0.6, B 지지도 0.3이면 향상도 2.','Lift가 1보다 큰지 확인.','향상도 = 신뢰도/B지지도');
const ens=add(c7,'앙상블','✳','여러 모델의 예측을 결합해 성능과 안정성을 높입니다.','배깅은 여러 모델을 독립 학습, 부스팅은 오류를 보완하며 순차 학습, 스태킹은 예측 결과를 다시 학습합니다.','랜덤 포레스트는 여러 결정나무를 결합.','K-means와 KNN은 앙상블 자체가 아님.','배·부·스');
add(ens,'배깅','◉','여러 모델을 독립적으로 학습해 예측 결과를 결합합니다.','부트스트랩 표본을 사용하며 대표 예로 랜덤 포레스트가 있습니다.','서로 다른 데이터 표본으로 의사결정나무를 여러 개 학습.','배깅=병렬·독립 학습.','배깅 = 독립적으로 여럿');
add(ens,'부스팅','⟶','앞선 모델의 오류를 보완하며 모델을 순차적으로 학습합니다.','AdaBoost, Gradient Boosting 등의 계열이 있습니다.','이전 분류에서 틀린 샘플에 더 집중하도록 후속 모델 학습.','부스팅=순차·오류 보완.','부스팅 = 틀린 것 보완');
add(ens,'스태킹','▤','여러 모델 예측을 새로운 모델(메타 모델)의 입력으로 결합합니다.','서로 다른 기본 모델의 예측을 활용해 최종 예측 모델을 학습합니다.','회귀·나무·SVM의 예측을 다시 모델에 입력.','스태킹=메타 모델.','스태킹 = 예측을 다시 학습');
const deep=add(c7,'딥러닝','⊛','여러 층의 인공신경망으로 복잡한 패턴을 학습하는 머신러닝 분야입니다.','DNN은 깊은 신경망, CNN은 공간적 특징 추출, RNN은 순차 데이터 처리가 핵심입니다.','이미지 분류·음성 인식·시계열 모델링 등.','SVM은 전통적 머신러닝이지 딥러닝이 아님.','DNN=층 / CNN=이미지 / RNN=순서');
add(deep,'DNN','⬡','은닉층이 여러 개인 심층 신경망입니다.','다층 신경망으로 복잡한 입력과 출력의 관계를 학습합니다. CNN·RNN도 넓은 의미의 심층 신경망에 포함될 수 있습니다.','고객의 여러 특성으로 구매 가능성 예측.','깊은 다층 구조.','DNN = 여러 층');
add(deep,'CNN','▦','공간적으로 가까운 특징을 찾아내는 합성곱 신경망입니다.','이미지에서 작은 특징을 추출하고 결합하는 데 특히 강합니다.','고양이 사진에서 눈·귀 등의 특징으로 분류.','CNN=이미지 처리(대표 활용).','CNN = 이미지');
add(deep,'RNN','↻','앞 시점의 정보를 활용하는 순환 신경망입니다.','입력 순서가 중요한 시계열·문장 등에 사용합니다.','지난 며칠 매출을 보고 내일 매출 예측.','RNN=순차 데이터.','RNN = 순서');
const c8=add(c,'모델 평가','⊙','예측 모델이 얼마나 정확하고 유용한지 정량적으로 검토합니다.','혼동행렬의 TP·TN·FP·FN으로 정확도·오분류율·정밀도·재현율·특이도 등을 계산합니다.','악성 로그인 탐지에서 탐지 성능과 오탐·미탐 비율 비교.','오분류율=1−정확도, 정밀도·재현율의 분모 차이.','맞춤/전체 vs 틀림/전체');
const cm=add(c8,'혼동행렬','⊞','분류 모델의 예측과 실제 정답을 표로 비교합니다.','TP: 양성을 양성으로. TN: 음성을 음성으로. FP: 음성을 양성으로(오탐). FN: 양성을 음성으로(미탐).','정상 로그인을 악성으로 오탐하면 FP, 악성 로그인을 정상으로 놓치면 FN.','양성의 기준을 먼저 확인.','TP·TN=맞음 / FP·FN=틀림');
add(c8,'정확도·오분류율','◎','정확도는 맞힌 비율, 오분류율은 틀린 비율.','Accuracy=(TP+TN)/전체. Error Rate=(FP+FN)/전체=1−정확도.','전체 20건 중 틀린 것 13건 → 오분류율 13/20=0.65.','정확도와 오분류율은 합이 1.','오분류율 = 틀림/전체');
add(c8,'정밀도·재현율','◉','정밀도는 양성 예측의 적중률, 재현율은 실제 양성을 찾아낸 비율.','Precision=TP/(TP+FP). Recall=TP/(TP+FN). F1=2PR/(P+R).','악성 탐지 알림 중 실제 악성 비율=정밀도, 전체 악성 중 잡은 비율=재현율.','정밀도 분모=예측 양성, 재현율 분모=실제 양성.','정밀도=예측 중 / 재현율=실제 중');
add(c8,'특이도','◌','실제 음성을 음성으로 올바르게 판단한 비율입니다.','Specificity=TN/(TN+FP).','정상 로그인 중 정상으로 정확히 분류한 비율.','재현율은 실제 양성, 특이도는 실제 음성.','특이도 = TN/(TN+FP)');
// Cross-links using concept ids. 
const titleToId=new Map(defaultNodes.map(n=>[n.title,n.id]));function cross(x,y){const id1=titleToId.get(x),id2=titleToId.get(y);if(id1&&id2)defaultLinks.push({a:id1,b:id2})}
cross('DIKW','SECI 지식경영');cross('빅데이터 3V·4V','분석 마스터플랜');cross('KDD','CRISP-DM');cross('분석 준비도','분석 성숙도');cross('데이터 거버넌스','분석 마스터플랜');cross('하향식 접근','업무 이해');cross('상향식 접근','비지도학습');cross('회귀분석','t통계량');cross('회귀분석','상관분석');cross('SVM','지도학습');cross('지도학습','비지도학습');cross('군집분석','혼합분포·EM');cross('연관분석','군집분석');cross('분류분석','혼동행렬');cross('혼동행렬','정확도·오분류율');cross('정밀도·재현율','특이도');cross('앙상블','의사결정나무');cross('정성·정량','측정 척도');
const STORAGE='adsp-atlas-v1';let nodes=[],links=[],focus=root,modalMode='',editColor='root',panelOpen=false,transitioning=false,searchMode='navigate',oldFocus=root;
const el=id=>document.getElementById(id);const escape=s=>String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=id=>nodes.find(n=>n.id===id);const children=id=>nodes.filter(n=>n.parent===id);const colorOf=node=>COLORS[node?.color]||COLORS.root;const byTitle=n=>n?.title||'';
function load(){try{const raw=localStorage.getItem(STORAGE);if(raw){const parsed=JSON.parse(raw);if(Array.isArray(parsed.nodes)&&Array.isArray(parsed.links)&&parsed.nodes.some(n=>n.id===root)&&parsed.nodes.length<1500){nodes=parsed.nodes;links=parsed.links.filter(l=>l.a&&l.b);return}}}catch(e){console.warn('Data could not be loaded',e)}nodes=structuredClone(defaultNodes);links=structuredClone(defaultLinks)}
function persistLocal(markDirty=false){
 try{localStorage.setItem(STORAGE,JSON.stringify({nodes,links}));if(markDirty){cloudDirty=true;localStorage.setItem(CLOUD_DIRTY,'1')}return true}
 catch(e){toast('브라우저 저장에 실패했습니다. JSON 백업을 확인하세요.');return false}
}
function save(){const ok=persistLocal(true);if(ok)scheduleCloudSave();return ok}
function ancestors(id){const out=[];const seen=new Set();let n=byId(id);while(n&&!seen.has(n.id)){seen.add(n.id);out.unshift(n);n=byId(n.parent)}return out}
function course(node){let n=node,seen=0;while(n&&n.parent&&n.parent!==root&&seen++<20)n=byId(n.parent);return n?.parent===root?n:node}
function palette(node){return node?.color||'root'}
function layout(count,w,h){const mobile=w<500;const compact=w<870;const cx=w/2,cy=h*(mobile?.53:.54);const availW=Math.max(140,w),availH=Math.max(200,h);const rx=Math.min(compact?Math.max(128,availW*.33):Math.max(245,availW*.315),compact?availW*.325:350);const ry=Math.min(compact?availH*.32:availH*.31,compact?255:290);let positions=[];const start=count===3?-Math.PI/2:count===2?-Math.PI/2:-(Math.PI/2)-(Math.PI*1.8/Math.max(count,3))/2;for(let i=0;i<count;i++){let angle=start+i*(2*Math.PI/count);if(count===1)angle=-Math.PI/2;positions.push({x:cx+Math.cos(angle)*rx,y:cy+Math.sin(angle)*ry,angle})}return {cx,cy,positions,rx,ry,mobile}}
function makeSVG(tag,attrs,container){const e=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);container.append(e);return e}

// Large shared workspace: clicking a concept grows its subtree rather than changing pages.
const expandedConcepts=new Set([root]);
let mapPositions=new Map();

function measureMindmap(){
 const area=el('mapArea');
 const cx=area.clientWidth/2,cy=area.clientHeight/2;
 const positions=new Map();
 const childrenByParent=new Map();
 for(const n of nodes){
  if(n.parent==null)continue;
  if(!childrenByParent.has(n.parent))childrenByParent.set(n.parent,[]);
  childrenByParent.get(n.parent).push(n);
 }
 const leafWeights=new Map();
 const measuring=new Set();
 function weight(id){
  if(leafWeights.has(id))return leafWeights.get(id);
  if(measuring.has(id))return 1;
  measuring.add(id);
  const kids=childrenByParent.get(id)||[];
  const value=kids.length?kids.reduce((total,k)=>total+weight(k.id),0):1;
  measuring.delete(id);
  leafWeights.set(id,Math.max(1,value));
  return Math.max(1,value);
 }
 // Use ALL descendants for stable sectors: opening a branch does not rearrange siblings.
 weight(root);
 const ring=[0,620,1350,2300,3500,4950,6650,8550];
 function radius(depth){return ring[depth]??(ring[ring.length-1]+(depth-ring.length+1)*2100)}
 const visible=new Set();
 function put(n,depth,angle,start,end){
  if(visible.has(n.id))return;
  visible.add(n.id);
  positions.set(n.id,{
   x:cx+Math.cos(angle)*radius(depth),
   y:cy+Math.sin(angle)*radius(depth),
   depth,angle
  });
  if(!expandedConcepts.has(n.id))return;
  const kids=childrenByParent.get(n.id)||[];
  if(!kids.length)return;
  const sum=kids.reduce((total,k)=>total+weight(k.id),0);
  let cursor=start;
  for(const kid of kids){
   const span=(end-start)*weight(kid.id)/sum;
   const mid=cursor+span/2;
   put(kid,depth+1,mid,cursor,cursor+span);
   cursor+=span;
  }
 }
 const main=byId(root);
 if(!main)return positions;
 positions.set(root,{x:cx,y:cy,depth:0,angle:0});
 visible.add(root);
 const mainChildren=childrenByParent.get(root)||[];
 // Divide the full 360 degrees evenly between the major subjects.
 const sector=2*Math.PI/Math.max(1,mainChildren.length);
 const first=-Math.PI/2-sector/2;
 mainChildren.forEach((kid,i)=>{
  const start=first+i*sector;
  put(kid,1,start+sector/2,start,start+sector);
 });
 return positions;
}
function makeMindmapNode(n,p){
 const kidCount=children(n.id).length;
 const selected=n.id===focus;
 const open=expandedConcepts.has(n.id);
 const btn=document.createElement('button');
 btn.type='button';
 btn.className='node '+(selected?'focus':'child')+' mind-node'+(selected?' selected':'')+(open?' expanded':'');
 btn.style.left=p.x+'px';
 btn.style.top=p.y+'px';
 btn.style.setProperty('--hue',colorOf(n));
 btn.setAttribute('aria-label',n.title+(kidCount?' · 하위 '+kidCount+'개 · '+(open?'접기':'펼치기'):' · 설명 보기'));
 btn.setAttribute('aria-expanded',kidCount?String(open):'false');
 btn.title=kidCount?(open?'클릭해서 가지 접기':'클릭해서 가지 펼치기'):'클릭해서 설명 보기';
 const ring=document.createElement('span');
 ring.className='node-ring';
 const glyph=document.createElement('span');
 glyph.className='glyph';
 glyph.textContent=n.icon||'✦';
 const title=document.createElement('span');
 title.className='node-name';
 title.textContent=n.title;
 const meta=document.createElement('span');
 meta.className='node-meta';
 meta.textContent=kidCount?(open?'− 접기':'＋ '+kidCount+'개 펼치기'):'개념 보기';
 btn.append(ring,glyph,title,meta);
 btn.addEventListener('click',()=>toggleConcept(n.id));
 el('nodes').append(btn);
}

function drawLink(from,to,edgeLayer,extra=false,color=null){
 const cx=el('mapArea').clientWidth/2,cy=el('mapArea').clientHeight/2;
 const dx=to.x-from.x,dy=to.y-from.y,dist=Math.hypot(dx,dy)||1;
 let d;
 if(extra){
  const ox=-dy/dist*Math.min(180,dist*.22);
  const oy=dx/dist*Math.min(180,dist*.22);
  d='M '+from.x+' '+from.y+' Q '+((from.x+to.x)/2+ox)+' '+((from.y+to.y)/2+oy)+' '+to.x+' '+to.y;
 }else{
  const fdx=from.x-cx,fdy=from.y-cy,tdx=to.x-cx,tdy=to.y-cy;
  const fl=Math.hypot(fdx,fdy),tl=Math.hypot(tdx,tdy);
  const ux=fl?fdx/fl:dx/dist,uy=fl?fdy/fl:dy/dist;
  const vx=tl?tdx/tl:dx/dist,vy=tl?tdy/tl:dy/dist;
  const bend=Math.min(410,dist*.34);
  d='M '+from.x+' '+from.y+
   ' C '+(from.x+ux*bend)+' '+(from.y+uy*bend)+
   ', '+(to.x-vx*bend)+' '+(to.y-vy*bend)+
   ', '+to.x+' '+to.y;
 }
 makeSVG('path',{d,class:extra?'concept-crosslink':'concept-branch',stroke:color||'#71808c',fill:'none'},edgeLayer);
}
function renderMap(){
 const area=el('mapArea');
 const w=Math.max(10,area.clientWidth),h=Math.max(10,area.clientHeight);
 const orbits=el('orbits'),edges=el('edges'),layer=el('nodes');
 orbits.replaceChildren();edges.replaceChildren();layer.replaceChildren();
 orbits.setAttribute('viewBox','0 0 '+w+' '+h);
 edges.setAttribute('viewBox','0 0 '+w+' '+h);
 mapPositions=measureMindmap();
 const byPosition=mapPositions;
 for(const n of nodes){
  const p=byPosition.get(n.id);
  if(!p||!n.parent)continue;
  const parent=byPosition.get(n.parent);
  if(parent)drawLink(parent,p,edges,false,colorOf(n));
 }
 for(const link of links){
  const first=byPosition.get(link.a),second=byPosition.get(link.b);
  if(first&&second)drawLink(first,second,edges,true);
 }
 for(const n of nodes){
  const p=byPosition.get(n.id);
  if(p)makeMindmapNode(n,p);
 }
 const selected=byId(focus)||byId(root);
 el('crumb').replaceChildren();
 const path=ancestors(selected.id);
 path.forEach((part,i)=>{
  if(i){const sep=document.createElement('span');sep.className='sep';sep.textContent='›';el('crumb').append(sep)}
  const bt=document.createElement('button');
  bt.textContent=part.id===root?'전체':part.title;
  bt.className=i===path.length-1?'active':'';
  bt.onclick=()=>navigate(part.id);
  el('crumb').append(bt);
 });
}
function toggleConcept(id){
 const target=byId(id);
 if(!target)return;
 focus=id;
 if(children(id).length){
  if(expandedConcepts.has(id)&&id!==root)expandedConcepts.delete(id);
  else expandedConcepts.add(id);
 }
 renderMap();
 renderDetail();
 fitMapToContent();
}
function expandAllMindmap(){
 for(const n of nodes)if(children(n.id).length)expandedConcepts.add(n.id);
 focus=root;
 renderMap();
 renderDetail();
 fitMapToContent();
}


function makeSection(title,content,index,variant=''){
 if(!content)return null;
 const section=document.createElement('section');
 section.className='detail-section'+(variant?' '+variant:'');
 const heading=document.createElement('div');
 heading.className='section-heading';
 const count=document.createElement('span');
 count.className='section-index';
 count.textContent=index;
 const name=document.createElement('h3');
 name.className='section-title';
 name.textContent=title;
 heading.append(count,name);
 section.append(heading);
 const body=document.createElement('div');
 body.className=variant==='memory-section'?'memory-card':'section-copy';
 body.textContent=content;
 section.append(body);
 return section;
}
function makeRelatedSection(title,index){
 const section=document.createElement('section');
 section.className='detail-section related-section';
 const heading=document.createElement('div');
 heading.className='section-heading';
 const count=document.createElement('span');
 count.className='section-index';
 count.textContent=index;
 const text=document.createElement('h3');
 text.className='section-title';
 text.textContent=title;
 heading.append(count,text);
 section.append(heading);
 return section;
}
function renderDetail(){
 const n=byId(focus)||byId(root);
 const detail=el('detail');
 const hue=colorOf(n);
 detail.style.setProperty('--detail-hue',hue);
 const addButton=el('childAddBtn');
 addButton.style.removeProperty('background');
 const head=el('detailHeader');
 head.replaceChildren();

 const top=document.createElement('div');
 top.className='panel-top';
 const context=document.createElement('div');
 context.className='panel-context';
 const contextMark=document.createElement('span');
 contextMark.className='panel-context-mark';
 const contextLabel=document.createElement('span');
 contextLabel.textContent='STUDY NOTE';
 const courseLabel=document.createElement('span');
 courseLabel.className='chapter-label';
 courseLabel.textContent=n.id===root?'ADsP':(course(n)?.title||'ADsP');
 context.append(contextMark,contextLabel,courseLabel);

 const controls=document.createElement('div');
 controls.className='panel-buttons';
 const edit=document.createElement('button');
 edit.className='icon-btn';
 edit.textContent='✎';
 edit.title='개념 수정';
 edit.setAttribute('aria-label','개념 수정');
 edit.onclick=()=>openEditor('edit',n.id);
 controls.append(edit);
 const parent=byId(n.parent);
 if(parent){
  const back=document.createElement('button');
  back.className='icon-btn';
  back.textContent='↶';
  back.title='상위 개념 선택';
  back.setAttribute('aria-label','상위 개념 선택');
  back.onclick=()=>navigate(parent.id);
  controls.append(back);
 }
 const hide=document.createElement('button');
 hide.className='icon-btn mobile-close';
 hide.textContent='×';
 hide.title='설명 패널 닫기';
 hide.setAttribute('aria-label','설명 패널 닫기');
 hide.onclick=()=>{panelOpen=false;detail.classList.remove('mobile-open')};
 controls.append(hide);
 top.append(context,controls);
 head.append(top);

 const headingRow=document.createElement('div');
 headingRow.className='detail-heading-row';
 const glyph=document.createElement('div');
 glyph.className='detail-icon';
 glyph.textContent=n.icon||'✦';
 glyph.setAttribute('aria-hidden','true');
 const headingText=document.createElement('div');
 headingText.className='detail-heading-copy';
 const overline=document.createElement('div');
 overline.className='detail-kicker';
 overline.textContent=n.id===root?'데이터 분석 학습 지도':n.priority?'학습 우선순위 '+n.priority:'개념 노트';
 const title=document.createElement('h2');
 title.className='detail-title';
 title.textContent=n.title;
 headingText.append(overline,title);
 headingRow.append(glyph,headingText);
 head.append(headingRow);

 const intro=document.createElement('p');
 intro.className='detail-intro';
 intro.textContent=n.short||'선택한 개념의 핵심 설명을 작성해 보세요.';
 head.append(intro);

 const scroll=el('detailScroll');
 scroll.replaceChildren();
 const contents=[
  makeSection('개념 이해',n.detail,'01','definition-section'),
  makeSection('실제 활용 사례',n.example,'02','example-section'),
  makeSection('ADsP 시험 포인트',n.exam,'03','exam-section'),
  makeSection('한 줄 암기',n.memory,'04','memory-section')
 ];
 contents.filter(Boolean).forEach(section=>scroll.append(section));

 const related=links.filter(l=>l.a===n.id||l.b===n.id)
  .map(l=>byId(l.a===n.id?l.b:l.a)).filter(Boolean);
 const linkedSection=makeRelatedSection('관련 개념','05');
 const chips=document.createElement('div');
 chips.className='chip-list';
 for(const item of related){
  const chip=document.createElement('button');
  chip.className='chip';
  chip.textContent=(item.icon||'◉')+' '+item.title+' ↗';
  chip.onclick=()=>navigate(item.id);
  chips.append(chip);
 }
 const linkButton=document.createElement('button');
 linkButton.className='soft-btn';
 linkButton.textContent='＋ 다른 개념 연결';
 linkButton.onclick=()=>openSearch('link');
 chips.append(linkButton);
 linkedSection.append(chips);
 scroll.append(linkedSection);

 const sub=children(n.id);
 if(sub.length){
  const childSection=makeRelatedSection('하위 개념 · '+sub.length+'개','06');
  const childChips=document.createElement('div');
  childChips.className='chip-list';
  for(const item of sub){
   const chip=document.createElement('button');
   chip.className='chip';
   chip.textContent=item.title+' ↗';
   chip.onclick=()=>navigate(item.id);
   childChips.append(chip);
  }
  childSection.append(childChips);
  scroll.append(childSection);
 }
 scroll.scrollTop=0;
}

function navigate(id){
 if(!byId(id))return;
 focus=id;
 for(const ancestor of ancestors(id))expandedConcepts.add(ancestor.id);
 renderMap();renderDetail();
 focusMapNode(id);
}
function redraw(){renderMap();applyMapCamera()}
const mapCamera={scale:1,x:0,y:0},MAP_ZOOM_MIN=.01,MAP_ZOOM_MAX=1.5;
let mapPointer=null;
function applyMapCamera(){
 el('mapCamera').style.transform='translate3d('+mapCamera.x+'px,'+mapCamera.y+'px,0) scale('+mapCamera.scale+')';
 el('zoomLevel').textContent=Math.round(mapCamera.scale*100)+'%';
}
function zoomMapAt(factor,clientX,clientY){
 const bounds=el('mapArea').getBoundingClientRect();
 const next=Math.max(MAP_ZOOM_MIN,Math.min(MAP_ZOOM_MAX,mapCamera.scale*factor));
 if(Math.abs(next-mapCamera.scale)<.00000001)return;
 const ratio=next/mapCamera.scale;
 const px=clientX-bounds.left-bounds.width/2;
 const py=clientY-bounds.top-bounds.height/2;
 mapCamera.x=px-ratio*(px-mapCamera.x);
 mapCamera.y=py-ratio*(py-mapCamera.y);
 mapCamera.scale=next;
 applyMapCamera();
}
function fitMapToContent(){
 if(!mapPositions.size)return;
 const a=el('mapArea'),w=a.clientWidth,h=a.clientHeight;
 const points=[...mapPositions.values()];
 const minX=Math.min(...points.map(p=>p.x))-115;
 const maxX=Math.max(...points.map(p=>p.x))+115;
 const minY=Math.min(...points.map(p=>p.y))-110;
 const maxY=Math.max(...points.map(p=>p.y))+110;
 const fit=Math.min(1,(w-65)/Math.max(1,maxX-minX),(h-95)/Math.max(1,maxY-minY));
 mapCamera.scale=Math.max(MAP_ZOOM_MIN,Math.min(MAP_ZOOM_MAX,fit));
 mapCamera.x=-((minX+maxX)/2-w/2)*mapCamera.scale;
 mapCamera.y=-((minY+maxY)/2-h/2)*mapCamera.scale;
 applyMapCamera();
}
function focusMapNode(id){
 const p=mapPositions.get(id);
 if(!p)return;
 const a=el('mapArea');
 mapCamera.x=-(p.x-a.clientWidth/2)*mapCamera.scale;
 mapCamera.y=-(p.y-a.clientHeight/2)*mapCamera.scale;
 applyMapCamera();
}
function initMapCamera(){
 const area=el('mapArea');
 area.addEventListener('wheel',e=>{
  if(e.target.closest('.map-controls,.mobile-detail-toggle'))return;
  // Prevent the browser page zoom while the pointer is inside the map.
  e.preventDefault();
  const multiplier=e.deltaMode===1?16:e.deltaMode===2?area.clientHeight:1;
  const normalized=Math.max(-160,Math.min(160,e.deltaY*multiplier));
  if(normalized===0)return;
  const increment=Math.min(.05,Math.max(.002,Math.abs(normalized)*.0005));
  const next=Math.max(MAP_ZOOM_MIN,Math.min(MAP_ZOOM_MAX,mapCamera.scale-Math.sign(normalized)*increment));
  zoomMapAt(next/mapCamera.scale,e.clientX,e.clientY);
 },{passive:false,capture:true});
 function zoomCenter(delta){
  const a=area.getBoundingClientRect();
  const next=Math.max(MAP_ZOOM_MIN,Math.min(MAP_ZOOM_MAX,Math.round((mapCamera.scale+delta)*100)/100));
  zoomMapAt(next/mapCamera.scale,a.left+a.width/2,a.top+a.height/2);
 }
 el('zoomInBtn').onclick=()=>zoomCenter(.05);
 el('zoomOutBtn').onclick=()=>zoomCenter(-.05);
 el('zoomResetBtn').onclick=fitMapToContent;
 area.addEventListener('pointerdown',e=>{
  if(mapPointer||e.button!==0||e.target.closest('button,a,input,textarea,select,.map-label,.map-controls,.legend'))return;
  mapPointer={id:e.pointerId,x:e.clientX,y:e.clientY};
  area.classList.add('is-panning');
  area.setPointerCapture(e.pointerId);
  e.preventDefault();
 });
 area.addEventListener('pointermove',e=>{
  if(!mapPointer||mapPointer.id!==e.pointerId)return;
  mapCamera.x+=e.clientX-mapPointer.x;
  mapCamera.y+=e.clientY-mapPointer.y;
  mapPointer.x=e.clientX;mapPointer.y=e.clientY;
  applyMapCamera();
 });
 function stop(e){
  if(!mapPointer||mapPointer.id!==e.pointerId)return;
  mapPointer=null;area.classList.remove('is-panning');
  if(area.hasPointerCapture(e.pointerId))area.releasePointerCapture(e.pointerId);
 }
 area.addEventListener('pointerup',stop);
 area.addEventListener('pointercancel',stop);
 area.addEventListener('lostpointercapture',e=>{
  if(mapPointer&&mapPointer.id===e.pointerId){mapPointer=null;area.classList.remove('is-panning')}
 });
 applyMapCamera();
}

function openPanel(){if(window.innerWidth<=830){panelOpen=true;el('detail').classList.add('mobile-open')}}
function closeModal(){el('modal').classList.add('hidden');el('modal').replaceChildren();modalMode=''}
function showModal(){el('modal').classList.remove('hidden')}
function mountDialog(title,desc){const overlay=el('modal');overlay.replaceChildren();const d=document.createElement('div');d.className='dialog';const h=document.createElement('div');h.className='dialog-head';const titleBox=document.createElement('div');titleBox.innerHTML=`<div class="dialog-title">${escape(title)}</div><div class="dialog-desc">${escape(desc)}</div>`;const close=document.createElement('button');close.className='icon-btn';close.textContent='×';close.setAttribute('aria-label','닫기');close.onclick=closeModal;h.append(titleBox,close);const body=document.createElement('div');body.className='dialog-body';const actions=document.createElement('div');actions.className='dialog-actions';d.append(h,body,actions);overlay.append(d);showModal();return {body,actions,d}}
function inputField(label,value='',area=false,rows=2,max=1200){const wrap=document.createElement('div');wrap.className='field';const l=document.createElement('label');l.textContent=label;const control=document.createElement(area?'textarea':'input');if(area){control.rows=rows}else control.type='text';control.value=value||'';control.maxLength=max;wrap.append(l,control);return {wrap,control}}
function editPalette(container,current){editColor=current;const p=document.createElement('div');p.className='palette';Object.entries(COLORS).filter(([key])=>key!=='root').forEach(([key,color])=>{const b=document.createElement('button');b.type='button';b.style.background=color;b.title=key;b.setAttribute('aria-label',`${key} 색상`);if(editColor===key)b.classList.add('selected');b.onclick=()=>{editColor=key;p.querySelectorAll('button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')};p.append(b)});container.append(p)}
function openEditor(mode,id){modalMode=mode;const n=mode==='edit'?byId(id):null;const current=byId(focus);const d=mountDialog(mode==='edit'?'개념 수정':'새 개념 추가',mode==='edit'?'기존 설명을 자유롭게 수정할 수 있습니다.':`「${current.title}」의 하위 개념으로 연결됩니다.`);const title=inputField('개념 이름 *',n?.title, false,1,55),icon=inputField('아이콘 · 이모지나 기호',n?.icon||'✦',false,1,8),short=inputField('한눈에 보는 개념 · 짧은 설명',n?.short,true,2,280),detail=inputField('개념 설명 · 쉬운 말로 작성',n?.detail,true,3,3000),example=inputField('실제 사례',n?.example,true,2,1800),exam=inputField('시험 포인트',n?.exam,true,2,1800),memory=inputField('한 줄 암기',n?.memory,true,2,500);const group=document.createElement('div');group.className='form-grid';group.append(title.wrap,icon.wrap);d.body.append(group,short.wrap,detail.wrap,example.wrap,exam.wrap,memory.wrap);const colorField=document.createElement('div');colorField.className='field';colorField.innerHTML='<label>개념 색상</label>';editPalette(colorField,n?.color||current.color);d.body.append(colorField);const cancel=document.createElement('button');cancel.textContent='취소';cancel.onclick=closeModal;d.actions.append(cancel);if(mode==='edit'&&n&&!n.builtIn&&n.id!==root){const del=document.createElement('button');del.textContent='삭제';del.className='danger';del.onclick=()=>{if(!confirm(`「${n.title}」와 그 하위 개념을 모두 삭제할까요? 이 작업은 되돌릴 수 없습니다.`))return;const ids=new Set([n.id]);let hasNew=true;while(hasNew){hasNew=false;nodes.forEach(node=>{if(ids.has(node.parent)&&!ids.has(node.id)){ids.add(node.id);hasNew=true}})}nodes=nodes.filter(node=>!ids.has(node.id));links=links.filter(l=>!ids.has(l.a)&&!ids.has(l.b));const parent=n.parent;save();closeModal();focus=parent;expandedConcepts.delete(n.id);renderMap();renderDetail();fitMapToContent();toast('개념을 삭제했습니다.')};d.actions.prepend(del)}
 const submit=document.createElement('button');submit.className='primary';submit.textContent=mode==='edit'?'수정 저장':'개념 추가';submit.onclick=()=>{const name=title.control.value.trim();if(!name){title.control.focus();toast('개념 이름을 입력해 주세요.');return}if(mode==='add'&&nodes.length>1200){toast('개념이 너무 많습니다.');return}const values={title:name,icon:icon.control.value.trim()||'✦',short:short.control.value.trim(),detail:detail.control.value.trim(),example:example.control.value.trim(),exam:exam.control.value.trim(),memory:memory.control.value.trim(),color:editColor,priority:'★★'};if(mode==='edit'){Object.assign(n,values)}else{const newId='u'+Date.now().toString(36)+Math.random().toString(36).slice(2,6);nodes.push({id:newId,parent:focus,...values,builtIn:false});expandedConcepts.add(focus);}save();closeModal();renderMap();renderDetail();fitMapToContent();toast(mode==='edit'?'개념을 수정했습니다.':'새 개념을 연결했습니다.');};d.actions.append(submit);setTimeout(()=>title.control.focus(),60)}
function openSearch(mode='navigate'){searchMode=mode;modalMode='search';const current=byId(focus);const d=mountDialog(mode==='link'?'개념 연결하기':'개념 검색',mode==='link'?`「${current.title}」와 연결할 개념을 찾아 선택하세요.`:'어떤 개념이든 검색하여 바로 이동할 수 있습니다.');const bar=document.createElement('div');bar.className='search-bar';const mag=document.createElement('span');mag.textContent='⌕';const inp=document.createElement('input');inp.type='search';inp.placeholder='예: KDD, t통계량, 군집, 거버넌스';bar.append(mag,inp);d.body.append(bar);const results=document.createElement('div');results.className='search-results';d.body.append(results);d.actions.style.display='none';function update(){results.replaceChildren();const q=inp.value.trim().toLowerCase();const filtered=nodes.filter(n=>(mode!=='link'||n.id!==focus)&&(n.title.toLowerCase().includes(q)||n.short.toLowerCase().includes(q))).slice(0,35);if(!filtered.length){const empty=document.createElement('div');empty.className='empty-search';empty.textContent='검색 결과가 없습니다.';results.append(empty)}filtered.forEach(item=>{const bt=document.createElement('button');bt.className='search-item';const ico=document.createElement('div');ico.className='sicon';ico.textContent=item.icon||'◉';const v=document.createElement('div');const tt=document.createElement('div');tt.className='s-title';tt.textContent=item.title;const path=document.createElement('div');path.className='s-path';path.textContent=ancestors(item.id).slice(1,-1).map(n=>n.title).join(' › ')||'ADsP';v.append(tt,path);bt.append(ico,v);bt.onclick=()=>{if(mode==='link'){if(!links.some(l=>(l.a===focus&&l.b===item.id)||(l.b===focus&&l.a===item.id))){links.push({a:focus,b:item.id});save();renderDetail();toast('두 개념을 연결했습니다.')}else toast('이미 연결된 개념입니다.')}else navigate(item.id);closeModal()};results.append(bt)})}inp.addEventListener('input',update);update();setTimeout(()=>inp.focus(),35)}
function download(name,content,type){const blob=new Blob([content],{type});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000)}
function openData(){modalMode='data';const d=mountDialog('내 학습 데이터','학습 내용을 JSON으로 백업하거나 불러올 수 있습니다. 클라우드 연결 시 다른 기기와 자동 동기화됩니다.');const helper=document.createElement('div');helper.className='helper';helper.textContent='수정 내용은 이 브라우저에 먼저 저장되고, 클라우드 연결 시 자동 동기화됩니다. 무료 플랜에는 자동 백업이 없으니 JSON 파일도 보관하세요.';d.body.append(helper);const box=document.createElement('div');box.className='toolrow';box.style.marginTop='20px';const exportBtn=document.createElement('button');exportBtn.textContent='↓ JSON 백업 저장';exportBtn.onclick=()=>{download('ADsP_ATLAS_학습데이터.json',JSON.stringify({version:1,exportedAt:new Date().toISOString(),nodes,links},null,2),'application/json;charset=utf-8');toast('학습 데이터를 내보냈습니다.')};const importBtn=document.createElement('button');importBtn.textContent='↑ JSON 불러오기';const file=document.createElement('input');file.type='file';file.accept='.json,application/json';file.style.display='none';importBtn.onclick=()=>file.click();file.onchange=()=>{const f=file.files?.[0];if(!f)return;if(f.size>4*1024*1024){toast('4MB 이하 JSON을 선택해 주세요.');return}const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(String(reader.result));if(!Array.isArray(parsed.nodes)||!Array.isArray(parsed.links)||!parsed.nodes.some(n=>n.id===root)||parsed.nodes.length>1500||parsed.nodes.some(n=>typeof n.id!=='string'||typeof n.title!=='string'||!n.id||n.title.length>100))throw Error('format');if(!confirm('현재 학습 데이터를 불러온 내용으로 바꿀까요? 먼저 JSON으로 백업하면 안전합니다.'))return;const set=new Set(parsed.nodes.map(n=>n.id));if(set.size!==parsed.nodes.length)throw Error('duplicates');nodes=parsed.nodes.map(n=>({...n,title:n.title.slice(0,100),short:String(n.short||'').slice(0,3000),detail:String(n.detail||'').slice(0,6000),example:String(n.example||'').slice(0,4000),exam:String(n.exam||'').slice(0,4000),memory:String(n.memory||'').slice(0,1200),icon:String(n.icon||'✦').slice(0,16),color:COLORS[n.color]?n.color:'root'}));links=parsed.links.filter(l=>set.has(l.a)&&set.has(l.b)&&l.a!==l.b);focus=root;save();closeModal();renderMap();renderDetail();toast('학습 데이터를 불러왔습니다.')}catch(e){toast('올바른 ADsP ATLAS JSON 파일이 아닙니다.')}};reader.readAsText(f,'utf-8')};box.append(exportBtn,importBtn,file);d.body.append(box);const sep=document.createElement('div');sep.style.cssText='border-top:1px solid rgba(255,255,255,.1);margin:24px 0';d.body.append(sep);const hint=document.createElement('div');hint.className='helper';hint.textContent='초기 교재로 되돌리면 직접 추가한 개념과 수정 내역이 모두 사라집니다. 이전 상태를 유지하려면 반드시 백업하세요.';d.body.append(hint);const reset=document.createElement('button');reset.className='soft-btn';reset.style.cssText='margin-top:12px;color:#ffafb1;border-color:rgba(255,160,160,.34)';reset.textContent='초기 교재로 되돌리기';reset.onclick=()=>{if(!confirm('기존 학습 데이터를 모두 초기화할까요? 이 작업은 되돌릴 수 없습니다.'))return;nodes=structuredClone(defaultNodes);links=structuredClone(defaultLinks);focus=root;save();closeModal();renderMap();renderDetail();toast('기본 교재로 초기화했습니다.')};d.body.append(reset);const close=document.createElement('button');close.textContent='닫기';close.onclick=closeModal;d.actions.append(close)}

// ---- Supabase cloud sync. One private row per signed-in user, guarded by RLS. ----
const CLOUD_CONFIG='adsp-atlas-cloud-config-v1',CLOUD_DIRTY='adsp-atlas-cloud-dirty-v1',CLOUD_OWNER='adsp-atlas-cloud-owner-v1';
let cloudConfig=null,cloudClient=null,cloudUser=null,cloudReady=false,cloudDirty=false,cloudRevision=null;
let cloudTimer=null,cloudBusy=false,cloudInitPromise=null,cloudConflictPending=false;
function cloudState(text,kind='offline'){
 const btn=el('cloudBtn');btn.dataset.kind=kind;el('cloudStatus').textContent=text;btn.title='동기화: '+text;
 const foot=document.querySelector('.footer-hint');if(foot)foot.textContent=cloudConfig?(kind==='online'?'이 PC와 클라우드에 저장됩니다.':kind==='warning'?'현재 PC에는 저장됨 · 클라우드 상태 확인 필요':'이 PC에 먼저 저장하고, 연결되면 동기화합니다.'):'개념은 이 PC에 먼저 저장됩니다. 클라우드는 상단에서 연결하세요.';
}
function cloudLocalLooksEdited(){
 try{const raw=localStorage.getItem(STORAGE);if(!raw)return false;const obj=JSON.parse(raw);return JSON.stringify({nodes:obj.nodes,links:obj.links})!==JSON.stringify({nodes:defaultNodes,links:defaultLinks})}catch(e){return false}
}
function currentSnapshot(){return {nodes:structuredClone(nodes),links:structuredClone(links)}}
function markClean(){cloudDirty=false;localStorage.removeItem(CLOUD_DIRTY)}
function applyCloud(doc){
 if(!doc||!Array.isArray(doc.nodes)||!Array.isArray(doc.links)||!doc.nodes.some(n=>n.id===root)||doc.nodes.length>1500)throw new Error('클라우드 데이터 형식이 올바르지 않습니다.');
 nodes=doc.nodes;links=doc.links;focus=byId(focus)?focus:root;persistLocal(false);markClean();renderMap();renderDetail();
}
async function cloudSDK(){
 if(window.supabase?.createClient)return window.supabase;
 if(!cloudInitPromise){cloudInitPromise=new Promise((resolve,reject)=>{const tag=document.createElement('script');tag.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js';tag.onload=()=>window.supabase?.createClient?resolve(window.supabase):reject(Error('Supabase 라이브러리를 불러오지 못했습니다.'));tag.onerror=()=>reject(Error('인터넷 또는 CDN 연결을 확인하세요.'));document.head.append(tag)}).catch(e=>{cloudInitPromise=null;throw e})}
 return cloudInitPromise;
}
function validCloudConfig(o){try{const u=new URL(o.url);return u.protocol==='https:'&&/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(o.url)&&/^(sb_publishable_|eyJ)/.test(o.key)}catch(e){return false}}
function readCloudConfig(){try{const item=localStorage.getItem(CLOUD_CONFIG);return item?JSON.parse(item):{url:'https://mrljhjtcydjugiirmxxe.supabase.co',key:'sb_publishable_oqKw5IeOYCTS3h2WyYKiJw_6tn6-eer'}}catch(e){return {url:'https://mrljhjtcydjugiirmxxe.supabase.co',key:'sb_publishable_oqKw5IeOYCTS3h2WyYKiJw_6tn6-eer'}}}
async function cloudInit(){
 cloudConfig=readCloudConfig();cloudDirty=localStorage.getItem(CLOUD_DIRTY)==='1';
 if(!cloudConfig){cloudState('클라우드 설정');return}
 if(!validCloudConfig(cloudConfig)){cloudState('설정 확인 필요','warning');return}
 cloudState('연결 확인 중','busy');
 try{
  const sdk=await cloudSDK();
  cloudClient=sdk.createClient(cloudConfig.url,cloudConfig.key,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true},global:{headers:{'X-Client-Info':'adsp-atlas/2'}}});
  cloudClient.auth.onAuthStateChange((event,session)=>{if(event==='SIGNED_IN'||event==='SIGNED_OUT'){setTimeout(()=>onCloudAuth(session?.user||null),0)}});
  const {data,error}=await cloudClient.auth.getSession();if(error)throw error;
  await onCloudAuth(data.session?.user||null);
 }catch(e){cloudState('연결 실패 · 다시 시도','warning');console.warn('Supabase initialization failed',e)}
}
async function onCloudAuth(user){
 if(!user){cloudUser=null;cloudReady=false;cloudRevision=null;cloudState('이메일 인증 필요','warning');return}
 if(cloudUser?.id===user.id&&cloudReady)return;
 cloudUser=user;cloudReady=false;cloudRevision=null;
 const owner=localStorage.getItem(CLOUD_OWNER);
 if(owner&&owner!==user.id){nodes=structuredClone(defaultNodes);links=structuredClone(defaultLinks);focus=root;markClean();persistLocal(false);renderMap();renderDetail()}
 localStorage.setItem(CLOUD_OWNER,user.id);
 cloudState('학습 내용 불러오는 중','busy');await cloudPull(true);
}
async function cloudPull(initial=false){
 if(!cloudClient||!cloudUser||cloudBusy)return;
 cloudBusy=true;
 try{
  const {data,error}=await cloudClient.from('atlas_documents').select('payload,revision').eq('user_id',cloudUser.id).maybeSingle();
  if(error)throw error;
  if(!cloudUser){return}
  const serverRev=data?.revision??null;
  if(initial){
    cloudRevision=serverRev;
    if(data&&cloudDirty){cloudBusy=false;cloudConflict(data.payload,serverRev);return}
    if(data){applyCloud(data.payload);cloudReady=true;cloudState('자동 동기화 완료','online');}
    else {cloudReady=true;cloudState('최초 업로드 중','busy');if(!cloudDirty){cloudDirty=true;localStorage.setItem(CLOUD_DIRTY,'1')}cloudBusy=false;await cloudPush();return}
  }else if(data&&serverRev!==cloudRevision){
    if(cloudDirty){cloudBusy=false;cloudConflict(data.payload,serverRev);return}
    cloudRevision=serverRev;applyCloud(data.payload);cloudState('다른 기기 변경 반영','online');
  }else if(!cloudDirty){cloudState('자동 동기화 완료','online')}
 }catch(e){console.warn('Cloud read failed',e);cloudState('PC에 저장됨 · 동기화 오류','warning')}
 finally{cloudBusy=false}
}
function cloudConflict(remoteDoc,remoteRev){
 cloudReady=false;cloudConflictPending=true;cloudState('저장 내용 선택 필요','warning');
 const d=mountDialog('어느 학습 내용을 사용할까요?','이 PC의 수정 내용과 클라우드 내용이 모두 있습니다. 자동으로 덮어쓰지 않았습니다.');
 const hint=document.createElement('div');hint.className='cloud-note';hint.textContent='먼저 JSON 백업을 권장합니다. 집·강의실에서 동시에 수정했다면 한쪽을 선택하면 다른 쪽 변경사항이 덮어써질 수 있습니다.';d.body.append(hint);
 const actions=document.createElement('div');actions.className='cloud-actions';
 const backup=document.createElement('button');backup.textContent='① 현재 PC JSON 백업';backup.onclick=()=>{download('ADsP_ATLAS_충돌전_백업.json',JSON.stringify({nodes,links,exportedAt:new Date().toISOString()},null,2),'application/json');toast('현재 PC 학습 내용을 백업했습니다.')};
 const take=document.createElement('button');take.textContent='② 클라우드 내용 불러오기';take.onclick=()=>{try{applyCloud(remoteDoc);cloudRevision=remoteRev;cloudReady=true;cloudConflictPending=false;closeModal();cloudState('클라우드 내용 적용','online')}catch(e){toast(e.message)}};
 const push=document.createElement('button');push.className='primary';push.textContent='③ 현재 PC 내용을 업로드';push.onclick=async()=>{if(!confirm('클라우드의 기존 내용을 이 PC 내용으로 교체하시겠습니까? 다른 기기의 미반영 수정 내용이 사라질 수 있습니다.'))return;cloudRevision=remoteRev;cloudReady=true;cloudConflictPending=false;closeModal();await cloudPush()};
 actions.append(backup,take,push);d.body.append(actions);d.actions.style.display='none';
}
function scheduleCloudSave(){
 clearTimeout(cloudTimer);
 if(!cloudConfig)return;
 if(!cloudClient||!cloudUser||!cloudReady){cloudState('이 PC에 저장 · 연결 대기','warning');return}
 cloudState('클라우드 저장 대기','busy');cloudTimer=setTimeout(()=>{cloudPush()},650);
}
async function cloudPush(){
 if(!cloudReady||!cloudClient||!cloudUser||cloudBusy||!cloudDirty)return;
 cloudBusy=true;const snap=currentSnapshot();const before=JSON.stringify(snap);const rev=cloudRevision;
 cloudState('클라우드 저장 중','busy');
 try{
  let data,error;
  if(rev===null){({data,error}=await cloudClient.from('atlas_documents').insert({user_id:cloudUser.id,payload:snap,revision:1}).select('revision').single());}
  else {({data,error}=await cloudClient.from('atlas_documents').update({payload:snap,revision:Number(rev)+1}).eq('user_id',cloudUser.id).eq('revision',rev).select('revision').maybeSingle());}
  if(error)throw error;
  if(!data){cloudReady=false;cloudState('다른 기기 변경 감지','warning');cloudBusy=false;await cloudPull(true);return}
  cloudRevision=data.revision;
  if(JSON.stringify(currentSnapshot())===before){markClean();cloudState('자동 동기화 완료','online')}
  else {cloudState('후속 변경 저장 중','busy');cloudBusy=false;scheduleCloudSave()}
 }catch(e){console.warn('Cloud save failed',e);cloudState('PC에 저장됨 · 동기화 실패','warning')}
 finally{cloudBusy=false}
}
async function cloudRefresh(){if(!cloudUser||!cloudReady||cloudBusy)return;if(cloudDirty){await cloudPush()}else if(el('modal').classList.contains('hidden')){await cloudPull(false)}}
function cloudRow(text,content){const d=document.createElement('div');d.className='cloud-field';const l=document.createElement('label');l.textContent=text;d.append(l,content);return d}
function cloudAction(text,fn,cls=''){const b=document.createElement('button');b.textContent=text;b.className=cls;b.onclick=fn;return b}
function openCloud(){
 if(cloudConflictPending){cloudPull(true);return}
 if(!cloudConfig||!validCloudConfig(cloudConfig)){
  const d=mountDialog('Supabase 연결 설정','처음 한 번만 프로젝트 URL과 공개 키를 설정하면 됩니다. 비밀 키(service_role)는 절대 입력하지 마세요.');
  const url=document.createElement('input');url.className='cloud-input';url.value=cloudConfig?.url||'';url.placeholder='https://xxxx.supabase.co';
  const key=document.createElement('input');key.className='cloud-input';key.value=cloudConfig?.key||'';key.placeholder='sb_publishable_... 또는 anon 공개 키';
  d.body.append(cloudRow('Project URL',url),cloudRow('Publishable key (공개 키)',key));
  const help=document.createElement('div');help.className='cloud-note';help.textContent='1. Supabase에서 무료 프로젝트 생성 → 2. 제공한 atlas_setup.sql 실행 → 3. 이 화면에 Project URL과 Publishable key 입력 → 4. 이메일 인증. GitHub Pages 배포 주소를 Authentication의 URL 설정에 등록하세요.';d.body.append(help);
  d.actions.append(cloudAction('닫기',closeModal),cloudAction('연결 저장',()=>{const cfg={url:url.value.trim().replace(/\/$/,''),key:key.value.trim()};if(!validCloudConfig(cfg)){toast('올바른 Supabase URL과 공개 키를 입력하세요.');return}if(cloudClient&&cloudUser){toast('다른 프로젝트로 바꾸려면 먼저 로그아웃하세요.');return}localStorage.setItem(CLOUD_CONFIG,JSON.stringify(cfg));closeModal();cloudClient=null;cloudInit()},'primary'));
  return;
 }
 const d=mountDialog('클라우드 동기화',cloudUser?'로그인 상태가 이 브라우저에 보존됩니다.':'처음에 이메일로 인증하면 이후 자동 로그인됩니다.');
 const status=document.createElement('div');status.className='cloud-note';status.textContent=cloudUser?`연결 계정: ${cloudUser.email||cloudUser.id}\n상태: ${el('cloudStatus').textContent}`:'이메일로 일회용 로그인 링크를 보냅니다. 링크를 이 브라우저에서 열어주세요.';status.style.whiteSpace='pre-line';d.body.append(status);
 if(!cloudUser){
  const email=document.createElement('input');email.className='cloud-input';email.type='email';email.autocomplete='email';email.placeholder='example@gmail.com';d.body.append(cloudRow('이메일 주소',email));
  const warn=document.createElement('div');warn.className='cloud-note';warn.textContent='반드시 GitHub Pages 같은 HTTPS 주소에서 사용하세요. Supabase Authentication → URL Configuration에 웹사이트 주소를 등록해야 인증 링크가 돌아옵니다.';d.body.append(warn);
  d.actions.append(cloudAction('설정 수정',()=>{localStorage.removeItem(CLOUD_CONFIG);cloudConfig=null;cloudClient=null;cloudReady=false;closeModal();openCloud()}),cloudAction('닫기',closeModal),cloudAction('인증 메일 보내기',async()=>{
    if(!email.validity.valid||!email.value.trim()){toast('이메일 주소를 확인하세요.');return}
    if(location.protocol!=='https:'&&location.hostname!=='localhost'){toast('GitHub Pages의 HTTPS 주소에서 로그인하세요.');return}
    try{if(!cloudClient){toast('연결 확인 후 다시 시도하세요.');return}const {error}=await cloudClient.auth.signInWithOtp({email:email.value.trim(),options:{emailRedirectTo:location.origin+location.pathname,shouldCreateUser:true}});if(error)throw error;toast('인증 이메일을 전송했습니다. 메일함을 확인하세요.');closeModal()}catch(e){toast('메일 전송 실패: '+e.message)}
  },'primary'));
 }else{
  const info=document.createElement('div');info.className='cloud-note';info.textContent='다른 PC에서도 같은 이메일로 로그인하면 학습 내용이 불러와집니다. 편집 중 두 기기에서 동시에 변경하지 않는 것을 권장합니다.';d.body.append(info);
  d.actions.append(cloudAction('닫기',closeModal),cloudAction('지금 동기화',async()=>{closeModal();if(!cloudReady)await cloudPull(true);else if(cloudDirty)await cloudPush();else await cloudPull(false);toast(el('cloudStatus').textContent)},'primary'),cloudAction('로그아웃',async()=>{
    if(cloudDirty&&!confirm('이 PC에 클라우드로 보내지 못한 변경사항이 있습니다. JSON 백업 후 로그아웃하세요. 계속할까요?'))return;
    const {error}=await cloudClient.auth.signOut();if(error){toast(error.message);return}closeModal();cloudUser=null;cloudReady=false;cloudRevision=null;nodes=structuredClone(defaultNodes);links=structuredClone(defaultLinks);focus=root;markClean();localStorage.removeItem(CLOUD_OWNER);persistLocal(false);renderMap();renderDetail();cloudState('이메일 인증 필요','warning');
  },'danger'));
 }
 const settings=document.createElement('div');settings.className='cloud-note';settings.style.marginTop='16px';settings.textContent='설정 변경 시 GitHub에 올리는 HTML에는 service_role 또는 secret 키를 절대로 넣지 마세요.';d.body.append(settings);
}

let toastTimer;function toast(msg){const t=el('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600)}
function init(){load();initMapCamera();if(!localStorage.getItem(CLOUD_OWNER)&&localStorage.getItem(CLOUD_DIRTY)!=='1'&&cloudLocalLooksEdited()){localStorage.setItem(CLOUD_DIRTY,'1')}cloudDirty=localStorage.getItem(CLOUD_DIRTY)==='1';el('cloudBtn').onclick=openCloud;el('homeBtn').onclick=expandAllMindmap;el('searchBtn').onclick=()=>openSearch();el('dataBtn').onclick=openData;el('topAddBtn').onclick=()=>openEditor('add');el('childAddBtn').onclick=()=>openEditor('add');el('mobilePanelBtn').onclick=()=>{panelOpen=!panelOpen;el('detail').classList.toggle('mobile-open',panelOpen)};el('modal').addEventListener('click',e=>{if(e.target===el('modal'))closeModal()});document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(!el('modal').classList.contains('hidden'))closeModal();else if(panelOpen){panelOpen=false;el('detail').classList.remove('mobile-open')}else if(byId(focus)?.parent)navigate(byId(focus).parent)}if(e.key==='/'&&!(e.target instanceof HTMLInputElement)&&!(e.target instanceof HTMLTextAreaElement)&&el('modal').classList.contains('hidden')){e.preventDefault();openSearch()}});let r;const observer=new ResizeObserver(()=>{clearTimeout(r);r=setTimeout(redraw,80)});observer.observe(el('mapArea'));renderMap();renderDetail();fitMapToContent();cloudInit();document.addEventListener('visibilitychange',()=>{if(!document.hidden)cloudRefresh()});window.addEventListener('online',()=>cloudRefresh());setInterval(()=>{if(!document.hidden)cloudRefresh()},30000)};init();
})();
