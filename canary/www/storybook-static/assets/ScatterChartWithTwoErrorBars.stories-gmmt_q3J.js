import{R as r}from"./iframe-C-Iuj2CY.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-gzlF2SOy.js";import{C as d}from"./CartesianGrid-Bmqlh-9x.js";import{X as c}from"./XAxis-d6u4l33E.js";import{Y as y}from"./YAxis-CH97-ORP.js";import{S as h}from"./Scatter-CIm1c_na.js";import{E as e}from"./ErrorBar-5kdpKFkb.js";import{T as u}from"./Tooltip-CW5xIaKg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-7_EuFQF-.js";import"./zIndexSlice-C4JSr5KN.js";import"./throttle-Bp4liTDw.js";import"./index-BYGjDTj5.js";import"./index-CKdK4Tlm.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DL7WVnFH.js";import"./isWellBehavedNumber-Ku-m6vnz.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BMEelndQ.js";import"./d3-scale-C4GnCzHc.js";import"./index-C4z0ADpB.js";import"./index-8RkzDuen.js";import"./renderedTicksSlice-Cor1xeVL.js";import"./index-DFGRvPnn.js";import"./CartesianChart-BAWmemtm.js";import"./chartDataContext-oGc_LYLd.js";import"./CategoricalChart-CSHLIlSH.js";import"./CartesianAxis-kD5DlR3-.js";import"./Layer-CTC_B_AO.js";import"./Text-CuFXobZ8.js";import"./DOMUtils-D1JEdLYA.js";import"./useId-DB-RDK5Y.js";import"./useBackwardsCompatibleTheme-CO0ZmmTO.js";import"./Label-BQbGJ4sW.js";import"./ZIndexLayer-ChUJUaqX.js";import"./types-DTCaWYmj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BJhHPNtS.js";import"./useAnimationId-Cs7J9c_D.js";import"./Curve-A3JiVHPQ.js";import"./step-CDAaK65-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BmT7uc0P.js";import"./Symbols-CkEXkoTn.js";import"./symbol-l9rlzWv-.js";import"./ActiveShapeUtils-DE2-A3Sf.js";import"./RegisterGraphicalItemId-C_gzfzaw.js";import"./ErrorBarContext-LN9zzfth.js";import"./GraphicalItemClipPath-D1JmIf9k.js";import"./SetGraphicalItem-CVWA9VpP.js";import"./useGraphicalItemIdentity-_eCurvUA.js";import"./dataEntryStyles-Bl6MIlcl.js";import"./CSSTransitionAnimate-B4ernRxf.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CrkLBw9h.js";import"./uniqBy-rSYIRPWX.js";import"./iteratee-DCxMM0MI.js";import"./Cross-Gn1ZSEW3.js";import"./Rectangle-DfduTvBp.js";import"./Sector-BngMcKjs.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
