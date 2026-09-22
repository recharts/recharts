import{R as r}from"./iframe-CsUJaUxM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BfU-JQLj.js";import{C as d}from"./CartesianGrid-CDnT15vk.js";import{X as c}from"./XAxis-CECMNFnt.js";import{Y as y}from"./YAxis-oUxgU8a1.js";import{S as h}from"./Scatter-D6gExgk_.js";import{E as e}from"./ErrorBar-Nd2GZnWR.js";import{T as u}from"./Tooltip-BEnwF5SI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-T8mD1Lc3.js";import"./zIndexSlice-DR8GOdx_.js";import"./throttle-jYQKZYpr.js";import"./index-DwbFMAfW.js";import"./index-CuzTPq-B.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-wCngT9vT.js";import"./isWellBehavedNumber-B1KHZ9NA.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CPJkZcPs.js";import"./d3-scale-BlcUMonb.js";import"./index-B6LqR4R9.js";import"./index-LRMsLTDO.js";import"./renderedTicksSlice-DMUlxU_r.js";import"./index-BkMQdhAs.js";import"./CartesianChart-9AGq9zI6.js";import"./chartDataContext-Dl9PHzyn.js";import"./CategoricalChart-BPTMFHzn.js";import"./CartesianAxis-DGUFe4-P.js";import"./Layer-BL2WKRfB.js";import"./Text-Ca7ex0z4.js";import"./DOMUtils-DV9i-gvX.js";import"./useId-DskunR0V.js";import"./useBackwardsCompatibleTheme-CzetmO85.js";import"./Label-BBIMhlH3.js";import"./ZIndexLayer-y8FwKDfZ.js";import"./types-DY32nFAv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BwJboHDv.js";import"./useAnimationId-CIIiKuIL.js";import"./Curve-BBNZ0-qm.js";import"./step-E2BXM1O_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BrSxZE8t.js";import"./Symbols-CM0b_dES.js";import"./symbol-COICJbUr.js";import"./ActiveShapeUtils-CrmNWRMG.js";import"./RegisterGraphicalItemId-BOfAVeru.js";import"./ErrorBarContext-BOrR3fwL.js";import"./GraphicalItemClipPath-yorSgC5b.js";import"./SetGraphicalItem-y4Qrn0nd.js";import"./useGraphicalItemIdentity-Dtj6CrmT.js";import"./CSSTransitionAnimate-IqHdgPxX.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C_sTQTtU.js";import"./uniqBy-BPwJ3JcN.js";import"./iteratee-BC6ZgAay.js";import"./Cross-C4zgdPc0.js";import"./Rectangle-D6D4yI4Z.js";import"./Sector-M0Sbbnyt.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
