import{e as r}from"./iframe-C75Mon5f.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-h4DKB0dX.js";import{S as p}from"./ScatterChart-CFvAI4Ws.js";import{C as h}from"./CartesianGrid-q5_-yTof.js";import{X as u}from"./XAxis-D7rtUFHm.js";import{Y as f}from"./YAxis-BkOESioE.js";import{S as w}from"./Scatter-CAxk7Lst.js";import{E as a}from"./ErrorBar-giAaS2Xb.js";import{T as g}from"./Tooltip-e2uX3xxr.js";import{R as x}from"./RechartsHookInspector-DeYlN7PD.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-CQuYL328.js";import"./RechartsWrapper-DtD9QMMH.js";import"./arrayEqualityCheck-CCinF1xg.js";import"./resolveDefaultProps-DdslWj5k.js";import"./PolarUtils-gc7ouCGw.js";import"./hooks-CF17bvZj.js";import"./axisSelectors-DwNVm2PQ.js";import"./zIndexSlice-Ch2lslkG.js";import"./CartesianChart-BO0IyvRA.js";import"./chartDataContext-CSddlAqh.js";import"./CategoricalChart-CjaXzYYa.js";import"./CartesianAxis-DsQ2XPjm.js";import"./Layer-DOYjA-jF.js";import"./Text-s5ZlGFzn.js";import"./DOMUtils-Bv5mFBkh.js";import"./Label-BHT6Zr6z.js";import"./ZIndexLayer-1hGb0ezX.js";import"./types-CgyKhdli.js";import"./ReactUtils-D5lwbz2E.js";import"./Curve-uThrsaDe.js";import"./tooltipContext-BAau_RNO.js";import"./Symbols-BKwRHYAq.js";import"./ActiveShapeUtils-PNhhpaVz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DTY1SpY4.js";import"./useAnimationId-BM6GD1p3.js";import"./Trapezoid-D1lAuCqF.js";import"./Sector-PYXr-REd.js";import"./RegisterGraphicalItemId-6Y3WjFD5.js";import"./ErrorBarContext-Dgxj0rk9.js";import"./GraphicalItemClipPath-CJQxttXy.js";import"./SetGraphicalItem-CMCPtKvr.js";import"./CSSTransitionAnimate-sqlIIfKJ.js";import"./useElementOffset-BDHVYPHz.js";import"./iteratee-CYzyPxOs.js";import"./Cross-BDeMVghQ.js";import"./index-B1HMmzG7.js";import"./ChartSizeDimensions-DU3pXVrB.js";import"./OffsetShower-C98qoUcb.js";import"./PlotAreaShower-CzYV5sJZ.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
