import{R as r}from"./iframe-BNn_UWWx.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C4k59lTK.js";import{C as d}from"./CartesianGrid-DbZp0pXH.js";import{X as c}from"./XAxis-DzOTQwY3.js";import{Y as y}from"./YAxis-BcmUZyL1.js";import{S as h}from"./Scatter-IcCe4nF-.js";import{E as e}from"./ErrorBar-BYDwL7tB.js";import{T as u}from"./Tooltip-Df9xmlZA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CWGaw5tQ.js";import"./zIndexSlice-DE7GeAH-.js";import"./throttle-Dubphbjd.js";import"./index-Bj9l6yop.js";import"./index-D_0E2Dfj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BEtD5DPC.js";import"./isWellBehavedNumber-BKaWcWBZ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DbExzsUk.js";import"./index-C_8szxEx.js";import"./renderedTicksSlice-CR8grWP_.js";import"./axisSelectors-C-S7b24Y.js";import"./d3-scale-Dfsy3Tmh.js";import"./CartesianChart-CP3XnrfD.js";import"./chartDataContext-rNOOEU-v.js";import"./CategoricalChart-DKj_eLFg.js";import"./CartesianAxis-DOE8j2mB.js";import"./Layer-C9Gg67SI.js";import"./Text-BkqgwmxZ.js";import"./DOMUtils-kgC6vmME.js";import"./Label-BR5BCwPX.js";import"./ZIndexLayer-DbGeHIXa.js";import"./types-BuPE8SUX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-MW3Vir6H.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DzsSkQFR.js";import"./useAnimationId-DDbhsfXp.js";import"./Curve-B398d6Gz.js";import"./step-1QEEOZnW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BbMYp3dy.js";import"./Symbols-DdqJjdJl.js";import"./symbol-duGx-9jG.js";import"./ActiveShapeUtils-w8zJ4JkR.js";import"./RegisterGraphicalItemId-BNqd9LzC.js";import"./ErrorBarContext-D8VbAhOk.js";import"./GraphicalItemClipPath-n0yD8gXz.js";import"./SetGraphicalItem-DKdZ-jRK.js";import"./CSSTransitionAnimate-C3wCaBWo.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-P4rP0RLr.js";import"./uniqBy-D-I4fNAI.js";import"./iteratee-DsQTe1TT.js";import"./Cross-BSR1dAMZ.js";import"./Rectangle-BIKDq1_W.js";import"./Sector-BM4nRum4.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
