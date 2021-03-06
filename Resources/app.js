var selectedschool = Ti.App.Properties.getString('selectedschool');
if(selectedschool == 'Dalton Dokkum'){
	createwindows('http://www3.pj.nl/dok_info_leerlingen/','http://www3.pj.nl/infoschermdokkum/');
}else if(selectedschool == 'De Dyk'){
	createwindows('http://www3.pj.nl/dyk_info_leerlingen/','http://www3.pj.nl/infoschermdedyk');
}else if(selectedschool == 'De Foorakker'){
	createwindows('http://www3.pj.nl/anna_info_leerlingen/','http://www3.pj.nl/infoschermfoorakker');
}else if(selectedschool == 'Leeuwarder Lyceum'){
	createwindows('http://www3.pj.nl/lyc_info_leerlingen/','http://www3.pj.nl/infoschermlyceum');
}else if(selectedschool == 'Montessori High School'){
	createwindows('http://www3.pj.nl/mon_info_leerlingen/','http://www3.pj.nl/infoschermmontessori');
}else if(selectedschool == 'Stedelijk Gymnasium'){
	createwindows('http://www3.pj.nl/gym_info_leerlingen/','http://www3.pj.nl/infoschermgymnasium');
}else{
	selectschool();
}

function selectschool(){
	var selectionwin = Titanium.UI.createWindow({
		backgroundColor:'white',
		height:'100%',
		exitOnClose:true
	});
	
	var selectionactionbar = Titanium.UI.createView({
		backgroundColor:'#dc006d',
		top:0,
		height:'10%'
	});
	
	var selectiontitleimage = Titanium.UI.createImageView({
		image:'selectiontitle.png',
		height:'80%',
		top:'12%'
	});
	
	var pjlogo = Titanium.UI.createImageView({
		image:'pjlogo.png',
		top:'17%',
		height:150,
		width:150
	});
	
	var selectionsetschoolbutton = Titanium.UI.createButton({
		title:'Kies je school...',
		top:'50%',
		height:'10%',
		width:'80%',
		backgroundColor:'#b0b0b0',
		backgroundSelectedColor:'#d0d0d0',
		color:'#003c6d'
	});
	
	var schools = ['!mpulse Kollum', 'Dalton Dokkum', 'De Dyk', 'De Foorakker', 'Leeuwarder Lyceum', 'Montessori High School', 'Stedelijk Gymnasium'];
	
	var schooloptions = {
		title:'School selecteren',
		options:schools
	};
	
	var setschool = Titanium.UI.createOptionDialog(schooloptions);
	
	selectionsetschoolbutton.addEventListener('click',function(){
		setschool.show();
		setschool.addEventListener('click', onSelectOptionDialog);
		function onSelectOptionDialog(event){
		    selectedindex = event.source.selectedIndex;
			selectedschool = schools[selectedindex];
		    if(selectedschool != null){
				selectionsetschoolbutton.title = selectedschool;
		    }
		}
	});
	
	var confirmbutton = Titanium.UI.createButton({
		title:'Bevestigen',
		height:60,
		width:150,
		bottom:'10%',
		backgroundColor:'#003c6d',
		backgroundSelectedColor:'#98afc7'
	});
	
	confirmbutton.addEventListener('click',function(){
	    Ti.App.Properties.setString('selectedschool',schools[selectedindex]);
	    if(selectedschool == '!mpulse Kollum'){
	    	createwindows('http://www3.pj.nl/kol_info_leerlingen/','http://www3.pj.nl/infoschermkollum');
	    }else if(selectedschool == 'Dalton Dokkum'){
	    	createwindows('http://www3.pj.nl/dok_info_leerlingen/','http://www3.pj.nl/infoschermdokkum');
	    }else if(selectedschool == 'De Dyk'){
	    	createwindows('http://www3.pj.nl/dyk_info_leerlingen/','http://www3.pj.nl/infoschermdedyk');
	    }else if(selectedschool == 'De Foorakker'){
	    	createwindows('http://www3.pj.nl/anna_info_leerlingen/','http://www3.pj.nl/infoschermfoorakker');
	    }else if(selectedschool == 'Leeuwarder Lyceum'){
	    	createwindows('http://www3.pj.nl/lyc_info_leerlingen/','http://www3.pj.nl/infoschermlyceum');
	    }else if(selectedschool == 'Montessori High School'){
	    	createwindows('http://www3.pj.nl/mon_info_leerlingen/','http://www3.pj.nl/infoschermmontessori');
	    }else if(selectedschool == 'Stedelijk Gymnasium'){
	    	createwindows('http://www3.pj.nl/gym_info_leerlingen/','http://www3.pj.nl/infoschermgymnasium');
	    }
	});
	
	Ti.Gesture.addEventListener('orientationchange', function(e){
		if(e.source.isPortrait()) {
			selectionactionbar.applyProperties({
				height:'10%'
			});
			selectionsetschoolbutton.applyProperties({
				height:'10%'
			});
			pjlogo.applyProperties({
				height:150,
				width:150
			});
		}else if(e.source.isLandscape()){
			selectionactionbar.applyProperties({
				height:'15%'
			});
			selectionsetschoolbutton.applyProperties({
				height:'15%'
			});
			pjlogo.applyProperties({
				height:100,
				width:100
			});
		};
	});
	
	var selectionscreenwidth = Ti.Platform.displayCaps.platformWidth;
	var selectionscreenheight = Ti.Platform.displayCaps.platformHeight;
	
	if(selectionscreenwidth > selectionscreenheight){
		selectionactionbar.applyProperties({
			height:'15%'
		});
		selectionsetschoolbutton.applyProperties({
			height:'15%'
		});
		pjlogo.applyProperties({
			height:100,
			width:100
		});
	}
	
	selectionactionbar.add(selectiontitleimage);
	
	selectionwin.add(selectionactionbar);
	selectionwin.add(pjlogo);
	selectionwin.add(selectionsetschoolbutton);
	selectionwin.add(confirmbutton);
	
	selectionwin.open();
}

