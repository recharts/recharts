import{e as r}from"./iframe-m4iUvHHE.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-BSFQrLIR.js";import{C as d}from"./CartesianGrid-Cyz0CANa.js";import{X as c}from"./XAxis-D0aRIGij.js";import{Y as y}from"./YAxis-CCDUaJX1.js";import{S as h}from"./Scatter-BfDEAnP8.js";import{E as e}from"./ErrorBar-BiwVtF_Q.js";import{T as u}from"./Tooltip-BAvz0IgL.js";import{R as f}from"./RechartsHookInspector-DquHYSn_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-F72CiqvA.js";import"./arrayEqualityCheck-h_ZmhyNH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DyxbBsOP.js";import"./immer-g1bGLmSg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CrxMp6gE.js";import"./hooks-DWsntCpj.js";import"./axisSelectors-DfPlbHbP.js";import"./d3-scale-Y-jFDeRI.js";import"./zIndexSlice-CKy2olf2.js";import"./renderedTicksSlice-BEB6E7mo.js";import"./CartesianChart-_tfuwHZj.js";import"./chartDataContext-BiqezE3h.js";import"./CategoricalChart-9uAdVsVQ.js";import"./CartesianAxis-CqSuAZnU.js";import"./Layer-CcrS99IB.js";import"./Text-B9di0q31.js";import"./DOMUtils-BJmvgBqy.js";import"./Label-BCusTt26.js";import"./ZIndexLayer-DebxKBww.js";import"./types-ipm49NW_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BGxD9cqm.js";import"./Curve-lACOSqJl.js";import"./step-BaU1N5Sx.js";import"./tooltipContext-DS3I03e_.js";import"./Symbols-B9jGSpgT.js";import"./symbol-Chx5djFD.js";import"./ActiveShapeUtils-DWhLewKE.js";import"./isPlainObject-BVIwbHuq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNlZhouO.js";import"./useAnimationId-CowdAHeu.js";import"./Trapezoid-BQrLMZHr.js";import"./Sector-0LK2YG6H.js";import"./RegisterGraphicalItemId-uusu-k8r.js";import"./ErrorBarContext-CisfXBtR.js";import"./GraphicalItemClipPath-BgZNml_V.js";import"./SetGraphicalItem-DEb8ASoe.js";import"./CSSTransitionAnimate-BWx49dZx.js";import"./useElementOffset-6zzYdDiL.js";import"./uniqBy-DhVYOpcE.js";import"./iteratee-Cfg_AXlo.js";import"./Cross-CuBoQy-M.js";import"./index-5r_S6fe4.js";import"./ChartSizeDimensions-L8mur3p1.js";import"./OffsetShower-BU7tduPK.js";import"./PlotAreaShower-C2wXuw9M.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
