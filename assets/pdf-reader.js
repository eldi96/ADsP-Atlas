/* PDF-linked reader. A real PDF must be committed at assets/adsp-guide.pdf.
   pdf.js is loaded from a public CDN; no API keys or user data are sent. */
(()=>{
'use strict';
const PDF_URL='assets/adsp-guide.pdf';
const LIB='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.min.mjs';
const WORKER='https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.10.38/pdf.worker.min.mjs';
const $=id=>document.getElementById(id);
const detail=$('detail');
if(!detail)return;
detail.classList.add('pdf-reader');
const shell=document.createElement('div');shell.className='pdf-shell';
shell.innerHTML='<div class="pdf-toolbar"><strong id="pdfConcept">PDF 개념서</strong><button id="pdfPrev" title="이전 페이지">←</button><span id="pdfCount">—</span><button id="pdfNext" title="다음 페이지">→</button><button id="pdfSmaller" title="축소">−</button><button id="pdfLarger" title="확대">＋</button><a id="pdfOpen" href="'+PDF_URL+'" target="_blank" rel="noopener">원본 PDF ↗</a></div><div class="pdf-status" id="pdfStatus" role="status">PDF 준비 중…</div><div class="pdf-pages" id="pdfPages"></div>';
detail.append(shell);
const pages=$('pdfPages'),status=$('pdfStatus'),count=$('pdfCount');
let pdf=null,pdfjs=null,scale=1,selected=1,token=0,concept='',cache=new Map(),loaded=false;
function info(t){status.textContent=t}
function normalize(s){return String(s||'').toLowerCase().replace(/[\s\u00ad·•:()（）\-–—_]+/g,'')}
function variants(t){let a=[t];const stripped=t.replace(/^\d+과목\s*[·.]\s*/,'').replace(/^\d+[-.]\d+\s*/,'');if(stripped!==t)a.push(stripped);return a.filter(x=>normalize(x).length>=3)}
async function pageText(num){if(cache.has(num))return cache.get(num);const p=await pdf.getPage(num);const c=await p.getTextContent();const v={page:p,items:c.items,text:normalize(c.items.map(x=>x.str).join(' '))};cache.set(num,v);return v}
async function renderPage(num,mark){if(!pdf)return;num=Math.max(1,Math.min(pdf.numPages,num));selected=num;count.textContent=num+' / '+pdf.numPages;pages.replaceChildren();const current=++token;const {page,items}=await pageText(num);if(current!==token)return;
const viewport=page.getViewport({scale:scale*1.35});const wrapper=document.createElement('div');wrapper.className='pdf-page';const canvas=document.createElement('canvas');const ctx=canvas.getContext('2d');canvas.width=Math.ceil(viewport.width);canvas.height=Math.ceil(viewport.height);wrapper.append(canvas);pages.append(wrapper);
await page.render({canvasContext:ctx,viewport}).promise;if(current!==token)return;
if(mark){const y=Math.max(0,Math.min(viewport.height-5,mark.y*scale*1.35));const line=document.createElement('div');line.className='pdf-marker';line.style.top=y+'px';wrapper.append(line);pages.scrollTop=Math.max(0,y-70)}
else pages.scrollTop=0;
}
async function locate(title){if(!pdf)return;concept=title;$('pdfConcept').textContent=title;info('PDF에서 ‘'+title+'’ 위치를 찾는 중…');const seq=++token;const terms=variants(title).map(normalize);
let found=null;
for(let i=1;i<=pdf.numPages;i++){const entry=await pageText(i);if(seq!==token)return;const match=terms.find(x=>entry.text.includes(x));if(match){let y=0;for(let k=0;k<entry.items.length;k++){const item=entry.items[k];if(terms.some(x=>normalize(item.str).includes(x))){const h=entry.page.view[3];y=Math.max(0,h-(item.transform?.[5]||h));break}}found={page:i,y};break}}
if(seq!==token)return;
if(found){info('‘'+title+'’ · '+found.page+'페이지에서 발견 (파란 선은 추정 위치)');await renderPage(found.page,found)}
else{info('‘'+title+'’의 정확한 제목을 PDF에서 찾지 못했습니다. 수동으로 페이지를 이동할 수 있습니다.');await renderPage(selected)}
}
async function boot(){try{const mod=await import(LIB);pdfjs=mod;pdfjs.GlobalWorkerOptions.workerSrc=WORKER;const response=await fetch(PDF_URL,{method:'HEAD'});if(!response.ok)throw new Error('PDF 파일이 저장소에 없습니다 (HTTP '+response.status+')');pdf=await pdfjs.getDocument(PDF_URL).promise;loaded=true;info('PDF '+pdf.numPages+'페이지를 불러왔습니다. 왼쪽 카드를 선택하세요.');await renderPage(1);if(concept)await locate(concept)}
catch(e){info('PDF를 열 수 없습니다.');pages.innerHTML='<div class="pdf-empty">PDF 파일을 GitHub 저장소의 <code>assets/adsp-guide.pdf</code> 경로에 추가해야 합니다.<br>원인: '+String(e.message||e).replace(/[<>]/g,'')+'</div>';}}
$('pdfPrev').onclick=()=>renderPage(selected-1);
$('pdfNext').onclick=()=>renderPage(selected+1);
$('pdfSmaller').onclick=()=>{scale=Math.max(.55,scale-.15);renderPage(selected)};
$('pdfLarger').onclick=()=>{scale=Math.min(2.5,scale+.15);renderPage(selected)};
window.addEventListener('atlas:concept',e=>{concept=e.detail?.title||'';$('pdfConcept').textContent=concept||'PDF 개념서';if(loaded)locate(concept)});
boot();
})();
