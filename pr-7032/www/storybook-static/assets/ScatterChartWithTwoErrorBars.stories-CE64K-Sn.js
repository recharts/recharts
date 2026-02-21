import{e as r}from"./iframe-BFxtY9dI.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-BlPWIYym.js";import{C as d}from"./CartesianGrid-rH53Dzit.js";import{X as c}from"./XAxis-D3JpuhiV.js";import{Y as y}from"./YAxis-CPuMzTzv.js";import{S as h}from"./Scatter-BdLQyPFK.js";import{E as e}from"./ErrorBar-DFGQtOGH.js";import{T as u}from"./Tooltip-6YUCcRtK.js";import{R as f}from"./RechartsHookInspector-gudRCKH0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DLTyrBtL.js";import"./arrayEqualityCheck-BQbZm714.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bso679kC.js";import"./immer-CUcePk58.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DIi_90kL.js";import"./hooks-BNRFjHsC.js";import"./axisSelectors-Ceb__LH1.js";import"./d3-scale-KUDmBWZW.js";import"./zIndexSlice-ZRc_7mLu.js";import"./renderedTicksSlice-BzWN-VH9.js";import"./CartesianChart-CabJwrb4.js";import"./chartDataContext-DVsTe71B.js";import"./CategoricalChart-DKEDTrV-.js";import"./CartesianAxis-BYeXOVyG.js";import"./Layer-YgumUWTD.js";import"./Text-C_nqvwwO.js";import"./DOMUtils-D2wt1W4C.js";import"./Label-BcnS9G2E.js";import"./ZIndexLayer-DBC69qog.js";import"./types-DnPXbBrB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DAjtS1FD.js";import"./Curve-CuVRTfs_.js";import"./step-Ckw-k6uH.js";import"./tooltipContext-DspCVGBW.js";import"./Symbols-CK_J3ycL.js";import"./symbol-CT0Qon51.js";import"./ActiveShapeUtils-C6MZRufc.js";import"./isPlainObject-BfhtbKPL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpImsBEM.js";import"./useAnimationId-BSFVs4aF.js";import"./Trapezoid-DlEtqDsP.js";import"./Sector-CtJlOyZO.js";import"./RegisterGraphicalItemId-Dp1MHSbj.js";import"./ErrorBarContext-BKgH9nv9.js";import"./GraphicalItemClipPath-DRveIpF0.js";import"./SetGraphicalItem-BHv-MNOM.js";import"./CSSTransitionAnimate-CuaPQ9Ne.js";import"./useElementOffset-DKdxrDGu.js";import"./uniqBy-6ea5zmox.js";import"./iteratee-VCyK8kIm.js";import"./Cross-B1lI0XWJ.js";import"./index-Df7eFGry.js";import"./ChartSizeDimensions-Rd73rJcG.js";import"./OffsetShower-C5x-sRSJ.js";import"./PlotAreaShower-BaqJ4sLy.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
