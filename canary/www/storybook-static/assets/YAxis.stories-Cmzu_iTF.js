import{R as t}from"./iframe-CxG2PZXj.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B1kX2SHx.js";import{R as h}from"./zIndexSlice-DAD_xoRY.js";import{L as A}from"./LineChart-D-jbm5MF.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Dr3fExMw.js";import{X as f}from"./XAxis-B4ycL0c8.js";import{L as E}from"./Legend-BAPAMVGJ.js";import{L as n}from"./Line-_o8LGB_p.js";import{T as v}from"./Tooltip-D4E4fjDv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis--mae7NqH.js";import"./Layer-Cge6P4R-.js";import"./resolveDefaultProps-DUaFgx3m.js";import"./Text-Cndr_sMa.js";import"./DOMUtils-D8hCt3_g.js";import"./isWellBehavedNumber-8T9tdyF1.js";import"./Label-Z4HB-UJ_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kEwpMnQu.js";import"./index-DToZBGKP.js";import"./index-DiKZrp18.js";import"./types-Da-j7B5o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DK3Qh-AH.js";import"./throttle-BLzUd2wF.js";import"./RechartsWrapper-B0t_sSZG.js";import"./index-5B0X8Ccq.js";import"./index-DK4BYQS1.js";import"./axisSelectors-BOLkCBrq.js";import"./d3-scale-LDX-W-e5.js";import"./CartesianChart-DqtDQP9t.js";import"./chartDataContext-Cw7l7MNk.js";import"./CategoricalChart-Dozh9-kX.js";import"./Symbols-BwKJCYen.js";import"./symbol-B-j-jSQL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DpY2ID8s.js";import"./uniqBy-BHBdLEDm.js";import"./iteratee-DVQ7CCFT.js";import"./Curve-e0q54Fup.js";import"./step-wD8k8EBt.js";import"./AnimatedItems-DqWCyLkw.js";import"./useAnimationId-D_YXQiTc.js";import"./ActivePoints-Dtvrk-n_.js";import"./Dot-B9yiNv-3.js";import"./RegisterGraphicalItemId-Cn9-4_hp.js";import"./ErrorBarContext-DRFeJFbi.js";import"./GraphicalItemClipPath-m4xLKPFC.js";import"./SetGraphicalItem-C-4LQBhg.js";import"./getRadiusAndStrokeWidthFromDot-3b51JfXm.js";import"./ActiveShapeUtils-CVhA8l6O.js";import"./Cross-DqS9wKdN.js";import"./Rectangle-Dg43H9ES.js";import"./util-Dxo8gN5i.js";import"./Sector-CtOvhzVo.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
