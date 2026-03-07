import{e as r}from"./iframe-DDWKRrqv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CxU11Dbt.js";import{C as d}from"./CartesianGrid-BUxTPynp.js";import{X as c}from"./XAxis-D_2M1x8X.js";import{Y as y}from"./YAxis-BdM975Hp.js";import{S as h}from"./Scatter-BLapk7aG.js";import{E as e}from"./ErrorBar-C4BVC0PQ.js";import{T as u}from"./Tooltip-CQK83aXS.js";import{R as f}from"./RechartsHookInspector-DceXjH5Q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzmWRH09.js";import"./arrayEqualityCheck-B69_8zAh.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D_DYv1p0.js";import"./immer-BOVNGK3k.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bsn1GeuN.js";import"./hooks-DMdViquZ.js";import"./axisSelectors-IRdkb48b.js";import"./d3-scale-Bur08Y-w.js";import"./zIndexSlice-BN5Gbmzf.js";import"./renderedTicksSlice-C67zSA8W.js";import"./CartesianChart-CkzL1Tm4.js";import"./chartDataContext-DtPiS87l.js";import"./CategoricalChart-g8bKJafN.js";import"./CartesianAxis-6QkrUt7M.js";import"./Layer-h3-3YPyh.js";import"./Text-BHc0cwIs.js";import"./DOMUtils-slrfpt58.js";import"./Label-NRlvBr1w.js";import"./ZIndexLayer-BwiDnk8J.js";import"./types-DOdoKNLX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-cVwoq5mQ.js";import"./Curve-DHOaOh81.js";import"./step-lfEQ-oxP.js";import"./tooltipContext-CfFTqT1f.js";import"./Symbols-BqNcdAfC.js";import"./symbol-dPepbRJM.js";import"./ActiveShapeUtils-EGVfTGvU.js";import"./isPlainObject-u-9GKdyb.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DQpz_Kxu.js";import"./useAnimationId-BITKm10d.js";import"./Trapezoid-D8tIh_kI.js";import"./Sector-OY9ONPbP.js";import"./RegisterGraphicalItemId-CcVRSfeO.js";import"./ErrorBarContext-Bbishcw-.js";import"./GraphicalItemClipPath-D--Twx0M.js";import"./SetGraphicalItem-Cmo6HR7d.js";import"./CSSTransitionAnimate-BzKHa7Sg.js";import"./useElementOffset-B8i3o1pJ.js";import"./uniqBy-BmXuc6cE.js";import"./iteratee-CEk-dA8r.js";import"./Cross-DMkheZJO.js";import"./index-BsIrbSk0.js";import"./ChartSizeDimensions-FoS83u8h.js";import"./OffsetShower-CMRNvtsS.js";import"./PlotAreaShower-C4MeqViy.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
