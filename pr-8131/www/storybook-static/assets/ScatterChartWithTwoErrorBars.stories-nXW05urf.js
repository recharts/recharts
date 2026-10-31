import{R as r}from"./iframe-SkF1Z4RX.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BM8SU8KU.js";import{C as d}from"./CartesianGrid-CRP8zG1W.js";import{X as c}from"./XAxis-D03_TvJt.js";import{Y as y}from"./YAxis-BRrjXnEX.js";import{S as h}from"./Scatter-BCrQ0cOH.js";import{E as e}from"./ErrorBar-B5PE-f3F.js";import{T as u}from"./Tooltip-DjzFbfmR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7eCqZJw.js";import"./zIndexSlice-Di849QVt.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Doom015c.js";import"./throttle-DtLWJI8N.js";import"./index-B2PIGALe.js";import"./index-DtvbWEv2.js";import"./axisSelectors-BsfIJIuR.js";import"./polarAxisSelectors-BotG4f4O.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CkXd-iRe.js";import"./index-BfWLl3V2.js";import"./index-DXUCR1Dc.js";import"./renderedTicksSlice-dhqIaxco.js";import"./index-CqjGOWVd.js";import"./fillDefinitions-DFub8wZ3.js";import"./CartesianChart-DrHmlDEh.js";import"./ZIndexPortal-Ccz9Ppdz.js";import"./CategoricalChart-CFpoaktB.js";import"./CartesianAxis-C8zLGICr.js";import"./Layer-CVy-0b4t.js";import"./Text-BJaHuQQc.js";import"./DOMUtils-CJyIN8K_.js";import"./ZIndexLayer-BVWEeopG.js";import"./Label-Cq-EymG9.js";import"./types-j8xWAYxX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-iUgi9C9_.js";import"./activeStyles-f736jV_-.js";import"./useAnimationId-_Q1GlxqN.js";import"./dataEntryStyles-BsghJbw2.js";import"./Curve-6N2VVfLG.js";import"./step-CspGBwNT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DPtGy-7-.js";import"./Symbols-BYB3KgvY.js";import"./symbol-CUYo63-h.js";import"./ActiveShapeUtils-pmXZ3dMD.js";import"./ErrorBarContext-DFT45or-.js";import"./SetGraphicalItem-BQZxwmYP.js";import"./useEffectiveDataKey-DnqAh09W.js";import"./CSSTransitionAnimate-BHBnXCfe.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BCa24z6l.js";import"./uniqBy-CFMexfao.js";import"./iteratee-CvWL5GPd.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CtnF-O9-.js";import"./Rectangle-DeUeWV1w.js";import"./Sector-CMJKZPzq.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
