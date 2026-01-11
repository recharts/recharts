import{e as r}from"./iframe-D2G3HIAp.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-CPdCfsNk.js";import{C as h}from"./CartesianGrid-DlHFlIxs.js";import{X as u}from"./XAxis-Cv05-S4d.js";import{Y as f}from"./YAxis-C4SLmRp0.js";import{S as w}from"./Scatter-B4F6v-qK.js";import{E as a}from"./ErrorBar-aJKaF1Xm.js";import{T as g}from"./Tooltip-HMhPUFuF.js";import{R as x}from"./RechartsHookInspector-Bl5k7Hvc.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-CZfXu9Bm.js";import"./arrayEqualityCheck-D7f_pFRZ.js";import"./resolveDefaultProps-DUSJViu-.js";import"./PolarUtils-Dps0SkyA.js";import"./hooks-sNKmgtMM.js";import"./axisSelectors-276H6COd.js";import"./zIndexSlice-DJ_SqHH-.js";import"./CartesianChart-Cd_D9K81.js";import"./chartDataContext-BdGyYEQ1.js";import"./CategoricalChart-DtaGr5KL.js";import"./CartesianAxis-4WuYgukg.js";import"./Layer--_yZLHYD.js";import"./Text-BktKgt0G.js";import"./DOMUtils-CXrXcMzN.js";import"./Label-Dmvkas3w.js";import"./ZIndexLayer-CUBtDPQX.js";import"./types-DJ8_iZaM.js";import"./ReactUtils-BiGt9Rwl.js";import"./Curve-DwXIRY2H.js";import"./tooltipContext-BcWuMro5.js";import"./Symbols-CdOOLS_O.js";import"./ActiveShapeUtils-D_-w_v2b.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BNNRRaL-.js";import"./useAnimationId-P64LV0gd.js";import"./Trapezoid-BPu8z8Hk.js";import"./Sector-CkVMFxgw.js";import"./RegisterGraphicalItemId-Dydu6q-y.js";import"./ErrorBarContext-BXYRXGCk.js";import"./GraphicalItemClipPath-Ct9ZNJk2.js";import"./SetGraphicalItem-4DzlkcSy.js";import"./CSSTransitionAnimate-DhQ6ibTD.js";import"./useElementOffset-DjRuwiqo.js";import"./iteratee-BWz_WTT_.js";import"./Cross-Y984nfbX.js";import"./index-BwQRywFC.js";import"./ChartSizeDimensions-C1G0XugS.js";import"./OffsetShower-vnVO-R-R.js";import"./PlotAreaShower-8nMbOvlD.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
