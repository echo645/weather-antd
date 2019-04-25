

var provinceData = ['安徽','北京','福建','甘肃','广东','广西','贵州','海南','河北','河南','黑龙江','湖北','湖南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','天津','西藏','新疆','云南','浙江','重庆'];
var cityData = {
    安徽: ['安庆','池州','黄山','铜陵','阜阳','六安','合肥','芜湖','马鞍山','亳州','淮南','蚌埠','滁州','宿州','宣城','淮北'],
    北京: ['北京'],
    福建: ['漳州','龙岩','厦门','三明','南平','泉州','莆田','福州','宁德'],
    甘肃: ['陇南','张掖','酒泉','嘉峪关','甘南','定西','临夏','兰州','天水','白银','平凉','武威','金昌','庆阳'],
    广东: ['湛江','茂名','阳江','江门','珠海','云浮','肇庆','清远','佛山','中山','广州','东莞','深圳','惠州','河源','韶关','汕尾','揭阳','汕头','潮州','梅州'],
    广西: ['崇左','北海','防城港','钦州','玉林','百色','南宁','河池','贵港','来宾','柳州','梧州','桂林','贺州'],
    贵州: ['黔西南','六盘水','安顺','黔南','毕节','贵阳','遵义','黔东南','铜仁'],
    海南: ['西沙','三亚','乐东','五指山','东方','昌江','白沙','儋州','保亭','陵水','万宁','琼中','屯昌','琼海','文昌','临高','澄迈','定安','海口','南沙','中沙'],
    河北: ['邯郸','邢台','石家庄','保定','衡水','沧州','廊坊','唐山','张家口','承德','秦皇岛'],
    河南: ['南阳','三门峡','洛阳','信阳','驻马店','平顶山','漯河','周口','许昌','郑州','焦作','济源','开封','商丘','新乡','安阳','鹤壁','濮阳'],
    黑龙江: ['齐齐哈尔','哈尔滨','牡丹江','大兴安岭','大庆','绥化','伊春','黑河','七台河','佳木斯','鸡西','鹤岗','双鸭山'],
    湖北: ['恩施','宜昌','荆州','神农架','十堰','荆门','襄阳','咸宁','潜江','天门','仙桃','孝感','黄石','鄂州','武汉','黄冈','随州'],
    湖南: ['永州','怀化','湘西','邵阳','郴州','衡阳','娄底','张家界','益阳','常德','株洲','湘潭','长沙','岳阳'],
    吉林: ['四平','白城','通化','白山','辽源','长春','吉林','松原','延边'],
    江苏: ['南京','常州','镇江','扬州','无锡','苏州','泰州','南通','淮安','宿迁','盐城','徐州','连云港'],
    江西: ['赣州','吉安','萍乡','宜春','新余','抚州','九江','南昌','上饶','鹰潭','景德镇'],
    辽宁: ['大连','葫芦岛','朝阳','营口','鞍山','锦州','盘锦','阜新','辽阳','沈阳','铁岭','丹东','本溪','抚顺'],
    内蒙古: ['阿拉善盟','鄂尔多斯','乌海','巴彦淖尔','包头','呼和浩特','乌兰察布','锡林郭勒','赤峰','通辽','乌兰浩特','呼伦贝尔'],
    宁夏: ['固原','中卫','吴忠','银川','石嘴山'],
    青海: ['玉树','果洛','格尔木','海西','海南','海北','黄南','海东','西宁'],
    山东: ['菏泽','济宁','枣庄','临沂','聊城','泰安','济南','莱芜','淄博','德州','滨州','日照','潍坊','青岛','东营','烟台','威海'],
    山西: ['运城','临汾','晋城','长治','吕梁','晋中','太原','忻州','朔州','阳泉','大同'],
    陕西: ['汉中','安康','商洛','宝鸡','西安','咸阳','杨凌','铜川','渭南','延安','榆林'],
    上海: ['上海'],
    四川: ['甘孜','阿坝','攀枝花','凉山','泸州','雅安','乐山','眉山','成都','宜宾','自贡','内江','资阳','遂宁','南充','广安','德阳','绵阳','广元','巴中','达州'],
    天津: ['天津'],
    西藏: ['日喀则','阿里','那曲','山南','拉萨','林芝','昌都'],
    新疆: ['喀什','和田','克州','巴音郭楞','阿克苏','阿拉尔','伊犁','博尔塔拉','乌鲁木齐','塔城','石河子','昌吉','吐鲁番','五家渠','克拉玛依','阿勒泰','哈密'],
    云南: ['普洱','西双版纳','德宏','临沧','保山','大理','怒江','楚雄','丽江','迪庆','红河','玉溪','昆明','曲靖','文山','昭通'],
    浙江: ['丽水','温州','衢州','金华','杭州','台州','绍兴','湖州','嘉兴','宁波','舟山'],
    重庆: ['重庆']
}
export {provinceData,cityData};