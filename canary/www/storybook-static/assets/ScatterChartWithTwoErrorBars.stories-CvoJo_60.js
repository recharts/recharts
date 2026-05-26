import{e as r}from"./iframe-C389UKKQ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-Bs7gUNmU.js";import{C as d}from"./CartesianGrid-CruiBcA5.js";import{X as c}from"./XAxis-CkTpgH_L.js";import{Y as y}from"./YAxis-DdPwtx1e.js";import{S as h}from"./Scatter-DL80GJS-.js";import{E as e}from"./ErrorBar-Dw68ahKX.js";import{T as u}from"./Tooltip-TOls3Rtg.js";import{R as f}from"./RechartsHookInspector-CxbWCB6n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-De-O4PZ_.js";import"./arrayEqualityCheck-Cu2SMg-k.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2PDdAmjP.js";import"./immer-4pDlWF5t.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CDhhJ3He.js";import"./hooks-yBoCoA8O.js";import"./axisSelectors-B2s8T9Mh.js";import"./d3-scale-CLP74tcR.js";import"./zIndexSlice-DHdgWlAr.js";import"./renderedTicksSlice-BUt1aBWJ.js";import"./CartesianChart-3kGQQmyR.js";import"./chartDataContext-UATbZCFS.js";import"./CategoricalChart-C8H-MuO4.js";import"./CartesianAxis-BfjJ9MKk.js";import"./Layer-BRJkvvA0.js";import"./Text-CdmDvBPW.js";import"./DOMUtils-CjAbMbXQ.js";import"./Label-BsU6QA-m.js";import"./ZIndexLayer-OX2yCAej.js";import"./types-9ii6Ug_u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B3LU80BF.js";import"./Curve-DBcCTjlE.js";import"./step-DbNUII7N.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BNGmx6r5.js";import"./Symbols-DhEDlNLq.js";import"./symbol-B93tdxSz.js";import"./ActiveShapeUtils-FSjQNWDr.js";import"./RegisterGraphicalItemId-e2Xsds3X.js";import"./ErrorBarContext-BnMue-Vz.js";import"./GraphicalItemClipPath-CCvWImiO.js";import"./SetGraphicalItem-DcN0Hr85.js";import"./useAnimationId-CxUXlcSZ.js";import"./CSSTransitionAnimate-xadkyVsC.js";import"./useElementOffset-6UXXDY4R.js";import"./uniqBy-CsNwgfvM.js";import"./iteratee-DHpBDbpq.js";import"./Cross-C6FDWmVX.js";import"./Rectangle-Bdl90qEj.js";import"./Sector-DFxGAsB6.js";import"./index-BR3VF3oH.js";import"./ChartSizeDimensions-BBcqsgSH.js";import"./OffsetShower-CIf7NCdz.js";import"./PlotAreaShower-DabrICzc.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
