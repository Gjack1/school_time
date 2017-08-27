var schoolevents = new Array(
    "20170909 教职工报道",
    "20170910 老生报道注册",
    "20170911 老生开始上课",
    "20170916 新生报道注册",
    "20170917 新生开始军训",
    "20170929 新生军训结束",
    "20170930 新生开始上课",
    "20171001 国庆放假开始",
    "20171008 国庆放假结束",
    "20171009 新生老生上课",
    "20171102 运动会开始",
    "20171103 运动会结束",
    "20180101 元旦放假",
    "20180115 全院停课考试",
    "20180119 学生离校",
    "20180123 考试结束"  
);
var schoolTime = new Array();
var schoolEvent = new Array();

for( var i=0; i<schoolevents.length; i++){
    schoolTime.push(schoolevents[i].split(" ")[0]);
    schoolEvent.push(schoolevents[i].split(" ")[1]);
}



function SchoolCalendar(){
    this.school = function(date){
        
        var year = date.getFullYear(), 
            month = date.getMonth()+1,
            day = date.getDate();

        if(month<12){
            month = "0" + month
        }
        if(day<10){
            day = "0" + day
        }


        for(let i=0; i<schoolTime.length; i++){
            if(schoolTime[i] === year+month+day)
                return schoolEvent[i]
            else
                continue
        }
    }
    
}




module.exports = {
    SchoolCalendar: SchoolCalendar
}