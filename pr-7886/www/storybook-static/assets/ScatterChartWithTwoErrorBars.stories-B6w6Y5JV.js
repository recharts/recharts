import{R as r}from"./iframe-DrNDVdUV.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CqqS7Ewf.js";import{C as d}from"./CartesianGrid-BI91T1wX.js";import{X as c}from"./XAxis-CYMSKzPe.js";import{Y as y}from"./YAxis-xS1LCjGi.js";import{S as h}from"./Scatter-IEZ4LRmx.js";import{E as e}from"./ErrorBar-C9XQrA1B.js";import{T as u}from"./Tooltip-DwT0sGjr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CftVGGIb.js";import"./zIndexSlice-CtU9gDeX.js";import"./throttle-yi_4PIaU.js";import"./index-CcUsqpS-.js";import"./index-uubsNt5S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CGCnXzV6.js";import"./isWellBehavedNumber-6ms7Qni5.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-83UqlNkf.js";import"./d3-scale-Dtw5RV1H.js";import"./index-C02YBhOv.js";import"./index-DG6hdvW2.js";import"./renderedTicksSlice-D-gEAZZ9.js";import"./index-f04P2rVP.js";import"./CartesianChart-AI3x8M6-.js";import"./chartDataContext-B5-7BCeK.js";import"./CategoricalChart-CAcrwHX_.js";import"./CartesianAxis-D9QKlyxu.js";import"./Layer-MqQXVAAH.js";import"./Text-B6IFXijX.js";import"./DOMUtils-CJOGT8qc.js";import"./useId-DvlibiBq.js";import"./useBackwardsCompatibleTheme-D28mWunQ.js";import"./Label-S1smMv2d.js";import"./ZIndexLayer-DVXiBMpv.js";import"./types-xpc3POF2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BSenOuGe.js";import"./useAnimationId-CQqGpr63.js";import"./Curve-zuUGMSY-.js";import"./step-H8KTZm7H.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B7HsC9gN.js";import"./Symbols-BVnZkW-S.js";import"./symbol-P4OpAMFs.js";import"./ActiveShapeUtils-DMJhm59f.js";import"./RegisterGraphicalItemId-yZiy6jFu.js";import"./ErrorBarContext-DCn9mgoR.js";import"./GraphicalItemClipPath-BWcxuFET.js";import"./SetGraphicalItem-Cpl9rbNJ.js";import"./useGraphicalItemIdentity-CyeNl3AJ.js";import"./dataEntryStyles-JCaOpwA1.js";import"./CSSTransitionAnimate-_2eFaqw8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CmUznYU5.js";import"./uniqBy-CEMmyZ3q.js";import"./iteratee-BZ785cNU.js";import"./Cross-BXTp2LzN.js";import"./Rectangle-CQDEI2OM.js";import"./Sector-b2hYdxM2.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
