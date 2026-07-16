import{R as r}from"./iframe-54ZcEpUv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B__2nxTE.js";import{C as d}from"./CartesianGrid-DidoAtGk.js";import{X as c}from"./XAxis-BhMXtQiv.js";import{Y as y}from"./YAxis-2cFJkYpr.js";import{S as h}from"./Scatter-CbHgHuKg.js";import{E as e}from"./ErrorBar-BnBfnVaJ.js";import{T as u}from"./Tooltip-5XrQW7rn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-r5U10tn2.js";import"./zIndexSlice-D4EcTS4q.js";import"./throttle-DtmCwuH2.js";import"./index-Rdbq1tFP.js";import"./index-MCJglrpU.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DaxnpdSq.js";import"./isWellBehavedNumber-xZge7Uxu.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B1wDf6J5.js";import"./index-Bge3lKql.js";import"./renderedTicksSlice-B5SG4yYX.js";import"./axisSelectors-BFZg6wbM.js";import"./d3-scale-Bz_vEXwn.js";import"./CartesianChart-wsfik70h.js";import"./chartDataContext-C8dhr_lt.js";import"./CategoricalChart-FIiVxhF6.js";import"./CartesianAxis-BfyoGem3.js";import"./Layer-C5bNrRV9.js";import"./Text-DL_vIJFI.js";import"./DOMUtils-B0BwWkl9.js";import"./Label--73vW_dK.js";import"./ZIndexLayer-CQupnOhG.js";import"./types-kdBRSK-c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bo-aqLFl.js";import"./useAnimationId-D-RZ_xXC.js";import"./Curve-FTpO0g2t.js";import"./step-BsOSpGLs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D8x71NVd.js";import"./Symbols-Vlrvy7XV.js";import"./symbol-sg6ZkDjS.js";import"./ActiveShapeUtils-DKX9K39u.js";import"./RegisterGraphicalItemId-BIJ3N5jx.js";import"./ErrorBarContext-DIEqyawL.js";import"./GraphicalItemClipPath-_HL_VRQE.js";import"./SetGraphicalItem-BBUtbuL-.js";import"./CSSTransitionAnimate-tG50UOGn.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CHF_XBdP.js";import"./uniqBy-DtjPrqio.js";import"./iteratee-Bz0VOYsU.js";import"./Cross-434ElTmF.js";import"./Rectangle-KX1Q4ZbD.js";import"./Sector-DS_9F4Dx.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
