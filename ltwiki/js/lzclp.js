// 雷霆战机wiki 战神装备模板
// 月桂 20240508
window.onload = function() {
    //基础配置区域
    var zbtypes = 4 //装备类别 0-未分类 1-战机 2-装甲 3-副武器 4-僚机
    var ZBName = "量子磁流炮" //装备名称
    

    var FCI = "聚能电浆炮" //组成装备1
    var FCII = "超导电磁炮" //组成装备2

    var FCIUrl = "djp.html?GetLabel=WIKIZS&From=lzclp" //组成装备1
    var FCIIUrl = "dcp.htmlGetLabel=WIKIZS&From=lzclp" //组成装备2

    

    var TJ ="贯穿+穿甲" //特技
    var YN ="无" //异能


    // 自动计算区域
        // 计算装备类型
    var ZBTypeName = "未定义装备，请检查配置文件"
    var ZBMaxIntroduce = ZBName + "是由<a href="+FCIUrl+">" + FCI  + "</a>和<a href="+ FCIIUrl +">"+FCII + "</a>按同步率提供，通过强化能极大限度提高战斗能力" //装备介绍
    if(zbtypes == 1){
        var JNI = "测试1" //技能1
        var JNII = "测试2" //技能2 如果没有写 null
        var JNIII = null //技能2
        ZBTypeName = "战神战机"
    }
    else if(zbtypes){
        if(zbtypes == 2){
            ZBTypeName = "战神装甲"
        }
        if(zbtypes == 3){
            ZBTypeName = "战神副武器"
        }
        if(zbtypes == 4){
            ZBTypeName = "战神僚机"
        }
    }
    document.getElementById("zbn").innerHTML=ZBName
    document.getElementById("zblx").innerHTML=ZBTypeName
    document.getElementById("tj").innerHTML=TJ
    document.getElementById("yn").innerHTML=YN
    document.getElementById("jss").innerHTML=ZBMaxIntroduce
    if(zbtypes == 1){
        var jn ="战机技能："
        if(JNI != null){
            jn = jn + JNI
            if(JNII != null){
                jn = jn + '、' + JNII
                if(JNIII != null){jn = jn + '、' + JNIII}
            }
        }
        document.getElementById("jn").innerHTML=jn
    }
}
