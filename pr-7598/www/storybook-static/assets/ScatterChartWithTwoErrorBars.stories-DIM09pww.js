import{R as r}from"./iframe-CWA9dL1n.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BGmxLHub.js";import{C as d}from"./CartesianGrid-DQYoQUoz.js";import{X as c}from"./XAxis-DeVvUZ6V.js";import{Y as y}from"./YAxis-Crip943s.js";import{S as h}from"./Scatter-w8wlg6mw.js";import{E as e}from"./ErrorBar-DEiEKhDC.js";import{T as u}from"./Tooltip-yr7yLNs2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CId5I6PX.js";import"./zIndexSlice-aQmFZxtc.js";import"./throttle-CO5aCb3a.js";import"./index-B9WDmcBs.js";import"./index-D3IuHkaK.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-3gLKwpWY.js";import"./isWellBehavedNumber-Bm4ocvOr.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C7DdHlxQ.js";import"./index-BzvjS6S7.js";import"./renderedTicksSlice-C0LhBYgl.js";import"./axisSelectors-kDLbJQaY.js";import"./d3-scale-CcIRMvmh.js";import"./CartesianChart-CjycZaTM.js";import"./chartDataContext-B92OI4-S.js";import"./CategoricalChart-19SPVwUn.js";import"./CartesianAxis-TOCYRN01.js";import"./Layer-DdfHe4zJ.js";import"./Text-B5gv-Qby.js";import"./DOMUtils-h2leYdBT.js";import"./Label-Ci3V9in7.js";import"./ZIndexLayer-DQgxZgR-.js";import"./types-Dm1l0pKT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-PN0Sf9X-.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-4dsj7PS2.js";import"./useAnimationId-BfVlpqgG.js";import"./Curve-Cpe2XzR8.js";import"./step-DXLtdr_A.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bfz9ab30.js";import"./Symbols-CS3q9FMu.js";import"./symbol-DpU8AU8u.js";import"./ActiveShapeUtils-cijm59wq.js";import"./RegisterGraphicalItemId-BY6CqeJu.js";import"./ErrorBarContext-CsfUMbkm.js";import"./GraphicalItemClipPath-CNA6w-35.js";import"./SetGraphicalItem-iurO2H6w.js";import"./CSSTransitionAnimate-BiWk0moF.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DEgQPazE.js";import"./uniqBy-Cq9W0uGc.js";import"./iteratee-DihBNj6d.js";import"./Cross-Ci5XozZ6.js";import"./Rectangle-mWWl0VjI.js";import"./Sector-BnY7o6rE.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
