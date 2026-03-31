import{e as r}from"./iframe-Ch1Isql8.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-C03K_8EI.js";import{C as d}from"./CartesianGrid-CftF3wqv.js";import{X as c}from"./XAxis-BKww8jIv.js";import{Y as y}from"./YAxis-BZ1lWBvu.js";import{S as h}from"./Scatter-DRdP0ZR2.js";import{E as e}from"./ErrorBar-CHSmvjb4.js";import{T as u}from"./Tooltip-9L4--RcN.js";import{R as f}from"./RechartsHookInspector-DbN8VMTu.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BHlnvpBC.js";import"./arrayEqualityCheck-BCEbDsDx.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C2WRALEr.js";import"./immer-BTgrVrx0.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BQodkfcp.js";import"./hooks-DIQ-JHwY.js";import"./axisSelectors-0Ej_8yTo.js";import"./d3-scale-CrbEySHr.js";import"./zIndexSlice-CfYpWTyk.js";import"./renderedTicksSlice-B_3Gl1Hk.js";import"./CartesianChart-CM5Qb5gP.js";import"./chartDataContext-jCxwHdJc.js";import"./CategoricalChart-DFR8bKN5.js";import"./CartesianAxis-BTQibmSQ.js";import"./Layer-BO4GuAqP.js";import"./Text-BVN_POYl.js";import"./DOMUtils-10gf_B-M.js";import"./Label-DD8AaqpA.js";import"./ZIndexLayer-DjVbUmgd.js";import"./types-BJb3G4uR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CsOHi-wi.js";import"./Curve-DgBmrfnw.js";import"./step-B9yE4hVt.js";import"./tooltipContext-BCIU6VQs.js";import"./Symbols-hNJtZeth.js";import"./symbol-DKQgrSwN.js";import"./ActiveShapeUtils-Ds4ws-40.js";import"./isPlainObject-CbEMMj1e.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DcZ1nspL.js";import"./useAnimationId-BC-9oBmZ.js";import"./Trapezoid-CyEP7tU2.js";import"./Sector-DNP4xewC.js";import"./RegisterGraphicalItemId-B38aETS6.js";import"./ErrorBarContext-B1gBZht8.js";import"./GraphicalItemClipPath-5ic9tQHz.js";import"./SetGraphicalItem-CK5a6DJE.js";import"./CSSTransitionAnimate-2CIjNYMm.js";import"./useElementOffset-BnNRxgQ2.js";import"./uniqBy-C0ShPv6b.js";import"./iteratee-BHbBqIkI.js";import"./Cross-CFXnEOvU.js";import"./index-B9MqbPA_.js";import"./ChartSizeDimensions-Xxd3TXQk.js";import"./OffsetShower-CEfGPMuj.js";import"./PlotAreaShower-BXMcaFZq.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