function createwindows(schedulechangesurl,infoscreenurl){
	var win = Titanium.UI.createWindow({
		backgroundColor:'white',
		exitOnClose:true
	});
	
	var mainview = Titanium.UI.createView({
		top:'10%',
		height:'82%'
	});
	
	var webview1 = Titanium.UI.createWebView({
		url:schedulechangesurl
	});
	
	var webviewname;
	
	webviewname = 'Roosterwijzigingen';
	
	var webview2 = Titanium.UI.createWebView({
		url:infoscreenurl
	});
	
	var actionbar = Titanium.UI.createView({
		backgroundColor:'#dc006d',
		top:0,
		height:'10%'
	});
	
	var pjinfotitleimage = Titanium.UI.createImageView({
		image:'pjinfotitle.png',
		height:'80%',
		top:'12%'
	});
	
	var settingsbutton = Titanium.UI.createImageView({
		image:'settings.png',
		height:'100%',
		left:'2%',
		opacity:'1.0'
	});
	
	var settingswin = Titanium.UI.createWindow({
		backgroundColor:'#fff'
	});
	
	var settingsactionbar = Titanium.UI.createView({
		backgroundColor:'#dc006d',
		top:0,
		height:'10%'
	});
	
	var settingstitleimage = Titanium.UI.createImageView({
		image:'settingstitle.png',
		height:'80%',
		top:'12%'
	});
	
	if(osname == 'iphone' || osname == 'ipad'){
		backbutton.addEventListener('click',function(){
			settingswin.close();
		});
		settingsactionbar.add(backbutton);
	}
	
	var osname = Titanium.Platform.osname;
	
	if(osname == 'iphone' || osname == 'ipad'){
		var backbutton = Titanium.UI.createImageView({
			image:'back.png',
			height:'100%',
			left:'2%',
			opacity:'1.0'
		});
		backbutton.addEventListener('click',function(){
			setTimeout(function(){
			   backbutton.opacity = '1.0';
			},100);
			backbutton.opacity = '0.3';
		});
	}
	
	var schoollabel = Titanium.UI.createLabel({
		text:'Huidige school:',
		top:'35%',
		color:'#000',
		font:{fontSize:18}
	});
	
	var selectedschool = Ti.App.Properties.getString('selectedschool');
	
	var schoolstatus = Titanium.UI.createLabel({
		text:selectedschool,
		top:'40%',
		color:'#000',
		font:{fontSize:18,fontWeight:'bold'}
	});
	
	var setschoolbutton = Titanium.UI.createButton({
		title:'Verander je school...',
		top:'50%',
		height:'10%',
		width:'80%',
		backgroundColor:'#b0b0b0',
		backgroundSelectedColor:'#d0d0d0',
		color:'#000'
	});
	
	var schools = ['!mpulse Kollum', 'Dalton Dokkum', 'De Dyk', 'De Foorakker', 'Leeuwarder Lyceum', 'Montessori High School', 'Stedelijk Gymnasium'];
	
	var schooloptions = {
		title:'School selecteren',
		options:schools
	};
	
	var setschool = Titanium.UI.createOptionDialog(schooloptions);
	
	setschoolbutton.addEventListener('click',function(){
		setschool.show();
		setschool.addEventListener('click', onSelectOptionDialog);
		function onSelectOptionDialog(event){
		    selectedindex = event.source.selectedIndex;
			selectedschool = schools[selectedindex];
		    if(selectedschool != null){
		    	setschoolbutton.title = selectedschool;
		    }
		}
	});
	
	var savebutton = Titanium.UI.createButton({
		title:'Opslaan',
		height:60,
		width:150,
		bottom:'10%',
		backgroundColor:'#003c6d',
		backgroundSelectedColor:'#98afc7'
	});
	
	savebutton.addEventListener('click',function(){
	    Ti.App.Properties.setString('selectedschool',schools[selectedindex]);
	    if(selectedschool == '!mpulse Kollum'){
	    	createwindows('http://www3.pj.nl/kol_info_leerlingen/','http://www3.pj.nl/infoschermkollum');
	    }else if(selectedschool == 'Dalton Dokkum'){
	    	createwindows('http://www3.pj.nl/dok_info_leerlingen/','http://www3.pj.nl/infoschermdokkum');
	    }else if(selectedschool == 'De Dyk'){
	    	createwindows('http://www3.pj.nl/dyk_info_leerlingen/','http://www3.pj.nl/infoschermdedyk');
	    }else if(selectedschool == 'De Foorakker'){
	    	createwindows('http://www3.pj.nl/anna_info_leerlingen/','http://www3.pj.nl/infoschermfoorakker');
	    }else if(selectedschool == 'Leeuwarder Lyceum'){
	    	createwindows('http://www3.pj.nl/lyc_info_leerlingen/','http://www3.pj.nl/infoschermlyceum');
	    }else if(selectedschool == 'Montessori High School'){
	    	createwindows('http://www3.pj.nl/mon_info_leerlingen/','http://www3.pj.nl/infoschermmontessori');
	    }else if(selectedschool == 'Stedelijk Gymnasium'){
	    	createwindows('http://www3.pj.nl/gym_info_leerlingen/','http://www3.pj.nl/infoschermgymnasium');
	    }
	});
	
	Ti.Gesture.addEventListener('orientationchange', function(e){
		if(e.source.isPortrait()) {
			settingsactionbar.applyProperties({
				height:'10%'
			});
			schoollabel.applyProperties({
				top:'35%'
			});
			schoolstatus.applyProperties({
				top:'40%'
			});
			setschoolbutton.applyProperties({
				height:'10%'
			});
		} else if(e.source.isLandscape()) {
			settingsactionbar.applyProperties({
				height:'15%'
			});
			schoollabel.applyProperties({
				top:'30%'
			});
			schoolstatus.applyProperties({
				top:'38%'
			});
			setschoolbutton.applyProperties({
				height:'15%'
			});
		};
	});
	
	settingsactionbar.add(settingstitleimage);
		
	settingswin.add(settingsactionbar);
	settingswin.add(schoollabel);
	settingswin.add(schoolstatus);
	settingswin.add(setschoolbutton);
	settingswin.add(savebutton);
	
	settingsbutton.addEventListener('click',function(){
		setTimeout(function(){
			settingsbutton.opacity = '1.0';
		},100);
		settingsbutton.opacity = '0.3';
		settingswin.open();
	});
	
	var refreshbutton = Titanium.UI.createImageView({
		image:'refresh.png',
		height:'100%',
		right:'2%',
		opacity:'1.0'
	});
	
	refreshbutton.addEventListener('click',function(){
		setTimeout(function(){
			refreshbutton.opacity = '1.0';
		},100);
		refreshbutton.opacity = '0.3';
		if(webviewname == 'Roosterwijzigingen'){
			mainview.remove(webview1);
			webview1.url = schedulechangesurl;
			mainview.add(webview1);
		};
		if(webviewname == 'Mededelingen'){
			mainview.remove(webview2);
			webview2.url = infoscreenurl;
			mainview.add(webview2);
		};
	});
	
	var tabsview = Titanium.UI.createView({
		bottom:0,
		height:'10%',
		left:0,
		right:0
	});
	
	var label1 = Titanium.UI.createLabel({
		text:'Roosterwijzigingen',
		textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
		top:'10%',
		bottom:0,
		left:0,
		width:'49%',
		color:'#003c6d',
		backgroundColor:'#fff'
	});
	
	var label2 = Titanium.UI.createLabel({
		text:'Mededelingen',
		textAlign: Titanium.UI.TEXT_ALIGNMENT_CENTER,
		top:'10%',
		bottom:0,
		left:'51%',
		width:'49%',
		color:'#fff',
		backgroundColor:'#003c6d'
	});
	
	var divisionborder1 = Titanium.UI.createView({
	    backgroundColor:'#dc006d',
	    top:'10%',
	    bottom:0,
	    width:'2%',
	    left:'49%'
	});
	
	if(selectedschool == 'Stedelijk Gymnasium'){
		divisionborder2 = Ti.UI.createView({
		    backgroundColor:'#dc006d',
		    top:'10%',
		    bottom:0,
		    width:'1%',
		    left:'78%'
		});
		
		imageview = Titanium.UI.createView({
			top:'10%',
			bottom:0,
			left:'79%',
			height:'90%',
			width:'21%',
			backgroundColor:'#003c6d'
		});
		
		imageview.addEventListener ('click', function (){
			setTimeout(function(){
		   		imageview.backgroundColor = '#003c6d';
			},100);
			imageview.backgroundColor = '#fff';
			var dialog = Titanium.UI.createAlertDialog ({
				title:'Stentor',
				message:'Gevleugelde woorden insturen?',
				buttonNames:['Ja','Nee'],
				cancel:1
			});
			dialog.addEventListener ('click', function (e){
					Titanium.API.info ('e = ' + JSON.stringify(e));
					if (e.cancel === e.index || e.cancel === true) {
						return 1;
					}
					var emailDialog = Titanium.UI.createEmailDialog();
					emailDialog.subject = "Gevleugelde Woorden via PJ Info";
					emailDialog.toRecipients = ['stentor.redactie@gmail.com'];
					emailDialog.open();
					return 0;
			});
			dialog.show();
		});
	
		var image = Titanium.UI.createImageView({
			image:'stentor.png'
		});
			
		imageview.add(image);
		
		label1.applyProperties({
			width:'43%'
		});
		
		label2.applyProperties({
			width:'34%',
			left:'44%'
		});
		
		divisionborder1.applyProperties({
			width:'1%',
		    left:'43%'
		});
		
		tabsview.add(divisionborder2);
		
		tabsview.add(imageview);
	}
	
	mainview.add(webview1);
	
	win.add(mainview);
	
	actionbar.add(pjinfotitleimage);
	actionbar.add(settingsbutton);
	actionbar.add(refreshbutton);
	
	win.add(actionbar);
	
	tabsview.add(divisionborder1);
	tabsview.add(label1);
	tabsview.add(label2);
	
	win.add(tabsview);
	
	win.open();
	
	var screenwidth = Ti.Platform.displayCaps.platformWidth;
	var screenheight = Ti.Platform.displayCaps.platformHeight;
 
	if(screenwidth > screenheight){
    	mainview.applyProperties({
			height:'72.5%',
			top:'15%'
		});
		actionbar.applyProperties({
			height:'15%'
		});
		tabsview.applyProperties({
			height:'15%'
		});
		label1.applyProperties({
			top:'15%'
		});
		label2.applyProperties({
			top:'15%'
		});
		divisionborder1.applyProperties({
			top:'15%'
		});
		if(selectedschool == 'Stedelijk Gymnasium'){
			divisionborder2.applyProperties({
				top:'15%'
			});
			imageview.applyProperties({
				height:'85%',
				top:'15%'
			});
		}
		settingsbutton.addEventListener('click',function(e){
			settingsactionbar.applyProperties({
				height:'15%'
			});
			schoollabel.applyProperties({
				top:'30%'
			});
			schoolstatus.applyProperties({
				top:'38%'
			});
			setschoolbutton.applyProperties({
				height:'15%'
			});
		});
	}
	
	Ti.Gesture.addEventListener('orientationchange', function(e){
		if(e.source.isPortrait()){
			mainview.applyProperties({
				height:'82%',
				top:'10%'
			});
			actionbar.applyProperties({
				height:'10%'
			});
			tabsview.applyProperties({
				height:'10%'
			});
			label1.applyProperties({
				top:'10%'
			});
			label2.applyProperties({
				top:'10%'
			});
			divisionborder1.applyProperties({
				top:'10%'
			});
			if(selectedschool == 'Stedelijk Gymnasium'){
				divisionborder2.applyProperties({
					top:'10%'
				});
				imageview.applyProperties({
					height:'90%',
					top:'10%'
				});
			}
			settingsbutton.addEventListener('click',function(e){
				settingsactionbar.applyProperties({
					height:'10%'
				});
				schoollabel.applyProperties({
					top:'35%'
				});
				schoolstatus.applyProperties({
					top:'40%'
				});
				setschoolbutton.applyProperties({
					height:'10%'
				});
			});
		}else if(e.source.isLandscape()){
			mainview.applyProperties({
				height:'72.5%',
				top:'15%'
			});
			actionbar.applyProperties({
				height:'15%'
			});
			tabsview.applyProperties({
				height:'15%'
			});
			label1.applyProperties({
				top:'15%'
			});
			label2.applyProperties({
				top:'15%'
			});
			divisionborder1.applyProperties({
				top:'15%'
			});
			if(selectedschool == 'Stedelijk Gymnasium'){
				divisionborder2.applyProperties({
					top:'15%'
				});
				imageview.applyProperties({
					height:'85%',
					top:'15%'
				});
			}
			settingsbutton.addEventListener('click',function(e){
				settingsactionbar.applyProperties({
					height:'15%'
				});
				schoollabel.applyProperties({
					top:'30%'
				});
				schoolstatus.applyProperties({
					top:'38%'
				});
				setschoolbutton.applyProperties({
					height:'15%'
				});
			});
		};
	});
	
	label1.addEventListener('click',function(){
		label1.color = '#003c6d';
		label1.backgroundColor = '#fff';
		
		label2.color = '#fff';
		label2.backgroundColor = '#003c6d';
		
		mainview.remove(webview2);
		mainview.add(webview1);
		webviewname = 'Roosterwijzigingen';
	});
	label2.addEventListener('click',function(){
		label1.color = '#fff';
		label1.backgroundColor = '#003c6d';
		
		label2.color = '#003c6d';
		label2.backgroundColor = '#fff';
		
		mainview.remove(webview1);
		mainview.add(webview2);
		webviewname = 'Mededelingen';
	});
}
	