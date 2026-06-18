import{R as r}from"./iframe-bh8Hdh0s.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Duuyxsps.js";import{C as d}from"./CartesianGrid-Dtjz2FfV.js";import{X as c}from"./XAxis-dMhU6DKu.js";import{Y as y}from"./YAxis-3Mh6rYEy.js";import{S as h}from"./Scatter-Chle4FRi.js";import{E as e}from"./ErrorBar-CjaIyByA.js";import{T as u}from"./Tooltip-DtCvF_1n.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-bPWrhjV6.js";import"./zIndexSlice-D-BYbnQO.js";import"./immer-Di2Y-BX2.js";import"./index-BvOZTDpw.js";import"./index-BKp5y7FT.js";import"./get-D3Bb09EQ.js";import"./resolveDefaultProps-DrqDcb4q.js";import"./isWellBehavedNumber-BEwe5En6.js";import"./PolarUtils-CTnnDHZv.js";import"./index-yP_7__bV.js";import"./index-DMGyx--D.js";import"./renderedTicksSlice-CAguNiQd.js";import"./axisSelectors-CJnElyGk.js";import"./d3-scale-nMJeyC7B.js";import"./string-B6fdYHAA.js";import"./CartesianChart-EUP1j0p6.js";import"./chartDataContext-nAZQwMJZ.js";import"./CategoricalChart-D4vACcZf.js";import"./CartesianAxis-Cczt14vl.js";import"./Layer-CFpuUaFs.js";import"./Text-DNFdD7FY.js";import"./DOMUtils-CqbIbq5Q.js";import"./Label-4dzVOcp4.js";import"./ZIndexLayer-DkZ-MLZl.js";import"./types-CGzL9fNM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-2yvO_B45.js";import"./useAnimationId-CfFImJZH.js";import"./Curve-C1GsF6pk.js";import"./step-BRqV4bUq.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DwGfEh7N.js";import"./Symbols-DtKA6LMw.js";import"./symbol-B3zzIPTL.js";import"./ActiveShapeUtils-BdiO1tHu.js";import"./RegisterGraphicalItemId-D7G5Ydkp.js";import"./ErrorBarContext-Co10Kn-s.js";import"./GraphicalItemClipPath-JLz8ewYQ.js";import"./SetGraphicalItem-Dnctc4Vz.js";import"./CSSTransitionAnimate-DJRIG3xI.js";import"./useElementOffset-CQr1dMfv.js";import"./uniqBy-SIO0NZ97.js";import"./iteratee-BMZqNRQz.js";import"./Cross-TLMXGfYl.js";import"./Rectangle-BSJj6R6N.js";import"./Sector-DNtdUaHG.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
