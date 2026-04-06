import{e as t}from"./iframe-1sJLl6DZ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-70kmgyRU.js";import{R as h}from"./arrayEqualityCheck-CBQMjkzv.js";import{L as A}from"./LineChart-C23IRS3c.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-CKBoXX0H.js";import{X as x}from"./XAxis-BKluPuIm.js";import{L as E}from"./Legend-8WJWCCAH.js";import{L as n}from"./Line-Cr1_NgX_.js";import{T as v}from"./Tooltip-DTwCgrPZ.js";import{R as k}from"./RechartsHookInspector-FiK4LEfR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DRKzcyAj.js";import"./Layer-gI7ebry7.js";import"./resolveDefaultProps-BwudvEcy.js";import"./Text-D1w4IOeM.js";import"./DOMUtils-Cz4f8MMH.js";import"./Label-B09ck5aR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D-ka0Tcp.js";import"./zIndexSlice-DewuM9Kl.js";import"./immer-D3lmb_Hz.js";import"./types-OZuhW1zj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B18XtuK2.js";import"./hooks-BSV0CDFu.js";import"./axisSelectors-DfOHronC.js";import"./d3-scale-UoHoc1Us.js";import"./RechartsWrapper-BarrelpQ.js";import"./index-BefZ4p5Z.js";import"./CartesianChart-DajRV7bT.js";import"./chartDataContext-BDPauSBm.js";import"./CategoricalChart-Bp51RrNo.js";import"./Symbols-Bj_BiyXA.js";import"./symbol-Bipgyq1s.js";import"./step-CdTAn4vV.js";import"./useElementOffset-Dt07PlNN.js";import"./uniqBy-Ccn8DO8r.js";import"./iteratee-CoR2izNf.js";import"./ReactUtils-E47kjf1a.js";import"./ActivePoints-7h-OJP_5.js";import"./Dot-CHPbrrnb.js";import"./RegisterGraphicalItemId-B5rT-TGw.js";import"./ErrorBarContext-Db0NPWQr.js";import"./GraphicalItemClipPath-CGdaFH3i.js";import"./SetGraphicalItem-BDCPoYU4.js";import"./useAnimationId-BG884krZ.js";import"./getRadiusAndStrokeWidthFromDot-B2FefomC.js";import"./ActiveShapeUtils-Cjl2bV4c.js";import"./isPlainObject-Cn3itabH.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CPIg9-tb.js";import"./Trapezoid-rVOglQPc.js";import"./Sector-CjSRrVkn.js";import"./Curve-D1t5c_n4.js";import"./Cross-BlMyO2X1.js";import"./index-CQyn9y4S.js";import"./ChartSizeDimensions-D07aYOSB.js";import"./OffsetShower-CPwA5xGr.js";import"./PlotAreaShower-7dIAXo4S.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
