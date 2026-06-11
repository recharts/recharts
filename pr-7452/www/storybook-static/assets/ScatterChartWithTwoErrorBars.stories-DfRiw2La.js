import{R as r}from"./iframe-DBxFP3uX.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-HkmjBaL7.js";import{C as d}from"./CartesianGrid-sOQxN6gG.js";import{X as c}from"./XAxis-CQTPr47R.js";import{Y as y}from"./YAxis-BneRoowy.js";import{S as h}from"./Scatter-D_o49rSl.js";import{E as e}from"./ErrorBar-CariRXLL.js";import{T as u}from"./Tooltip-CV5R1W18.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DEp3al8N.js";import"./zIndexSlice-B_9s4KsU.js";import"./throttle-DjG9xqx-.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./get-CN0u3twK.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./renderedTicksSlice-BowbWmvp.js";import"./axisSelectors-B_9j14vR.js";import"./d3-scale-B06022wF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./CartesianAxis-tZocWrkt.js";import"./Layer-Buso2Ccs.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./Label-Dhv9vMg4.js";import"./ZIndexLayer-DBGeCZYh.js";import"./types-B2FPYU3d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ooNl266t.js";import"./useAnimationId-54G3nUfQ.js";import"./Curve-Dh6mi4Et.js";import"./step-CqGdUrTJ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BlWpJhq6.js";import"./Symbols-CrgCQ1aB.js";import"./symbol-Ck9l1m6X.js";import"./ActiveShapeUtils-Bhf79Nyo.js";import"./RegisterGraphicalItemId-BzdV07RL.js";import"./ErrorBarContext-D7bc2l2n.js";import"./GraphicalItemClipPath-CDU2cR1P.js";import"./SetGraphicalItem-DoJqlCoL.js";import"./CSSTransitionAnimate-B1D9mEt0.js";import"./useElementOffset-BIQStkwP.js";import"./uniqBy-CdkgCulQ.js";import"./iteratee-BRF5lQre.js";import"./Cross-CaNg85QT.js";import"./Rectangle-BPEfWSXH.js";import"./Sector-BFzsvVXV.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
