import{R as r}from"./iframe-DwwIEbnV.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CIAt8eaf.js";import{C as d}from"./CartesianGrid-BIHoZcmB.js";import{X as c}from"./XAxis-Cz_Rnhgj.js";import{Y as y}from"./YAxis-Bawx2GP2.js";import{S as h}from"./Scatter-DDRTIDlE.js";import{E as e}from"./ErrorBar-Bm3HrYWr.js";import{T as u}from"./Tooltip-DVs9hVjY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BuqxCVgz.js";import"./zIndexSlice-CQLOtaPs.js";import"./throttle-Blsl_VHV.js";import"./index-8KuM36sP.js";import"./index-DybJUNaL.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAdQSn8_.js";import"./isWellBehavedNumber-8UixZU7J.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Cxc5coFg.js";import"./d3-scale-DUeQ8AUA.js";import"./index-DnZ0PMCs.js";import"./index-Dy8lu7uT.js";import"./renderedTicksSlice-COQyRYk9.js";import"./index-DEjMF1lf.js";import"./CartesianChart-CyJUqNIj.js";import"./chartDataContext-UFw-Jz6V.js";import"./CategoricalChart-COFTchkj.js";import"./CartesianAxis-Duh3rzkN.js";import"./Layer-6Fp4VzoQ.js";import"./Text-CoeOXdGz.js";import"./DOMUtils-Da_EKwNY.js";import"./useId-ccy3SIu_.js";import"./useBackwardsCompatibleTheme-Fn2SpsbR.js";import"./Label-BBU3iKAi.js";import"./ZIndexLayer-B_JcFefp.js";import"./types-DYVbiWe3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Ds3KeOI2.js";import"./useAnimationId-Cx0Chyvr.js";import"./Curve-DrEaRkOl.js";import"./step-CWAHA4V_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BYzhs__g.js";import"./Symbols-DsOsjkXy.js";import"./symbol-DyMqDs2V.js";import"./ActiveShapeUtils-D4ijpv1W.js";import"./RegisterGraphicalItemId-BM_5HpC8.js";import"./ErrorBarContext-BgIeQnXJ.js";import"./GraphicalItemClipPath-CajkPYvX.js";import"./SetGraphicalItem-jtaJvjxx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CIa_ISHC.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CXNuRQTj.js";import"./uniqBy-BnkYei7v.js";import"./iteratee-CU8R_nxk.js";import"./Cross-DSpczqE0.js";import"./Rectangle-CGZsEs1f.js";import"./Sector-B3F8CCU3.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
