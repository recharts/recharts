import{R as r}from"./iframe-EeI-1j8u.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-gE0pkShY.js";import{C as d}from"./CartesianGrid-BO5Air8Y.js";import{X as c}from"./XAxis-CIWygb1G.js";import{Y as y}from"./YAxis-BRal3r11.js";import{S as h}from"./Scatter-IcKgB5DO.js";import{E as e}from"./ErrorBar-DeoO-U4m.js";import{T as u}from"./Tooltip-Dn_vDD_U.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BS1aWGo0.js";import"./zIndexSlice-DHZxeEos.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-nYBnVSVd.js";import"./throttle-CXPRMSpL.js";import"./index-pgwVXRJO.js";import"./index-jJDdBZp4.js";import"./axisSelectors-Cv1-8nVO.js";import"./polarAxisSelectors-D7djmlhq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DCtxOwfO.js";import"./index-BylysGcb.js";import"./index-BCOZ7QjH.js";import"./renderedTicksSlice-Y-CkzfGU.js";import"./index-DKT02nAj.js";import"./CartesianChart-e1TnBbHn.js";import"./ZIndexPortal-pivMB2CQ.js";import"./CategoricalChart-BQ46uFlP.js";import"./CartesianAxis-Qxk-B3SK.js";import"./Layer-U6GYHWx5.js";import"./Text-BY4Mp6iu.js";import"./DOMUtils-CO7WypWi.js";import"./ZIndexLayer-D_EbKSUX.js";import"./Label-BhnhNpXu.js";import"./types-DqUdmTjU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D0m07rKR.js";import"./activeStyles-T-Ne1kjI.js";import"./useAnimationId-CIis84-o.js";import"./dataEntryStyles-RarJtqD3.js";import"./Curve-CyFTZwtt.js";import"./step-DC-9QXp9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C5ItyuzL.js";import"./Symbols-CDnC4YnR.js";import"./symbol-DRSGvgE-.js";import"./ActiveShapeUtils-B2Xd3mgO.js";import"./ErrorBarContext-Cxsgmfrf.js";import"./SetGraphicalItem-DIh7Z4HQ.js";import"./useEffectiveDataKey-Ce4gQ9XU.js";import"./CSSTransitionAnimate-DcGmAVZ_.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BM2TfUnu.js";import"./uniqBy-v3RdXdow.js";import"./iteratee-BmmzoLEb.js";import"./isArguments-yB-y1yaH.js";import"./Cross-WnLTnECd.js";import"./Rectangle-CCoDLphy.js";import"./Sector-CiNF6rG5.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
