import{e as t}from"./iframe-DchjWIcT.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DuKGJBLI.js";import{R as h}from"./arrayEqualityCheck-QCkrs1PG.js";import{L as A}from"./LineChart-Bb9tqB-a.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-D1l-HRKy.js";import{X as x}from"./XAxis-D4P_mYvM.js";import{L as E}from"./Legend-C0EOX5Tx.js";import{L as n}from"./Line-C66uK_WI.js";import{T as v}from"./Tooltip-Q3HLvMSh.js";import{R as k}from"./RechartsHookInspector-CPRA6xJz.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DSoy_rG_.js";import"./Layer-BGlDxeZH.js";import"./resolveDefaultProps-SMaOT1cA.js";import"./Text-BMGBMw2v.js";import"./DOMUtils-BQHfItYf.js";import"./Label-DmoQv3Ji.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D4usu0YU.js";import"./zIndexSlice-B4fo6Fp2.js";import"./immer-DLCBpJSm.js";import"./types-pHat4itB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-ARMD3d3P.js";import"./hooks-0MUNxS-P.js";import"./axisSelectors-Cs62S3eJ.js";import"./d3-scale-Dz9swnGz.js";import"./RechartsWrapper-B6NPWdWo.js";import"./index-Brnv01PQ.js";import"./CartesianChart-9IsHXkda.js";import"./chartDataContext-CtCLKmwO.js";import"./CategoricalChart-Cx0EsJSw.js";import"./Symbols-BflYIgaG.js";import"./symbol-CXv5i0x2.js";import"./step-DoaVUl3G.js";import"./useElementOffset-C6-L7OPB.js";import"./uniqBy-DidLvKGu.js";import"./iteratee-CVHZomq6.js";import"./ReactUtils-CJlztPJN.js";import"./ActivePoints-BD_uaCkW.js";import"./Dot-DmVbifMK.js";import"./RegisterGraphicalItemId-BNrN6AWA.js";import"./ErrorBarContext-DeijJDUH.js";import"./GraphicalItemClipPath-BfbIuSDD.js";import"./SetGraphicalItem-CNHi9Fw6.js";import"./useAnimationId-D5Nwowfc.js";import"./getRadiusAndStrokeWidthFromDot-rusUR86Z.js";import"./ActiveShapeUtils-dHK-lCgP.js";import"./isPlainObject-BctI-URS.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsEwa7FZ.js";import"./Trapezoid-BNsb85N7.js";import"./Sector-lrv0bu3P.js";import"./Curve-B-giixFy.js";import"./Cross-BIKoc1dA.js";import"./index-DNOa6QVy.js";import"./ChartSizeDimensions-CVsXW5Vd.js";import"./OffsetShower-35EhUoAr.js";import"./PlotAreaShower-CHLX1rVB.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
