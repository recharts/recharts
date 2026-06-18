import{R as r}from"./iframe-BBGBS6DV.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CTdds1rR.js";import{C as d}from"./CartesianGrid-CMWgKooE.js";import{X as c}from"./XAxis-CMxF0Wjl.js";import{Y as y}from"./YAxis-DsrpZZjl.js";import{S as h}from"./Scatter-7gJCN8HQ.js";import{E as e}from"./ErrorBar-P_Aol3q9.js";import{T as u}from"./Tooltip-CDVrlBj3.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CZVIAxqy.js";import"./zIndexSlice-C7go6sDc.js";import"./immer-u2-xWsf6.js";import"./index-sfHPztcf.js";import"./index-BfdY1IDa.js";import"./get-BV7Nc0IZ.js";import"./resolveDefaultProps-CdaEo1sJ.js";import"./isWellBehavedNumber-DqttSiMx.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CLfBpOwp.js";import"./index-Bl5evuWS.js";import"./renderedTicksSlice-DeFm9vmM.js";import"./axisSelectors-DUU6Ovr8.js";import"./d3-scale-Ceq_dgL5.js";import"./string-B6fdYHAA.js";import"./CartesianChart-8bJyHLLZ.js";import"./chartDataContext-6hP0GYiP.js";import"./CategoricalChart-BNe26d_a.js";import"./CartesianAxis-DBDeoTme.js";import"./Layer-C7b9GhMV.js";import"./Text-CCZTp9OW.js";import"./DOMUtils-Da1klpxA.js";import"./Label-Iqg4BS5e.js";import"./ZIndexLayer-WmfwTIzB.js";import"./types-Bj7fEVXg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-alz79Juh.js";import"./useAnimationId-CCG8jh7R.js";import"./Curve-D7BUefvS.js";import"./step-Deq8dNp2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DwcJ1qdw.js";import"./Symbols-RhqujVO2.js";import"./symbol-BVubqoOw.js";import"./ActiveShapeUtils-NLKbpFnA.js";import"./RegisterGraphicalItemId-B9dZ270Y.js";import"./ErrorBarContext-BeUQIIOs.js";import"./GraphicalItemClipPath-CkBiEPpf.js";import"./SetGraphicalItem-QS7NgdyV.js";import"./CSSTransitionAnimate-BG-j2fSt.js";import"./useElementOffset-BG_pV8kB.js";import"./uniqBy-Bo0b8aJc.js";import"./iteratee-BBXnt8_Z.js";import"./Cross-BcF5M0Gn.js";import"./Rectangle-EzzDeVF8.js";import"./Sector-DZ74VsoL.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
