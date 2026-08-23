import{R as r}from"./iframe-DjwM0vgm.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-Bewsqj7Y.js";import{C as d}from"./CartesianGrid-BgM_ZnAA.js";import{X as c}from"./XAxis-BZppthUd.js";import{Y as y}from"./YAxis-BzjCo30t.js";import{S as h}from"./Scatter-C-HYFvLG.js";import{E as e}from"./ErrorBar-B4gHaB3Y.js";import{T as u}from"./Tooltip-CLlN6saw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BA3LaKhk.js";import"./zIndexSlice-S6d1Qn7a.js";import"./throttle-CucYyHCR.js";import"./index-D4-5N2-z.js";import"./index-z5DhIgT0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BFL8H9_0.js";import"./isWellBehavedNumber-DYJhUs7I.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DNt860Ln.js";import"./index-DxMXUOIN.js";import"./axisSelectors-BUwM7bTC.js";import"./d3-scale-CwSigEVq.js";import"./renderedTicksSlice-BdL9Tyr5.js";import"./CartesianChart-DqDwVa2A.js";import"./chartDataContext-D_305TZw.js";import"./CategoricalChart-Cq3eseQi.js";import"./CartesianAxis-SmpQZLxS.js";import"./Layer-4XX9ZvT_.js";import"./Text-esJ64cTt.js";import"./DOMUtils-CoSy3vPc.js";import"./useId-C20ArA-J.js";import"./useBackwardsCompatibleTheme-DiGCOcMi.js";import"./Label-DksVCiKj.js";import"./ZIndexLayer-BplzHMbl.js";import"./types-Co4bPNAL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C2ZGCcD3.js";import"./useAnimationId-C_ptHuMP.js";import"./Curve-BULGBxkP.js";import"./step-B9Cib_uB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dw7NaLsl.js";import"./Symbols-CKwf6-MY.js";import"./symbol-DPegDx59.js";import"./ActiveShapeUtils-D8QEGcp-.js";import"./RegisterGraphicalItemId-Bfv8TlvG.js";import"./ErrorBarContext-SnNUtmYc.js";import"./GraphicalItemClipPath-BTc4Rf5I.js";import"./SetGraphicalItem-BH3XWVOo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-CukiLF4z.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CRpgW7vZ.js";import"./uniqBy-p0oDiZgx.js";import"./iteratee-Ci02_5B5.js";import"./Cross-BDdB4vhK.js";import"./Rectangle-Dhvnt00l.js";import"./Sector-BRNZ1tO0.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
