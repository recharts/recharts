import{R as r}from"./iframe-CThZUbdE.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BMjAPAM4.js";import{C as d}from"./CartesianGrid-CxJg4bzA.js";import{X as c}from"./XAxis-Czxsq92a.js";import{Y as y}from"./YAxis-COnF85r4.js";import{S as h}from"./Scatter-C_sFnSnx.js";import{E as e}from"./ErrorBar-DVYRCZ8x.js";import{T as u}from"./Tooltip-CsO-9NI5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dh_6CvsG.js";import"./zIndexSlice-BDry6QRp.js";import"./immer-6NPp0ZGq.js";import"./index-BrV4JukO.js";import"./index-uduL6A8n.js";import"./get-VHoxVJrE.js";import"./resolveDefaultProps-CLr4xBR_.js";import"./isWellBehavedNumber-DrJ1JLjW.js";import"./PolarUtils-CTnnDHZv.js";import"./index-vpoK7Ps1.js";import"./index-B32OlRwA.js";import"./renderedTicksSlice-aJkWvwrp.js";import"./axisSelectors-nng6Kbok.js";import"./d3-scale-GyQF8VSi.js";import"./CartesianChart-CnPFeSiy.js";import"./chartDataContext-Bvn2U6wJ.js";import"./CategoricalChart-DpMx8cAV.js";import"./CartesianAxis-BM-bncSs.js";import"./Layer-C1XMVqEx.js";import"./Text-CWNe3a9o.js";import"./DOMUtils-Dd4kG65v.js";import"./Label-CE0t5kQZ.js";import"./ZIndexLayer-LL2CdfOc.js";import"./types-BBvrAdrd.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-PV5URjHV.js";import"./useAnimationId-DzTn0J9i.js";import"./Curve-CddvI1GC.js";import"./step-B0et1XJ2.js";import"./path-DyVhHtw_.js";import"./tooltipContext-pa2zo_xo.js";import"./Symbols-DOMkQYi1.js";import"./symbol-DhevQ36Y.js";import"./ActiveShapeUtils-llZbJ7MK.js";import"./RegisterGraphicalItemId-C0Zw2Zrk.js";import"./ErrorBarContext-D77zIOkm.js";import"./GraphicalItemClipPath-ClxBFvMa.js";import"./SetGraphicalItem-CSrXN1n2.js";import"./CSSTransitionAnimate-Cltl_etM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-I2abokvN.js";import"./uniqBy-CWUL-oIl.js";import"./iteratee-BoWDAhHy.js";import"./Cross-DlMz8kY1.js";import"./Rectangle-Czan5czn.js";import"./Sector-CjB2oaaR.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
