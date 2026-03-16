import{e as t}from"./iframe-BuJLGa6N.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwQ9PO5l.js";import{Y as s}from"./YAxis-BN83cofH.js";import{R as h}from"./arrayEqualityCheck-CfOAsDPD.js";import{L as A}from"./LineChart-C0YBifoq.js";import{C as f}from"./CartesianGrid-DctVil7m.js";import{X as x}from"./XAxis-DPYriBmx.js";import{L as E}from"./Legend-DgAWWeDp.js";import{L as n}from"./Line-DDBsSeKz.js";import{T as v}from"./Tooltip-BP0M5Jmr.js";import{R as k}from"./RechartsHookInspector-BakXEIZz.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C6pdCV3P.js";import"./Layer-CLRnIkGN.js";import"./resolveDefaultProps-PPT4dvVD.js";import"./Text-OPrfWidj.js";import"./DOMUtils-DdVykUsy.js";import"./Label-DCa5EEbs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BMsw-0Pa.js";import"./zIndexSlice-CtkE_I8o.js";import"./immer-Cs2StgEe.js";import"./types-DMmD0s4W.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DMmH3DTh.js";import"./hooks-Bfg6Hj5B.js";import"./axisSelectors-vZNfkK00.js";import"./d3-scale-C2CClwD1.js";import"./RechartsWrapper-zGeEQO-1.js";import"./index-CNZpMZb7.js";import"./CartesianChart-DcpXVgwl.js";import"./chartDataContext-DXuqrhw-.js";import"./CategoricalChart-DkSrZf16.js";import"./Symbols-BJaoORbT.js";import"./symbol-SMqn5J9_.js";import"./step-8Y20vsos.js";import"./useElementOffset-BrFb8VVi.js";import"./uniqBy-iRT60m2x.js";import"./iteratee-BDAL2q7w.js";import"./ReactUtils-Di8J4KTy.js";import"./ActivePoints-Czt_wSo-.js";import"./Dot-B4FiKnl2.js";import"./RegisterGraphicalItemId-CZEhY4ID.js";import"./ErrorBarContext-DcDtiioO.js";import"./GraphicalItemClipPath-D_CU0iam.js";import"./SetGraphicalItem-DGBCZizG.js";import"./useAnimationId-CMTxjP3y.js";import"./getRadiusAndStrokeWidthFromDot-DYi0rXYC.js";import"./ActiveShapeUtils-CXfOhm2i.js";import"./isPlainObject-Crq8bwtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Cp8-G3K2.js";import"./Trapezoid-3-ecroEI.js";import"./Sector-CuxgId53.js";import"./Curve-D9cP6KBy.js";import"./Cross-C-tDAxe1.js";import"./index-Bq1Ak5OA.js";import"./ChartSizeDimensions-DBM4r-MV.js";import"./OffsetShower-9LIODqLQ.js";import"./PlotAreaShower-BBiCyrXZ.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
