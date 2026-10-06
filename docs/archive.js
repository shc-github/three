(() => {
  'use strict';
  // Dates follow the novel's eras; undated events retain narrative order.
  const events = [
    {era:'接触前夜',when:'20 世纪 · 红岸往事',title:'红岸向宇宙发出呼唤',people:['叶文洁'],book:'《三体》',summary:'太阳成为信号放大器，人类第一次真正触及另一个世界。',cause:'身处红岸基地的叶文洁，对人类能否独立修复自身的暴力与苦难失去信心。',action:'她发现太阳的电波增益效应，借助太阳向宇宙发送信息。三体世界的一名监听员收到信号，并冒险发出不要回答的警告。',impact:'来自外星文明的回应，不再只是科学发现；是否再次发信，成为关系整个人类命运的选择。'},
    {era:'接触前夜',when:'收到警告之后',title:'叶文洁回应，三体获得目标',people:['叶文洁','伊文斯'],book:'《三体》',summary:'第二次发信暴露了地球，接触转化为入侵的开端。',cause:'三体文明长期遭受恒纪元与乱纪元交替的折磨，需要寻找稳定的生存环境。',action:'叶文洁选择回应。此后，她与伊文斯等人建立联系，地球三体组织逐渐形成；人类内部对外来文明的期待和目的并不一致。',impact:'三体舰队驶向太阳系。地球内部的政治与信仰分裂，与星际战争缠绕在一起。'},
    {era:'危机纪元',when:'危机揭露之初',title:'科学边界与古筝行动',people:['汪淼','史强','叶文洁','伊文斯'],book:'《三体》',summary:'从倒计时和三体游戏，到截获“审判日”号的数据。',cause:'基础物理实验出现混乱，多名科学家死亡；汪淼被卷入围绕科学边界组织的调查。',action:'汪淼通过三体游戏认识到三体文明的困境。史强提出利用纳米材料切割“审判日”号的方案，行动截获了三体组织保存的信息。',impact:'智子的存在和科学封锁被揭示：人类可以继续发展工程，却难以依靠基础理论突破实现反超。'},
    {era:'危机纪元',when:'危机初期 · 并行计划',title:'面壁计划启动',people:['罗辑','史强'],book:'《黑暗森林》',summary:'当外部行动可被智子监视，人类把战略藏进思想。',cause:'智子能监视地球上的活动，却无法直接读取人的思维。常规保密方式难以支撑抵抗计划。',action:'联合国选出泰勒、雷迪亚兹、希恩斯与罗辑四名面壁者，授予他们调动资源的权限；破壁人则试图推断并揭穿其真实意图。',impact:'战争进入意图与伪装的层面。罗辑起初逃避使命，后来逐步理解叶文洁留下的宇宙社会学提示。'},
    {era:'危机纪元',when:'危机初期 · 并行计划',title:'阶梯计划送出云天明的大脑',people:['程心','云天明','维德'],book:'《死神永生》',summary:'一次未抵达预定航线的探测任务，留下跨世纪的联系。',cause:'人类希望抢在三体舰队抵达前，将探测器送往敌方；推进能力和载荷限制使方案极为苛刻。',action:'程心提出以沿途核爆推动辐射帆的构想。在维德主导下，载荷被缩减为云天明的大脑，但飞行中的故障让探测器偏离预定方向。',impact:'任务在当时被视为失败。云天明后来被三体文明获得，最终通过童话向人类传递关键情报。'},
    {era:'危机纪元',when:'冬眠之前',title:'罗辑向一颗恒星发出“咒语”',people:['罗辑'],book:'《黑暗森林》',summary:'以恒星坐标为内容的广播，成为检验宇宙社会学的实验。',cause:'叶文洁的提示使罗辑开始思考：宇宙文明如何在信息不足且无法互信的环境中生存。',action:'他要求向宇宙广播一颗遥远恒星的位置，并把这次广播称为咒语。随后，他跨入冬眠，等待一个无法立即验证的结果。',impact:'那颗恒星后来被毁灭，为黑暗森林推论提供了决定性证据，也为针对三体的威慑提供基础。'},
    {era:'危机纪元',when:'危机后期 · 末日战役前',title:'章北海带走“自然选择”号',people:['章北海'],book:'《黑暗森林》',summary:'一个始终表现得坚定的人，实际把希望押在逃离。',cause:'章北海认为人类舰队无法凭当时的技术战胜三体，而公开的失败主义和逃亡主义受到压制。',action:'苏醒后，他在获得舰船指挥权的机会中控制“自然选择”号，驶离太阳系。几艘追击舰被一同带向深空。',impact:'他的行动为人类留下了太阳系之外的生存分支，但逃离并不意味着摆脱资源匮乏与彼此猜疑。'},
    {era:'危机纪元',when:'危机后期 · 末日战役',title:'水滴摧毁联合舰队',people:['丁仪','章北海'],book:'《黑暗森林》',summary:'一个探测器，击碎了人类对技术优势的想象。',cause:'人类在漫长发展后建立庞大舰队，普遍相信数量与常规武器足以应对三体。',action:'丁仪接触水滴并察觉其异常。水滴随即以强相互作用力材料构成的坚固外壳，高速贯穿密集编队的战舰。',impact:'舰队遭受毁灭性打击。少数幸存和出逃舰船成为恒星际人类的种子，地球则失去军事抵抗能力。'},
    {era:'危机纪元',when:'末日战役之后',title:'黑暗战役：深空中的第一次选择',people:['章北海'],book:'《黑暗森林》',summary:'离开太阳系后，补给不足把同行者变成潜在敌人。',cause:'逃亡舰船发现燃料、配件等资源难以支撑全部人员到达遥远目的地，又无法确认其他舰船的意图。',action:'在“自然选择”号所在舰队，以及“蓝色空间”号与“青铜时代”号之间，先发制人的攻击相继发生。章北海死于前一场冲突。',impact:'人类在自身内部重演了猜疑链。地球人类与星舰人类的伦理和生存逻辑，从此开始分化。'},
    {era:'威慑纪元',when:'威慑建立',title:'罗辑以两个世界建立威慑',people:['罗辑','史强'],book:'《黑暗森林》',summary:'同归于尽的能力，为两个文明换来和平。',cause:'水滴限制了太阳广播的使用，罗辑必须寻找新的方式，让三体相信地球仍能暴露其位置。',action:'他利用部署在太阳系的装置构造坐标曝光机制，将触发与自己的生命状态关联，迫使三体承认威慑。',impact:'入侵被遏止，罗辑成为执剑人。和平依赖的不是互信，而是对他真正会按下开关的判断。'},
    {era:'威慑纪元',when:'威慑末期',title:'执剑人交接，威慑失效',people:['罗辑','程心'],book:'《死神永生》',summary:'人类选择了温柔的守护者，却误读了威慑的条件。',cause:'长期和平改变了公众对危险的感受；人们希望执剑人更符合和平时代的价值。',action:'程心接任后，三体判断她不会启动毁灭双方的广播，立即发动攻击。她没有按下开关，地球上的威慑设施遭到摧毁。',impact:'和平体系迅速崩溃。人类被迫接受三体控制，并经历向澳大利亚迁移的灾难。'},
    {era:'广播纪元',when:'深空广播',title:'“万有引力”号发出坐标',people:['关一帆'],book:'《死神永生》',summary:'太阳系外的人类，完成了地球没能完成的广播。',cause:'“万有引力”号追击“蓝色空间”号时，人类与水滴一同遭遇正在消失的四维空间碎片。',action:'“蓝色空间”号上的人类利用四维空间进入水滴内部并解除威胁。两舰人员作出广播决定，由“万有引力”号发射三体星系坐标。',impact:'三体对地球的直接占领失去意义。但两个相邻世界都面临黑暗森林打击，广播带来的不是安全结局。'},
    {era:'广播纪元',when:'广播之后',title:'三体星系毁灭',people:['程心','罗辑'],book:'《死神永生》',summary:'远方的一次打击，让黑暗森林从理论变成天文事实。',cause:'坐标暴露后，三体星系成为宇宙中其他文明能够识别的目标。',action:'人类观测到三体星系遭受光粒打击的结果。面对同样可能被识别的太阳系，各种防御与逃亡方案开始竞争。',impact:'问题从如何击败三体，转向如何躲避远超人类理解的文明。太阳系进入寻求避难方案的阶段。'},
    {era:'广播纪元',when:'云天明会面',title:'三则童话中的生存路线',people:['云天明','程心'],book:'《死神永生》',summary:'受监视的会面，把技术信息藏进故事的隐喻。',cause:'云天明获得了与程心会面的机会，但谈话必须通过三体方面的审查。',action:'他讲述三个童话。人类随后反复解读其中的画师、针眼画师、无故事王国与香皂等线索，寻找被间接表达的技术。',impact:'童话与曲率驱动、低光速黑域和降维危险有关，但人类没有及时完整理解所有提示。信息到达，不等于文明能够采取行动。'},
    {era:'掩体纪元',when:'太阳系避难工程',title:'掩体世界与光速飞船的分歧',people:['程心','维德'],book:'《死神永生》',summary:'留在太阳系躲避，还是发展足以离开的推进技术？',cause:'人类预期太阳可能遭到光粒打击，计划借巨行星遮挡爆发；光速飞船则触及逃亡、资源分配与安全争议。',action:'掩体城市建设成为主流。维德推进曲率驱动研究，并准备以武力抗拒阻止；程心要求他遵守承诺、放弃抵抗。',impact:'公开研究受到挫折，部分工作仍秘密延续。太阳系拥有了有限的逃离能力，却没能让全体人类获得同样机会。'},
    {era:'掩体纪元',when:'太阳系二维化',title:'二向箔抵达，掩体失去意义',people:['程心','艾 AA','罗辑'],book:'《死神永生》',summary:'打击瞄准的不是太阳，而是太阳系所在的空间。',cause:'躲在巨行星后方只对特定攻击方式有效。更高层次的文明可以直接改变空间维度。',action:'二向箔引发三维空间向二维跌落。程心与艾 AA 抵达冥王星，与守护地球文明档案的罗辑告别，随后乘“星环”号逃离。',impact:'太阳系文明成为平面中的遗迹。小说同时描写歌者处理坐标的场景，但纪年存在错位，不能直接断定命中太阳系的二向箔就是歌者投出的那一张。'},
    {era:'宇宙远未来',when:'蓝星 · 黑域',title:'一次错过，跨越漫长宇宙时间',people:['程心','艾 AA','云天明','关一帆'],book:'《死神永生》',summary:'光速降低改变了重逢的条件，个人的等待失去尺度。',cause:'程心与艾 AA 抵达云天明赠予的恒星附近，遇到恒星际人类；程心随后与关一帆出行。',action:'恒星系陷入低光速黑域后，程心与关一帆在特殊航行条件下经历了巨大的时间跨越，错过云天明与艾 AA 所在的时代。',impact:'他们最终收到留下的信息与进入小宇宙的机会。文明史在此让位于宇宙尺度上的离别与托付。'},
    {era:'宇宙远未来',when:'小宇宙 · 归还者',title:'归还质量，把未来交还宇宙',people:['程心','关一帆'],book:'《死神永生》',summary:'最后的选择，不再只关乎人类自己的延续。',cause:'归还者向小宇宙发送信息：被带走的质量可能影响大宇宙坍缩和重生，需要各文明作出归还。',action:'程心与关一帆决定离开 647 号小宇宙，归还其中的物质；他们留下文明记录以及一个小生态球。',impact:'故事以开放结局收束。新宇宙是否诞生、留下的质量是否影响结果，都没有被写成确定答案。'}
  ];
  const people = [
    ['叶文洁','接触的发起者','从红岸的科学工作者到地球三体组织的重要人物，她把对人类的失望投向宇宙。','回答警告，让地球成为目标；向罗辑提供宇宙社会学的思考起点。'],
    ['汪淼','调查者 · 纳米材料研究者','从科学家的死亡、视野中的倒计时与三体游戏入手，逐渐接近入侵危机。','参与古筝行动，让隐藏的星际战争进入人类共同视野。'],
    ['史强','调查者 · 危机中的同行者','依靠经验和对人的判断，连接汪淼的调查与罗辑的面壁人生。','提出古筝行动的关键方案，在恐惧与挫败中帮助他人重新行动。'],
    ['罗辑','面壁者 · 第一代执剑人','由逃避使命到承担两个世界的生死，再到晚年守护地球文明的记忆。','建立黑暗森林威慑，以个人承担能力支撑脆弱和平。'],
    ['章北海','军人 · 星舰人类的先行者','以坚定胜利主义的表象隐藏失败判断，把人类存续放在服从之上。','带走“自然选择”号，留下逃离太阳系的文明分支。'],
    ['程心','航天工程师 · 执剑人','跨越多个纪元，她的选择反复处于具体生命与文明生存策略的冲突之中。','参与阶梯计划，放弃威慑开关，制止维德抵抗，最终选择归还宇宙质量。'],
    ['云天明','远行者 · 童话的讲述者','被送向深空的大脑成为连接两个文明的特殊个体，一份赠礼改变了后来的远行。','通过三则童话传递求生信息，为程心留下跨越时间的礼物。'],
    ['维德','战略执行者 · 技术推动者','推动阶梯计划与曲率驱动研究，以极端手段追求目标，也承担这些手段的伦理代价。','为推进光速飞船准备武装抵抗，最终遵守对程心的承诺而停止。'],
    ['艾 AA','程心的伙伴','从星环公司的事务到太阳系之外的远行，她始终参与具体的生存决策。','与程心逃离二维化，后来与云天明在蓝星留下生活的痕迹和信息。'],
    ['关一帆','恒星际人类 · 宇宙研究者','来自已经离开地球生存框架的人类社会，为程心解释更残酷的宇宙图景。','经历深空事件，与程心一同跨越黑域中的时间，最终离开小宇宙。'],
    ['丁仪','物理学家 · 水滴接触者','面对人类的技术自信，他仍试图从物质本身理解三体探测器。','在接触水滴时认出技术鸿沟，却已无法阻止舰队的毁灭。'],
    ['伊文斯','地球三体组织的重要组织者','以对地球生命的立场介入人类与三体的关系，并建立持续通信。','“审判日”号保存的资料在古筝行动中被截获，揭开三体战略。']
  ];
  const missions = [
    ['古筝行动','情报获取','史强 · 汪淼 · 联合作战力量','在尽量保存数据的前提下，截获“审判日”号上的三体通信资料。','纳米丝横跨航道，利用船体通过时的运动实施切割；行动造成船上人员死亡。','行动取得情报，暴露智子封锁与三体战略，也展现以极端手段获取信息的代价。'],
    ['面壁计划','战略威慑','泰勒 · 雷迪亚兹 · 希恩斯 · 罗辑','在智子监视下保留真正不可见的战略空间。','授予四名面壁者特殊权限，以公开行动掩盖真实意图；破壁人从行为推断计划。','不同方案相继被揭露或失去原有方向；罗辑最终建立黑暗森林威慑。'],
    ['阶梯计划','跨星际接触','程心 · 维德 · 云天明','向三体舰队方向送出载荷，争取侦察和接触机会。','沿途核爆推动辐射帆，极端减重后仅携带云天明的大脑；飞行故障使其偏航。','预定任务失败，但云天明后来被三体获得，成为童话情报的来源。'],
    ['恒星际逃亡','文明存续','章北海 · 幸存与出逃舰船','在太阳系可能失守时，将人类生存范围扩展到其他恒星。','“自然选择”号出逃，追击舰随行；末日战役中的幸存舰也驶向深空。','部分星舰人类延续下来，但资源困境引发黑暗战役，旧有伦理遭到重塑。'],
    ['引力波广播','坐标曝光','“蓝色空间”号与“万有引力”号人员','在地球威慑失效后，保留对三体实施宇宙广播的能力。','借四维空间解除水滴威胁，并通过“万有引力”号广播三体坐标。','终结三体直接控制地球的局面，同时让两个世界进入被清理的风险之中。'],
    ['掩体计划','太阳系防御','太阳系人类社会','在太阳遭光粒打击时，利用巨行星遮蔽维持人类生存。','将大量人口与城市迁至巨行星背向太阳的区域，建立太空生存系统。','工程回应了光粒威胁，却无法阻挡空间本身二维化；其前提被更高层次攻击击穿。'],
    ['曲率驱动研究','光速航行','维德 · 星环公司 · 后续秘密研究者','让飞船接近光速，为人类打开离开太阳系的通道。','根据童话线索发展空间曲率技术；研究遭遇政治禁令与武装冲突。','研究受挫后仍有成果延续，“星环”号最终带程心与艾 AA 逃出太阳系。'],
    ['黑域与安全声明','降低威胁','人类的方案研究 · 恒星际文明','向宇宙展示一个文明已经失去向外扩张和攻击的能力。','通过降低局部光速形成难以逃出的区域；代价是把自身永久限制在其中。','它是一条有沉重代价的生存思路，不是太阳系成功实施的救援方案；后文的黑域也造成无法挽回的错过。']
  ];
  const list=document.querySelector('#timeline-list');
  const eraSelect=document.querySelector('#era-filter');
  const personSelect=document.querySelector('#person-filter');
  function node(tag, className, text) { const element=document.createElement(tag); if(className)element.className=className; if(text!==undefined)element.textContent=text; return element; }
  function option(select,value){const item=node('option','',value);item.value=value;select.append(item);}
  const eras = [
    ['接触前夜','#d49c62','红岸的呼唤与回应，让两个尚未理解彼此的文明建立了联系。'],
    ['危机纪元','#ba845d','智子封锁、面壁计划与舰队远征：人类在四个世纪的危机中寻找出路。'],
    ['威慑纪元','#86b5a1','罗辑建立的恐怖平衡带来和平，也把两个世界的命运交给一位执剑人。'],
    ['广播纪元','#77a7cb','坐标已经传向宇宙。文明的目标，从战胜对手变成逃离共同的危险。'],
    ['掩体纪元','#a597cc','太空城市、光速飞船与降维打击，把生存问题推向空间本身。'],
    ['宇宙远未来','#c381a1','跨越黑域与漫长时间，最后的选择关乎宇宙的重生。']
  ];
  const detailPanel=document.querySelector('#history-detail');
  const ruler=document.querySelector('#era-ruler');
  let selectedEvent=null;
  let selectedButton=null;
  eras.forEach(([era])=>option(eraSelect,era));
  people.forEach(person=>option(personSelect,person[0]));
  [['','#e89458','全部阶段'],...eras].forEach(([era,color])=>{
    const tick=node('button','era-tick');
    tick.type='button';tick.style.setProperty('--era-color',color);tick.dataset.era=era;
    tick.append(node('strong','',era||'文明全景'),node('small','',era?`${events.filter(event=>event.era===era).length} 个关键事件`:'18 个关键事件'));
    tick.addEventListener('click',()=>{eraSelect.value=era;renderTimeline();});
    ruler.append(tick);
  });
  function updateArrows(){
    document.querySelector('#timeline-prev').disabled=list.scrollLeft<=2;
    document.querySelector('#timeline-next').disabled=list.scrollLeft+list.clientWidth>=list.scrollWidth-2;
  }
  function closeDetail(){
    detailPanel.hidden=true;
    selectedEvent=null;
    if(selectedButton){selectedButton.setAttribute('aria-pressed','false');selectedButton.focus({preventScroll:true});}
  }
  function showEvent(event,index,button){
    if(selectedButton)selectedButton.setAttribute('aria-pressed','false');
    selectedEvent=index;selectedButton=button;button.setAttribute('aria-pressed','true');
    const heading=node('div','history-detail-heading');
    const titleGroup=node('div');
    titleGroup.append(node('div','section-number',`${event.era} / ${event.when}`));
    const title=node('h3','',event.title);title.id='event-detail-title';title.tabIndex=-1;titleGroup.append(title);
    const close=node('button','','×');close.type='button';close.setAttribute('aria-label','关闭事件详情');close.addEventListener('click',closeDetail);
    heading.append(titleGroup,close);
    const tags=node('div','event-tags');event.people.forEach(person=>tags.append(node('span','',person)));
    const body=node('div','event-detail');const definitions=node('dl');
    [['起因',event.cause],['经过',event.action],['影响',event.impact]].forEach(([label,text])=>{const group=node('div');group.append(node('dt','',label),node('dd','',text));definitions.append(group);});
    body.append(definitions,node('p','event-source',`档案 ${String(index+1).padStart(2,'0')} / ${event.book} · 情节概述`));
    detailPanel.replaceChildren(heading,tags,body);detailPanel.hidden=false;
    title.focus({preventScroll:true});
    detailPanel.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'nearest'});
  }
  function renderTimeline(){
    detailPanel.hidden=true;selectedEvent=null;selectedButton=null;
    const fragment=document.createDocumentFragment();
    let count=0;
    events.forEach((event,index)=>{
      if(eraSelect.value&&event.era!==eraSelect.value)return;
      if(personSelect.value&&!event.people.includes(personSelect.value))return;
      count++;
      const row=node('li','timeline-event');
      const card=node('button','history-card');card.type='button';card.setAttribute('aria-pressed','false');card.setAttribute('aria-controls','history-detail');
      card.style.setProperty('--era-color',eras.find(([era])=>era===event.era)[1]);
      const orbit=node('span','event-orbit');orbit.setAttribute('aria-hidden','true');
      card.append(orbit,node('span','event-index',`EVENT ${String(index+1).padStart(2,'0')} / ${event.era}`),node('span','event-period',event.when),node('h3','',event.title),node('p','',event.summary));
      const bottom=node('span','event-card-bottom');bottom.append(node('span','',event.book),node('span','','查看事件 ↗'));card.append(bottom);
      card.addEventListener('click',()=>showEvent(event,index,card));
      row.append(card);fragment.append(row);
    });
    list.replaceChildren(fragment);list.scrollLeft=0;
    document.querySelector('#event-count').textContent=`${String(count).padStart(2,'0')} / ${events.length} 个事件`;
    document.querySelector('#archive-empty').hidden=count>0;
    const era=eras.find(([name])=>name===eraSelect.value);
    document.querySelector('#era-title').textContent=era?era[0]:'文明全景';
    document.querySelector('#era-description').textContent=era?era[2]:'从第一次接触到宇宙远未来，横向浏览改变文明命运的关键节点。';
    ruler.querySelectorAll('button').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.era===eraSelect.value)));
    requestAnimationFrame(updateArrows);
  }
  list.addEventListener('scroll',updateArrows,{passive:true});
  new ResizeObserver(updateArrows).observe(list);
  const scrollEvents=direction=>list.scrollBy({left:direction*(list.firstElementChild?.getBoundingClientRect().width+16||276),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
  document.querySelector('#timeline-prev').addEventListener('click',()=>scrollEvents(-1));
  document.querySelector('#timeline-next').addEventListener('click',()=>scrollEvents(1));
  list.addEventListener('keydown',event=>{
    if(event.key!=='ArrowLeft'&&event.key!=='ArrowRight')return;
    event.preventDefault();
    const cards=[...list.querySelectorAll('button')],index=cards.indexOf(document.activeElement);
    if(index<0){scrollEvents(event.key==='ArrowRight'?1:-1);return;}
    cards[Math.max(0,Math.min(cards.length-1,index+(event.key==='ArrowRight'?1:-1)))].focus();
  });
  detailPanel.addEventListener('keydown',event=>{if(event.key==='Escape'&&selectedEvent!==null)closeDetail();});
  eraSelect.addEventListener('change',renderTimeline);personSelect.addEventListener('change',renderTimeline);
  document.querySelector('#archive-reset').addEventListener('click',()=>{eraSelect.value='';personSelect.value='';renderTimeline();});
  const peopleGrid=document.querySelector('#people-grid');
  people.forEach(([name,role,bio,choice],index)=>{
    const card=node('article','person-card');
    card.append(node('div','person-code',`PERSON / ${String(index+1).padStart(2,'0')}`),node('h3','',name),node('div','person-role',role),node('p','',bio));
    const decision=node('p','person-choice');decision.append(node('strong','','关键选择 / '),document.createTextNode(choice));
    const button=node('button','person-link',`查看${name}的事件 ↗`);button.type='button';button.addEventListener('click',()=>{eraSelect.value='';personSelect.value=name;renderTimeline();document.querySelector('#timeline').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});personSelect.focus({preventScroll:true});});
    card.append(decision,button);peopleGrid.append(card);
  });
  const missionGrid=document.querySelector('#mission-grid');
  missions.forEach(([name,type,crew,goal,method,outcome],index)=>{
    const card=node('article','mission-card');const heading=node('div','mission-heading');heading.append(node('div','mission-code',`MISSION / ${String(index+1).padStart(2,'0')}`),node('span','mission-status',type));
    card.append(heading,node('h3','',name),node('p','mission-crew',crew),node('p','',goal));
    const details=node('details');details.append(node('summary','','展开执行过程与结局'));
    [['执行 / ',method],['结局 / ',outcome]].forEach(([label,text])=>{const paragraph=node('p');paragraph.append(node('strong','',label),document.createTextNode(text));details.append(paragraph);});
    card.append(details);missionGrid.append(card);
  });
  renderTimeline();
  for(const [name,grid] of [['people',peopleGrid],['missions',missionGrid]]){
    const records=[...grid.children].map(element=>({element,text:element.textContent.toLocaleLowerCase()}));
    document.querySelector(`#${name}-search`).addEventListener('input',event=>{
      const query=event.target.value.trim().toLocaleLowerCase();
      let count=0;
      for(const record of records){const matches=record.text.includes(query);record.element.hidden=!matches;if(matches)count++;}
      document.querySelector(`#${name}-count`).textContent=`${count} 份档案`;
      document.querySelector(`#${name}-empty`).hidden=count>0;
    });
  }
})();
