import{e as r}from"./iframe-DJXOgax2.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-BmTEwK2h.js";import{C as d}from"./CartesianGrid-BAYEYSZr.js";import{X as c}from"./XAxis-9kxG52aU.js";import{Y as y}from"./YAxis-DRv5Ieqa.js";import{S as h}from"./Scatter-DBEjXsfq.js";import{E as e}from"./ErrorBar-BptBZMwY.js";import{T as u}from"./Tooltip-D8qot_hH.js";import{R as f}from"./RechartsHookInspector-s82vtdQF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BaSgqIB_.js";import"./arrayEqualityCheck-k7PS2xak.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DPbWDBA5.js";import"./immer-2a_xTrdV.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BNAJMwXV.js";import"./hooks-CZ0TOrWM.js";import"./axisSelectors-Dr5KL0ZI.js";import"./d3-scale-DuWCsZHZ.js";import"./zIndexSlice-B--1gOPM.js";import"./renderedTicksSlice-Bl5jCaCZ.js";import"./CartesianChart-BFo4vKxS.js";import"./chartDataContext-kJxPcL-i.js";import"./CategoricalChart-Bx8_lMCZ.js";import"./CartesianAxis-BuS9D4Ek.js";import"./Layer-PAWXt2PX.js";import"./Text-npnYAvG4.js";import"./DOMUtils-i2w-QAqd.js";import"./Label-C8y2_6Vy.js";import"./ZIndexLayer-DVdyi4xb.js";import"./types-CX2SK57G.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DyBcDzzn.js";import"./Curve-BPyFb2hT.js";import"./step-Bwlnh61x.js";import"./path-DyVhHtw_.js";import"./tooltipContext-COH2Afi-.js";import"./Symbols-BMOYVBcW.js";import"./symbol-DR8oIFTo.js";import"./ActiveShapeUtils-TINQfrs9.js";import"./RegisterGraphicalItemId-BxDB977O.js";import"./ErrorBarContext-Cq-5bVpD.js";import"./GraphicalItemClipPath-BH4qa2aX.js";import"./SetGraphicalItem-W-67q1_i.js";import"./useAnimationId-B1Sa6L7Z.js";import"./CSSTransitionAnimate-DVATUTlA.js";import"./useElementOffset-BVFe881g.js";import"./uniqBy-CRMN3rmd.js";import"./iteratee-B_zfWqem.js";import"./Cross-CH1kJFsZ.js";import"./Rectangle-oqaSBBRm.js";import"./Sector-C4IUCLNM.js";import"./index-Bnctlgv-.js";import"./ChartSizeDimensions-Dwe9HRTS.js";import"./OffsetShower-BjMyZ4ga.js";import"./PlotAreaShower-6s_jSFmp.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
