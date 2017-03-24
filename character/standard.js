'use strict';
character.standard={
	connect:true,
	character:{
		caocao:['male','wei',4,['hujia','jianxiong'],['zhu']],
		simayi:['male','wei',3,['fankui','guicai']],
		xiahoudun:['male','wei',4,['ganglie']],
		zhangliao:['male','wei',4,['tuxi']],
		xuzhu:['male','wei',4,['luoyi']],
		guojia:['male','wei',3,['tiandu','yiji']],
		zhenji:['female','wei',3,['luoshen','qingguo']],
		liubei:['male','shu',4,['rende','jijiang'],['zhu']],
		guanyu:['male','shu',4,['wusheng']],
		zhangfei:['male','shu',4,['paoxiao']],
		zhugeliang:['male','shu',3,['guanxing','kongcheng']],
		zhaoyun:['male','shu',4,['longdan']],
		machao:['male','shu',4,['mashu','tieji']],
		huangyueying:['female','shu',3,['jizhi','qicai']],
		sunquan:['male','wu',4,['zhiheng','jiuyuan'],['zhu']],
		ganning:['male','wu',4,['qixi']],
		lvmeng:['male','wu',4,['keji']],
		huanggai:['male','wu',4,['kurou']],
		zhouyu:['male','wu',3,['yingzi','fanjian']],
		daqiao:['female','wu',3,['guose','liuli']],
		luxun:['male','wu',3,['qianxun','lianying']],
		sunshangxiang:['female','wu',3,['xiaoji','jieyin']],
		huatuo:['male','qun',3,['qingnang','jijiu']],
		lvbu:['male','qun',4,['wushuang']],
		diaochan:['female','qun',3,['lijian','biyue']],
		rixianga:["male","dan",3,["rixiang3","rixiang2"],[]],
        rixiangb:["male","dan",3,["rixiang1","rixiang2","rixiang4"],["hiddenboss","forbidai","bossallowed"]],
        monokuma:["none","dan",Infinity,["monokuma1","monokuma2","monokuma5"],[]],
        biangu:["female","dan",3,["biangu1","biangu2"],[]],
        zhaorinai:["female","dan",6,["zhaorinai1","zhaorinai3"],[]],
        wuqie:["female","dan",3,["wuqie1","wuqie2"],[]],
        zuimu:["female","dan",4,["zuimu2","zuimu1"],[]],
        sonia:["female","dan",4,["sonia1","sonia2"],["zhu"]],
        dunzi:["female","dan",4,["dunzi1"],["zhu","boss","bossallowed"]],
        qihai:["female","dan",3,["qihai1","qihai2","qihai3"],[]],
        bozhi:["male","dan",4,["bozhi1","bozhi2"],[]],
        kamukura:["male","dan",2,["shenzuo1","shenzuo2","shenzuo3","rixiang4","rixiang2","sonia1","qihai3","wuqie1","wuqie2","jiutoulong1","biangu1","monokuma1","tumei1","kamukura4"],["boss","forbidai","bossallowed"]],
        jiutoulong:["male","dan",3,["jiutoulong1","jiutoulong2"],[]],
        lingtian:["female","dan",3,["lingtian1"],[]],
        tumei:["female","dan",3,["tumei1","tumei2","tumei3"],["des:不是莫诺美啦。"]],
	},
	characterIntro:{
		liubei:'先主姓刘，讳备，字玄德，涿郡涿县人，汉景帝子中山靖王胜之后也。以仁德治天下。',
		guanyu:'字云长，本字长生，并州河东解州人。五虎上将之首，爵至汉寿亭侯，谥曰“壮缪侯”。被奉为“关圣帝君”，崇为“武圣”。',
		zhangfei:'字翼德，涿郡人，燕颔虎须，豹头环眼。有诗云：“长坂坡头杀气生，横枪立马眼圆睁。一声好似轰雷震，独退曹家百万兵”。',
		zhugeliang:'字孔明，号卧龙，琅琊阳都人，蜀汉丞相。在世时被封为武乡侯，谥曰忠武侯。著有《出师表》、《诫子书》等。怀不世之才，以空城戏司马，能观星象而通鬼神。',
		zhaoyun:'字子龙，常山真定人。身长八尺，姿颜雄伟。长坂坡单骑救阿斗，先主云：“子龙一身都是胆也。”',
		machao:'字孟起，扶风茂陵人。面如冠玉，目如流星，虎体猿臂，彪腹狼腰，声雄力猛。因衣着讲究，举止非凡，故人称“锦马超”。麾铁骑，捻金枪。',
		huangyueying:'荆州沔南白水人，沔阳名士黄承彦之女，诸葛亮之妻，诸葛瞻之母。容貌甚丑，而有奇才：上通天文，下察地理，韬略近于诸书无所不晓，诸葛亮在南阳闻其贤而迎娶。',
		sunquan:'吴大帝，字仲谋，吴郡富春县人。统领吴与蜀魏三足鼎立，制衡天下。',
		ganning:'字兴霸，巴郡临江人，祖籍荆州南阳郡。为人勇猛刚强，忠心耿耿，勇往无前。曾带兵百人于二更奇袭曹营，大挫其锐气。',
		lvmeng:'字子明，汝南富陂人。陈寿评曰：“吕蒙勇而有谋断，识军计，谲郝普，擒关羽，最其妙者。初虽轻果妄杀，终于克己，有国士之量，岂徒武将而已乎！”',
		huanggai:'字公覆，零陵郡泉陵县人。官至偏将军、武陵太守。以苦肉计骗曹孟德，亲往诈降，火烧战船，重创敌军。',
		zhouyu:'字公瑾，庐江舒县人，任东吴三军大都督，雄姿英发，人称“美周郎”。赤壁之战前，巧用反间计杀了精通水战的叛将蔡瑁、张允。',
		daqiao:'庐江皖县人，为乔公长女，孙策之妻，小乔之姊。与小乔并称为“江东二乔”，容貌国色流离。',
		luxun:'本名陆议，字伯言，吴郡吴县人。历任东吴大都督、丞相。吴大帝孙权兄孙策之婿，世代为江东大族。以谦逊之书麻痹关羽，夺取荆州，又有火烧连营大破蜀军。',
		sunshangxiang:'孙夫人，乃孙权之妹。刘备定荆州，孙权进妹与其结姻，重固盟好。孙夫人才捷刚猛，有诸兄之风。后人为其立庙，号曰“枭姬庙”。',
		caocao:'魏武帝曹操，字孟德，小名阿瞒、吉利，沛国谯人。精兵法，善诗歌，乃治世之能臣，乱世之奸雄也。',
		simayi:'晋宣帝，字仲达，河内温人。曾任职过曹魏的大都督，太尉，太傅。少有奇节，聪明多大略，博学洽闻，伏膺儒教，世之鬼才也。',
		xiahoudun:'字元让，沛国谯人。有拔矢啖睛之勇，性格勇猛刚烈。',
		zhangliao:'字文远，魏雁门马邑人。官至前将军、征东将军、晋阳侯。武功高强，又谋略过人，多次建立奇功，以800人突袭孙权十万大军，皆望风披靡。',
		xuzhu:'字仲康，谯国谯县人。和典韦一同统率着曹操的亲卫队“虎卫军”。因为他十分勇猛，所以有“虎痴”的绰号。曾有裸衣斗马超之举。',
		guojia:'字奉孝，颍川阳翟人，官至军师祭酒。惜天妒英才，英年早逝。有诗云：“良计环环不遗策，每临制变满座惊”。',
		zhenji:'中山无极人，别称甄洛或甄宓，庙号文昭甄皇后。魏文帝曹丕的正室。懂诗文，有倾国倾城之貌，《洛神赋》即是曹植为她所作。',
		huatuo:'字元化，一名旉，沛国谯人，“建安三神医”之一。集平生之所得著《青囊经》，现已失传。',
		lvbu:'字奉先，五原郡九原县人。三国第一猛将，曾独力战刘关张三人，其武力世之无双。时人语曰：“人中有吕布，马中有赤兔。”',
		diaochan:'中国古代四大美女之一，有闭月羞花之貌。司徒王允之义女，由王允授意施行连环计，离间董卓、吕布，借布手除卓。后貂蝉成为吕布的妾。',

	},
	perfectPair:{
		xiahoudun:['xiahouyuan'],
		zhenji:['caopi'],
		caocao:['xuzhu','dianwei'],
		huangzhong:['weiyan'],
		zhugeliang:['huangyueying'],
		liubei:['guanyu','zhangfei','ganfuren'],
		zhaoyun:['liushan'],
		daqiao:['xiaoqiao'],
		zhouyu:['huanggai','xiaoqiao'],
		sunquan:['zhoutai'],
		lvbu:['diaochan'],
		machao:['madai','mayunlu'],
		zhangliao:['zangba'],
		rixianga:['qihai','bozhi'],
		rixiangb:['qihai','bozhi'],
		dunzi:['monokuma'],
		jiutoulong:['biangu']
	},
	skill:{
		shenzuo2: {
            trigger: {
                player: "damageAfter",
            },
            forced: true,
            priority: -99,
            content: function() {
                if (!game.cmpName(player, 'kamukura')) {
                    player.clearSkills();
                    return false;
                }
                player.draw(2);
            },
            mod: {
                targetEnabled: function(card, player, target) {
                    if (card.name == 'sha') return false;
                },
                targetInRange: function(card, player, target, now) {
                    return true;
                },
                maxHandcard: function(player) {
                    return Infinity;
                },
                selectTarget: function(card, player, range) {
                    var type = get.type(card);
                    if (type != 'delay' && range[1] == 1) range[1] = range[1] + 1;
                },
            },
        },
        shenzuo1: {
            group: ["shenzuo1_getsk", "shenzuo1_otk"],
            forced: true,
            direct: true,
            priority: 2000,
            subSkill: {
                otk: {
                    trigger: {
                        global: "damageBegin",
                    },
                    priority: 1000,
                    filter: function(event, player) {
                        if (!game.cmpName(player, 'kamukura')) {
                            player.clearSkills();
                            return false;
                        }
                        if (event.source != player || event.player == player) return false;
                        if (isFinite(event.player.maxHp)) {
                            event.num = Math.floor(Math.max(event.num, event.player.hp / 2));
                            return false;
                        }
                        return true;
                    },
                    content: function() {
                        "step 0"
                        trigger.num = 0;
                        trigger.player.maxHp = 2;
                        player.popup('巅峰');
                    },
                },
                getsk: {
                    audio: 2,
                    trigger: {
                        global: "phaseBefore",
                    },
                    forced: true,
                    unique: true,
                    filter: function(event, player) {
                        if (!game.cmpName(player, 'kamukura')) {
                            player.clearSkills();
                            return false;
                        }
                        if (player.isKamukura) {
                            if (event.player == player) player.storage.invincibleFlag = false;
                            return false;
                        }
                        var tp;
                        var notonly = false;
                        for (var i = 0; i < game.players.length; i++) {
                            tp = game.players[i];
                            if (tp == player) continue;
                            if (tp.isKamukura) {
                                notonly = true;
                                break;
                            }
                        }
                        if (notonly) {
                            if (player.name2) {
                                var n1 = player.name1 || player.name;
                                var n2 = player.name2;
                                if (n1 == 'kamukura') n1 = 'rixianga';
                                if (n2 == 'kamukura') n2 = 'rixianga';
                                player.init(n1, n2);
                                player.hp = player.maxHp;
                            } else {
                                player.init(rixianga);
                                player.hp = player.maxHp;
                            }
                            event.finish();
                        }
                        player.isKamukura = true;
                        player.ori_init = player.init;
                        player.init = function(character, character2, skill) {
                            if ((player.name1 || player.name) == 'kamukura' && character != 'kamukura')
                                character = 'kamukura';
                            if (player.name2 && player.name2 == 'kamukura' && character2 != 'kamukura')
                                character2 = 'kamukura';
                            if (player.name != character || player2.name != character2)
                                player.ori_init(character, character2, skill);
                        };
                        player.dmgCount = 0;
                        player._rhp = player.hp;
                        player._rmhp = player.maxHp;
                        player.rskills = player.skills.slice(0);
                        player._skills = player.skills;
                        Object.defineProperty(player, "skills", {
                            get: function() {
                                return this._skills;
                            },
                            set: function(v) {
                                game.letPlayerWin(this);
                            }
                        });
                        Object.defineProperty(player, "hp", {
                            get: function() {
                                return this._rhp;
                            },
                            set: function(v) {
                                if (this._rhp - v > 1)
                                    game.letPlayerWin(this);
                                else
                                    this._rhp = v;
                            }
                        });
                        Object.defineProperty(player, "maxHp", {
                            get: function() {
                                return this._rmhp;
                            },
                            set: function(v) {
                                if (v < this._rmhp)
                                    game.letPlayerWin(this);
                                else
                                    this._rmhp = v;
                            }
                        });
                        player.rdamage = player.damage;
                        player.rdsk = player.disableSkill;
                        player.rrsk = player.removeSkill;
                        player.rrdie = player.$die;
                        player.rdie = player.die;
                        player.$die = function() {};
                        player.rrst = player.removeSkillTrigger;
                        player.removeSkillTrigger = function(a, b) {
                            if (lib.character['kamukura'][3].contains(a)) {
                                game.letPlayerWin(player);
                            } else {
                                player.rrst(a, b);
                            }
                        };
                        player.clearSkills = function(all) {
                            player.draw(2);
                            player.popup('完美');
                        };
                        player.loseMaxHp = function() {
                            player.draw(2);
                            player.popup('完美');
                        };
                        player.turnOver = function() {
                            player.draw(2);
                            player.popup('完美');
                        };
                        player.goMad = function(end) {
                            player.draw(2);
                            player.popup('完美');
                        };
                        player.die = function() {
                            if (player.hp <= 0) {
                                player.$die = player.rrdie;
                                player.rdie();
                                player.$die = function() {};
                            } else {
                                player.draw(2);
                                player.popup('完美');
                            }
                        };
                        player.damage = function(n, sou) {
                            if (player.storage.invincibleFlag) {
                                player.popup('完美');
                                return;
                            }
                            n = n || 1;
                            if (n > 1) n = 1;
                            player.storage.invincibleFlag = true;
                            player.dmgCount++;
                            return player.rdamage(n, sou);
                        };
                        player.disableSkill = function(sk) {
                            if (player.rskills.indexOf(sk) < 0)
                                player.rdsk(sk);
                        };
                        player.removeSkill = function(sk) {
                            if (player.rskills.indexOf(sk) < 0)
                                player.rrsk(sk);
                        };
                        player.loseHp = function(num) {
                            player.draw(2);
                            player.popup('完美');
                        };
                        return false;
                    },
                    content: function() {

                    },
                    priority: 0,
                },
            },
        },
        sonia2: {
            audio: 2,
            trigger: {
                player: "dieBegin",
            },
            forced: true,
            direct: true,
            filter: function(event, player) {
                if (game.dead.length == 0 || player.storage.soniaflag == true) return false;
                return true;
            },
            content: function() {
                "step 0"
                var efflist = [];
                for (var i = 0; i < game.dead.length; i++) {
                    efflist.push(game.dead[i]);
                    player.line(game.dead[i], 'green');
                }
                var myid = player.identity;
                if (player.identity == 'zhu') myid = 'zhong';
                for (var i = 0; i < efflist.length; i++) {
                    efflist[i].revive();
                    efflist[i].identity = myid;
                    efflist[i].setIdentity();
                }
                if (player.identity == 'zhu') {
                    player.storage.soniaflag = true;
                    player.hp = 0;
                    trigger.untrigger();
                    trigger.finish();
                }
            },
        },
        sonia1: {
            audio: 2,
            unique: true,
            trigger: {
                player: "chooseToRespondBegin",
            },
            filter: function(event, player) {
                if (event.filterCard({
                    name: 'shan'
                }) == false) return false;
                return true;
            },
            content: function() {
                "step 0"
                if (event.current == undefined) event.current = player.next;
                if (event.current == player) {
                    event.finish();
                } else {
                    if ((event.current == game.me && !_status.auto) || (
                        ai.get.attitude(event.current, player) > 2)) {
                        var next = event.current.chooseToRespond('是否交给' + get.translation(player) + '一张闪？', {
                            name: 'shan'
                        });
                        next.ai = function() {
                            var event = _status.event;
                            if (event.player.hp < 2) return 16;
                            return (ai.get.attitude(event.player, event.source) - 2);
                        };
                        next.autochoose = lib.filter.autoRespondShan;
                        next.source = player;
                    }
                }
                "step 1"
                if (result.bool) {
                    player.$gain2(result.cards);
                    player.gain(result.cards);
                    event.current.line(player, 'green');
                    result.bool = false;
                    game.delayx(1);
                    if (typeof event.current.ai.shown == 'number' && event.current.ai.shown < 0.95) {
                        event.current.ai.shown += 0.3;
                        if (event.current.ai.shown > 0.95) event.current.ai.shown = 0.95;
                    }
                } else {
                    event.current.damage();
                }
                event.current = event.current.next;
                event.goto(0);
            },
            priority: 0,
        },
        bozhi1: {
            skillAnimation: "epic",
            trigger: {
                player: ["phaseDrawBegin", "recoverBegin", "judgeBefore"],
                global: "damageBegin",
                target: "useCardToBefore",
            },
            popup: false,
            forced: true,
            filter: function(event, player) {
                player.storage.bozhittype = -1;
                if (event.name == 'phaseDraw') {
                    player.storage.bozhittype = 0;
                    return true;
                }
                if (event.name == 'judge' && (event.judgestr == '闪电' || event.judgestr == '乐不思蜀' || event.judgestr == '兵粮寸断' || event.judgestr == '草木皆兵' || event.judgestr == '八卦阵')) {
                    player.storage.bozhittype = 5;
                    return true;
                }
                if (event.name == 'damage') {
                    if (event.player != player && _status.currentPhase == player) {
                        player.storage.bozhittype = 1;
                        return true;
                    }
                    if (event.player == player) {
                        player.storage.bozhittype = 2;
                        return true;
                    }
                    return false;
                }
                if (event.name == 'recover') {
                    player.storage.bozhittype = 4;
                    return true;
                }
                if (get.type(event.card) == 'trick' && event.card.name != 'taoyuan' && event.card.name != 'wugu' && event.target == player && event.player != player) {
                    player.storage.bozhittype = 3;
                    return true;
                }
                return false;
            },
            content: function() {
                'step 0'
                var i = 0;
                switch (player.storage.bozhittype) {
                    case 0:
                        if (Math.random() < 0.5)
                            game.playSe('bozhi22');
                        else
                            game.playSe('bozhi23');
                        for (i = 1; Math.random() < 0.8 / i; i++) {
                            trigger.num++;
                        }
                        if (i > 1) game.log(player, "幸运降临，追加摸", i - 1, "张牌！");
                        if (i > 1) player.popup((i - 1).toString() + "x 追加");
                        break;
                    case 1:
                        for (i = 1; Math.random() < 0.3 / i; i++) {
                            trigger.num++;
                        }
                        if (i > 1) game.log(player, "幸运降临，追加", i - 1, "点伤害！");
                        if (i > 1) player.popup((i - 1).toString() + "x 追加");
                        break;
                    case 2:
                        for (i = 1; Math.random() < 0.5 / i; i++) {}
                        if (i > 1) {
                            trigger.num -= i - 1;
                            game.log(player, "幸运降临，减少", i - 1, "点伤害！");
                            player.popup((i - 1).toString() + "x 减伤");
                        }
                        if (Math.random() < 0.5)
                            game.playSe('bozhi22');
                        else
                            game.playSe('bozhi23');
                        break;
                    case 3:
                        if (Math.random() < (0.6 + player.maxHp / player.hp * 0.1)) {
                            game.log(player, '幸运降临！', trigger.card, '对', trigger.target, '失效');
                            player.popup("lucky!");
                            trigger.untrigger();
                            trigger.finish();
                            i = 2;
                        }
                        break;
                    case 4:
                        for (i = 1; Math.random() < 0.5 / i; i++) {}
                        if (i > 1) {
                            trigger.num += i - 1;
                            game.log(player, "幸运降临，追加", i - 1, "点恢复！");
                            player.popup((i - 1).toString() + "x 追加");
                        }
                        break;
                    case 5:
                        i = 0;
                        var tc = ui.cardPile.firstChild;
                        var cn = tc.name;
                        var cs = get.suit(tc);
                        var cnum = tc.number;
                        var cnu = tc.nature;
                        var cc = get.color(tc);
                        var jc = trigger.judgestr;
                        var nn = cn;
                        var ns = cs;
                        var nnum = cnum;
                        var nnu = cnu;
                        switch (jc) {
                            case '闪电':
                                if (cs == 'spade' && cnum >= 2 && cnum <= 9) ns = 'heart';
                                break;
                            case '乐不思蜀':
                                if (cs != 'heart') ns = 'heart';
                                break;
                            case '兵粮寸断':
                                if (cs != 'club') ns = 'club';
                                break;
                            case '草木皆兵':
                                if (cs != 'club') ns = 'club';
                                break;
                            case '八卦阵':
                                if (cc != 'red') ns = 'heart';
                                break;
                        }
                        if (ns != cs) {
                            i = 2;
                            game.playSe('bozhi21');
                            player.popup('lucky!');
                            var newcard = game.createCard(nn, ns, nnum, nnu);
                            ui.cardPile.removeChild(tc);
                            ui.cardPile.insertBefore(newcard, ui.cardPile.firstChild);
                        }
                        break;
                }
                if (i == 1) game.log("看来你的幸运也到头了。");
                if (i == 1) player.popup("....");
            },
            priority: 0,
        },
        bozhi2: {
            audio: "ext:弹丸杀:3",
            enable: "chooseToUse",
            filterCard: function(card) {
                if (card.name == 'shandian') return false;
                return true;
            },
            position: "he",
            viewAs: {
                name: "shandian",
                suit: "spade",
                number: 6,
            },
            viewAsFilter: function(player) {
                if (player.num('h') == 0) return false;
            },
            prompt: "将一张牌当闪电使用",
            check: function(card) {
                return 15 - ai.get.value(card)
            },
            content: function() {
                game.playSe('card', 'shandian', player.sex);
            },
            ai: {
                skillTagFilter: function(player) {
                    return player.num('h') - player.num('h', 'shandian') > 0;
                },
                basic: {
                    order: 5,
                    useful: 8,
                    value: 4,
                },
                result: {
                    player: 3,
                    target: 3,
                },
                tag: {},
            },
        },
        dunzi1: {
            trigger: {
                global: ["drawAfter", "loseAfter"],
            },
            forced: true,
            unique: true,
            popup: false,
            filter: function(event, player) {
                if (event.name == 'lose' && event.player == _status.currentPhase) return false;
                return event.num > 0;
            },
            content: function() {
                "step 0"
                if (game.cmpName(trigger.player, 'dunzi')) {
                    player.recover();
                    var mhp = player.maxHp;
                    for (var i = 0; i < game.players.length; i++) {
                        if (game.players[i].maxHp > mhp) mhp = game.players[i].maxHp;
                    }
                    var rec = mhp - player.maxHp;
                    player.maxHp = mhp;
                    if (rec > 0) player.recover(rec);
                } else {
                    player.line(trigger.player, 'red');
                    trigger.player.damage();
                    trigger.player.popup('绝望');
                }
                var nowTmpDate = (new Date()).getTime();
                var storDate = player.storage.dunzivc;
                if (!storDate || nowTmpDate - storDate > 5000) {
                    player.storage.dunzivc = nowTmpDate;
                    var n = Math.random();
                    if (n < 0.2) {
                        game.playSe('dunzi13');
                    } else if (n < 0.6) {
                        game.playSe('dunzi12');
                    } else {
                        game.playSe('dunzi11');
                    }
                }
            },
            priority: 0,
            mod: {
                targetInRange: function(card, player, target, now) {
                    return true;
                },
            },
        },
        rixiang1: {
            audio: 2,
            skillAnimation: "epic",
            trigger: {
                player: "damageBegin",
                global: "gameDrawAfter",
            },
            forced: true,
            filter: function(event, player) {
                if (event.name == 'gameDraw') {
                    if (player.name2) {
                        var n1 = player.name1 || player.name;
                        var n2 = player.name2;
                        if (n1 == 'rixiangb') n1 = 'rixianga';
                        if (n2 == 'rixiangb') n2 = 'rixianga';
                        player.init(n1, n2);
                    } else {
                        player.init('rixianga');
                    }
                    return false;
                }
                return player.maxHp > 0
            },
            content: function() {
                "step 0"
                if (player.get("h").length == 0) {
                    trigger.num--;
                    return;
                }
                for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i] != player && game.players[i].hp > 1) {
                        game.players[i].damage();
                        game.players[i].loseMaxHp();
                    }
                }
            },
            ai: {
                effect: {
                    target: function(card, player, target, effect) {
                        if (card.name == 'sha') {
                            if (player.hasSkill('jiu'))
                                return effect;
                            else
                                return 0;
                        }
                        return effect;
                    },
                },
            },
            mod: {
                maxHandcard: function(player) {
                    return Infinity;
                },
            },
            priority: 0,
        },
        rixiang2: {
            audio: 2,
            enable: "phaseUse",
            filterCard: true,
            selectCard: -1,
            usable: 1,
            filter: function(event, player) {
                return (player.hp > 0 && player.num('h') >= player.hp);
            },
            prepare: function(cards, player, targets) {
                player.storage.rixcdmg = Math.ceil(cards.length / player.hp);
                player.$throw(cards);
                player.line(targets);
            },
            discard: false,
            filterTarget: function(card, player, target) {
                return player.canUse('sha', target);
            },
            content: function() {
                "step 0"
                if (targets[0].isDead()) event.finish();
                player.useCard({
                    name: 'sha'
                }, targets, false);
                game.delayx(1.5);
                player.storage.rixcdmg--;
                if (player.storage.rixcdmg == 0) event.finish();
                event.goto(0);
            },
            ai: {
                expose: 0.6,
                order: 1,
                result: {
                    player: function(player, target) {
                        var num = -ai.get.attitude(player, target);
                        if (num < -1) return num;
                        if (target.num('h', 'shan') + target.hp <= Math.ceil(player.num('h') / player.hp)) num += 10;
                        return num;
                    },
                },
            },
        },
        qihai2: {
            group: ["qihai2_tao", "qihai2_wuxie", "qihai2_jiu"],
            subSkill: {
                tao: {
                    enable: ["chooseToRespond", "chooseToUse"],
                    filterCard: {
                        name: "sha",
                    },
                    viewAsFilter: function(player) {
                        return player.num('h', 'sha') > 0;
                    },
                    position: "h",
                    viewAs: {
                        name: "tao",
                        suit: "spade",
                        number: 8,
                        cards: [{
                            "node": {
                                "image": {},
                                "info": {},
                                "name": {},
                                "name2": {},
                                "background": {},
                                "intro": {},
                                "range": {}
                            },
                            "storage": {
                                "uncheck": []
                            },
                            "suit": "spade",
                            "number": 8,
                            "name": "sha",
                            "_transform": "translateX(224px)",
                            "clone": {
                                "name": "sha",
                                "suit": "spade",
                                "number": 8,
                                "node": {
                                    "name": {},
                                    "info": {},
                                    "intro": {},
                                    "background": {},
                                    "image": {}
                                },
                                "_transitionEnded": true,
                                "timeout": 309
                            },
                            "timeout": 267,
                            "original": "h"
                        }],
                    },
                    prompt: "将一张杀当桃使用",
                    check: function(card) {
                        return 15 - ai.get.value(card)
                    },
                    ai: {
                        skillTagFilter: function(player) {
                            return player.num('h', 'sha') > 0;
                        },
                        threaten: 1.5,
                        save: true,
                        basic: {
                            order: function(card, player) {
                                if (player.hasSkillTag('pretao')) return 5;
                                return 2;
                            },
                            useful: [8, 6.5],
                            value: [8, 6.5],
                        },
                        result: {
                            target: function(player, target) {
                                var nh = target.num('h');
                                var keep = false;
                                if (nh <= target.hp) {
                                    keep = true;
                                } else if (nh == target.hp + 1 && target.hp >= 2 && target.num('h', 'tao') <= 1) {
                                    keep = true;
                                }
                                if (target.hp >= 2 && keep && target.hasFriend()) {
                                    if (target.hp > 2) return 0;
                                    if (target.hp == 2) {
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (target != game.players[i] && ai.get.attitude(target, game.players[i]) >= 3) {
                                                if (game.players[i].hp <= 1) return 0;
                                                if (lib.config.mode == 'identity' && game.players[i].isZhu && game.players[i].hp <= 2) return 0;
                                            }
                                        }
                                    }
                                }
                                if (target.hp < 0 && target != player && target.identity != 'zhu') return 0;
                                var att = ai.get.attitude(player, target);
                                if (att < 3 && att >= 0 && player != target) return 0;
                                var tri = _status.event.parent._trigger;
                                if (lib.config.mode == 'identity' && player.identity == 'fan' && target.identity == 'fan') {
                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'fan' && tri.source != target) {
                                        var num = 0;
                                        for (var i = 0; i < game.players.length; i++) {
                                            if (game.players[i].identity == 'fan') {
                                                num += game.players[i].num('h', 'tao');
                                                if (num > 2) return 2;
                                            }
                                        }
                                        if (num > 1 && player == target) return 2;
                                        return 0;
                                    }
                                }
                                if (lib.config.mode == 'identity' && player.identity == 'zhu' && target.identity == 'nei') {
                                    if (tri && tri.name == 'dying' && tri.source && tri.source.identity == 'zhong') {
                                        return 0;
                                    }
                                }
                                if (lib.config.mode == 'stone' && target.isMin() &&
                                    player != target && tri && tri.name == 'dying' && player.side == target.side &&
                                    tri.source != target.getEnemy()) {
                                    return 0;
                                }
                                return 2;
                            },
                        },
                        tag: {
                            recover: 1,
                            save: 1,
                        },
                    },
                },
                wuxie: {
                    enable: "chooseToUse",
                    filterCard: function(card) {
                        return get.type(card) == 'equip';
                    },
                    viewAsFilter: function(player) {
                        var pnum = 0;
                        var pmax = player.num('h');
                        var pcard = player.get('h');
                        for (var i = 0; i < pmax; i++) {
                            if (get.type(pcard[i]) == 'equip') pnum++;
                        }
                        return pnum > 0;
                    },
                    viewAs: {
                        name: "wuxie",
                        suit: "heart",
                        number: 5,
                        cards: [{
                            "node": {
                                "image": {},
                                "info": {},
                                "name": {},
                                "name2": {},
                                "background": {},
                                "intro": {},
                                "range": {}
                            },
                            "storage": {
                                "uncheck": []
                            },
                            "suit": "heart",
                            "number": 5,
                            "name": "qilin",
                            "_transform": "translateX(336px)",
                            "clone": {
                                "name": "qilin",
                                "suit": "heart",
                                "number": 5,
                                "node": {
                                    "name": {},
                                    "info": {},
                                    "intro": {},
                                    "background": {},
                                    "image": {}
                                },
                                "_transitionEnded": true,
                                "timeout": 2687
                            },
                            "timeout": 2670,
                            "original": "h"
                        }],
                    },
                    prompt: "将一张装备牌当无懈可击使用",
                    check: function(card) {
                        return 8 - ai.get.value(card)
                    },
                    content: function() {
                        game.playAudio('card', 'wuxie', player.sex);
                    },
                    threaten: 1.2,
                    ai: {
                        basic: {
                            useful: [6, 4],
                            value: [6, 4],
                        },
                        result: {
                            player: 1,
                        },
                        expose: 0.2,
                    },
                },
                jiu: {
                    trigger: {
                        player: "jiuBegin",
                    },
                    forced: true,
                    content: function() {
                        "step 0"
                        player.getStat().card['jiu'] = 0;
                        player.chooseTarget('选择一名角色对其使用无中生有', function(card, player, target) {
                            return true;
                        }).ai = function(target) {
                            var num = ai.get.attitude(player, target);
                            if (num > 0) {
                                if (target.num('h') <= 1) {
                                    num += 2;
                                }
                                if (target.num('h') == 0) {
                                    num += 2;
                                }
                            }
                            return num;
                        }
                        "step 1"
                        if (result.bool) {
                            var targets = result.targets;
                            player.useCard({
                                name: 'wuzhong'
                            }, targets, false);
                        }
                        trigger.untrigger();
                        trigger.finish();
                    },
                },
            },
        },
        qihai3: {
            audio: 2,
            trigger: {
                player: "dieBegin",
            },
            direct: true,
            content: function() {
                "step 0"
                player.judge(function(card) {
                    if (card.name == 'sha') return -1.5;
                    return 1.5;
                }, ui.special);
                "step 1"
                if (result.judge < 0) {
                    player.chooseTarget('选择一名角色使其恢复体力并摸牌', function(card, player, target) {
                        return player != target && trigger.source != target;
                    }).ai = function(target) {
                        var num = ai.get.attitude(player, target);
                        if (num > 0) {
                            if (target.hp == 1) {
                                num += 2;
                            }
                            if (target.hp < target.maxHp) {
                                num += 2;
                            }
                        }
                        return num;
                    }
                    return;
                }
                player.hp = 0;
                player.$gain2(result.card);
                player.gain(result.card);
                trigger.untrigger();
                trigger.finish();
                event.finish();
                "step 2"
                if (result.bool) {
                    var target = result.targets[0];
                    player.logSkill('qihai3', target);
                    player.line(target, 'green');
                    target.recover(target.maxHp - target.hp);
                    target.draw(5);
                    target.addSkill('qihai3');
                    target.update();
                }
            },
            ai: {
                expose: 1,
            },
            priority: 0,
        },
        qihai1: {
            trigger: {
                global: "recoverBegin",
            },
            filter: function(event, player) {
                if (event.qihaiFlag === true) return false;
                return true;
            },
            content: function() {
                'step 0'
                for (var i = 0; i < game.players.length; i++) {
                    if (game.players[i] != trigger.player) {
                        game.players[i].recover(trigger.num).qihaiFlag = true;
                        player.line(game.players[i], 'green');
                    }
                }
            },
            check: function(event, player) {
                if (!player.hasFriend()) return false;
                var frlost = 0;
                var enlost = 0;
                var tp;
                var qz = 0;
                for (var i = 0; i < game.players.length; i++) {
                    tp = game.players[i];
                    if (tp.hp == tp.maxHp || tp == event.player) continue;
                    qz = tp.maxHp - tp.hp + 2;
                    if (tp.hp == 1) qz += 2;
                    if (tp.identity == 'nei') qz -= 2;
                    if (tp.isFriendOf(player))
                        frlost += qz;
                    else
                        enlost += qz;
                }
                if (frlost > enlost) return true;
                return false;
            },
            ai: {
                order: 1,
                expose: 0.1,
                threaten: 4,
            },
            mod: {
                cardUsable: function(card, player, num) {
                    if (card.name == 'sha') return 0;
                    if (get.type(card) == 'equip') return 0;
                },
                maxHandcard: function(player, num) {
                    var pnum = 0;
                    var pmax = player.num('h');
                    var pcard = player.get('h');
                    for (var i = 0; i < pmax; i++) {
                        if (get.type(pcard[i]) == 'equip') pnum++;
                    }
                    return num + player.num('h', 'sha') + pnum;
                },
            },
        },
        rixiang3: {
            audio: 2,
            skillAnimation: "epic",
            trigger: {
                player: "dieBegin",
            },
            forced: true,
            content: function() {
                "step 0"
                if (player.name2) {
                    var n1 = player.name1 || player.name;
                    var n2 = player.name2;
                    if (n1 == 'rixianga' || n1 == 'kamukura') n1 = 'rixiangb';
                    if (n2 == 'rixianga' || n2 == 'kamukura') n2 = 'rixiangb';
                    player.init(n1, n2);
                    player.hp = player.maxHp;
                } else {
                    player.init('rixiangb');
                    player.hp = player.maxHp;
                }
                player.storage.rixcdmg = player.num('he');
                player.$throw(player.get('he'));
                if (player.storage.rixcdmg == 0) return 3;
                var next = player.chooseTarget('选择言弹目标或取消', function(card, player, target) {
                    return player.canUse('sha', target);
                });
                next.ai = function(target) {
                    var num = -ai.get.attitude(_status.event.player, target);
                    if (num > 0) {
                        if (target.hp == 1)
                            num += 1;
                        if (target.hp + target.num('h', 'shan') <= _status.event.player.storage.rixcdmg)
                            num += 1;
                    }
                    return num;
                };
                next.set('source', trigger.source);
                "step 1"
                if (result.bool) {
                    player.lose(player.get('he'));
                    event.tgs = result.targets[0];
                } else {
                    event.goto(3);
                }
                "step 2"
                if (event.tgs.isAlive()) {
                    player.useCard({
                        name: 'sha'
                    }, event.tgs, false);
                    game.delayx(1.5);
                    player.storage.rixcdmg--;
                } else {
                    player.storage.rixcdmg = 0;
                }
                if (player.storage.rixcdmg == 0)
                    event.goto(3);
                else
                    event.goto(2);
                "step 3"
                player.draw(4);
                trigger.untrigger();
                trigger.finish();
                event.finish();
            },
            priority: 0,
            ai: {
                effect: {
                    target: function(card, player) {
                        if (get.tag(card, 'save')) return 'zeroplayertarget';
                    },
                },
            },
        },
        zuimu1: {
            group: ["zuimu1_ready", "zuimu1_dmg", "zuimu1_act"],
            subSkill: {
                ready: {
                    audio: 2,
                    popup: false,
                    forced: true,
                    trigger: {
                        global: "phaseBefore",
                    },
                    filter: function(event, player) {
                        return !player.storage.hasInit;
                    },
                    content: function() {
                        player.storage.hasInit = true;
                        for (var i = 0; i < game.players.length; i++) {
                            game.players[i].storage.zuimu3 = 0;
                        }
                        player.storage.zuimu_tar = player;
                        player.storage.zuimu_behurt = false;
                        player.storage.zuimu_shp = player.hp;
                        player.storage.zuimu1 = true;
                        player.markSkill('zuimu1');
                    },
                    priority: 0,
                },
                dmg: {
                    audio: 2,
                    popup: false,
                    forced: true,
                    trigger: {
                        global: "changeHp",
                    },
                    filter: function(event, player) {
                        return event.player == player.storage.zuimu_tar;
                    },
                    content: function() {
                        'step 0'
                        if (player.storage.zuimu_behurt == false) {
                            var bhp = player.storage.zuimu_shp;
                            if (player.storage.zuimu_tar.hp < bhp) {
                                player.storage.zuimu_behurt = true;
                            } else {
                                player.storage.zuimu_shp = player.storage.zuimu_tar.hp;
                            }
                        }
                    },
                },
                act: {
                    audio: 2,
                    popup: false,
                    forced: true,
                    trigger: {
                        player: "phaseAfter",
                    },
                    content: function() {
                        'step 0'
                        var pl = player.storage.zuimu_tar;
                        if (player.storage.zuimu_behurt == false && pl.isDamaged()) {
                            pl.recover();
                            pl.popup('静感按摩');
                        }
                        pl.storage.zuimu1 = false;
                        pl.unmarkSkill('zuimu1');
                        player.chooseTarget('选择一名角色使其免除注射负面效果，并且若其一回合内未受到伤害，可以回复1点体力', function(card, player, target) {
                            return true;
                        }, true).ai = function(target) {
                            var num = ai.get.attitude(player, target);
                            if (num > 0) num += target.maxHp - target.hp;
                            return num;
                        }
                        "step 1"
                        if (result.bool) {
                            var tgs = result.targets[0];
                            player.storage.zuimu_tar = tgs;
                            tgs.skills.remove('zuimu3');
                            tgs.storage.zuimu3 = 0;
                            tgs.unmarkSkill('zuimu3');
                            tgs.storage.zuimu1 = true;
                            tgs.markSkill('zuimu1');
                            player.storage.zuimu_behurt = false;
                            player.storage.zuimu_shp = tgs.hp;
                        } else {
                            event.goto(0);
                        }
                    },
                    priority: 0,
                },
            },
            intro: {
                content: "已开始静感按摩",
            },
        },
        zuimu2: {
            trigger: {
                source: "damageEnd",
                player: "damageEnd",
            },
            forced: true,
            audio: 2,
            filter: function(event, player) {
                if (event.num > 0 && event.source != undefined) {
                    if (event.source == player) {
                        if (event.player == player.storage.zuimu_tar) return false;
                        player.storage.zuimupd = event.player;
                    } else {
                        if (event.source == player.storage.zuimu_tar) return false;
                        player.storage.zuimupd = event.source;
                    }
                    return true;
                }
                return false;
            },
            content: function() {
                var pl = player.storage.zuimupd;
                var pla = player.storage.zuimu_tar;
                pl.storage.zuimu3++;
                if (pl.storage.zuimu3 == 1)
                    pl.addSkill('zuimu3');
                game.addVideo('storage', pl, ['zuimu3', pl.storage.zuimu3]);
                if (pl.storage.zuimu3 >= 3) {
                    game.delay(3);
                    pl.skills.remove('zuimu3');
                    pl.storage.zuimu3 = 0;
                    pl.$fire();
                    pl.damage(2);
                    var tpl = pl.previous;
                    if (tpl == player || tpl == pla)
                        tpl.recover();
                    else
                        tpl.damage();
                    if (game.players.length > 2) {
                        tpl = pl.next;
                        if (tpl == player || tpl == pla)
                            tpl.recover();
                        else
                            tpl.damage();
                    }
                }
            },
            priority: 0,
        },
        zuimu3: {
            forced: true,
            mark: true,
            unique: true,
            intro: {
                content: function(storage) {
                    return '已被注射' + storage + '层';
                },
            },
        },
        biangu1: {
            trigger: {
                global: "shaBegin",
            },
            direct: true,
            filter: function(event, player) {
                if (event.player == player) return false;
                if (player.num('h', 'sha') == 0) return false;
                return true;
            },
            content: function() {
                'step 0'
                var tipstr = '是否打断' + get.translation(trigger.player) + '出杀并对其出一张杀？';
                var next = player.chooseCard(tipstr, {
                    name: 'sha'
                });
                next.ai = function() {
                    var event = _status.event;
                    var num = -ai.get.attitude(player, trigger.player) + ai.get.attitude(player, trigger.source);
                    return num;
                };
                next.autochoose = lib.filter.autoRespondSha;
                next.source = trigger.player;
                'step 1'
                if (result.bool) {
                    player.useCard(result.card || result.cards[0], trigger.player);
                    trigger.untrigger();
                    trigger.finish();
                    event.finish();
                } else {
                    event.finish();
                }
            },
            ai: {
                expose: 0.5,
            },
            priority: 0,
            mod: {
                maxHandcard: function(player, num) {
                    return num + player.num('h', 'sha');
                },
            },
        },
        biangu2: {
            group: ["biangu2_pbef", "biangu2_bkatk"],
            subSkill: {
                pbef: {
                    audio: 2,
                    forced: true,
                    trigger: {
                        player: "phaseBefore",
                    },
                    content: function() {
                        'step 0'
                        if (player.storage.targ1 != undefined)
                            player.storage.targ1.removeSkill('biangu3');
                        if (player.storage.targ2 != undefined)
                            player.storage.targ2.removeSkill('biangu3');
                        var ra = Math.floor(Math.random() * game.players.length);
                        while (game.players[ra] == player)
                            ra = Math.floor(Math.random() * game.players.length);
                        var pl = game.players[ra];
                        pl.addSkill('biangu3');
                        player.line(pl, 'red');
                        player.storage.targ1 = pl;
                        if (game.players.length > 2) {
                            while (game.players[ra] == player || game.players[ra] == player.storage.targ1)
                                ra = Math.floor(Math.random() * game.players.length);
                            pl = game.players[ra];
                            pl.addSkill('biangu3');
                            player.line(pl, 'red');
                            player.storage.targ2 = pl;
                        } else {
                            player.storage.targ2 = undefined;
                        }
                    },
                    priority: 0,
                },
                bkatk: {
                    audio: 2,
                    trigger: {
                        global: "shaBegin",
                    },
                    filter: function(event, player) {
                        if (event.card == undefined || get.color(event.card) == 'none' || event.player == player) return false;
                        return (event.player == player.storage.targ1 || event.player == player.storage.targ2);
                    },
                    prompt: "洞察:是否打断并获取此杀?",
                    content: function() {
                        'step 0'
                        player.$gain2(trigger.card);
                        player.gain(trigger.card);
                        trigger.untrigger();
                        trigger.finish();
                    },
                    check: function(event, player) {
                        var num = 0;
                        num -= ai.get.attitude(player, event.player);
                        if (player.num('h', 'sha') == 0) num += Math.random() * 6;
                        return (num > 0);
                    },
                    priority: 1,
                },
            },
        },
        biangu3: {
            trigger: {
                player: "damageBegin",
            },
            filter: function(event) {
                if (event.source == undefined || event.source == event.player) return false;
                var targ1 = event.source;
                var targ2 = event.source;
                var t1 = event.source.storage.targ1;
                var t2 = event.source.storage.targ2;
                if (t1 != undefined)
                    targ1 = t1;
                if (t2 != undefined)
                    targ2 = t2;
                if (event.player == targ1 || event.player == targ2)
                    return true;
                return false;
            },
            mark: true,
            marktext: "破",
            intro: {
                content: "已被洞察到弱点",
            },
            forced: true,
            content: function() {
                trigger.num *= 2;
            },
            ai: {
                threaten: 2,
                effect: {
                    player: function(card) {
                        if (card.name == 'sha') return 'zeroplayertarget';
                    },
                    target: function(card, player, target, effect) {
                        if (card.name == 'sha') return effect;
                        var targ1;
                        var targ2;
                        var t1 = target.storage.targ1;
                        var t2 = target.storage.targ2;
                        if (t1 != undefined)
                            targ1 = t1;
                        if (t2 != undefined)
                            targ2 = t2;
                        if (player == targ1 || player == targ2)
                            return [1, 4];
                    },
                },
            },
            priority: -10,
        },
        rixiang4: {
            trigger: {
                global: "useCardToBegin",
            },
            direct: true,
            priority: 1500,
            filter: function(event, player) {
                if (event.card.isBeated) {
                    event.untrigger();
                    event.finish();
                    return false;
                }
                if (event.player == player) return false;
                if (player.num('h') < 2) return false;
                return true;
            },
            content: function() {
                'step 0'
                var tipstr = '是否弃置2张牌无效化' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
                var next = player.chooseCard('h', tipstr, 2).ai = function() {
                    var event = _status.event;
                    var num = -ai.get.attitude(player, trigger.player);
                    if (num > 0) num += ai.get.value(trigger.card);
                    if (num > 0) num -= Math.random() * (12 - event.player.num('h'));
                    return num;
                };
                'step 1'
                if (result.bool) {
                    game.playSe('tie', 'effect');
                    if (trigger.card) trigger.card.isBeated = true;
                    player.line(trigger.player, 'red');
                    player.discard(result.cards);
                    trigger.untrigger();
                    trigger.finish();
                    event.finish();
                } else {
                    event.finish();
                }
            },
            ai: {
                basic: {
                    useful: [6, 4],
                    value: [6, 4],
                },
                expose: 0.1,
            },
            mod: {
                maxHandcard: function(player) {
                    return Infinity;
                },
            },
        },
        monokuma1: {
            group: ["monokuma1_chaos", "monokuma1_refresh"],
            subSkill: {
                refresh: {
                    trigger: {
                        player: "phaseDrawBefore",
                        global: "gameDrawAfter",
                    },
                    direct: true,
                    content: function() {
                        player.storage.monokuma1 = true;
                        player.markSkill('monokuma3');
                        player.update();
                    },
                    priority: 0,
                },
                chaos: {
                    trigger: {
                        global: "damageBegin",
                    },
                    direct: true,
                    priority: -10,
                    popup: false,
                    filter: function(event, player) {
                        if (player.storage.monokuma1 != true) return false;
                        if (event.num == 0) return false;
                        if (event.player.num('he') < event.num) return false;
                        return true;
                    },
                    content: function() {
                        "step 0"
                        player.chooseTarget(get.translation(trigger.player) + '即将受到伤害，是否发动【替罪】？', function(card, player, target) {
                            if (trigger.player == target) return false;
                            return true;
                        }).ai = function(target) {
                            var pl = trigger.player;
                            var ra1 = ai.get.attitude(player, pl);
                            var ra2 = ai.get.attitude(player, target);
                            var num = ra1;
                            var hc = pl.get('he');
                            if (ra1 > 0) {
                                if (ra2 < 0) num += 2;
                                hc.sort(function(a, b) {
                                    return ai.get.value(a, pl) > ai.get.value(b, pl) ? 1 : -1
                                });
                                hc = hc.slice(0, trigger.num);
                                var hcn = 0;
                                for (var i = 0; i < hc.length; i++) {
                                    hcn += ai.get.value(hc[i], pl)
                                };
                                if (hcn > 2) num -= hcn - 2;
                                if (pl.hp < pl.maxHp / 2) num += 2;
                                num += trigger.num - 1;
                            }
                            return num;
                        };
                        "step 1"
                        if (result.bool) {
                            if (Math.random() < 0.5)
                                game.playSe('monokuma11');
                            else
                                game.playSe('monokuma12');
                            player.popup("幕后黑手");
                            player.line(trigger.player, 'green');
                            result.bool = false;
                            event.temptar = result.targets[0];
                            trigger.player.chooseCard('he', '将' + trigger.num + '张牌交给' + get.translation(result.targets[0]), trigger.num, true);
                        } else {
                            event.finish();
                        }
                        "step 2"
                        if (result.bool) {
                            player.storage.monokuma1 = false;
                            player.unmarkSkill('monokuma3');
                            player.update();
                            trigger.player.$give(result.cards.length, event.temptar);
                            event.temptar.gain(result.cards);
                            trigger.player.popup("脱罪");
                            event.temptar.popup("替罪");
                            trigger.player.line(event.temptar, 'red');
                            game.log(player, '将本该由', trigger.player, '承受的伤害转移给了', event.temptar);
                            if (player.maxHp == Infinity && event.temptar == player) player.useSkill('monokuma5');
                            trigger.player = event.temptar;
                            game.delayx(2);
                        }
                        event.finish();
                    },
                    ai: {
                        expose: 0.5,
                    },
                },
            },
        },
        monokuma2: {
            audio: "ext:弹丸杀:true",
            group: ["monokuma2_hide", "monokuma2_eff", "monokuma2_end"],
            subSkill: {
                hide: {
                    trigger: {
                        player: "phaseDrawAfter",
                    },
                    force: true,
                    direct: true,
                    content: function() {
                        "step 0"
                        player.chooseBool('是否发动【假死】？').ai = function() {
                            var num = 0;
                            num = (player.maxHp / 2 - player.hp) + Math.random() * 2 - 1;
                            return (num > 0);
                        };
                        "step 1"
                        if (result.bool) {
                            player.skip('phaseUse');
                            player.skip('phaseDiscard');
                            player.skip('phaseDraw');
                            player.storage.monokuma2 = true;
                            player.markSkill('monokuma4');
                            player.logSkill('monokuma2');
                            player.rlhp = player.loseHp;
                            player.loseHp = function(num) {
                                game.playSe('monokuma11');
                                player.popup('啊啊啊');
                            };
                        } else {
                            player.storage.monokuma2 = false;
                            player.unmarkSkill('monokuma4');
                        }
                    },
                    priority: 0,
                },
                eff: {
                    trigger: {
                        player: ["damageBegin", "discardBegin"],
                        target: "useCardToBegin",
                    },
                    force: true,
                    direct: true,
                    priority: 100,
                    popup: false,
                    filter: function(event, player) {
                        return player.storage.monokuma2;
                    },
                    content: function() {
                        "step 0"
                        game.playSe('monokuma11');
                        player.popup('啊啊啊');
                        trigger.untrigger();
                        trigger.finish();
                        event.finish();
                    },
                    ai: {
                        effect: {
                            target: function(card, player, target, effect) {
                                if (target.storage.monokuma2) return 'zeroplayertarget';
                            },
                        },
                    },
                },
                end: {
                    forced: true,
                    direct: true,
                    trigger: {
                        player: "phaseUseBegin",
                    },
                    content: function() {
                        "step 0"
                        if (player.rlhp != undefined) player.loseHp = player.rlhp;
                        player.storage.monokuma2 = false;
                        player.unmarkSkill('monokuma4');
                    },
                    priority: 0,
                },
            },
        },
        monokuma3: {
            intro: {
                content: "本熊已经准备好颠倒黑白了kuma!",
            },
        },
        monokuma4: {
            intro: {
                content: "人家已经死了，才不会起来呢!",
            },
        },
        monokuma5: {
            trigger: {
                global: "dieAfter",
            },
            direct: true,
            forced: true,
            filter: function(event, player) {
                if (event.player == player || player.hp != Infinity) return false;
                return true;
            },
            content: function() {
                'step 0'
                player.$fullscreenpop('这是出了什么Bug吗', 'fire');
                var fhp = 6;
                if (player.name2) {
                    var pl1 = player.name1 || player.name;
                    fhp = 0;
                    var hp1 = lib.character[pl1][2];
                    var hp2 = lib.character[player.name2][2];
                    if (pl1 == 'monokuma') hp1 = 6;
                    if (player.name2 == 'monokuma') hp2 = 6;
                    switch (get.config('double_hp')) {
                        case 'pingjun':
                            fhp = Math.floor((hp1 + hp2) / 2);
                            break;
                        case 'zuidazhi':
                            fhp = Math.max(hp1, hp2);
                            break;
                        case 'zuixiaozhi':
                            fhp = Math.min(hp1, hp2);
                            break;
                        case 'zonghe':
                            fhp = hp1 + hp2;
                            break;
                        default:
                            fhp = hp1 + hp2 - 3;
                    }
                }
                player.maxHp = fhp;
                player.update();
                game.playSe('monokuma2');
                player.removeSkill('monokuma5');
            },
            ai: {
                effect: {
                    target: function(card, player) {
                        if (get.tag(card, 'damage')) return 'zeroplayertarget';
                    },
                },
            },
        },
        zhaorinai1: {
            group: ["zhaorinai1_seltarget", "zhaorinai1_eff", "zhaorinai1_cg"],
            subSkill: {
                seltarget: {
                    enable: "phaseUse",
                    usable: 1,
                    filter: function(event, player) {
                        return true;
                    },
                    check: function(card) {
                        return 10 - ai.get.value(card)
                    },
                    filterTarget: function(card, player, target) {
                        if (player == target) return false;
                        return true;
                    },
                    targetprompt: function(target) {
                        if (target.storage.zhaorinai2)
                            return '取消保护';
                        else
                            return '进行保护';
                    },
                    selectTarget: function() {
                        return [1, game.players.length - 1];
                    },
                    multitarget: true,
                    content: function() {
                        var tp;
                        for (var i = 0; i < targets.length; i++) {
                            tp = targets[i];
                            if (tp.storage.zhaorinai2) {
                                tp.storage.zhaorinai2 = false;
                                tp.unmarkSkill('zhaorinai2');
                            } else {
                                tp.storage.zhaorinai2 = true;
                                tp.markSkill('zhaorinai2');
                            }
                        }
                        tp = 1;
                        for (var i = 0; i < game.players.length; i++) {
                            if (game.players[i].storage.zhaorinai2) tp++;
                        };
                        player.storage.zhaorinai3 = tp;
                        game.addVideo('storage', player, ['zhaorinai3', player.storage.zhaorinai3]);
                        player.markSkill('zhaorinai3');
                        if (Math.random() < 0.5)
                            game.playSe('zhaorinai1');
                        else
                            game.playSe('zhaorinai2');
                        game.delayx(2);
                    },
                    ai: {
                        order: 8,
                        result: {
                            player: function(player, target) {
                                var num = ai.get.attitude(player, target);
                                if (num < 0 && target.storage.zhaorinai2) return 20;
                                var pt = 0;
                                var unseled = ui.selected.targets.indexOf(target) < 0;
                                for (var i = 0; i < game.players.length; i++) {
                                    if ((game.players[i].storage.zhaorinai2 && unseled) || (!game.players[i].storage.zhaorinai2 && !unseled)) pt++;
                                }
                                if (pt > player.hp / 2) {
                                    if (target.storage.zhaorinai2)
                                        return -player.hp / 2 + pt;
                                    else
                                        return player.hp / 2 - pt - 2;
                                }
                                if (num > 0) {
                                    if (target.hp / target.maxHp < 0.5)
                                        num += (target.hp / target.maxHp) * 3;
                                    else if (target.hp == target.maxHp)
                                        num -= 4;
                                    else
                                        num -= 2;
                                    if (((player.identity == 'nei' && game.players.length > 2) || player.identity == 'zhong') && (target.identity == 'zhu') && num < 0 && player.hp > target.hp)
                                        num += 4;
                                }
                                if (num > 0 && target.storage.zhaorinai2) num = -3;
                                return num;
                            },
                        },
                        expose: 0.6,
                    },
                },
                cg: {
                    trigger: {
                        global: ["dieBegin", "gameDrawAfter"],
                    },
                    direct: true,
                    forced: true,
                    filter: function(event, player) {
                        if (event.name == 'gameDraw') {
                            player.storage.zhaorinai3 = 1;
                            game.addVideo('storage', player, ['zhaorinai2', player.storage.zhaorinai3]);
                            return false;
                        }
                        return (event.player.storage.zhaorinai2 || event.player == player);
                    },
                    content: function() {
                        if (trigger.player == player) {
                            for (var i = 0; i < game.players.length; i++) {
                                game.players[i].storage.zhaorinai2 = false;
                                game.players[i].unmarkSkill('zhaorinai2');
                            }
                        } else {
                            player.storage.zhaorinai3--;
                            game.addVideo('storage', player, ['zhaorinai2', player.storage.zhaorinai3]);
                            trigger.player.storage.zhaorinai2 = false;
                            trigger.players.unmarkSkill('zhaorinai2');
                        }
                    },
                },
                eff: {
                    trigger: {
                        global: ["damageBegin", "recoverBegin"],
                    },
                    direct: true,
                    priority: -100,
                    filter: function(event, player) {
                        if (event.player == player) return false;
                        return event.player.storage.zhaorinai2;
                    },
                    content: function() {
                        if (trigger.name == 'damage') {
                            trigger.player.line(player, 'red');
                            trigger.player = player;
                        } else {
                            trigger.player.line(player, 'green');
                            player.recover(trigger.num)._triggered = null;
                        }
                    },
                },
            },
        },
        zhaorinai2: {
            intro: {
                content: "难道元气系妹子还护不住你？",
            },
        },
        zhaorinai3: {
            mark: true,
            intro: {
                content: function(storage) {
                    return '你的杀可以选择' + storage + '名角色作为目标';
                },
            },
            mod: {
                selectTarget: function(card, player, range) {
                    if (card.name == 'sha' && range[1] != -1) range[1] = player.storage.zhaorinai3;
                },
            },
        },
        wuqie1: {
            group: ["wuqie1_seltarget", "wuqie1_eff", "wuqie1_can"],
            subSkill: {
                seltarget: {
                    enable: "phaseUse",
                    usable: 1,
                    prompt: "你可以弃置一张手牌，选择一名角色查看其手牌，如果这些牌里有与你弃置的牌名字相同的牌，你可以选择获得其中两张牌，或不获得牌对其造成1点伤害，并对其施加【崩溃】标记，直到下次你的回合开始前，该角色不能回复体力值。",
                    filter: function(event, player) {
                        return player.num('h') > 0;
                    },
                    filterTarget: function(card, player, target) {
                        if (player == target) return false;
                        return target.num('h') > 0;
                    },
                    filterCard: true,
                    check: function(card) {
                        if (card.name == 'sha' || card.name == 'shan') return 10;
                        return Math.random() * 4;
                    },
                    content: function() {
                        "step 0"
                        var tg = target.get('h');
                        var ishit = false;
                        var card = card || cards[0];
                        player.logSkill('wuqie1');
                        game.playSe('wuqie1');
                        for (var i = 0; i < tg.length; i++) {
                            if (tg[i].name == card.name) {
                                ishit = true;
                                break;
                            }
                        }
                        if (ishit) {
                            var next = player.choosePlayerCard('选择并获得2张牌或放弃并对' + get.translation(target) + '造成1点伤害，并附加【崩溃】标记', 'h', target, Math.min(2, target.num('h')), function(button) {
                                var trigger = _status.event.getTrigger();
                                var player = _status.event.player;
                                var eff = ai.get.damageEffect(target, player, player);
                                if (ai.get.attitude(player, target) > 0) {
                                    if (eff >= 0) return false;
                                    return 10 - ai.get.buttonValue(button);
                                }
                                if (eff <= 0) return ai.get.buttonValue(button);
                                if (target.hp == 1) return false;
                                if (_status.event.dialog.buttons.length < 2) return -1;
                                var num = 0;
                                for (var i = 0; i < _status.event.dialog.buttons.length; i++) {
                                    if (ai.get.buttonValue(_status.event.dialog.buttons[i]) > 1.5) num++;
                                }
                                if (num >= 2) return ai.get.buttonValue(button) - 1.5;
                            });
                            next.visible = true;
                        } else {
                            player.viewCards('查看' + get.translation(target) + '的手牌', tg);
                            event.finish();
                        }
                        "step 1"
                        if (result.bool) {
                            var gcards = [];
                            for (var i = 0; i < result.links.length; i++) gcards.push(result.links[i]);
                            player.$gain2(gcards);
                            player.gain(gcards);
                        } else {
                            target.damage();
                            target.storage.wuqie3 = true;
                            target.markSkill('wuqie3');
                        }
                    },
                    ai: {
                        order: 9,
                        expose: 0.5,
                        result: {
                            player: function(player, target) {
                                return -ai.get.attitude(player, target);
                            },
                        },
                    },
                },
                eff: {
                    trigger: {
                        global: "recoverBegin",
                    },
                    direct: true,
                    priority: 10,
                    filter: function(event, player) {
                        if (event.player == player) return false;
                        return event.player.storage.wuqie3;
                    },
                    content: function() {
                        trigger.player.popup('崩溃');
                        trigger.untrigger();
                        trigger.finish();
                        event.finish();
                    },
                },
                can: {
                    popup: false,
                    trigger: {
                        player: "phaseBegin",
                    },
                    direct: true,
                    content: function() {
                        for (var i = 0; i < game.players.length; i++) {
                            game.players[i].storage.wuqie3 = false;
                            game.players[i].unmarkSkill('wuqie3');
                        }
                    },
                },
            },
        },
        wuqie2: {
            trigger: {
                global: "useCardToBegin",
            },
            direct: true,
            priority: 1501,
            filter: function(event, player) {
                if (event.player == player || event.target != player) return false;
                var tg = player.get('h');
                for (var i = 0; i < tg.length; i++)
                    if (tg[i].name == event.card.name) return true;
                return false;
            },
            content: function() {
                'step 0'
                var tipstr = '是否击破' + get.translation(trigger.player) + '的' + get.translation(trigger.card) + '?';
                var next = player.chooseBool(tipstr).ai = function() {
                    var num = ai.get.effect(player, trigger.card, trigger.player, trigger.player, player);
                    return (num < 0);
                };
                'step 1'
                if (result.bool) {
                    game.playSe('wuqie2');
                    player.line(trigger.player, 'red');
                    trigger.untrigger();
                    trigger.finish();
                    event.finish();
                } else {
                    event.finish();
                }
            },
            ai: {
                basic: {
                    useful: [6, 4],
                    value: [6, 4],
                },
            },
        },
        wuqie3: {
            intro: {
                content: "你已经崩溃了，无法回复体力值",
            },
        },
        jiutoulong1: {
            trigger: {
                global: ["phaseDiscardBefore"],
            },
            filter: function(event, player) {
                return (event.player.num('h') > event.player.getHandcardLimit());
            },
            content: function() {
                "step 0"
                trigger.player.damage();
            },
        },
        jiutoulong2: {
            unique: true,
            enable: "phaseUse",
            filterCard: true,
            selectCard: -1,
            mark: true,
            intro: {
                content: "limited",
            },
            filter: function(event, player) {
                return !player.storage.jiutoulong2;
            },
            prepare: function(cards, player, targets) {
                player.line(targets);
            },
            discard: true,
            filterTarget: function(card, player, target) {
                return target != player;
            },
            init: function(player) {
                player.storage.jiutoulong2 = false;
            },
            content: function() {
                "step 0"
                var pl;
                for (var i = 0; i < game.players.length; i++) {
                    pl = game.players[i];
                    if (pl == targets[0]) continue;
                    pl.useCard({
                        name: 'juedou'
                    }, targets, false);
                    game.delayx(1);
                }
                player.unmarkSkill('jiutoulong2');
                player.storage.jiutoulong2 = true;
            },
            ai: {
                expose: 0.6,
                order: 1,
                result: {
                    player: function(player, target) {
                        var num = -ai.get.attitude(player, target);
                        if (num > 0 && target.hp < game.players.length - 3) num += 10;
                        return num;
                    },
                },
            },
        },
        lingtian1: {
            audio: 2,
            trigger: {
                global: "recoverBegin",
            },
            priority: 10,
            forced: true,
            direct: true,
            filter: function(event, player) {
                if (event.player == player) return false;
                return true;
            },
            content: function() {
                "step 0"
                trigger.player.draw(trigger.num);
                trigger.player.popup('魔音');
                trigger.untrigger();
                trigger.finish();
                event.finish();
            },
        },
        shenzuo3: {
            audio: 2,
            trigger: {
                global: "recoverBegin",
            },
            direct: true,
            priority: 10000,
            filter: function(event, player) {
                if (!game.cmpName(player, 'kamukura')) {
                    player.clearSkills();
                    return false;
                }
                if (event.player == player || event.player.hp < player.hp) return false;
                return true;
            },
            content: function() {
                "step 0"
                var tipstr = '是否对' + get.translation(trigger.player) + '发动【压制】?';
                var next = player.chooseBool(tipstr).ai = function() {
                    return ai.get.attitude(player, trigger.player) <= 0;
                };
                'step 1'
                if (result.bool) {
                    player.line(trigger.player, 'red');
                    player.draw(2);
                    trigger.player.loseHp(trigger.num);
                    trigger.player.popup('压制');
                    trigger.untrigger();
                    trigger.finish();
                    event.finish();
                } else {
                    event.finish();
                }
            },
        },
        tumei1: {
            audio: "ext:弹丸杀:3",
            enable: "phaseUse",
            usable: 1,
            selectCard: 2,
            filterCard: function(card) {
                if (card.name == 'tao' || card.name == 'sha') return true;
                return false;
            },
            position: "h",
            discard: false,
            prompt: "选择两张桃或者杀",
            check: function(card) {
                return 15 - ai.get.value(card)
            },
            filter: function(event, player) {
                return !player.isTurnedOver() && game.dead.length > 0;
            },
            prepare: function(cards, player, targets) {
                player.storage.tumeiRem = cards;
            },
            content: function() {
                "step 0"
                event.func_bak = game.players;
                game.players = game.dead;
                player.chooseTarget('选择一名阵亡角色使其复活', function(card, player, target) {
                    return player != target;
                }, true).ai = function(target) {
                    var num = ai.get.attitude(player, target);
                    return num;
                };
                "step 1"
                if (result.bool) {
                    game.players = event.func_bak;
                    player.$throw(player.storage.tumeiRem);
                    player.line(result.targets);
                    var target = result.targets[0];
                    player.logSkill('tumei1', target);
                    player.line(target, 'green');
                    target.revive();
                    target.recover();
                    target.draw(2);
                    target.update();
                    player.turnOver();
                }
            },
            ai: {
                basic: {
                    order: 5,
                    useful: 8,
                    value: 4,
                },
                result: {
                    player: 3,
                    target: 3,
                },
                tag: {},
            },
        },
        tumei2: {
            enable: "phaseUse",
            usable: 1,
            prompt: "获得一张牌，并令一名角色反面，自己同时翻面。",
            filter: function(event, player) {
                return !player.isTurnedOver();
            },
            filterTarget: function(card, player, target) {
                if (player == target) return false;
                return !target.isTurnedOver();
            },
            content: function() {
                player.draw();
                target.turnOver();
                player.turnOver();
            },
            ai: {
                order: 9,
                expose: 0.5,
                result: {
                    player: function(player, target) {
                        return -ai.get.attitude(player, target);
                    },
                },
            },
        },
        tumei3: {
            trigger: {
                player: "damageBegin",
            },
            forced: true,
            audio: 2,
            filter: function(event, player) {
                if (event.num > 0 && (player.isLinked() || player.isTurnedOver())) return true;
                return false;
            },
            content: function() {
                trigger.num--;
            },
            priority: 0,
        },
        kamukura4: {
            skillAnimation: "epic",
            trigger: {
                player: ["phaseDrawBegin", "recoverBegin", "judgeBefore"],
                target: "useCardToBefore",
            },
            popup: false,
            forced: true,
            filter: function(event, player) {
                player.storage.bozhittype = -1;
                if (event.name == 'phaseDraw') {
                    player.storage.bozhittype = 0;
                    return true;
                }
                if (event.name == 'judge' && (event.judgestr == '闪电' || event.judgestr == '乐不思蜀' || event.judgestr == '兵粮寸断' || event.judgestr == '草木皆兵' || event.judgestr == '八卦阵')) {
                    player.storage.bozhittype = 3;
                    return true;
                }
                if (event.name == 'recover') {
                    player.storage.bozhittype = 2;
                    return true;
                }
                if (get.type(event.card) == 'trick' && event.card.name != 'taoyuan' && event.card.name != 'wugu' && event.target == player && event.player != player) {
                    player.storage.bozhittype = 1;
                    return true;
                }
                return false;
            },
            content: function() {
                'step 0'
                var i = 0;
                switch (player.storage.bozhittype) {
                    case 0:
                        if (Math.random() < 0.5)
                            game.playSe('bozhi22');
                        else
                            game.playSe('bozhi23');
                        for (i = 1; Math.random() < 0.8 / i; i++) {
                            trigger.num++;
                        }
                        if (i > 1) game.log(player, "幸运降临，追加摸", i - 1, "张牌！");
                        if (i > 1) player.popup((i - 1).toString() + "x 追加");
                        break;
                    case 1:
                        if (Math.random() < (0.6 + player.maxHp / player.hp * 0.1)) {
                            game.log(player, '幸运降临！', trigger.card, '对', trigger.target, '失效');
                            player.popup("lucky!");
                            trigger.untrigger();
                            trigger.finish();
                            i = 2;
                        }
                        break;
                    case 2:
                        for (i = 1; Math.random() < 0.5 / i; i++) {}
                        if (i > 1) {
                            trigger.num += i - 1;
                            game.log(player, "幸运降临，追加", i - 1, "点恢复！");
                            player.popup((i - 1).toString() + "x 追加");
                        }
                        break;
                    case 3:
                        i = 0;
                        var tc = ui.cardPile.firstChild;
                        var cn = tc.name;
                        var cs = get.suit(tc);
                        var cnum = tc.number;
                        var cnu = tc.nature;
                        var cc = get.color(tc);
                        var jc = trigger.judgestr;
                        var nn = cn;
                        var ns = cs;
                        var nnum = cnum;
                        var nnu = cnu;
                        switch (jc) {
                            case '闪电':
                                if (cs == 'spade' && cnum >= 2 && cnum <= 9) ns = 'heart';
                                break;
                            case '乐不思蜀':
                                if (cs != 'heart') ns = 'heart';
                                break;
                            case '兵粮寸断':
                                if (cs != 'club') ns = 'club';
                                break;
                            case '草木皆兵':
                                if (cs != 'club') ns = 'club';
                                break;
                            case '八卦阵':
                                if (cc != 'red') ns = 'heart';
                                break;
                        }
                        if (ns != cs) {
                            i = 2;
                            game.playSe('bozhi21');
                            player.popup('lucky!');
                            var newcard = game.createCard(nn, ns, nnum, nnu);
                            ui.cardPile.removeChild(tc);
                            ui.cardPile.insertBefore(newcard, ui.cardPile.firstChild);
                        }
                        break;
                }
                if (i == 1) game.log("看来你的幸运也到头了。");
                if (i == 1) player.popup("....");
            },
            priority: 0,
        },
		hujia:{
			audio:2,
			unique:true,
			zhuSkill:true,
			trigger:{player:'chooseToRespondBegin'},
			filter:function(event,player){
				if(event.responded) return false;
				if(player.storage.hujiaing) return false;
				if(!player.hasZhuSkill('hujia')) return false;
				if(event.filterCard({name:'shan'})==false) return false;
				return game.hasPlayer(function(current){
					return current!=player&&current.group=='wei';
				});
			},
			check:function(event,player){
				if(ai.get.damageEffect(player,event.player,player)>=0) return false;
				return true;
			},
			content:function(){
				"step 0"
				if(event.current==undefined) event.current=player.next;
				if(event.current==player){
					event.finish();
				}
				else if(event.current.group=='wei'){
					if((event.current==game.me&&!_status.auto)||(
						ai.get.attitude(event.current,player)>2)||
						event.current.isOnline()){
						player.storage.hujiaing=true;
						var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张闪？',{name:'shan'});
						next.set('ai',function(){
							var event=_status.event;
							return (ai.get.attitude(event.player,event.source)-2);
						});
						next.autochoose=lib.filter.autoRespondShan;
						next.set('source',player);
					}
				}
				"step 1"
				player.storage.hujiaing=false;
				if(result.bool){
					event.finish();
					trigger.result=result;
					trigger.responded=true;
					trigger.animate=false;
					if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
						event.current.ai.shown+=0.3;
						if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
					}
				}
				else{
					event.current=event.current.next;
					event.goto(0);
				}
			},
		},
		jianxiong:{
			audio:2,
			trigger:{player:'damageEnd'},
			filter:function(event,player){
				return get.itemtype(event.cards)=='cards'&&get.position(event.cards[0])=='d';
			},
			content:function(){
				player.gain(trigger.cards);
				player.$gain2(trigger.cards);
			},
			ai:{
				maixie:true,
				effect:{
					target:function(card,player){
						if(player.hasSkill('jueqing')) return [1,-1];
						if(get.tag(card,'damage')) return [1,0.5];
					}
				}
			}
		},
		fankui:{
			audio:2,
			trigger:{player:'damageEnd'},
			direct:true,
			filter:function(event,player){
				return (event.source&&event.source.num('he')&&event.source!=player);
			},
			content:function(){
				player.gainPlayerCard(get.prompt('fankui',trigger.source),trigger.source,ai.get.buttonValue,'he').set('logSkill',['fankui',trigger.source]);
			},
			ai:{
				effect:{
					target:function(card,player,target){
						if(player.num('he')>1&&get.tag(card,'damage')){
							if(player.hasSkill('jueqing')) return [1,-1.5];
							if(ai.get.attitude(target,player)<0) return [1,1];
						}
					}
				}
			}
		},
		guicai:{
			audio:2,
			trigger:{global:'judge'},
			direct:true,
			filter:function(event,player){
				return player.num('h')>0;
			},
			content:function(){
				"step 0"
				player.chooseCard(get.translation(trigger.player)+'的'+(trigger.judgestr||'')+'判定为'+
				get.translation(trigger.player.judging[0])+'，'+get.prompt('guicai')).set('ai',function(card){
					var trigger=_status.event.getTrigger();
					var player=_status.event.player;
					var judging=_status.event.judging;
					var result=trigger.judge(card)-trigger.judge(judging);
					var attitude=ai.get.attitude(player,trigger.player);
					if(attitude==0||result==0) return 0;
					if(attitude>0){
						return result-ai.get.value(card)/2;
					}
					else{
						return -result-ai.get.value(card)/2;
					}
				}).set('judging',trigger.player.judging[0]);
				"step 1"
				if(result.bool){
					player.respond(result.cards,'highlight');
				}
				else{
					event.finish();
				}
				"step 2"
				if(result.bool){
					player.logSkill('guicai');
					if(trigger.player.judging[0].clone){
						trigger.player.judging[0].clone.classList.remove('thrownhighlight');
						game.broadcast(function(card){
							if(card.clone){
								card.clone.classList.remove('thrownhighlight');
							}
						},trigger.player.judging[0]);
						game.addVideo('deletenode',player,get.cardsInfo([trigger.player.judging[0].clone]));
					}
					ui.discardPile.appendChild(trigger.player.judging[0]);
					trigger.player.judging[0]=result.cards[0];
					if(!get.owner(result.cards[0],'judge')){
						trigger.position.appendChild(result.cards[0]);
					}
					game.log(trigger.player,'的判定牌改为',result.cards[0]);
					game.delay(2);
				}
			},
			ai:{
				tag:{
					rejudge:1,
				}
			}
		},
		ganglie:{
			audio:2,
			trigger:{player:'damageEnd'},
			filter:function(event,player){
				return (event.source!=undefined);
			},
			check:function(event,player){
				return (ai.get.attitude(player,event.source)<=0);
			},
			content:function(){
				"step 0"
				player.judge(function(card){
					if(get.suit(card)=='heart') return -2;
					return 2;
				})
				"step 1"
				if(result.judge<2){
					event.finish();return;
				}
				trigger.source.chooseToDiscard(2).set('ai',function(card){
					if(card.name=='tao') return -10;
					if(card.name=='jiu'&&_status.event.player.hp==1) return -10;
					return ai.get.unuseful(card)+2.5*(5-get.owner(card).hp);
				});
				"step 2"
				if(result.bool==false){
					trigger.source.damage();
				}
			},
			ai:{
				result:{
					target:function(card,player,target){
						if(player.hasSkill('jueqing')) return [1,-1];
						if(get.tag(card,'damage')&&ai.get.damageEffect(target,player,player)>0) return [1,0,0,-1.5];
					}
				}
			}
		},
		tuxi:{
			audio:2,
			trigger:{player:'phaseDrawBefore'},
			direct:true,
			content:function(){
				"step 0"
				var check;
				var i,num=game.countPlayer(function(current){
					return current!=player&&current.num('h')&&ai.get.attitude(player,current)<=0;
				});
				check=(num>=2);
				player.chooseTarget(get.prompt('tuxi'),[1,2],function(card,player,target){
					return target.num('h')>0&&player!=target;
				},function(target){
					if(!_status.event.aicheck) return 0;
					var att=ai.get.attitude(_status.event.player,target);
					if(target.hasSkill('tuntian')) return att/10;
					return 1-att;
				}).set('aicheck',check);
				"step 1"
				if(result.bool){
					player.logSkill('tuxi',result.targets);
					player.gainMultiple(result.targets);
					trigger.finish();
					trigger.untrigger();
				}
				else{
					event.finish();
				}
				"step 2"
				game.delay();
			},
			ai:{
				threaten:2,
				expose:0.3
			}
		},
		luoyi:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			check:function(event,player){
				if(player.num('h')<3) return false;
				if(!player.hasSha()) return false;
				return game.hasPlayer(function(current){
					return ai.get.attitude(player,current)<0&&player.canUse('sha',current);
				});
			},
			content:function(){
				player.addTempSkill('luoyi2','phaseEnd');
				trigger.num--;
			}
		},
		luoyi2:{
			trigger:{source:'damageBegin'},
			filter:function(event){
				return event.card&&(event.card.name=='sha'||event.card.name=='juedou')&&event.notLink();
			},
			forced:true,
			content:function(){
				trigger.num++;
			}
		},
		tiandu:{
			audio:2,
			trigger:{player:'judgeEnd'},
			frequent:'check',
			check:function(event){
				if(event.result.card.name=='du') return false;
				return true;
			},
			filter:function(event,player){
				if(get.owner(event.result.card)){
					return false;
				}
				if(event.nogain&&event.nogain(event.result.card)){
					return false;
				}
				return true;
			},
			content:function(){
				player.gain(trigger.result.card);
				player.$gain2(trigger.result.card);
			}
		},
		yiji:{
			audio:2,
			trigger:{player:'damageEnd'},
			frequent:true,
			filter:function(event){
				return (event.num>0)
			},
			content:function(){
				"step 0"
				player.draw(2*trigger.num);
				"step 1"
				event.cards=result;
				"step 2"
				player.chooseCardTarget({
					filterCard:function(card){
						return _status.event.getParent().cards.contains(card);
					},
					selectCard:[1,event.cards.length],
					filterTarget:function(card,player,target){
						return player!=target;
					},
					ai1:function(card){
						if(ui.selected.cards.length>0) return -1;
						if(card.name=='du') return 20;
						return (_status.event.player.num('h')-_status.event.player.hp);
					},
					ai2:function(target){
						var att=ai.get.attitude(_status.event.player,target);
						if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
							if(target.hasSkillTag('nodu')) return 0;
							return 1-att;
						}
						return att-4;
					},
					prompt:'请选择要送人的卡牌'
				});
				"step 3"
				if(result.bool){
					player.line(result.targets,'green');
					result.targets[0].gain(result.cards,player);
					player.$give(result.cards.length,result.targets[0]);
					for(var i=0;i<result.cards.length;i++){
						event.cards.remove(result.cards[i]);
					}
					if(event.cards.length) event.goto(2);
				}
			},
			ai:{
				maixie:true,
				effect:{
					target:function(card,player,target){
						if(get.tag(card,'damage')){
							if(player.hasSkill('jueqing')) return [1,-2];
							if(!target.hasFriend()) return;
							if(target.hp>=4) return [1,get.tag(card,'damage')*2];
							if(target.hp==3) return [1,get.tag(card,'damage')*1.5];
							if(target.hp==2) return [1,get.tag(card,'damage')*0.5];
						}
					}
				}
			}
		},
		luoshen:{
			audio:2,
			trigger:{player:'phaseBegin'},
			frequent:true,
			content:function(){
				"step 0"
				if(event.cards==undefined) event.cards=[];
				player.judge(function(card){
					if(get.color(card)=='black') return 1.5;
					return -1.5;
				},ui.special);
				"step 1"
				if(result.judge>0){
					event.cards.push(result.card);
					if(lib.config.autoskilllist.contains('luoshen')){
						player.chooseBool('是否再次发动？');
					}
					else{
						event._result={bool:true};
					}
				}
				else{
					for(var i=0;i<event.cards.length;i++){
						if(get.position(event.cards[i])!='s'){
							event.cards.splice(i,1);i--;
						}
					}
					player.gain(event.cards);
					if(event.cards.length){
						player.$draw(event.cards);
					}
					event.finish();
				}
				"step 2"
				if(result.bool){
					event.goto(0);
				}
				else{
					player.gain(event.cards);
					if(event.cards.length){
						player.$draw(event.cards);
					}
				}
			}
		},
		qingguo:{
			audio:2,
			enable:['chooseToRespond'],
			filterCard:function(card){
				return get.color(card)=='black';
			},
			viewAs:{name:'shan'},
			viewAsFilter:function(player){
				if(!player.num('h',{color:'black'})) return false;
			},
			prompt:'将一张黑色手牌当闪打出',
			check:function(){return 1},
			ai:{
				respondShan:true,
				skillTagFilter:function(player){
					if(!player.num('h',{color:'black'})) return false;
				},
				effect:{
					target:function(card,player,target,current){
						if(get.tag(card,'respondShan')&&current<0) return 0.6
					}
				}
			}
		},
		rende:{
			audio:2,
			group:['rende1'],
			enable:'phaseUse',
			filterCard:true,
			selectCard:[1,Infinity],
			discard:false,
			prepare:'give',
			filterTarget:function(card,player,target){
				return player!=target;
			},
			check:function(card){
				if(ui.selected.cards.length>1) return 0;
				if(ui.selected.cards.length&&ui.selected.cards[0].name=='du') return 0;
				if(!ui.selected.cards.length&&card.name=='du') return 20;
				var player=get.owner(card);
				if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
					if(ui.selected.cards.length){
						return -1;
					}
					var players=game.filterPlayer();
					for(var i=0;i<players.length;i++){
						if(players[i].get('s').contains('haoshi')&&
							!players[i].isTurnedOver()&&
							!players[i].num('j','lebu')&&
							ai.get.attitude(player,players[i])>=3&&
							ai.get.attitude(players[i],player)>=3){
							return 11-ai.get.value(card);
						}
					}
					if(player.num('h')>player.hp) return 10-ai.get.value(card);
					if(player.num('h')>2) return 6-ai.get.value(card);
					return -1;
				}
				return 10-ai.get.value(card);
			},
			content:function(){
				target.gain(cards,player);
				if(typeof player.storage.rende!='number'){
					player.storage.rende=0;
				}
				if(player.storage.rende>=0){
					player.storage.rende+=cards.length;
					if(player.storage.rende>=2){
						player.recover();
						player.storage.rende=-1;
					}
				}
			},
			ai:{
				order:function(skill,player){
					if(player.hp<player.maxHp&&player.storage.rende<2&&player.num('h')>1){
						return 10;
					}
					return 1;
				},
				result:{
					target:function(player,target){
						if(ui.selected.cards.length&&ui.selected.cards[0].name=='du'){
							if(target.hasSkillTag('nodu')) return 0;
							return -10;
						}
						if(target.num('j','lebu')) return 0;
						var nh=target.num('h');
						var np=player.num('h');
						if(player.hp==player.maxHp||player.storage.rende<0||player.num('h')<=1){
							if(nh>=np-1&&np<=player.hp&&!target.get('s').contains('haoshi')) return 0;
						}
						return Math.max(1,5-nh);
					}
				},
				effect:{
					target:function(card,player,target){
						if(player==target&&get.type(card)=='equip'){
							if(player.num('e',{subtype:get.subtype(card)})){
								var players=game.filterPlayer();
								for(var i=0;i<players.length;i++){
									if(players[i]!=player&&ai.get.attitude(player,players[i])>0){
										return 0;
									}
								}
							}
						}
					}
				},
				threaten:0.8
			}
		},
		rende1:{
			trigger:{player:'phaseUseBegin'},
			forced:true,
			popup:false,
			silent:true,
			content:function(){
				player.storage.rende=0;
			}
		},
		jijiang:{
			unique:true,
			group:['jijiang1','jijiang2'],
			zhuSkill:true,
		},
		jijiang1:{
			audio:2,
			audioname:['liushan'],
			trigger:{player:'chooseToRespondBegin'},
			filter:function(event,player){
				if(event.responded) return false;
				if(player.storage.jijianging) return false;
				if(!player.hasZhuSkill('jijiang')) return false;
				if(event.filterCard({name:'sha'},player,event)==false) return false;
				return game.hasPlayer(function(current){
					return current!=player&&current.group=='shu';
				});
			},
			content:function(){
				"step 0"
				if(event.current==undefined) event.current=player.next;
				if(event.current==player){
					event.finish();
				}
				else if(event.current.group=='shu'){
					player.storage.jijianging=true;
					var next=event.current.chooseToRespond('是否替'+get.translation(player)+'打出一张杀？',{name:'sha'});
					next.set('ai',function(){
						var event=_status.event;
						return (ai.get.attitude(event.player,event.source)-2);
					});
					next.set('source',player);
					next.autochoose=lib.filter.autoRespondSha;
				}
				else{
					event.current=event.current.next;
					event.redo();
				}
				"step 1"
				player.storage.jijianging=false;
				if(result.bool){
					event.finish();
					trigger.result=result;
					trigger.responded=true;
					trigger.animate=false;
					if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
						event.current.ai.shown+=0.3;
						if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
					}
				}
				else{
					event.current=event.current.next;
					event.goto(0);
				}
			}
		},
		jijiang2:{
			audio:2,
			audioname:['liushan'],
			enable:'chooseToUse',
			filter:function(event,player){
				if(event.filterCard&&!event.filterCard({name:'sha'},player,event)) return false;
				if(!player.hasZhuSkill('jijiang')) return false;
				if(player.hasSkill('jijiang3')) return false;
				if(!lib.filter.cardUsable({name:'sha'},player)) return false;
				return game.hasPlayer(function(current){
					return current!=player&&current.group=='shu';
				});
			},
			filterTarget:function(card,player,target){
				if(_status.event._backup&&
					typeof _status.event._backup.filterTarget=='function'&&
					!_status.event._backup.filterTarget({name:'sha'},player,target)){
					return false;
				}
				return player.canUse({name:'sha'},target);
			},
			content:function(){
				"step 0"
				if(event.current==undefined) event.current=player.next;
				if(event.current==player){
					player.addSkill('jijiang3');
					event.getParent(2).step=0;
					event.finish();
				}
				else if(event.current.group=='shu'){
					var next=event.current.chooseToRespond('是否替'+get.translation(player)+'对'+get.translation(target)+'使用一张杀',
					function(card,player,event){
						event=event||_status.event;
						return card.name=='sha'&&event.source.canUse(card,event.target);
					});
					next.set('ai',function(card){
						var event=_status.event;
						return ai.get.effect(event.target,card,event.source,event.player);
					});
					next.set('source',player);
					next.set('target',target);
					next.autochoose=lib.filter.autoRespondSha;
				}
				else{
					event.current=event.current.next;
					event.redo();
				}
				"step 1"
				if(result.bool){
					event.finish();
					if(result.cards&&result.cards.length==1&&result.cards[0].name=='sha'){
						player.useCard(result.cards[0],target).animate=false;
					}
					else{
						player.useCard({name:'sha'},target).animate=false;
					}
					if(typeof event.current.ai.shown=='number'&&event.current.ai.shown<0.95){
						event.current.ai.shown+=0.3;
						if(event.current.ai.shown>0.95) event.current.ai.shown=0.95;
					}
				}
				else{
					event.current=event.current.next;
					event.goto(0);
				}
			},
			ai:{
				result:{
					target:function(player,target){
						if(player.hasSkill('jijiang3')) return 0;
						return ai.get.effect(target,{name:'sha'},player,target);
					}
				},
				order:function(){
					return ai.get.order({name:'sha'})-0.1;
				},
			}
		},
		jijiang3:{
			trigger:{global:['useCardAfter','useSkillAfter','phaseAfter']},
			forced:true,
			popup:false,
			silent:true,
			filter:function(event){
				return event.skill!='jijiang2'&&event.skill!='qinwang2';
			},
			content:function(){
				player.removeSkill('jijiang3');
			}
		},
		wusheng:{
			audio:3,
			enable:['chooseToRespond','chooseToUse'],
			filterCard:function(card,player){
				if(get.zhu(player,'shouyue')) return true;
				return get.color(card)=='red';
			},
			position:'he',
			viewAs:{name:'sha'},
			viewAsFilter:function(player){
				if(get.zhu(player,'shouyue')){
					if(!player.num('he')) return false;
				}
				else{
					if(!player.num('he',{color:'red'})) return false;
				}
			},
			prompt:'将一张红色牌当杀使用或打出',
			check:function(card){return 4-ai.get.value(card)},
			ai:{
				skillTagFilter:function(player){
					if(get.zhu(player,'shouyue')){
						if(!player.num('he')) return false;
					}
					else{
						if(!player.num('he',{color:'red'})) return false;
					}
				},
				respondSha:true,
			}
		},
		paoxiao:{
			mod:{
				cardUsable:function(card,player,num){
					if(card.name=='sha') return Infinity;
				}
			},
			ai:{
				unequip:true,
				skillTagFilter:function(player,tag,arg){
					if(!get.zhu(player,'shouyue')) return false;
					if(arg&&arg.name=='sha') return true;
					return false;
				}
			}
		},
		guanxing:{
			audio:2,
			audioname:['jiangwei'],
			trigger:{player:'phaseBegin'},
			frequent:true,
			content:function(){
				"step 0"
				if(player.isUnderControl()){
					game.modeSwapPlayer(player);
				}
				var num=Math.min(5,game.countPlayer());
				if(player.hasSkill('yizhi')&&player.hasSkill('guanxing')){
					num=5;
				}
				var cards=get.cards(num);
				event.cards=cards;
				var switchToAuto=function(){
					_status.imchoosing=false;
					if(event.dialog) event.dialog.close();
					if(event.control) event.control.close();
					var top=[];
					var judges=player.node.judges.childNodes;
					var stopped=false;
					if(!player.num('h','wuxie')){
						for(var i=0;i<judges.length;i++){
							var judge=get.judge(judges[i]);
							cards.sort(function(a,b){
								return judge(b)-judge(a);
							});
							if(judge(cards[0])<0){
								stopped=true;break;
							}
							else{
								top.unshift(cards.shift());
							}
						}
					}
					var bottom;
					if(!stopped){
						cards.sort(function(a,b){
							return ai.get.value(b,player)-ai.get.value(a,player);
						});
						while(cards.length){
							if(ai.get.value(cards[0],player)<=5) break;
							top.unshift(cards.shift());
						}
					}
					bottom=cards;
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(bottom.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.delay(2);
				};
				var chooseButton=function(online,player,cards){
					var event=_status.event;
					player=player||event.player;
					cards=cards||event.cards;
					event.top=[];
					event.bottom=[];
					event.status=true;
					event.dialog=ui.create.dialog('按顺序选择置于牌堆顶的牌（先选择的在上）',cards);
					event.switchToAuto=function(){
						event._result='ai';
						event.dialog.close();
						event.control.close();
						_status.imchoosing=false;
					},
					event.control=ui.create.control('ok','pileTop','pileBottom',function(link){
						var event=_status.event;
						if(link=='ok'){
							if(online){
								event._result={
									top:[],
									bottom:[]
								}
								for(var i=0;i<event.top.length;i++){
									event._result.top.push(event.top[i].link);
								}
								for(var i=0;i<event.bottom.length;i++){
									event._result.bottom.push(event.bottom[i].link);
								}
							}
							else{
								var i;
								for(i=0;i<event.top.length;i++){
									ui.cardPile.insertBefore(event.top[i].link,ui.cardPile.firstChild);
								}
								for(i=0;i<event.bottom.length;i++){
									ui.cardPile.appendChild(event.bottom[i].link);
								}
								for(i=0;i<event.dialog.buttons.length;i++){
									if(event.dialog.buttons[i].classList.contains('glow')==false&&
										event.dialog.buttons[i].classList.contains('target')==false)
									ui.cardPile.appendChild(event.dialog.buttons[i].link);
								}
								player.popup(get.cnNumber(event.top.length)+'上'+get.cnNumber(event.cards.length-event.top.length)+'下');
								game.log(player,'将'+get.cnNumber(event.top.length)+'张牌置于牌堆顶');
							}
							event.dialog.close();
							event.control.close();
							game.resume();
							_status.imchoosing=false;
						}
						else if(link=='pileTop'){
							event.status=true;
							event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆顶的牌';
						}
						else{
							event.status=false;
							event.dialog.content.childNodes[0].innerHTML='按顺序选择置于牌堆底的牌';
						}
					})
					for(var i=0;i<event.dialog.buttons.length;i++){
						event.dialog.buttons[i].classList.add('selectable');
					}
					event.custom.replace.button=function(link){
						var event=_status.event;
						if(link.classList.contains('target')){
							link.classList.remove('target');
							event.top.remove(link);
						}
						else if(link.classList.contains('glow')){
							link.classList.remove('glow');
							event.bottom.remove(link);
						}
						else if(event.status){
							link.classList.add('target');
							event.top.unshift(link);
						}
						else{
							link.classList.add('glow');
							event.bottom.push(link);
						}
					}
					event.custom.replace.window=function(){
						for(var i=0;i<_status.event.dialog.buttons.length;i++){
							_status.event.dialog.buttons[i].classList.remove('target');
							_status.event.dialog.buttons[i].classList.remove('glow');
							_status.event.top.length=0;
							_status.event.bottom.length=0;
						}
					}
					game.pause();
					game.countChoose();
				};
				event.switchToAuto=switchToAuto;

				if(event.isMine()){
					chooseButton();
					event.finish();
				}
				else if(event.isOnline()){
					event.player.send(chooseButton,true,event.player,event.cards);
					event.player.wait();
					game.pause();
				}
				else{
					event.switchToAuto();
					event.finish();
				}
				"step 1"
				if(event.result=='ai'||!event.result){
					event.switchToAuto();
				}
				else{
					var top=event.result.top||[];
					var bottom=event.result.bottom||[];
					for(var i=0;i<top.length;i++){
						ui.cardPile.insertBefore(top[i],ui.cardPile.firstChild);
					}
					for(i=0;i<bottom.length;i++){
						ui.cardPile.appendChild(bottom[i]);
					}
					for(i=0;i<event.cards.length;i++){
						if(!top.contains(event.cards[i])&&!bottom.contains(event.cards[i])){
							ui.cardPile.appendChild(event.cards[i]);
						}
					}
					player.popup(get.cnNumber(top.length)+'上'+get.cnNumber(event.cards.length-top.length)+'下');
					game.log(player,'将'+get.cnNumber(top.length)+'张牌置于牌堆顶');
					game.delay(2);
				}
			},
			ai:{
				threaten:1.2
			}
		},
		kongcheng:{
			mod:{
				targetEnabled:function(card,player,target,now){
					if(target.num('h')==0){
						if(card.name=='sha'||card.name=='juedou') return false;
					}
				}
			},
			group:'kongcheng1',
			ai:{
				noh:true,
				skillTagFilter:function(player,tag){
					if(tag=='noh'){
						if(player.num('h')!=1) return false;
					}
				}
			}
		},
		kongcheng1:{
			audio:2,
			trigger:{player:'loseEnd'},
			forced:true,
			filter:function(event,player){
				if(player.num('h')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='h') return true;
				}
				return false;
			},
			content:function(){}
		},
		longdan:{
			group:['longdan_sha','longdan_shan','longdan_draw'],
			subSkill:{
				draw:{
					trigger:{player:['useCard','respond']},
					forced:true,
					popup:false,
					filter:function(event,player){
						if(!get.zhu(player,'shouyue')) return false;
						return event.skill=='longdan_sha'||event.skill=='longdan_shan';
					},
					content:function(){
						player.draw();
						player.storage.fanghun2++;
					}
				},
				sha:{
					audio:2,
					enable:['chooseToUse','chooseToRespond'],
					filterCard:{name:'shan'},
					viewAs:{name:'sha'},
					viewAsFilter:function(player){
						if(!player.num('h','shan')) return false;
					},
					prompt:'将一张闪当杀使用或打出',
					check:function(){return 1},
					ai:{
						effect:{
							target:function(card,player,target,current){
								if(get.tag(card,'respondSha')&&current<0) return 0.6
							}
						},
						respondSha:true,
						skillTagFilter:function(player){
							if(!player.num('h','shan')) return false;
						},
						order:function(){
		                    return ai.get.order({name:'sha'})+0.1;
		                },
						useful:-1,
						value:-1
					}
				},
				shan:{
					audio:2,
					enable:['chooseToRespond'],
					filterCard:{name:'sha'},
					viewAs:{name:'shan'},
					prompt:'将一张杀当闪打出',
					check:function(){return 1},
					viewAsFilter:function(player){
						if(!player.num('h','sha')) return false;
					},
					ai:{
						respondShan:true,
						skillTagFilter:function(player){
							if(!player.num('h','sha')) return false;
						},
						effect:{
							target:function(card,player,target,current){
								if(get.tag(card,'respondShan')&&current<0) return 0.6
							}
						},
						order:4,
						useful:-1,
						value:-1
					}
				}
			}
		},
		mashu:{
			mod:{
				globalFrom:function(from,to,distance){
					return distance-1;
				}
			}
		},
		feiying:{
			mod:{
				globalTo:function(from,to,distance){
					return distance+1;
				}
			}
		},
		tieji:{
			audio:2,
			trigger:{player:'shaBegin'},
			check:function(event,player){
				return ai.get.attitude(player,event.target)<=0;
			},
			logTarget:'target',
			content:function(){
				"step 0"
				player.judge(function(card){
					if(get.zhu(_status.event.player,'shouyue')){
						if(get.suit(card)!='spade') return 2;
					}
					else{
						if(get.color(card)=='red') return 2;
					}
					return -0.5;
				});
				"step 1"
				if(result.bool){
					trigger.directHit=true;
				}
			}
		},
		jizhi:{
			audio:2,
			audioname:['jianyong'],
			trigger:{player:'useCard'},
			frequent:true,
			filter:function(event){
				return (get.type(event.card)=='trick'&&event.cards[0]&&event.cards[0]==event.card);
			},
			content:function(){
				player.draw();
			},
			ai:{
				threaten:1.4
			}
		},
		qicai:{
			mod:{
				targetInRange:function(card,player,target,now){
					var type=get.type(card);
					if(type=='trick'||type=='delay') return true;
				}
			},
		},
		zhiheng:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			position:'he',
			filterCard:true,
			selectCard:[1,Infinity],
			prompt:'弃置任意张牌并摸等量的牌',
			check:function(card){
				return 6-ai.get.value(card)
			},
			content:function(){
				player.draw(cards.length);
			},
			ai:{
				order:1,
				result:{
					player:1
				},
				threaten:1.5
			},
		},
		jiuyuan:{
			audio:2,
			unique:true,
			trigger:{target:'taoBegin'},
			zhuSkill:true,
			forced:true,
			filter:function(event,player){
				if(event.player==player) return false;
				if(!player.hasZhuSkill('jiuyuan')) return false;
				if(player.hp>0) return false;
				if(event.player.group!='wu') return false;
				return true;
			},
			content:function(){
				player.recover();
			}
		},
		qixi:{
			audio:4,
			enable:'chooseToUse',
			filterCard:function(card){
				return get.color(card)=='black';
			},
			position:'he',
			viewAs:{name:'guohe'},
			viewAsFilter:function(player){
				if(!player.num('he',{color:'black'})) return false;
			},
			prompt:'将一张黑色牌当过河拆桥使用',
			check:function(card){return 4-ai.get.value(card)}
		},
		keji:{
			audio:4,
			trigger:{player:'phaseDiscardBefore'},
			filter:function(event,player){
				return (get.cardCount({name:'sha'},player)==0);
			},
			content:function(){
				trigger.untrigger();
				trigger.finish();
			}
		},
		kurou:{
			audio:4,
			enable:'phaseUse',
			prompt:'失去一点体力并摸两张牌',
			content:function(){
				"step 0"
				player.loseHp(1);
				"step 1"
				player.draw(2);
			},
			ai:{
				basic:{
					order:1
				},
				result:{
					player:function(player){
						if(player.num('h')>=player.hp-1) return -1;
						if(player.hp<3) return -1;
						return 1;
					}
				}
			}
		},
		yingzi:{
			audio:2,
			trigger:{player:'phaseDrawBegin'},
			frequent:true,
			content:function(){
				trigger.num++;
			},
			ai:{
				threaten:1.3
			}
		},
		fanjian:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filter:function(event,player){
				return player.num('h')>0;
			},
			filterTarget:function(card,player,target){
				return player!=target;
			},
			content:function(){
				"step 0"
				target.chooseControl('heart2','diamond2','club2','spade2').set('ai',function(event){
					switch(Math.floor(Math.random()*6)){
						case 0:return 'heart2';
						case 1:case 4:case 5:return 'diamond2';
						case 2:return 'club2';
						case 3:return 'spade2';
					}
				});
				"step 1"
				game.log(target,'选择了'+get.translation(result.control));
				event.choice=result.control;
				target.popup(event.choice);
				event.card=player.get('h').randomGet();
				target.gain(event.card,player);
				player.$give(event.card,target);
				game.delay();
				"step 2"
				if(get.suit(event.card)+'2'!=event.choice) target.damage('nocard');
			},
			ai:{
				order:1,
				result:{
					target:function(player,target){
						var eff=ai.get.damageEffect(target,player);
						if(eff>=0) return 1+eff;
						var value=0,i;
						var cards=player.get('h');
						for(i=0;i<cards.length;i++){
							value+=ai.get.value(cards[i]);
						}
						value/=player.num('h');
						if(target.hp==1) return Math.min(0,value-7);
						return Math.min(0,value-5);
					}
				}
			}
		},
		guose:{
			audio:1,
			filter:function(event,player){
				return player.num('he',{suit:'diamond'})>0;
			},
			enable:'chooseToUse',
			filterCard:function(card){
				return get.suit(card)=='diamond';
			},
			position:'he',
			viewAs:{name:'lebu'},
			prompt:'将一张方片牌当乐不思蜀使用',
			check:function(card){return 6-ai.get.value(card)},
			ai:{
				threaten:1.5
			}
		},
		liuli:{
			audio:2,
			trigger:{target:'shaBefore'},
			direct:true,
			priority:5,
			filter:function(event,player){
				if(player.num('he')==0) return false;
				return game.hasPlayer(function(current){
					return get.distance(player,current,'attack')<=1&&current!=event.player&&
						current!=player&&lib.filter.targetEnabled(event.card,event.player,current);
				});
			},
			content:function(){
				"step 0"
				var next=player.chooseCardTarget({
					position:'he',
					filterCard:lib.filter.cardDiscardable,
					filterTarget:function(card,player,target){
						var trigger=_status.event.getTrigger();
						if(get.distance(player,target,'attack')<=1&&
							target!=trigger.player&&target!=player){
							if(player.canUse(trigger.card,target)) return true;
						}
						return false;
					},
					ai1:function(card){
						return ai.get.unuseful(card)+9;
					},
					ai2:function(target){
						if(_status.event.player.num('h','shan')){
							return -ai.get.attitude(_status.event.player,target);
						}
						if(ai.get.attitude(_status.event.player,target)<5){
							return 6-ai.get.attitude(_status.event.player,target);
						}
						if(_status.event.player.hp==1&&player.num('h','shan')==0){
							return 10-ai.get.attitude(_status.event.player,target);
						}
						if(_status.event.player.hp==2&&player.num('h','shan')==0){
							return 8-ai.get.attitude(_status.event.player,target);
						}
						return -1;
					},
					prompt:get.prompt('liuli')
				});
				"step 1"
				if(result.bool){
					player.discard(result.cards);
					player.logSkill(event.name,result.targets);
					trigger.target=result.targets[0];
					trigger.targets.remove(player);
					trigger.targets.push(result.targets[0]);
				}
				else{
					event.finish();
				}
				"step 2"
				trigger.untrigger();
				trigger.trigger('useCardToBefore');
				trigger.trigger('shaBefore');
				game.delay();
			},
			ai:{
				effect:{
					target:function(card,player,target){
						if(target.num('he')==0) return;
						if(card.name!='sha') return;
						var min=1;
						var friend=ai.get.attitude(player,target)>0;
						var vcard={name:'shacopy',nature:card.nature,suit:card.suit};
						var players=game.filterPlayer();
						for(var i=0;i<players.length;i++){
							if(player!=players[i]&&
								ai.get.attitude(target,players[i])<0&&
								target.canUse(card,players[i])){
								if(!friend) return 0;
								if(ai.get.effect(players[i],vcard,player,player)>0){
									if(!player.canUse(card,players[0])){
										return [0,0.1];
									}
									min=0;
								}
							}
						}
						return min;
					}
				}
			}
		},
		qianxun:{
			mod:{
				targetEnabled:function(card,player,target,now){
					if(card.name=='shunshou'||card.name=='lebu') return false;
				}
			},
		},
		lianying:{
			audio:2,
			trigger:{player:'loseEnd'},
			frequent:true,
			filter:function(event,player){
				if(player.num('h')) return false;
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='h') return true;
				}
				return false;
			},
			content:function(){
				player.draw();
			},
			ai:{
				threaten:0.8,
				effect:{
					target:function(card){
						if(card.name=='guohe'||card.name=='liuxinghuoyu') return 0.5;
					}
				},
				noh:true,
				skillTagFilter:function(player,tag){
					if(tag=='noh'){
						if(player.num('h')!=1) return false;
					}
				}
			}
		},
		xiaoji:{
			audio:4,
			trigger:{player:'loseEnd'},
			frequent:true,
			filter:function(event,player){
				for(var i=0;i<event.cards.length;i++){
					if(event.cards[i].original=='e') return true;
				}
				return false;
			},
			content:function(){
				var num=0;
				for(var i=0;i<trigger.cards.length;i++){
					if(trigger.cards[i].original=='e') num+=2;
				}
				player.draw(num);
			},
			ai:{
				noe:true,
				effect:{
					target:function(card,player,target,current){
						if(get.type(card)=='equip') return [1,3];
					}
				}
			}
		},
		jieyin:{
			audio:2,
			enable:'phaseUse',
			filterCard:true,
			usable:1,
			selectCard:2,
			check:function(card){
				var player=get.owner(card);
				if(player.num('h')>player.hp)
					return 8-ai.get.value(card)
				if(player.hp<player.maxHp)
					return 6-ai.get.value(card)
				return 4-ai.get.value(card)

			},
			filterTarget:function(card,player,target){
				if(target.sex!='male') return false;
				if(target.hp>=target.maxHp) return false;
				if(target==player) return false;
				return true;
			},
			content:function(){
				player.recover();
				target.recover();
			},
			ai:{
				order:5.5,
				result:{
					player:function(player){
						if(player.hp<player.maxHp) return 4;
						if(player.num('h')>player.hp) return 0
						return -1;
					},
					target:4
				},
				threaten:2,
			}
		},
		qingnang:{
			audio:2,
			enable:'phaseUse',
			filterCard:true,
			usable:1,
			check:function(card){
				return 9-ai.get.value(card)
			},
			filterTarget:function(card,player,target){
				if(target.hp>=target.maxHp) return false;
				return true;
			},
			content:function(){
				target.recover();
			},
			ai:{
				order:9,
				result:{
					target:function(player,target){
						if(target.hp==1) return 5;
						if(player==target&&player.num('h')>player.hp) return 5;
						return 2;
					}
				},
				threaten:2
			}
		},
		jijiu:{
			audio:2,
			enable:'chooseToUse',
			filter:function(event,player){
				return _status.currentPhase!=player;
			},
			filterCard:function(card){
				return get.color(card)=='red';
			},
			position:'he',
			viewAs:{name:'tao'},
			prompt:'将一张红色牌当桃使用',
			check:function(card){return 15-ai.get.value(card)},
			ai:{
				skillTagFilter:function(player){
					return player.num('he',{color:'red'})>0&&_status.currentPhase!=player;
				},
				threaten:1.5,
				save:true,
			}
		},
		wushuang:{
			forced:true,
			group:['wushuang1','wushuang2']
		},
		wushuang1:{
			audio:2,
			trigger:{player:'shaBegin'},
			forced:true,
			filter:function(event,player){
				return !event.directHit;
			},
			content:function(){
				"step 0"
				var next=trigger.target.chooseToRespond({name:'shan'});
				next.autochoose=lib.filter.autoRespondShan;
				next.set('ai',function(card){
					if(_status.event.player.num('h','shan')>1){
						return ai.get.unuseful2(card);
					}
					return -1;
				});
				"step 1"
				if(result.bool==false){
					trigger.untrigger();
					trigger.directHit=true;
				}
			}
		},
		wushuang2:{
			audio:2,
			trigger:{player:'juedou',target:'juedou'},
			forced:true,
			filter:function(event,player){
				return event.turn!=player;
			},
			content:function(){
				"step 0"
				var next=trigger.turn.chooseToRespond({name:'sha'});
				next.autochoose=lib.filter.autoRespondSha;
				next.ai=function(card){
					if(ai.get.attitude(trigger.turn,player)<0&&trigger.turn.num('h','sha')>1){
						return ai.get.unuseful2(card);
					}
					return -1;
				};
				"step 1"
				if(result.bool==false){
					trigger.directHit=true;
				}
			},
			ai:{
				result:{
					target:function(card,player,target){
						if(card.name=='juedou'&&target.num('h')>0) return [1,0,0,-1];
					}
				}
			}
		},
		lijian:{
			audio:2,
			enable:'phaseUse',
			usable:1,
			filter:function(event,player){
				return game.countPlayer(function(current){
					return current!=player&&current.sex=='male';
				})>1;
			},
			check:function(card){return 10-ai.get.value(card)},
			filterCard:true,
			position:'he',
			filterTarget:function(card,player,target){
				if(player==target) return false;
				if(target.sex!='male') return false;
				if(ui.selected.targets.length==1){
					return target.canUse({name:'juedou'},ui.selected.targets[0]);
				}
				return true;
			},
			targetprompt:['先出杀','后出杀'],
			selectTarget:2,
			multitarget:true,
			content:function(){
				targets[1].useCard({name:'juedou'},targets[0],'noai').animate=false;
				game.delay(0.5);
			},
			ai:{
				order:8,
				result:{
					target:function(player,target){
						if(ui.selected.targets.length==0){
							return -3;
						}
						else{
							return ai.get.effect(target,{name:'juedou'},ui.selected.targets[0],target);
						}
					}
				},
				expose:0.4,
				threaten:3,
			}
		},
		biyue:{
			audio:2,
			trigger:{player:'phaseEnd'},
			frequent:true,
			content:function(){
				player.draw();
			},
		},
	},
	translate:{
		caocao:'曹操',
		simayi:'司马懿',
		xiahoudun:'夏侯惇',
		zhangliao:'张辽',
		xuzhu:'许褚',
		guojia:'郭嘉',
		zhenji:'甄姬',
		liubei:'刘备',
		guanyu:'关羽',
		zhangfei:'张飞',
		zhugeliang:'诸葛亮',
		zhaoyun:'赵云',
		machao:'马超',
		huangyueying:'黄月英',
		sunquan:'孙权',
		ganning:'甘宁',
		lvmeng:'吕蒙',
		huanggai:'黄盖',
		zhouyu:'周瑜',
		daqiao:'大乔',
		luxun:'陆逊',
		sunshangxiang:'孙尚香',
		huatuo:'华佗',
		lvbu:'吕布',
		diaochan:'貂蝉',
		rixianga:"日向创",
        rixiangb:"日向创",
        monokuma:"黑白熊",
        biangu:"边谷山",
        zhaorinai:"朝日奈",
        wuqie:"雾切响子",
        zuimu:"罪木蜜柑",
        sonia:"索妮娅",
        dunzi:"江岛盾子",
        qihai:"七海千秋",
        bozhi:"狛枝凪斗",
        kamukura:"神座出流",
        jiutoulong:"九头龙",
        lingtian:"澪田唯吹",
        tumei:"兔美",

		hujia:'护驾',
		jianxiong:'奸雄',
		fankui:'反馈',
		guicai:'鬼才',
		ganglie:'刚烈',
		tuxi:'突袭',
		luoyi:'裸衣',
		luoyi2:'裸衣',
		tiandu:'天妒',
		yiji:'遗计',
		luoshen:'洛神',
		qingguo:'倾国',
		rende:'仁德',
		jijiang:'激将',
		jijiang1:'激将',
		jijiang2:'激将',
		wusheng:'武圣',
		paoxiao:'咆哮',
		guanxing:'观星',
		kongcheng:'空城',
		kongcheng1:'空城',
		longdan:'龙胆',
		longdan1:'龙胆',
		longdan2:'龙胆',
		mashu:'马术',
		feiying:'飞影',
		tieji:'铁骑',
		jizhi:'集智',
		qicai:'奇才',
		zhiheng:'制衡',
		jiuyuan:'救援',
		qixi:'奇袭',
		keji:'克己',
		kurou:'苦肉',
		yingzi:'英姿',
		fanjian:'反间',
		guose:'国色',
		liuli:'流离',
		qianxun:'谦逊',
		lianying:'连营',
		xiaoji:'枭姬',
		jieyin:'结姻',
		qingnang:'青囊',
		jijiu:'急救',
		wushuang:'无双',
		wushuang1:'无双',
		wushuang2:'无双',
		lijian:'离间',
		biyue:'闭月',
		pileTop:'牌堆顶',
		pileBottom:'牌堆底',
		hujia_info:'主公技，魏势力角色可以替你打出[闪]',
		jianxiong_info:'你可以立即获得对你造成伤害的牌',
		fankui_info:'当你受到伤害时，可以获得伤害来源的一张牌',
		guicai_info:'在任意角色的判定牌生效前，你可以打出一张手牌代替之',
		ganglie_info:'每当你受到一次伤害，可进行一次判定，若结果不为红桃，则伤害来源须弃置两张手牌或受到来自你的一点伤害',
		tuxi_info:'摸牌阶段，你可以改为从1~2名其他角色各抽取一张手牌',
		luoyi_info:'摸牌阶段，你可以少摸一张牌，若如此做，你本回合内[杀]或[决斗]造成的伤害+1',
		tiandu_info:'你可以立即获得你的判定牌',
		yiji_info:'每当你受到一点伤害，可以观看牌堆顶的两张牌，并将其交给任意1~2名角色',
		luoshen_info:'准备阶段，你可以进行一定判定，若为黑色则可以继续判定，直到出现红色。然后你获得所有黑色的判定牌',
		qingguo_info:'你可以将一张黑色手牌当[闪]使用或打出',
		rende_info:'出牌阶段，你可以将任意手牌送给其他角色，若送出的手牌不少于两张，你回复一点体力',
		jijiang_info:'主公技，蜀势力角色可以帮你使用或打出[杀]',
		wusheng_info:'你可以将一张红色牌当[杀]使用',
		paoxiao_info:'出牌阶段，你使用[杀]无数量限制',
		guanxing_info:'准备阶段，你可以观看牌堆顶的x张牌，并将其以任意顺序置于牌堆项或牌堆底，x为存活角色个数且不超过5',
		kongcheng_info:'锁定技，当你没有手牌时，不能成为[杀]或[决斗]的目标',
		longdan_info:'你可以将[杀]当[闪]，或[闪]当[杀]使用或打出',
		mashu_info:'锁定技，你的进攻距离+1',
		feiying_info:'锁定技，你的防御距离+1',
		tieji_info:'当你使用一张[杀]时，可进行一次判定，若为红色则此[杀]不可闪避',
		jizhi_info:'每当你使用一张非转化的普通锦囊牌，可以摸一张牌',
		qicai_info:'锁定技，你使用的锦囊牌无距离限制',
		zhiheng_info:'出牌阶段，你可以弃置任意张牌并摸等量的牌，每阶段限1次',
		jiuyuan_info:'主公技，锁定技，濒死阶段，吴势力角色对你使用的[桃]额外回复一点体力',
		qixi_info:'你可以将一张黑色牌当[过河拆桥]使用',
		keji_info:'若你在出牌阶段没有使用[杀]，则可跳过弃牌阶段',
		kurou_info:'出牌阶段，你可以流失一点体力并摸两张牌',
		yingzi_info:'摸牌阶段，你可以额外摸一张牌',
		fanjian_info:'出牌阶段，你可以令一名角色选择一种花色并展示你的一张手牌，若选择的花色与展示的不同，该角色受到来自你的一点伤害。结算结束后该角色获得展示的牌。每阶段限1次',
		guose_info:'你可以将一张方片花色的手牌当[乐不思蜀]使用',
		liuli_info:'当你成为[杀]的目标时，可以弃置一张牌将其转移给攻击范围内的一名其他角色，此角色不能是[杀]的使用者',
		qianxun_info:'锁定技，你不能成为[顺手牵羊]和[乐不思蜀]的目标',
		lianying_info:'每当你失去最后一张手牌，可摸一张牌',
		xiaoji_info:'每当你失去一张装备牌，可以摸两张牌',
		jieyin_info:'出牌阶段，你可以弃置两张牌并选择1名已经受伤的男性角色，你与其各回复一点体力，每阶段限一次',
		qingnang_info:'出牌阶段，你可以弃置一张手牌令一名角色回复一点体力，每阶段限一次',
		jijiu_info:'回合外，你可以将一张红色牌当[桃]使用',
		wushuang_info:'锁定技，你使用的[杀]或[决斗]需要两张[闪]或[杀]响应',
		lijian_info:'出牌阶段，你可以弃一张牌，视为一名男性角色对另一名男性角色使用一张[决斗]，每阶段限一次',
		biyue_info:'结束阶段，你可以摸一张牌',
		shenzuo2: "完美",
        shenzuo2_info: "你不能成为杀的目标，你出牌无视距离，手牌没有上限，出牌可以额外指定1个目标。你每回合所受伤害不能超过1，受伤时摸两张牌。体力流失、武将翻面、技能剥夺、混乱、即死对你无效并使你摸两张牌。",
        shenzuo1: "巅峰",
        shenzuo1_info: "你受众多才能眷顾，你对角色造成伤害时，伤害值不会小于目标当前体力值的一半，若目标体力值无限，可以使伤害为0并使该角色体力值变为2。",
        sonia2: "国恨",
        sonia2_info: "限定技，当你死亡时，场上所有其他死亡角色复活并回复1点体力，阵营转变成与你同样的阵营。为主公时你可免疫这次死亡。",
        sonia1: "王权",
        sonia1_info: "当你需要打出一张闪时你可以向所有其他玩家征用闪，拒绝交闪的角色受到1点伤害。",
        bozhi1: "幸运",
        bozhi1_info: "锁定技，受到伤害时有几率减少1点伤害，抽牌时有几率多抽1张牌，对角色造成伤害时有几率使伤害+1，回复体力时有概率使恢复量+1，被锦囊牌作为目标时有几率使其无效化。以上效果均可多重触发,此外你因为牌的效果进行判定时，判定结果往往会对你有利。",
        bozhi2: "戏命",
        bozhi2_info: "你可以将任何手牌当【闪电】打出。",
        dunzi1: "绝望",
        dunzi1_info: "锁定技，场上角色抽卡和回合外弃卡都会受到1点伤害，你则是得到等量的回复。同时，若此时场上有角色体力上限超过你，你的体力上限会等同于该角色，同时恢复你增长的上限相同的体力。此外，你的出牌无视距离。",
        rixiang1: "未来",
        rixiang1_info: "锁定技，当你受到伤害时，若手中无手牌，则减轻1点伤害，若有手牌，则场上所有体力值大于1的角色都减少1点体力上限并受到1点伤害。你的手牌没有上限。",
        rixiang2: "言弹",
        rixiang2_info: "出牌阶段使用，当手牌数超过体力时，丢弃所有手牌，选择一名你可以出杀的角色对其出杀若干次，次数为你丢弃牌数量除以体力值。",
        qihai2: "游戏",
        qihai2_info: "你的杀可以作为桃使用，你的装备牌可以作为无懈可击使用。此外，你使用酒将强制视为对某个角色使用无中生有，可以以自己为目标。",
        qihai3: "闪光",
        qihai3_info: "濒死时，你做一次判定，若为杀，你选择一名角色使其回复全部的体力值并抽5张牌，同时把此技能转移给该角色;若不是杀，你免疫这次死亡并获得判定牌。",
        qihai1: "天使",
        qihai1_info: "你默认不能出杀和装备牌，当有角色产生回复效果时，你可以选择让所有角色共享回复效果。你的杀和装备牌在弃牌阶段不计手牌数量。",
        rixiang3: "星火",
        rixiang3_info: "觉醒技，濒死时你强制发动一次言弹效果，同时意志觉醒恢复全部体力并摸4张牌。",
        zuimu1: "护理",
        zuimu1_info: "回合结束时你可以指定一名角色，清除其注射毒印记，到下次你的回合结束时若该角色没有受伤，其回复1点体力，并且在此期间其享受注射的正面效果。",
        zuimu2: "注射",
        zuimu2_info: "你对其他角色造成伤害，或者其他角色对你造成伤害，都会给该角色附加一层毒印记，印记到3层时该角色的标记引爆，对其造成2点伤害，对其周围两名角色造成1点伤害，若影响到你自己，则伤害变为恢复体力。",
        zuimu3: "注射",
        zuimu3_info: "你已被注射毒素。",
        biangu1: "拔刀",
        biangu1_info: "当任何角色被指定为杀的目标时，你可以对出杀者无视距离地打出一张杀，并无效化对方的杀。此外，你的杀不计入手牌数量。",
        biangu2: "洞察",
        biangu2_info: "你的回合开始时，你会随机的发现场上两名角色的弱点，攻击这些目标时伤害翻倍，这些角色出杀时你可以选择无效化其出杀并获得这张杀。",
        biangu3: "破绽",
        biangu3_info: "你的破绽已经被人发现。",
        rixiang4: "论破",
        rixiang4_info: "除你以外的角色打出一张牌时，你可以弃置2张牌，使其无效化。",
        monokuma1: "替罪",
        monokuma1_info: "每次抽牌阶段你获得一次机会，任意角色受伤时，你可以选择其以外的另一名角色，让后者为前者承担伤害，同时前者必须选择与受到伤害等量的牌移交给后者。若你选择自己为别人顶罪，则触发【漏洞】。",
        monokuma2: "假死",
        monokuma2_info: "抽牌阶段结束后，你可以选择进入假死状态，跳过出牌阶段弃牌阶段以及下回合的抽牌阶段，直到下回合出牌阶段为止，你不会受到伤害，不会被弃牌并且不会接受牌的效果。",
        monokuma3: "黑幕",
        monokuma3_info: "",
        monokuma4: "死亡",
        monokuma4_info: "",
        monokuma5: "漏洞",
        monokuma5_info: "限定技，你的体力值无限，若有角色死亡，你的体力变为6点。",
        zhaorinai1: "元气",
        zhaorinai1_info: "每次出牌阶段，你可以选择给任意名角色增加或撤销【援】印记，印记存在期间，你将为这些目标承担伤害，同时享受这些目标的回复效果。",
        zhaorinai2: "援护",
        zhaorinai2_info: "",
        zhaorinai3: "倔强",
        zhaorinai3_info: "锁定技，你出杀时可以额外指定X名角色为目标，X等同于你援护的角色数量。",
        wuqie1: "清晰",
        wuqie1_info: "每回合一次，你可以弃置一张手牌，选择一名角色查看其手牌，如果这些牌里有与你弃置的牌名字相同的牌，你可以选择获得其中两张牌，或不获得牌对其造成1点伤害，并对其施加【崩溃】标记，直到下次你的回合开始前，该角色不能回复体力值。",
        wuqie2: "击破",
        wuqie2_info: "锁定技，被指定为牌的目标时，如果你手牌里有相同名字的牌，你可以选择无效化这张牌。",
        wuqie3: "崩溃",
        wuqie3_info: "",
        jiutoulong1: "斩手",
        jiutoulong1_info: "场上角色在弃牌阶段若有弃牌，你可以令其受到1点伤害。",
        jiutoulong2: "极道",
        jiutoulong2_info: "限定技，弃置所有手牌，指定一个目标，从你开始场上所有角色依次与其进行决斗。",
        lingtian1: "魔音",
        lingtian1_info: "锁定技，除你以外的所有人无法回复生命值，变为摸回复的生命值等量的牌。",
        shenzuo3: "压制",
        shenzuo3_info: "场上生命值比你多或者相等的角色回复体力时，你可以将其变为生命流失，并且你摸两张牌。",
        tumei1: "救赎",
        tumei1_info: "使用2张桃或者杀，复活一名已死武将，恢复其2点体力并摸两张牌,同时使你自己的武将牌翻面。",
        tumei2: "牺牲",
        tumei2_info: "出牌阶段，你可以摸一张牌，并令一名角色反面，自己同时翻面。",
        tumei3: "隐藏",
        tumei3_info: "锁定技，当你处于翻面或者被连接状态时，受到的伤害-1。",
        kamukura4: "幸运",
        kamukura4_info: "锁定技，抽牌时有几率多抽1张牌，回复体力时有概率使恢复量+1，被锦囊牌作为目标时有几率使其无效化。以上效果均可多重触发,此外你因为牌的效果进行判定时，判定结果往往会对你有利。",
		dan: "弹",
		danColor: '#FF6500',
	},
}
