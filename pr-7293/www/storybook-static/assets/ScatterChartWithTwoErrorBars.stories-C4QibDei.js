import{e as r}from"./iframe-CPMBPDiW.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BR3d3y95.js";import{C as d}from"./CartesianGrid-CfdD4djh.js";import{X as c}from"./XAxis-CjRYfiQ4.js";import{Y as y}from"./YAxis-Bk6_l7JM.js";import{S as h}from"./Scatter-CYmHEWNm.js";import{E as e}from"./ErrorBar-DUqr7N3T.js";import{T as u}from"./Tooltip-DKRIWUon.js";import{R as f}from"./RechartsHookInspector-DxdSXL0K.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7X0iTSa.js";import"./arrayEqualityCheck-BuDnjzUV.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-x-xJryKY.js";import"./immer-vUXr1xyy.js";import"./PolarUtils-CTnnDHZv.js";import"./index-41kzo7-f.js";import"./hooks-CZjbEOHJ.js";import"./axisSelectors-DS_oX4Yb.js";import"./d3-scale-DxZ452bO.js";import"./zIndexSlice-Dr6oT2qB.js";import"./renderedTicksSlice-BJAXzV77.js";import"./CartesianChart-DH2v7K23.js";import"./chartDataContext-CV0cJvXm.js";import"./CategoricalChart-Cbmwan-l.js";import"./CartesianAxis-FhEMhfrS.js";import"./Layer-BU-6_6Kb.js";import"./Text-3lL52T9r.js";import"./DOMUtils-DD4Lzq5B.js";import"./Label-DxWyVNuC.js";import"./ZIndexLayer-D5fxgLpy.js";import"./types-BEArBsqN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CfsI_UnC.js";import"./Curve-JHKdodnE.js";import"./step-CaCTG7D1.js";import"./tooltipContext-Cyt7m1Ns.js";import"./Symbols-B62UJk0p.js";import"./symbol-CmO941Mh.js";import"./ActiveShapeUtils-D0GMXNQW.js";import"./isPlainObject-fYFHA2eI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DB5NbiB2.js";import"./useAnimationId-B2ugAfTp.js";import"./Trapezoid-Dxi0_3Ju.js";import"./Sector-BiA4y5xt.js";import"./RegisterGraphicalItemId-BB9O0Mjy.js";import"./ErrorBarContext-BfN3k9v-.js";import"./GraphicalItemClipPath-qTNWK1mm.js";import"./SetGraphicalItem-33kMbvyx.js";import"./CSSTransitionAnimate-Ycf9Vo4S.js";import"./useElementOffset-BvdSbmtt.js";import"./uniqBy-BfEtNPHY.js";import"./iteratee-ZHRQA0Hg.js";import"./Cross-urRIwobL.js";import"./index-B8_wGQ9D.js";import"./ChartSizeDimensions-DELo0r0O.js";import"./OffsetShower-HzHsLlkW.js";import"./PlotAreaShower-BJ8q8bHN.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
