/*编辑*/
<template>
  <el-form
    ref="form"
    :model="form"
    label-width="100px"
    class="form cpwh"
    :rules="rules"
    status-icon
  >
    <div class="form-title f-fs18 f-tac f-mb30 f-mt30">{{form.id?'编辑':'新增'}}摇蜜信息</div>
    <el-form-item label="养殖场所">
      <el-input v-model.trim="this.pcInfo.cdmc" placeholder="请输入" disabled></el-input>
    </el-form-item>
    <el-form-item label="养殖产品">
      <el-input v-model.trim="this.pcInfo.ztncpmc" placeholder="请输入" disabled></el-input>
    </el-form-item>
    <el-form-item label="摇蜜日期" prop="csrq">
      <el-date-picker
        v-model.trim="form.csrq"
        type="date"
        style="width:100%"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
      ></el-date-picker>
    </el-form-item>
    <el-form-item label="摇蜜产品" prop="obString">
      <el-select
        v-model.trim="form.obString"
        placeholder="请选择"
        @change="selectGet"
        style="width:100%"
        :disabled="isSup?true:false"
      >
        <el-option
          v-for="(item,index) in csncpmclb"
          :key="index"
          :label="item.ncpmc"
          :value="item.ncpmc"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="摇蜜量" prop="csl" class="f4">
      <el-input v-model.trim="form.csl" @input="(value)=>{$nextTick(()=>{form.csl= String(value).slice(0,10)})}" placeholder="请输入" type="number">
        <el-select v-model="form.dwzl" slot="append" placeholder="请选择" style="width:100px">
          <el-option label="公斤(kg)" :value="1"></el-option>
          <el-option label="斤" :value="2"></el-option>
          <el-option label="克(g)" :value="3"></el-option>
        </el-select>
      </el-input>
    </el-form-item>
    <el-form-item label="负责人" prop="fzr" class="f4">
      <el-input v-model.trim="form.fzr" placeholder="请输入" :maxlength="32" ></el-input>
    </el-form-item>
    <el-form-item label="图片" prop="imgList">
      <el-upload  
                :http-request="uploadImg"
                :before-upload="beforeAvatarUpload"
        :limit="9"
        action="/httpService/utilmodel/uploadFile"
        :auto-upload="true"
        name="clientFile"
        :file-list="form.imglists"
        :on-preview="handlePictureCardPreview"
        :before-remove="beforeRemove"
       
        multiple
        list-type="picture-card"
      >
        <i class="el-icon-plus"></i>
      </el-upload>备注：最多上传9张，支持jpg，png格式图片
    </el-form-item>
    <el-form-item label="备注">
      <el-input
        type="textarea"
        :autosize="{ minRows: 4, maxRows: 10}"
        v-model.trim="form.bz"
        placeholder="请输入"
		:maxlength="100" 
		show-word-limit
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        round
        type="primary"
        @click="submitForm"
        :disabled="disabled"
      >{{disabled?'提交中':'提 交'}}</el-button>
      <el-button round @click="closeForm(false)">取 消</el-button>
    </el-form-item>
    <!-- 图片预览 -->
    <el-dialog :visible.sync="dialogVisible"  title="图片预览" width="800px" :append-to-body="true">
      <img width="100%" :src="dialogImageUrl" alt>
    </el-dialog>
    <el-dialog
      title="选择出栏产品"
      :append-to-body="true"
      :visible.sync="csncpmcDialogVisable"
      width="800px"
    >
      <sel-ncp style="margin:0 auto;" @selNcp="selNcp" @close="csncpmcDialogVisable=false"></sel-ncp>
    </el-dialog>
  </el-form>
