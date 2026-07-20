import{R as r}from"./iframe-DSiB0Y2h.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BbSkBjpX.js";import{C as d}from"./CartesianGrid-DhrsCxB3.js";import{X as c}from"./XAxis-DKaEKDyo.js";import{Y as y}from"./YAxis-BvhfxNjy.js";import{S as h}from"./Scatter-DH7Z49Wj.js";import{E as e}from"./ErrorBar-C_E0yGaL.js";import{T as u}from"./Tooltip-D8Llh9Of.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CKOYxrgU.js";import"./zIndexSlice-DXbXK2p0.js";import"./throttle-B3UghvKT.js";import"./index-N88jlccS.js";import"./index-BxYFwyjs.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-dV1CHodA.js";import"./isWellBehavedNumber-CZNGJ9iq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DX0fo1e7.js";import"./index-BwXkalY4.js";import"./renderedTicksSlice-BPUsumAR.js";import"./axisSelectors-m-5JnBq3.js";import"./d3-scale-DOzMXTTX.js";import"./CartesianChart-BjQVh-35.js";import"./chartDataContext-DRuezjZY.js";import"./CategoricalChart-GJIpj0Il.js";import"./CartesianAxis-CTswAcYo.js";import"./Layer-GefPfHKN.js";import"./Text-CK2osH-3.js";import"./DOMUtils-DPI9rQIs.js";import"./Label-SBQmZETs.js";import"./ZIndexLayer-DpR0ZeoC.js";import"./types-Ctc34oVc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DcXITJ0o.js";import"./useAnimationId-CcRzR4wj.js";import"./Curve-CSkrO1uF.js";import"./step-D7_MEDCW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Djjej6CU.js";import"./Symbols-BbTPMx-X.js";import"./symbol-BGQ2Bx4F.js";import"./ActiveShapeUtils-BbSbze6M.js";import"./RegisterGraphicalItemId-ZES9vfqK.js";import"./ErrorBarContext-BQTwLW9q.js";import"./GraphicalItemClipPath-CUbr_GNl.js";import"./SetGraphicalItem-CMw9Vzf1.js";import"./CSSTransitionAnimate-BMlwFXL2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DgOlx547.js";import"./uniqBy-CyF01TCc.js";import"./iteratee-1FMy2Yxx.js";import"./Cross-tJLVE_Wj.js";import"./Rectangle-DI-L60n8.js";import"./Sector-DLgetutF.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
