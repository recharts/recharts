import{R as r}from"./iframe-BMwTDcev.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BaJWJ2yJ.js";import{C as d}from"./CartesianGrid-DqBHGexO.js";import{X as c}from"./XAxis-7lt7L-uw.js";import{Y as y}from"./YAxis-CCCDM9CF.js";import{S as h}from"./Scatter-BEgqnjS0.js";import{E as e}from"./ErrorBar-CHjYJ3SM.js";import{T as u}from"./Tooltip-wlKbbwbE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRX6xo6C.js";import"./zIndexSlice-CPh4fBg6.js";import"./throttle-D2Td0Lm2.js";import"./index-CE-0bGiS.js";import"./index-3001YAOl.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DPnbdQu5.js";import"./isWellBehavedNumber-BJdFuSyd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ya5mjY_f.js";import"./index-CVc-PuqQ.js";import"./renderedTicksSlice-Co-nhFmz.js";import"./axisSelectors-sdy2ioo_.js";import"./d3-scale-Dl0VFgtV.js";import"./CartesianChart-BteRC4rl.js";import"./chartDataContext-CXqd6BGE.js";import"./CategoricalChart-CdHUt0U8.js";import"./CartesianAxis-DZkRw9Hy.js";import"./Layer-DhxEcDzW.js";import"./Text-JRu-Gvgm.js";import"./DOMUtils-BEqLO6hC.js";import"./Label-nIa50DhA.js";import"./ZIndexLayer-BzcpQumx.js";import"./types-zXcSMCPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BgUudFYn.js";import"./useAnimationId-CiOVdLQp.js";import"./Curve-DSVLafFk.js";import"./step-BkUkyWe_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C32om4rY.js";import"./Symbols-CTn4qtz4.js";import"./symbol-Dy07bA17.js";import"./ActiveShapeUtils-BPh2ccfV.js";import"./RegisterGraphicalItemId-B8C7xs2e.js";import"./ErrorBarContext-DgB1iysu.js";import"./GraphicalItemClipPath-C1lbmTQ1.js";import"./SetGraphicalItem-D1eQX8Ui.js";import"./CSSTransitionAnimate-BWKLQxL_.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CtkGwEHZ.js";import"./uniqBy-pyVWw1j2.js";import"./iteratee-CJeFQgUm.js";import"./Cross-DHXtJImm.js";import"./Rectangle-By_LjXZY.js";import"./Sector-p7PlKC-2.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
