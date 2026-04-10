import{e as r}from"./iframe-DOn8u-oa.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-D5gvfFSQ.js";import{C as d}from"./CartesianGrid-Cc9CWBSh.js";import{X as c}from"./XAxis-CWQtfYm8.js";import{Y as y}from"./YAxis-B0Wqs0qU.js";import{S as h}from"./Scatter-rr4n2T-E.js";import{E as e}from"./ErrorBar-wePVsRuo.js";import{T as u}from"./Tooltip-DCuj55Fj.js";import{R as f}from"./RechartsHookInspector-_EcWBN5R.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Beeq_QLd.js";import"./arrayEqualityCheck-DYxn46f5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dy27g2E0.js";import"./immer-Bn8Wu2FH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-TviLRVzQ.js";import"./hooks-DyTxkSEO.js";import"./axisSelectors-RYA-f3bs.js";import"./d3-scale-CBg01hSj.js";import"./zIndexSlice-B2AKnG3y.js";import"./renderedTicksSlice-DoBNzF3G.js";import"./CartesianChart-BOVmLEcH.js";import"./chartDataContext-dTDP7YNY.js";import"./CategoricalChart-Dpd8P6f3.js";import"./CartesianAxis-BlpnuS68.js";import"./Layer-05H6paB_.js";import"./Text-BwE_mk8T.js";import"./DOMUtils-CpIY6Kx5.js";import"./Label-BcScPf1_.js";import"./ZIndexLayer-y8FotD-G.js";import"./types-CESDZ_aX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-PhcFEJ80.js";import"./Curve-woVlpOcO.js";import"./step-Cq5Zx23d.js";import"./tooltipContext-X7ANI5U7.js";import"./Symbols-nNNN-42G.js";import"./symbol-DVcflbh7.js";import"./ActiveShapeUtils-heWrq4Qu.js";import"./isPlainObject-c8PgY5v_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DPJuAdjj.js";import"./useAnimationId-DEVWAil3.js";import"./Trapezoid-Bqkv6n3S.js";import"./Sector-BDm--b9P.js";import"./RegisterGraphicalItemId-DTK05cjv.js";import"./ErrorBarContext-CXzlZi78.js";import"./GraphicalItemClipPath-BB5-oLdp.js";import"./SetGraphicalItem-BPar8aEt.js";import"./CSSTransitionAnimate-DOqQ1-9V.js";import"./useElementOffset-dL6NMTXG.js";import"./uniqBy-7x81275m.js";import"./iteratee-4veUQO7B.js";import"./Cross-BPpZB_TY.js";import"./index-DQsTRZku.js";import"./ChartSizeDimensions-C0-3hV0F.js";import"./OffsetShower-CB8ZCxWG.js";import"./PlotAreaShower-B8Dg5b0X.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
