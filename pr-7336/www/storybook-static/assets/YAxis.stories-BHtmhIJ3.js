import{e as t}from"./iframe-pel8cYCN.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BDsVqKg4.js";import{g as h}from"./arrayEqualityCheck-C_lOmCrI.js";import{L as A}from"./LineChart-Bv9PvkWa.js";import{a as b}from"./Coordinate-CcdTesrj.js";import{C as f}from"./CartesianGrid-D4yy0Jh0.js";import{X as x}from"./XAxis-B599S9Vu.js";import{L as E}from"./Legend-BLh_lLO9.js";import{L as n}from"./Line-BwrWq8g2.js";import{T as v}from"./Tooltip-B_nY5tDG.js";import{R as k}from"./RechartsHookInspector-Dg66sE1s.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CHS0WdpC.js";import"./Layer-CNeytfD9.js";import"./resolveDefaultProps-YrDhwYNk.js";import"./Text-CYIA95SW.js";import"./DOMUtils-ctqdh0oB.js";import"./Label-LVsFLhHv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BvzXDAda.js";import"./zIndexSlice-ymPJrgdD.js";import"./immer-BJQdivTr.js";import"./types-Xh1xXsKt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DOQ_XGYo.js";import"./hooks-D-fRP47Y.js";import"./axisSelectors-Bb4Kms9I.js";import"./d3-scale-CX31JByl.js";import"./RechartsWrapper-CSDFgvQ-.js";import"./index-BtBEICN3.js";import"./CartesianChart-BlzYSjsM.js";import"./chartDataContext-Edg6lPwK.js";import"./CategoricalChart-B61I782z.js";import"./Symbols-DxzOQiX8.js";import"./symbol-D7iNy2hw.js";import"./step-DDfuaYno.js";import"./useElementOffset-DnweuCUb.js";import"./uniqBy-VTopnPt7.js";import"./iteratee-B40Sj4cN.js";import"./ReactUtils-MkRs3AIp.js";import"./ActivePoints-DvhKq6eb.js";import"./Dot-CC60-gqd.js";import"./RegisterGraphicalItemId-DwjBwfbK.js";import"./ErrorBarContext-DJfRhZLU.js";import"./GraphicalItemClipPath-BGEnX0Xy.js";import"./SetGraphicalItem-fB0iJna-.js";import"./useAnimationId-v_N6QXXH.js";import"./getRadiusAndStrokeWidthFromDot-Co4GzyJq.js";import"./ActiveShapeUtils-DNJLSjTo.js";import"./isPlainObject-CZCkl5XT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CwHhsTLl.js";import"./Trapezoid-B96cM-TC.js";import"./Sector-CNApQaS1.js";import"./Curve-DUNlDEm2.js";import"./Cross-C9ZHuiSZ.js";import"./index-Db97PsMK.js";import"./ChartSizeDimensions-KFbSwMPV.js";import"./OffsetShower-D-gSoeld.js";import"./PlotAreaShower-BJPLXysn.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
