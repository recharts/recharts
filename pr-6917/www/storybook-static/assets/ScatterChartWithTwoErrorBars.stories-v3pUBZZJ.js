import{e as r}from"./iframe-D2DyXbcn.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-DPDs2UeV.js";import{C as d}from"./CartesianGrid-lVO3DWYE.js";import{X as c}from"./XAxis-B_Rkajbb.js";import{Y as y}from"./YAxis-9nabWNdp.js";import{S as h}from"./Scatter-BlsxoNrA.js";import{E as e}from"./ErrorBar-DZS5q4xa.js";import{T as u}from"./Tooltip-B9D5T6kV.js";import{R as f}from"./RechartsHookInspector-CDdA-ZFQ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BOCCBYR7.js";import"./arrayEqualityCheck-WjtHcJHc.js";import"./resolveDefaultProps-DA54HTPm.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-JMcNkC16.js";import"./axisSelectors-opT4Xs9T.js";import"./zIndexSlice-BQ_BDZqW.js";import"./CartesianChart-Ba4FxLXC.js";import"./chartDataContext-Dwil6t7E.js";import"./CategoricalChart-D5ZcD5Yb.js";import"./CartesianAxis-YVPJ9daY.js";import"./Layer-BwzoyCOr.js";import"./Text-rvIJXzXo.js";import"./DOMUtils-C9-GhUPU.js";import"./Label-CjanQvYq.js";import"./ZIndexLayer-NA5ERVnG.js";import"./types-uxMSZ2Tc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D1zizFIc.js";import"./Curve-O5r-1d1a.js";import"./tooltipContext-CpcGEiKt.js";import"./Symbols-f5SXrcZl.js";import"./ActiveShapeUtils-C8QFtNhq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDAmNHcJ.js";import"./useAnimationId-D72jT57q.js";import"./Trapezoid-CuHn90H-.js";import"./Sector-D91ncyh4.js";import"./RegisterGraphicalItemId-D3Xr-RN7.js";import"./ErrorBarContext-C7pLQCZx.js";import"./GraphicalItemClipPath-BOs3atUy.js";import"./SetGraphicalItem-NSh_bPoh.js";import"./CSSTransitionAnimate-C9HaklI9.js";import"./useElementOffset-1lDb_Lm2.js";import"./iteratee-CPGn8MN2.js";import"./Cross-C-VozEOs.js";import"./index-B5oQXnTT.js";import"./ChartSizeDimensions-1xcDn5yB.js";import"./OffsetShower-DmmXcLnJ.js";import"./PlotAreaShower-CpTy_FbM.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
