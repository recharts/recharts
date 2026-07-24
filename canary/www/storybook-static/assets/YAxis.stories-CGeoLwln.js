import{R as t}from"./iframe-HFtXtWDU.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DsjAAI5S.js";import{R as h}from"./zIndexSlice-Cqq8ngM8.js";import{L as A}from"./LineChart-Czoiphpc.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DguCJ1oU.js";import{X as f}from"./XAxis-BpsaCJf7.js";import{L as E}from"./Legend-Da62BJrp.js";import{L as n}from"./Line-DZMze_xC.js";import{T as v}from"./Tooltip-DJhs5iYq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BnlRkakD.js";import"./Layer-DWG7b0hl.js";import"./resolveDefaultProps-CtgsYIUG.js";import"./Text-CDRZZb9B.js";import"./DOMUtils-Cr-MkK7_.js";import"./isWellBehavedNumber-DknTQDme.js";import"./Label-BrbXEreR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-0igMx-O2.js";import"./index-CfzmDy1X.js";import"./index-qsTytkhm.js";import"./types-CqGtNHfB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CnA3aPIs.js";import"./throttle-BOHTa9OG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-3eKbtU-n.js";import"./index-CX6-2c79.js";import"./index-DpFOPUyx.js";import"./axisSelectors-DgDHkI2g.js";import"./d3-scale-BFpMyz7A.js";import"./CartesianChart-Chec9F6S.js";import"./chartDataContext-v3QpNePy.js";import"./CategoricalChart-wF3j6ivZ.js";import"./Symbols-TDHQ499_.js";import"./symbol-BjgqCFXe.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DddFNO6b.js";import"./uniqBy-DB3_HqTc.js";import"./iteratee-D-KV-lOb.js";import"./Curve-BR3zS18n.js";import"./step-CxNVACTf.js";import"./AnimatedItems-uy3iUhMQ.js";import"./useAnimationId-CzZVkbxz.js";import"./ActivePoints-Cr6rlWwV.js";import"./Dot-bRuvlybH.js";import"./RegisterGraphicalItemId-CYdn0cBX.js";import"./ErrorBarContext-uHz1jF0z.js";import"./GraphicalItemClipPath-njx9wXrL.js";import"./SetGraphicalItem-7uBPAKUB.js";import"./getRadiusAndStrokeWidthFromDot-Cm-vUEgX.js";import"./ActiveShapeUtils-DYmG8TYR.js";import"./Cross-CDfE27Wk.js";import"./Rectangle-1hle0OgU.js";import"./util-Dxo8gN5i.js";import"./Sector-ByxPjfz7.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Wt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Wt as __namedExportsOrder,St as default};