</template>
<script>
import { mapGetters } from "vuex";
import { exec } from "common/tools";
import fetch from "fetch/axios/";
import selTrp from "./selTrp";
import timeFormat from 'common/tools/timeFormat';
export default {
  inject: ["pcInfo"],
  components: {
    selTrp
  },
  data() {
    const commonValidate = {
      required: true,
      message: "必填项",
      trigger: ["blur", "change"]
    };
    return {
      csncpmcDialogVisable: false,
      disabled: false,
      oldncpmc: "",
      dialogVisible: false,
      dialogImageUrl: "",
      jcncpDialogVisable: false,
      csncpmclb: [],
      rules: {
        fzr: commonValidate,
        csrq: commonValidate,
        csl: commonValidate,
		csncpmc: commonValidate,
      }
    };
  },
  props: {
    form: {
      type: Object,
      default: function() {
        return {
          csrq:timeFormat.one(new Date()),
          csncpmcId: "",
          pic: "",
          summary: "",
		  ncpmc: "",
          cls: "",
		  fzr: "",
          csjlId: "",
		  obString: "",
          scjyztId: "",
          zzjlId: "",
          czr: "",
          xtczzd: "",
          imglists: [],
          attaUrl: "",
		  dwzl:1,
        };
      }
    },
    isSup: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      userInfo: "getUserInfo"
    })
  },
  created() {
    this.oldncpmc = this.form.ncpmc;
    this.getCsncpmclb();
  },
  methods: {
    selectGet(value) {
      let selItem = this.csncpmclb.filter(item => {
        return item.ncpmc == value;
      });
      this.form.ncpmc = selItem[0].ztncpId;
      this.form.cls = selItem[0].cls;
      this.form.dw = selItem[0].dw;
    },
    submitForm() {
      this.$refs.form.validate(valid => {
        if (valid) {
          //防止二次提交
          this.disabled = true;
          //新增字段
          let {
		    id,
            csrq,
            csl,
			fzr,
            cssl,
			ncpmc,
            pic,
            summary,
			dwzl,
			obString,
            csjlId,
            csncpmcId,
            attaUrl
          } = this.form;
          //用户参数
          let { scjyztId, userId: czr , userId:cjr} = this.userInfo;
          let params = {
		    id,
            csrq,
            csncpmcId:ncpmc,
            ncpmc,
			csid:this.pcInfo.csmc,
            csl,
			fzr,
			sfsc:1,
			dwzl,
            summary,
            syl: 0,
            scjyztId,
            csjlId,
            zzjlId: this.pcInfo.zzjlId,
            czr: czr,
			cjr:cjr,
            pic: attaUrl,
            csmc:this.pcInfo.cdmc,
            cssl,
			obString,
            zzpc: this.pcInfo.zzpc,
            qydm: this.pcInfo.qydm
          };
          fetch({
            url: "/scgl/ns/saveFmYm/",
            method: "post",
            data: params
          })
            .then(res => {
              this.$message.success("操作成功！");
              this.closeForm(true);
              this.disabled = false;
            })
            .catch(res => {
              this.$message.error(res.errorMess);
              this.disabled = false;
            });
        } else {
          this.$message.error("请按要求填写");
          return false;
        }
      });
    },
    getCsncpmclb() {
      fetch({
        method: "get",
        url: "/jccpwh/cp/listSonZtncp/",
        data: {
          parentDm: this.pcInfo.ncpdm,
          scjyztId: this.userInfo.scjyztId
        }
      }).then(res => {
        this.csncpmclb = res.list;
      });
    },
    closeForm(fresh = false) {
      this.$emit("closeForm", fresh);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
           beforeRemove(file,fileList){
        console.log('删除之前');
        var delIndex = fileList.findIndex(item=>{return item.url===file.url});
        var attaUrl = this.form.attaUrl.split(',');
        attaUrl.splice(delIndex,1);
        this.form.attaUrl=attaUrl.join(',');
        return true;
      },
      beforeAvatarUpload(file){
            const isJPG = file.type==='image/jpeg' || file.type==='image/jpg' ||  file.type==='image/png';
            const isLt3M = file.size / 1024 / 1024 < 3;
            if(!isJPG){
                this.$message.error('请上传图片格式为JPG、JPEG或者JNP！')
            }
            if(!isLt3M){
               this.$message.error('图片大小不能超过3M！')   
            }
             return isJPG && isLt3M;
      },
      //上传图片
      uploadImg(item,callback){
            let formData = new FormData();
            formData.append("clientFile", item.file);
            var query =  {
              url:'/utilmodel/uploadFile/',
              method:'upload',
              data:formData
            }
            fetch(query).then(res=>{
                this.addImg(res);
            })
        }, 
    //上传图片成功
    addImg(response, file) {
      this.form.attaUrl =
        this.form.attaUrl != ""
          ? this.form.attaUrl + "," + response.bean
          : response.bean;
    },
    //类别选择好后，填充到页面
    selNcp(row) {
      this.jcncpDialogVisable = false;
      this.form.jcncpId = row.ncpId;
      this.form.zlmc = row.ncpZlmc;
      this.form.cls = row.cls;
      this.form.ncpEjZlmc = row.ncpEjZlmc;
      this.form.ncpSjmc = row.ncpMc;
    }
  }
};
</script>

<style>
.cpwh .el-upload-list--picture-card .el-upload-list__item {
  width: 100px;
  height: 100px;
}
.cpwh .el-upload--picture-card {
  width: 100px;
  height: 100px;
  line-height: 100px;
}
</style>



