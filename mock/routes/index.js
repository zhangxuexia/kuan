var express = require('express');
var router = express.Router();
router.post('/api/adminDetail', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "user_name": "张雪霞12",   //用户名
            "mobile": "13355989898",      //联系方式
            "defaultImg": "http://pic7.photophoto.cn/20080407/0034034859692813_b.jpg",
            "head": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532335402896&di=75fd1cf28fd33221cec4562d317ac9c9&imgtype=0&src=http%3A%2F%2Fpic35.photophoto.cn%2F20150418%2F0010023279542311_b.jpg",        //logo
            "email":null, //网址
            "department":null,
            "template_ids":"1,2,3,4,5",
            "position":null,
            "sex":null,
            "name":null,
            "logouturl":"http://test.freebuds.cnmstl.net/",
            "privilege":"1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,85,86,87,88,89,90,91,92,93,94,95,96"
        }
    });
});
router.post('/api/kirin/judge/listm', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "dataList": [{
                "check_id": 1,
                "type": 2,
                "status": "yes",//可用性
                "content": "敏感词",
                "time": "2018-12-18 09:56:14",
                "content_type": "敏感词类型",
                "name": "百度",
                "level": 0,
                "url": "www.baidu.com",
                "child": []

            },
                {
                    "check_id": 4,
                    "type": 2,
                    "status": "yes",//可用性
                    "content": "敏感词",
                    "time": "2018-12-18 09:56:14",
                    "content_type": "敏感词类型",
                    "level": 0,
                    "name": "百度",
                    "url": "www.baidu.com",
                    "child": [
                        {
                            "check_id": 11,
                            "url": "456",
                            "type": "1",
                            "status": "yes",
                            "content": "",
                            "content_type": "",
                            "content_time": "",
                            "level": 1,
                            "name": "测试123-天融信234243242",
                            "time": "2018-12-19 13:48:53",
                            "child": [
                                {
                                    "check_id": 11,
                                    "url": "456",
                                    "type": "1",
                                    "status": "yes",
                                    "content": "",
                                    "content_type": "",
                                    "content_time": "",
                                    "level": 2,
                                    "name": "三级-天融信",
                                    "time": "2018-12-19 13:48:53",
                                    "child":[
                                        {
                                            "check_id": 11,
                                            "url": "456",
                                            "type": "1",
                                            "status": "yes",
                                            "content": "",
                                            "content_type": "",
                                            "content_time": "",
                                            "level": 3,
                                            "name": "三级-天融信",
                                            "time": "2018-12-19 13:48:53",
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "check_id": 21,
                            "url": "456",
                            "type": "1",
                            "status": "yes",
                            "content": "",
                            "content_type": "",
                            "content_time": "",
                            "level": 0,
                            "name": "测试123-天融信",
                            "time": "2018-12-19 13:48:53"
                        },
                        {
                            "check_id": 23,
                            "url": "456",
                            "type": "1",
                            "status": "yes",
                            "content": "",
                            "content_type": "",
                            "content_time": "",
                            "level": 0,
                            "name": "测试123-天融信",
                            "time": "2018-12-19 13:48:53"
                        }
                    ]
                },
                {
                    "check_id": 5,
                    "type": 2,
                    "status": "yes",//可用性
                    "content": "敏感词",
                    "time": "2018-12-18 09:56:14",
                    "content_type": "敏感词类型",
                    "name": "百度",
                    "level": 0,
                    "url": "www.baidu.com",
                    "child": [
                        {
                            "check_id": 6,
                            "url": "456",
                            "type": "1",
                            "status": "yes",
                            "content": "",
                            "content_type": "",
                            "content_time": "",
                            "level": 1,
                            "name": "测试123-天融信",
                            "time": "2018-12-19 13:48:53"
                        },
                        {
                            "check_id": 7,
                            "url": "456",
                            "type": "1",
                            "status": "yes",
                            "content": "",
                            "content_type": "",
                            "content_time": "",
                            "level": 1,
                            "name": "测试123-天融信",
                            "time": "2018-12-19 13:48:53"
                        },
                        {
                            "check_id": 8,
                            "url": "456",
                            "type": "1",
                            "status": "yes",
                            "content": "",
                            "content_type": "",
                            "content_time": "",
                            "level": 1,
                            "name": "测试123-天融信",
                            "time": "2018-12-19 13:48:53"
                        }
                    ]
                }
            ],
            "pageNum": "1",
            "totalNumber": 23,
            "totalPages": 1,
            "content":'搜索内容',
            "jc_id":"1",
        }
    });
});
router.post('/api/freebuds/user/roleList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "超级管理员"
            },
            {
                "id": 2,
                "name": "admin"
            }
        ]
    });
});
router.post('/api/freebuds/Appraisal/taskindex', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json(
        {
            "status": "0",
            "data": {
                "all_apply":"1",
                "being_apply":"2",
                "end_apply":"234",
                "my_wait_apply":"23",
                "my_end_apply":"23"


            }
        }
    );
});
router.post('/api/freebuds/appraisal/shebeimain', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json(
        {
            "status": "0",
            "data": {
                "list_id":"1",
                "type":"2",
                "number":"234",
                "name":"名称"


            }
        }
    );
});
router.post('/api/freebuds/Testcasetemplate/typeList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json(
        {
            "status": "0",
            "data": [
                {
                    "id": 1,
                    "name": "功能要求",
                    "content1":"234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求234234功能要求功能要求"
                },
                {
                    "id": 2,
                    "name": "性能要求",
                    "content1":"234234"
                }
            ]
        }
    );
});
router.post('/api/freebuds/Appraisal/shebeis', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [{
            "id": 1,
    "number": "编号",
    "name": "442",
    "ip": "2.3.2",
    "system": "win8",
    "yingjianpeizhi": "ddd",
    "ruanjianpeizhi": "sss"
        },
            {
                "id": 2,
                "number": "编号234",
                "name": "名称",
                "ip": "2.3.2",
                "system": "win8",
                "yingjianpeizhi": "ddd",
                "ruanjianpeizhi": "sss"
            }
        ]
    });
});
router.post('/api/freebuds/Appraisal/upload', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": 'http://test.freebuds.cnmstl.net/upload/20190403/15542714516710396927e7a5jw1dts08fsr7pj.jpg'
    });
});
router.post('/api/freebuds/appraisal/jiance', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "id":1,// 信息id

            "jianyanhuanjing": '检验环境描述',

            "gongnengdesc": '功能测试环境描述',

            "xingnengdesc": '性能测试环境描述',

            "qitaceshigongju": '其他测评工具',

//功能测试环境---拓扑图片

            "picList1": [
                {
                    "id": 2,//图片id

                    "path":"http://img1.imgtn.bdimg.com/it/u=2735633715,2749454924&fm=26&gp=0.jpg",//图片路径

                    "content":'图片描述',//图片描述

                }
            ],

//性能测试环境---拓扑图片

            "picList2": [
                {
                    "id": 2,//图片id

                    "path":"http://img0.imgtn.bdimg.com/it/u=4109715124,101168126&fm=26&gp=0.jpg",//图片路径

                    "content":'图片描述',//图片描述

                }
            ],
            "jiancesbList": [
                {
                    "id": 2,//图片id

                    "number":"编号",//编号

                    "name":'名称',//名称

                    "type":1,//设备类型   1非大型设备   2大型设备

                    "ip":'127.0.0.1',//ip

                    "system":'操作系统',//操作系统

                    "yingjianpeizhi":'硬件配置',//硬件配置

                    "ruanjianpeizhi":'软件配置',//软件配置

                }
            ],

        }
    });
});
router.post('/api/freebuds/appraisal/yangpin', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "id":1,// 信息id

            "chanpinjiegou": '产品结构',

            "gongnenggaishu": '功能概述',

            "canshugaishu": '参数概述',

            "caozuorj": '软件产品—支持操作系统',

            "caozuoyj": '硬件产品—支持操作系统',

            "peizhishuoming": '配置说明',

            "comment": '备注',

            "guanliruanjzty": '管理软件支持的操作系统类型/版本',

            "picList": [
                {
                    "id": 2,//图片id

                    "path":"data:image/jpeg;base64,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",//图片路径

                    "content":'图片描述',//图片描述

                }
            ],
        }
    });
});
router.post('/api/freebuds/problem/problemTypeList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "功能要求"
            },
            {
                "id": 2,
                "name": "性能要求"
            }
        ]
    });
});
router.post('/api/freebuds/appraisal/auditlist', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[{
                "id": 4,
                "task_id":"45",
                "name": "百度3",

                "aqchangjia_type_id": 1,

                "aqchangjia_type_name": "有限责任公司",

                "money": 1000,

                "address": "北京",

                "create_date": "2019-10-10",

                "yingye_date1": "2019-10-10",

                "yingye_date2": "2019-10-10",

                "jiguan": "北京市公安局",
                "time": "2019-03-01 18:52:14"
            }]
        }
    });
});
router.post('/api/freebuds/appraisal/evallist', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[{
                "id": 4,
                "task_id":"45",
                "list_id":"45",
                "name": "百度3",
                 "is_old":"1",
                "aqchangjia_type_id": 1,

                "aqchangjia_type_name": "有限责任公司",

                "money": 1000,

                "address": "北京",

                "create_date": "2019-10-10",

                "yingye_date1": "2019-10-10",

                "yingye_date2": "2019-10-10",

                "jiguan": "北京市公安局",
                "time": "2019-03-01 18:52:14"
            }]
        }
    });
});
router.post('/api/freebuds/Testcasetemplate/listm', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[{
                "id": 4,

                "name": "百度3",

                "aqchangjia_type_id": 1,
                 "content1":"有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司",
                "aqchangjia_type_name": "有限责任公司",

                "money": 1000,

                "address": "北京",

                "create_date": "2019-10-10",

                "yingye_date1": "2019-10-10",

                "yingye_date2": "2019-10-10",

                "jiguan": "北京市公安局",
                "time": "2019-03-01 18:52:14"
            }]
        }
    });
});
router.post('/api/freebuds/Provider/listm', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[{
                "id": 4,

                "name": "百度3",

                "aqchangjia_type_id": 1,

                "aqchangjia_type_name": "有限责任公司",

                "money": 1000,

                "address": "北京",

                "create_date": "2019-10-10",

                "yingye_date1": "2019-10-10",

                "yingye_date2": "2019-10-10",

                "jiguan": "北京市公安局",
                "time": "2019-03-01 18:52:14"
            }]
        }
    });
});
router.post('/api/freebuds/Testcase/listm', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[{
                "id": 4,

                "name": "百度3",

                "aqchangjia_type_id": 1,

                "content1": "有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司有限责任公司",

                "money": 1000,

                "address": "北京",

                "create_date": "2019-10-10",

                "yingye_date1": "2019-10-10",

                "yingye_date2": "2019-10-10",

                "jiguan": "北京市公安局",
                "time": "2019-03-01 18:52:14"
            }]
        }
    });
});
router.post('/api/freebuds/Leak/listm', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[{
                "id": 4,

                "name": "百度3",

                "aqchangjia_type_id": 1,

                "aqchangjia_type_name": "有限责任公司",

                "money": 1000,

                "address": "北京",

                "create_date": "2019-10-10",

                "yingye_date1": "2019-10-10",

                "yingye_date2": "2019-10-10",

                "jiguan": "北京市公安局",
                "time": "2019-03-01 18:52:14"
            }]
        }
    });
});
router.post('/api/freebuds/provider/changjiaTypeList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "防火墙"
            },
            {
                "id": 2,
                "name": "安全隔离与信息交换产品"
            },
            {
                "id": 3,
                "name": "入侵防御产品"
            }
        ]
    });
});
router.post('/api/freebuds/Standard/typeListm', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "防火墙"
            },
            {
                "id": 2,
                "name": "安全隔离与信息交换产品"
            },
            {
                "id": 3,
                "name": "入侵防御产品"
            }
        ]
    });
});
router.post('/api/freebuds/problem/listm', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[
                {
                    "id": 1,

                    "number": "2302120",

                    "name": "aa",

                    "aqxinxi_type_id": 1,

                    "aqxinxi_type_name": "功能要求",

                    "content": "111111",

                    "user_name": "admin",

                    "time": "1970-01-01 08:00:00"
                }
            ],
            "pageNum": 1,

            "totalNumber": 1,

            "totalPages": 1
        }
    });
});
router.post('/api/freebuds/Standard/main', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "biaozhun_id": "1",
            "id": 1,
            "biaozhun_type_id": 2,//标准类别
            "number": "GBK/24",//编号
            "name": "信安在线",//标准名称
            "path": "www.cnmstl.net",//附件路径
            "path_name": "2019年网络保险标准",
            "sy_uid": 0,
            "time": 1551428757,
            "info":[{"id":51,"biaozhun_id":10,"parent_id":0,"number":"1","name":"安全技术要求","name2":"","level":1,"is_biaozhun":1,"time":1551753378,"children":[{"id":77,"biaozhun_id":10,"parent_id":51,"number":"1.1","name":"fdddf","name2":null,"level":2,"is_biaozhun":1,"time":1551762257,"children":[{"id":78,"biaozhun_id":10,"parent_id":77,"number":"1.11","name":"svasr","name2":null,"level":3,"is_biaozhun":1,"time":1551762270,"children":[{"id":79,"biaozhun_id":10,"parent_id":78,"number":null,"name":"dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddf","name2":"<p>dddddddddddddddddddddf<\/p>","level":4,"is_biaozhun":2,"time":1551762276}]}]}]},{"id":52,"biaozhun_id":10,"parent_id":0,"number":"2","name":"安全可靠性要求","name2":null,"level":1,"is_biaozhun":1,"time":1551753378},{"id":53,"biaozhun_id":10,"parent_id":0,"number":"3","name":"安全性要求","name2":null,"level":1,"is_biaozhun":1,"time":1551753378}]
        }
    });
});
router.post('/api/freebuds/Standard/infomain', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "id":"345"
        }
    });
});
router.post('/api/freebuds/standard/bzlist', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "超级管理员"
            },
            {
                "id": 2,
                "name": "admin"
            }
        ]
    });
});
router.post('/api/freebuds/user/jgList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "超级管理员"
            },
            {
                "id": 2,
                "name": "admin"
            }
        ]
    });
});
router.post('/api/freebuds/Testcase/main', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "name2":"指标要求要求要求",
            "content1":"测评初始化1",
            "content2":"测评初始化2",
            "content3":"测评初始化3",
            "content4":"测评初始化4",
            "content5":"测评初始化",
        }
    });
});
router.post('/api/freebuds/appraisal/evainfock', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "name2":"指标要求要求要求",
            "content1":"测评初始化",
            "content2":"测评初始化",
            "content3":"测评初始化",
            "content4":"测评初始化",
            "content5":"测评初始化",
        }
    });
});
router.post('/api/freebuds/appraisal/yonglillist', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "dataList":[
                {
                    "id": 1,
                    "task_name": "用例"
                },
                {
                    "id": 2,
                    "task_name": "用例2"
                }
            ]
        }
    });
});
router.post('/api/freebuds/Appraisal/aqchangjiaList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "超级管理员"
            },
            {
                "id": 2,
                "name": "admin"
            }
        ]
    });
});
router.post('/api/freebuds/appraisal/team', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "team_uids":""
        }
    });
});
router.post('/api/freebuds/appraisal/evainfo', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "list_id": 1,//测评记录id
            "task_id": 1,//测评记录id
            "number": "abc1246",//任务编号
            "name": "测试任务",//产品名称
            "chanpinxt": null,//产品形态
            "biaozhun_id": 1,//标准id
            "is_gray":"2",
            "biaozhun_type_id": 1,
            "biaozhun_type_name": "防火墙",//标准类别
            "biaozhun_name": "信安在线",//标准依据
            "info": [
                {

                    "id":8,
                    "biaozhun_id":2,
                    "parent_id":0,
                    "number":"",
                    "name":"安全技术要求",
                    "name2":null,
                    "level":1,
                    "is_biaozhun":1,
                    "t_type":1,
                    "time":1552011185,
                    "children": [
                        {
                            "id":11,
                            "biaozhun_id":2,
                            "parent_id":8,
                            "number":"1.1",
                            "name":"防火墙标准1",
                            "name2":"",
                            "level":2,
                            "is_biaozhun":1,
                            "t_type":2,
                            "time":1552011213,
                        }
                    ]
                },
                {
                    "id":9,
                    "biaozhun_id":2,
                    "parent_id":0,
                    "number":null,
                    "name":"安全可靠性要求",
                    "name2":null,
                    "level":1,
                    "is_biaozhun":1,
                    "t_type":2,
                    "time":1552011185
                },
            ],
            "count_arr": {
                "8_true_count": 1,//标准1对应的已填写项
                "8_all_count": 1,
                    "9_true_count": 0,
    "9_all_count": "34"
}
        }
    });
});
router.post('/api/freebuds/appraisal/userllist', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "uid": 1,
                "name": "超级管理员"
            },
            {
                "uid": 2,
                "name": "admin"
            }
        ]
    });
});
router.post('/api/freebuds/user/jgList', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": [
            {
                "id": 1,
                "name": "超级管理员"
            },
            {
                "id": 2,
                "name": "admin"
            }
        ]
    });
});
router.post('/api/freebuds/appraisal/task', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "id": 2,//任务id
            "name": "产品名称",

            "biaozhun_type_id":1,

            "biaozhun_type__name":"标准类型",

            "aqchangjia_id":1,

            "xinghao":"型号/版本",

            "opinion":2,

            "number": "任务编号",// 任务编号

            "jianyanlb": 1,//检验类别  1委托检验  2专项检验  3其他检验

            "jianyanlb_info": "值",//检验类别选择其他检验时的input框值

            "shengchandw": "生产单位",//生产单位

            "aqchangjia_name":"委托单位",

            "biaozhun_name":"2",

            "chanpinxt": "2",// 产品形态 1硬件  2软件  3硬件+软件    4固件  5硬件+固件  6软件+固件  7硬件+软件+固件

            "count": 2,// 产品数量

            "contact": "联系人",

            "tel": "15101577233",// 电话

            "mobile": "15101588122",// 手机号

            "email": "34324@qq.com",// 邮件

            "youbian": "",// 邮编

            "address": "地址",// 地址

            "jinjicd": 1,// 紧急程度 1普通   2紧急

            "jiaofenzt": 1,// 缴费状态 1已缴费   2未缴费

            "jiaofenxx": "缴费信息",// 缴费信息

            "comment": "任务备注",// 任务备注

            "comment_zz": "资质备注",//资质备注

            "time": "2018-11-12",// 任务时间

            "time_zz": "2018-11-12",//资质时间
        }
    });
});
router.post('/api/freebuds/user/main', function(req, res, next) {
    /* const query=req.body.name;
    alert(query);*/
    res.json({
        "status": "0",
        "data": {
            "id": 1,
            "departmentname": "公安部第三研究所",
            "user_name": "admin",
            "name": "超级管理员",
            "sex": 1,
            "mobile": "13513213",
            "telephone": "13513213",
            "telephone2": "13513213",
            "email": "13513213@qq.com",
            "electrical": "13513213",
            "status": "yes",
            "template_ids": "1,4",

            "template_name": "系统管理员,检验员",
            "comment": "13513213"
        }
    });
});
router.post('/api/freebuds/appraisal/tasklist', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "dataList": [{
                "id": 2,
                "name": "产品名称",
                "biaozhun_type_name": "产品类型",
                "xinghao": "产品型号/版本",
                "aqchangjia_name": "厂商名称",

                "time": "申请时间",
                "jiaofenzt":"2",
                "opinion": 1,//受理意见 1受理   2不受理
                "is_down":1,
                "task_number": "任务编号",
                "status":"1",
                "comment": "备注",

                "comment_zz": "资质备注",
            },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "2", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "任务模板", //添加时间
                    "task_id": "1", //添加时间
                },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "3", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "jinjicd": "2", //主网站链接地址
                    "jiaofenzt": "1", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "", //添加时间
                    "task_id": "1", //添加时间
                },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "4", //监控状态 监控中 已暂停
                    "jinjicd": "1", //监控状态 监控中 已暂停
                    "jiaofenzt": "2", //网站域名
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "", //添加时间
                    "task_id": "1", //添加时间
                }
            ],
            "pageNum": "1",
            "totalNumber": 23,
            "totalPages": 1,
            "content":'搜索内容',
            "jc_id":"1",
        }
    });
});
router.post('/api/freebuds/Standard/listm', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "dataList": [{
                "id": 2,//网站ID
                "name": "拍拍网", //网站名称
                "status": "yes", //监控状态 监控中 已暂停
                "status1": "监控中", //监控状态 监控中 已暂停
                "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                "url2": "news.songjiang.gov.cn", //网站域名
                "ip": "116.236.129.41", //ip地址
                "time": "2018-07-11 20:19:11", //添加时间
                "task_name": "任务模板", //添加时间
                "task_id": "0", //添加时间
                "warn":"yes",
            },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "no", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "任务模板", //添加时间
                    "task_id": "1", //添加时间
                },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "no2", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "", //添加时间
                    "task_id": "1", //添加时间
                }
            ],
            "pageNum": "1",
            "totalNumber": 23,
            "totalPages": 1,
            "content":'搜索内容',
            "jc_id":"1",
        }
    });
});
router.post('/api/freebuds/Department/listm', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "dataList": [{
                "id": 2,//网站ID
                "name": "拍拍网", //网站名称
                "status": "yes", //监控状态 监控中 已暂停
                "status1": "监控中", //监控状态 监控中 已暂停
                "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                "url2": "news.songjiang.gov.cn", //网站域名
                "ip": "116.236.129.41", //ip地址
                "time": "2018-07-11 20:19:11", //添加时间
                "task_name": "任务模板", //添加时间
                "task_id": "0", //添加时间
                "warn":"yes",
            },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "no", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "任务模板", //添加时间
                    "task_id": "1", //添加时间
                },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "no2", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "", //添加时间
                    "task_id": "1", //添加时间
                }
            ],
            "pageNum": "1",
            "totalNumber": 23,
            "totalPages": 1,
            "content":'搜索内容',
            "jc_id":"1",
        }
    });
});
router.post('/api/freebuds/Department/main', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "name":"机构名称",

            "content":"机构简称",

            "comment":"备注",
            "contact":'[{"contact_name":"联系人","contact_act":"18989898989"}]'
        }
    });
});
router.post('/api/freebuds/user/listm', function(req, res, next) {
    res.json({
        "status": "0",
        "data": {
            "dataList": [{
                "id": 2,//网站ID
                "name": "拍拍网", //网站名称
                "status": "yes", //监控状态 监控中 已暂停
                "status1": "监控中", //监控状态 监控中 已暂停
                "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                "url2": "news.songjiang.gov.cn", //网站域名
                "ip": "116.236.129.41", //ip地址
                "time": "2018-07-11 20:19:11", //添加时间
                "task_name": "任务模板", //添加时间
                "task_id": "0", //添加时间
                "warn":"yes",
            },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "no", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "任务模板", //添加时间
                    "task_id": "1", //添加时间
                },
                {
                    "id": 3,//网站ID
                    "name": "拍拍网", //网站名称
                    "status": "no2", //监控状态 监控中 已暂停
                    "status1": "已暂停", //监控状态 监控中 已暂停
                    "url": "http://news.songjiang.gov.cn/", //主网站链接地址
                    "url2": "news.songjiang.gov.cn", //网站域名
                    "ip": "116.236.129.41", //ip地址
                    "time": "2018-07-11 20:19:11", //添加时间
                    "task_name": "", //添加时间
                    "task_id": "1", //添加时间
                }
            ],
            "pageNum": "1",
            "totalNumber": 23,
            "totalPages": 1,
            "content":'搜索内容',
            "jc_id":"1",
        }
    });
});
router.post('/api/freebuds/user/roleListm', function(req, res, next) {
    res.json({
        "status": "0",
        "data": [{
            "id": 25,

            "name": "检测员",

            "privilege": "1,2",

            "time": "2019-03-01 15:04:05",

            "actor": "超级管理员",

            "chinese": "首页,添加用户"
        }]
    });
});
router.post('/api/contract/uploadContract', function(req, res, next) {
    res.json({
        "status": "0",
        "data":'a.pdf'
    });
});
module.exports = router;

