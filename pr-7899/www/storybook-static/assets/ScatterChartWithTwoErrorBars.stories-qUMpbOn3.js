import{R as r}from"./iframe-Bi3q5ica.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DELQMqUJ.js";import{C as d}from"./CartesianGrid-CQGOXz37.js";import{X as c}from"./XAxis-hhEBl8YN.js";import{Y as y}from"./YAxis-C54oD4nc.js";import{S as h}from"./Scatter-ZKlGK8JR.js";import{E as e}from"./ErrorBar-Bnzlj6ts.js";import{T as u}from"./Tooltip-CGByORWU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BIVD6JFp.js";import"./zIndexSlice-3OSmdeIU.js";import"./throttle-CZI3Ns_R.js";import"./index-B0qzmCsN.js";import"./index-BFXu3aHt.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DHzWDEtS.js";import"./isWellBehavedNumber-DYrnpjB-.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BxvzYEcA.js";import"./d3-scale-Dy9_TWZx.js";import"./index-ngMl_c_9.js";import"./index-BUn-OEAP.js";import"./renderedTicksSlice-DRFwN4j3.js";import"./index-BVwc-Jau.js";import"./CartesianChart-Dl2J0BS7.js";import"./chartDataContext-D-hMyVvi.js";import"./CategoricalChart-hTIoEyr2.js";import"./CartesianAxis-BXx4NBAG.js";import"./Layer-CtQIi_dM.js";import"./Text-Dc41Ok3C.js";import"./DOMUtils-Daz026gj.js";import"./useId-WQ4DmC28.js";import"./useBackwardsCompatibleTheme-CbD5lCDD.js";import"./Label-BY0KH6BI.js";import"./ZIndexLayer-D_YH5dyV.js";import"./types-3e9Y1DlN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-C5QOwiw_.js";import"./useAnimationId-Wfo4M9rJ.js";import"./Curve-C2iAxlmR.js";import"./step-BPB7nuaq.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CRe5fb94.js";import"./Symbols-DqOq9bgq.js";import"./symbol-DuoL-nUS.js";import"./ActiveShapeUtils-CMwbxzD5.js";import"./RegisterGraphicalItemId-DY8suQGI.js";import"./ErrorBarContext-Tsgmsoyf.js";import"./GraphicalItemClipPath-DaMNa-IP.js";import"./SetGraphicalItem-ChWBfBoT.js";import"./useGraphicalItemIdentity-BkNHKZMP.js";import"./dataEntryStyles-CD1lWBWh.js";import"./CSSTransitionAnimate-D1L0_XnR.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cv1kBb51.js";import"./uniqBy-DtuySXID.js";import"./iteratee-9Tj9By3u.js";import"./Cross-LcVvAtGO.js";import"./Rectangle-CfISYkIx.js";import"./Sector-DSj8bG7F.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
