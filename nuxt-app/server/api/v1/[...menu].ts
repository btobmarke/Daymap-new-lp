import { createRouter, defineEventHandler, useBase, readBody } from 'h3'

const menus = {
      '1':{
        name:'ギョーザ',        
      },
      '2':{
        name:'肉と卵の炒り付け',
      },
      '3':{
        name:'カニ玉',
      },
      '4':{
        name:'麻婆豆腐',
      },
    }

const router = createRouter()

router.get('/allMenus',defineEventHandler(()=>{
  return Object.entries(menus).map(([key,data])=>({...data,id:key}))
}))


export default useBase('/api/v1/bom', router.handler);

