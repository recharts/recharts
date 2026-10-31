import{R as r}from"./iframe-l1Y42C0u.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CjKNiIOQ.js";import{C as d}from"./CartesianGrid-CDZaDU45.js";import{X as c}from"./XAxis-B9K8Q1Xb.js";import{Y as y}from"./YAxis-MT51XlEY.js";import{S as h}from"./Scatter-CkAUMiGh.js";import{E as e}from"./ErrorBar-BdmxsB21.js";import{T as u}from"./Tooltip-Chbmqq1h.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOuMjlQh.js";import"./zIndexSlice-B33nqsCb.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-1jZi99P0.js";import"./throttle-DAyvkz9h.js";import"./index-DIs184pY.js";import"./index-Cqq6zn6Z.js";import"./axisSelectors-D7HUEi6M.js";import"./polarAxisSelectors-BQIs9A7o.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B5Y8SIz5.js";import"./index-Bn03Joy2.js";import"./index-BwfxQem6.js";import"./renderedTicksSlice-D6aSCZ50.js";import"./index-BL-lBVJK.js";import"./CartesianChart-DP0lCfag.js";import"./ZIndexPortal-DmDlsnpL.js";import"./CategoricalChart-CsG2T3-z.js";import"./CartesianAxis-tpqsI94N.js";import"./Layer-euAv7Vlw.js";import"./Text-B6K4_AwF.js";import"./DOMUtils-D4PcHABk.js";import"./ZIndexLayer-DxyEEQXG.js";import"./Label-sWz5CiLk.js";import"./types-CrZHDfLN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./themeFill-DQcF-Fqd.js";import"./fillDefinitions-AHxQevDT.js";import"./LabelList-CqnzZffr.js";import"./activeStyles-De0IjX-U.js";import"./useAnimationId-Df3Y-xS6.js";import"./dataEntryStyles-D_KE_N47.js";import"./Curve-B3MncDoj.js";import"./step-Be4HSYh6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BSj91y9Q.js";import"./Symbols-CQXeMdB_.js";import"./symbol-K2q-awoK.js";import"./ActiveShapeUtils-CSx2HuI1.js";import"./ErrorBarContext-xxN9WryY.js";import"./SetGraphicalItem-Do2v7-d1.js";import"./useEffectiveDataKey-Dv99CamK.js";import"./CSSTransitionAnimate-Bp9QM5zB.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dc6g4T8Y.js";import"./uniqBy-BXAphbyZ.js";import"./iteratee-BoMr2KG7.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BgI2taLq.js";import"./Rectangle-Gcg8iRps.js";import"./Sector-B4KLeSUR.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
