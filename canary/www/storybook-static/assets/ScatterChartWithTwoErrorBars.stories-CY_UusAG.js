import{e as r}from"./iframe-O9ArEVIv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BVTPLE5R.js";import{C as d}from"./CartesianGrid-DxswWlbo.js";import{X as c}from"./XAxis-Cej5L1H9.js";import{Y as y}from"./YAxis-Br5uA6sX.js";import{S as h}from"./Scatter-iRnptBIF.js";import{E as e}from"./ErrorBar-DEGfJLW0.js";import{T as u}from"./Tooltip-I2d454qP.js";import{R as f}from"./RechartsHookInspector-16YUtyRB.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DOYlziR8.js";import"./arrayEqualityCheck-C-MTCypy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cjflm227.js";import"./immer-BFzhs2u-.js";import"./PolarUtils-CTnnDHZv.js";import"./index-a21uXOx0.js";import"./hooks-CqiKktT9.js";import"./axisSelectors-CwHYpHLU.js";import"./d3-scale-CJB90U0O.js";import"./zIndexSlice-Sxdp-diY.js";import"./renderedTicksSlice-BvOqc92I.js";import"./CartesianChart-z72RSBTa.js";import"./chartDataContext-B4Ztt00m.js";import"./CategoricalChart-C-oRlLv7.js";import"./CartesianAxis-Ds14BfSb.js";import"./Layer-Bs1IQ35S.js";import"./Text-DQdIz477.js";import"./DOMUtils-dyLmYPqX.js";import"./Label-CEXSNWpb.js";import"./ZIndexLayer-gMxYNdgc.js";import"./types-CsxGUr-v.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BfiyyF4-.js";import"./Curve-BaetafJM.js";import"./step-CooRIyZW.js";import"./tooltipContext-CkAKGhbX.js";import"./Symbols-BsW0CkYV.js";import"./symbol-D8ksNROS.js";import"./ActiveShapeUtils-Cu-_wtkP.js";import"./isPlainObject-BMtTHHOe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTyUjMdM.js";import"./useAnimationId-DFOXeF_s.js";import"./Trapezoid-BgYcRPYD.js";import"./Sector-CeOtRqWC.js";import"./RegisterGraphicalItemId-CLKZixP7.js";import"./ErrorBarContext-Caa3uBDH.js";import"./GraphicalItemClipPath-FlIwAJHm.js";import"./SetGraphicalItem-Cl8ON75H.js";import"./CSSTransitionAnimate-ad2OpEs0.js";import"./useElementOffset-yd24ysTP.js";import"./uniqBy-O6huRSpu.js";import"./iteratee-P-PQVcPP.js";import"./Cross-Cq_HtlZn.js";import"./index-CKq64LI9.js";import"./ChartSizeDimensions-BSf1VGM1.js";import"./OffsetShower-DBynPTQJ.js";import"./PlotAreaShower-DzB7vB8a.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
