export function getForm (formId) {
  const form = document.getElementById(formId)
  var arr = {}
  for (var i = 0; i < form.elements.length; i++) {
    var feled = form.elements[i]
    switch (feled.type) {
      case undefined:
      case 'button':
      case 'file':
      case 'reset':
      case 'submit':
        break
      case 'checkbox':
      case 'radio':
        break
      default:
        if (feled.name !== '') {
          if (arr[feled.name]) {
            arr[feled.name] = arr[feled.name] + ',' + feled.value
          } else {
            arr[feled.name] = feled.value
          }
        }
    }
  }
  return arr
}
function zero(s) {
  return s < 10 ? '0' + s: s;
}
export function dateFormat (obj) {
  if (obj.s_time !== '') {
    let start = new Date(obj.s_time)
    start = start.getFullYear() + '-' + zero(start.getMonth() + 1) + '-'+ zero(start.getDate())
    obj.s_time = start
  }
  if (obj.e_time !== '') {
    let end = new Date(obj.e_time)
    end = end.getFullYear() + '-' + zero(end.getMonth() + 1) + '-'+ zero(end.getDate())
    obj.e_time = `${end}`/* 23:59:59*/
  }
  return obj
}
export function webListFormat(webAry) {
  let newWebList = [];
  webAry.forEach((item,i) => {
    item.id = item.id.toString();
    newWebList.push({
      id:item.id,
      name:item.name
    })
  });
  return newWebList;
}
// type:image 图片类型，excel:excel文件类型，other:网站其他信息类型,report:上传报告类型
export function getFileType (file, type) {
  let fileArr = file.split('.')
  let index = fileArr.length - 1
  let fileType = fileArr[index]
  let isType = false
  let imageArr = ['jpg', 'png', 'gif', 'jpeg']
  let excelArr = ['xls', 'xlsx']
  let reportArr = ['doc', 'docx', 'pdf']
  let otherArr = ['gif', 'xls', 'xlsx', 'jpeg', 'jpg', 'png', 'doc', 'gz', 'docx', 'pdf', 'zip', 'rar', 'txt']
  let apkArr = ['apk']
  switch (type) {
    case 'image':
      isType = imageArr.indexOf(fileType)
      break
    case 'excel':
      isType = excelArr.indexOf(fileType)
      break
    case 'report':
      isType = reportArr.indexOf(fileType)
      break
    case 'other':
      isType = otherArr.indexOf(fileType)
      break
    case 'apk':
      isType = apkArr.indexOf(fileType)
      break
  }
  return isType >= 0
}
