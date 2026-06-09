import{R as r}from"./iframe-DDZvWz04.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-B0SBw6f4.js";import{C as d}from"./CartesianGrid-BOvGQ8vv.js";import{X as c}from"./XAxis-Dq8ay66-.js";import{Y as y}from"./YAxis-DzAaZg6g.js";import{S as h}from"./Scatter-CIVuH1n2.js";import{E as e}from"./ErrorBar-CrfAQUCv.js";import{T as u}from"./Tooltip-BiO0tLvP.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BgX57Ihb.js";import"./zIndexSlice-Dl_4acsk.js";import"./immer-DcmssRfV.js";import"./index-DmZKUkji.js";import"./index-BmsWrTVR.js";import"./get-Dd2obrAg.js";import"./resolveDefaultProps-BL5_8bl7.js";import"./isWellBehavedNumber-BqwSOCro.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DdYDVMgh.js";import"./index-DEl5rper.js";import"./renderedTicksSlice-D1_yHzJs.js";import"./axisSelectors-M3yg6AJ9.js";import"./d3-scale-BmewetN_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C1c9k30X.js";import"./chartDataContext-hTPBvtpR.js";import"./CategoricalChart-DTcOD6T5.js";import"./CartesianAxis-CHHSHG1a.js";import"./Layer-C4SWy0Ia.js";import"./Text-dGyvvmq0.js";import"./DOMUtils-EJWG7PRQ.js";import"./Label-Cyb3kyRK.js";import"./ZIndexLayer-Dxkr3Ydq.js";import"./types-Du07Jl7S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DJruvPbG.js";import"./useAnimationId-CXggq5FE.js";import"./Curve-sIzeAZHK.js";import"./step-BEPub2ZD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bgus1cP3.js";import"./Symbols-BSDqJxCz.js";import"./symbol-BBNja1gb.js";import"./ActiveShapeUtils-C9HYZ7qc.js";import"./RegisterGraphicalItemId-CPL9aXD0.js";import"./ErrorBarContext-BYuEjy_F.js";import"./GraphicalItemClipPath-1JKRh9Qz.js";import"./SetGraphicalItem-DQRf2yyu.js";import"./CSSTransitionAnimate-BAr1rRSw.js";import"./useElementOffset-CUIuFj27.js";import"./uniqBy-aPqG2Rlh.js";import"./iteratee-hWa_REQK.js";import"./Cross-B9Z2IOcq.js";import"./Rectangle-C7Fz1mfx.js";import"./Sector-yTNUroLz.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
