import{R as r}from"./iframe-Bzk7zQca.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Mhay4oN7.js";import{C as d}from"./CartesianGrid-BHeOec6y.js";import{X as c}from"./XAxis-BwFTdCod.js";import{Y as y}from"./YAxis-SS3sg1KC.js";import{S as h}from"./Scatter-BTq8aUxK.js";import{E as e}from"./ErrorBar-C1u_snfv.js";import{T as u}from"./Tooltip-eenNtxQb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DcMBMMpz.js";import"./zIndexSlice-CmFEWq1r.js";import"./immer-CcXYFoUI.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./get-CihDQax7.js";import"./resolveDefaultProps-CJmyog69.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./CartesianAxis-BuH3LaY7.js";import"./Layer-C58in0aX.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./Label-CTPsCXr1.js";import"./ZIndexLayer-DxzvrsVM.js";import"./types-BYFlfVWD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Bm1dVVre.js";import"./useAnimationId-3u1Yr1gs.js";import"./Curve-QDW-Shr1.js";import"./step-BsT6z54w.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Ccz7S-_U.js";import"./Symbols-iwAfdcfd.js";import"./symbol-BjkRgUq5.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./CSSTransitionAnimate-GoNzELHX.js";import"./useElementOffset-C3YrErby.js";import"./uniqBy-20cDpXHs.js";import"./iteratee-BHx8gBfP.js";import"./Cross-D4MdnFGN.js";import"./Rectangle-CDk6Iz6Z.js";import"./Sector-DHvxyLBb.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
