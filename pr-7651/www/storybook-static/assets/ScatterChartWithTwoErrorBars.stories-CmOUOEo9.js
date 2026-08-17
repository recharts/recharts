import{R as r}from"./iframe-gJmHOoV1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BC6uwa90.js";import{C as d}from"./CartesianGrid-VJceqVLi.js";import{X as c}from"./XAxis-CL1K5HKB.js";import{Y as y}from"./YAxis-BZbOJGmt.js";import{S as h}from"./Scatter-DpNqXehY.js";import{E as e}from"./ErrorBar-Bf4YBFiL.js";import{T as u}from"./Tooltip-jUMNHplV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-uLgma0gs.js";import"./zIndexSlice-SLldW8vD.js";import"./throttle-C0HH0ZDc.js";import"./index-BdFJZkPY.js";import"./index-DNgAqdgl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-EuD2qw6Y.js";import"./isWellBehavedNumber-C4nB07Ky.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D2MlSgDp.js";import"./index-_1fsdksf.js";import"./axisSelectors-BbNLjq-V.js";import"./d3-scale-SCvl-fAD.js";import"./renderedTicksSlice-DkFdVLqh.js";import"./CartesianChart-B3NOhLAb.js";import"./chartDataContext-Btj7Fomq.js";import"./CategoricalChart-Bdw8EORd.js";import"./CartesianAxis-Byci1LgV.js";import"./Layer-DMyVzZAK.js";import"./Text-BFMrUcgU.js";import"./DOMUtils-DoteccEu.js";import"./useBackwardsCompatibleTheme-t9HOmvr9.js";import"./Label-BW3VHSxT.js";import"./ZIndexLayer-Cs9adZB_.js";import"./types-BsPCKB2-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DO16LAh4.js";import"./useAnimationId-BPNuV2bD.js";import"./Curve-Dowet-ta.js";import"./step-LqTLA14X.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BZ1i1qvi.js";import"./Symbols-z9xxGOoR.js";import"./symbol-CISepo4K.js";import"./ActiveShapeUtils-D-WSdclC.js";import"./RegisterGraphicalItemId-ClU1Ba2D.js";import"./ErrorBarContext-Dv7pLviF.js";import"./GraphicalItemClipPath-C8fMELX2.js";import"./SetGraphicalItem-BuXSQ0wS.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BTt5nMgY.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Y-qWOeHt.js";import"./uniqBy-BvB2bptq.js";import"./iteratee-JebvSegM.js";import"./Cross-KBxHvz6V.js";import"./Rectangle-CbNU9WCQ.js";import"./Sector-xoH5dnsu.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
