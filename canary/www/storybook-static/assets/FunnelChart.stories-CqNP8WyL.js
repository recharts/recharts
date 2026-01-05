import{e}from"./iframe-C75Mon5f.js";import{a as y}from"./ChartProps-h4DKB0dX.js";import{g as v}from"./utils-ePvtT4un.js";import{a as i,F as u}from"./FunnelChart-YmAc5ZdA.js";import{b as E}from"./Page-Cj8EiXz7.js";import{R as K}from"./arrayEqualityCheck-CCinF1xg.js";import{L as C}from"./ReactUtils-D5lwbz2E.js";import{T as h}from"./Tooltip-e2uX3xxr.js";import{R as f}from"./RechartsHookInspector-DeYlN7PD.js";import{L as F}from"./Legend-v-Y19GZ-.js";const D={argTypes:y,component:i},l={render:t=>{const{data:a}=t;return e.createElement(K,{width:"100%",height:200},e.createElement(i,{accessibilityLayer:!0,data:a},e.createElement(u,{dataKey:"value",stroke:"#424242",isAnimationActive:!0,lastShapeType:"rectangle",shape:t.shape,activeShape:t.activeShape},e.createElement(C,{dataKey:"name",fill:"#000",position:"right",stroke:"none"})),e.createElement(h,null),e.createElement(f,null)))},args:{shape:{},activeShape:{fill:"gold",stroke:"purple"},data:[{fill:"#EEEEEE",name:"A",value:1009},{fill:"#E0E0E0",name:"B",value:903},{fill:"#BDBDBD",name:"C",value:756},{fill:"#9E9E9E",name:"D",value:622},{fill:"#757575",name:"E",value:602},{fill:"#424242",name:"F",value:580},{fill:"#424242",name:"F",value:580}]}},r={render:t=>{const[a,g]=e.useState("amt");return e.createElement(e.Fragment,null,e.createElement("form",{style:{display:"flex",flexDirection:"column"},onChange:n=>"value"in n.target&&typeof n.target.value=="string"&&g(n.target.value)},e.createElement("label",{htmlFor:"dataKey-amt",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-amt",name:"dataKey",value:"amt",defaultChecked:a==="amt"}),"dataKey 1"),e.createElement("label",{htmlFor:"dataKey-pv",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-pv",name:"dataKey",value:"pv",defaultChecked:a==="pv"}),"dataKey 2"),e.createElement("label",{htmlFor:"dataKey-empty",style:{display:"flex",flexDirection:"row"}},e.createElement("input",{type:"radio",id:"dataKey-empty",name:"dataKey",value:"hidden",defaultChecked:a==="hidden"}),"Hidden")),e.createElement(i,{...t},e.createElement(F,null),e.createElement(u,{dataKey:a,fill:"orange",fillOpacity:.5,stroke:"blue",strokeDasharray:"3 3",lastShapeType:"rectangle",label:{dataKey:"name",stroke:"none",fill:"black",strokeDasharray:"0 0"}}),e.createElement(h,null),e.createElement(f,null)))},args:{...v(y),data:E,width:360,height:360}};var o,s,d;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: Args) => {
    const {
      data
    } = args;
    return <ResponsiveContainer width="100%" height={200}>
        <FunnelChart accessibilityLayer data={data}>
          <Funnel dataKey="value" stroke="#424242" isAnimationActive lastShapeType="rectangle" shape={args.shape} activeShape={args.activeShape}>
            <LabelList dataKey="name" fill="#000" position="right" stroke="none" />
          </Funnel>
          <Tooltip />
          <RechartsHookInspector />
        </FunnelChart>
      </ResponsiveContainer>;
  },
  args: {
    shape: {},
    activeShape: {
      fill: 'gold',
      stroke: 'purple'
    },
    data: [{
      fill: '#EEEEEE',
      name: 'A',
      value: 1009
    }, {
      fill: '#E0E0E0',
      name: 'B',
      value: 903
    }, {
      fill: '#BDBDBD',
      name: 'C',
      value: 756
    }, {
      fill: '#9E9E9E',
      name: 'D',
      value: 622
    }, {
      fill: '#757575',
      name: 'E',
      value: 602
    }, {
      fill: '#424242',
      name: 'F',
      value: 580
    }, {
      fill: '#424242',
      name: 'F',
      value: 580
    }]
  }
}`,...(d=(s=l.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [dataKey, setDataKey] = React.useState('amt');
    return <>
        <form style={{
        display: 'flex',
        flexDirection: 'column'
      }} onChange={e => 'value' in e.target && typeof e.target.value === 'string' && setDataKey(e.target.value)}>
          <label htmlFor="dataKey-amt" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-amt" name="dataKey" value="amt" defaultChecked={dataKey === 'amt'} />
            dataKey 1
          </label>
          <label htmlFor="dataKey-pv" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-pv" name="dataKey" value="pv" defaultChecked={dataKey === 'pv'} />
            dataKey 2
          </label>
          <label htmlFor="dataKey-empty" style={{
          display: 'flex',
          flexDirection: 'row'
        }}>
            <input type="radio" id="dataKey-empty" name="dataKey" value="hidden" defaultChecked={dataKey === 'hidden'} />
            Hidden
          </label>
        </form>
        <FunnelChart {...args}>
          <Legend />
          <Funnel dataKey={dataKey} fill="orange" fillOpacity={0.5} stroke="blue" strokeDasharray="3 3" lastShapeType="rectangle" label={{
          dataKey: 'name',
          stroke: 'none',
          fill: 'black',
          strokeDasharray: '0 0'
        }} />
          <Tooltip />
          <RechartsHookInspector />
        </FunnelChart>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(CategoricalChartProps),
    data: pageDataWithFillColor,
    width: 360,
    height: 360
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const b=["Simple","WithChangingDataKey"],_=Object.freeze(Object.defineProperty({__proto__:null,Simple:l,WithChangingDataKey:r,__namedExportsOrder:b,default:D},Symbol.toStringTag,{value:"Module"}));export{_ as F,l as S};
