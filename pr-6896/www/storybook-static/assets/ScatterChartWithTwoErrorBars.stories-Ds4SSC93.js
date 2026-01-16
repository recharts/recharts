import{e as r}from"./iframe-DTjNyuRV.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-DIKvOwkf.js";import{C as d}from"./CartesianGrid-DmHrhKtz.js";import{X as c}from"./XAxis-Cc4WtM0z.js";import{Y as y}from"./YAxis-CTYfecrB.js";import{S as h}from"./Scatter-C-ImkC7p.js";import{E as e}from"./ErrorBar-GnT7Vffv.js";import{T as u}from"./Tooltip-DHU1_Ngb.js";import{R as f}from"./RechartsHookInspector-euo4g-ug.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./arrayEqualityCheck-C4xGcSTy.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./PolarUtils-jGr_7wxa.js";import"./hooks-BKspSbbk.js";import"./axisSelectors-C5N0FKJg.js";import"./zIndexSlice-DRfn0LKt.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./CategoricalChart-D9AJMhmv.js";import"./CartesianAxis-DGjvbjMn.js";import"./Layer-Bnob1t-w.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./Label-BLKfXojP.js";import"./ZIndexLayer-DQomkPs4.js";import"./types-To9Ddb8E.js";import"./ReactUtils-338dS-Qh.js";import"./Curve-OPgUPtNu.js";import"./tooltipContext-DeWM14_N.js";import"./Symbols-Bqb-NDkg.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./useAnimationId-DyTjjL6a.js";import"./Trapezoid-DDbPynHI.js";import"./Sector-DY-WO6-X.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./ErrorBarContext-D6_J_E6J.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./CSSTransitionAnimate-DEfC1EdY.js";import"./useElementOffset-CG9nz9uh.js";import"./iteratee-ZsRreprt.js";import"./Cross-Dp-5al6M.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
