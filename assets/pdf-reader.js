/* PDF-linked reader. A real PDF must be committed at assets/ADsP.pdf.
   pdf.js is loaded from a public CDN; no API keys or user data are sent. */
(()=>{
'use strict';
const PDF_URL='assets/ADsP.pdf';
const LIB='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs';
const WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
const $=id=>document.getElementById(id);
const detail=$('detail');
if(!detail)return;
detail.classList.add('pdf-reader');
const shell=document.createElement('div');shell.className='pdf-shell';
shell.innerHTML='<div class="pdf-toolbar"><strong id="pdfConcept">PDF 개념서</strong><button id="pdfPrev" title="이전 페이지">←</button><span id="pdfCount">—</span><button id="pdfNext" title="다음 페이지">→</button><button id="pdfSmaller" title="축소">−</button><button id="pdfLarger" title="확대">＋</button><button id="pdfEdit" title="선택한 개념 수정">수정</button><button id="pdfAdd" title="하위 개념 추가">추가</button><a id="pdfOpen" href="'+PDF_URL+'" target="_blank" rel="noopener">원본 PDF ↗</a></div><div class="pdf-status" id="pdfStatus" role="status">PDF 준비 중…</div><div class="pdf-pages" id="pdfPages"></div>';
detail.append(shell);
const pages=$('pdfPages'),status=$('pdfStatus'),count=$('pdfCount');
let pdf=null,pdfjs=null,scale=1,selected=1,token=0,concept='',cache=new Map(),loaded=false,conceptIndex=[];
const PDF_ALIASES={"데이터의 유형":"01-02","데이터 형태":"01-03","비즈니스 가치":"01-33","빅데이터 위기":"01-27","사생활 침해":"01-27","책임 원칙 훼손":"01-27","데이터 오용":"01-27","SECI 지식경영":"01-06","공통화 S":"01-06","표출화 E":"01-06","연결화 C":"01-06","내면화 I":"01-06","과제 발굴 방식":"02-03","업무 이해":"02-18","데이터 이해":"02-18","데이터 준비":"02-18","모델링":"02-18","평가":"02-18","전개":"02-18","과제 우선순위":"02-28","우선순위 3기준":"02-27","적용 범위 3기준":"02-27","준비도 6영역":"02-30","성숙도 4단계":"02-31","데이터 거버넌스":"02-35","3대 구성요소":"01-36","표준화·관리":"01-37","R·전처리":"03-01","기초통계":"03-18","표본·모집단":"03-19","확률·분포":"03-29","회귀·분산분석":"04-10","t통계량":"04-08","시계열분석":"04-24","분해시계열 4요인":"04-24","머신러닝":"05-02","분류분석":"05-03","앙상블":"05-20","딥러닝":"05-19","모델 평가":"06-01","정밀도·재현율":"06-03","회귀분석":"04-13","상관분석":"04-12","SVM":"05-11","KNN":"05-08","K-means":"05-27","군집분석":"05-23","의사결정나무":"05-12","지지도":"05-35","신뢰도":"05-36","향상도":"05-37","혼동행렬":"06-01","배깅":"05-20","부스팅":"05-20","스태킹":"05-20","DNN":"05-19","CNN":"05-19","RNN":"05-19","정확도·오분류율":"06-02","특이도":"06-05","분산분석 ANOVA":"04-10","이동평균":"04-26","정규분포":"03-37","이항분포":"03-34","연관분석":"05-34","DBSCAN":"05-29","계층적 군집":"05-26","혼합분포·EM":"05-30"};
function info(t){status.textContent=t}
function normalize(s){return String(s||'').toLowerCase().replace(/[\s\u00ad·•:()（）\-–—_]+/g,'')}
function variants(t){let a=[t];const stripped=t.replace(/^\d+과목\s*[·.]\s*/,'').replace(/^\d+[-.]\d+\s*/,'');if(stripped!==t)a.push(stripped);return a.filter(x=>normalize(x).length>=3)}
async function pageText(num){
 if(cache.has(num))return cache.get(num);
 const p=await pdf.getPage(num),c=await p.getTextContent(),items=c.items;
 let text='',starts=[];
 for(const item of items){starts.push(text.length);text+=normalize(item.str)}
 const v={page:p,items,text,starts};cache.set(num,v);return v
}
function matchingPosition(entry,needle){
 const idx=entry.text.indexOf(needle);
 if(idx<0)return null;
 let k=0;while(k+1<entry.starts.length&&entry.starts[k+1]<=idx)k++;
 const item=entry.items[k],height=entry.page.view[3];
 return Math.max(0,height-(item.transform?.[5]||height));
}
async function renderPage(num,mark){if(!pdf)return;num=Math.max(1,Math.min(pdf.numPages,num));selected=num;count.textContent=num+' / '+pdf.numPages;pages.replaceChildren();const current=++token;const {page,items}=await pageText(num);if(current!==token)return;
const baseWidth=page.view[2]-page.view[0];const fit=Math.max(.2,(pages.clientWidth-24)/baseWidth);const viewport=page.getViewport({scale:fit*scale});const wrapper=document.createElement('div');wrapper.className='pdf-page';const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);canvas.style.width=viewport.width+'px';canvas.style.height=viewport.height+'px';wrapper.append(canvas);pages.append(wrapper);
await page.render({canvasContext:ctx,viewport}).promise;if(current!==token)return;
if(mark){const y=Math.max(0,Math.min(viewport.height-5,mark.y*viewport.scale));const line=document.createElement('div');line.className='pdf-marker';line.style.top=y+'px';wrapper.append(line);pages.scrollTop=Math.max(0,y-70)}
else pages.scrollTop=0;
}
async function locate(title){
 if(!pdf)return;
 concept=title;$('pdfConcept').textContent=title;
 info('PDF에서 ‘'+title+'’의 실제 개념 제목을 확인하는 중…');
 const request=++token,terms=variants(title).map(normalize).filter(Boolean);
 const chapter=title.match(/^([123])과목/);
 if(chapter){
  const first={1:3,2:18,3:32}[Number(chapter[1])];
  info('‘'+title+'’ · '+first+'페이지 (과목 시작)');
  await renderPage(first);return;
 }
 if(title==='ADsP'){info('통합 개념서 · 표지');await renderPage(1);return;}
 const explicit=PDF_ALIASES[title];
 const mapped=conceptIndex.find(x=>x.code===explicit)||conceptIndex.find(x=>normalize(x.title)===normalize(title))||conceptIndex.find(x=>terms.some(t=>t.length>=3&&normalize(x.title).includes(t)));
 if(mapped){info('‘'+title+'’ → '+mapped.title+' · '+mapped.page+'페이지 (검증된 위치표)');await renderPage(mapped.page,{y:mapped.y});return;}
 let headingHit=null, fallback=null;
 for(let i=3;i<=pdf.numPages;i++){
  const entry=await pageText(i);
  if(request!==token)return;
  const {items,page}=entry;
  for(let k=0;k<items.length;k++){
   const str=String(items[k].str||'').trim();
   if(!/^\d{2}-\d{2}/.test(str))continue;
   const heading=normalize(items.slice(k,k+3).map(x=>x.str).join('')).split('핵심개념')[0].replace(/^\d{2}-\d{2}/,'');
   for(const term of terms){
    if(heading===term||heading.includes(term)||term.includes(heading)&&heading.length>3){
     const h=page.view[3],y=Math.max(0,h-(items[k].transform?.[5]||h));
     const score=heading===term?100:80-Math.abs(heading.length-term.length);
     if(!headingHit||score>headingHit.score)headingHit={page:i,y,score};
    }
   }
  }
  if(!fallback&&terms.length){
   for(const term of terms){const y=matchingPosition(entry,term);if(y!==null){fallback={page:i,y};break;}}
  }
  if(headingHit?.score===100)break;
 }
 if(request!==token)return;
 const found=headingHit||fallback;
 if(found){
  info('‘'+title+'’ · '+found.page+'페이지 ('+(headingHit?'개념 제목 일치':'본문 검색 결과, 위치 확인 권장')+')');
  await renderPage(found.page,found);
 }else{
  info('‘'+title+'’에 해당하는 PDF 위치를 확인하지 못했습니다. 수동으로 이동하세요.');
  await renderPage(selected);
 }
}
async function boot(){try{const idxResponse=await fetch('assets/pdf-index.json');if(idxResponse.ok){const data=await idxResponse.json();if(data.pdf==='ADsP.pdf'&&data.concepts?.length===241)conceptIndex=data.concepts;}const mod=await import(LIB);pdfjs=mod;pdfjs.GlobalWorkerOptions.workerSrc=WORKER;pdf=await pdfjs.getDocument(PDF_URL).promise;loaded=true;info('PDF '+pdf.numPages+'페이지를 불러왔습니다. 왼쪽 카드를 선택하세요.');await renderPage(1);if(concept)await locate(concept)}
catch(e){info('PDF를 열 수 없습니다.');pages.replaceChildren();const warning=document.createElement('div');warning.className='pdf-empty';warning.textContent='자동 위치 이동을 불러오지 못했습니다: '+String(e.message||e);pages.append(warning);const fallback=document.createElement('iframe');fallback.className='pdf-native-fallback';fallback.title='PDF 기본 뷰어';fallback.src=PDF_URL+'#page=1';pages.append(fallback);}}
$('pdfEdit').onclick=()=>document.querySelector('#detailHeader .panel-buttons .icon-btn')?.click();
$('pdfAdd').onclick=()=>$('childAddBtn')?.click();
$('pdfPrev').onclick=()=>renderPage(selected-1);
$('pdfNext').onclick=()=>renderPage(selected+1);
$('pdfSmaller').onclick=()=>{scale=Math.max(.55,scale-.15);renderPage(selected)};
$('pdfLarger').onclick=()=>{scale=Math.min(2.5,scale+.15);renderPage(selected)};
concept=document.querySelector('#detailHeader .detail-title')?.textContent?.trim()||'ADsP';
window.addEventListener('atlas:concept',e=>{concept=e.detail?.title||'';$('pdfConcept').textContent=concept||'PDF 개념서';if(loaded)locate(concept)});
boot();
})();
