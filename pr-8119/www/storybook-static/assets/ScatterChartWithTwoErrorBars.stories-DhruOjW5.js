import{R as r}from"./iframe-CNzr7bRc.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-11Ff_PUG.js";import{C as d}from"./CartesianGrid-BBE-PR7v.js";import{X as c}from"./XAxis-BqePxvtA.js";import{Y as y}from"./YAxis-B3tsMqyp.js";import{S as h}from"./Scatter-BNGVsRaE.js";import{E as e}from"./ErrorBar-BxTQrRvD.js";import{T as u}from"./Tooltip-BCC0qlIK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BDCqiBvb.js";import"./zIndexSlice-BXquQra7.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-eALPB1-k.js";import"./throttle-D60XWAz6.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./axisSelectors-Cj1w7XZO.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BaY54_t1.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./CartesianAxis-D3YDV11n.js";import"./Layer-CQb-3uv7.js";import"./Text-DNGP5VRJ.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./Label-DK5ffKtI.js";import"./types-VNEWdd_i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BM4oqAMz.js";import"./activeStyles-DoMnj4mo.js";import"./useAnimationId-CDC5NaEo.js";import"./dataEntryStyles-fZ5_Gy6u.js";import"./Curve-BKrC7pl3.js";import"./step-DQr3R_vt.js";import"./path-DyVhHtw_.js";import"./tooltipContext-a3REC5wT.js";import"./Symbols-CJLh5GL-.js";import"./symbol-CTtPmk_0.js";import"./ActiveShapeUtils-BTkV1P67.js";import"./ErrorBarContext-CNXHKdeb.js";import"./SetGraphicalItem-Dt3t9-Yy.js";import"./useEffectiveDataKey-CeL4hQha.js";import"./CSSTransitionAnimate-5QLG9R24.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BRAQ4wcr.js";import"./uniqBy-rckpUkc6.js";import"./iteratee-C6pzj2S7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-kZkGTP7N.js";import"./Rectangle-_7pUXE0L.js";import"./Sector-DNATorIr.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
