'use strict';
mode.versus={
	init:function(){
		if(get.config('versus_mode')=='jiange'){
			lib.characterPack.mode_versus={
				boss_liedixuande:['male','shu',5,['boss_lingfeng','boss_jizhen'],['jiangeboss','hiddenboss','bossallowed'],'shu'],
				boss_gongshenyueying:['female','shu',4,['boss_gongshenjg','boss_jingmiao','boss_zhinang'],['jiangeboss','hiddenboss','bossallowed'],'shu'],
				boss_tianhoukongming:['male','shu',4,['boss_biantian','bazhen'],['jiangeboss','hiddenboss','bossallowed'],'shu'],
				boss_yuhuoshiyuan:['male','shu',4,['boss_yuhuojg','boss_qiwu','boss_tianyujg'],['jiangeboss','hiddenboss','bossallowed'],'shu'],
				boss_qiaokuijunyi:['male','wei',4,['boss_huodi','boss_jueji'],['jiangeboss','hiddenboss','bossallowed'],'wei'],
				boss_jiarenzidan:['male','wei',5,['boss_chiying','boss_jingfan'],['jiangeboss','hiddenboss','bossallowed'],'wei'],
				boss_duanyuzhongda:['male','wei',5,['boss_fanshi','boss_xuanlei','boss_skonghun'],['jiangeboss','hiddenboss','bossallowed'],'wei'],
				boss_juechenmiaocai:['male','wei',4,['boss_chuanyun','boss_leili','boss_fengxing'],['jiangeboss','hiddenboss','bossallowed'],'wei'],

				boss_jileibaihu:['male','shu',4,['boss_jiguan','boss_zhenwei','boss_benlei'],['jiangemech','hiddenboss','bossallowed'],'shu'],
				boss_yunpingqinglong:['male','shu',4,['boss_jiguan','boss_mojianjg'],['jiangemech','hiddenboss','bossallowed'],'shu'],
				boss_lingjiaxuanwu:['male','shu',5,['boss_jiguan','yizhong','boss_lingyu'],['jiangemech','hiddenboss','bossallowed'],'shu'],
				boss_chiyuzhuque:['male','shu',5,['boss_jiguan','boss_yuhuojg','boss_tianyun'],['jiangemech','hiddenboss','bossallowed'],'shu'],
				boss_fudibian:['male','wei',4,['boss_jiguan','boss_didongjg'],['jiangemech','hiddenboss','bossallowed'],'wei'],
				boss_tuntianchiwen:['male','wei',5,['boss_jiguan','boss_tanshi','boss_tunshi'],['jiangemech','hiddenboss','bossallowed'],'wei'],
				boss_shihuosuanni:['male','wei',3,['boss_jiguan','boss_lianyujg'],['jiangemech','hiddenboss','bossallowed'],'wei'],
				boss_lieshiyazi:['male','wei',4,['boss_jiguan','boss_nailuo'],['jiangemech','hiddenboss','bossallowed'],'wei'],
			};
			lib.characterIntro.boss_liedixuande=lib.characterIntro.liubei;
			lib.characterIntro.boss_gongshenyueying=lib.characterIntro.huangyueying;
			lib.characterIntro.boss_tianhoukongming=lib.characterIntro.shen_zhugeliang;
			lib.characterIntro.boss_yuhuoshiyuan=lib.characterIntro.pangtong;
			lib.characterIntro.boss_qiaokuijunyi=lib.characterIntro.zhenghe;
			lib.characterIntro.boss_jiarenzidan=lib.characterIntro.caozhen;
			lib.characterIntro.boss_duanyuzhongda=lib.characterIntro.simayi;
			lib.characterIntro.boss_juechenmiaocai=lib.characterIntro.xiahouyuan;
		}
	},
	start:function(){
		"step 0"
		_status.mode=get.config('versus_mode');
		if(_status.brawl&&_status.brawl.submode){
			_status.mode=_status.brawl.submode;
		}
		if(lib.config.test_game){
			_status.mode='standard';
		}
		"step 1"
		var playback=localStorage.getItem(lib.configprefix+'playback');
		if(playback){
			ui.create.me();
			ui.arena.style.display='none';
			ui.system.style.display='none';
			_status.playback=playback;
			localStorage.removeItem(lib.configprefix+'playback');
			var store=lib.db.transaction(['video'],'readwrite').objectStore('video');
			store.get(parseInt(playback)).onsuccess=function(e){
				if(e.target.result){
					game.playVideoContent(e.target.result.video);
				}
				else{
					alert('播放失败：找不到录像');
					game.reload();
				}
			}
			event.finish();
			return;
		}
		if(_status.connectMode){
			game.waitForPlayer(function(){
				switch(lib.configOL.versus_mode){
					case '1v1':lib.configOL.number=2;break;
					case '2v2':lib.configOL.number=4;break;
					case '3v3':lib.configOL.number=6;break;
					case '4v4':lib.configOL.number=8;break;
				}
			});
		}
		else if(_status.mode=='jiange'||_status.mode=='four'){
			game.prepareArena(8);
		}
		else if(_status.mode=='two'){
			game.prepareArena(4);
		}
		else if(_status.mode=='three'){
			if(!get.config('enable_all_cards')){
				lib.translate.wuzhong_info+='若对方存活角色多于己方，则额外摸一张牌';
				lib.translate.zhuge_info='锁定技，出牌阶段，你使用杀的次数上限+3';
				lib.card.list=lib.cardsThree;
			}
			ui.create.cards();
			game.finishCards();
		}
		else{
			if(lib.storage.choice==undefined) game.save('choice',20);
			if(lib.storage.zhu==undefined) game.save('zhu',true);
			if(lib.storage.noreplace_end==undefined) game.save('noreplace_end',true);
			if(get.config('first_less')==undefined) game.saveConfig('first_less',true,true);
			if(lib.storage.autoreplaceinnerhtml==undefined) game.save('autoreplaceinnerhtml',true);
			if(lib.storage.single_control==undefined) game.save('single_control',true);
			if(lib.storage.number==undefined) game.save('number',3);
			if(lib.storage.versus_reward==undefined) game.save('versus_reward',3);
			if(lib.storage.versus_punish==undefined) game.save('versus_punish','弃牌');
			if(lib.storage.replace_number==undefined) game.save('replace_number',3);

			switch(lib.storage.seat_order){
				case '交叉':lib.storage.cross_seat=true;lib.storage.random_seat=false;break;
				case '随机':lib.storage.cross_seat=false;lib.storage.random_seat=true;break;
				default:lib.storage.cross_seat=false;lib.storage.random_seat=false;
			}
			game.save('only_zhu',true);
			ui.wuxie.hide();
			ui.create.cards();
			game.finishCards();
		}
		game.delay();
		"step 2"
		if(_status.connectMode){
			if(lib.configOL.versus_mode=='1v1'){
				game.randomMapOL('hidden');
			}
			else{
				game.randomMapOL();
			}
		}
		else if(_status.mode=='four'){
			var list=[
				['zhong','ezhong','ezhong','zhong','zhong','ezhong','ezhong','zhong'],
				['zhong','ezhong','zhong','ezhong','ezhong','zhong','ezhong','zhong'],
				['zhong','ezhong','ezhong','zhong','ezhong','zhong','zhong','ezhong'],
				['zhong','ezhong','zhong','ezhong','zhong','ezhong','zhong','ezhong'],
				['zhong','ezhong','ezhong','zhong','ezhong','zhong','ezhong','zhong'],
			].randomGet();
			var rand1=Math.floor(Math.random()*4);
			var rand2=Math.floor(Math.random()*4);
			for(var i=0;i<list.length;i++){
				if(list[i]=='zhong'){
					if(rand1==0){
						list[i]='zhu';
					}
					rand1--;
				}
				else{
					if(rand2==0){
						list[i]='ezhu';
					}
					rand2--;
				}
			}

			for(var i in lib.skill){
				if(lib.skill[i].changeSeat){
					lib.skill[i]={};
					if(lib.translate[i+'_info']){
						lib.translate[i+'_info']='此模式下不可用';
					}
				}
			}

			var side=Math.random()<0.5;
			var num=Math.floor(Math.random()*8);
			list=list.splice(8-num).concat(list);
			_status.firstAct=game.players[num];
			for(var i=0;i<8;i++){
				if(list[i][0]=='e'){
					game.players[i].side=side;
					game.players[i].identity=list[i].slice(1);
				}
				else{
					game.players[i].side=!side;
					game.players[i].identity=list[i];
				}
				if(game.players[i].identity=='zhu'){
					game[game.players[i].side+'Zhu']=game.players[i];
					game.players[i].isZhu=true;
				}
				game.players[i].setIdentity(game.players[i].identity);
				game.players[i].node.identity.dataset.color=get.translation(game.players[i].side+'Color');
				game.players[i].getId();
			}
			game.chooseCharacterFour();
		}
		else if(_status.mode=='two'){
			for(var i=0;i<game.players.length;i++){
				game.players[i].getId();
			}
			game.chooseCharacterTwo();
		}
		else if(_status.mode=='jiange'){
			var list=['shumech','shu','shuboss','shu','wei','weiboss','wei','weimech'];
			var pos=Math.floor(Math.random()*8);
			for(var i=0;i<8;i++){
				var j=pos+i;
				if(j>=8){
					j-=8;
				}
				if(list[i][0]=='w'){
					game.players[j].side=true;
					game.players[j].setIdentity('wei');
					game.players[j].identity='wei';
				}
				else{
					game.players[j].side=false;
					game.players[j].setIdentity('shu');
					game.players[j].identity='shu';
				}
				if(list[i].indexOf('mech')!=-1){
					game.players[j].type='mech';
				}
				else if(list[i].indexOf('boss')!=-1){
					game.players[j].type='boss';
				}
				else{
					game.players[j].type='human';
				}
				game.players[i].getId();
			}
			game.chooseCharacterJiange();
		}
		else if(_status.mode=='three'){
			game.chooseCharacterThree();
		}
		else{
			game.chooseCharacter();
		}
		if(!_status.connectMode&&_status.brawl&&_status.brawl.chooseCharacterBefore){
			_status.brawl.chooseCharacterBefore();
		}
		"step 3"
		var players=get.players(lib.sort.position);
		var info=[];
		for(var i=0;i<players.length;i++){
			info.push({
				name:players[i].name,
				name2:players[i].name2,
				identity:players[i].node.identity.firstChild.innerHTML,
				color:players[i].node.identity.dataset.color
			});
		}
		_status.videoInited=true;
		if(_status.mode=='four'||_status.mode=='jiange'||_status.connectMode||_status.mode=='two'){
			info.push(false);
		}
		else if(_status.mode=='three'){
			info.push(true);
		}
		else{
			info.push(lib.storage.single_control&&game.players.length>=4);
		}
		game.addVideo('init',null,info);
		event.trigger('gameStart');
		if(_status.connectMode){
			if(_status.mode=='1v1'){
				_status.first_less=true;
				game.gameDraw(_status.firstChoose.next);
				game.phaseLoop(_status.firstChoose.next);
			}
			else if(_status.mode=='2v2'||_status.mode=='3v3'){
				_status.first_less=true;
				var firstChoose=game.players.randomGet();
				if(firstChoose.next.side==firstChoose.side){
					firstChoose=firstChoose.next;
				}
				game.gameDraw(firstChoose);
				if(lib.configOL.replace_handcard){
					game.replaceHandcards(firstChoose.previous);
				}
				game.phaseLoop(firstChoose);
			}
			else if(_status.mode=='4v4'){
				game.gameDraw(_status.firstAct,function(player){
					if(player==_status.firstAct.previousSeat){
						return 5;
					}
					return 4;
				});
				game.replaceHandcards(_status.firstAct.previous,_status.firstAct.previous.previous);
				game.phaseLoop(_status.firstAct);
			}
			event.finish();
		}
		else{
			if(_status.mode=='two'){
				_status.first_less=true;
				_status.first_less_forced=true;
				var firstChoose=_status.firstAct;
				game.gameDraw(firstChoose);
				if(get.config('replace_handcard_two')){
					game.replaceHandcards(firstChoose.previous);
				}
				game.phaseLoop(firstChoose);
			}
			else if(_status.mode=='four'){
				game.gameDraw(_status.firstAct,function(player){
					if(player==_status.firstAct.previousSeat){
						return 5;
					}
					return 4;
				});
				if(game.me==_status.firstAct.previous||game.me==_status.firstAct.previous.previous){
					game.me.chooseBool('是否置换手牌？');
					event.replaceCard=true;
				}
			}
			else if(_status.mode=='jiange'){
				var firstAct;
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].type=='mech'&&game.players[i].group=='wei'){
						firstAct=game.players[i];break;
					}
				}
				_status.actlist=[
					firstAct,
					firstAct.next,
					firstAct.previous,
					firstAct.next.next,
					firstAct.previous.previous,
					firstAct.next.next.next,
					firstAct.previous.previous.previous,
					firstAct.next.next.next.next
				];
				game.gameDraw(firstAct);
				game.phaseLoopJiange();
			}
			else if(_status.mode=='three'){
				var firstAct;
				if(_status.color){
					firstAct=game.enemyZhu;
				}
				else{
					firstAct=game.friendZhu;
				}
				game.gameDraw(firstAct,4);
				game.addGlobalSkill('autoswap');
				if(lib.config.show_handcardbutton){
					ui.versushs=ui.create.system('手牌',null,true);
					lib.setPopped(ui.versushs,game.versusHoverHandcards,220);
				}
				game.phaseLoopThree(firstAct);
			}
			else{
				var firstAct;
				if(lib.storage.zhu){
					_status.currentSide=true;
					firstAct=(_status.currentSide==game.me.side)?game.friendZhu:game.enemyZhu;
				}
				else{
					if(!lib.storage.cross_seat&&!lib.storage.random_seat&&lib.storage.number>1){
						for(var i=0;i<game.players.length-1;i++){
							if(game.players[i].side!=game.players[i+1].side){
								var actcount;
								if(Math.random()<0.5){
									actcount=i;
								}
								else{
									if(i>=lib.storage.number){
										actcount=i-lib.storage.number;
									}
									else{
										actcount=i+lib.storage.number;
									}
								}
								if(actcount>0){
									actcount--;
								}
								else{
									actcount=game.players.length-1;
								}
								firstAct=game.players[actcount];
								break;
							}
						}
					}
					else{
						firstAct=game.players[Math.floor(Math.random()*game.players.length)];
					}
				}
				game.gameDraw(firstAct,4);
				_status.first_less=true;
				_status.round=0;
				if(lib.storage.single_control){
					game.addGlobalSkill('autoswap');
					if(game.players.length>2&&lib.config.show_handcardbutton){
						ui.versushs=ui.create.system('手牌',null,true);
						lib.setPopped(ui.versushs,game.versusHoverHandcards,220);
					}
				}
				_status.enemyCount=ui.create.system('杀敌: '+get.cnNumber(0,true),null,true);
				_status.friendCount=ui.create.system('阵亡: '+get.cnNumber(0,true),null,true);

				lib.setPopped(_status.friendCount,game.versusHoverFriend);
				lib.setPopped(_status.enemyCount,game.versusHoverEnemy);

				if(lib.storage.zhu){
					game.versusPhaseLoop(firstAct);
				}
				else{
					game.versusPhaseLoop(firstAct);
				}
			}
			if(_status.mode!='four'){
				event.finish();
			}
		}
		"step 4"
		if(event.replaceCard&&result.bool){
			var hs=game.me.get('h');
			for(var i=0;i<hs.length;i++){
				ui.discardPile.appendChild(hs[i]);
			}
			game.me.directgain(get.cards(hs.length));
		}
		if(_status.ladder){
			lib.storage.ladder.current-=40;
			_status.ladder_tmp=true;
			game.save('ladder',lib.storage.ladder);
			game.addGlobalSkill('versus_ladder');
		}
		game.phaseLoop(_status.firstAct);
	},
	game:{
		getLadderName:function(score){
			if(score<900) return '平民';
			if(score<1000) return '卫士五';
			if(score<1100) return '卫士四';
			if(score<1200) return '卫士三';
			if(score<1300) return '卫士二';
			if(score<1400) return '卫士一';
			if(score<1500) return '校尉三';
			if(score<1600) return '校尉二';
			if(score<1700) return '校尉一';
			if(score<1800) return '中郎将三';
			if(score<1900) return '中郎将二';
			if(score<2000) return '中郎将一';
			if(score<2100) return '大将五';
			if(score<2200) return '大将四';
			if(score<2300) return '大将三';
			if(score<2400) return '大将二';
			if(score<2500) return '大将一';
			return '枭雄';
		},
		checkOnlineResult:function(player){
			return game.players[0].side==player.side;
		},
		getRoomInfo:function(uiintro){
			if(lib.configOL.versus_mode=='1v1'){
				uiintro.add('<div class="text chat">侯选人数：'+lib.configOL.choice_num+'人');
				uiintro.add('<div class="text chat">替补人数：'+lib.configOL.replace_number+'人');
			}
			else if(lib.configOL.versus_mode=='2v2'||lib.configOL.versus_mode=='3v3'){
				uiintro.add('<div class="text chat">四号位换牌：'+(lib.configOL.replace_handcard?'开启':'关闭'));
			}
			else if(lib.configOL.versus_mode=='4v4'){
				uiintro.add('<div class="text chat">交叉座位：'+(lib.configOL.four_cross?'开启':'关闭'));
			}
			uiintro.add('<div class="text chat">出牌时限：'+lib.configOL.choose_timeout+'秒');
			uiintro.add('<div class="text chat">屏蔽弱将：'+(lib.configOL.ban_weak?'开启':'关闭'));
			var last=uiintro.add('<div class="text chat">屏蔽强将：'+(lib.configOL.ban_strong?'开启':'关闭'));
			if(lib.configOL.banned.length){
				last=uiintro.add('<div class="text chat">禁用武将：'+get.translation(lib.configOL.banned));
			}
			if(lib.configOL.bannedcards.length){
				last=uiintro.add('<div class="text chat">禁用卡牌：'+get.translation(lib.configOL.bannedcards));
			}
			last.style.paddingBottom='8px';
		},
		getVideoName:function(){
			var str=get.translation(game.me.name);
			if(game.me.name2){
				str+='/'+get.translation(game.me.name2);
			}
			var str2;
			switch(_status.mode){
				case 'two':str2='欢乐成双';break;
				case 'three':str2='统率三军';break;
				case 'four':str2='对决 - 4v4';break;
				default:str2='对决 - '+lib.storage.number+'v'+lib.storage.number
			}
			return [str,str2];
		},
		addRecord:function(bool){
			if(typeof bool=='boolean'){
				var data=lib.config.gameRecord.versus.data;
				var identity=get.cnNumber(lib.storage.number)+'人';
				if(!data[identity]){
					data[identity]=[0,0];
				}
				if(bool){
					data[identity][0]++;
				}
				else{
					data[identity][1]++;
				}
				var list=['一人','两人','三人'];
				var str='';
				for(var i=0;i<list.length;i++){
					if(data[list[i]]){
						str+=list[i]+'：'+data[list[i]][0]+'胜'+' '+data[list[i]][1]+'负<br>';
					}
				}
				lib.config.gameRecord.versus.str=str;
				game.saveConfig('gameRecord',lib.config.gameRecord);
			}
		},
		chooseCharacterJiange:function(){
			var next=game.createEvent('chooseCharacter',false);
			next.showConfig=true;
			next.setContent(function(){
				'step 0'
				ui.arena.classList.add('choose-character');
				for(var i in lib.characterPack.mode_versus){
					lib.character[i]=lib.characterPack.mode_versus[i];
					if(!lib.character[i][4]){
						lib.character[i][4]=[];
					}
				}
				'step 1'
				for(var i in lib.skill){
					if(lib.skill[i].changeSeat){
						lib.skill[i]={};
						if(lib.translate[i+'_info']){
							lib.translate[i+'_info']='此模式下不可用';
						}
					}
				}
				var list={
					weilist:[],shulist:[],
					weimech:[],shumech:[],
					weiboss:[],shuboss:[],
				}
				event.list=list;
				if(lib.characterPack.boss){
					for(var i in lib.characterPack.boss){
						if(!lib.character[i]&&lib.characterPack.boss[i][4]){
							if(lib.characterPack.boss[i][4].contains('jiangeboss')||
							lib.characterPack.boss[i][4].contains('jiangemech')){
								lib.character[i]=lib.characterPack.boss[i];
							}
						}
					}
				}
				for(var i in lib.character){
					if(lib.character[i][4]){
						if(lib.character[i][4].contains('jiangeboss')){
							list[lib.character[i][1]+'boss'].push(i);continue;
						}
						else if(lib.character[i][4].contains('jiangemech')){
							list[lib.character[i][1]+'mech'].push(i);continue;
						}
					}
					if(lib.filter.characterDisabled(i)) continue;
					if(lib.character[i][1]=='wei'){
						list.weilist.push(i);
					}
					else if(lib.character[i][1]=='shu'){
						list.shulist.push(i);
					}
				}
				var dialog;
				switch(game.me.type){
					case 'human':
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].type!='human'){
								game.players[i].init(list[game.players[i].identity+game.players[i].type].randomRemove());
							}
						}
						dialog=ui.create.dialog('选择角色',[list[game.me.identity+'list'].randomGets(8),'character']);
						ui.create.cheat=function(){
							_status.createControl=ui.cheat2;
							ui.cheat=ui.create.control('更换',function(){
								if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
									return;
								}
								if(game.changeCoin){
									game.changeCoin(-3);
								}
								var buttons=ui.create.div('.buttons');
								var node=_status.event.dialog.buttons[0].parentNode;
								_status.event.dialog.buttons=ui.create.buttons(list[game.me.identity+'list'].randomGets(8),'character',buttons);
								_status.event.dialog.content.insertBefore(buttons,node);
								buttons.animate('start');
								node.remove();
								game.uncheck();
								game.check();
							});
							delete _status.createControl;
						}
						event.dialogxx=ui.create.characterDialog(function(name){
							if(lib.character[name][4]){
								if(lib.character[name][4].contains('jiangeboss')) return true;
								if(lib.character[name][4].contains('jiangemech')) return true;
							}
							if(lib.character[name][1]!=game.me.identity) return true;
						});
						ui.create.cheat2=function(){
							ui.cheat2=ui.create.control('自由选将',function(){
								if(this.dialog==_status.event.dialog){
									if(game.changeCoin){
										game.changeCoin(50);
									}
									this.dialog.close();
									_status.event.dialog=this.backup;
									this.backup.open();
									delete this.backup;
									game.uncheck();
									game.check();
									if(ui.cheat){
										ui.cheat.style.opacity=1;
									}
								}
								else{
									if(game.changeCoin){
										game.changeCoin(-10);
									}
									this.backup=_status.event.dialog;
									_status.event.dialog.close();
									_status.event.dialog=_status.event.parent.dialogxx;
									this.dialog=_status.event.dialog;
									this.dialog.open();
									game.uncheck();
									game.check();
									if(ui.cheat){
										ui.cheat.style.opacity=0.6;
									}
								}
							});
						}
						if(!_status.brawl||!_status.brawl.chooseCharacterFixed){
							if(!ui.cheat&&get.config('change_choice')) ui.create.cheat();
							if(!ui.cheat2&&get.config('free_choose')) ui.create.cheat2();
						}
						break;
					case 'mech':
						dialog=ui.create.dialog('选择角色',[list[game.me.identity+'mech'],'character']);
						break;
					case 'boss':
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].type=='mech'){
								game.players[i].init(list[game.players[i].identity+game.players[i].type].randomRemove());
							}
						}
						dialog=ui.create.dialog('选择角色',[list[game.me.identity+'boss'],'character']);
						break;
				}
				game.me.chooseButton(dialog,true).selectButton=function(){
					if(get.config('double_character_jiange')) return [2,2];
					return [1,1];
				};
				'step 2'
				if(ui.cheat){
					ui.cheat.close();
					delete ui.cheat;
				}
				if(ui.cheat2){
					ui.cheat2.close();
					delete ui.cheat2;
				}
				var double=(result.links.length==2);
				game.me.init(result.links[0],result.links[1]);
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].name) continue;
					if(game.players[i].type!='human'){
						game.players[i].init(event.list[game.players[i].identity+game.players[i].type].randomRemove());
					}
					else{
						if(double){
							game.players[i].init(event.list[game.players[i].identity+'list'].randomRemove(),event.list[game.players[i].identity+'list'].randomRemove());
						}
						else{
							game.players[i].init(event.list[game.players[i].identity+'list'].randomRemove());
						}
					}
				}
				game.addRecentCharacter(game.me.name,game.me.name2);
				setTimeout(function(){
					ui.arena.classList.remove('choose-character');
				},500);
			});
		},
		chooseCharacterTwo:function(){
			var next=game.createEvent('chooseCharacter',false);
			next.showConfig=true;
			next.setContent(function(){
				'step 0'
				ui.arena.classList.add('choose-character');
				for(var i in lib.skill){
					if(lib.skill[i].changeSeat){
						lib.skill[i]={};
						if(lib.translate[i+'_info']){
							lib.translate[i+'_info']='此模式下不可用';
						}
					}
				}
				var bool=Math.random()<0.5;
				var bool2=Math.random()<0.5;
				var ref=game.players[0];

				ref.side=bool;
				ref.next.side=bool2;
				ref.next.next.side=!bool;
				ref.previous.side=!bool2;

				var firstChoose=game.players.randomGet();
				if(firstChoose.next.side==firstChoose.side){
					firstChoose=firstChoose.next;
				}
				_status.firstAct=firstChoose;
				for(var i=0;i<4;i++){
					firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
					firstChoose=firstChoose.next;
				}

				for(var i=0;i<game.players.length;i++){
					if(game.players[i].side==game.me.side){
						game.players[i].node.identity.firstChild.innerHTML='友';
					}
					else{
						game.players[i].node.identity.firstChild.innerHTML='敌';
					}
					game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
				}
				var list=[];
				for(i in lib.character){
					if(!lib.filter.characterDisabled(i)){
						list.push(i);
					}
				}
				var choose=[];
				event.list=list;

				var addSetting=function(dialog){
					dialog.add('选择座位');
					var seats=document.createElement('table');
					seats.classList.add('pointertable');
					seats.style.margin='0 auto';
					seats.style.width='200px';
					var tr=document.createElement('tr');
					seats.appendChild(tr);
					for(var i=1;i<=game.players.length;i++){
						var td=document.createElement('td');
						tr.appendChild(td);
						td.style.width='40px';
						td.style.fontSize='25px';
						td.style.fontFamily='xinwei';
						td.innerHTML='<span>'+get.cnNumber(i,true)+'</span>';
						td.link=i-1;
						if(get.distance(_status.firstAct,game.me,'absolute')===i-1){
							td.classList.add('thundertext');
						}
						td.addEventListener(lib.config.touchscreen?'touchend':'click',function(){
							if(_status.dragged) return;
							if(_status.justdragged) return;
							if(get.distance(_status.firstAct,game.me,'absolute')==this.link) return;
							var current=this.parentNode.querySelector('.thundertext');
							if(current){
								current.classList.remove('thundertext');
							}
							this.classList.add('thundertext');
							_status.firstAct=game.me;
							for(var i=0;i<this.link;i++){
								_status.firstAct=_status.firstAct.previous;
							}
							var firstChoose=_status.firstAct;
							firstChoose.next.side=!firstChoose.side;
							firstChoose.next.next.side=!firstChoose.side;
							firstChoose.previous.side=firstChoose.side;
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].side==game.me.side){
									game.players[i].node.identity.firstChild.innerHTML='友';
								}
								else{
									game.players[i].node.identity.firstChild.innerHTML='敌';
								}
								game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
							}
							for(var i=0;i<4;i++){
								firstChoose.node.name.innerHTML=get.verticalStr(get.cnNumber(i+1,true)+'号位');
								firstChoose=firstChoose.next;
							}
						});
					}
					dialog.content.appendChild(seats);
					if(game.me==game.zhu){
						seats.previousSibling.style.display='none';
						seats.style.display='none';
					}

					dialog.add(ui.create.div('.placeholder'));
					dialog.add(ui.create.div('.placeholder'));
					dialog.add(ui.create.div('.placeholder'));
				};
				var removeSetting=function(){
					var dialog=_status.event.dialog;
					if(dialog.querySelector('table')&&!get.config('change_identity')){
						dialog.querySelector('table').previousSibling.remove();
						dialog.querySelector('table').nextSibling.remove();
						dialog.querySelector('table').nextSibling.remove();
						dialog.querySelector('table').nextSibling.remove();
						dialog.querySelector('table').remove();
					}
				};
				event.addSetting=addSetting;
				event.removeSetting=removeSetting;

				var characterChoice;
				if(_status.brawl&&_status.brawl.chooseCharacter){
					characterChoice=_status.brawl.chooseCharacter(list,game.me);
				}
				else{
					characterChoice=list.randomGets(7);
				}
				var dialog=ui.create.dialog('选择角色',[characterChoice,'character']);
				if(get.config('replace_character_two')){
					game.me.chooseButton(true,dialog,2);
					_status.replacetwo=true;
					game.additionaldead=[];
				}
				else{
					game.me.chooseButton(true,dialog);
				}
				if(!_status.brawl||!_status.brawl.noAddSetting){
					if(get.config('change_identity')){
						addSetting(dialog);
					}
				}

				ui.create.cheat=function(){
					_status.createControl=ui.cheat2;
					ui.cheat=ui.create.control('更换',function(){
						if(ui.cheat2&&ui.cheat2.dialog==_status.event.dialog){
							return;
						}
						if(game.changeCoin){
							game.changeCoin(-3);
						}
						var buttons=ui.create.div('.buttons');
						var node=_status.event.dialog.buttons[0].parentNode;
						_status.event.dialog.buttons=ui.create.buttons(list.randomGets(7),'character',buttons);
						_status.event.dialog.content.insertBefore(buttons,node);
						buttons.animate('start');
						node.remove();
						game.uncheck();
						game.check();
					});
					delete _status.createControl;
				};
				event.dialogxx=ui.create.characterDialog();
				ui.create.cheat2=function(){
					ui.cheat2=ui.create.control('自由选将',function(){
						if(this.dialog==_status.event.dialog){
							if(game.changeCoin){
								game.changeCoin(50);
							}
							this.dialog.close();
							_status.event.dialog=this.backup;
							this.backup.open();
							delete this.backup;
							game.uncheck();
							game.check();
							if(ui.cheat){
								ui.cheat.style.opacity=1;
							}
						}
						else{
							if(game.changeCoin){
								game.changeCoin(-10);
							}
							this.backup=_status.event.dialog;
							_status.event.dialog.close();
							_status.event.dialog=_status.event.parent.dialogxx;
							this.dialog=_status.event.dialog;
							this.dialog.open();
							game.uncheck();
							game.check();
							if(ui.cheat){
								ui.cheat.style.opacity=0.6;
							}
						}
					});
				}
				if(!_status.brawl||!_status.brawl.chooseCharacterFixed){
					if(!ui.cheat&&get.config('change_choice')){
						ui.create.cheat();
					}
					if(!ui.cheat2&&get.config('free_choose')){
						ui.create.cheat2();
					}
				}
				'step 1'
				if(ui.cheat){
					ui.cheat.close();
					delete ui.cheat;
				}
				if(ui.cheat2){
					ui.cheat2.close();
					delete ui.cheat2;
				}
				game.me.init(result.links[0]);
				game.addRecentCharacter(game.me.name);
				if(_status.replacetwo){
					game.me.replacetwo=result.links[1];
					game.addRecentCharacter(game.me.replacetwo);
				}
				event.list.remove(game.me.name);
				for(var i=0;i<game.players.length;i++){
					if(game.players[i]!=game.me){
						if(_status.brawl&&_status.brawl.chooseCharacter){
							var list=_status.brawl.chooseCharacter(event.list,game.players[i]);
							game.players[i].init(list.randomGet());
							event.list.remove(game.players[i].name);
							if(_status.replacetwo){
								game.players[i].replacetwo=list.randomGet(game.players[i].name);
								event.list.remove(game.players[i].replacetwo);
							}
						}
						else{
							game.players[i].init(event.list.randomRemove());
							game.players[i].replacetwo=event.list.randomRemove();
						}
					}
				}
				setTimeout(function(){
					ui.arena.classList.remove('choose-character');
				},500)
			});
		},
		chooseCharacterFour:function(){
			var next=game.createEvent('chooseCharacter',false);
			next.ai=function(player,list,list2){
				if(player.identity=='zhu'){
					list2.randomSort();
					var choice;
					if(Math.random()-0.8<0&&list2.length){
						choice=list2[0];
					}
					else{
						choice=list[0];
					}
					player.init(choice);
					player.hp++;
					player.maxHp++;
					player.update();
				}
				else if(Math.random()<0.5){
					var choice=0;
					for(var i=0;i<list.length;i++){
						if(lib.character[list[i]][1]==game[player.side+'Zhu'].group){
							choice=i;break;
						}
					}
					player.init(list[choice]);
				}
				else{
					player.init(list[0]);
				}
				this.list.remove(player.name);
				this.list2.remove(player.name);
			}
			next.setContent(function(){
				"step 0"
				ui.arena.classList.add('choose-character');
				var i;
				var list;
				var list2=[];

				event.list=[];
				event.filterChoice=function(name){
					if(get.config('enable_all')) return false;
					return !lib.choiceFour.contains(name);
				}
				for(i in lib.character){
					if(event.filterChoice(i)) continue;
					if(lib.filter.characterDisabled(i)) continue;
					event.list.push(i);
					if(lib.character[i][4]&&lib.character[i][4].contains('zhu')){
						list2.push(i);
					}
				}
				if(_status.brawl&&_status.brawl.chooseCharacterFilter){
					event.list=_status.brawl.chooseCharacterFilter(event.list);
				}
				event.list.randomSort();
				event.list2=list2;
				event.current=_status.firstAct;
				event.four_assign=get.config('four_assign');
				event.flipassign=true;
				if(get.config('ladder')){
					var date=new Date();
					if(!lib.storage.ladder){
						lib.storage.ladder={
							current:900,
							top:900,
							month:date.getMonth()
						};
						game.save('ladder',lib.storage.ladder);
					}
					else if(date.getMonth()!=lib.storage.ladder.month&&get.config('ladder_monthly')){
						lib.storage.ladder.month=date.getMonth();
						lib.storage.ladder.current=900;
						game.save('ladder',lib.storage.ladder);
					}
					ui.ladder=ui.create.system(game.getLadderName(lib.storage.ladder.current),null,true);
					lib.setPopped(ui.ladder,function(uiintro){
						var uiintro=ui.create.dialog('hidden');
						uiintro.add('<div class="text center">当前分数：<div style="width:40px;text-align:left;font-family:xinwei">'+(lib.storage.ladder.current+(_status.ladder_tmp?40:0))+'</div></div>');
						uiintro.add('<div class="text center">历史最高：<div style="width:40px;text-align:left;font-family:xinwei">'+lib.storage.ladder.top+'</div></div>');
						uiintro.content.lastChild.style.paddingBottom='8px';
						return uiintro;
					},180);
					_status.ladder=true;
					_status.ladder_mmr=0;
				}
				"step 1"
				if(event.current==game.me||(event.four_assign&&event.current.side==game.me.side)){
					var dialog=event.xdialog;
					if(!dialog){
						if(get.config('expand_dialog')){
							dialog=event.xdialog||ui.create.characterDialog(event.filterChoice,'expandall');
						}
						else{
							dialog=event.xdialog||ui.create.characterDialog(event.filterChoice);
						}
					}
					var names=[];
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].name){
							names.push(game.players[i].name);
						}
					}
					for(var i=0;i<dialog.buttons.length;i++){
						if(names.contains(dialog.buttons[i].link)){
							dialog.buttons[i].classList.add('unselectable');
							dialog.buttons[i].classList.add('noclick');
						}
					}
					game.me.chooseButton(dialog,true).closeDialog=false;
					event.xdialog=dialog;
					dialog.static=true;
					event.current.classList.add('selectedx');
				}
				else{
					event.ai(event.current,event.list.randomGets(3),event.list2);
					if(!event.four_assign){
						event.current=event.current.next;
						event.redo();
					}
				}
				"step 2"
				event.current.classList.remove('selectedx');
				if(event.current.side==game.me.side){
					event.current.init(result.buttons[0].link);
					event.list.remove(event.current.name);
					event.list2.remove(event.current.name);
					if(event.current.identity=='zhu'){
						event.current.hp++;
						event.current.maxHp++;
						event.current.update();
					}
				}
				if(event.four_assign){
					for(var i=0;i<game.players.length;i++){
						if(!game.players[i].name) break;
					}
					if(i<game.players.length){
						var side=event.current.side;
						event.current=_status.firstAct;
						if(event.flipassign){
							for(var iwhile=0;iwhile<8;iwhile++){
								event.current=event.current.next;
								if(event.current.side!=side&&!event.current.name){
									break;
								}
							}
						}
						else{
							for(var iwhile=0;iwhile<8;iwhile++){
								event.current=event.current.previous;
								if(event.current.side==side&&!event.current.name){
									break;
								}
							}
						}
						event.flipassign=!event.flipassign;
						event.goto(1);
					}
				}
				else{
					for(var i=0;i<game.players.length;i++){
						if(!game.players[i].name){
							event.ai(game.players[i],event.list.splice(0,3),event.list2);
						}
					}
				}
				"step 3"
				if(event.xdialog){
					event.xdialog.close();
				}
				game.addRecentCharacter(game.me.name,game.me.name2);
				ui.control.style.transitionDuration='0s';
				ui.refresh(ui.control);
				ui.arena.classList.remove('choose-character');
				setTimeout(function(){
					ui.control.style.transitionDuration='';
				},500);
			});
		},
		chooseCharacterThree:function(){
			var next=game.createEvent('chooseCharacter',false);
			next.setContent(function(){
				'step 0'
				if(lib.config.continue_name_versus_three){
					event.friendlist=lib.config.continue_name_versus_three.friend;
					event.enemylist=lib.config.continue_name_versus_three.enemy;
					_status.color=lib.config.continue_name_versus_three.color;
					game.additionaldead=[];
					game.saveConfig('continue_name_versus_three');
					event.goto(2);
				}
				else{
					game.chooseCharacterDouble(function(i){
						if(get.config('enable_all_three')){
							if(lib.filter.characterDisabled(i)) return false;
							return !lib.filter.characterDisabled(i);
						}
						else{
							return lib.choiceThree.contains(i);
						}
					},function(i){
						return i==1?'主帅':'前锋';
					});
				}
				"step 1"
				game.addRecentCharacter.apply(this,result.friend);
				event.friendlist=result.friend;
				event.enemylist=result.enemy;
				"step 2"
				_status.friendBackup=event.friendlist.slice(0);
				_status.enemyBackup=event.enemylist.slice(0);
				_status.coinCoeff=get.coinCoeff(event.friendlist);

				ui.create.players(6);
				for(var i=0;i<game.players.length;i++){
					game.players[i].getId();
					game.players[i].node.action.innerHTML='行动';
				}
				ui.arena.setNumber(7);
				for(var i=0;i<game.players.length;i++){
					game.players[i].dataset.position=parseInt(game.players[i].dataset.position)+1;
				}
				game.singleHandcard=true;
				ui.arena.classList.add('single-handcard');
				ui.window.classList.add('single-handcard');
				ui.fakeme=ui.create.div('.fakeme.avatar');
				_status.prepareArena=true;
				ui.create.me();
				ui.me.appendChild(ui.fakeme);

				game.friend=[];
				game.enemy=[];

				for(var i in lib.skill){
					if(lib.skill[i].changeSeat){
						lib.skill[i]={};
						if(lib.translate[i+'_info']){
							lib.translate[i+'_info']='固定位置时不可用';
						}
					}
				}
				for(i=0;i<game.players.length;i++){
					if(i<3){
						game.friend.push(game.players[i]);
					}
					else{
						game.enemy.push(game.players[i]);
					}
				}
				game.friendZhu=game.players[1];
				game.enemyZhu=game.players[4];
				for(var i=0;i<3;i++){
					game.friend[i].side=_status.color;
					game.enemy[i].side=!_status.color;
					if(game.friendZhu==game.friend[i]){
						game.friend[i].identity='zhu';
						game.friend[i].setIdentity(_status.color+'Zhu');
					}
					else{
						game.friend[i].identity='zhong';
						game.friend[i].setIdentity(_status.color+'Zhong');
					}
					if(game.enemyZhu==game.enemy[i]){
						game.enemy[i].identity='zhu';
						game.enemy[i].setIdentity(!_status.color+'Zhu');
					}
					else{
						game.enemy[i].identity='zhong';
						game.enemy[i].setIdentity(!_status.color+'Zhong');
					}
					game.friend[i].init(event.friendlist[i]);
					game.enemy[i].init(event.enemylist[i]);
					game.friend[i].node.identity.dataset.color=get.translation(_status.color+'Color');
					game.enemy[i].node.identity.dataset.color=get.translation(!_status.color+'Color');
				}
				game.friendZhu.maxHp++;
				game.friendZhu.hp++;
				game.friendZhu.update();

				game.enemyZhu.maxHp++;
				game.enemyZhu.hp++;
				game.enemyZhu.update();

				game.onSwapControl();
			});
		},
		chooseCharacter:function(){
			var next=game.createEvent('chooseCharacter',false);
			next.showConfig=true;
			next.setContent(function(){
				"step 0"
				if(lib.config.continue_name_versus){
					_status.friend=lib.config.continue_name_versus.friend;
					_status.enemy=lib.config.continue_name_versus.enemy;
					_status.color=lib.config.continue_name_versus.color;
					game.additionaldead=[];
					event.goto(1);
					game.saveConfig('continue_name_versus');
					return;
				}
				event.check=function(){
					this.dialog.classList.add('fullwidth');
					this.dialog.classList.add('fullheight');
					this.dialog.classList.add('noslide');
					for(var i=0;i<this.dialog.buttons.length;i++) this.dialog.buttons[i].style.opacity=1;
					this.dialog.add('选项');
					this.dialog.versus_zhu=this.dialog.add(ui.create.switcher('versus_zhu',lib.storage.zhu)).querySelector('.toggle');
					// this.dialog.versus_only_zhu=this.dialog.add(ui.create.switcher('versus_only_zhu',lib.storage.only_zhu)).querySelector('.toggle');
					this.dialog.versus_main_zhu=this.dialog.add(ui.create.switcher('versus_main_zhu',lib.storage.main_zhu)).querySelector('.toggle');
					if(lib.storage.zhu){
						// this.dialog.versus_only_zhu.parentNode.classList.remove('disabled');
						this.dialog.versus_main_zhu.parentNode.classList.remove('disabled');
					}
					else{
						// this.dialog.versus_only_zhu.parentNode.classList.add('disabled');
						this.dialog.versus_main_zhu.parentNode.classList.add('disabled');
					}
					// this.dialog.versus_cross_seat=this.dialog.add(ui.create.switcher('versus_cross_seat',lib.storage.cross_seat)).querySelector('.toggle');
					// this.dialog.versus_random_seat=this.dialog.add(ui.create.switcher('versus_random_seat',lib.storage.random_seat)).querySelector('.toggle');
					this.dialog.versus_noreplace_end=this.dialog.add(ui.create.switcher('versus_noreplace_end',lib.storage.noreplace_end)).querySelector('.toggle');
					this.dialog.versus_assign_enemy=this.dialog.add(ui.create.switcher('versus_assign_enemy',lib.storage.assign_enemy)).querySelector('.toggle');
					this.dialog.versus_single_control=this.dialog.add(ui.create.switcher('versus_single_control',lib.storage.single_control)).querySelector('.toggle');
					this.dialog.versus_first_less=this.dialog.add(ui.create.switcher('versus_first_less',get.config('first_less'))).querySelector('.toggle');
					this.dialog.versus_reward=this.dialog.add(ui.create.switcher('versus_reward',[0,1,2,3,4],lib.storage.versus_reward)).querySelector('.toggle');
					this.dialog.versus_punish=this.dialog.add(ui.create.switcher('versus_punish',['弃牌','无','摸牌'],lib.storage.versus_punish)).querySelector('.toggle');
					this.dialog.versus_seat_order=this.dialog.add(ui.create.switcher('seat_order',['对阵','交叉','随机'],lib.storage.seat_order)).querySelector('.toggle');
					this.dialog.versus_number=this.dialog.add(ui.create.switcher('versus_number',[1,2,3],lib.storage.number)).querySelector('.toggle');
					this.dialog.replace_number=this.dialog.add(ui.create.switcher('replace_number',[0,1,2,3,5,7,9,17],lib.storage.replace_number)).querySelector('.toggle');
					this.dialog.choice=this.dialog.add(ui.create.switcher('choice',[12,16,20,24,40,'∞'],lib.storage.choice)).querySelector('.toggle');

					// if(lib.storage.cross_seat){
					// 	this.dialog.versus_random_seat.parentNode.classList.add('disabled');
					// }
					// else{
					// 	this.dialog.versus_random_seat.parentNode.classList.remove('disabled');
					// 	if(lib.storage.random_seat){
					// 		this.dialog.versus_cross_seat.parentNode.classList.add('disabled');
					// 	}
					// 	else{
					// 		this.dialog.versus_cross_seat.parentNode.classList.remove('disabled');
					// 	}
					// }
				};
				event.confirm=function(){
					var dialog=event.dialog;
					var num=lib.storage.number+lib.storage.replace_number;
					_status.friend.splice(num);
					_status.enemy.splice(num);
					dialog.close();
					if(ui.confirm) ui.confirm.close();
					game.resume();
				};
				ui.control.style.transition='all 0s';
				if(get.is.phoneLayout()){
					ui.control.style.top='calc(100% - 80px)';
				}
				else if(game.layout=='newlayout'){
					ui.control.style.top='calc(100% - 30px)';
				}
				else{
					ui.control.style.top='calc(100% - 70px)';
				}
				_status.friend=[];
				_status.enemy=[];
				game.additionaldead=[];
				_status.color=Math.random()<0.5;
				var i,list=[];
				for(i in lib.character){
					if(lib.config.forbidversus.contains(i)) continue;
					if(lib.filter.characterDisabled(i)) continue;
					list.push(i);
				}
				var groupSort=function(name){
					if(lib.character[name][1]=='wei') return 0;
					if(lib.character[name][1]=='shu') return 1;
					if(lib.character[name][1]=='wu') return 2;
					if(lib.character[name][1]=='qun') return 3;
				}
				var sortByGroup=function(a,b){
					var del=groupSort(a)-groupSort(b);
					if(del!=0) return del;
					if(a.indexOf('_')!=-1){
						a=a.slice(a.indexOf('_')+1);
					}
					if(b.indexOf('_')!=-1){
						b=b.slice(b.indexOf('_')+1);
					}
					return a>b?1:-1;
				}
				if(lib.storage.choice=='∞'){
					list.sort(sortByGroup);
				}
				else{
					list.randomSort();
				}
				_status.list=list;
				var choice=(lib.storage.choice=='∞')?list.length:lib.storage.choice;
				event.dialog=ui.create.dialog('选择角色',[list.slice(0,choice),'character']);
				event.dialog.classList.add('fixed');
				// for(var i=0;i<event.dialog.buttons.length;i++){
				// 	event.dialog.buttons[i].style.transform='scale(0.95)';
				// }
				event.check();
				ui.create.cheat=function(){
					_status.createControl=event.fill;
					ui.cheat=ui.create.control('更换',function(){
						if(_status.choosefinished){
							return;
						}
						if(lib.storage.choice=='∞'){
							list.sort(sortByGroup);
						}
						else{
							list.randomSort();
						}
						_status.friend.length=0;
						_status.enemy.length=0;
						var choice=(lib.storage.choice=='∞')?list.length:lib.storage.choice;

						ui.dialog.content.firstChild.innerHTML='选择角色';
						var buttons=ui.create.div('.buttons');
						var node=_status.event.dialog.buttons[0].parentNode;
						_status.event.dialog.buttons=ui.create.buttons(list.slice(0,choice),'character',buttons);
						_status.event.dialog.content.insertBefore(buttons,node);
						buttons.animate('start');
						node.remove();

						// event.check();
					});
					delete _status.createControl;
				}
				if(!ui.cheat&&get.config('change_choice'))
				ui.create.cheat();
				if(lib.config.test_game){
					setTimeout(function(){
						event.switchToAuto();
					},500);
				}
				event.switchToAuto=function(){
					delete _status.choosefinished;
					event.fill.close();
					var buttons=_status.event.dialog.buttons.slice(0);
					buttons.randomSort();
					for(var i=0;i<buttons.length;i++){
						if(buttons[i].classList.contains('glow')||buttons[i].classList.contains('selectedx')){
							buttons.splice(i,1);i--;
						}
					}
					var dialog=_status.event.dialog;
					var max=dialog.versus_number.link+dialog.replace_number.link;
					for(var i=0;i<buttons.length;i++){
						if(_status.friend.length<max){
							_status.friend.push(buttons[i].link);
						}
						else if(_status.enemy.length<max){
							_status.enemy.push(buttons[i].link);
						}
						else{
							break;
						}
					}
					_status.friend.splice(max);
					_status.enemy.splice(max);
					dialog.close();
					if(ui.confirm) ui.confirm.close();
					game.resume();
				};
				event.fill=ui.create.control('补全',event.switchToAuto);
				event.custom.replace.button=function(button){
					if(_status.choose_enemy){
						if(button.classList.contains('glow')||button.classList.contains('selectedx')||_status.choosefinished) return;
						_status.choose_enemy=false;
						if(!_status.color){
							button.classList.add('selectedx');
							// button.style.transform='rotate(-3deg)';
						}
						else{
							button.classList.add('glow');
							// button.style.transform='rotate(-3deg)';
						}
						_status.enemy.push(button.link);
						var buttons=_status.event.dialog.buttons.slice(0);
						for(var i=0;i<buttons.length;i++){
							if(buttons[i].classList.contains('glow')||buttons[i].classList.contains('selectedx')){
								buttons.splice(i,1);i--;
							}
						}
					}
					else{
						if(button.classList.contains('glow')||button.classList.contains('selectedx')||_status.choosefinished) return;
						if(_status.color){
							button.classList.add('selectedx');
							// button.style.transform='rotate(-3deg)';
						}
						else{
							button.classList.add('glow');
							// button.style.transform='rotate(-3deg)';
						}
						_status.friend.push(button.link);
						var buttons=_status.event.dialog.buttons.slice(0);
						for(var i=0;i<buttons.length;i++){
							if(buttons[i].classList.contains('glow')||buttons[i].classList.contains('selectedx')){
								buttons.splice(i,1);i--;
							}
						}
						if(lib.storage.assign_enemy){
							_status.choose_enemy=true;
						}
						else{
							var button2=buttons[Math.floor(Math.random()*buttons.length)];
							if(_status.color){
								button2.classList.add('glow');
								// button2.style.transform='rotate(-3deg)';
							}
							else{
								button2.classList.add('selectedx');
								// button2.style.transform='rotate(-3deg)';
							}
							_status.enemy.push(button2.link);
							_status.event.dialog.content.firstChild.innerHTML='对方选择了'+get.translation(button2.link);
						}
					}
				};
				event.custom.add.window=function(){
					var dialog=_status.event.dialog;
					if(_status.friend.length==_status.enemy.length&&_status.friend.length>=dialog.versus_number.link+dialog.replace_number.link){
						event.fill.firstChild.innerHTML='开始';
						_status.choosefinished=true;
						if(ui.cheat){
							ui.cheat.close();
							delete ui.cheat;
						}
					}
					game.save('zhu',dialog.versus_zhu.link);
					if(lib.storage.zhu){
						// dialog.versus_only_zhu.parentNode.classList.remove('disabled');
						dialog.versus_main_zhu.parentNode.classList.remove('disabled');
					}
					else{
						// dialog.versus_only_zhu.parentNode.classList.add('disabled');
						dialog.versus_main_zhu.parentNode.classList.add('disabled');
					}
					// game.save('only_zhu',dialog.versus_only_zhu.link);
					game.save('main_zhu',dialog.versus_main_zhu.link);
					game.save('assign_enemy',dialog.versus_assign_enemy.link);
					game.save('seat_order',dialog.versus_seat_order.link);
					// game.save('cross_seat',dialog.versus_cross_seat.link);
					game.save('noreplace_end',dialog.versus_noreplace_end.link);
					game.save('single_control',dialog.versus_single_control.link);
					switch(lib.storage.seat_order){
						case '交叉':lib.storage.cross_seat=true;lib.storage.random_seat=false;break;
						case '随机':lib.storage.cross_seat=false;lib.storage.random_seat=true;break;
						default:lib.storage.cross_seat=false;lib.storage.random_seat=false;
					}
					game.saveConfig('first_less',dialog.versus_first_less.link,true);
					game.save('number',dialog.versus_number.link);
					game.save('versus_reward',dialog.versus_reward.link);
					game.save('versus_punish',dialog.versus_punish.link);
					game.save('replace_number',dialog.replace_number.link);
					game.save('choice',dialog.choice.link);
					var count,i;
					if(dialog.buttons.length>lib.storage.choice){
						count=dialog.buttons.length-lib.storage.choice;
						var removed=[];
						for(i=dialog.buttons.length-1;i>=0&&count>0;i--){
							if(dialog.buttons[i].classList.contains('target')==false&&
								dialog.buttons[i].classList.contains('glow')==false){
								dialog.buttons[i].remove();
								_status.list.remove(dialog.buttons[i].link);
								removed.push(dialog.buttons[i].link)
								dialog.buttons.splice(i,1);
								count--;
							}
						}
						for(i=0;i<removed.length;i++) _status.list.splice(lib.storage.choice,0,removed[i]);
					}
					else if(dialog.buttons.length<lib.storage.choice||lib.storage.choice=='∞'){
						var list=_status.list;
						var choice=(lib.storage.choice=='∞')?list.length:lib.storage.choice;
						var buttons=dialog.querySelector('.buttons');
						var button;
						for(i=dialog.buttons.length;i<choice;i++){
							button=ui.create.button(list[i],'character',buttons).animate('zoom')
							dialog.buttons.push(button);
							button.style.opacity=1;
						}
					}
				};
				game.pause();
				"step 1"
				_status.friendBackup=_status.friend.slice(0);
				_status.enemyBackup=_status.enemy.slice(0);

				_status.friendDied=[];
				_status.enemyDied=[];
				_status.totalCount=_status.friend.length;
				_status.coinCoeff=get.coinCoeff(_status.friend);

				// ui.auto.show();
				ui.wuxie.show();
				ui.control.style.display='none';
				setTimeout(function(){
					ui.control.style.top='';
					ui.control.style.display='';
					ui.control.style.transition='';
				},500);
				if(ui.cheat){
					ui.cheat.close();
					delete ui.cheat;
				}
				delete _status.list;
				var num=lib.storage.number;
				ui.create.players(num*2);
				for(var i=0;i<game.players.length;i++){
					game.players[i].getId();
					game.players[i].node.action.innerHTML='行动';
				}
				if(lib.storage.single_control&&game.players.length>=4){
					ui.arena.setNumber(parseInt(ui.arena.dataset.number)+1);
					for(var i=0;i<game.players.length;i++){
						game.players[i].dataset.position=parseInt(game.players[i].dataset.position)+1;
					}
					game.singleHandcard=true;
					ui.arena.classList.add('single-handcard');
					ui.window.classList.add('single-handcard');
					ui.fakeme=ui.create.div('.fakeme.avatar');
					// ui.fakeme.line=lib.element.player.line;
					// ui.fakemebg=ui.create.div('.avatar',ui.fakeme).hide();
				}
				_status.prepareArena=true;
				ui.create.me();
				if(ui.fakeme){
					ui.me.appendChild(ui.fakeme);
				}
				var position,i;
				if(lib.storage.zhu&&lib.storage.only_zhu) position=Math.ceil(num/2)-1;
				else position=Math.floor(Math.random()*num)
				game.friend=[];
				game.enemy=[];
				if(lib.storage.random_seat){
					var players=game.players.slice(0);
					game.friend.push(game.me);
					players.remove(game.me);
					for(i=0;i<num-1;i++){
						game.friend.push(players.randomRemove());
					}
					for(i=0;i<num;i++){
						game.enemy.push(players.randomRemove());
					}
				}
				else{
					for(var i in lib.skill){
						if(lib.skill[i].changeSeat){
							lib.skill[i]={};
							if(lib.translate[i+'_info']){
								lib.translate[i+'_info']='固定位置时不可用';
							}
						}
					}
					if(lib.storage.cross_seat){
						for(i=0;i<game.players.length;i++){
							if(i%2==0){
								game.friend.push(game.players[i]);
							}
							else{
								game.enemy.push(game.players[i]);
							}
						}
					}
					else{
						for(i=0;i<position;i++){
							game.friend.push(game.players[i-position+num*2]);
						}
						for(i=position;i<num;i++){
							game.friend.push(game.players[i-position]);
						}
						for(i=0;i<num;i++){
							game.enemy.push(game.players[num-position+i]);
						}
					}
				}
				if(((position==Math.ceil(num/2)-1&&lib.storage.zhu)||(lib.storage.zhu&&lib.storage.single_control))){
					var dialog=ui.create.dialog('按顺序选择出场角色',[_status.friend,'character']);
					game.me.chooseButton(dialog,num,true);
				}
				if(lib.storage.random_seat&&lib.storage.zhu){
					if(lib.storage.only_zhu){
						game.friendZhu=game.me;
					}
					else{
						game.friendZhu=game.friend.randomGet();
					}
					game.enemyZhu=game.enemy.randomGet();
				}
				for(i=0;i<num;i++){
					game.friend[i].side=_status.color;
					game.enemy[i].side=!_status.color;
					if(lib.storage.random_seat&&lib.storage.zhu){
						if(game.friendZhu==game.friend[i]){
							game.friend[i].identity='zhu';
							game.friend[i].setIdentity(_status.color+'Zhu');
						}
						else{
							game.friend[i].identity='zhong';
							game.friend[i].setIdentity(_status.color+'Zhong');
						}
						if(game.enemyZhu==game.enemy[i]){
							game.enemy[i].identity='zhu';
							game.enemy[i].setIdentity(!_status.color+'Zhu');
						}
						else{
							game.enemy[i].identity='zhong';
							game.enemy[i].setIdentity(!_status.color+'Zhong');
						}
					}
					else{
						if(game.me==game.friend[i]&&lib.storage.zhu){
							game.friend[i].identity='zhu';
							game.friend[i].setIdentity(_status.color+'Zhu');
							game.friendZhu=game.friend[i];
						}
						else{
							game.friend[i].identity='zhong';
							game.friend[i].setIdentity(_status.color+'Zhong');

						}
						if(lib.storage.zhu&&get.distance(game.enemy[i],game.me,'pure')==num){
							game.enemy[i].identity='zhu';
							game.enemy[i].setIdentity(!_status.color+'Zhu');
							game.enemyZhu=game.enemy[i];
						}
						else{
							game.enemy[i].identity='zhong';
							game.enemy[i].setIdentity(!_status.color+'Zhong');
						}
					}
					game.friend[i].node.identity.dataset.color=get.translation(_status.color+'Color');
					game.enemy[i].node.identity.dataset.color=get.translation(!_status.color+'Color');
					// game.friend[i].node.identity.style.backgroundColor=get.translation(_status.color+'Color');
					// game.enemy[i].node.identity.style.backgroundColor=get.translation(!_status.color+'Color');
				}
				if(lib.storage.zhu&&!game.enemyZhu){
					game.enemy[0].identity='zhu';
					game.enemy[0].setIdentity(!_status.color+'Zhu');
					game.enemyZhu=game.enemy[0];
				}
				"step 2"
				var num=lib.storage.number;
				if(result&&result.buttons){
					var list=[];
					for(i=0;i<result.buttons.length;i++){
						list.push(result.buttons[i].link);
						_status.friend.remove(result.buttons[i].link);
					}
					_status.friend=list.concat(_status.friend);
				}
				for(i=0;i<num;i++){
					game.friend[i].init(_status.friend[i]);
					game.enemy[i].init(_status.enemy[i]);

					game.friend[i].node.identity.dataset.color=get.translation(_status.color+'Color');
					game.enemy[i].node.identity.dataset.color=get.translation(!_status.color+'Color');
				}
				if(lib.storage.zhu&&lib.storage.main_zhu){
					game.friendZhu.maxHp++;
					game.friendZhu.hp++;
					game.friendZhu.update();

					game.enemyZhu.maxHp++;
					game.enemyZhu.hp++;
					game.enemyZhu.update();
				}
				_status.friend.splice(0,num);
				_status.enemy.splice(0,num);
				if(lib.storage.single_control&&game.players.length>=4){
					// ui.fakemebg.show();
					game.onSwapControl();
				}
			});
		},
		chooseCharacterOL:function(){
			switch(lib.configOL.versus_mode){
				case '1v1':game.chooseCharacterOL1();break;
				case '2v2':game.chooseCharacterOL2();break;
				case '3v3':game.chooseCharacterOL3();break;
				case '4v4':game.chooseCharacterOL4();break;
			}
		},
		chooseCharacterOL4:function(){
			var next=game.createEvent('chooseCharacter',false);
			next.setContent(function(){
				"step 0"
				var list=['zhong','ezhong','zhong','ezhong','zhong','ezhong','zhong','ezhong'];
				list[2*Math.floor(Math.random()*4)]='zhu';
				list[2*Math.floor(Math.random()*4)+1]='ezhu';
				if(!lib.configOL.four_cross) list.randomSort();

				var side=Math.random()<0.5;
				var map={};
				for(var i=0;i<8;i++){
					if(list[i][0]=='e'){
						game.players[i].side=side;
						game.players[i].identity=list[i].slice(1);
					}
					else{
						game.players[i].side=!side;
						game.players[i].identity=list[i];
					}
					map[game.players[i].playerid]=[game.players[i].side,game.players[i].identity];
				}
				var filterChoice=function(name){
					if(name=='zuoci') return true;
					if(!lib.choiceFour.contains(name)){
						return true;
					}
					if(lib.characterPack.refresh&&lib.characterPack.refresh[name]){
						if(!lib.configOL.characterPack.contains('refresh')) return true;
						return false;
					}
					if(lib.characterPack.standard&&lib.characterPack.standard[name]){
						if(!lib.configOL.characterPack.contains('standard')) return true;
						if(lib.configOL.characterPack.contains('refresh')&&lib.characterPack.refresh['re_'+name]) return true;
						return false;
					}
					if(lib.characterPack.shenhua&&lib.characterPack.shenhua[name]){
						if(!lib.configOL.characterPack.contains('shenhua')) return true;
						return false;
					}
					if(lib.characterPack.sp&&lib.characterPack.sp[name]){
						if(!lib.configOL.characterPack.contains('sp')) return true;
						return false;
					}
					if(lib.characterPack.yijiang&&lib.characterPack.yijiang[name]){
						if(!lib.configOL.characterPack.contains('yijiang')) return true;
						return false;
					}
					return true;
				}
				event.current=game.players.randomGet();
				_status.firstAct=event.current;
				event.flipassign=true;
				event.videoId=lib.status.videoId++;
				var func=function(filter,id,selected,map,choiceFour){
					lib.choiceFour=choiceFour;
					var dialog=ui.create.characterDialog(filter,'expandall').open();
					dialog.videoId=id;
					for(var i in map){
						var player=lib.playerOL[i];
						if(player){
							player.side=map[i][0];
							player.identity=map[i][1];
							player.setIdentity();
							player.node.identity.dataset.color=get.translation(player.side+'Color');
							if(player.identity=='zhu'){
								game[player.side+'Zhu']=player;
								player.isZhu=true;
							}
						}
					}
					ui.arena.classList.add('choose-character');
				};
				event.map=map;
				event.selected=[];
				game.broadcastAll(func,filterChoice,event.videoId,event.selected,map,lib.choiceFour);
				_status.onreconnect=[func,filterChoice,event.videoId,event.selected,map,lib.choiceFour];
				"step 1"
				game.broadcastAll(function(player){
					player.classList.add('selectedx');
				},event.current);
				event.current.chooseButton(true).set('filterButton',function(button){
					return !_status.event.selected.contains(button.link);
				}).set('ai',function(button){
					if(_status.event.player.identity=='zhu'){
						if(Math.random()<0.8){
							var info=lib.character[button.link];
							if(!info[4]||!info[4].contains('zhu')){
								return 0;
							}
						}
					}
					var seed=_status.event.seed;
					var rank=get.rank(button.link,true);
					if(seed>0.4){
						return (rank>=6)?Math.random():-Math.random();
					}
					else if(seed>0.1){
						return (rank>=4&&rank<6)?Math.random():-Math.random();
					}
					else{
						return (rank<4)?Math.random():-Math.random();
					}
				}).set('selected',_status.event.selected).set('dialog',event.videoId).set('seed',Math.random());
				"step 2"
				event.selected.push(result.links[0]);
				game.broadcastAll(function(player,name,zhu){
					player.classList.remove('selectedx');
					player.init(name);
				},event.current,result.links[0]);
				if(event.current.identity=='zhu'){
					event.current.hp++;
					event.current.maxHp++;
					event.current.update();
				}
				event.current.classList.remove('selectedx');
				for(var i=0;i<game.players.length;i++){
					if(!game.players[i].name) break;
				}
				if(i<game.players.length){
					var side=event.current.side;
					event.current=_status.firstAct;
					if(event.flipassign){
						for(var iwhile=0;iwhile<8;iwhile++){
							event.current=event.current.next;
							if(event.current.side!=side&&!event.current.name){
								break;
							}
						}
					}
					else{
						for(var iwhile=0;iwhile<8;iwhile++){
							event.current=event.current.previous;
							if(event.current.side==side&&!event.current.name){
								break;
							}
						}
					}
					event.flipassign=!event.flipassign;
					event.goto(1);
				}
				"step 3"
				_status.onreconnect=[function(){
					for(var i=0;i<game.players.length;i++){
						var player=game.players[i];
						if(player.identity=='zhu'){
							game[player.side+'Zhu']=player;
							player.isZhu=true;
						}
					}
				}]
				game.broadcastAll(function(id){
					var dialog=get.idDialog(id);
					if(dialog){
						dialog.close();
					}
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500);
				},event.videoId);
			});
		},
		chooseCharacterOL3:function(){
			var next=game.createEvent('chooseCharacterOL',false);
			next.setContent(function(){
				'step 0'
				game.additionaldead=[];
				game.broadcastAll(function(ref,bool){
					ui.arena.classList.add('choose-character');
					for(var i=0;i<6;i++){
						ref.side=bool;
						ref=ref.next;
						bool=!bool;
					}
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==game.me.side){
							game.players[i].node.identity.firstChild.innerHTML='友';
						}
						else{
							game.players[i].node.identity.firstChild.innerHTML='敌';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}
				},game.players[0],Math.random()<0.5);
				if(game.me.side==undefined){
					game.me.side=game.players[0].side;
				}
				_status.onreconnect=[function(){
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						if(players[i].side==game.me.side){
							players[i].node.identity.firstChild.innerHTML='友';
						}
						else{
							players[i].node.identity.firstChild.innerHTML='敌';
						}
					}
				}];
				var list=get.charactersOL();
				var choose=[];
				event.list=list;
				for(var i=0;i<game.players.length;i++){
					choose.push([game.players[i],['选择出场和备用武将',[list.randomRemove(5),'character']],2,true]);
				}
				game.me.chooseButtonOL(choose,function(player,result){
					if(game.online||player==game.me) player.init(result.links[0]);
				});
				'step 1'
				for(var i in result){
					if(result[i]=='ai'){
						result[i]=event.list.randomRemove(2);
					}
					else{
						result[i]=result[i].links;
					}
				}
				game.broadcastAll(function(result,func1,func2){
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500)
					_status.friendDied=[];
					_status.enemyDied=[];

					_status.friend=[];
					_status.enemy=[];

					_status.enemyCount=ui.create.system('杀敌: '+get.cnNumber(0,true),null,true);
					_status.friendCount=ui.create.system('阵亡: '+get.cnNumber(0,true),null,true);

					lib.setPopped(_status.friendCount,func1);
					lib.setPopped(_status.enemyCount,func2);

					for(var i in result){
						if(!lib.playerOL[i].name){
							lib.playerOL[i].init(result[i][0]);
						}
						if(lib.playerOL[i].side==game.me.side){
							_status.friend.push(result[i][1]);
						}
						else{
							_status.enemy.push(result[i][1]);
						}
					}
				},result,game.versusHoverFriend,game.versusHoverEnemy);
				_status.onreconnect=[function(list1,list2,list3,list4,side,func1,func2){
					if(side!=game.me.side){
						var tmp;
						tmp=list1;
						list1=list2;
						list2=tmp;
						tmp=list3;
						list3=list4;
						list4=tmp;
					}
					_status.friendDied=list1;
					_status.enemyDied=list2;

					_status.friend=list3;
					_status.enemy=list4;

					_status.enemyCount=ui.create.system('杀敌: '+get.cnNumber(_status.enemyDied.length,true),null,true);
					_status.friendCount=ui.create.system('阵亡: '+get.cnNumber(_status.friendDied.length,true),null,true);

					lib.setPopped(_status.friendCount,func1);
					lib.setPopped(_status.enemyCount,func2);

					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==game.me.side){
							game.players[i].node.identity.firstChild.innerHTML='友';
						}
						else{
							game.players[i].node.identity.firstChild.innerHTML='敌';
						}
					}
				},_status.friendDied,_status.enemyDied,
					_status.friend,_status.enemy,game.me.side,
					game.versusHoverFriend,game.versusHoverEnemy];
			});
		},
		chooseCharacterOL2:function(){
			var next=game.createEvent('chooseCharacterOL',false);
			next.setContent(function(){
				'step 0'
				game.broadcastAll(function(ref,bool,bool2){
					ref.side=bool;
					ref.next.side=bool2;
					ref.next.next.side=!bool;
					ref.previous.side=!bool2;
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==game.me.side){
							game.players[i].node.identity.firstChild.innerHTML='友';
						}
						else{
							game.players[i].node.identity.firstChild.innerHTML='敌';
						}
						game.players[i].node.identity.dataset.color=game.players[i].side+'zhu';
					}
					ui.arena.classList.add('choose-character');
				},game.players[0],Math.random()<0.5,Math.random()<0.5);
				_status.onreconnect=[function(){
					var players=game.players.concat(game.dead);
					for(var i=0;i<players.length;i++){
						if(players[i].side==game.me.side){
							players[i].node.identity.firstChild.innerHTML='友';
						}
						else{
							players[i].node.identity.firstChild.innerHTML='敌';
						}
					}
				}];
				var list=get.charactersOL();
				var choose=[];
				event.list=list;
				for(var i=0;i<game.players.length;i++){
					choose.push([game.players[i],['选择角色',[list.randomRemove(7),'character']],true]);
				}
				game.me.chooseButtonOL(choose,function(player,result){
					if(game.online||player==game.me) player.init(result.links[0]);
				});
				'step 1'
				for(var i in result){
					if(result[i]=='ai'){
						result[i]=event.list.randomRemove();
					}
					else{
						result[i]=result[i].links[0];
					}
					if(!lib.playerOL[i].name){
						lib.playerOL[i].init(result[i]);
					}
				}
				game.broadcast(function(result){
					for(var i in result){
						if(!lib.playerOL[i].name){
							lib.playerOL[i].init(result[i]);
						}
					}
					setTimeout(function(){
						ui.arena.classList.remove('choose-character');
					},500)
				},result);
				setTimeout(function(){
					ui.arena.classList.remove('choose-character');
				},500)
			});
		},
		chooseCharacterOL1:function(){
			var next=game.createEvent('chooseCharacterOL',false);
			next.setContent(function(){
				'step 0'
				game.removeCard('shengdong');
				game.additionaldead=[];
				var list=get.charactersOL();
				list=list.randomGets(parseInt(lib.configOL.choice_num));
				list.remove('huatuo');
				list.remove('sunquan');
				event.videoId=lib.status.videoId++;
				if(Math.random()<0.5){
					event.choosing=game.players[0];
				}
				else{
					event.choosing=game.players[1];
				}
				var createDialog=function(list,id,list1,list2){
					var dialog=ui.create.dialog('选择角色',[list,'character']);
					dialog.classList.add('fullwidth');
					dialog.classList.add('fullheight');
					dialog.classList.add('noslide');
					dialog.classList.add('fixed');
					dialog.videoId=id;
					if(list2&&list2){
						ui.arena.classList.add('playerhidden');
						for(var i=0;i<dialog.buttons.length;i++){
							var button=dialog.buttons[i];
							if(list1.contains(button.link)){
								button.classList.add('selectedx');
							}
							else if(list2.contains(button.link)){
								button.classList.add('glow');
							}
						}
					}
					else{
						if(list1!=game.me){
							dialog.content.firstChild.innerHTML='等待对手选择';
						}
					}
				};
				game.broadcastAll(createDialog,list,event.videoId,event.choosing);
				game.players[0].storage.versuslist=[];
				game.players[1].storage.versuslist=[];
				event.selected=[];
				_status.firstChoose=event.choosing;
				event.num=(parseInt(lib.configOL.replace_number)+1)*2;
				_status.onreconnect=[createDialog,list,event.videoId,
					_status.firstChoose.storage.versuslist,
					_status.firstChoose.next.storage.versuslist];
				game.broadcastAll(function(player){
					player.setIdentity('truezhu');
					player.next.setIdentity('falsezhu');
				},_status.firstChoose);
				'step 1'
				var next=event.choosing.chooseButton(event.videoId,1,true);
				next.set('filterButton',function(button){
					if(_status.event.selected.contains(button.link)) return false;
					return true;
				});
				next.set('selected',event.selected);
				next.set('ai',function(){
					return Math.random();
				});
				'step 2'
				event.choosing.storage.versuslist.push(result.links[0]);
				game.broadcastAll(function(link,choosing,first,id){
					var dialog=get.idDialog(id);
					if(dialog){
						if(choosing==game.me){
							choosing='你';
						}
						else{
							choosing='对手';
						}
						dialog.content.firstChild.innerHTML=choosing+'选择了'+get.translation(link);
						for(var i=0;i<dialog.buttons.length;i++){
							if(dialog.buttons[i].link==link){
								if(first){
									dialog.buttons[i].classList.add('selectedx');
								}
								else{
									dialog.buttons[i].classList.add('glow');
								}
							}
						}
					}
				},result.links[0],event.choosing,event.choosing==_status.firstChoose,event.videoId);
				event.selected.push(result.links[0]);
				event.choosing=event.choosing.next;
				event.num--;
				if(event.num){
					event.goto(1);
				}
				'step 3'
				game.delay(2)
				'step 4'
				game.broadcastAll(function(id){
					ui.arena.classList.remove('playerhidden');
					var dialog=get.idDialog(id);
					if(dialog){
						dialog.close();
					}
				},event.videoId);

				_status.friendDied=[];
				_status.enemyDied=[];

				_status.friend=game.players[0].storage.versuslist;
				_status.enemy=game.players[1].storage.versuslist;

				delete game.players[0].storage.versuslist;
				delete game.players[1].versuslist;

				_status.enemyCount=ui.create.system('杀敌: '+get.cnNumber(0,true),null,true);
				_status.friendCount=ui.create.system('阵亡: '+get.cnNumber(0,true),null,true);

				lib.setPopped(_status.friendCount,game.versusHoverFriend);
				lib.setPopped(_status.enemyCount,game.versusHoverEnemy);

				game.me.side=true;
				game.players[0].side=true;
				game.players[1].side=false;

				var func=function(list1,list2,list3,list4,func1,func2,playerid){
					if(game.me.playerid==playerid){
						game.me.side=true;
						game.me.next.side=false;
					}
					else{
						game.me.side=false;
						game.me.next.side=true;
					}

					if(game.me.side){
						_status.enemyDied=list1;
						_status.friendDied=list2;

						_status.enemy=list3;
						_status.friend=list4;
					}
					else{
						_status.friendDied=list1;
						_status.enemyDied=list2;

						_status.friend=list3;
						_status.enemy=list4;
					}

					_status.enemyCount=ui.create.system('杀敌: '+get.cnNumber(_status.enemyDied.length,true),null,true);
					_status.friendCount=ui.create.system('阵亡: '+get.cnNumber(_status.friendDied.length,true),null,true);

					lib.setPopped(_status.friendCount,func1);
					lib.setPopped(_status.enemyCount,func2);
				};
				_status.onreconnect=[func,_status.enemyDied,_status.friendDied,
					_status.enemy,_status.friend,game.versusHoverFriend,game.versusHoverEnemy,game.players[0].playerid];
				game.broadcast(func,_status.enemyDied,_status.friendDied,
					_status.enemy,_status.friend,game.versusHoverFriend,game.versusHoverEnemy,game.players[0].playerid);

				var list=[[game.players[0],['选择出场角色',[_status.friend,'character']]],[game.players[1],['选择出场角色',[_status.enemy,'character']]]];
				game.me.chooseButtonOL(list,function(player,result){
					if(game.online||player==game.me) player.init(result.links[0]);
				});
				'step 5'
				var result1;
				var friend=result[game.players[0].playerid];
				if(friend&&friend.links&&friend.links.length){
					result1=friend.links[0];
				}
				else{
					result1=_status.friend.randomGet();
				}
				var result2;
				var enemy=result[game.players[1].playerid];
				if(enemy&&enemy.links&&enemy.links.length){
					result2=enemy.links[0];
				}
				else{
					result2=_status.enemy.randomGet();
				}
				if(!game.players[0].name) game.players[0].init(result1);
				if(!game.players[1].name) game.players[1].init(result2);
				_status.friend.remove(result1);
				_status.enemy.remove(result2);
				game.broadcast(function(result1,result2){
					if(game.me.side){
						if(!game.me.name) game.me.init(result1);
						if(!game.me.next.name) game.me.next.init(result2);
						_status.friend.remove(result1);
						_status.enemy.remove(result2);
					}
					else{
						if(!game.me.name) game.me.init(result2);
						if(!game.me.next.name) game.me.next.init(result1);
						_status.friend.remove(result2);
						_status.enemy.remove(result1);
					}
				},result1,result2);
			});
		},
		phaseLoopThree:function(player){
			var next=game.createEvent('phaseLoop');
			next.player=player;
			next.swap=function(player){
				if(player.side==game.me.side){
					return game.enemyZhu;
				}
				else{
					return game.me;
				}
			};
			next.setContent(function(){
				'step 0'
				player.classList.add('acted');
				player.phase();
				'step 1'
				if(player.identity!='zhu'){
					for(var i=0;i<game.players.length;i++){
						if(game.players[i].side==player.side&&game.players[i].identity!='zhu'&&
							game.players[i]!=player&&!game.players[i].classList.contains('acted')){
							game.players[i].classList.add('acted');
							game.players[i].phase();
							break;
						}
					}
				}
				'step 2'
				var target=event.swap(player);
				var swap=[],swap2=[];
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].isOut()) continue;
					if(!game.players[i].classList.contains('acted')){
						if(game.players[i].side==target.side){
							swap.push(game.players[i]);
						}
						else{
							swap2.push(game.players[i]);
						}
					}
				}
				if(swap.length==0){
					if(swap2.length){
						target=event.swap(target);
						swap=swap2;
					}
					else{
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].isOut()) continue;
							game.players[i].classList.remove('acted');
						}
						event.redo();
						game.delay();
						return;
					}
				}
				if(swap.length==1){
					event.directresult=swap[0];
				}
				else{
					var rand=Math.random();
					var next=target.chooseTarget('选择行动的角色',true,function(card,player,target2){
						return target2.side==target.side&&!target2.classList.contains('acted');
					});
					next._triggered=null;
					next.includeOut=true;
					next.ai=function(target2){
						var num=0;
						if(target2.num('j')){
							num-=5;
						}
						if(target2.identity!='zhu'){
							for(var i=0;i<game.players.length;i++){
								if(game.players[i].identity!='zhu'&&game.players[i]!=target2&&
								game.players[i].side==target2.side&&game.players[i].num('j')){
									num-=2;
								}
							}
						}
						if(rand<1/3){
							num+=1/(target2.hp+1);
						}
						else if(rand<2/3){
							num+=target2.num('h')/5;
						}
						return num;
					}
				}
				'step 3'
				if(event.directresult){
					event.player=event.directresult;
					delete event.directresult;
				}
				else if(result.bool){
					event.player=result.targets[0];
				}
				event.goto(0);
			});
		},
		versusPhaseLoop:function(player){
			var next=game.createEvent('phaseLoop');
			next.player=player;
			next.setContent(function(){
				"step 0"
				if(lib.storage.zhu){
					player.classList.add('acted');
				}
				player.phase();
				"step 1"
				if(lib.storage.zhu){
					_status.currentSide=!_status.currentSide;
					_status.round++;
					if(_status.round>=2*Math.max(game.friend.length,game.enemy.length)){
						_status.round=0;
						for(var i=0;i<game.players.length;i++){
							game.players[i].classList.remove('acted');
						}
					}
					var list=(_status.currentSide==game.me.side)?game.friend.slice(0):game.enemy.slice(0);
					for(var i=0;i<list.length;i++){
						if(list[i].classList.contains('acted')||list[i].isOut()){
							list.splice(i,1);i--;
						}
					}
					if(list.length==0) event.redo();
					else if(list.length==1||(game.me!=game.friendZhu&&!lib.storage.single_control)||_status.currentSide!=game.me.side){
						list.sort(function(a,b){
							if(a.num('j')>b.num('j')) return 1;
							return a.hp-b.hp;
						})
						event.player=list[0];
						event.goto(0);
					}
					else{
						game.me.chooseTarget('选择要行动的角色',true,function(card,player,target){
							return (target.classList.contains('acted')==false&&target.side==game.me.side);
						}).includeOut=true;
					}
				}
				else{
					event.player=event.player.next;
					event.goto(0);
				}
				"step 2"
				event.player=result.targets[0];
				event.goto(0);
			});
		},
		phaseLoopJiange:function(){
			var next=game.createEvent('phaseLoop');
			next.num=0;
			next.setContent(function(){
				if(event.num>=8){
					event.num-=8;
				}
				var player=_status.actlist[event.num];
				if(player.isAlive()){
					player.phase();
				}
				event.num++;
				event.redo();
			});
		},
		replacePlayerOL:function(player){
			var next=game.createEvent('replacePlayer');
			next.source=player;
			next.setContent('replacePlayerOL');
		},
		replacePlayer:function(player){
			var next=game.createEvent('replacePlayer');
			next.source=player;
			next.setContent('replacePlayer');
		},
		replacePlayerTwo:function(player,character){
			var next=game.createEvent('replacePlayerTwo');
			next.source=player;
			next.character=character;
			next.setContent('replacePlayerTwo');
		},
		versusClickToSwap:function(e){
			if(_status.dragged) return;
			if(this.link==game.me){
				if(!this.classList.contains('buttonclick')){
					this.animate('buttonclick');
				}
			}
			else if(_status.event.player==game.me&&!_status.auto){
				game.me.popup('请稍后再换人');
				e.stopPropagation();
			}
			else{
				game.modeSwapPlayer(this.link);
			}
		},
		versusHoverEnemy:function(){
			var uiintro=ui.create.dialog('hidden');

			if(_status.enemyDied.length){
				uiintro.add('已阵亡');
				uiintro.add([_status.enemyDied,'character']);
			}

			uiintro.add('未上场');
			if(_status.enemy.length){
				uiintro.add([_status.enemy,'character']);
			}
			else{
				uiintro.add('（无）')
			}

			return uiintro;
		},
		versusHoverFriend:function(){
			var uiintro=ui.create.dialog('hidden');

			if(_status.friendDied.length){
				uiintro.add('已阵亡');
				uiintro.add([_status.friendDied,'character']);
			}

			uiintro.add('未上场');
			if(_status.friend.length){
				uiintro.add([_status.friend,'character']);
			}
			else{
				uiintro.add('（无）')
			}

			return uiintro;
		},
		versusHoverHandcards:function(){
			var uiintro=ui.create.dialog('hidden');

			for(var i=0;i<game.players.length;i++){
				if(game.players[i].side==game.me.side&&game.players[i]!=game.me){
					uiintro.add(get.translation(game.players[i]));
					var cards=game.players[i].get('h');
					if(cards.length){
						uiintro.addSmall(cards,true);
					}
					else{
						uiintro.add('（无）');
					}
				}
			}

			return uiintro;
		},
		versusCheckEnemy:function(){
			_status.clicked=true;
			if(ui.intro){
				ui.intro.close();
				if(ui.intro.source=='versusCheckEnemy'){
					delete ui.intro;
					ui.control.show();
					game.resume2();
					return;
				}
			}
			game.pause2();
			ui.control.hide();
			ui.intro=ui.create.dialog();
			ui.intro.source='versusCheckEnemy';

			if(_status.enemyDied.length){
				ui.intro.add('已阵亡');
				ui.intro.add([_status.enemyDied,'character']);
			}

			ui.intro.add('未上场');
			if(_status.enemy.length){
				ui.intro.add([_status.enemy,'character']);
			}
			else{
				ui.intro.add('（无）')
			}
		},
		versusCheckFriend:function(){
			_status.clicked=true;
			if(ui.intro){
				ui.intro.close();
				if(ui.intro.source=='versusCheckFriend'){
					delete ui.intro;
					ui.control.show();
					game.resume2();
					return;
				}
			}
			game.pause2();
			ui.control.hide();
			ui.intro=ui.create.dialog();
			ui.intro.source='versusCheckFriend';




			if(_status.friendDied.length){
				ui.intro.add('已阵亡');
				ui.intro.add([_status.friendDied,'character']);
			}

			ui.intro.add('未上场');
			if(_status.friend.length){
				ui.intro.add([_status.friend,'character']);
			}
			else{
				ui.intro.add('（无）')
			}
		},
		versusSwapPlayer:function(){
			if(ui.intro){
				ui.intro.close();
				if(ui.intro.source=='versusSwapPlayer'){
					delete ui.intro;
					ui.control.show();
					game.resume2();
					return;
				}
			}
			if((_status.event.player==game.me&&_status.paused)||_status.paused2){
				game.me.popup('请稍后再换人');
			}
			else{
				_status.clicked=true;
				if(ui.intro){
					ui.intro.close();
					if(ui.intro.source==this.parentNode){
						delete ui.intro;
						ui.control.show();
						game.resume2();
						return;
					}
				}
				game.pause2();
				ui.control.hide();
				ui.intro=ui.create.dialog();
				ui.intro.source='versusSwapPlayer';
				var players=[];
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].side==game.me.side&&game.players[i]!=game.me){
						players.push(game.players[i]);
					}
				}
				ui.intro.add(players,true);
				var buttons=ui.intro.querySelectorAll('.button');
				for(var i=0;i<buttons.length;i++){
					buttons[i].addEventListener(lib.config.touchscreen?'touchend':'click',game.versusClickToSwap);
				}
			}
		},
		switchAutoreplace:function(e){
			e.stopPropagation();
			this.classList.toggle('on');
			game.save('autoreplaceinnerhtml',this.classList.contains('on'));
		},
		onSwapControl:function(){
			game.addVideo('onSwapControl');
			var name=game.me.name;
			if(ui.fakeme&&ui.fakeme.current!=name){
				ui.fakeme.current=name;
				if(ui.versushighlight&&ui.versushighlight!=game.me){
					ui.versushighlight.classList.remove('current_action');
				}
				ui.versushighlight=game.me;
				game.me.classList.add('current_action');

				ui.fakeme.style.backgroundImage=game.me.node.avatar.style.backgroundImage;
			}
		},
		modeSwapPlayer:function(player){
			game.swapControl(player);
			game.onSwapControl();
		},
		updateLineMe:function(opacity,player){
			if(!player){
				player=game.me;
			}
			ui.lineme.width=ui.window.offsetWidth;
			ui.lineme.height=ui.window.offsetHeight;

			var ctx=ui.linemectx;
			ctx.shadowBlur=5;
			ctx.shadowColor='rgba(0,0,0,0.3)';
			ctx.fillStyle='white';
			if(typeof opacity!='number'){
				opacity=0.5;
			}
			ctx.strokeStyle='rgba(255,255,255,'+opacity+')';
			ctx.lineWidth=3;
			ctx.setLineDash([8,2]);

			ctx.beginPath();

			var startx,endx,pos;
			var endy=game.me.offsetHeight/2+game.me.offsetTop+ui.arena.offsetTop;
			var starty=ui.me.offsetTop+ui.arena.offsetTop+ui.me.offsetHeight/2;
			if(game.me.offsetLeft+game.me.offsetWidth/2<=ui.arena.offsetWidth/2){
				startx=ui.me.offsetLeft+ui.arena.offsetLeft;
				endx=game.me.offsetLeft+ui.arena.offsetLeft;
				pos=-1;
			}
			else{
				startx=ui.me.offsetLeft+ui.arena.offsetLeft+ui.me.offsetWidth;
				endx=game.me.offsetWidth+game.me.offsetLeft+ui.arena.offsetLeft;
				pos=1;
			}
			ctx.moveTo(startx,starty);
			startx+=pos*ui.arena.offsetLeft/2;
			ctx.quadraticCurveTo(startx,starty,startx,starty-(starty-endy)/2);
			ctx.quadraticCurveTo(startx,endy,endx,endy);
			ctx.stroke();
		},
	},
	cardsThree:[
		["spade",7,"sha"],
		["spade",8,"sha"],
		["spade",8,"sha"],
		["spade",9,"sha"],
		["spade",9,"sha"],
		["spade",10,"sha"],
		["spade",10,"sha"],
		["club",2,"sha"],
		["club",3,"sha"],
		["club",4,"sha"],
		["club",5,"sha"],
		["club",6,"sha"],
		["club",7,"sha"],
		["club",8,"sha"],
		["club",8,"sha"],
		["club",9,"sha"],
		["club",9,"sha"],
		["club",10,"sha"],
		["club",10,"sha"],
		["club",11,"sha"],
		["club",11,"sha"],
		["heart",10,"sha"],
		["heart",10,"sha"],
		["heart",11,"sha"],
		["diamond",6,"sha"],
		["diamond",7,"sha"],
		["diamond",8,"sha"],
		["diamond",9,"sha"],
		["diamond",10,"sha"],
		["diamond",13,"sha"],
		["heart",2,"shan"],
		["heart",2,"shan"],
		["heart",13,"shan"],
		["diamond",2,"shan"],
		["diamond",2,"shan"],
		["diamond",3,"shan"],
		["diamond",4,"shan"],
		["diamond",5,"shan"],
		["diamond",6,"shan"],
		["diamond",7,"shan"],
		["diamond",8,"shan"],
		["diamond",9,"shan"],
		["diamond",10,"shan"],
		["diamond",11,"shan"],
		["diamond",11,"shan"],
		["heart",3,"tao"],
		["heart",4,"tao"],
		["heart",6,"tao"],
		["heart",7,"tao"],
		["heart",8,"tao"],
		["heart",9,"tao"],
		["heart",12,"tao"],
		["diamond",12,"tao"],

		["spade",2,"bagua"],
		["club",2,"bagua"],
		["spade",5,"jueying"],
		["club",5,"dilu"],
		["heart",13,"zhuahuang"],
		["heart",5,"chitu"],
		["spade",13,"dawan"],
		["diamond",13,"zixin"],
		["club",1,"zhuge"],
		["diamond",1,"zhuge"],
		["spade",2,"cixiong"],
		["spade",6,"qinggang"],
		["spade",5,"qinglong"],
		["spade",12,"zhangba"],
		["diamond",5,"guanshi"],
		["diamond",12,"fangtian"],
		["heart",5,"qilin"],

		["heart",3,"wugu"],
		["heart",4,"wugu"],
		["heart",1,"taoyuan"],
		["spade",7,"nanman"],
		["spade",13,"nanman"],
		["club",7,"nanman"],
		["heart",1,"wanjian"],
		["spade",1,"juedou"],
		["club",1,"juedou"],
		["diamond",1,"juedou"],
		["heart",7,"wuzhong"],
		["heart",8,"wuzhong"],
		["heart",9,"wuzhong"],
		["heart",11,"wuzhong"],
		["spade",3,'shunshou'],
		["spade",4,'shunshou'],
		["spade",11,'shunshou'],
		["diamond",3,'shunshou'],
		["diamond",4,'shunshou'],
		["spade",3,'guohe'],
		["spade",4,'guohe'],
		["spade",12,'guohe'],
		["club",3,'guohe'],
		["club",4,'guohe'],
		["heart",12,'guohe'],
		["club",12,'jiedao'],
		["club",13,'jiedao'],
		["spade",11,'wuxie'],
		["club",12,'wuxie'],
		["club",13,'wuxie'],
		["spade",6,'lebu'],
		["club",6,'lebu'],
		["heart",6,'lebu'],
		["spade",1,'hanbing'],
		["club",2,'renwang'],

		["heart",4,"sha","fire"],
		["heart",7,"sha","fire"],
		["heart",10,"sha","fire"],
		["diamond",4,"sha","fire"],
		["diamond",5,"sha","fire"],
		["spade",4,"sha","thunder"],
		["spade",5,"sha","thunder"],
		["spade",6,"sha","thunder"],
		["spade",7,"sha","thunder"],
		["spade",8,"sha","thunder"],
		["club",5,"sha","thunder"],
		["club",6,"sha","thunder"],
		["club",7,"sha","thunder"],
		["club",8,"sha","thunder"],
		["heart",8,"shan"],
		["heart",9,"shan"],
		["heart",11,"shan"],
		["heart",12,"shan"],
		["diamond",6,"shan"],
		["diamond",7,"shan"],
		["diamond",8,"shan"],
		["diamond",10,"shan"],
		["diamond",11,"shan"],
		["heart",5,"tao"],
		["heart",6,"tao"],
		["diamond",2,"tao"],
		["diamond",3,"tao"],
		["diamond",9,"jiu"],
		["spade",3,"jiu"],
		["spade",9,"jiu"],
		["club",3,"jiu"],
		["club",9,"jiu"],

		["diamond",13,"hualiu"],
		["club",1,"baiyin"],
		["spade",2,"tengjia",'fire'],
		["spade",1,"guding"],
		["diamond",1,"zhuque",'fire'],

		["heart",2,"huogong","fire"],
		["heart",3,"huogong","fire"],
		["diamond",12,"huogong","fire"],
		["spade",11,"tiesuo"],
		["spade",12,"tiesuo"],
		["club",10,"tiesuo"],
		["club",11,"tiesuo"],
		["club",12,"tiesuo"],
		["club",13,"tiesuo"],
		["heart",13,"wuxie"],
		["heart",13,"wuxie"],
		["spade",13,"wuxie"],
		["spade",10,"bingliang"],
		["club",4,"bingliang"],
	],
	choiceThree:[
		'sunquan','re_ganning','re_huanggai','re_zhouyu','re_daqiao','re_luxun','sunshangxiang',
		're_liubei','re_zhangfei','zhugeliang','re_zhaoyun','re_machao','huangyueying',
		're_caocao','re_simayi','re_zhangliao','re_xuzhu','re_guojia','zhenji','re_lidian',
		're_gongsunzan','diaochan','re_huatuo',
		'xiaoqiao',
		'dianwei',
		'xuhuang','sunjian',
		'dengai','jiangwei','sunce',
		'xin_masu','lingtong','xusheng','chengong',
		'xunyou','wangyi',
		'guyong','caifuren',
		'zhugejin','dingfeng',
	],
	choiceFour:[
		'sunquan','re_ganning','re_lvmeng','re_zhouyu','re_daqiao','re_luxun','sunshangxiang',
		're_liubei','re_guanyu','re_zhangfei','zhugeliang','re_zhaoyun','re_machao','huangyueying','re_xushu',
		're_caocao','re_simayi','re_xiahoudun','re_zhangliao','re_xuzhu','re_guojia','zhenji','re_lidian',
		're_lvbu','diaochan','re_huatuo',
		'xiahouyuan','huangzhong','xiaoqiao',
		'dianwei','pangtong','sp_zhugeliang','taishici','pangde','yanwen',
		'xuhuang','sunjian','jiaxu','dongzhuo',
		'zhanghe','dengai','jiangwei','liushan','sunce',
		'caozhi','zhangchunhua','xin_masu','xin_fazheng','xin_xushu','lingtong','wuguotai','xusheng','chengong','gaoshun',
		'xunyou','wangyi','zhonghui','madai','liaohua','chengpu','handang','bulianshi',
		'jianyong','panzhangmazhong','yufan','xin_liru','fuhuanghou',
		'caozhen','chenqun','hanhaoshihuan','wuyi','zhoucang','guyong','sunluban','jushou','caifuren',
		'caoxiu','liuchen','gongsunyuan',
		'guohuanghou','liyan','cenhun','liuyu',
		'sp_caiwenji','yuejin','sp_jiangwei','simalang','chengyu','caoang','wangji','wenpin',
		'zhugedan','mizhu','mayunlu','zhugeke','zumao','dingfeng','sunhao','zhanglu','hetaihou'
	],
	translate:{
		zhu:'主',
		zhong:'忠',
		truezhu:"帅",
		falsezhu:"将",
		trueZhu:"帅",
		falseZhu:"将",
		trueZhong:"兵",
		falseZhong:"卒",
		trueColor:"zhu",
		falseColor:"wei",
		versus_zhu_config:'启用主将',
		versus_only_zhu_config:'只当主将',
		versus_main_zhu_config:'主将死亡后结束',
		versus_assign_enemy_config:'指定对手',
		versus_cross_seat_config:'交叉座位',
		versus_random_seat_config:'随机座位',
		versus_noreplace_end_config:'无替补时结束',
		versus_single_control_config:'单人控制',
		seat_order_config:'座位排列',
		versus_first_less_config:'先手少摸牌',
		versus_reward_config:'杀敌摸牌',
		versus_punish_config:'杀死队友',
		versus_number_config:'对阵人数',
		replace_number_config:'替补人数',
		choice_config:'候选人数',
		mode_versus_character_config:'剑阁武将',

		boss_liedixuande:'烈帝玄德',
		boss_gongshenyueying:'工神月英',
		boss_tianhoukongming:'天侯孔明',
		boss_yuhuoshiyuan:'浴火士元',
		boss_qiaokuijunyi:'巧魁儁乂',
		boss_jiarenzidan:'佳人子丹',
		boss_duanyuzhongda:'断狱仲达',
		boss_juechenmiaocai:'绝尘妙才',

		boss_jileibaihu:'机雷白虎',
		boss_yunpingqinglong:'云屏青龙',
		boss_lingjiaxuanwu:'灵甲玄武',
		boss_chiyuzhuque:'炽羽朱雀',
		boss_fudibian:'缚地狴犴',
		boss_tuntianchiwen:'吞天螭吻',
		boss_shihuosuanni:'食火狻猊',
		boss_lieshiyazi:'裂石睚眦',

		boss_lianyujg:'炼狱',
		boss_lianyujg_info:'结束阶段，你可以对所有敌方角色造成1点火焰伤害',
		boss_didongjg:'地动',
		boss_didongjg_info:'结束阶段，你可以选择一名敌方角色将其武将牌翻面',
		boss_mojianjg:'魔箭',
		boss_mojianjg_info:'出牌阶段开始时，你可以对所有敌方角色使用一张万箭齐发',
		boss_jiguan:'机关',
		boss_jiguan_info:'锁定技，你不能成为【乐不思蜀】的目标',
		boss_lingyu:'灵愈',
		boss_lingyu_info:'结束阶段，你可以将自己的武将牌翻面，然后令所有已受伤的己方其他角色回复1点体力',
		boss_tianyun:'天陨',
		boss_tianyun_info:'结束阶段，你可以失去1点体力，然后令一名敌方角色受到2点火焰伤害并弃置其装备区里的所有牌',
		boss_zhenwei:'镇卫',
		boss_zhenwei_info:'锁定技，其他己方角色的防御距离+1',
		boss_benlei:'奔雷',
		boss_benlei_info:'锁定技，准备阶段，对敌方攻城器械造成2点雷电伤害',
		boss_nailuo:'奈落',
		boss_nailuo_info:'结束阶段，你可以将你的武将牌翻面，令所有敌方角色弃置装备区内的所有牌',
		boss_tanshi:'贪食',
		boss_tanshi_info:'锁定技，结束阶段开始时，你须弃置一张手牌',
		boss_tunshi:'吞噬',
		boss_tunshi_info:'锁定技，准备阶段，你对所有手牌数量大于你的敌方角色造成1点伤害',
		boss_yuhuojg:'浴火',
		boss_yuhuojg_info:'锁定技，每当你受到火焰伤害时，防止此伤害',
		boss_qiwu:'栖梧',
		boss_qiwu_info:'每当你使用一张梅花牌，你可以令一名友方角色回复一点体力',
		boss_tianyujg:'天狱',
		boss_tianyujg_info:'锁定技，结束阶段，你令所有未横置的敌方角色横置',
		boss_gongshenjg:'工神',
		boss_gongshenjg_info:'结束阶段，若已方器械已受伤，你可以为其回复一点体力；否则你可以对敌方器械造成一点火焰伤害',
		boss_zhinang:'智囊',
		boss_zhinang_info:'准备阶段，你可以亮出牌堆顶的三张牌，你可以将其中锦囊或装备牌交给一名己方角色',
		boss_jingmiao:'精妙',
		boss_jingmiao_info:'锁定技，每当敌方角色使用的无懈可击生效后，你令其失去1点体力',
		boss_biantian:'变天',
		boss_biantian_info:'锁定技，准备阶段，你进行一次判定，若为红色，直到下个回合开始前，令敌方所有角色处于“狂风”状态，若为黑桃，直到下个回合开始前，令己方所有角色处于“大雾”状态',
        boss_biantian2:'大雾',
        boss_biantian3:'狂风',
		boss_lingfeng:'灵锋',
		boss_lingfeng_info:'摸牌阶段，你可以改为亮出牌堆顶的两张牌，然后获得之，若这些牌的颜色不同，你令一名敌方角色失去1点体力',
		boss_jizhen:'激阵',
		boss_jizhen_info:'锁定技，结束阶段，你令所有已受伤的己方角色摸一张牌',
		boss_huodi:'惑敌',
		boss_huodi_info:'结束阶段，若有武将牌背面朝上的己方角色，你可以令一名敌方角色将其身份牌翻面',
		boss_jueji:'绝汲',
		boss_jueji_info:'敌方角色摸牌阶段，若其已受伤，你可以令其少摸一张牌',
		boss_chuanyun:'穿云',
		boss_chuanyun_info:'结束阶段，你可以对体力比你多的一名其他角色造成1点伤害',
		boss_leili:'雷厉',
		boss_leili_info:'每当你的[杀]造成伤害后，你可以对另一名敌方角色造成1点雷电伤害',
		boss_fengxing:'风行',
		boss_fengxing_info:'准备阶段，你可以选择一名敌方角色，若如此做，视为对其使用了一张[杀]',
		boss_skonghun:'控魂',
		boss_skonghun_info:'出牌阶段开始时，若你已损失体力值不小于敌方角色数，你可以对所有敌方角色各造成1点雷电伤害，然后你恢复X点体力（X为受到伤害的角色数）',
		boss_fanshi:'反噬',
		boss_fanshi_info:'锁定技，结束阶段，你失去1点体力',
		boss_xuanlei:'玄雷',
		boss_xuanlei_info:'锁定技，准备阶段，令所有判定区内有牌的敌方角色受到1点雷电伤害',
		boss_chiying:'持盈',
		boss_chiying_info:'锁定技，每当己方角色受到多于1伤害时，你防止其余伤害',
		boss_jingfan:'惊帆',
		boss_jingfan_info:'锁定技，己方其他角色的进攻距离+1',
	},
	skill:{
		boss_didongjg:{
			trigger:{player:'phaseEnd'},
			direct:true,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('boss_didongjg'),function(card,player,target){
					return target.isEnemyOf(player);
				}).ai=function(target){
					var att=ai.get.attitude(player,target);
					if(target.isTurnedOver()){
						if(att>0){
							return att+5;
						}
						return -1;
					}
					if(player.isTurnedOver()){
						return 5-att;
					}
					return -att;
				};
				"step 1"
				if(result.bool){
					player.logSkill('boss_didongjg',result.targets);
					result.targets[0].turnOver();
				}
			},
			ai:{
				threaten:1.7
			}
		},
		boss_lianyujg:{
			trigger:{player:'phaseEnd'},
			unique:true,
			content:function(){
				"step 0"
				event.players=get.players(player);
				"step 1"
				if(event.players.length){
					var current=event.players.shift();
					if(current.isEnemyOf(player)){
						player.line(current,'fire');
						current.damage('fire');
					}
					event.redo();
				}
			},
			ai:{
				threaten:2
			}
		},
		boss_mojianjg:{
			trigger:{player:'phaseUseBegin'},
			content:function(){
				var list=game.filterPlayer(function(current){
					return player.canUse('wanjian',current)&&current.isEnemyOf(player);
				});
				list.sort(lib.sort.seat);
				player.useCard({name:'wanjian'},list);
			},
			ai:{
				threaten:1.8
			}
		},
		boss_qiwu:{
			audio:true,
			trigger:{player:'useCard'},
			direct:true,
			filter:function(event,player){
				if(get.suit(event.card)=='club'){
					return game.hasPlayer(function(current){
						return current.isFriendOf(player)&&current.isDamaged();
					});
				}
				return false;
			},
			content:function(){
				"step 0"
				var noneed=(trigger.card.name=='tao'&&trigger.targets[0]==player&&player.hp==player.maxHp-1);
				player.chooseTarget(get.prompt('boss_qiwu'),function(card,player,target){
					return target.hp<target.maxHp&&target.isFriendOf(player);
				}).ai=function(target){
					var num=ai.get.attitude(player,target);
					if(num>0){
						if(noneed&&player==target){
							num=0.5;
						}
						else if(target.hp==1){
							num+=3;
						}
						else if(target.hp==2){
							num+=1;
						}
					}
					return num;
				}
				"step 1"
				if(result.bool){
					player.logSkill('qiwu',result.targets);
					result.targets[0].recover();
				}
			},
			ai:{
				expose:0.3,
				threaten:1.5
			}
		},
		boss_tianyujg:{
			audio:true,
			trigger:{player:'phaseEnd'},
            forced:true,
            filter:function(event,player){
				return game.hasPlayer(function(current){
					return current.isEnemyOf(player)&&!current.isLinked();
				});
            },
            content:function(){
                "step 0"
                event.targets=game.filterPlayer();
                event.targets.sort(lib.sort.seat);
                "step 1"
                if(event.targets.length){
                    var target=event.targets.shift();
                    if(!target.isLinked()&&target.isEnemyOf(player)){
						player.line(target,'green');
                        target.link();
                    }
                    event.redo();
                }
            }
		},
		boss_jueji:{
			audio:2,
            trigger:{global:'phaseDrawBegin'},
            filter:function(event,player){
				if(event.player.isFriendOf(player)){
					return false;
				}
                return event.num>0&&event.player!=player&&event.player.hp<event.player.maxHp;
            },
			logTarget:'player',
            content:function(){
				player.line(trigger.player,'green');
                trigger.num--;
            },
            ai:{
                expose:0.2,
                threaten:1.4
            }
        },
		boss_huodi:{
			audio:2,
			trigger:{player:'phaseEnd'},
			direct:true,
			filter:function(event,player){
				return game.hasPlayer(function(current){
					return current.isFriendOf(player)&&current.isTurnedOver();
				});
			},
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('boss_huodi'),function(card,player,target){
					return !target.isFriendOf(player);
				}).ai=function(target){
					if(target.isTurnedOver()) return 0;
					return -ai.get.attitude(player,target);
				};
				"step 1"
				if(result.bool){
					player.logSkill('boss_huodi',result.targets);
					result.targets[0].turnOver();
				}
			},
			ai:{
				expose:0.2
			}
		},
		boss_chuanyun:{
			audio:true,
			trigger:{player:'phaseEnd'},
			direct:true,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('boss_chuanyun'),function(card,player,target){
					return player.hp<target.hp;
				}).ai=function(target){
					return ai.get.damageEffect(target,player,player);
				}
				"step 1"
				if(result.bool){
					player.logSkill('boss_chuanyun',result.targets);
					result.targets[0].damage();
				}
			},
		},
		boss_leili:{
			audio:2,
			trigger:{source:'damageEnd'},
			direct:true,
			filter:function(event){
				return event.card&&event.card.name=='sha';
			},
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('boss_leili'),function(card,player,target){
					if(target==trigger.player) return false;
					return target.isEnemyOf(player);
				}).ai=function(target){
					return ai.get.damageEffect(target,player,player,'thunder');
				}
				"step 1"
				if(result.bool){
					player.logSkill('boss_leili',result.targets);
					result.targets[0].damage('thunder');
				}
			},
			ai:{
				expose:0.2,
				threaten:1.3
			}
		},
		boss_fengxing:{
			audio:true,
			trigger:{player:'phaseBegin'},
			direct:true,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('boss_fengxing'),function(card,player,target){
					if(target.isFriendOf(player)) return false;
					return lib.filter.targetEnabled({name:'sha'},player,target);
				}).ai=function(target){
					return ai.get.effect(target,{name:'sha'},player);
				}
				"step 1"
				if(result.bool){
					player.logSkill('boss_fengxing');
					player.useCard({name:'sha'},result.targets,false);
				}
			},
			ai:{
				expose:0.2,
				threaten:1.3
			}
		},
		boss_xuanlei:{
			audio:true,
            trigger:{player:'phaseBegin'},
            forced:true,
            filter:function(event,player){
				return game.hasPlayer(function(current){
					return current.isEnemyOf(player)&&current.num('j');
				});
            },
            content:function(){
                "step 0"
                event.targets=game.filterPlayer(function(current){
					return current.isEnemyOf(player)&&current.num('j');
				});
                event.targets.sort(lib.sort.seat);
				player.line(event.targets,'thunder');
                "step 1"
                if(event.targets.length){
                    event.targets.shift().damage('thunder');
                    event.redo();
                }
            }
        },
		boss_fanshi:{
			audio:true,
            trigger:{player:'phaseEnd'},
            forced:true,
            check:function(){
                return false;
            },
            content:function(){
                player.loseHp();
            }
        },
		boss_skonghun:{
			audio:true,
			trigger:{player:'phaseUseBegin'},
			filter:function(event,player){
				var num=player.maxHp-player.hp;
				if(num==0) return false;
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].side!=player.side){
						num--;
					}
				}
				return num>=0;
			},
			forced:true,
			content:function(){
				'step 0'
				var targets=game.filterPlayer(function(current){
					return current.isEnemyOf(player);
				});
				targets.sort(lib.sort.seat);
				event.targets=targets;
				player.line(targets,'thunder');
				event.num=targets.length;
				'step 1'
				if(event.targets.length){
					event.targets.shift().damage('thunder');
					event.redo();
				}
				'step 2'
				player.recover(event.num);
			},
			ai:{
				threaten:function(player,target){
					if(target.hp==1) return 2;
					if(target.hp==2&&game.players.length<8) return 1.5;
					return 0.5;
				},
			}
		},
		boss_chiying:{
			audio:2,
            trigger:{global:'damageBegin'},
            forced:true,
            filter:function(event,player){
                if(event.num<=1) return false;
				return event.player.isFriendOf(player);
            },
            priority:-11,
            content:function(){
                trigger.num=1;
            }
        },
		boss_jingfan:{
			global:'boss_jingfan2',
		},
		boss_jingfan2:{
			mod:{
				globalFrom:function(from,to,distance){
					if(to.isEnemyOf(from)) return;
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].hasSkill('boss_jingfan')&&
							players[i].isFriendOf(from)&&players[i]!=from){
							return distance-1;
						}
					}
				}
			}
		},
		boss_lingyu:{
			trigger:{player:'phaseEnd'},
			check:function(event,player){
				if(player.isTurnedOver()) return true;
				var num=0,players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].hp<players[i].maxHp&&
						players[i].isFriendOf(player)&&ai.get.recoverEffect(players[i])>0){
						if(players[i].hp==1){
							return true;
						}
						num++;
						if(num>=2) return true;
					}
				}
				return false;
			},
			content:function(){
				'step 0'
				player.turnOver();
				'step 1'
				var list=game.filterPlayer(function(current){
					return current.isDamaged()&&current.isFriendOf(player);
				});
				player.line(list,'green');
				event.targets=list;
				'step 2'
				if(event.targets.length){
					event.targets.shift().recover();
					event.redo();
				}
			},
			ai:{
				threaten:1.5,
				effect:{
					target:function(card,player,target){
						if(card.name=='guiyoujie') return [0,1];
					}
				}
			},
		},
		boss_zhenwei:{
			global:'boss_zhenwei2',
			ai:{
				threaten:1.5
			}
		},
		boss_zhenwei2:{
			mod:{
				globalTo:function(from,to,distance){
					if(to.isFriendOf(from)) return;
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].hasSkill('boss_zhenwei')&&
							players[i].isFriendOf(to)&&players[i]!=to){
							return distance+1;
						}
					}
				}
			}
		},
		boss_benlei:{
			mode:['versus'],
			trigger:{player:'phaseBegin'},
			forced:true,
			filter:function(event,player){
				if(_status.mode!='jiange') return false;
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].type=='mech'&&players[i].isEnemyOf(player)){
						return true;
					}
				}
			},
			content:function(){
				var target=game.findPlayer(function(current){
					return current.type=='mech'&&current.isEnemyOf(player);
				});
				if(target){
					player.line(target,'thunder');
					target.damage(2,'thunder');
				}
			},
			ai:{
				threaten:function(player,target){
					if(_status.mode=='jiange'){
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].type=='mech'&&game.players[i].isEnemyOf(target)){
								return 2;
							}
						}
					}
					return 1;
				}
			}
		},
		boss_nailuo:{
			trigger:{player:'phaseEnd'},
			check:function(event,player){
				if(player.isTurnedOver()) return true;
				var num=0,players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].isEnemyOf(player)){
						var es=players[i].get('e');
						for(var j=0;j<es.length;j++){
							switch(get.subtype(es[j])){
								case 'equip1':num+=1;break;
								case 'equip2':num+=2;break;
								case 'equip3':num+=2;break;
								case 'equip4':num+=1;break;
								case 'equip5':num+=1.5;break;
							}
						}
					}
				}
				if(_status.mode=='jiange'){
					for(var i=0;i<players.length;i++){
						if(players[i].isFriendOf(player)&&players[i].hasSkill('huodi')){
							return num>0;
						}
					}
				}
				return num>=4;
			},
			filter:function(event,player){
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].isEnemyOf(player)&&players[i].num('e')){
						return true;
					}
				}
				return false;
			},
			content:function(){
				'step 0'
				player.turnOver();
				'step 1'
				event.targets=get.players();
				'step 2'
				if(event.targets.length){
					var current=event.targets.shift();
					if(current.isEnemyOf(player)){
						var es=current.get('e');
						if(es.length){
							current.discard(es);
							player.line(current,'green');
						}
					}
					event.redo();
				}
			},
			ai:{
				effect:{
					target:function(card,player,target){
						if(card.name=='guiyoujie') return [0,1];
					}
				}
			},
		},
		boss_tanshi:{
			trigger:{player:'phaseEnd'},
			forced:true,
			check:function(){
				return false;
			},
			filter:function(event,player){
				return player.num('h')>0;
			},
			content:function(){
				player.chooseToDiscard('h',true);
			}
		},
		boss_tunshi:{
			trigger:{player:'phaseBegin'},
			forced:true,
			filter:function(event,player){
				var nh=player.num('h');
				return game.hasPlayer(function(current){
					return current.isEnemyOf(player)&&current.num('h')>nh;
				});
			},
			content:function(){
				'step 0'
				var nh=player.num('h');
				var targets=game.filterPlayer(function(current){
					return current.isEnemyOf(player)&&current.num('h')>nh;
				});
				targets.sort(lib.sort.seat);
				event.targets=targets;
				'step 1'
				if(event.targets.length){
					var current=event.targets.shift();
					current.damage('thunder');
					player.line(current,'thunder');
					event.redo();
				}
			}
		},
		boss_jiguan:{
			mod:{
				targetEnabled:function(card,player,target){
					if(card.name=='lebu'){
						return false;
					}
				}
			}
		},
		boss_gongshenjg:{
			audio:2,
			trigger:{player:'phaseEnd'},
			mode:['versus'],
			filter:function(event,player){
				if(_status.mode!='jiange') return false;
				var players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].type=='mech'){
						if(players[i].isEnemyOf(player)) return true;
						if(players[i].hp<players[i].maxHp) return true;
					}
				}
				return false;
			},
			content:function(){
				var enemy,players=game.filterPlayer();
				for(var i=0;i<players.length;i++){
					if(players[i].type=='mech'){
						if(players[i].isFriendOf(player)){
							if(players[i].hp<players[i].maxHp){
								player.line(players[i],'green');
								players[i].recover();
								return;
							}
						}
						else{
							enemy=players[i];
						}
					}
				}
				if(enemy){
					player.line(enemy,'fire');
					enemy.damage('fire');
				}
			},
		},
		boss_jingmiao:{
			trigger:{global:'useCardAfter'},
            filter:function(event,player){
                return event.player.isEnemyOf(player)&&event.card.name=='wuxie';
            },
			logTarget:'player',
			check:function(event,player){
				return ai.get.attitude(player,event.player)<0;
			},
            content:function(){
				player.line(trigger.player,'green');
				trigger.player.loseHp();
            },
            ai:{
                expose:0.2,
				threaten:1.3
            }
		},
		boss_zhinang:{
			trigger:{player:'phaseBegin'},
            frequent:true,
            content:function(){
                "step 0"
                event.cards=get.cards(3);
                event.cards2=[];
                for(var i=0;i<event.cards.length;i++){
                    var type=get.type(event.cards[i]);
                    if(type=='trick'||type=='equip'){
                        event.cards2.push(event.cards[i]);
                    }
                }
                if(!event.isMine()||event.cards2.length==0){
                    player.showCards(event.cards);
                }
                "step 1"
                if(event.cards2.length==0){
                    event.finish();
                }
                else{
                    var dialog=ui.create.dialog('将三张牌中的锦囊牌或装备牌交给一己方名角色','hidden');
                    dialog.add(event.cards);
                    for(var i=0;i<dialog.buttons.length;i++){
                        if(event.cards2.contains(dialog.buttons[i].link)){
                            dialog.buttons[i].style.opacity=1;
                        }
                        else{
                            dialog.buttons[i].style.opacity=0.5;
                        }
                    }
                    var next=player.chooseTarget(true,dialog,function(card,player,target){
						return target.isFriendOf(player);
					});
                    next.ai=function(target){
                        var att=ai.get.attitude(player,target);
						if(att>0&&target.num('j','lebu')){
							return 0.1;
						}
                        if(player.num('h')>player.hp){
                            if(target==player) return Math.max(1,att-2);
                        }
                        if(target==player) return att+5;
                        return att;
                    }
                }
                "step 2"
                if(result&&result.targets&&result.targets.length){
                    event.target=result.targets[0];
                }
                if(event.cards2.length){
					player.line(event.target,'green');
                    event.target.gain(event.cards2,'gain2','log');
                }
            },
            ai:{
                threaten:1.3
            }
		},
		boss_biantian4:{
			trigger:{player:'dieBegin'},
			forced:true,
			popup:false,
			content:function(){
				for(var i=0;i<game.players.length;i++){
					if(game.players[i].hasSkill('boss_biantian3')){
						game.players[i].removeSkill('boss_biantian3');
						game.players[i].popup('boss_biantian3');
					}
					if(game.players[i].hasSkill('boss_biantian2')){
						game.players[i].removeSkill('boss_biantian2');
						game.players[i].popup('boss_biantian2');
					}
				}
			}
		},
        boss_biantian:{
            trigger:{player:'phaseBegin'},
            forced:true,
            unique:true,
			audio:false,
            group:'boss_biantian4',
            content:function(){
                "step 0"
                for(var i=0;i<game.players.length;i++){
					if(game.players[i].hasSkill('boss_biantian3')){
						game.players[i].removeSkill('boss_biantian3');
						game.players[i].popup('boss_biantian3');
					}
					if(game.players[i].hasSkill('boss_biantian2')){
						game.players[i].removeSkill('boss_biantian2');
						game.players[i].popup('boss_biantian2');
					}
				}
                player.judge(function(card){
                    if(get.suit(card)=='spade') return 1;
					if(get.color(card)=='red') return 0;
                    return -1;
                });
                "step 1"
				var targets=[],players=game.filterPlayer();
                if(result.color=='red'){
					game.trySkillAudio('boss_biantianx2');
					for(var i=0;i<players.length;i++){
						if(!players[i].isFriendOf(player)){
							players[i].addSkill('boss_biantian3');
							players[i].popup('kuangfeng');
							targets.push(players[i]);
						}
					}
					player.logSkill('kuangfeng',targets,'fire');
                }
                else if(result.suit=='spade'){
					game.trySkillAudio('boss_biantianx1');
					for(var i=0;i<players.length;i++){
						if(players[i].isFriendOf(player)){
							players[i].addSkill('boss_biantian2');
							players[i].popup('dawu');
							targets.push(players[i]);
						}
					}
					player.logSkill('dawu',targets,'thunder');
                }
            },
			ai:{
				threaten:1.6
			}
        },
        boss_biantian2:{
			audio:false,
            trigger:{player:'damageBefore'},
            filter:function(event){
                if(event.nature!='thunder') return true;
                return false;
            },
            forced:true,
			mark:true,
			marktext:'雾',
			intro:{
				content:'已获得大雾标记'
			},
            content:function(){
                trigger.untrigger();
                trigger.finish();
            },
            ai:{
				nofire:true,
				nodamage:true,
                effect:{
                    target:function(card,player,target,current){
                        if(get.tag(card,'damage')&&!get.tag(card,'thunderDamage')) return [0,0];
                    }
                }
            }
        },
        boss_biantian3:{
            trigger:{player:'damageBegin'},
            filter:function(event){
                if(event.nature=='fire') return true;
                return false;
            },
			mark:true,
			marktext:'风',
			intro:{
				content:'已获得狂风标记'
			},
            forced:true,
            content:function(){
                trigger.num++;
            },
            ai:{
                effect:{
                    target:function(card,player,target,current){
                        if(get.tag(card,'fireDamage')) return 1.5;
                    }
                }
            }
        },
		boss_jizhen:{
			audio:2,
			trigger:{player:'phaseEnd'},
			forced:true,
			filter:function(event,player){
				return game.hasPlayer(function(current){
					return current.isFriendOf(player)&&current.isDamaged();
				});
			},
			content:function(){
				var list=game.filterPlayer(function(current){
					return current.isFriendOf(player)&&current.isDamaged();
				});
				if(list.length){
					player.line(list,'green');
					game.asyncDraw(list);
				}
			},
			ai:{
				threaten:1.4
			}
		},
		boss_lingfeng:{
			audio:2,
			trigger:{player:'phaseDrawBefore'},
            content:function(){
                "step 0"
                trigger.untrigger();
                trigger.finish();
                event.cards=get.cards(2);
                player.showCards(event.cards);
                "step 1"
                if(get.color(event.cards[0])!=get.color(event.cards[1])){
                    player.chooseTarget('是否令一名敌方角色失去1点体力？',function(card,player,target){
						return !target.isFriendOf(player);
                    }).ai=function(target){
                        return -ai.get.attitude(player,target);
                    }
                }
                "step 2"
                if(result.bool&&result.targets&&result.targets.length){
					player.line(result.targets,'green');
                    result.targets[0].loseHp();
                }
                "step 3"
                player.gain(event.cards);
                player.$draw(event.cards);
                game.delay();
            },
            ai:{
                threaten:1.4
            }
		},
		boss_yuhuojg:{
			audio:true,
			trigger:{player:'damageBefore'},
			filter:function(event){
				return event.nature=='fire';
			},
			forced:true,
			content:function(){
				trigger.untrigger();
				trigger.finish();
			},
			ai:{
				nofire:true,
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'fireDamage')) return 0;
					}
				}
			}
		},
		boss_tianyun:{
			trigger:{player:'phaseEnd'},
			direct:true,
			content:function(){
				"step 0"
				player.chooseTarget(get.prompt('boss_tianyun'),function(card,player,target){
					return target.isEnemyOf(player);
				}).ai=function(target){
					if(player.hp<=1) return 0;
					if(ai.get.attitude(player,target)>-3) return 0;
					var eff=ai.get.damageEffect(target,player,player,'fire');
					if(eff>0){
						return eff+target.num('e')/2;
					}
					return 0;
				}
				"step 1"
				if(result.bool){
					player.logSkill('boss_tianyun',result.targets,'fire');
					player.loseHp();
					event.target=result.targets[0];
				}
				else{
					event.finish();
				}
				"step 2"
				if(event.target){
					event.target.damage(2,'fire');
				}
				"step 3"
				if(event.target){
					var es=event.target.get('e');
					if(es.length){
						event.target.discard(es);
					}
				}
			},
			ai:{
				threaten:2
			}
		},
		versus_ladder:{
			trigger:{global:['damageEnd','recoverEnd','dieEnd','gainEnd','phaseDiscardEnd']},
			forced:true,
			popup:false,
			silent:true,
			filter:function(event,player){
				if(!_status.ladder) return false;
				if(event._ladder_mmr_counted) return false;
				if(!event.source) return false;
				return event.source==game.me||event.player==game.me;
			},
			content:function(){
				switch(event.triggername){
					case 'damageEnd':{
						if(trigger.source.side!=trigger.player.side){
							if(trigger.source==game.me){
								_status.ladder_mmr+=0.5*Math.max(1,trigger.num);
							}
							else{
								_status.ladder_mmr+=0.2*Math.max(1,trigger.num);
							}
						}
						break;
					}
					case 'recoverEnd':{
						if(trigger.source!=trigger.player){
							if(trigger.source==game.me){
								if(trigger.player.side==game.me.side){
									_status.ladder_mmr+=0.5*trigger.num;
								}
								else{
									_status.ladder_mmr-=0.3*trigger.num;
								}
							}
						}
						else{
							_status.ladder_mmr+=0.3*trigger.num;
						}
						break;
					}
					case 'dieEnd':{
						if(trigger.source==game.me&&trigger.player.side!=game.me.side){
							_status.ladder_mmr+=2;
						}
						break;
					}
					case 'gainEnd':{
						if(trigger.cards&&trigger.cards.length){
							if(trigger.source==game.me&&trigger.player!=game.me){
								if(trigger.player.side==game.me.side){
									_status.ladder_mmr+=0.3*trigger.cards.length;
								}
								else{
									_status.ladder_mmr-=0.1*trigger.cards.length;
								}
							}
							else{
								if(trigger.source){
									if(trigger.source.side!=game.me.side){
										_status.ladder_mmr+=0.3*trigger.cards.length;
									}
								}
								else{
									_status.ladder_mmr+=0.1*trigger.cards.length;
								}
							}
						}
						break;
					}
					case 'phaseDiscardEnd':{
						if(trigger.player==player){
							if(trigger.cards&&trigger.cards.length){
								_status.ladder_mmr-=0.2*trigger.cards.length;
							}
						}
						break;
					}
				}
				trigger._ladder_mmr_counted=true;
			}
		}
	},
	element:{
		content:{
			replacePlayer:function(){
				"step 0"
				var list=(source.side==game.me.side)?_status.friend:_status.enemy;
				if(list.length==0){
					// if(game.friend.contains(source)){
					// 	game.over(false);
					// }
					// else{
					// 	game.over(true);
					// }
					game.friend.remove(source);
					game.enemy.remove(source);
					if(game.friend.length==0) game.over(false);
					else if(game.enemy.length==0) game.over(true);
					if(game.friendZhu&&game.friendZhu.classList.contains('dead')&&game.friend.length){
						game.friendZhu=game.friend[0];
						game.friendZhu.setIdentity(_status.color+'Zhu');
					}
					if(game.enemyZhu&&game.enemyZhu.classList.contains('dead')&&game.enemy.length){
						game.enemyZhu=game.enemy[0];
						game.enemyZhu.setIdentity(!_status.color+'Zhu');
					}
					event.finish();
					return;
				}
				if(source.side==game.me.side&&list.length>1&&(game.me==game.friendZhu||(lib.storage.zhu&&lib.storage.single_control))&&
					!_status.auto){
					event.dialog=ui.create.dialog('选择替补角色',[list,'character']);
					event.filterButton=function(){return true;};
					event.player=game.me;
					event.forced=true;
					event.custom.replace.confirm=function(){
						event.character=ui.selected.buttons[0].link;
						event.dialog.close();
						if(ui.confirm) ui.confirm.close();
						delete event.player;
						game.resume();
					}
					game.check();
					game.pause();
				}
				else{
					event.character=list[Math.floor(Math.random()*list.length)];
				}
				"step 1"
				game.uncheck();
				_status.friend.remove(event.character);
				_status.enemy.remove(event.character);
				source.revive(null,false);
				game.additionaldead.push({
					name:source.name,
					stat:source.stat
				});
				game.addVideo('reinit',source,[event.character,get.translation(source.side+'Color')]);
				source.uninit();
				source.init(event.character);
				game.log(source,'出场');
				source.node.identity.dataset.color=get.translation(source.side+'Color');
				source.draw(4);
				_status.event.parent.parent.parent.untrigger(false,source);
				var evt=_status.event.parent.parent.parent;
				for(var i=0;i<100;i++){
					evt=evt.parent;
					if(evt.player==source){
						evt.finish();
					}
					if(evt.name=='phase'){
						break;
					}
				}
				if(lib.storage.single_control){
					game.onSwapControl();
				}
				"step 2"
				// if(_status.currentPhase==source){
				// 	source.skip('phase');
				// }
			},
			replacePlayerTwo:function(){
				'step 0'
				game.delay();
				'step 1'
				source.revive(null,false);
				game.additionaldead.push({
					name:source.name,
					stat:source.stat
				});
				game.addVideo('reinit',source,[event.character,get.translation(source.side+'Color')]);
				source.uninit();
				source.init(event.character);
				game.log(source,'出场');
				// source.node.identity.dataset.color=source.side+'zhu';
				source.draw(4);
				_status.event.parent.parent.parent.untrigger(false,source);
				var evt=_status.event.parent.parent.parent;
				for(var i=0;i<100;i++){
					evt=evt.parent;
					if(evt.player==source){
						evt.finish();
					}
					if(evt.name=='phase'){
						break;
					}
				}
			},
			replacePlayerOL:function(){
				'step 0'
				game.delay();
				'step 1'
				if(event.source.side==game.me.side){
					if(_status.friend.length==1){
						event.directresult=_status.friend[0];
					}
					else if(event.source==game.me){
						if(_status.auto){
							event.directresult=_status.friend.randomGet();
						}
					}
					else{
						if(!event.source.isOnline()){
							event.directresult=_status.friend.randomGet();
						}
					}
				}
				else{
					if(_status.enemy.length==1){
						event.directresult=_status.enemy[0];
					}
					else{
						if(!event.source.isOnline()){
							event.directresult=_status.enemy.randomGet();
						}
					}
				}
				if(!event.directresult){
					if(event.source==game.me){
						event.dialog=ui.create.dialog('选择替补角色',[_status.friend,'character']);
						event.filterButton=function(){return true};
						event.player=game.me;
						event.forced=true;
						event.custom.replace.confirm=function(){
							event.directresult=ui.selected.buttons[0].link;
							event.dialog.close();
							if(ui.confirm) ui.confirm.close();
							delete event.player;
							game.resume();
						}
						event.switchToAuto=function(){
							event.directresult=_status.friend.randomGet();
							event.dialog.close();
							if(ui.confirm) ui.confirm.close();
							delete event.player;
						};
						game.check();
						game.pause();
					}
					else{
						event.source.send(function(player){
							if(_status.auto){
								_status.event._result=_status.friend.randomGet();
							}
							else{
								var next=game.createEvent('replacePlayer');
								next.source=player;
								next.setContent(function(){
									event.dialog=ui.create.dialog('选择替补角色',[_status.friend,'character']);
									event.filterButton=function(){return true};
									event.player=event.source;
									event.forced=true;
									event.custom.replace.confirm=function(){
										event.result=ui.selected.buttons[0].link;
										event.dialog.close();
										if(ui.confirm) ui.confirm.close();
										delete event.player;
										game.resume();
										game.uncheck();
									}
									event.switchToAuto=function(){
										event.result=_status.friend.randomGet();
										event.dialog.close();
										if(ui.confirm) ui.confirm.close();
										delete event.player;
										game.uncheck();
									};
									game.check();
									game.pause();
								});
							}
							game.resume();
						},event.source);
						event.source.wait();
						game.pause();
					}
				}
				'step 2'
				game.uncheck();
				if(!event.directresult){
					if(event.resultOL){
						event.directresult=event.resultOL[source.playerid];
					}
					if(!event.directresult||event.directresult=='ai'){
						if(source.side==game.me.side){
							event.directresult=_status.friend.randomGet();
						}
						else{
							event.directresult=_status.enemy.randomGet();
						}
					}
				}
				var name=event.directresult;
				var color=source.node.identity.dataset.color;
				game.additionaldead.push({
					name:source.name,
					stat:source.stat
				});

				game.broadcastAll(function(source,name,color){
					_status.friend.remove(name);
					_status.enemy.remove(name);
					source.revive(null,false);
					source.uninit();
					source.init(name);
					source.node.identity.dataset.color=color;
					if(source==game.me){
						ui.arena.classList.remove('selecting');
					}
				},source,name,color);
				game.log(source,'出场');

				source.draw(4);
				_status.event.parent.parent.parent.untrigger(false,source);
				game.addVideo('reinit',source,[name,color]);
			},
		},
		player:{
			dieAfter:function(source){
				if(_status.connectMode){
					if(_status.mode=='1v1'||_status.mode=='3v3'){
						 game.broadcastAll(function(dead){
							 if(dead.side==game.me.side){
		 						_status.friendDied.push(dead.name);
		 						_status.friendCount.innerHTML='阵亡: '+get.cnNumber(_status.friendDied.length,true);
		 					}
		 					else{
		 						_status.enemyDied.push(dead.name);
		 						_status.enemyCount.innerHTML='杀敌: '+get.cnNumber(_status.enemyDied.length,true);
		 					}
						 },this);
						 if(this.side==game.me.side){
							 if(_status.friend.length==0){
								 game.over(false);
								 return;
							 }
						 }
						 else{
							 if(_status.enemy.length==0){
								 game.over(true);
								 return;
							 }
						 }
						 game.replacePlayerOL(this);
					}
					else if(_status.mode=='2v2'){
						if(_status.replacetwo){

						}
						var friend;
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].side==this.side){
								friend=game.players[i];break;
							}
						}
						if(friend){
							var next=game.createEvent('versusDraw');
							next.setContent(function(){
								'step 0'
								player.chooseBool('是否摸一张牌？');
								'step 1'
								if(result.bool){
									player.draw();
								}
							});
							next.player=friend;
						}
						else{
							game.over(this.side!=game.me.side);
						}
					}
					else if(_status.mode=='4v4'){
						if(this.identity=='zhu'){
							game.over(this.side!=game.me.side);
						}
						else if(source){
							if(source.side==this.side){
								if(source.identity=='zhu'){
									source.discard(source.get('he'));
								}
							}
							else{
								var num1=0,num2=1;
								for(var i=0;i<game.players.length;i++){
									if(game.players[i].side==source.side){
										num1++;
									}
									else{
										num2++;
									}
								}
								source.draw(2+Math.max(0,num2-num1));
							}
						}
						return;
					}
				}
				else{
					if(_status.mode=='four'){
						if(this.identity=='zhu'){
							game.over(this.side!=game.me.side);
						}
						else if(source){
							if(source.side==this.side){
								if(source.identity=='zhu'){
									source.discard(source.get('he'));
								}
							}
							else{
								var num1=0,num2=1;
								for(var i=0;i<game.players.length;i++){
									if(game.players[i].side==source.side){
										num1++;
									}
									else{
										num2++;
									}
								}
								source.draw(2+Math.max(0,num2-num1));
							}
						}
						return;
					}
					else if(_status.mode=='two'){
						var friend;
						for(var i=0;i<game.players.length;i++){
							if(game.players[i].side==this.side){
								friend=game.players[i];break;
							}
						}
						if(_status.replacetwo){
							if(this.replacetwo){
								if(source){
									if(source.side==this.side){
										var he=source.get('he');
										if(he.length){
											source.discard(he);
										}
									}
									else{
										source.draw(3);
									}
								}
								game.replacePlayerTwo(this,this.replacetwo);
								delete this.replacetwo;
							}
							else if(friend&&friend.replacetwo){
								if(source){
									if(source.side==this.side){
										var he=source.get('he');
										if(he.length){
											source.discard(he);
										}
									}
									else{
										source.draw(3);
									}
								}
								game.replacePlayerTwo(this,friend.replacetwo);
								delete friend.replacetwo;
							}
							else{
								game.over(this.side!=game.me.side);
							}
						}
						else{
							if(friend){
								var next=game.createEvent('versusDraw');
								next.setContent(function(){
									'step 0'
									player.chooseBool('是否摸一张牌？');
									'step 1'
									if(result.bool){
										player.draw();
									}
								});
								next.player=friend;
							}
							else{
								game.over(this.side!=game.me.side);
							}
						}
						return;
					}
					else if(_status.mode=='jiange'){
						if(get.population('wei')==0){
							game.over(game.me.identity=='shu');
						}
						else if(get.population('shu')==0){
							game.over(game.me.identity=='wei');
						}
						return;
					}
					else if(_status.mode=='three'){
						if(this.identity=='zhu'){
							if(game.friend.contains(this)){
								game.over(false);
							}
							else{
								game.over(true);
							}
						}
						else{
							if(this==game.me){
								game.modeSwapPlayer(game.friendZhu);
							}
							game.friend.remove(this);
							game.enemy.remove(this);
							if(source){
								source.draw(2);
							}
						}
						return;
					}
					if(this.side==game.me.side){
						_status.friendDied.push(this.name);
						_status.friendCount.innerHTML='阵亡: '+get.cnNumber(_status.friendDied.length,true);
					}
					else{
						_status.enemyDied.push(this.name);
						_status.enemyCount.innerHTML='杀敌: '+get.cnNumber(_status.enemyDied.length,true);
					}

					var list=(this.side==game.me.side)?_status.friend:_status.enemy;
					if((list.length==0&&lib.storage.noreplace_end)||
					(lib.storage.zhu&&lib.storage.main_zhu&&this.identity=='zhu'&&game.players.length>2)){
						if(game.friend.contains(this)){
							game.over(false);
						}
						else{
							game.over(true);
						}
					}
					else if(game.friend.length==1&&this==game.friend[0]&&_status.friend.length==0){
						game.over(false);
					}
					else if(game.enemy.length==1&&this==game.enemy[0]&&_status.enemy.length==0){
						game.over(true);
					}
					else{
						if(source){
							if(source.side!=this.side){
								if(lib.storage.versus_reward){
									source.draw(lib.storage.versus_reward);
								}
							}
							else{
								if(lib.storage.versus_punish=='弃牌'){
									source.discard(source.get('he'));
								}
								else if(lib.storage.versus_punish=='摸牌'&&lib.storage.versus_reward){
									source.draw(lib.storage.versus_reward);
								}
							}
						}
						else{
							game.delay();
						}
						game.replacePlayer(this);
					}
				}
			}
		}
	},
	ai:{
		get:{
			rawAttitude:function(from,to){
				if(from.side==to.side){
					if(to.identity=='zhu'){
						if(_status.connectMode){
							if(_status.mode=='4v4') return 10;
						}
						else{
							if(lib.storage.main_zhu||_status.mode=='four') return 10;
						}
					}
					return 6;
				}
				else{
					if(to.identity=='zhu'){
						if(_status.connectMode){
							if(_status.mode=='4v4') return -10;
						}
						else{
							if(lib.storage.main_zhu||_status.mode=='four') return -10;
						}
					}
					return -6;
				}
			},
		}
	},
	help:{
		'对决模式':
		'<div style="margin:10px">2v2 替补模式</div><ul style="margin-top:0"><li>选将时额外选择一名替补武将，阵亡时使用自己的替补武将上场，无替补时改为用队友的替补武将，两人均无替补时游戏结束'+
		'<li>杀死敌方武将摸3张牌，杀死友方武将弃置所有牌</ul>'+
		'<div style="margin:10px">4v4</div><ul style="margin-top:0"><li>双方各有一名主公和三名忠臣，杀死对方主公获胜<li>'+
		'8号位游戏开始时额外摸一张牌，7、8号位可在游戏开始时置换一次手牌<li>'+
		'杀死对方忠臣摸2+x张牌，x为对方（含刚被杀的忠臣）与己方的存活人数之差；主公杀死己方忠臣须弃置所有牌',
	}
}
