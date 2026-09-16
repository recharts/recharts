import{R as r}from"./iframe-BCNgueVp.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CceJinkB.js";import{C as d}from"./CartesianGrid-Ba6XQPo3.js";import{X as c}from"./XAxis-LOCckWX5.js";import{Y as y}from"./YAxis-FgW2NdaC.js";import{S as h}from"./Scatter-DIBmxNR3.js";import{E as e}from"./ErrorBar-XcKrJhAR.js";import{T as u}from"./Tooltip-BzPJ_8Vl.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DbCJx0GW.js";import"./zIndexSlice-CCtmziB1.js";import"./throttle-NhPjNryy.js";import"./index-DknrhM99.js";import"./index-C90YdW0D.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BtKNVX8w.js";import"./isWellBehavedNumber-DQrQxdGi.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-D-nEX4IG.js";import"./d3-scale-buoP3Yb_.js";import"./index-WR8kAZrp.js";import"./index-D7hqs4ef.js";import"./renderedTicksSlice-mO9WeRkh.js";import"./index-DhCnaeYc.js";import"./CartesianChart-zbkVSw3C.js";import"./chartDataContext-Di3BbchU.js";import"./CategoricalChart-DQPW05OG.js";import"./CartesianAxis-cRNPmBWR.js";import"./Layer-DVqtOL17.js";import"./Text-DAXsYFxH.js";import"./DOMUtils-C7-Ag6_9.js";import"./useId-Ckkf-sDd.js";import"./useBackwardsCompatibleTheme-CFJvwoVT.js";import"./Label-B2ReDrEH.js";import"./ZIndexLayer-Ccrtcbr9.js";import"./types-Dv8LLmcq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DV3N7EYj.js";import"./useAnimationId-CBbWVRap.js";import"./Curve-NDvVIG-e.js";import"./step-CsaqBRl_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DPQKqAtu.js";import"./Symbols-B09GcAtX.js";import"./symbol-95E8py6i.js";import"./ActiveShapeUtils-Cz6FzTvm.js";import"./RegisterGraphicalItemId-D_OLUlPr.js";import"./ErrorBarContext-Bgs6nhLR.js";import"./GraphicalItemClipPath-DQ0b-CJJ.js";import"./SetGraphicalItem-CDaxvQAk.js";import"./useGraphicalItemIdentity-CyGmZ9Hw.js";import"./CSSTransitionAnimate-d7XAqml3.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dddhvd44.js";import"./uniqBy-DZMfENsr.js";import"./iteratee-B15ojktg.js";import"./Cross-CfJFSw2u.js";import"./Rectangle-B8Pg3yvs.js";import"./Sector-BHVdZXzR.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
