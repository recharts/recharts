import{e as r}from"./iframe-BheSPRxC.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-B5jKejJF.js";import{C as d}from"./CartesianGrid-BEc0b5n8.js";import{X as c}from"./XAxis-w4I0Dz-P.js";import{Y as y}from"./YAxis-Co--vqpb.js";import{S as h}from"./Scatter-Cwtx3ZVQ.js";import{E as e}from"./ErrorBar-DAxI8HK3.js";import{T as u}from"./Tooltip-osYWmV0J.js";import{R as f}from"./RechartsHookInspector-BuIPrOmw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BReu-8p6.js";import"./arrayEqualityCheck-DTJTJDIZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-YxfO8nVM.js";import"./immer-Bk3tlmFk.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BTAK_CzP.js";import"./hooks-D7thV8Yx.js";import"./axisSelectors-Bt_ndlyL.js";import"./d3-scale-Bi7kPPR-.js";import"./zIndexSlice-RIxi073z.js";import"./renderedTicksSlice-B7gUlO0Z.js";import"./CartesianChart-oljUKRjY.js";import"./chartDataContext-CTcUXfN7.js";import"./CategoricalChart-BxAT78Yw.js";import"./CartesianAxis-BNiz-eqI.js";import"./Layer-Dnr25hkA.js";import"./Text-BUur2DfR.js";import"./DOMUtils-qoxeJE6c.js";import"./Label-DvFgjn-2.js";import"./ZIndexLayer-BR-xGhiB.js";import"./types-Ig8fwHS7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-eBHsRDRZ.js";import"./Curve-D5XGZpaq.js";import"./step-BEEMHEX_.js";import"./tooltipContext-BchO8CMc.js";import"./Symbols-DnaEJ_wk.js";import"./symbol-BrB1FpAX.js";import"./ActiveShapeUtils-CEbptTt-.js";import"./isPlainObject-DdlnvCr2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DLKGSdHG.js";import"./useAnimationId-CA-fcZvu.js";import"./Trapezoid-8ylyG2hR.js";import"./Sector-GkU_9DAY.js";import"./RegisterGraphicalItemId-CfZTXmBZ.js";import"./ErrorBarContext-CYeurdws.js";import"./GraphicalItemClipPath-CyqMb0de.js";import"./SetGraphicalItem-vkl4WKoz.js";import"./CSSTransitionAnimate-DhVDbRxt.js";import"./useElementOffset-DL5ncVja.js";import"./uniqBy-Xj4rmq0Y.js";import"./iteratee-B6hZ06Iz.js";import"./Cross-DoUCIzDa.js";import"./index-NavELH2p.js";import"./ChartSizeDimensions-Dbu0-vjG.js";import"./OffsetShower-DiJ1X-2O.js";import"./PlotAreaShower-CtIhvInc.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
