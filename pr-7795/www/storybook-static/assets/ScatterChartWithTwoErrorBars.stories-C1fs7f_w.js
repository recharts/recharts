import{R as r}from"./iframe-C3lSaTFw.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BbXoyySv.js";import{C as d}from"./CartesianGrid-SM9K3Eb0.js";import{X as c}from"./XAxis-MYsgX6vB.js";import{Y as y}from"./YAxis-CGdCh3qj.js";import{S as h}from"./Scatter-Bu_gvCSA.js";import{E as e}from"./ErrorBar-C-EAr_DZ.js";import{T as u}from"./Tooltip-BHn0weJ7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CM9ySMEh.js";import"./zIndexSlice-CVjGcfFW.js";import"./throttle-BAVesAqd.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BkcaIfMI.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./CartesianAxis-BQ-frZs4.js";import"./Layer-DCoygAxl.js";import"./Text-H-IPTcTj.js";import"./DOMUtils-DW6zNYNN.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./Label-DRjcihT7.js";import"./ZIndexLayer-BIuAiCXb.js";import"./types-BmaDYfeO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BIU8Piw-.js";import"./useAnimationId-Dtjg15yn.js";import"./Curve-D4S8erUE.js";import"./step-DxtN-o39.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D_PIy0yL.js";import"./Symbols-gLeSQBZx.js";import"./symbol-BKxV6GsZ.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./ErrorBarContext-urOk63oK.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./useGraphicalItemIdentity-B93Md1_E.js";import"./CSSTransitionAnimate-BGz5YSI_.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cal3qYIU.js";import"./uniqBy-CNbis68a.js";import"./iteratee-BZbHMMPe.js";import"./Cross-DScjI0XA.js";import"./Rectangle-D8U833xr.js";import"./Sector-CF33ET3b.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
