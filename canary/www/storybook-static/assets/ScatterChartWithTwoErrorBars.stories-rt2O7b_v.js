import{e as r}from"./iframe-DkFnKmz6.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-h4DKB0dX.js";import{S as p}from"./ScatterChart-DExpnFJ7.js";import{C as h}from"./CartesianGrid-DuRGeQxY.js";import{X as u}from"./XAxis-ByDrXS-8.js";import{Y as f}from"./YAxis-CDI-qV1c.js";import{S as w}from"./Scatter-DGdJnfjA.js";import{E as a}from"./ErrorBar-9t55ebnS.js";import{T as g}from"./Tooltip-twZ63P-G.js";import{R as x}from"./RechartsHookInspector-B3tFzt2u.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-CQuYL328.js";import"./RechartsWrapper-Bs4V9sqh.js";import"./arrayEqualityCheck-B_Ane2tr.js";import"./resolveDefaultProps-BEmCTT1M.js";import"./PolarUtils-C_yoPd2g.js";import"./hooks-W6coKbOT.js";import"./axisSelectors-DvTbuhYF.js";import"./zIndexSlice-DVsC50MZ.js";import"./CartesianChart-CvoDLFkd.js";import"./chartDataContext-BD-hpc_7.js";import"./CategoricalChart-CWiOLY2_.js";import"./CartesianAxis-DgIti1By.js";import"./Layer-BKurILEC.js";import"./Text-mK8iFpSb.js";import"./DOMUtils-8Q3WDKQX.js";import"./Label-mt1d5eVZ.js";import"./ZIndexLayer-CZJ8gmuc.js";import"./types-DoGupJwC.js";import"./ReactUtils-zV5IbihU.js";import"./Curve-CQB8Wbk0.js";import"./tooltipContext-BmNlyCXP.js";import"./Symbols-BHmBNcPX.js";import"./ActiveShapeUtils-vu-MuxxL.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bgeub8cz.js";import"./useAnimationId-ClFGkqN9.js";import"./Trapezoid-1bT7tRHO.js";import"./Sector-iBjQq3Q9.js";import"./RegisterGraphicalItemId-2BrkyC_A.js";import"./ErrorBarContext-BbmTUWcN.js";import"./GraphicalItemClipPath-DEpjOnpI.js";import"./SetGraphicalItem-C0TqoRHl.js";import"./CSSTransitionAnimate-CE2xpuDX.js";import"./useElementOffset-DKLV0Pm5.js";import"./iteratee-DprsdLjM.js";import"./Cross-DPhAEjaK.js";import"./index-DeWANcHY.js";import"./ChartSizeDimensions-DX00xq4b.js";import"./OffsetShower-B1JfcMLk.js";import"./PlotAreaShower-B1NfTpo7.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
