import{e as r}from"./iframe-CsBbFWpF.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-B4FcTXxp.js";import{C as h}from"./CartesianGrid-CaHAkppf.js";import{X as u}from"./XAxis-n00lD-aM.js";import{Y as f}from"./YAxis-Ctuh_Y30.js";import{S as w}from"./Scatter-BhdYxTee.js";import{E as a}from"./ErrorBar-CoUiAK1h.js";import{T as g}from"./Tooltip-B8PRtCZT.js";import{R as x}from"./RechartsHookInspector-Ce0vrec4.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-M1yD5X0u.js";import"./arrayEqualityCheck-jcy1YLjA.js";import"./resolveDefaultProps-Di-bRFCz.js";import"./PolarUtils-DudrDAyL.js";import"./hooks-51EGl8Fk.js";import"./axisSelectors-C8uaVJja.js";import"./zIndexSlice-CXgHVliP.js";import"./CartesianChart-DlU5PpKX.js";import"./chartDataContext-C4MvfWzW.js";import"./CategoricalChart-BoRcIHlb.js";import"./CartesianAxis-DTyJ3mcB.js";import"./Layer-B5pUJ7d6.js";import"./Text-CXOTFpC0.js";import"./DOMUtils-DCk3Ra7U.js";import"./Label-vO0tFBMQ.js";import"./ZIndexLayer-DoHUAHyH.js";import"./types-DZkoNYJ-.js";import"./ReactUtils-B73M-NEp.js";import"./Curve-BV6casI8.js";import"./tooltipContext-BJ3STaWo.js";import"./Symbols-GutgQl5i.js";import"./ActiveShapeUtils-Cp7opGs8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CRfJXidx.js";import"./useAnimationId-DQyCpAJd.js";import"./Trapezoid-CqG9LomH.js";import"./Sector-DZ4anR9n.js";import"./RegisterGraphicalItemId-DEKbhPBq.js";import"./ErrorBarContext-UJH6PLVM.js";import"./GraphicalItemClipPath-BGGubKyF.js";import"./SetGraphicalItem-D-yEZ2eQ.js";import"./CSSTransitionAnimate-DP0mJAh3.js";import"./useElementOffset-DKVHg2OE.js";import"./iteratee-DG0CEwld.js";import"./Cross-eYJkkoHv.js";import"./index-30ex7hAw.js";import"./ChartSizeDimensions-BxqurYlH.js";import"./OffsetShower-Cz9yhNvC.js";import"./PlotAreaShower-CYw1ViUZ.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
