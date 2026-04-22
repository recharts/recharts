import{e as t}from"./iframe-ARz8mg4k.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-nFfmrEBY.js";import{R as h}from"./arrayEqualityCheck-DrcNi_LJ.js";import{L as A}from"./LineChart-FVMsIbCT.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-SDIgipzt.js";import{X as x}from"./XAxis-BTtzk9-i.js";import{L as E}from"./Legend-B9KXuqvN.js";import{L as n}from"./Line-DEIZCqut.js";import{T as v}from"./Tooltip-CzxJu9zc.js";import{R as k}from"./RechartsHookInspector-BQqyZpBz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BXpWNIc5.js";import"./Layer-DVzuE_pH.js";import"./resolveDefaultProps-B-6s3uHj.js";import"./Text-D-6uYGdc.js";import"./DOMUtils-CE-5408s.js";import"./Label-Cu7mDpGK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C2oPn4PG.js";import"./zIndexSlice-DS03Ah9k.js";import"./immer-DTctj60x.js";import"./types-DqkCHGa8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CVTh0NIO.js";import"./hooks-BYzsfUc2.js";import"./axisSelectors-BVUGHvar.js";import"./d3-scale-C0EL32h-.js";import"./RechartsWrapper-Blzvisg2.js";import"./index-rdZdQMAv.js";import"./CartesianChart-BUThqtKP.js";import"./chartDataContext-DOtajESI.js";import"./CategoricalChart-B_WLpA_O.js";import"./Symbols-DEV19KB2.js";import"./symbol-DfbaKguC.js";import"./step-CP_r1PA8.js";import"./useElementOffset-CSKRZ4dE.js";import"./uniqBy-ASh7y_L6.js";import"./iteratee-BNnjrYcR.js";import"./ReactUtils-hXOLhjEf.js";import"./ActivePoints-DPEPJ12U.js";import"./Dot-D4Exawvu.js";import"./RegisterGraphicalItemId-BXvuLG6J.js";import"./ErrorBarContext-DDh6r-dJ.js";import"./GraphicalItemClipPath-Bz4PQaQE.js";import"./SetGraphicalItem-CxI49ViB.js";import"./useAnimationId-C0fVDb8C.js";import"./getRadiusAndStrokeWidthFromDot-CsRHkFbH.js";import"./ActiveShapeUtils-wYDV2nzn.js";import"./isPlainObject-B1moSef3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle--sGlWkza.js";import"./Trapezoid-Cyk80hbt.js";import"./Sector-DhlBySFK.js";import"./Curve-BzlOSzH0.js";import"./Cross-2wRLy28I.js";import"./index-L5czeD9H.js";import"./ChartSizeDimensions-CD-DU66p.js";import"./OffsetShower-IkmwAKSt.js";import"./PlotAreaShower-atAkjEbW.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
