import{e as t}from"./iframe-CPMBPDiW.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-Bk6_l7JM.js";import{R as h}from"./arrayEqualityCheck-BuDnjzUV.js";import{L as A}from"./LineChart-B6pBYkzl.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-CfdD4djh.js";import{X as x}from"./XAxis-CjRYfiQ4.js";import{L as E}from"./Legend-RGy81kPY.js";import{L as n}from"./Line-CLQAlcVC.js";import{T as v}from"./Tooltip-DKRIWUon.js";import{R as k}from"./RechartsHookInspector-DxdSXL0K.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-FhEMhfrS.js";import"./Layer-BU-6_6Kb.js";import"./resolveDefaultProps-x-xJryKY.js";import"./Text-3lL52T9r.js";import"./DOMUtils-DD4Lzq5B.js";import"./Label-DxWyVNuC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D5fxgLpy.js";import"./zIndexSlice-Dr6oT2qB.js";import"./immer-vUXr1xyy.js";import"./types-BEArBsqN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BJAXzV77.js";import"./hooks-CZjbEOHJ.js";import"./axisSelectors-DS_oX4Yb.js";import"./d3-scale-DxZ452bO.js";import"./RechartsWrapper-D7X0iTSa.js";import"./index-41kzo7-f.js";import"./CartesianChart-DH2v7K23.js";import"./chartDataContext-CV0cJvXm.js";import"./CategoricalChart-Cbmwan-l.js";import"./Symbols-B62UJk0p.js";import"./symbol-CmO941Mh.js";import"./step-CaCTG7D1.js";import"./useElementOffset-BvdSbmtt.js";import"./uniqBy-BfEtNPHY.js";import"./iteratee-ZHRQA0Hg.js";import"./ReactUtils-CfsI_UnC.js";import"./ActivePoints-wTJjK4Ig.js";import"./Dot-C0mRoZzJ.js";import"./RegisterGraphicalItemId-BB9O0Mjy.js";import"./ErrorBarContext-BfN3k9v-.js";import"./GraphicalItemClipPath-qTNWK1mm.js";import"./SetGraphicalItem-33kMbvyx.js";import"./useAnimationId-B2ugAfTp.js";import"./getRadiusAndStrokeWidthFromDot-DuRb3MXi.js";import"./ActiveShapeUtils-D0GMXNQW.js";import"./isPlainObject-fYFHA2eI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DB5NbiB2.js";import"./Trapezoid-Dxi0_3Ju.js";import"./Sector-BiA4y5xt.js";import"./Curve-JHKdodnE.js";import"./Cross-urRIwobL.js";import"./index-B8_wGQ9D.js";import"./ChartSizeDimensions-DELo0r0O.js";import"./OffsetShower-HzHsLlkW.js";import"./PlotAreaShower-BJ8q8bHN.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
