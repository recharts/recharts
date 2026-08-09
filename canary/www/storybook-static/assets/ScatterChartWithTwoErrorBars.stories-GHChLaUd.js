import{R as r}from"./iframe-CRyknHcV.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BlkK0aba.js";import{C as d}from"./CartesianGrid-UsVPemXH.js";import{X as c}from"./XAxis-CQvMjduc.js";import{Y as y}from"./YAxis-DKnjJQyk.js";import{S as h}from"./Scatter-n0tmKj3G.js";import{E as e}from"./ErrorBar-DrzKQ6Ui.js";import{T as u}from"./Tooltip-DJwNP3Cy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BtW47C_U.js";import"./zIndexSlice-D94J06pN.js";import"./throttle-CdnYcrez.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./axisSelectors-HI2cMDW5.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./CartesianAxis-Czm-DLiC.js";import"./Layer-tFywX8jB.js";import"./Text-AosieIGC.js";import"./DOMUtils-DDmVxA4T.js";import"./Label-Bb81vEf3.js";import"./ZIndexLayer-CO71XxiU.js";import"./types-CgTXGcnU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DuJcIC8o.js";import"./useAnimationId-B3genVAW.js";import"./Curve-Cx7OO1Tc.js";import"./step-CoZJp4zn.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DaicPEXJ.js";import"./Symbols-CzYfCG8Y.js";import"./symbol-BGzG6k2R.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BLk3Mqy2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";import"./Cross-dQK9qAfq.js";import"./Rectangle-C7u2937O.js";import"./Sector-2l4dxI6m.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
