import{R as r}from"./iframe-DkQJn7oC.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DGI7rTfH.js";import{C as d}from"./CartesianGrid-BjORpNZe.js";import{X as c}from"./XAxis-OlRaja_E.js";import{Y as y}from"./YAxis-B058BHQI.js";import{S as h}from"./Scatter-DL3Jmatg.js";import{E as e}from"./ErrorBar-B77OcNV5.js";import{T as u}from"./Tooltip-BA3rhm5B.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D5ByFvr9.js";import"./zIndexSlice-CLvhVPNj.js";import"./immer-ozzvrCwh.js";import"./index-DD1gmeQO.js";import"./index-DNtFXHJ-.js";import"./get-_o-XDxyc.js";import"./resolveDefaultProps-CtV3qxun.js";import"./isWellBehavedNumber-D3HHn2e5.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CDE_9WY4.js";import"./index-BU3HhPoo.js";import"./renderedTicksSlice-DdtdEwsq.js";import"./axisSelectors-kKO86fyF.js";import"./d3-scale-B9HIJ_CW.js";import"./CartesianChart-BQyR2r2D.js";import"./chartDataContext-Ca9RDW-S.js";import"./CategoricalChart-Fc9nOzpN.js";import"./CartesianAxis-BfpvL1x5.js";import"./Layer-Br1RHuVf.js";import"./Text-Bdxz4_Jg.js";import"./DOMUtils-Dl1hyTMQ.js";import"./Label-ufurgCkW.js";import"./ZIndexLayer-BvwLITgH.js";import"./types-BZmxyoje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-w7rZvjc1.js";import"./useAnimationId-CwryZT39.js";import"./Curve-HzFtr0jb.js";import"./step-G_UXBYu7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DbJRjiak.js";import"./Symbols-Bzvyyefy.js";import"./symbol-BtyE-nfF.js";import"./ActiveShapeUtils-CNNYz_9g.js";import"./RegisterGraphicalItemId-BCNHxJaH.js";import"./ErrorBarContext-DzKhrRZV.js";import"./GraphicalItemClipPath-Dkvi73X5.js";import"./SetGraphicalItem-Cl7ozA9v.js";import"./CSSTransitionAnimate-DLOVDAbn.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DjsvA0sO.js";import"./uniqBy-BXfaEW_y.js";import"./iteratee-C_u0N0mB.js";import"./Cross-B81Fs-AA.js";import"./Rectangle-BEXU9a8A.js";import"./Sector-Cf94wIX9.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
