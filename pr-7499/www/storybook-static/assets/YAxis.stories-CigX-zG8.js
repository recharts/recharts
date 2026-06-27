import{R as t}from"./iframe-s6xAG-TK.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CJIerEpJ.js";import{R as h}from"./zIndexSlice-CtX8Pm57.js";import{L as A}from"./LineChart-xgCKS7qA.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CHvX6dO6.js";import{X as f}from"./XAxis-ILbWypkw.js";import{L as E}from"./Legend-Cp_4-LWI.js";import{L as n}from"./Line-CJL0J86Q.js";import{T as v}from"./Tooltip-DNr4Jqfj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BoCVnOHD.js";import"./CartesianAxis-Bzfqb5iI.js";import"./Layer-D5OpM5xs.js";import"./resolveDefaultProps-DFiMRXbi.js";import"./Text-9u_bHJZt.js";import"./DOMUtils-Dzx6jDk6.js";import"./isWellBehavedNumber-DWpsZI7G.js";import"./Label-Dp2fRDxb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbooohNT.js";import"./index-C431joee.js";import"./index-ClUWeLMF.js";import"./types-DdoD64CJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-iMX2N49n.js";import"./immer-BuLmScwe.js";import"./RechartsWrapper-NYzcnM5V.js";import"./index-T8sAqFhz.js";import"./index-BrFiGA_R.js";import"./axisSelectors-w5mwcrs7.js";import"./d3-scale-B4pAi3sm.js";import"./CartesianChart-B3y1BcT9.js";import"./chartDataContext-CYY09pFO.js";import"./CategoricalChart-DLOwP-Jg.js";import"./Symbols-DuEQhp_j.js";import"./symbol-a32WKMED.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CP6qr1Um.js";import"./uniqBy-BFlmJl3I.js";import"./iteratee-Bbn7KLaA.js";import"./Curve-BmhK5pW4.js";import"./step-DcuFANAi.js";import"./AnimatedItems-BLpXLA7r.js";import"./useAnimationId-BfD45VPw.js";import"./ActivePoints-CifW1zG8.js";import"./Dot-uO_lT4NP.js";import"./RegisterGraphicalItemId-irkeH_pD.js";import"./ErrorBarContext-Df3lolWT.js";import"./GraphicalItemClipPath-PteXji-2.js";import"./SetGraphicalItem-BaveM8kS.js";import"./getRadiusAndStrokeWidthFromDot-kUCtaSTN.js";import"./ActiveShapeUtils-BRE298QS.js";import"./Cross-DLf2lczu.js";import"./Rectangle-BvbdU8mA.js";import"./util-Dxo8gN5i.js";import"./Sector-DIf9EEf3.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
