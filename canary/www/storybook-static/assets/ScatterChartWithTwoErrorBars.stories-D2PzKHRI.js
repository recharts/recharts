import{R as r}from"./iframe-CwAvad--.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DyvYQuFh.js";import{C as d}from"./CartesianGrid-DllQ9z3q.js";import{X as c}from"./XAxis-BvogKVrk.js";import{Y as y}from"./YAxis-MJLPmDW2.js";import{S as h}from"./Scatter-BFRCDM92.js";import{E as e}from"./ErrorBar-DBuBA59O.js";import{T as u}from"./Tooltip-Bt4YXD2U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./zIndexSlice-B2fpzDns.js";import"./throttle-CrTklCSM.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-IMOML7UF.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./renderedTicksSlice-DxVowf0r.js";import"./axisSelectors-gPKIePgu.js";import"./d3-scale-D8xH9yG8.js";import"./CartesianChart-DnHhaR9q.js";import"./chartDataContext-QAMmb-FO.js";import"./CategoricalChart-Bfs9hS_5.js";import"./CartesianAxis-Bp0BWyNg.js";import"./Layer-DrEfcBvU.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./Label-Bfni9WDi.js";import"./ZIndexLayer-nfC8QR9T.js";import"./types-MLS83tAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-ChIe5_bS.js";import"./useAnimationId--5AtISHD.js";import"./Curve-D0-SKbNI.js";import"./step-2IVSrnG4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dk_76_YD.js";import"./Symbols-Gg7Vpfem.js";import"./symbol-BMZOsAHr.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./ErrorBarContext-CChsqgpp.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";import"./CSSTransitionAnimate-CNn3PHb5.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cg3HrgTI.js";import"./uniqBy-BQQiLG87.js";import"./iteratee-A6arNK9y.js";import"./Cross-Du1c2uqK.js";import"./Rectangle-CDEEKCGc.js";import"./Sector-6KETZnCF.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
