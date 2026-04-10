import{e as t}from"./iframe-BnepZbIT.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-GrlhSCw3.js";import{R as h}from"./arrayEqualityCheck-Bzj1NFbL.js";import{L as A}from"./LineChart-D8FIFBpV.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BWyeFdf4.js";import{X as x}from"./XAxis-SiwesCXl.js";import{L as E}from"./Legend-CzPWnZPj.js";import{L as n}from"./Line-CrpR2_m2.js";import{T as v}from"./Tooltip-e6qES6Dq.js";import{R as k}from"./RechartsHookInspector-C4hunDdt.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DimAd1iY.js";import"./Layer-Ca-NGzhu.js";import"./resolveDefaultProps-CCq0BlxP.js";import"./Text-CPTRxDfj.js";import"./DOMUtils-DlCDOcC9.js";import"./Label-CvQfGABs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CaJTwElI.js";import"./zIndexSlice-C8s-XU9n.js";import"./immer-CMcm_nUx.js";import"./types-Df0IzV2Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CSId2xIn.js";import"./hooks-CP1-TJLt.js";import"./axisSelectors-DQBdr2e5.js";import"./d3-scale-rflYLnZy.js";import"./RechartsWrapper-DvbGdFiP.js";import"./index-BYgM4v9S.js";import"./CartesianChart-90suVU5n.js";import"./chartDataContext-DCbFY6Je.js";import"./CategoricalChart-Dkb_r9k9.js";import"./Symbols-eksBr05G.js";import"./symbol-hzKkaagP.js";import"./step-BFaHnM_e.js";import"./useElementOffset-ChPfnl3W.js";import"./uniqBy-DQbVnFYw.js";import"./iteratee-CMSgm-8W.js";import"./ReactUtils-64sNutUM.js";import"./ActivePoints-KKzFiWPz.js";import"./Dot-CQLqFjtJ.js";import"./RegisterGraphicalItemId-DInnBgXa.js";import"./ErrorBarContext-biD2FyQs.js";import"./GraphicalItemClipPath-BLvis0SJ.js";import"./SetGraphicalItem-Dwsy_PTG.js";import"./useAnimationId-0FE8S7Lc.js";import"./getRadiusAndStrokeWidthFromDot-xaimMp6X.js";import"./ActiveShapeUtils-BrWeXoF9.js";import"./isPlainObject-BxGEMuWM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-QDjYZ4Lh.js";import"./Trapezoid-CWH0SbFy.js";import"./Sector-CD_FNLgY.js";import"./Curve-DKZiYoJj.js";import"./Cross-DqNAQFtm.js";import"./index-D2gJFJUM.js";import"./ChartSizeDimensions-YfbBA8uv.js";import"./OffsetShower-DpIwysro.js";import"./PlotAreaShower-BdzDALPX.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
