import{R as r}from"./iframe-DQWQDaPi.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CBU8Kh83.js";import{C as d}from"./CartesianGrid-D2KU4kw2.js";import{X as c}from"./XAxis-BBBhOkeu.js";import{Y as y}from"./YAxis-C2-Mzga3.js";import{S as h}from"./Scatter-HfZQt2oK.js";import{E as e}from"./ErrorBar-C5pnQG1n.js";import{T as u}from"./Tooltip-DfRUmUhQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BYnvhIY5.js";import"./zIndexSlice-DcHJpvAl.js";import"./throttle-BQvRWZqy.js";import"./index-CVzBZnUD.js";import"./index-Boa57nB7.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Booe6JJa.js";import"./isWellBehavedNumber-BYWBnctP.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BkyhQGGW.js";import"./index-CXa1CePB.js";import"./axisSelectors-CuF4kGlO.js";import"./d3-scale-CLTv1Y1c.js";import"./renderedTicksSlice-D0V9j1Gj.js";import"./CartesianChart-DeUhDNtd.js";import"./chartDataContext-BGbsBt_h.js";import"./CategoricalChart-BVqvVrz0.js";import"./CartesianAxis-DrD9H6GX.js";import"./Layer-7j8XoA_H.js";import"./Text-C8i9V0Ud.js";import"./DOMUtils-D6N96cFz.js";import"./Label-DuuyKMi1.js";import"./ZIndexLayer-CfwFYr9r.js";import"./types-D4LIC8ZM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CJF-_HuY.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Brr5wTGw.js";import"./useAnimationId-C7lsUvOa.js";import"./Curve-CR2T-gv2.js";import"./step-C6wof28x.js";import"./path-DyVhHtw_.js";import"./tooltipContext-bs4hkATZ.js";import"./Symbols-BNIDe_iv.js";import"./symbol-DJaGR-_n.js";import"./ActiveShapeUtils-BFafhpNl.js";import"./RegisterGraphicalItemId-DoLIlFOq.js";import"./ErrorBarContext-Ch1rJbNM.js";import"./graphicalItemIdentity-CCnPSphi.js";import"./SetGraphicalItem-rBiZ9Gct.js";import"./CSSTransitionAnimate-sfKb4Iw2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CLIiDdJ8.js";import"./uniqBy-fSK0oXn5.js";import"./iteratee-DdboyrOE.js";import"./Cross-4l8qkIJQ.js";import"./Rectangle-Cj344d-6.js";import"./Sector-CfjfRVeu.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
