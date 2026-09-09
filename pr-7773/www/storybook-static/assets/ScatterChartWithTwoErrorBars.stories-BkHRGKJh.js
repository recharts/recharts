import{R as r}from"./iframe-BkVFpUlY.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-0MYmAWUz.js";import{C as d}from"./CartesianGrid-le4hu2Up.js";import{X as c}from"./XAxis-DKVVz-sZ.js";import{Y as y}from"./YAxis-ydoiCG45.js";import{S as h}from"./Scatter-CoBynQvp.js";import{E as e}from"./ErrorBar-ChJB510y.js";import{T as u}from"./Tooltip-DccnUyf0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-odbOlBoE.js";import"./zIndexSlice-DsJvGkf_.js";import"./throttle-BmqzJcEu.js";import"./index-0hsVYWu6.js";import"./index-DymoF_97.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BteSFwB2.js";import"./isWellBehavedNumber-CfBMT12P.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B50PWx2F.js";import"./d3-scale-DYQ4LMXq.js";import"./index-Q5aHXVFQ.js";import"./index-YkbYvVvq.js";import"./renderedTicksSlice-CwTU9gZs.js";import"./index-DUxWWrkZ.js";import"./CartesianChart-CqMhYxBy.js";import"./chartDataContext-VrlvbsLo.js";import"./CategoricalChart-CzfSjKl0.js";import"./CartesianAxis-CKyL8NSQ.js";import"./Layer-DQ1QN6bj.js";import"./Text-BIwedGTb.js";import"./DOMUtils-BcDWMqtm.js";import"./useId-Cugd2wLY.js";import"./useBackwardsCompatibleTheme-bP9OoM6q.js";import"./Label-Cg9XptP0.js";import"./ZIndexLayer-CfoAs0yr.js";import"./types-CKn4wQG_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BpowKEth.js";import"./useAnimationId-Bk6mcJf6.js";import"./Curve-j6CNmiH0.js";import"./step-BxPdVPhz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-fcW-xcg3.js";import"./Symbols-B3HUvLyw.js";import"./symbol-DQsNkJaP.js";import"./ActiveShapeUtils-BSJyn28s.js";import"./RegisterGraphicalItemId-C4Vmg6Ny.js";import"./ErrorBarContext-BYIQqhKW.js";import"./GraphicalItemClipPath-KjuHWuk-.js";import"./SetGraphicalItem-BGmRK6gI.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DOyYK7tQ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CXmZJxz2.js";import"./uniqBy-CqDyWSTv.js";import"./iteratee-CmG9r8ck.js";import"./Cross-sNUSYXkO.js";import"./Rectangle-Cy_w7-0b.js";import"./Sector-ChGJ4nNP.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
