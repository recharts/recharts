import{e as t}from"./iframe-BwSUf2T9.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CuVkr_B5.js";import{R as h}from"./arrayEqualityCheck-kNUesU9n.js";import{L as A}from"./LineChart-BaY-xW4G.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-TC7LM2zJ.js";import{X as x}from"./XAxis-DMsA7lKM.js";import{L as E}from"./Legend-C04w1Ai2.js";import{L as n}from"./Line-BN5F3gve.js";import{T as v}from"./Tooltip-D3_-4PHv.js";import{R as k}from"./RechartsHookInspector-DKqzdAWN.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D9SaV3-s.js";import"./Layer-CG8DX7G3.js";import"./resolveDefaultProps-CvrFLXNt.js";import"./Text-BIBt_YS0.js";import"./DOMUtils-DuReS6JS.js";import"./Label-cBW6O7Up.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bv5glbFY.js";import"./zIndexSlice-CtGAVWci.js";import"./immer-7Mb6ATLS.js";import"./types-CNlhQ7_N.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BDQYkSRg.js";import"./hooks-DWJz6m6D.js";import"./axisSelectors-BxFZbnk8.js";import"./d3-scale-4uUuwoJk.js";import"./RechartsWrapper-4BCl0_T5.js";import"./index-DweiLrJJ.js";import"./CartesianChart-Bob7JQC-.js";import"./chartDataContext-DGesBm7c.js";import"./CategoricalChart-DQIJaSSS.js";import"./Symbols-CCCMBfqC.js";import"./symbol-Cn5r8HhL.js";import"./step-CwM1BVfC.js";import"./useElementOffset-CdLeMivj.js";import"./uniqBy-c5b7uoEj.js";import"./iteratee-2sw6E18I.js";import"./ReactUtils-BlFNJVa6.js";import"./ActivePoints-dru_eoBO.js";import"./Dot-CW3ALvSp.js";import"./RegisterGraphicalItemId-fD1_o_b6.js";import"./ErrorBarContext-BaQDv8aw.js";import"./GraphicalItemClipPath-bwNzittR.js";import"./SetGraphicalItem-DlbF6pEY.js";import"./useAnimationId-DY4wSWRx.js";import"./getRadiusAndStrokeWidthFromDot-DGBZLmVX.js";import"./ActiveShapeUtils-N1muSzDi.js";import"./isPlainObject-BZM5eFQe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CW7YI0Bu.js";import"./Trapezoid-BeLgkWe2.js";import"./Sector-D_JRIQS4.js";import"./Curve-DXAcp3xR.js";import"./Cross-VrlCV05T.js";import"./index-D71go6ze.js";import"./ChartSizeDimensions-DuDQVVyz.js";import"./OffsetShower-3pww61PI.js";import"./PlotAreaShower-CkcQ7s4a.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
