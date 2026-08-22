import{R as r}from"./iframe-oJEYIYVD.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-C-QEfhM6.js";import{C as d}from"./CartesianGrid-Cmm1K-Qj.js";import{X as c}from"./XAxis-BGcEKdMP.js";import{Y as y}from"./YAxis-D5BvcVb4.js";import{S as h}from"./Scatter-BoCZsx99.js";import{E as e}from"./ErrorBar-DWq9ruRM.js";import{T as u}from"./Tooltip-Bmdbz3Gw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ENwYgfgF.js";import"./zIndexSlice-8Xd9ui4v.js";import"./throttle-DQw_TB4k.js";import"./index-1WCRhzzt.js";import"./index-9lHgIK0X.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DHMesOBd.js";import"./isWellBehavedNumber-BUWW9YlW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DPJLoqId.js";import"./index-CoIOggcU.js";import"./axisSelectors-CsLlIDAD.js";import"./d3-scale-DB3cJCiA.js";import"./renderedTicksSlice-DU_GMzWX.js";import"./CartesianChart-C-gtXtO6.js";import"./chartDataContext-BNgKqfWM.js";import"./CategoricalChart-DFXPtrpT.js";import"./CartesianAxis-C0z7V-tm.js";import"./Layer-BCc9Twjs.js";import"./Text-CtBEPsPC.js";import"./DOMUtils-Cf8xbxEH.js";import"./useId-CMdQMiLi.js";import"./useBackwardsCompatibleTheme-DXWZN45A.js";import"./Label-BAH99IO9.js";import"./ZIndexLayer-Cvj5uv_m.js";import"./types-qn8KP6HN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-bvrA4fOd.js";import"./useAnimationId-Cuwuz8F4.js";import"./Curve-Cdxa9GvD.js";import"./step-DIL1YdEp.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BxtUFVO6.js";import"./Symbols-DAJOdbyV.js";import"./symbol-C0LB-xh7.js";import"./ActiveShapeUtils-YLbAgrLf.js";import"./RegisterGraphicalItemId-BktobOXw.js";import"./ErrorBarContext-BeupN1xy.js";import"./GraphicalItemClipPath-DsG6iHd1.js";import"./SetGraphicalItem-C8Wpyevh.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-DyFzK4Vl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-0qwWTu7f.js";import"./uniqBy-2i4DD0Ye.js";import"./iteratee-D6e9wFia.js";import"./Cross--l7B6tS8.js";import"./Rectangle-6_rBacYy.js";import"./Sector-diTN-Rh0.js";const Ar={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
