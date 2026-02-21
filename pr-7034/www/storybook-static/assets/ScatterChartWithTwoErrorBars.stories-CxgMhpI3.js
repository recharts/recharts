import{e as r}from"./iframe-CRTFvrj9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-D-GJsd3X.js";import{C as d}from"./CartesianGrid-Dlfi_HS_.js";import{X as c}from"./XAxis-BSKb_OYU.js";import{Y as y}from"./YAxis-BR4X3yoq.js";import{S as h}from"./Scatter-Bxmg6Oev.js";import{E as e}from"./ErrorBar-3ko6qcQb.js";import{T as u}from"./Tooltip-BeZSxngh.js";import{R as f}from"./RechartsHookInspector-D5fTK36V.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BSniLpj2.js";import"./arrayEqualityCheck-C-72eKdK.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D1q6QfKc.js";import"./immer-C2wqAH-O.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DTIfmw9b.js";import"./hooks-6Wtbcjpq.js";import"./axisSelectors-Da0NuHcy.js";import"./d3-scale-B3vyKD8X.js";import"./zIndexSlice-CeN_cpGA.js";import"./renderedTicksSlice-Clwuxehj.js";import"./CartesianChart-BA-bIZkf.js";import"./chartDataContext-BdW7EA-o.js";import"./CategoricalChart-C4w7U3Tr.js";import"./CartesianAxis-UwfPUOGl.js";import"./Layer-CS75NGqW.js";import"./Text-B5hVsXUE.js";import"./DOMUtils-DFZ-Lmef.js";import"./Label-B8ukM34Q.js";import"./ZIndexLayer-T_Qg2faX.js";import"./types-DqJmRq78.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-FOFjsaAB.js";import"./Curve-cG-fhaEi.js";import"./step-D-1eA3Al.js";import"./tooltipContext-DzcDJNW4.js";import"./Symbols-DQD-u_Ga.js";import"./symbol-CqE7w4As.js";import"./ActiveShapeUtils-Dvtjmakf.js";import"./isPlainObject-DWQ5xGNV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CtzeM3od.js";import"./useAnimationId-D4atK31V.js";import"./Trapezoid-BHEoFJyV.js";import"./Sector-CAdVxu4l.js";import"./RegisterGraphicalItemId-CQsCOMci.js";import"./ErrorBarContext-V9kNDrvg.js";import"./GraphicalItemClipPath-D3uyj9j1.js";import"./SetGraphicalItem-BKYxWNub.js";import"./CSSTransitionAnimate-D7KpsfKJ.js";import"./useElementOffset-DO0yKBop.js";import"./uniqBy-bOCgIGO4.js";import"./iteratee-BwIi7ReL.js";import"./Cross-B5FBqdbb.js";import"./index-Bed0KFZ4.js";import"./ChartSizeDimensions-8pWs_Ibt.js";import"./OffsetShower-BF3aeG8w.js";import"./PlotAreaShower-D8bDGspZ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: Args) => {
    const data = [{
      x: 100,
      y: 200,
      errorY: 30,
      errorX: 30
    }, {
      x: 120,
      y: 100,
      errorY: [500, 30],
      errorX: [200, 30]
    }, {
      x: 170,
      y: 300,
      errorY: [10, 20],
      errorX: 20
    }, {
      x: 140,
      y: 250,
      errorY: 30,
      errorX: 20
    }, {
      x: 150,
      y: 400,
      errorY: [20, 300],
      errorX: 30
    }, {
      x: 110,
      y: 280,
      errorY: 40,
      errorX: 40
    }];
    return <ScatterChart width={400} height={400} margin={{
      top: 20,
      right: 20,
      bottom: 20,
      left: 20
    }} layout={args.layout}>
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" allowDataOverflow={args.allowDataOverflow} />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" allowDataOverflow={args.allowDataOverflow} />
        <Scatter name="A school" data={data} fill="blue">
          {/* This ErrorBar does render, but it does not extend the domain of XAxis unfortunately */}
          <ErrorBar dataKey="errorX" width={2} strokeWidth={3} stroke="green" direction="x" />
          <ErrorBar dataKey="errorY" width={4} strokeWidth={2} stroke="red" direction="y" />
        </Scatter>
        <Tooltip cursor={{
        strokeDasharray: '3 3'
      }} />
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
