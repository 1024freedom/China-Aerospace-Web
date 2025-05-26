window.onload=function(){
	var test=document.getElementById("test");
	var list=document.getElementById("list");
	var a=test.getElementsByTagName("a")[0];
	test.onmouseover=function(){
		this.style.border="1px solid #E5E5E5";
		a.style.color="#ee3350";
		list.style.display="block";
	}
	test.onmouseout=function(){
		this.style.border="";
		a.style.color="";
		list.style.display="";
	}
	var lx=document.getElementById("lx");
	var a1=lx.getElementsByTagName("a")[0];
	lx.onmouseover=function(){
		a1.style.color="#ee3350";
	}
	lx.onmouseout=function(){
		a1.style.color="";
	}
	var current_index=0;
	//5000表示调用周期，以毫秒为单位，5000毫秒就是5秒
	var timer=window.setInterval(autoChange, 5000);
	//获取所有轮播按钮
	var button_li=document.getElementById("button").getElementsByTagName("li");
	//获取所有banner图
	var pic_div=document.getElementById("move1").getElementsByTagName("div");
	//遍历元素
	for(var i=0;i<button_li.length;i++){
		//添加鼠标滑过事件
		button_li[i].onmouseover=function(){
			//定时器存在时清除定时器
			if(timer){
				clearInterval(timer);
			}
			//遍历元素
			for(var j=0;j<pic_div.length;j++){
				//将当前索引对应的元素设为显示
				if(button_li[j]==this){
					current_index=j; //从当前索引位置开始
					button_li[j].className="current";
					pic_div[j].className="current";
				}else{
					//将所有元素改变样式
					pic_div[j].className="current1";
					button_li[j].className="current2";
				}
			}
		}
		//鼠标移出事件
		button_li[i].onmouseout=function(){
			//启动定时器，恢复自动切换
			timer=setInterval(autoChange,5000);			
		}
	}
	function autoChange(){
		//自增索引
		++current_index;
		//当索引自增达到上限时，索引归0
		if (current_index==button_li.length) {
			current_index=0;
		}
		for(var i=0;i<button_li.length;i++){
			if(i==current_index){
				button_li[i].className="current";
				pic_div[i].className="current";
			}else{
				button_li[i].className="current2";
				pic_div[i].className="current1";
			}
		}
		}
	var news_li=document.getElementById("news").getElementsByTagName("li");
	//获取所有tab栏内容
	var news_con_dl=document.getElementById("news_con").getElementsByTagName("dl");
	//遍历元素
	for(var c=0;c<news_li.length;c++){
		//添加鼠标滑过事件
		news_li[c].onmouseover=function(){
			//遍历元素
			for(var b=0;b<news_con_dl.length;b++){
				//将当前索引对应的元素设为显示
				if(news_li[b]==this){
					news_li[b].className="current";
					news_con_dl[b].className="current";
				}else{
					//将所有元素改变样式
					news_li[b].className="";
					news_con_dl[b].className="";
				}
			}
		}
	}
}