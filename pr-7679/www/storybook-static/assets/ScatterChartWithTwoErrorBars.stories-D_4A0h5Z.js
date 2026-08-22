import{R as r}from"./iframe-DXHKQ-h8.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BlhzH90E.js";import{C as d}from"./CartesianGrid-BA8c7MHT.js";import{X as c}from"./XAxis-Ckl7Pa3u.js";import{Y as y}from"./YAxis-BhGHb5Me.js";import{S as h}from"./Scatter-DEKm9tHj.js";import{E as e}from"./ErrorBar-CyyMeT3_.js";import{T as u}from"./Tooltip-CaMm8fLh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-NUOxXBTc.js";import"./zIndexSlice-CsQg_s5y.js";import"./throttle-CSmQrAIR.js";import"./index-BoMz0vXG.js";import"./index-Bfb_F_qW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CH3DJ1U7.js";import"./isWellBehavedNumber-B2OYT9p4.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D51whMVe.js";import"./index-DQazPbcg.js";import"./axisSelectors-C2FhXeDp.js";import"./d3-scale-x1kkipsN.js";import"./renderedTicksSlice-B6yr5Yhh.js";import"./CartesianChart-BAA2O-Wi.js";import"./chartDataContext-Co2nG42J.js";import"./CategoricalChart-njav6Y1l.js";import"./CartesianAxis-eQGKlaa2.js";import"./Layer-D8Of9gCi.js";import"./Text-Bb1JrkH_.js";import"./DOMUtils-BSgnm9w6.js";import"./useId-DlJk-nhm.js";import"./useBackwardsCompatibleTheme-DuqY5Wqi.js";import"./Label-BCe67yO0.js";import"./ZIndexLayer-DLuwldtV.js";import"./types-C9KPOeuA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BnmUd_N9.js";import"./useAnimationId-WfbS1c84.js";import"./Curve-CiIvzF30.js";import"./step-Bw_C9qgc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ChXEFAAD.js";import"./Symbols-sS9GnGcd.js";import"./symbol-Be4yaci6.js";import"./ActiveShapeUtils-C_tGIq0b.js";import"./RegisterGraphicalItemId-B_2bGmJg.js";import"./ErrorBarContext-CdeH4fn3.js";import"./GraphicalItemClipPath-BZQLFBTi.js";import"./SetGraphicalItem-CODvRDn4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-VubfryI6.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CgmBroAF.js";import"./uniqBy-iZsqe27X.js";import"./iteratee-BWIQYiSv.js";import"./Cross-CKDUda6N.js";import"./Rectangle-CKUxhVqo.js";import"./Sector-CDqnRj6s.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
