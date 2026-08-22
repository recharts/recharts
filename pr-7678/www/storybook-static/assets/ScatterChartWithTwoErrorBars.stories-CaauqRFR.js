import{R as r}from"./iframe-ZEpSIPPd.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BFahxiUD.js";import{C as d}from"./CartesianGrid-TMTthCnY.js";import{X as c}from"./XAxis-rWesO0MY.js";import{Y as y}from"./YAxis-DcukXRO0.js";import{S as h}from"./Scatter-Ce50Fus5.js";import{E as e}from"./ErrorBar-CktM3d-Q.js";import{T as u}from"./Tooltip-BXklL5Cj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BN48ENvM.js";import"./zIndexSlice-BjIiWKqJ.js";import"./throttle-c8LVmlRW.js";import"./index-DwRwpWpN.js";import"./index-BYZIueV1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BfzNSowR.js";import"./isWellBehavedNumber-BXmyHjL9.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BaEUmZiD.js";import"./index-GhGxj3CA.js";import"./axisSelectors-kRjPN5q_.js";import"./d3-scale-BCV9yzNX.js";import"./renderedTicksSlice-DKo3nyKY.js";import"./CartesianChart-BcBN8Odf.js";import"./chartDataContext-6sDrIT9e.js";import"./CategoricalChart-DKY1LJu7.js";import"./CartesianAxis-B5C14IH-.js";import"./Layer-BhDP8tdE.js";import"./Text-BkbZubVW.js";import"./DOMUtils-DDyTL2Su.js";import"./useId-DFrG6yke.js";import"./useBackwardsCompatibleTheme-6dZyRN7A.js";import"./Label-DozjEBv8.js";import"./ZIndexLayer-BvS-888Y.js";import"./types-PAtN0CzN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BTDiJp51.js";import"./useAnimationId-DTOSNt54.js";import"./Curve-BJ_Zw60j.js";import"./step-C4QDvCzF.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BI5bZPXd.js";import"./Symbols-DnoOO3kY.js";import"./symbol-MnBIsPmn.js";import"./ActiveShapeUtils-D9QeB7oI.js";import"./RegisterGraphicalItemId-gZSXozCr.js";import"./ErrorBarContext-CVqGi1a9.js";import"./GraphicalItemClipPath-DI_H7WUy.js";import"./SetGraphicalItem-C95qHxIx.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BAjzfK1m.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DQwuldho.js";import"./uniqBy-CJQjOwF2.js";import"./iteratee-9quGMIsm.js";import"./Cross-BCEMcaNt.js";import"./Rectangle-CSNmICnV.js";import"./Sector-DmVcb_8a.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Sr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
