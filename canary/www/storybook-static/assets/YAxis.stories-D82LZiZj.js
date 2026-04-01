import{e as t}from"./iframe-BEaYZ8Ke.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-D75udpV7.js";import{R as h}from"./arrayEqualityCheck-BO9iL3J2.js";import{L as A}from"./LineChart-BKECRmdg.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BgVx0tSK.js";import{X as x}from"./XAxis-B2ZFMdFE.js";import{L as E}from"./Legend-D3Gn7qKA.js";import{L as n}from"./Line-DgcXsGuE.js";import{T as v}from"./Tooltip-D6xLsXsd.js";import{R as k}from"./RechartsHookInspector-D2tl7RgO.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CxvGMdSy.js";import"./Layer-BLQnqq8X.js";import"./resolveDefaultProps-w4GCi4u5.js";import"./Text-DmuVr28j.js";import"./DOMUtils-w1bHB0TX.js";import"./Label-CF7kInX4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D6bVHPc-.js";import"./zIndexSlice-DSliDKHU.js";import"./immer-ByOrN6rV.js";import"./types-N9mcSd1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-2DyJU65H.js";import"./hooks-BJ-fa7mf.js";import"./axisSelectors-DCKCETlC.js";import"./d3-scale-BqTC062g.js";import"./RechartsWrapper-BxjX8qFn.js";import"./index-BUXBVCXz.js";import"./CartesianChart-Da_Lqy5J.js";import"./chartDataContext-416DyL2h.js";import"./CategoricalChart-CsR3P7Yd.js";import"./Symbols-BPjsU5gQ.js";import"./symbol-CNAvV-XC.js";import"./step-C3Uiieba.js";import"./useElementOffset-C1b_2gcF.js";import"./uniqBy-2GsMXbhA.js";import"./iteratee-Ctj7yK_B.js";import"./ReactUtils-DilCfUhS.js";import"./ActivePoints-D_4hsixX.js";import"./Dot-CcBnwLaV.js";import"./RegisterGraphicalItemId-BaBHxSFh.js";import"./ErrorBarContext-BjGO5YSj.js";import"./GraphicalItemClipPath-CM553tH1.js";import"./SetGraphicalItem-CxB6zzLj.js";import"./useAnimationId-Ngy9FXMV.js";import"./getRadiusAndStrokeWidthFromDot-Ditulol4.js";import"./ActiveShapeUtils-MXRMbrW9.js";import"./isPlainObject-DJ4nWZqf.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B25XPYc9.js";import"./Trapezoid-q196FHE8.js";import"./Sector-CEm4BkOd.js";import"./Curve-atLapjtD.js";import"./Cross-CwWgzCa3.js";import"./index-D7lPj8lh.js";import"./ChartSizeDimensions-57Mz-9Pr.js";import"./OffsetShower-D0pz8TZy.js";import"./PlotAreaShower-uQsOnF-d.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
