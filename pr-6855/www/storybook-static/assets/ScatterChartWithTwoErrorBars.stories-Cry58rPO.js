import{e as r}from"./iframe-Da-M2bw_.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-BCGtP1Xa.js";import{S as p}from"./ScatterChart-CKVpzZ0Y.js";import{C as h}from"./CartesianGrid-BeDGJ5q1.js";import{X as u}from"./XAxis-CFyYvsY3.js";import{Y as f}from"./YAxis-u8ljMyRk.js";import{S as w}from"./Scatter-DO7N0JIs.js";import{E as a}from"./ErrorBar-CRUzqcmE.js";import{T as g}from"./Tooltip-BswLKPO9.js";import{R as x}from"./RechartsHookInspector-DN6fpuiF.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-BUepfen4.js";import"./arrayEqualityCheck-Bu1fao9w.js";import"./resolveDefaultProps-BfdPYxPL.js";import"./PolarUtils-vOe5pdek.js";import"./hooks-CxpugqLJ.js";import"./axisSelectors-B_bauGo8.js";import"./zIndexSlice-CMfC5ktf.js";import"./CartesianChart-DRzmZtVl.js";import"./chartDataContext-Cwbia7-m.js";import"./CategoricalChart-Cqbm4wFz.js";import"./CartesianAxis-CVwu7qOc.js";import"./Layer-DzGabtm5.js";import"./Text-BD5t_Wg6.js";import"./DOMUtils-CQPgEqmB.js";import"./Label-C4t1wGEU.js";import"./ZIndexLayer-C6AjQfxY.js";import"./types-D0tWu2Rj.js";import"./ReactUtils-y3IAuRLl.js";import"./Curve-D038hXOJ.js";import"./tooltipContext-BHXKmJz9.js";import"./Symbols-0qrr4MxV.js";import"./ActiveShapeUtils-Dg-wD9Xs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BDQYy-QO.js";import"./useAnimationId-DW2lwLzx.js";import"./Trapezoid-Dm562TU6.js";import"./Sector-CemvM92K.js";import"./RegisterGraphicalItemId-Bh4GNlAN.js";import"./ErrorBarContext-CgzPxaLF.js";import"./GraphicalItemClipPath-qobx4hps.js";import"./SetGraphicalItem-BUDso82t.js";import"./CSSTransitionAnimate-DvgB3ipM.js";import"./useElementOffset-CJciGcgD.js";import"./iteratee-BEvwa0tL.js";import"./Cross-O6OvgL9I.js";import"./index-CVXS9YKr.js";import"./ChartSizeDimensions-BESje7nE.js";import"./OffsetShower-OU7b25r_.js";import"./PlotAreaShower--pkErmR4.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(bespokeArgTypes),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,Xr as default};
