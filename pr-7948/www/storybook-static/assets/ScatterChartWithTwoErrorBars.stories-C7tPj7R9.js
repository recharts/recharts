import{R as r}from"./iframe-Z4zOoLz7.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-D3plYqQ4.js";import{C as d}from"./CartesianGrid-CoLshd-b.js";import{X as c}from"./XAxis-vC51wnfX.js";import{Y as y}from"./YAxis-DcaBIqq9.js";import{S as h}from"./Scatter-COJMeu5q.js";import{E as e}from"./ErrorBar-CuCmbZin.js";import{T as u}from"./Tooltip-BQCBXkHh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B6jGY5P2.js";import"./zIndexSlice-07-9uDTC.js";import"./throttle-9WzIUwC-.js";import"./index-DyaBjL-T.js";import"./index-xqTHFQSV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DOQLwwUl.js";import"./isWellBehavedNumber-Ds32fXh1.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-D5RAwviA.js";import"./d3-scale-By1WrWdl.js";import"./index-DNpJ-y1s.js";import"./index-DU7fosbq.js";import"./renderedTicksSlice-XpkPmQP6.js";import"./index-YATDX38S.js";import"./CartesianChart-r7CDK1kg.js";import"./chartDataContext-B0vVK4FP.js";import"./CategoricalChart-D5-WelqS.js";import"./CartesianAxis-D0qgtLuE.js";import"./Layer-DROZCM5S.js";import"./Text-D1NXAhAr.js";import"./pageBackground-cgE2GIfC.js";import"./useId-d3zx3clY.js";import"./useBackwardsCompatibleTheme-DoS7t3mQ.js";import"./Label-CznRo0qq.js";import"./ZIndexLayer-CzgpVDV6.js";import"./types-BIzeqQN_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Clj_q_02.js";import"./useAnimationId-CclGmA5U.js";import"./dataEntryStyles-jPYjF1-F.js";import"./Curve-B2kFPXHR.js";import"./step-Bz8uLEg2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-LCXgX3C4.js";import"./Symbols--vCw1LR_.js";import"./symbol-bhdOsLww.js";import"./ActiveShapeUtils-DptdzhMF.js";import"./ErrorBarContext-DyrSqIsA.js";import"./GraphicalItemClipPath-Dh8t0UHl.js";import"./SetGraphicalItem-D_Y4scs-.js";import"./useGraphicalItemIdentity-Bz_dea2_.js";import"./CSSTransitionAnimate-gqAcXkhE.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-S6uYAEYX.js";import"./uniqBy-D7Oablgk.js";import"./iteratee-BmQxJUF4.js";import"./Cross-Cs-2djo7.js";import"./Rectangle-BRzNxGc4.js";import"./Sector-CO7Pa82d.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
