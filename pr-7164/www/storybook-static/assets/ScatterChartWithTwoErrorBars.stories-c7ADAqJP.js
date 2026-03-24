import{e as r}from"./iframe-Cghk5Dv5.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-D3eZ6LPQ.js";import{C as d}from"./CartesianGrid-Dy2fKuJY.js";import{X as c}from"./XAxis-C28GaQOE.js";import{Y as y}from"./YAxis-DfDbyqX9.js";import{S as h}from"./Scatter-Dfkvf4KD.js";import{E as e}from"./ErrorBar-CuujbUhT.js";import{T as u}from"./Tooltip-DIg0HLtd.js";import{R as f}from"./RechartsHookInspector-Dhw1ahnh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BCDf7E4k.js";import"./arrayEqualityCheck-Blp4qByB.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Ca9Q42EU.js";import"./immer-C9d2WDC3.js";import"./PolarUtils-CTnnDHZv.js";import"./index--WQv2JEI.js";import"./hooks-DvHGCK_P.js";import"./axisSelectors-BmN1bSZG.js";import"./d3-scale-DwfmephR.js";import"./zIndexSlice-Cr5Wd2hn.js";import"./renderedTicksSlice-B7PVLtE-.js";import"./CartesianChart-Dl7eKZR1.js";import"./chartDataContext-FHRsRLf6.js";import"./CategoricalChart-BX2q-J4I.js";import"./CartesianAxis-NFB-A6xZ.js";import"./Layer-BZayzYJ5.js";import"./Text-CTdXj2Wj.js";import"./DOMUtils-B6BLeQuC.js";import"./Label-DMYBuQg7.js";import"./ZIndexLayer-C0MHsSee.js";import"./types-BAdQFhn_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DJKFAAVq.js";import"./Curve-tyrMpXlR.js";import"./step-CJt2p9N6.js";import"./tooltipContext-fbLXfv7J.js";import"./Symbols-i2nCmAEN.js";import"./symbol-BX-g_aqV.js";import"./ActiveShapeUtils-CgedLmsf.js";import"./isPlainObject-GvFH0_0U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-SpFzk5.js";import"./useAnimationId-B_fUzLa-.js";import"./Trapezoid-D5vWYT03.js";import"./Sector-WHMRpyIm.js";import"./RegisterGraphicalItemId-DxmHa7yf.js";import"./ErrorBarContext-B48_fgxO.js";import"./GraphicalItemClipPath-J2zVG9I1.js";import"./SetGraphicalItem-DKkCveHJ.js";import"./CSSTransitionAnimate-B8lMPsU7.js";import"./useElementOffset-DGki2voW.js";import"./uniqBy-BP9r3ZBr.js";import"./iteratee-Cll8zDsJ.js";import"./Cross-D4p6iHby.js";import"./index-DQ-QIWuT.js";import"./ChartSizeDimensions-Dm4LSJOm.js";import"./OffsetShower-CKEh5r6l.js";import"./PlotAreaShower-m5B18Oa-.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
