function go(id){
  document.querySelectorAll('.scr').forEach(s=>s.classList.remove('on'));
  document.getElementById('s-'+id).classList.add('on');
  const ids=['splash','login','lang','home','emergency','loading','hospitals','detail','alerted'];
  document.querySelectorAll('.nb').forEach((b,i)=>{b.classList.toggle('on',ids[i]===id)});
}
let voiceActive=false;
function toggleVoice(){
  voiceActive=!voiceActive;
  const btn=document.getElementById('voiceBtn');
  const st=document.getElementById('voiceStatus');
  const tb=document.getElementById('transcriptBox');
  if(voiceActive){
    btn.style.background='#991B1B';
    st.textContent='Listening... speak now';
    st.className='voice-status active';
    setTimeout(()=>{
      tb.style.display='block';
      st.textContent='Transcript received — tap emergency type';
      st.className='voice-status';
      voiceActive=false;
      btn.style.background='var(--red)';
    },2500);
  } else {
    btn.style.background='var(--red)';
    st.textContent='Tap microphone to speak';
    st.className='voice-status';
    tb.style.display='none';
  }
}
function selectET(el,type){
  document.querySelectorAll('.et-card').forEach(c=>{
    c.classList.remove('sel');
    c.style.borderColor='var(--border)';
  });
  el.classList.add('sel');
  el.style.borderColor='#DC2626';
}
function selectLang(lang){
  ['mr','hi','en','mix'].forEach(l=>{
    const el=document.getElementById('lc-'+l);
    if(el){
      el.classList.remove('sel');
      el.querySelector('.lc-check')?.remove();
    }
  });
  const sel=document.getElementById('lc-'+lang);
  if(sel){
    sel.classList.add('sel');
    const chk=document.createElement('div');
    chk.className='lc-check';
    chk.innerHTML='<svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l3 3 5-6" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    sel.appendChild(chk);
  }
}
function toggleScheme(id){
  const el=document.getElementById('sc-'+id);
  if(el) el.classList.toggle('sel');
}