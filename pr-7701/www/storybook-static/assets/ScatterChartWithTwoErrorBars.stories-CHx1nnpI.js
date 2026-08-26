import{R as r}from"./iframe-n1jsfVDG.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-YofMMq3F.js";import{C as d}from"./CartesianGrid-NOg56N8e.js";import{X as c}from"./XAxis-XfJlYZND.js";import{Y as y}from"./YAxis-Bo1-Hgpg.js";import{S as h}from"./Scatter-BOvFm7jQ.js";import{E as e}from"./ErrorBar-DIy6aosN.js";import{T as u}from"./Tooltip-407_u1jn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CtxvIequ.js";import"./zIndexSlice-BRlbTYqB.js";import"./throttle-BndXY2H8.js";import"./index-CgFE3bjK.js";import"./index-WXWaFicj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BAQjLDG_.js";import"./isWellBehavedNumber-51Xh59nn.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-7NZ6PaeE.js";import"./d3-scale-DHoUxLai.js";import"./index-CBp2l__h.js";import"./index-DNYwsh8I.js";import"./renderedTicksSlice-rKTqRgg8.js";import"./index-C2dJWAfM.js";import"./CartesianChart-Dfjy31tx.js";import"./chartDataContext-XRtQdSke.js";import"./CategoricalChart-CYGfKh2e.js";import"./CartesianAxis-9JtcSgtY.js";import"./Layer-CoRWBRFX.js";import"./Text-BwTkl3FB.js";import"./DOMUtils-B7JqCpD5.js";import"./useId-CqUHn1t3.js";import"./useBackwardsCompatibleTheme-BrtymnuF.js";import"./Label-B5dy1Vd6.js";import"./ZIndexLayer-B-b1Mp40.js";import"./types-DxCRAK1R.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CK27PxaM.js";import"./useAnimationId-DmMej8H7.js";import"./Curve-B5xOTs2B.js";import"./step-B7eMn8MW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ODAWykUC.js";import"./Symbols-DdVlzxP8.js";import"./symbol-C33xVuiR.js";import"./ActiveShapeUtils-D8gDtxNc.js";import"./RegisterGraphicalItemId-CfRcyWlO.js";import"./ErrorBarContext-Ba37a78Y.js";import"./GraphicalItemClipPath-COfUJuyE.js";import"./SetGraphicalItem-DGwR4qus.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-klU93BlN.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-ZEcbDPf_.js";import"./uniqBy-BzgSuY-c.js";import"./iteratee-B8fhTNiZ.js";import"./Cross-BzYqCQve.js";import"./Rectangle-CP1iRVSw.js";import"./Sector-m1gBP5km.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
