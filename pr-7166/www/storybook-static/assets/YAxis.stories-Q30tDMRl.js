import{e as t}from"./iframe-BA0Mk_bm.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwQ9PO5l.js";import{Y as s}from"./YAxis-BeQUgSYX.js";import{R as h}from"./arrayEqualityCheck-BXIKBtlL.js";import{L as A}from"./LineChart-aezeEntV.js";import{C as f}from"./CartesianGrid-BFzdfSIZ.js";import{X as x}from"./XAxis-BJCrLdXA.js";import{L as E}from"./Legend-B135trhz.js";import{L as n}from"./Line-339lVEiU.js";import{T as v}from"./Tooltip-D23tEr-u.js";import{R as k}from"./RechartsHookInspector-07Cffhze.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BT4UVk71.js";import"./Layer-UodA2S_o.js";import"./resolveDefaultProps-B36LrC6B.js";import"./Text-CQNk2n0w.js";import"./DOMUtils-dYc2sDor.js";import"./Label-BRfB6AgB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-7XpdSr6g.js";import"./zIndexSlice-IJtIz665.js";import"./immer-CuXxKPwW.js";import"./types-bktBoSaY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-k5mZM9in.js";import"./hooks-TaUW4PzE.js";import"./axisSelectors-BPwVyIe5.js";import"./d3-scale-C-j_j56q.js";import"./RechartsWrapper-BFZ1uel6.js";import"./index-DOFwstvs.js";import"./CartesianChart-ojIzik51.js";import"./chartDataContext-BS06iSAA.js";import"./CategoricalChart-Dl2FpaUQ.js";import"./Symbols-BlFKSVPh.js";import"./symbol-B4YfvXWL.js";import"./step-BTgjudL3.js";import"./useElementOffset-BK5XlP36.js";import"./uniqBy-Dh57tVx5.js";import"./iteratee-BxNTpPTk.js";import"./ReactUtils-DsC8Xpl6.js";import"./ActivePoints-Dhry5tye.js";import"./Dot-D5MxPf2e.js";import"./RegisterGraphicalItemId-B9TRMD4g.js";import"./ErrorBarContext-qCzTcwLw.js";import"./GraphicalItemClipPath-D9S218iW.js";import"./SetGraphicalItem-pHlPp9Gw.js";import"./useAnimationId-Del0ERlM.js";import"./getRadiusAndStrokeWidthFromDot-byqxM05I.js";import"./ActiveShapeUtils-jRacbU19.js";import"./isPlainObject-DqKcpOXv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRPXSI0S.js";import"./Trapezoid-CwhddTPc.js";import"./Sector-BUd4hzuV.js";import"./Curve-DYn67gsG.js";import"./Cross-DH83-iH7.js";import"./index-BMjkAMKv.js";import"./ChartSizeDimensions-XLtPrUd2.js";import"./OffsetShower-DE5bCLFy.js";import"./PlotAreaShower-noNIcByU.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
