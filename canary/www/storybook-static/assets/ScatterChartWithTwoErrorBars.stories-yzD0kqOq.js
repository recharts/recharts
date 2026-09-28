import{R as r}from"./iframe-_TSN2GeP.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-C1GkEcsi.js";import{C as d}from"./CartesianGrid-BshllkSB.js";import{X as c}from"./XAxis-BsztGX7X.js";import{Y as y}from"./YAxis-CFqjD2S5.js";import{S as h}from"./Scatter-C97o4oi1.js";import{E as e}from"./ErrorBar-C1lCYtFK.js";import{T as u}from"./Tooltip-CCV_gS2x.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BXs5OB5c.js";import"./zIndexSlice-D96uBoAp.js";import"./throttle-Cil6wORT.js";import"./index-CCkkuyTr.js";import"./index-CSNAsU0S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D9QDYjax.js";import"./isWellBehavedNumber-BNbTdqm3.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Dd3nK3xc.js";import"./d3-scale-BkrsrexO.js";import"./index-DMuyjDG0.js";import"./index-lnFbewhe.js";import"./renderedTicksSlice-9FoMOBwW.js";import"./index-BghYN9OX.js";import"./CartesianChart-CBmykTvx.js";import"./chartDataContext-Beyv08KU.js";import"./CategoricalChart-DrCkbeNv.js";import"./CartesianAxis-DiCtkIDj.js";import"./Layer-9vgq1u7o.js";import"./Text-E_mkl092.js";import"./DOMUtils-FVlzESpl.js";import"./useId-BhIopQFv.js";import"./useBackwardsCompatibleTheme-B-7Qbbn2.js";import"./Label-mOwsaJBj.js";import"./ZIndexLayer-CuHtjJTp.js";import"./types-DD8CfvEw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DzytQgaE.js";import"./useAnimationId-JMLdgXcg.js";import"./Curve-BfZHkOXV.js";import"./step-B86fSev8.js";import"./path-DyVhHtw_.js";import"./tooltipContext-4fvmduU2.js";import"./Symbols-CVMCwj0Q.js";import"./symbol-BZoobV8K.js";import"./ActiveShapeUtils-B-Is-yHc.js";import"./RegisterGraphicalItemId-DtZ0Q-pq.js";import"./ErrorBarContext-DL7P0RQ2.js";import"./GraphicalItemClipPath-CV0_mPKt.js";import"./SetGraphicalItem-BDNu96CY.js";import"./useGraphicalItemIdentity-D0CKpQKL.js";import"./dataEntryStyles-Bf3y5Q1l.js";import"./CSSTransitionAnimate-BYncG_dg.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-HEsArA2s.js";import"./uniqBy-DTFHfYak.js";import"./iteratee-deCpNbOg.js";import"./Cross-DtDlc5je.js";import"./Rectangle-bnIY1oY8.js";import"./Sector-CgVRA7pI.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
