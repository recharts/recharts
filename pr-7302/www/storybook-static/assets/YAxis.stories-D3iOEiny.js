import{e as t}from"./iframe-CB3xDsCu.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-mQ0C3LQl.js";import{R as h}from"./arrayEqualityCheck-BR3R0AIc.js";import{L as A}from"./LineChart-DeIU3Ddh.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-LO_JUYCi.js";import{X as x}from"./XAxis-DYQUx0ZR.js";import{L as E}from"./Legend-B_Fv6KKC.js";import{L as n}from"./Line-B3-O5qK3.js";import{T as v}from"./Tooltip-CYG2Qckr.js";import{R as k}from"./RechartsHookInspector-YR9f7y3a.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DkDylqpL.js";import"./Layer-Ch9gTjDA.js";import"./resolveDefaultProps-D2yjNbgT.js";import"./Text-UtkJ3ap3.js";import"./DOMUtils-D031Yf3A.js";import"./Label-Br8zkPUL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cz6Wxl3N.js";import"./zIndexSlice-BDUpIrxI.js";import"./immer-DVlX7gWW.js";import"./types-DISef9EU.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DTGPDQhB.js";import"./hooks-DFjGEA5J.js";import"./axisSelectors-BD2wGdYf.js";import"./d3-scale-DBjacL5V.js";import"./RechartsWrapper-DzH2iSQ0.js";import"./index-dzLlUSBq.js";import"./CartesianChart-Cn7O9-Sb.js";import"./chartDataContext-BOo6jc00.js";import"./CategoricalChart-D8l_W_kj.js";import"./Symbols-BHAxghFO.js";import"./symbol-B_QpE6oW.js";import"./step-Dz5tlK5n.js";import"./useElementOffset-CyqDBPox.js";import"./uniqBy-C2DdLMF2.js";import"./iteratee-F7SoTddw.js";import"./ReactUtils-VpSEOCqX.js";import"./ActivePoints-BkwIf39h.js";import"./Dot-DjIPoMxO.js";import"./RegisterGraphicalItemId-CB7Ow1C1.js";import"./ErrorBarContext-CBtIL5Hk.js";import"./GraphicalItemClipPath-CS8dxw6f.js";import"./SetGraphicalItem-gnY-9bMd.js";import"./useAnimationId-DK8UFsIQ.js";import"./getRadiusAndStrokeWidthFromDot-BuBjGrUL.js";import"./ActiveShapeUtils-Bccy3ucd.js";import"./isPlainObject-YEY4Yrhn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B5g_Hqxg.js";import"./Trapezoid-C2jtUOqg.js";import"./Sector-CIMNq_ez.js";import"./Curve-BUSUbFqo.js";import"./Cross-CUqHWkxU.js";import"./index-DOjZWx7H.js";import"./ChartSizeDimensions-B9c3BCsk.js";import"./OffsetShower-Cd2a_SDI.js";import"./PlotAreaShower-DozSiwxV.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
