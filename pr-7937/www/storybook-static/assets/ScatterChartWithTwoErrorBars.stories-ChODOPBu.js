import{R as r}from"./iframe-BPYH2WpS.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DtyRUdX0.js";import{C as d}from"./CartesianGrid-CzabeShO.js";import{X as c}from"./XAxis-Cp4YLkQ5.js";import{Y as y}from"./YAxis-CEufsP3h.js";import{S as h}from"./Scatter-uywUMS5X.js";import{E as e}from"./ErrorBar-DICzStXp.js";import{T as u}from"./Tooltip-CqhPUDbY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CeSqC8qM.js";import"./zIndexSlice-CRIY2DI-.js";import"./throttle-xyVQD3_H.js";import"./index-BlMmEtsK.js";import"./index-DJpd9u5l.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGvNj-Ia.js";import"./isWellBehavedNumber-CF5FkEe7.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BixSNhmq.js";import"./d3-scale-C1nlw5KN.js";import"./index-CWtZ8b1U.js";import"./index-B4bTdLCM.js";import"./renderedTicksSlice-6vdJGY0j.js";import"./index-BPYK78er.js";import"./CartesianChart-CvYs98y7.js";import"./chartDataContext-kSMgmHGF.js";import"./CategoricalChart-Biw_xsj3.js";import"./CartesianAxis-CGCKig2C.js";import"./Layer-C2LXKbkN.js";import"./Text-zynwh62u.js";import"./DOMUtils-BPeWtLKN.js";import"./useId-BE8oxSSZ.js";import"./useBackwardsCompatibleTheme-D75GrB32.js";import"./Label-DVwS1qXs.js";import"./ZIndexLayer-BSe5AwCg.js";import"./types-CqopvqdC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C-cMTO2B.js";import"./useAnimationId-BKqfl7rh.js";import"./Curve-CSa72MMA.js";import"./step-lFEaXGaU.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CWyc1cD1.js";import"./Symbols-DO2NWfq5.js";import"./symbol-6t26GgH1.js";import"./ActiveShapeUtils-Ds20vJPV.js";import"./RegisterGraphicalItemId-BFsJivb8.js";import"./ErrorBarContext-BJvfmcx_.js";import"./GraphicalItemClipPath-B49DsmcO.js";import"./SetGraphicalItem-rIgP9mSO.js";import"./useGraphicalItemIdentity-AHFKb_mu.js";import"./dataEntryStyles-CkEyscHr.js";import"./CSSTransitionAnimate-DboB1HVq.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C6LgEkRR.js";import"./uniqBy-BLfWWLf6.js";import"./iteratee-BZ9sVM1E.js";import"./Cross-2hMX8eh6.js";import"./Rectangle-3aQUV3ep.js";import"./Sector-DHJW8RW3.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
