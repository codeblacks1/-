/**
 * 基础模块uri
 */
/*1.产品维护页面*/
export const cpwh={
   //新增地块信息
   addArea:{
    url:"/area/info/add",
    method:"post"
},
AreaList:{
    url:"/area/info/list",
    method:"post"
},
SensorList:{
    url:"/sensor/info/list",
    method:"post"
},
SensorUpdate:{
    url:"/sensor/alert/update",
    method:"post"
},

addProduct:{
    url:"/product/block/add",
    method:"post"
},

BlockList:{
    url:"/product/block/list",
    method:"post"
},
ProductBlockInfo:{
    url:"/product/block/info",
    method:"post"
},

ProductTypeList:{
    url:"/product/type/list",
    method:"post"
},

addcultivation:{
    url:"/product/cultivation/add",
    method:"post"
},
addprocess:{
    url:"/product/process/add",
    method:"post"
},

addqualityCheck:{
        url:"/product/qualityCheck/add",
        method:"post"
    },
    
    addlogistics:{
        url:"/product/logistics/add",
        method:"post"
    }, 


    //1获取产品维护列表
    pageZtNcp:{
        url:"/jccpwh/cp/pageZtNcp/",
        method:"get"
    },
    //2产品维护-根据ID获取产品维护信息
    getNcpInfoById:{
        url:"/jccpwh/cp/getNcpInfoById/",
        method:"get"
    },
    //3产品维护-保存/修改
    saveSonZtncp:{
        url:"/jccpwh/cp/saveSonZtncp/",
        method:"post"
    },
    //4产品维护-根据农产品ID获取种植记录
    getZzjlByZtncpId:{
        url:"/jccpwh/cp/getZzjlByZtncpId/",
        method:"post"
    },
    //5产品维护-提取农产品
    getUnTqNcpList:{
        url:"/jccpwh/cp/getUnTqNcpList/",
        method:"get"
    },
    //6产品维护-保存提取的主体农产品
    saveZtncp:{
        url:"/jccpwh/cp/saveZtncp/",
        method:"post"
    },
    //7产品维护-判断农产品代码或者名称是否重复
    checkZtncpIsExist:{
        url:"/jccpwh/cp/checkZtncpIsExist/",
        method:"post"
    },
    //8产品维护-启用、停用
    updateNcpStatus:{
        url:"/jccpwh/cp/updateNcpStatus/",
        method:"post"
    },
    //8产品维护-大类小类
    getDataByCy:{
        url:"/utilmodel/qy/getDataByCy/",
        method:"get"
    }
}
/*2.投入品维护页面*/
export const trp={
    //1投入品维护--获取所有投入品 PAGE
    pageZttrp:{
        url:"/JcTrpWh/pageZttrp/",
        method:"get"
    },
    //2投入品维护--基地未提取的投入品
    getNcpInfoById:{
        url:"/JcTrpWh/pageNcpUnTqAgri/",
        method:"get"
    },
    //3投入品维护--获取数据字典数据
    saveSonZtncp:{
        url:"/JcTrpWh/getSjzdData/",
        method:"get"
    },
    //4投入品维护--删除主体投入品
    delZttrp:{
        url:"/JcTrpWh/delZttrp/",
        method:"post"
    },
    //5投入品维护--保存提取的投入品
    saveZttrp:{
        url:"/JcTrpWh/saveZttrp/",
        method:"post"
    },
    //6投入品维护--根据类型编码和编码获取数据字典信息
    getSjzdDataListByBm :{
        url:"/JcTrpWh/getSjzdDataListByBm/",
        method:"get"
    },
    //6投入品维护--保存企业投入品申请信息
    saveTrpSqb :{
        url:"/JcTrpWh/saveTrpSqb/",
        method:"post"
    },
    //7投入品维护--根据ID删除除投入品申请信息
    delTrpSqb :{
        url:"/JcTrpWh/delTrpSqb/",
        method:"post"
    },
    //8投入品维护--根据ID删除除投入品申请信息
    delTrpSqb :{
        url:"/JcTrpWh/delTrpSqb/",
        method:"post"
    },
    //9投入品维护--分页查询投入品申请信息
    pageTrpSqb :{
        url:"/nzsyBizAgriLib/pageNzsqb/",
        method:"get"
    }
}

/*3.地块负责人页面*/
export const dkfzr={
    //1地块负责人-初始化
    pageNhQY:{
        url:"/jcdk/dk/pageNhQY/",
        method:"get"
    },
    //2地块负责人-保存修改
    saveNh:{
        url:"/jcdk/dk/saveNh/",
        method:"post"
    },
    //3地块负责人-启用、停用
    updateStatus:{
        url:"/jcdk/dk/updateStatus/",
        method:"post"
    },
    //4 地块负责人-验证农户信息唯一性
    checkNhIsExistQY:{
        url:"/jcdk/dk/checkNhIsExistQY/",
        method:"get"
    }
}

/*4.地块信息页面*/
export const dk={
    //1地块信息-初始化
    pageSccsByScjyztId:{
        url:"/jcdk/dk/pageSccsByScjyztId/",
        method:"get"
    },
    //2地块-保存修改
    saveSccs:{
        url:"/jcdk/dk/saveSccs/",
        method:"post"
    },
    //3地块-启用、停用
    updateSccsStatus:{
        url:"/jcdk/dk/updateSccsStatus/",
        method:"post"
    },
    //4地块信息-查找类型
    getAllData:{
        url:"/jcdk/dk/getAllData/",
        method:"get"
    },
    //5地块信息-判断场所编号/场所名称是否存在
    checkSccsIsExist:{
        url:"/jcdk/dk/checkSccsIsExist/",
        method:"get"
    }
}

/*5.往来单位页面*/
export const kh={
    //1往来单位-初始化数据
    pageKhQY:{
        url:"/jcwldw/kh/pageKhQY/",
        method:"get"
    },
    //2往来单位-保存/修改
    saveKh:{
        url:"/jcwldw/kh/saveKh/",
        method:"post"
    },
    //3往来单位-启用、停用
    updateKhStatus:{
        url:"/jcwldw/kh/updateKhStatus/",
        method:"post"
    },
    //4往来单位-获取顺序号
    getPch:{
        url:"/jcwldw/kh/getPch/",
        method:"get"
    },
    //5往来单位-对客户名称进行新增或修改前的唯一性校核.
    checkKhxmIsExistQY:{
        url:"/jcwldw/kh/checkKhxmIsExistQY/",
        method:"get"
    }
}
/*5.店铺维护*/
export const dpwh={
    //店铺维护-初始化数据
    pageNcpShop:{
        url:"/Jcsp/pageNcpShop/",
        method:"get"
    },
    //店铺维护-保存/修改
    saveNcpShop:{
        url:"/Jcsp/saveNcpShop/",
        method:"post"
    },
    //店铺维护-删除
    deleNcpShopById:{
        url:"/Jcsp/deleNcpShopById/",
        method:"post"
    },
    //店铺维护-对客户名称进行新增或修改前的唯一性校核.
    checkNhIsExistQY:{
        url:"/Jcsp/checkNhIsExistQY/",
        method:"get"
    }
}

/*6.打印机信息*/
export const dyj={
    //1保存打印机
    saveDyjXx:{
      url:"/Dyj/saveDyjXx/",
      method:"post"
    },
    //2打印机页面（page）
    pageDyjXx:{
      url:"/Dyj/pageDyjXx/",
      method:"post"
    },
    //3打印机页面（list）
    listDyjXx:{
      url:"/Dyj/listDyjXx/",
      method:"post"
    }
  }
  
  