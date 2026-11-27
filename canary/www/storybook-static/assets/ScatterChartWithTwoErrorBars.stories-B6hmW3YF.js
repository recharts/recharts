import{R as r}from"./iframe-BN7wAejV.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CoEv_IBV.js";import{C as d}from"./CartesianGrid-CAMLSwou.js";import{X as c}from"./XAxis-VA1Akzpv.js";import{Y as y}from"./YAxis-LOiiKFb4.js";import{S as h}from"./Scatter-DLz1GRkJ.js";import{E as e}from"./ErrorBar-Cgf_2Fih.js";import{T as u}from"./Tooltip-BFGrTpv-.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BzFY2Xxa.js";import"./zIndexSlice-BlaP7sYq.js";import"./resolveDefaultProps-DnbeteFU.js";import"./get-CjriyByo.js";import"./throttle-OOfctLZP.js";import"./index-D3oSOluz.js";import"./index-BS508S1N.js";import"./axisSelectors-D4jZOjlQ.js";import"./polarAxisSelectors-CchWb7G-.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BuYLSsjs.js";import"./index-CmVxXaJX.js";import"./index-BqsbVcZz.js";import"./renderedTicksSlice-B6C_f0uh.js";import"./index-DyRM39CP.js";import"./fillDefinitions-B689QTZV.js";import"./CartesianChart-D-Ahqv2A.js";import"./chartDataContext-CF2rDhwh.js";import"./CategoricalChart-CD7QHO--.js";import"./CartesianAxis-DWm3W2j1.js";import"./Layer-gDVCcB56.js";import"./Text-_3q1LLJU.js";import"./ZIndexLayer-CB5Di4JM.js";import"./Label-Bpsa1uOU.js";import"./types-B8ZxybVf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CrycyMb5.js";import"./activeStyles-CXY1xJkQ.js";import"./useAnimationId-ClFn0gGk.js";import"./Curve-BFV098yv.js";import"./step-Bv7Zqu-1.js";import"./path-BBMZd4YL.js";import"./tooltipContext-CFdyblI-.js";import"./Symbols-IIZndlP1.js";import"./symbol-C_xR0iSi.js";import"./ActiveShapeUtils-Bz62zvpu.js";import"./ErrorBarContext-eg_EChks.js";import"./SetGraphicalItem-Bzbpd_mD.js";import"./useEffectiveDataKey-Bx0GloUb.js";import"./CSSTransitionAnimate-BYE3cQdx.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-zW88tSra.js";import"./uniqBy-DTQZ_SiU.js";import"./iteratee-DVkTdlvM.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Bd__ghdN.js";import"./Rectangle-MX5du-y3.js";import"./Sector-h9CQ16Nn.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
