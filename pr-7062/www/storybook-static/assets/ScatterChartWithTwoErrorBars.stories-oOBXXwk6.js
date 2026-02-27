import{e as r}from"./iframe-DFGAofbe.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CVAGPOEd.js";import{C as d}from"./CartesianGrid-BvlU0hyK.js";import{X as c}from"./XAxis-B7s0I8c_.js";import{Y as y}from"./YAxis-BGW4Fg8K.js";import{S as h}from"./Scatter-DBZUMmUF.js";import{E as e}from"./ErrorBar-BKHOJ0kl.js";import{T as u}from"./Tooltip-UooB0EhF.js";import{R as f}from"./RechartsHookInspector-DbJ87cdf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BW69_AMP.js";import"./arrayEqualityCheck-ljAchZLP.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BiW6MX56.js";import"./immer-BNIFj7IH.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BuPlUYom.js";import"./hooks-NQJeEPvo.js";import"./axisSelectors-wlNZvql0.js";import"./d3-scale-BORVzaI0.js";import"./zIndexSlice-ZGxvoLlb.js";import"./renderedTicksSlice-zWZrw6WL.js";import"./CartesianChart-B919z8kN.js";import"./chartDataContext-3sHnV3LN.js";import"./CategoricalChart-DiTxXNb9.js";import"./CartesianAxis-CchT0nWW.js";import"./Layer-DkQEAz0F.js";import"./Text-eVa9CtOa.js";import"./DOMUtils-Bb3CoATj.js";import"./Label-D3hyhnox.js";import"./ZIndexLayer-C2uBG0v5.js";import"./types-hODQJ_Fi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Zl7yFqa2.js";import"./Curve-DUQRfqey.js";import"./step-D87477lM.js";import"./tooltipContext-RM9zVRDO.js";import"./Symbols-smoeIwKM.js";import"./symbol-ChY4FcTv.js";import"./ActiveShapeUtils-BldO5j8K.js";import"./isPlainObject-CgDaYdpj.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXQZY0za.js";import"./useAnimationId-DLq-j523.js";import"./Trapezoid-C7B2-ixr.js";import"./Sector-BpsG7dxK.js";import"./RegisterGraphicalItemId-BoqMctej.js";import"./ErrorBarContext-CN4hBBfW.js";import"./GraphicalItemClipPath-CAWgOBcy.js";import"./SetGraphicalItem-BNO-bjOH.js";import"./CSSTransitionAnimate-D1vMnsIb.js";import"./useElementOffset-CKkFnPA9.js";import"./uniqBy-15P9Zh0w.js";import"./iteratee-BW6l5A-S.js";import"./Cross-YtxgBDXs.js";import"./index-C6DKtKjE.js";import"./ChartSizeDimensions-BkxkztHc.js";import"./OffsetShower-B3oZm6GE.js";import"./PlotAreaShower-CBxzL5FD.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
