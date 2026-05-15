import{e as r}from"./iframe-CYBvhlZy.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DaSE0GcT.js";import{C as d}from"./CartesianGrid-DJUNxO2e.js";import{X as c}from"./XAxis-eHWI-DgF.js";import{Y as y}from"./YAxis-Cr0sgLdF.js";import{S as h}from"./Scatter-Drn-o5LC.js";import{E as e}from"./ErrorBar-BxNuWgEl.js";import{T as u}from"./Tooltip-Bl6pLRjZ.js";import{R as f}from"./RechartsHookInspector-CaeSkNQM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D_53Ouva.js";import"./arrayEqualityCheck-CK8f-Z2u.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-fdlpGSvO.js";import"./immer-DZ9JDNpk.js";import"./PolarUtils-CTnnDHZv.js";import"./index-nd8_1HWo.js";import"./hooks-CR7YY56P.js";import"./axisSelectors-BoLkhT_J.js";import"./d3-scale-DTdaSeXE.js";import"./zIndexSlice-vzQlxu4v.js";import"./renderedTicksSlice-PTTaozgG.js";import"./CartesianChart-B_feyW6L.js";import"./chartDataContext-CoyQinM0.js";import"./CategoricalChart-BXlXDqQY.js";import"./CartesianAxis-DeN7_m83.js";import"./Layer-DAuVz3MT.js";import"./Text-CrKmtYV0.js";import"./DOMUtils-DaBDLSWT.js";import"./Label-C0OOgdLf.js";import"./ZIndexLayer-CJwEcLcc.js";import"./types-BeBHA9WF.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BYIbW4_R.js";import"./Curve-BOm9EQk3.js";import"./step-CGLzAmAZ.js";import"./tooltipContext-D-fzSH_v.js";import"./Symbols-CUYfHAW-.js";import"./symbol-CPTqgyqe.js";import"./ActiveShapeUtils-CCHDnR4M.js";import"./isPlainObject-CS6IzJzX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CL4E1CJr.js";import"./useAnimationId-DVYg6VJa.js";import"./Trapezoid-CMh-DiG6.js";import"./Sector-CjwyDs-v.js";import"./RegisterGraphicalItemId-BV1Az0SU.js";import"./ErrorBarContext-ggSVFX3T.js";import"./GraphicalItemClipPath-CgGJbcJo.js";import"./SetGraphicalItem-D2M6v_rh.js";import"./CSSTransitionAnimate-DI7mW6jJ.js";import"./useElementOffset-Vb2Ffn3s.js";import"./uniqBy-B2hQmckI.js";import"./iteratee-DPMrHAQZ.js";import"./Cross-IqBPrWj8.js";import"./index-2ZvuN1gp.js";import"./ChartSizeDimensions-Be7xBjpI.js";import"./OffsetShower-ByB6-I6e.js";import"./PlotAreaShower-DizTc5Ay.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
