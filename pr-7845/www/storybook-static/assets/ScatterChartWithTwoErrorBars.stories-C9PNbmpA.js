import{R as r}from"./iframe-DKiAUKfj.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-o7kqWQOu.js";import{C as d}from"./CartesianGrid-CbvomsAs.js";import{X as c}from"./XAxis-BHxip6nG.js";import{Y as y}from"./YAxis-CPqJ1LPY.js";import{S as h}from"./Scatter-CtEfmu0c.js";import{E as e}from"./ErrorBar-CDPkvg--.js";import{T as u}from"./Tooltip-62Dqd3SI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-V6OGhvVE.js";import"./zIndexSlice-DRDYTCs-.js";import"./throttle-C4io43Xn.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CgDB5I1Y.js";import"./d3-scale-DhJR9ZRz.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./index-CTMR6STe.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./CartesianAxis-C20v2lN6.js";import"./Layer-TOA8EzlX.js";import"./Text-DzjLOXSn.js";import"./DOMUtils-kE23eB48.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./Label-BqJsTdph.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./types-CesjT3HQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CPnSyqXV.js";import"./useAnimationId-D05enbBD.js";import"./Curve-NEEyYudm.js";import"./step-DrkPABVT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DM4TP7FV.js";import"./Symbols-DNiqT9Oi.js";import"./symbol-cWeA-9da.js";import"./ActiveShapeUtils-CameuY1c.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./ErrorBarContext-CdB3k_cz.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./useGraphicalItemIdentity-BklSfqcr.js";import"./CSSTransitionAnimate-B74Cafw2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CfjQprQ-.js";import"./uniqBy-BRiSgWCU.js";import"./iteratee-DYj_iQuR.js";import"./Cross-CxyMpGOk.js";import"./Rectangle-C3_ltPRK.js";import"./Sector-gklvmQfA.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
