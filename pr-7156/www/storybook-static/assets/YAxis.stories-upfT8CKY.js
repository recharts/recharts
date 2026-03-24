import{e as t}from"./iframe-CGYv0J_P.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwQ9PO5l.js";import{Y as s}from"./YAxis-CJylCvLo.js";import{R as h}from"./arrayEqualityCheck-BZetwlMO.js";import{L as A}from"./LineChart-Bboyl9Ls.js";import{C as f}from"./CartesianGrid-BGuUvgv_.js";import{X as x}from"./XAxis-BBLpBgR2.js";import{L as E}from"./Legend-Zwt5uMi7.js";import{L as n}from"./Line-R4kryobQ.js";import{T as v}from"./Tooltip-BDmLuqNU.js";import{R as k}from"./RechartsHookInspector-BO40i9ox.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Cu0bgGrg.js";import"./Layer-Gk-yVd_6.js";import"./resolveDefaultProps-CDCzLOgk.js";import"./Text-DbZ5XXQf.js";import"./DOMUtils-CmrzvfdE.js";import"./Label-CLm-GmRY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChWoeJD6.js";import"./zIndexSlice-DscQ2UEO.js";import"./immer-Dq3_p8cl.js";import"./types-DA895aOk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BB6lYCOP.js";import"./hooks-BYcy2WEI.js";import"./axisSelectors-d1jnmTLI.js";import"./d3-scale-CFFcqd30.js";import"./RechartsWrapper-BFBg4H1i.js";import"./index-DCXgcjyB.js";import"./CartesianChart-cuEjJLA1.js";import"./chartDataContext-DAOXspfa.js";import"./CategoricalChart-DJ2ZS2wS.js";import"./Symbols-wA8q_wPX.js";import"./symbol-BMJz3y-1.js";import"./step-WNwAxyX5.js";import"./useElementOffset-Dg7ksT9H.js";import"./uniqBy-C4EJXCv-.js";import"./iteratee-XiLYEPtC.js";import"./ReactUtils-e-fTpbBc.js";import"./ActivePoints-DuCztam3.js";import"./Dot-B2QyCy--.js";import"./RegisterGraphicalItemId-Br_SJebF.js";import"./ErrorBarContext-Cs8TC5a2.js";import"./GraphicalItemClipPath-CH3RqnTG.js";import"./SetGraphicalItem-BJId-qpW.js";import"./useAnimationId-DzTM1tK7.js";import"./getRadiusAndStrokeWidthFromDot-Cp2r1Hxi.js";import"./ActiveShapeUtils-D3fNYChL.js";import"./isPlainObject-CRVi6C8E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-iQ4syW.js";import"./Trapezoid-C3Q-7u80.js";import"./Sector-DG9owPHZ.js";import"./Curve-NAJ5RvpG.js";import"./Cross-DYitQ8uV.js";import"./index-CfugQJAU.js";import"./ChartSizeDimensions-CWNsHALg.js";import"./OffsetShower-n0t9eY-O.js";import"./PlotAreaShower-C2TG4Ybd.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
