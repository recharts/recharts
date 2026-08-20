import{R as r}from"./iframe-1ThqpvbR.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CsvjjhHG.js";import{C as d}from"./CartesianGrid-CYqWPTuQ.js";import{X as c}from"./XAxis-P8CW3MKP.js";import{Y as y}from"./YAxis-B1czIw6R.js";import{S as h}from"./Scatter-B76KXaUS.js";import{E as e}from"./ErrorBar-X6Rk3u31.js";import{T as u}from"./Tooltip-qvvWeQJ8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcjLdZwM.js";import"./zIndexSlice-D1UhtHk3.js";import"./throttle-C73VAA69.js";import"./index-DoTHKFlr.js";import"./index-QzMa9_Xi.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DArzca5M.js";import"./isWellBehavedNumber-B7CQu1xd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CfQ7Fwii.js";import"./index-CktiEatn.js";import"./axisSelectors-1futPsBe.js";import"./d3-scale-nVhhBbRx.js";import"./renderedTicksSlice-0CGdVobN.js";import"./CartesianChart-dewq0r_z.js";import"./chartDataContext-DvyAzMjZ.js";import"./CategoricalChart-XR-igInW.js";import"./CartesianAxis-LO87TYgw.js";import"./Layer-CO3sdEK1.js";import"./Text-MDWEE3g_.js";import"./DOMUtils-BsT2H8yg.js";import"./useId-Cq2DHNjh.js";import"./useBackwardsCompatibleTheme-CdEwSBID.js";import"./Label-Dga6ObK8.js";import"./ZIndexLayer-B6xphlKa.js";import"./types-BACZxUTO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CScMa6hv.js";import"./useAnimationId-xKJzFs5I.js";import"./Curve-BFr4LVo1.js";import"./step-K_9BfkCY.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CxbY5XPu.js";import"./Symbols-CBU3aRDI.js";import"./symbol-III9KfYB.js";import"./ActiveShapeUtils-BlimohsT.js";import"./RegisterGraphicalItemId-DZFAuRVF.js";import"./ErrorBarContext-DBffz6et.js";import"./GraphicalItemClipPath-Tv0C2Wnw.js";import"./SetGraphicalItem-DGTvGn78.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CO3b60k-.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D_JS3Ekf.js";import"./uniqBy-BWHb0M0I.js";import"./iteratee-DkQJTWAO.js";import"./Cross-ClqssIZ3.js";import"./Rectangle-DlLkmtYk.js";import"./Sector-DQNnGbD_.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
