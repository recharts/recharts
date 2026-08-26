import{R as r}from"./iframe-B6gM4DBh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BbXyptuz.js";import{C as d}from"./CartesianGrid-BaXO-HzQ.js";import{X as c}from"./XAxis-BPzJdn5a.js";import{Y as y}from"./YAxis-d65xn9J2.js";import{S as h}from"./Scatter-BnOj-f1N.js";import{E as e}from"./ErrorBar-DYpa--Ay.js";import{T as u}from"./Tooltip-LOl6iYza.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D2vZVe4g.js";import"./zIndexSlice-B4H70akx.js";import"./throttle-CinY1Cg6.js";import"./index-CaHvefGu.js";import"./index-DbvGR5AH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-HOpiV2UA.js";import"./isWellBehavedNumber-oWfLE68q.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-D78GfHI7.js";import"./d3-scale-CI-CA5sR.js";import"./index-kpSUoDvk.js";import"./index-8y1uh0JJ.js";import"./renderedTicksSlice-C9ov5r2C.js";import"./index-CgCBhtWH.js";import"./CartesianChart-DHo5twJf.js";import"./chartDataContext-SMCrbflL.js";import"./CategoricalChart-COvMpWfW.js";import"./CartesianAxis-BQyu91wk.js";import"./Layer-BvISteiU.js";import"./Text-D8H4cfwv.js";import"./DOMUtils-BD82E1of.js";import"./useId-DmdpXOpx.js";import"./useBackwardsCompatibleTheme-9Vtrcjiv.js";import"./Label-uI-6_naX.js";import"./ZIndexLayer-C4neE0Nt.js";import"./types-B56u5L7u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DoXh_8P-.js";import"./useAnimationId-B9APFvDh.js";import"./Curve-BJ4EcGmY.js";import"./step-hz5YCF7J.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C_v9qMgk.js";import"./Symbols-B96vx3HZ.js";import"./symbol-DjIioEey.js";import"./ActiveShapeUtils-DnLJRiwf.js";import"./RegisterGraphicalItemId-Bqoy6nT5.js";import"./ErrorBarContext-BH6HTwRn.js";import"./GraphicalItemClipPath-BlpQx9et.js";import"./SetGraphicalItem-CtntmLYm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CIdw4D6W.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B_AujER3.js";import"./uniqBy-gLmjoiP9.js";import"./iteratee-DAM7e3NH.js";import"./Cross-Cw_vUoRT.js";import"./Rectangle-BJ2YLML2.js";import"./Sector-Cy7n_hv5.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
