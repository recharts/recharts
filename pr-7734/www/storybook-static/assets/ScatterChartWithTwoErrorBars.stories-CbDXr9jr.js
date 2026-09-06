import{R as r}from"./iframe-CdBlg-At.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CW_3AGkY.js";import{C as d}from"./CartesianGrid-CciaTcJr.js";import{X as c}from"./XAxis-2XVZuSLi.js";import{Y as y}from"./YAxis-CCdrxwQa.js";import{S as h}from"./Scatter-BoTTg2nB.js";import{E as e}from"./ErrorBar-C01a7-71.js";import{T as u}from"./Tooltip-DkrMtHEK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtwnjrPH.js";import"./zIndexSlice-Bd2ctzyz.js";import"./throttle-BMwUG5uc.js";import"./index-Yyk8WWPT.js";import"./index-D9Herklh.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BE0meIIe.js";import"./isWellBehavedNumber-DGTEliAX.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B8B8qq9w.js";import"./d3-scale-BBzFAB1R.js";import"./index-BTlZQ11f.js";import"./index-COSgbA9u.js";import"./renderedTicksSlice-D-b_FiBU.js";import"./index-B_ni8hx5.js";import"./CartesianChart-5haPaxu4.js";import"./chartDataContext-8OMpeo_C.js";import"./CategoricalChart-KxwhOg8o.js";import"./CartesianAxis-CVVHUAde.js";import"./Layer-DJ6KlbON.js";import"./Text-B72QzR_J.js";import"./DOMUtils-B8jV7L5A.js";import"./useId-CTQIK8VB.js";import"./useBackwardsCompatibleTheme-DVBTPBZT.js";import"./Label-BhvRy9p8.js";import"./ZIndexLayer-BRtQaXip.js";import"./types-BwgN4eIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DF8TZk9M.js";import"./useAnimationId-C5J-XAz0.js";import"./Curve-C6WQoFll.js";import"./step-CSVR4QN1.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bc2kp5o4.js";import"./Symbols-DsDFX5_W.js";import"./symbol-BOju37_N.js";import"./ActiveShapeUtils-DmMWVfaj.js";import"./RegisterGraphicalItemId-CHEBFfi8.js";import"./ErrorBarContext-CT7bwl-o.js";import"./GraphicalItemClipPath-DCCqyqY0.js";import"./SetGraphicalItem-BiBqIxpO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BhczJd9-.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DhmioEfl.js";import"./uniqBy-CvvZwjKG.js";import"./iteratee-DqsE923K.js";import"./Cross-DK2lyT6M.js";import"./Rectangle-WNRZi7C8.js";import"./Sector-CoXPRBsG.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
