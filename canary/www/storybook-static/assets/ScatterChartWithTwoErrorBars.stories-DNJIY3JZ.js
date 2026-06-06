import{R as r}from"./iframe-CfFwYGba.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BiQy6mwh.js";import{C as d}from"./CartesianGrid-DWyJ9S1X.js";import{X as c}from"./XAxis-C1PjqHUu.js";import{Y as y}from"./YAxis-D4OA0xxQ.js";import{S as h}from"./Scatter-ByF4Xw4U.js";import{E as e}from"./ErrorBar-MNJVtTnU.js";import{T as u}from"./Tooltip-D9G1T0b-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BG04mOMU.js";import"./zIndexSlice-DfErsUYp.js";import"./immer-ChF14mwi.js";import"./index-B1M76gQx.js";import"./index-DKyALkfw.js";import"./get-VqHCUeFt.js";import"./resolveDefaultProps-CNXn3RtZ.js";import"./isWellBehavedNumber-DNsnRpQn.js";import"./PolarUtils-CTnnDHZv.js";import"./index-jr7opHAK.js";import"./index-DNhYiVbG.js";import"./renderedTicksSlice-CeRHVXP-.js";import"./axisSelectors-DhigzgEo.js";import"./d3-scale-CO_OUUyv.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BKL_0SO1.js";import"./chartDataContext-CvyqEHRa.js";import"./CategoricalChart-D8Sfn5Og.js";import"./CartesianAxis-DYBfrE-6.js";import"./Layer-CIeZ6xN1.js";import"./Text-6g8FEB5n.js";import"./DOMUtils-CelkDAhh.js";import"./Label-BfJ1m9lw.js";import"./ZIndexLayer-CO0_v3Z6.js";import"./types-B8Ju2LTD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DufJJ5tM.js";import"./useAnimationId-q4Azt8JP.js";import"./Curve-CvFToXA1.js";import"./step-Cz7LQHZ8.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Ld-NT6Pn.js";import"./Symbols-DyL8V-3O.js";import"./symbol-DZxqdVbQ.js";import"./ActiveShapeUtils-BoiiDjBc.js";import"./RegisterGraphicalItemId-DuA2mhLl.js";import"./ErrorBarContext-yluf_OAo.js";import"./GraphicalItemClipPath-CycB6t93.js";import"./SetGraphicalItem-BVwnEQ5r.js";import"./CSSTransitionAnimate-BQV0naaR.js";import"./useElementOffset-DHiFNrkV.js";import"./uniqBy-2uTalxV9.js";import"./iteratee-CgWzIoT6.js";import"./Cross-CJdDez7_.js";import"./Rectangle-Dp-9d2wb.js";import"./Sector-BK2jXRga.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
