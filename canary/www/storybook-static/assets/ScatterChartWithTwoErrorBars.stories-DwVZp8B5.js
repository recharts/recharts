import{e as r}from"./iframe-Cz5RPrzo.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-CW4p8x4G.js";import{C as h}from"./CartesianGrid-DNfR-JtA.js";import{X as u}from"./XAxis-Dad-gt40.js";import{Y as f}from"./YAxis-Dvw6k3XO.js";import{S as w}from"./Scatter-B0-Lr3fL.js";import{E as a}from"./ErrorBar-DGaw1j0l.js";import{T as g}from"./Tooltip-DkmCOQhh.js";import{R as x}from"./RechartsHookInspector-DP8xCOal.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-cu-FIaeq.js";import"./arrayEqualityCheck-DuhA3hrU.js";import"./resolveDefaultProps-x0GM_Fqy.js";import"./PolarUtils-BqV0Lm0k.js";import"./hooks-BM-KAHTV.js";import"./axisSelectors-B5q7pd7-.js";import"./zIndexSlice-CcJ--Fig.js";import"./CartesianChart-eteQYMRm.js";import"./chartDataContext-CuN30YAe.js";import"./CategoricalChart-LFVK4bCX.js";import"./CartesianAxis-D-RjJSot.js";import"./Layer-CngTgEke.js";import"./Text-BayrHrEj.js";import"./DOMUtils-m1R-l7fT.js";import"./Label-XMPDelhI.js";import"./ZIndexLayer-DopQY-kA.js";import"./types-D1v_Rc2a.js";import"./ReactUtils-BQq-yyvu.js";import"./Curve-C0KXugLq.js";import"./tooltipContext-Bauin2Js.js";import"./Symbols-R3z9Gbft.js";import"./ActiveShapeUtils-D5xwOR7W.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2aKHHpL.js";import"./useAnimationId-ifmUbYmC.js";import"./Trapezoid-CFJnjNBB.js";import"./Sector-D7vvH_6F.js";import"./RegisterGraphicalItemId-B1o2SWmz.js";import"./ErrorBarContext-BeejT6aM.js";import"./GraphicalItemClipPath-apQ9eD6L.js";import"./SetGraphicalItem-BmMKLEXu.js";import"./CSSTransitionAnimate-DRBxz1Hl.js";import"./useElementOffset-Dgk1VpEv.js";import"./iteratee-DF4ETxvE.js";import"./Cross-DRXodTvN.js";import"./index-nSyYgmIS.js";import"./ChartSizeDimensions-BL9_hnvT.js";import"./OffsetShower-9oUxrKwL.js";import"./PlotAreaShower-CCuY3b1X.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
