import{e as t}from"./iframe-CNlB-yu6.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BWbQlW4z.js";import{g as h}from"./arrayEqualityCheck-lQwJ1fam.js";import{L as A}from"./LineChart-BM73Jrry.js";import{a as b}from"./Coordinate-CcdTesrj.js";import{C as f}from"./CartesianGrid-D6SIWwVp.js";import{X as x}from"./XAxis-BuwdDhSN.js";import{L as E}from"./Legend-CJ8D0E-I.js";import{L as n}from"./Line-CD6wlHNc.js";import{T as v}from"./Tooltip-3bHO_aFr.js";import{R as k}from"./RechartsHookInspector-D5_K6jhD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Ci2q_-V4.js";import"./Layer-DZ6C1Fsa.js";import"./resolveDefaultProps-uksPlQVK.js";import"./Text-BkgbSJBB.js";import"./DOMUtils--5Ctvvni.js";import"./Label-Bi7SkSuM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBrFOYBh.js";import"./zIndexSlice-BueUxKyz.js";import"./immer-awn-juYO.js";import"./types-CPecuUPI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BhtQt-EH.js";import"./hooks-CzETKye0.js";import"./axisSelectors-Sb3f1ocW.js";import"./d3-scale-DgLwc5xh.js";import"./RechartsWrapper-BAvxe-5M.js";import"./index-FVVlmF5D.js";import"./CartesianChart-BAbFLAD3.js";import"./chartDataContext-B8Bgp5-9.js";import"./CategoricalChart-CCKvkIcs.js";import"./Symbols-C5zVtj1R.js";import"./symbol-DsMOupFF.js";import"./step-D1tlFFQW.js";import"./useElementOffset-Dg1zYIZB.js";import"./uniqBy-CQC1nGrz.js";import"./iteratee-D3JKVA7C.js";import"./ReactUtils-CZXZiRZU.js";import"./ActivePoints-BJcxAugH.js";import"./Dot-Be-ydJG6.js";import"./RegisterGraphicalItemId-BYNQWvmg.js";import"./ErrorBarContext-B0g5HTrn.js";import"./GraphicalItemClipPath-D754deXs.js";import"./SetGraphicalItem-DVSS-M3K.js";import"./useAnimationId-PuhsBKnu.js";import"./getRadiusAndStrokeWidthFromDot-YVqudBJv.js";import"./ActiveShapeUtils-BIq2I243.js";import"./isPlainObject-BpzaTaPh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B8_swSm0.js";import"./Trapezoid-C-zzOAzy.js";import"./Sector-LS-_W5nP.js";import"./Curve-tmuRXssi.js";import"./Cross-C-UEQCit.js";import"./index-DkFAXYsf.js";import"./ChartSizeDimensions-CofMKbAb.js";import"./OffsetShower-C20eLi2f.js";import"./PlotAreaShower-peVTKEtW.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
