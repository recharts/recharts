import{e as t}from"./iframe-CGwC73OO.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DJqKmGik.js";import{R as h}from"./arrayEqualityCheck-BlziNjUk.js";import{L as A}from"./LineChart-CQ72XzVs.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-B2JXZgjN.js";import{X as x}from"./XAxis-KheqwHPS.js";import{L as E}from"./Legend-Bb9qczM4.js";import{L as n}from"./Line-B0ozFG-e.js";import{T as v}from"./Tooltip-87RqnmLF.js";import{R as k}from"./RechartsHookInspector-BOLymao4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bw03X_Zl.js";import"./Layer-BBc4ESPC.js";import"./resolveDefaultProps-2h9cia6B.js";import"./Text-DyJrB0G7.js";import"./DOMUtils-C1ZRgIwE.js";import"./Label-CE6Oihdn.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAqiJgLq.js";import"./zIndexSlice-Pvig-liy.js";import"./immer-CURee86N.js";import"./types-C_6Vkwi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DBon5NFb.js";import"./hooks-C-sNjqxb.js";import"./axisSelectors-ClgkNKcu.js";import"./d3-scale-BH0-xThR.js";import"./RechartsWrapper-DMSzhStw.js";import"./index-CByG6IuO.js";import"./CartesianChart-ChaOc86m.js";import"./chartDataContext-CmWRMrC9.js";import"./CategoricalChart-DtqXk2xy.js";import"./Symbols-DVb7nCyx.js";import"./symbol-zQKMiMKl.js";import"./step-zq2neHnY.js";import"./useElementOffset-DjtirxfO.js";import"./uniqBy-CKpTCRET.js";import"./iteratee-B30x_xh4.js";import"./ReactUtils-CYVZdurj.js";import"./ActivePoints-BTOrd9Zd.js";import"./Dot-By1SCY7k.js";import"./RegisterGraphicalItemId-yX1pqnM-.js";import"./ErrorBarContext-a8CrbqxK.js";import"./GraphicalItemClipPath-CuaCHgKU.js";import"./SetGraphicalItem-CRoX03qV.js";import"./useAnimationId-B3H-bs7p.js";import"./getRadiusAndStrokeWidthFromDot--GB1IBDa.js";import"./ActiveShapeUtils-BoZw7F6l.js";import"./isPlainObject-CMDmT6Oo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Qmwzuu0_.js";import"./Trapezoid-3CdzbHVF.js";import"./Sector-C4mEqCcR.js";import"./Curve-C4VRfueh.js";import"./Cross-DZTW7vLE.js";import"./index-CF2MM-Q8.js";import"./ChartSizeDimensions-BPnl0leJ.js";import"./OffsetShower-BHX9YNtn.js";import"./PlotAreaShower-CFsnprFU.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
