import{e as r}from"./iframe-DGrXlEkx.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-DS3PpOM6.js";import{C as h}from"./CartesianGrid-BzHr3Sej.js";import{X as u}from"./XAxis-CAsPUI6L.js";import{Y as f}from"./YAxis-m9KoigUY.js";import{S as w}from"./Scatter-CjDcUF0P.js";import{E as a}from"./ErrorBar-CWtRF8dA.js";import{T as g}from"./Tooltip-Cyj47X2a.js";import{R as x}from"./RechartsHookInspector-Br39JKkJ.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-BsZxNtsW.js";import"./arrayEqualityCheck-DicChNuU.js";import"./resolveDefaultProps-CbjUZWO4.js";import"./PolarUtils-DHWqJfSQ.js";import"./hooks-BJzdHLQJ.js";import"./axisSelectors-B99hHUji.js";import"./zIndexSlice-BOlzJk7E.js";import"./CartesianChart-DhyYzKH1.js";import"./chartDataContext-xgZ2IC4i.js";import"./CategoricalChart-CoFZdKLi.js";import"./CartesianAxis-BzLzw--d.js";import"./Layer-D3LXHH9n.js";import"./Text-DHLuacJp.js";import"./DOMUtils-BNpuiDkW.js";import"./Label-BU6Zd3bq.js";import"./ZIndexLayer-B0lWMP9E.js";import"./types-Byz7h8Fw.js";import"./ReactUtils-B0RMD20A.js";import"./Curve-B7GNUcvb.js";import"./tooltipContext-CMxTeChW.js";import"./Symbols-lPueLsWK.js";import"./ActiveShapeUtils-Dmo5KH5o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B_ChE2a8.js";import"./useAnimationId-BLzFnaDj.js";import"./Trapezoid-D3rkb8mR.js";import"./Sector-BiHhGzVm.js";import"./RegisterGraphicalItemId-kRuXUne3.js";import"./ErrorBarContext-B6C65bkw.js";import"./GraphicalItemClipPath-BaBV_qBF.js";import"./SetGraphicalItem-DtkD_AUo.js";import"./CSSTransitionAnimate-BO85AC5J.js";import"./useElementOffset-peD2ny1m.js";import"./iteratee-BfALflAJ.js";import"./Cross-DGofQ-D3.js";import"./index-DUFFx6eI.js";import"./ChartSizeDimensions-DMMvC6d0.js";import"./OffsetShower-T7KMfcKq.js";import"./PlotAreaShower-B7mPYwn0.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
