import Vue from 'vue'
import { Message, Checkbox, CheckboxGroup, Dialog, MessageBox, Radio, Select, Option, DatePicker, TimePicker, Switch, Progress,Tree} from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
export default function elementUi () {
  Vue.use(Checkbox)
  Vue.use(CheckboxGroup)
  Vue.use(Dialog)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Radio)
  Vue.use(Progress)
  Vue.use(DatePicker)
  Vue.use(TimePicker)
  Vue.use(Switch)
  Vue.use(Tree)
  Vue.prototype.$message = Message
  Vue.prototype.$msgbox = MessageBox
  Vue.component('el-collapse-transition', CollapseTransition)
  Vue.prototype.$confirm = MessageBox.confirm
}
