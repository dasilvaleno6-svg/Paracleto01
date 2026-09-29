
/* ============================================================
    DADOS (protótipo em memória)
    ============================================================ */
    const SCHOOL = {
        name: "Escola Portuguesa D. Dinis",
    place: "Luanda, Angola",
    founded: 1986,
    telefone: "+244 222 700 000",
    email: "secretaria@epdd.ao",
    morada: "Rua da Cooperação, 287",
    anosHistoria: "39",
    ciclos: "4",
    alunosMatriculados: "1.240+",
    corpoDocente: "96",
    anosEscolaridade: "1º – 12º",
    descricaoSobre: "Seguimos os programas e o calendário escolar em vigor em Portugal, com professores certificados pelo Ministério da Educação português, acolhendo alunos portugueses, angolanos e de outras nacionalidades.",
};

    let seq = 100;

    const state = {
        authed: false,
    tab: "painel",
    alunoFiltro: "",
    professorFiltro: "",
};

    const students = [
    {id:1, nome:"Beatriz Fernandes Costa", turma:"9ºA", ano:"9º ano", encarregado:"Manuel Costa", contacto:"+244 923 000 111", email:"beatriz.costa@aluno.epdd.ao"},
    {id:2, nome:"Tiago Nunes Almeida", turma:"11ºB", ano:"11º ano", encarregado:"Sofia Almeida", contacto:"+244 923 000 222", email:"tiago.almeida@aluno.epdd.ao"},
    {id:3, nome:"Inês Rodrigues Pinto", turma:"6ºC", ano:"6º ano", encarregado:"João Pinto", contacto:"+244 923 000 333", email:"ines.pinto@aluno.epdd.ao"},
    ];

    const teachers = [
    {id:1, nome:"Prof. Carlos Mendes", disciplina:"Matemática", turmas:"9ºA, 9ºB, 11ºB", contacto:"+244 924 111 222", email:"carlos.mendes@epdd.ao"},
    {id:2, nome:"Profª. Ana Sousa", disciplina:"Português", turmas:"6ºC, 9ºA", contacto:"+244 924 222 333", email:"ana.sousa@epdd.ao"},
    {id:3, nome:"Prof. Ricardo Lopes", disciplina:"Física e Química", turmas:"11ºB, 12ºA", contacto:"+244 924 333 444", email:"ricardo.lopes@epdd.ao"},
    ];

    const payments = [
    {aluno:"Beatriz Fernandes Costa", ref:"Setembro 2026", valor:"185.000 Kz", estado:"Pago", data:"05/09/2026"},
    {aluno:"Beatriz Fernandes Costa", ref:"Outubro 2026", valor:"185.000 Kz", estado:"Pago", data:"04/10/2026"},
    {aluno:"Beatriz Fernandes Costa", ref:"Novembro 2026", valor:"185.000 Kz", estado:"Pendente", data:"—"},
    {aluno:"Tiago Nunes Almeida", ref:"Novembro 2026", valor:"195.000 Kz", estado:"Pendente", data:"—"},
    {aluno:"Inês Rodrigues Pinto", ref:"Outubro 2026", valor:"170.000 Kz", estado:"Atrasado", data:"—"},
    ];

    const emolumentosCatalogo = [
    {id:1, nome:"Matrícula", valor:"45.000 Kz"},
    {id:2, nome:"Seguro escolar", valor:"12.000 Kz"},
    {id:3, nome:"Cartão de aluno", valor:"5.000 Kz"},
    {id:4, nome:"Certificado / Diploma", valor:"8.000 Kz"},
    {id:5, nome:"Exame de equivalência", valor:"20.000 Kz"},
    ];

    const emolumentoPagamentos = [
    {aluno:"Beatriz Fernandes Costa", tipo:"Matrícula", valor:"45.000 Kz", estado:"Pago", data:"01/09/2026"},
    {aluno:"Tiago Nunes Almeida", tipo:"Seguro escolar", valor:"12.000 Kz", estado:"Pendente", data:"—"},
    {aluno:"Inês Rodrigues Pinto", tipo:"Cartão de aluno", valor:"5.000 Kz", estado:"Pendente", data:"—"},
    ];

    const exams = [
    {disciplina:"Matemática", turma:"9ºA", tipo:"Teste", periodo:"1º Período", data:"2026-10-14", obs:"Capítulos 1 a 3"},
    {disciplina:"Física e Química", turma:"11ºB", tipo:"Teste", periodo:"1º Período", data:"2026-10-20", obs:""},
    {disciplina:"Português", turma:"6ºC", tipo:"Trabalho", periodo:"1º Período", data:"2026-10-27", obs:"Entrega de ensaio"},
    ];

    const events = [
    {dia:"15", mes:"Set", titulo:"Reunião Geral de Pais e Encarregados de Educação", hora:"17h30 · Auditório principal", desc:"Apresentação do plano anual e eleição dos representantes de turma."},
    {dia:"22", mes:"Set", titulo:"Visita de Estudo — Museu Nacional de Antropologia", hora:"08h00 · Turmas do 3º Ciclo", desc:"Saída pedagógica no âmbito da disciplina de História."},
    {dia:"10", mes:"Out", titulo:"Saída Pedagógica — Ilha do Mussulo", hora:"08h00 · 9º e 10º anos", desc:"Atividade de ciências naturais e educação ambiental."},
    ];

    const announcements = [
    {titulo:"Início do Ano Letivo 2026/2027", destino:"Todos", data:"28/08/2026", msg:"As aulas iniciam no dia 1 de setembro. Pedimos pontualidade na entrega dos materiais escolares."},
    {titulo:"Calendário de Avaliações — 1º Período", destino:"Encarregados de Educação", data:"20/08/2026", msg:"O calendário de testes do 1º período já está disponível na secretaria."},
    {titulo:"Reunião Geral de Encarregados de Educação", destino:"Todas as turmas", data:"15/08/2026", msg:"Reunião marcada para 15 de setembro, às 17h30, no auditório principal."},
    ];

    /* ============================================================
       HELPERS
       ============================================================ */
    function crestSVG(color){
  return `<svg class="crest" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 2 L36 8 V19 C36 29 29.5 35.5 20 38 C10.5 35.5 4 29 4 19 V8 Z" fill="${color}" />
        <path d="M20 2 L36 8 V19 C36 29 29.5 35.5 20 38 C10.5 35.5 4 29 4 19 V8 Z" stroke="rgba(255,255,255,.35)" stroke-width="1" />
        <rect x="13" y="14" width="14" height="11" rx="1" fill="none" stroke="white" stroke-width="1.6" />
        <line x1="20" y1="14" x2="20" y2="25" stroke="white" stroke-width="1.6" />
        <path d="M13 14 C13 12.5 14.3 12 15.6 12.6" stroke="white" stroke-width="1.4" fill="none" />
        <path d="M27 14 C27 12.5 25.7 12 24.4 12.6" stroke="white" stroke-width="1.4" fill="none" />
        <circle cx="20" cy="9.2" r="1.4" fill="#C8102E" />
    </svg>`;
}
    function fmtInitials(name){ return name.split(" ").filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase(); }
    function fmtDatePT(iso){ if(!iso) return "—"; const [y,m,d]=iso.split("-"); return `${d}/${m}/${y}`; }
    function esc(str){ return String(str==null?"":str).replace(/"/g,"&quot;"); }
    function badgeClass(estado){ return estado==="Pago" ? "badge-paid" : estado==="Atrasado" ? "badge-late" : "badge-pending"; }

    /* ============================================================
       MODAL SYSTEM (janelas interativas separadas)
       ============================================================ */
    function openModal(title, sub, bodyHtml, size){
        window.__pendingConfirm = null;
    document.getElementById("modal-root").innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
        <div class="modal ${size==='lg'?'modal-lg':size==='sm'?'modal-sm':''}">
            <div class="modal-head">
                <div><h3>${title}</h3></div>
                <button class="modal-close" onclick="closeModal()">✕</button>
            </div>
            ${sub ? `<div class="modal-sub">${sub}</div>` : ""}
            ${bodyHtml}
        </div>
    </div>`;
    document.addEventListener("keydown", escCloseOnce);
}
    function escCloseOnce(e){ if(e.key === "Escape"){closeModal(); } }
    function closeModal(){
        document.getElementById("modal-root").innerHTML = "";
    document.removeEventListener("keydown", escCloseOnce);
}
    function openConfirm(title, msg, onConfirm){
        window.__pendingConfirm = onConfirm;
    openModal(title, "", `
    <p style="color:var(--ink-700);font-size:14px;line-height:1.6;">${msg}</p>
    <div class="modal-actions">
        <button class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button class="btn btn-danger" onclick="__pendingConfirm && __pendingConfirm()">Eliminar</button>
    </div>`, "sm");
}

    /* ============================================================
       LOGIN
       ============================================================ */
    function renderLogin(){
  return `
    <div class="login-wrap">
        <div class="login-box">
            <div class="login-brand">
                ${crestSVG("#0B2545")}
                <div class="name">${SCHOOL.name}</div>
                <div class="sub">Painel administrativo</div>
            </div>
            <form onsubmit="doLogin(event)" style="margin-top:22px;">
                <div class="field"><label>Utilizador</label><input name="user" value="admin.epdd" required></div>
                <div class="field"><label>Palavra-passe</label><input name="pass" type="password" value="••••••••" required></div>
                <button class="btn btn-primary btn-block" type="submit">Entrar no painel</button>
            </form>
            <div class="demo-note">Protótipo — não é necessária uma palavra-passe real. Clique em "Entrar no painel" para aceder à demonstração.</div>
        </div>
    </div>`;
}
    function doLogin(e){e.preventDefault(); state.authed = true; state.tab = "painel"; render(); }
    function logout(){state.authed = false; render(); }
    function setTab(t){state.tab = t; render(); }

    /* ============================================================
       SHELL
       ============================================================ */
    function sidebarLink(id, icon, label){
  return `<a class="sb-link ${state.tab===id?'active':''}" href="javascript:void(0)" onclick="setTab('${id}')"><span class="ic">${icon}</span>${label}</a>`;
}
    function renderShell(inner){
  return `
    <div class="app-shell">
        <aside class="sidebar">
            <div class="sb-brand">${crestSVG("#ffffff")}<div><div class="name">${SCHOOL.name}</div><div class="role">Painel administrativo</div></div></div>
            ${sidebarLink('painel', '🗂️', 'Painel geral')}
            <div class="sb-section">Pessoas</div>
            ${sidebarLink('alunos', '🎓', 'Alunos')}
            ${sidebarLink('professores', '📘', 'Professores')}
            <div class="sb-section">Financeiro</div>
            ${sidebarLink('propinas', '💳', 'Propinas')}
            ${sidebarLink('emolumentos', '🧾', 'Emolumentos')}
            <div class="sb-section">Vida escolar</div>
            ${sidebarLink('provas', '📝', 'Calendário de provas')}
            ${sidebarLink('reunioes', '📅', 'Reuniões e eventos')}
            ${sidebarLink('comunicados', '📣', 'Comunicados')}
            <div class="sb-section">Escola</div>
            ${sidebarLink('instituicao', '🏫', 'Instituição')}
            <div class="sb-logout"><a class="sb-link" href="javascript:void(0)" onclick="logout()"><span class="ic">↩︎</span>Sair</a></div>
        </aside>
        <main class="app-main">${inner}</main>
    </div>`;
}
    function renderAdmin(){
        let inner = "";
    if(state.tab === "painel") inner = pagePainel();
    else if(state.tab === "alunos") inner = pageAlunos();
    else if(state.tab === "professores") inner = pageProfessores();
    else if(state.tab === "propinas") inner = pagePropinas();
    else if(state.tab === "emolumentos") inner = pageEmolumentos();
    else if(state.tab === "provas") inner = pageProvas();
    else if(state.tab === "reunioes") inner = pageReunioes();
    else if(state.tab === "comunicados") inner = pageComunicados();
    else if(state.tab === "instituicao") inner = pageInstituicao();
    return renderShell(inner);
}

    /* ============================================================
       PAINEL GERAL
       ============================================================ */
    function pagePainel(){
  const pendentesPropinas = payments.filter(p=>p.estado!=="Pago").length;
  const pendentesEmolumentos = emolumentoPagamentos.filter(p=>p.estado!=="Pago").length;
  const turmasAtivas = new Set(students.map(s=>s.turma)).size;
  const proximaProva = exams.slice().sort((a,b)=>a.data.localeCompare(b.data))[0];
    const proximoEvento = events[0];
    return `
    <div class="app-topbar"><h2>Painel geral</h2><div class="who">Bem-vindo(a), Administração escolar</div></div>
    <div class="quick-actions">
        <button class="btn btn-accent btn-sm" onclick="openNewStudentModal()">+ Novo aluno</button>
        <button class="btn btn-accent btn-sm" onclick="openNewTeacherModal()">+ Novo professor</button>
        <button class="btn btn-outline btn-sm" onclick="openNewPaymentModal()">+ Lançar propina</button>
        <button class="btn btn-outline btn-sm" onclick="openNewAnnouncementModal()">+ Novo comunicado</button>
    </div>
    <div class="metric-grid">
        <div class="metric"><div class="lbl">Total de alunos</div><div class="val">${students.length}</div><div class="sub">${turmasAtivas} turma${turmasAtivas === 1 ? "" : "s"} ativa${turmasAtivas === 1 ? "" : "s"}</div></div>
        <div class="metric"><div class="lbl">Total de professores</div><div class="val">${teachers.length}</div><div class="sub">Todas as disciplinas cobertas</div></div>
        <div class="metric"><div class="lbl">Propinas pendentes</div><div class="val">${pendentesPropinas}</div><div class="sub">Ação necessária</div></div>
        <div class="metric"><div class="lbl">Emolumentos pendentes</div><div class="val">${pendentesEmolumentos}</div><div class="sub">${emolumentoPagamentos.length} registo${emolumentoPagamentos.length === 1 ? "" : "s"}</div></div>
        <div class="metric"><div class="lbl">Próxima prova</div><div class="val" style="font-size:17px;">${proximaProva ? fmtDatePT(proximaProva.data) : "—"}</div><div class="sub">${proximaProva ? `${proximaProva.disciplina} · ${proximaProva.turma}` : "Sem provas"}</div></div>
        <div class="metric"><div class="lbl">Próximo evento</div><div class="val" style="font-size:17px;">${proximoEvento ? `${proximoEvento.dia} ${proximoEvento.mes}` : "—"}</div><div class="sub">${proximoEvento ? proximoEvento.titulo : "Sem eventos"}</div></div>
        <div class="metric"><div class="lbl">Comunicados</div><div class="val">${announcements.length}</div><div class="sub">Último: ${announcements[0].data}</div></div>
    </div>
    <div class="panel">
        <div class="panel-head"><h3>Atividade recente</h3></div>
        <table>
            <tr><th>Data</th><th>Evento</th><th>Detalhe</th></tr>
            <tr><td>${announcements[0].data}</td><td>Comunicado publicado</td><td>${announcements[0].titulo}</td></tr>
            <tr><td>04/10/2026</td><td>Pagamento registado</td><td>Beatriz Fernandes Costa — Outubro 2026</td></tr>
            <tr><td>28/08/2026</td><td>Novo aluno matriculado</td><td>Inês Rodrigues Pinto — 6ºC</td></tr>
        </table>
    </div>`;
}

    /* ============================================================
       ALUNOS — lista + janelas modais (novo / editar / ver / eliminar)
       ============================================================ */
    function pageAlunos(){
  const f = state.alunoFiltro.trim().toLowerCase();
  const list = students.filter(s => !f || s.nome.toLowerCase().includes(f) || s.turma.toLowerCase().includes(f));
  const rows = list.map(s=>`
    <tr>
        <td><b style="color:var(--ink-900)">${s.nome}</b></td>
        <td>${s.turma}</td>
        <td>${s.encarregado}</td>
        <td>${s.contacto}</td>
        <td>
            <div class="actions-cell">
                <a class="link-blue" onclick="openViewStudentModal(${s.id})">Ver ficha</a>
                <a class="link-accent" onclick="openEditStudentModal(${s.id})">Editar</a>
                <a class="link-red" onclick="confirmDeleteStudent(${s.id})">Eliminar</a>
            </div>
        </td>
    </tr>`).join("");
    return `
    <div class="app-topbar">
        <div><h2>Alunos</h2><div class="who">${students.length} alunos matriculados</div></div>
        <button class="btn btn-accent" onclick="openNewStudentModal()">+ Novo aluno</button>
    </div>
    <div class="panel">
        <div class="panel-head">
            <h3>Lista de alunos</h3>
            <div class="panel-toolbar"><input type="text" placeholder="Pesquisar por nome ou turma…" value="${esc(state.alunoFiltro)}" oninput="state.alunoFiltro=this.value; renderListOnly('alunos')"></div>
        </div>
        <table><tr><th>Nome</th><th>Turma</th><th>Encarregado</th><th>Contacto</th><th>Ações</th></tr>
            ${rows || '<tr class="empty-row"><td colspan="5">Nenhum aluno encontrado.</td></tr>'}</table>
    </div>`;
}

    function studentFormBody(existing){
  const id = existing ? existing.id : "";
    return `
    <form onsubmit="handleSaveStudent(event, ${existing ? existing.id : " null"})">
    <div class="grid-2">
        <div class="field"><label>Nome completo</label><input name="nome" required value="${esc(existing?.nome)}" placeholder="Nome do aluno"></div>
        <div class="field"><label>Turma</label><input name="turma" required value="${esc(existing?.turma)}" placeholder="Ex: 7ºB"></div>
    </div>
    <div class="grid-2">
        <div class="field"><label>Ano de escolaridade</label><input name="ano" required value="${esc(existing?.ano)}" placeholder="Ex: 7º ano"></div>
        <div class="field"><label>Encarregado de educação</label><input name="encarregado" required value="${esc(existing?.encarregado)}"></div>
    </div>
    <div class="grid-2">
        <div class="field"><label>Contacto</label><input name="contacto" required value="${esc(existing?.contacto)}" placeholder="+244 9XX XXX XXX"></div>
        <div class="field"><label>Email</label><input name="email" type="email" required value="${esc(existing?.email)}"></div>
    </div>
    <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">${existing ? "Guardar alterações" : "Registar aluno"}</button>
    </div>
</form>`;
}
function openNewStudentModal(){ openModal("Novo aluno", "Preencha os dados para matricular um novo aluno.", studentFormBody(null)); }
function openEditStudentModal(id){ const s = students.find(x=>x.id===id); openModal("Editar aluno", s.nome, studentFormBody(s)); }
function openViewStudentModal(id){
  const s = students.find(x=>x.id===id);
  openModal("Ficha do aluno", "", `
    < div class="view-row" ><span class="k">Nome</span><span class="v">${s.nome}</span></div >
    <div class="view-row"><span class="k">Turma</span><span class="v">${s.turma}</span></div>
    <div class="view-row"><span class="k">Ano de escolaridade</span><span class="v">${s.ano}</span></div>
    <div class="view-row"><span class="k">Encarregado de educação</span><span class="v">${s.encarregado}</span></div>
    <div class="view-row"><span class="k">Contacto</span><span class="v">${s.contacto}</span></div>
    <div class="view-row"><span class="k">Email</span><span class="v">${s.email}</span></div>
    <div class="modal-actions">
      <button type="button" class="btn btn-ghost" onclick="closeModal()">Fechar</button>
      <button type="button" class="btn btn-accent" onclick="closeModal(); openEditStudentModal(${s.id})">Editar</button>
    </div>`);
}
function handleSaveStudent(e, id){
  e.preventDefault();
  const f = new FormData(e.target);
  const data = {nome:f.get("nome"), turma:f.get("turma"), ano:f.get("ano"), encarregado:f.get("encarregado"), contacto:f.get("contacto"), email:f.get("email")};
  if(id){ const s = students.find(x=>x.id===id); Object.assign(s, data); }
  else { students.push({id:++seq, ...data}); }
  closeModal(); render();
}
function confirmDeleteStudent(id){
  const s = students.find(x=>x.id===id);
  openConfirm("Eliminar aluno", `Tem a certeza que deseja eliminar < b > ${ s.nome }</b >? Esta ação não pode ser desfeita.`, ()=>{
    const idx = students.findIndex(x=>x.id===id);
    if(idx>-1) students.splice(idx,1);
    closeModal(); render();
  });
}

/* ============================================================
   PROFESSORES — mesmo padrão de janelas modais
   ============================================================ */
function pageProfessores(){
  const f = state.professorFiltro.trim().toLowerCase();
  const list = teachers.filter(t => !f || t.nome.toLowerCase().includes(f) || t.disciplina.toLowerCase().includes(f));
  const rows = list.map(t=>`
    < tr >
      <td><b style="color:var(--ink-900)">${t.nome}</b></td>
      <td>${t.disciplina}</td>
      <td>${t.turmas}</td>
      <td>${t.contacto}</td>
      <td>
        <div class="actions-cell">
          <a class="link-blue" onclick="openViewTeacherModal(${t.id})">Ver ficha</a>
          <a class="link-accent" onclick="openEditTeacherModal(${t.id})">Editar</a>
          <a class="link-red" onclick="confirmDeleteTeacher(${t.id})">Eliminar</a>
        </div>
      </td>
    </tr >`).join("");
  return `
    < div class="app-topbar" >
    <div><h2>Professores</h2><div class="who">${teachers.length} professores no corpo docente</div></div>
    <button class="btn btn-accent" onclick="openNewTeacherModal()">+ Novo professor</button>
  </div >
    <div class="panel">
        <div class="panel-head">
            <h3>Lista de professores</h3>
            <div class="panel-toolbar"><input type="text" placeholder="Pesquisar por nome ou disciplina…" value="${esc(state.professorFiltro)}" oninput="state.professorFiltro=this.value; renderListOnly('professores')"></div>
        </div>
        <table><tr><th>Nome</th><th>Disciplina</th><th>Turmas</th><th>Contacto</th><th>Ações</th></tr>
            ${rows || '<tr class="empty-row"><td colspan="5">Nenhum professor encontrado.</td></tr>'}</table>
    </div>`;
}
function teacherFormBody(existing){
  return `
        < form onsubmit = "handleSaveTeacher(event, ${existing ? existing.id : "null"})" >
    <div class="grid-2">
      <div class="field"><label>Nome completo</label><input name="nome" required value="${esc(existing?.nome)}"></div>
      <div class="field"><label>Disciplina</label><input name="disciplina" required value="${esc(existing?.disciplina)}"></div>
    </div>
    <div class="field"><label>Turmas atribuídas</label><input name="turmas" required value="${esc(existing?.turmas)}" placeholder="Ex: 9ºA, 10ºB"></div>
    <div class="grid-2">
      <div class="field"><label>Contacto</label><input name="contacto" required value="${esc(existing?.contacto)}"></div>
      <div class="field"><label>Email</label><input name="email" type="email" required value="${esc(existing?.email)}"></div>
    </div>
    <div class="modal-actions">
      <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
      <button type="submit" class="btn btn-accent">${existing ? "Guardar alterações" : "Registar professor"}</button>
    </div>
  </form >`;
}
function openNewTeacherModal(){ openModal("Novo professor", "Preencha os dados para registar um novo docente.", teacherFormBody(null)); }
function openEditTeacherModal(id){ const t = teachers.find(x=>x.id===id); openModal("Editar professor", t.nome, teacherFormBody(t)); }
function openViewTeacherModal(id){
  const t = teachers.find(x=>x.id===id);
  openModal("Ficha do professor", "", `
    < div class="view-row" ><span class="k">Nome</span><span class="v">${t.nome}</span></div >
    <div class="view-row"><span class="k">Disciplina</span><span class="v">${t.disciplina}</span></div>
    <div class="view-row"><span class="k">Turmas</span><span class="v">${t.turmas}</span></div>
    <div class="view-row"><span class="k">Contacto</span><span class="v">${t.contacto}</span></div>
    <div class="view-row"><span class="k">Email</span><span class="v">${t.email}</span></div>
    <div class="modal-actions">
      <button type="button" class="btn btn-ghost" onclick="closeModal()">Fechar</button>
      <button type="button" class="btn btn-accent" onclick="closeModal(); openEditTeacherModal(${t.id})">Editar</button>
    </div>`);
}
function handleSaveTeacher(e, id){
  e.preventDefault();
  const f = new FormData(e.target);
  const data = {nome:f.get("nome"), disciplina:f.get("disciplina"), turmas:f.get("turmas"), contacto:f.get("contacto"), email:f.get("email")};
  if(id){ const t = teachers.find(x=>x.id===id); Object.assign(t, data); }
  else { teachers.push({id:++seq, ...data}); }
  closeModal(); render();
}
function confirmDeleteTeacher(id){
  const t = teachers.find(x=>x.id===id);
  openConfirm("Eliminar professor", `Tem a certeza que deseja eliminar < b > ${ t.nome }</b >? Esta ação não pode ser desfeita.`, ()=>{
    const idx = teachers.findIndex(x=>x.id===id);
    if(idx>-1) teachers.splice(idx,1);
    closeModal(); render();
  });
}

/* ============================================================
   PROPINAS
   ============================================================ */
function pagePropinas(){
  const pendentes = payments.filter(p=>p.estado!=="Pago").length;
  const rows = payments.map((p,i)=>`
    < tr >
      <td>${p.aluno}</td><td>${p.ref}</td><td>${p.valor}</td>
      <td><span class="badge ${badgeClass(p.estado)}">${p.estado}</span></td>
      <td>${p.data}</td>
      <td>
        <div class="actions-cell">
          <a class="link-blue" onclick="openReceiptModal(${i})">Ver recibo</a>
          ${p.estado!=="Pago" ? `<a class="link-accent" onclick="markPaid(${i})">Marcar como pago</a>` : ""}
        </div>
      </td>
    </tr >`).join("");
  return `
    < div class="app-topbar" >
    <div><h2>Propinas</h2><div class="who">Gestão de pagamentos e mensalidades</div></div>
    <button class="btn btn-accent" onclick="openNewPaymentModal()">+ Lançar propina</button>
  </div >
  <div class="metric-grid" style="grid-template-columns:repeat(3,1fr);">
    <div class="metric"><div class="lbl">Registos totais</div><div class="val">${payments.length}</div></div>
    <div class="metric"><div class="lbl">Pagamentos pendentes</div><div class="val" style="color:var(--acc-900)">${pendentes}</div></div>
    <div class="metric"><div class="lbl">Referência mais recente</div><div class="val" style="font-size:16px;">Novembro 2026</div></div>
  </div>
  <div class="panel">
    <div class="panel-head"><h3>Registo de propinas</h3></div>
    <table><tr><th>Aluno</th><th>Referência</th><th>Valor</th><th>Estado</th><th>Data pagamento</th><th>Ações</th></tr>
    ${rows || '<tr class="empty-row"><td colspan="6">Sem registos.</td></tr>'}</table>
  </div>`;
}
function openNewPaymentModal(){
  const alunoOptions = students.map(s=>`< option value = "${s.nome}" > ${ s.nome }</option >`).join("");
  openModal("Lançar propina", "Registar uma nova mensalidade para um aluno.", `
    < form onsubmit = "handleSavePayment(event)" >
      <div class="field"><label>Aluno</label><select name="aluno">${alunoOptions}</select></div>
      <div class="grid-2">
        <div class="field"><label>Referência</label><input name="ref" required placeholder="Ex: Novembro 2026"></div>
        <div class="field"><label>Valor</label><input name="valor" required placeholder="Ex: 185.000 Kz"></div>
      </div>
      <div class="field"><label>Estado</label><select name="estado"><option>Pendente</option><option>Pago</option><option>Atrasado</option></select></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Lançar propina</button>
      </div>
    </form >`);
}
function handleSavePayment(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const estado = f.get("estado");
  payments.push({aluno:f.get("aluno"), ref:f.get("ref"), valor:f.get("valor"), estado, data: estado==="Pago" ? new Date().toLocaleDateString("pt-PT") : "—"});
  closeModal(); render();
}
function markPaid(i){ payments[i].estado = "Pago"; payments[i].data = new Date().toLocaleDateString("pt-PT"); render(); }
function openReceiptModal(i){
  const p = payments[i];
  openModal("Recibo de propina", "", `
    < div class="receipt" >
      <div class="stripe"></div>
      <h4>${p.aluno}</h4>
      <div class="amt">${p.valor}</div>
      <div class="meta">Referência: ${p.ref}</div>
      <div class="meta">Estado: ${p.estado} ${p.data!=="—" ? "· " + p.data : ""}</div>
    </div >
    ${ p.estado === "Pago" ? `<div style="text-align:center;"><div class="stamp">Pago<br>${p.data}</div></div>` : `<p style="text-align:center;color:var(--acc-900);font-weight:600;font-size:13.5px;">Pagamento ainda não confirmado.</p>` }
<div class="modal-actions"><button type="button" class="btn btn-ghost" onclick="closeModal()">Fechar</button></div>`, "sm");
}

/* ============================================================
   EMOLUMENTOS
   ============================================================ */
function pageEmolumentos(){
  const pendentes = emolumentoPagamentos.filter(p=>p.estado!=="Pago").length;
  const rows = emolumentoPagamentos.map((p,i)=>`
    < tr >
      <td>${p.aluno}</td><td>${p.tipo}</td><td>${p.valor}</td>
      <td><span class="badge ${badgeClass(p.estado)}">${p.estado}</span></td>
      <td>${p.data}</td>
      <td>${p.estado!=="Pago" ? `<a class="link-blue" onclick="markEmolumentoPaid(${i})">Marcar como pago</a>` : "—"}</td>
    </tr >`).join("");
  const catalogRows = emolumentosCatalogo.map(t=>`< tr ><td>${t.nome}</td><td>${t.valor}</td></tr >`).join("");
  return `
    < div class="app-topbar" >
    <div><h2>Emolumentos</h2><div class="who">Matrícula, seguro escolar, certificados e outras taxas</div></div>
    <div style="display:flex;gap:10px;">
      <button class="btn btn-outline" onclick="openNewEmolumentoTipoModal()">+ Novo tipo</button>
      <button class="btn btn-accent" onclick="openNewEmolumentoPagamentoModal()">+ Lançar emolumento</button>
    </div>
  </div >
  <div class="metric-grid" style="grid-template-columns:repeat(3,1fr);">
    <div class="metric"><div class="lbl">Tipos de emolumento</div><div class="val">${emolumentosCatalogo.length}</div></div>
    <div class="metric"><div class="lbl">Registos totais</div><div class="val">${emolumentoPagamentos.length}</div></div>
    <div class="metric"><div class="lbl">Pagamentos pendentes</div><div class="val" style="color:var(--acc-900)">${pendentes}</div></div>
  </div>
  <div class="panel">
    <div class="panel-head"><h3>Pagamentos de emolumentos</h3></div>
    <table><tr><th>Aluno</th><th>Tipo</th><th>Valor</th><th>Estado</th><th>Data</th><th></th></tr>
    ${rows || '<tr class="empty-row"><td colspan="6">Sem registos.</td></tr>'}</table>
  </div>
  <div class="panel">
    <div class="panel-head"><h3>Tabela de emolumentos (catálogo)</h3></div>
    <table><tr><th>Tipo</th><th>Valor</th></tr>${catalogRows}</table>
  </div>`;
}
function openNewEmolumentoTipoModal(){
  openModal("Novo tipo de emolumento", "Adicione uma nova taxa ao catálogo da escola.", `
    < form onsubmit = "handleSaveEmolumentoTipo(event)" >
      <div class="field"><label>Nome do emolumento</label><input name="nome" required placeholder="Ex: Ficha de candidatura"></div>
      <div class="field"><label>Valor</label><input name="valor" required placeholder="Ex: 10.000 Kz"></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Adicionar tipo</button>
      </div>
    </form >`, "sm");
}
function handleSaveEmolumentoTipo(e){
  e.preventDefault();
  const f = new FormData(e.target);
  emolumentosCatalogo.push({id:++seq, nome:f.get("nome"), valor:f.get("valor")});
  closeModal(); render();
}
function openNewEmolumentoPagamentoModal(){
  const alunoOptions = students.map(s=>`< option value = "${s.nome}" > ${ s.nome }</option >`).join("");
  const tipoOptions = emolumentosCatalogo.map(t=>`< option value = "${t.nome}" > ${ t.nome } — ${ t.valor }</option >`).join("");
  openModal("Lançar emolumento", "Registar uma taxa para um aluno específico.", `
    < form onsubmit = "handleSaveEmolumentoPagamento(event)" >
      <div class="field"><label>Aluno</label><select name="aluno">${alunoOptions}</select></div>
      <div class="field"><label>Tipo de emolumento</label><select name="tipo">${tipoOptions}</select></div>
      <div class="field"><label>Estado</label><select name="estado"><option>Pendente</option><option>Pago</option></select></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Lançar emolumento</button>
      </div>
    </form >`);
}
function handleSaveEmolumentoPagamento(e){
  e.preventDefault();
  const f = new FormData(e.target);
  const tipo = emolumentosCatalogo.find(t=>t.nome===f.get("tipo"));
  emolumentoPagamentos.push({aluno:f.get("aluno"), tipo:f.get("tipo"), valor: tipo?tipo.valor:"—", estado:f.get("estado"), data: f.get("estado")==="Pago" ? new Date().toLocaleDateString("pt-PT") : "—"});
  closeModal(); render();
}
function markEmolumentoPaid(i){ emolumentoPagamentos[i].estado="Pago"; emolumentoPagamentos[i].data=new Date().toLocaleDateString("pt-PT"); render(); }

/* ============================================================
   CALENDÁRIO DE PROVAS
   ============================================================ */
function pageProvas(){
  const sorted = exams.slice().sort((a,b)=>a.data.localeCompare(b.data));
  const rows = sorted.map(ex=>{
    const i = exams.indexOf(ex);
    return `
    < tr >
      <td>${fmtDatePT(ex.data)}</td><td>${ex.disciplina}</td><td>${ex.turma}</td><td><span class="badge badge-blue">${ex.tipo}</span></td><td>${ex.periodo}</td><td>${ex.obs||"—"}</td>
      <td><a class="link-red" onclick="confirmDeleteExam(${i})">Remover</a></td>
    </tr >`;
  }).join("");
  return `
    < div class="app-topbar" >
    <div><h2>Calendário de provas</h2><div class="who">Testes, exames e trabalhos avaliativos</div></div>
    <button class="btn btn-accent" onclick="openNewExamModal()">+ Marcar prova</button>
  </div >
    <div class="panel">
        <div class="panel-head"><h3>Provas marcadas</h3></div>
        <table><tr><th>Data</th><th>Disciplina</th><th>Turma</th><th>Tipo</th><th>Período</th><th>Obs.</th><th></th></tr>
            ${rows || '<tr class="empty-row"><td colspan="7">Sem provas marcadas.</td></tr>'}</table>
    </div>`;
}
function openNewExamModal(){
  openModal("Marcar nova prova", "Adicione um teste, exame ou trabalho ao calendário.", `
        < form onsubmit = "handleSaveExam(event)" >
      <div class="grid-2">
        <div class="field"><label>Disciplina</label><input name="disciplina" required placeholder="Ex: Matemática"></div>
        <div class="field"><label>Turma</label><input name="turma" required placeholder="Ex: 9ºA"></div>
      </div>
      <div class="grid-2">
        <div class="field"><label>Data</label><input name="data" type="date" required></div>
        <div class="field"><label>Tipo</label><select name="tipo"><option>Teste</option><option>Exame</option><option>Trabalho</option></select></div>
      </div>
      <div class="grid-2">
        <div class="field"><label>Período</label><select name="periodo"><option>1º Período</option><option>2º Período</option><option>3º Período</option></select></div>
        <div class="field"><label>Observações</label><input name="obs" placeholder="Opcional"></div>
      </div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Marcar prova</button>
      </div>
    </form >`);
}
function handleSaveExam(e){
  e.preventDefault();
  const f = new FormData(e.target);
  exams.push({disciplina:f.get("disciplina"), turma:f.get("turma"), data:f.get("data"), tipo:f.get("tipo"), periodo:f.get("periodo"), obs:f.get("obs")});
  closeModal(); render();
}
function confirmDeleteExam(i){
  const ex = exams[i];
  openConfirm("Remover prova", `Remover < b > ${ ex.disciplina }</b > (${ ex.turma }) marcada para ${ fmtDatePT(ex.data) }?`, ()=>{
    exams.splice(i,1); closeModal(); render();
  });
}

/* ============================================================
   REUNIÕES E EVENTOS
   ============================================================ */
function pageReunioes(){
  const rows = events.map((ev,i)=>`
    < div class="event-item" >
      <div class="event-date"><div class="d">${ev.dia}</div><div class="m">${ev.mes}</div></div>
      <div style="flex:1;">
        <div style="display:flex;justify-content:space-between;gap:12px;">
          <h4 style="font-size:15px;">${ev.titulo}</h4>
          <a class="link-red" style="font-size:13px;white-space:nowrap;" onclick="confirmDeleteEvent(${i})">Remover</a>
        </div>
        <p style="font-size:12.5px;color:var(--ink-500);margin-top:4px;">${ev.hora}</p>
        <p style="font-size:13.5px;color:var(--ink-700);margin-top:6px;">${ev.desc}</p>
      </div>
    </div >`).join("");
  return `
    < div class="app-topbar" >
    <div><h2>Reuniões e eventos</h2><div class="who">Visível na área do aluno e do docente</div></div>
    <button class="btn btn-accent" onclick="openNewEventModal()">+ Novo evento</button>
  </div >
    <div class="panel">${rows || '<p style="color:var(--ink-300);text-align:center;padding:20px;">Sem eventos publicados.</p>'}</div>`;
}
function openNewEventModal(){
  openModal("Novo evento", "Reuniões, saídas pedagógicas ou outras atividades escolares.", `
        < form onsubmit = "handleSaveEvent(event)" >
      <div class="grid-3">
        <div class="field"><label>Dia</label><input name="dia" required placeholder="Ex: 15"></div>
        <div class="field"><label>Mês</label><input name="mes" required placeholder="Ex: Set"></div>
        <div class="field"><label>Hora / local</label><input name="hora" required placeholder="Ex: 17h30 · Auditório"></div>
      </div>
      <div class="field"><label>Título</label><input name="titulo" required></div>
      <div class="field"><label>Descrição</label><textarea name="desc" rows="3" required></textarea></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Publicar evento</button>
      </div>
    </form >`);
}
function handleSaveEvent(e){
  e.preventDefault();
  const f = new FormData(e.target);
  events.push({dia:f.get("dia"), mes:f.get("mes"), titulo:f.get("titulo"), hora:f.get("hora"), desc:f.get("desc")});
  closeModal(); render();
}
function confirmDeleteEvent(i){
  const ev = events[i];
  openConfirm("Remover evento", `Remover o evento < b > ${ ev.titulo }</b >?`, ()=>{ events.splice(i,1); closeModal(); render(); });
}

/* ============================================================
   COMUNICADOS
   ============================================================ */
function pageComunicados(){
  const rows = announcements.map(a=>`
    < div class="panel" style = "margin-bottom:14px;" >
      <div class="panel-head"><h3>${a.titulo}</h3><span class="badge badge-blue">${a.destino}</span></div>
      <p style="font-size:13.5px;color:var(--ink-500);line-height:1.6;">${a.msg}</p>
      <p style="font-size:12px;color:var(--ink-300);margin-top:10px;">Publicado a ${a.data}</p>
    </div >`).join("");
  return `
    < div class="app-topbar" >
    <div><h2>Comunicados</h2><div class="who">Informações para alunos e encarregados de educação</div></div>
    <button class="btn btn-accent" onclick="openNewAnnouncementModal()">+ Novo comunicado</button>
  </div >
    ${ rows }`;
}
function openNewAnnouncementModal(){
  openModal("Novo comunicado", "Publique uma informação para a comunidade escolar.", `
        < form onsubmit = "handleSaveAnnouncement(event)" >
      <div class="field"><label>Título</label><input name="titulo" required></div>
      <div class="field"><label>Destinatário</label><select name="destino"><option>Todos</option><option>Encarregados de Educação</option><option>Alunos</option><option>Turma específica</option></select></div>
      <div class="field"><label>Mensagem</label><textarea name="msg" rows="4" required></textarea></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Publicar comunicado</button>
      </div>
    </form >`);
}
function handleSaveAnnouncement(e){
  e.preventDefault();
  const f = new FormData(e.target);
  announcements.unshift({titulo:f.get("titulo"), destino:f.get("destino"), msg:f.get("msg"), data:new Date().toLocaleDateString("pt-PT")});
  closeModal(); render();
}

/* ============================================================
   INSTITUIÇÃO
   ============================================================ */
function pageInstituicao(){
  return `
    < div class="app-topbar" >
    <div><h2>Instituição</h2><div class="who">Informações gerais da escola</div></div>
    <button class="btn btn-accent" onclick="openEditInstituicaoModal()">Editar informações</button>
  </div >
  <div class="panel">
    <div class="panel-head"><h3>${SCHOOL.name}</h3></div>
    <div class="info-grid">
      <div class="info-item"><div class="k">Localidade</div><div class="v">${SCHOOL.place}</div></div>
      <div class="info-item"><div class="k">Ano de fundação</div><div class="v">${SCHOOL.founded}</div></div>
      <div class="info-item"><div class="k">Telefone</div><div class="v">${SCHOOL.telefone}</div></div>
      <div class="info-item"><div class="k">Email</div><div class="v">${SCHOOL.email}</div></div>
      <div class="info-item"><div class="k">Morada</div><div class="v">${SCHOOL.morada}</div></div>
      <div class="info-item"><div class="k">Anos de escolaridade</div><div class="v">${SCHOOL.anosEscolaridade}</div></div>
      <div class="info-item"><div class="k">Alunos matriculados</div><div class="v">${SCHOOL.alunosMatriculados}</div></div>
      <div class="info-item"><div class="k">Corpo docente</div><div class="v">${SCHOOL.corpoDocente} professores</div></div>
    </div>
  </div>
  <div class="panel">
    <div class="panel-head"><h3>Sobre a escola</h3></div>
    <p style="font-size:14px;color:var(--ink-700);line-height:1.7;">${SCHOOL.descricaoSobre}</p>
  </div>`;
}
function openEditInstituicaoModal(){
  openModal("Editar informações da instituição", "Estes dados alimentam o site público da escola.", `
    < form onsubmit = "handleSaveInstituicao(event)" >
      <div class="grid-2">
        <div class="field"><label>Nome da escola</label><input name="name" required value="${esc(SCHOOL.name)}"></div>
        <div class="field"><label>Localidade</label><input name="place" required value="${esc(SCHOOL.place)}"></div>
      </div>
      <div class="grid-3">
        <div class="field"><label>Telefone</label><input name="telefone" required value="${esc(SCHOOL.telefone)}"></div>
        <div class="field"><label>Email</label><input name="email" type="email" required value="${esc(SCHOOL.email)}"></div>
        <div class="field"><label>Morada</label><input name="morada" required value="${esc(SCHOOL.morada)}"></div>
      </div>
      <div class="grid-3">
        <div class="field"><label>Ano de fundação</label><input name="founded" type="number" required value="${esc(SCHOOL.founded)}"></div>
        <div class="field"><label>Alunos matriculados</label><input name="alunosMatriculados" required value="${esc(SCHOOL.alunosMatriculados)}"></div>
        <div class="field"><label>Corpo docente</label><input name="corpoDocente" required value="${esc(SCHOOL.corpoDocente)}"></div>
      </div>
      <div class="field"><label>Anos de escolaridade</label><input name="anosEscolaridade" required value="${esc(SCHOOL.anosEscolaridade)}"></div>
      <div class="field"><label>Descrição — Sobre nós</label><textarea name="descricaoSobre" rows="4" required>${SCHOOL.descricaoSobre}</textarea></div>
      <div class="modal-actions">
        <button type="button" class="btn btn-ghost" onclick="closeModal()">Cancelar</button>
        <button type="submit" class="btn btn-accent">Guardar alterações</button>
      </div>
    </form >`, "lg");
}
function handleSaveInstituicao(e){
  e.preventDefault();
  const f = new FormData(e.target);
  Object.assign(SCHOOL, {
    name: f.get("name"), place: f.get("place"), telefone: f.get("telefone"), email: f.get("email"),
    morada: f.get("morada"), founded: Number(f.get("founded")), alunosMatriculados: f.get("alunosMatriculados"),
    corpoDocente: f.get("corpoDocente"), anosEscolaridade: f.get("anosEscolaridade"), descricaoSobre: f.get("descricaoSobre"),
  });
  closeModal(); render();
}

/* ============================================================
   RENDER
   ============================================================ */
function renderListOnly(which){
  // atualiza apenas o conteúdo principal ao filtrar, sem fechar modais nem perder foco desnecessariamente
  render();
}
function render(){
  const app = document.getElementById("app");
  app.innerHTML = state.authed ? renderAdmin() : renderLogin();
}
render();