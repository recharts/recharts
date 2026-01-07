import{e as r}from"./iframe-DmHHE4lP.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-BCGtP1Xa.js";import{S as p}from"./ScatterChart-BCMGI_F5.js";import{C as h}from"./CartesianGrid-APnkO6Yx.js";import{X as u}from"./XAxis-DgoG7wOz.js";import{Y as f}from"./YAxis-7nE9-RZi.js";import{S as w}from"./Scatter-BjECKBdK.js";import{E as a}from"./ErrorBar-BxjzSaE6.js";import{T as g}from"./Tooltip-uUUOr1QD.js";import{R as x}from"./RechartsHookInspector-BtHYkDer.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-C1weQJJR.js";import"./arrayEqualityCheck-t0Foyoao.js";import"./resolveDefaultProps-BLzxoPkq.js";import"./PolarUtils-BW7uHe1I.js";import"./hooks-bj9uygVC.js";import"./axisSelectors-Cnyrx2M2.js";import"./zIndexSlice-hpqEhuIa.js";import"./CartesianChart-C2N9FbeV.js";import"./chartDataContext-DxXmJ6_0.js";import"./CategoricalChart-dxXdOniQ.js";import"./CartesianAxis-BgTM8D2n.js";import"./Layer-B8hcK7zD.js";import"./Text-CR1SXK76.js";import"./DOMUtils-v_MlezWk.js";import"./Label-BJNNtMeT.js";import"./ZIndexLayer-Cu-NSXrz.js";import"./types-BHzH6qVj.js";import"./ReactUtils-ChDQdCA9.js";import"./Curve-Dz5aWL22.js";import"./tooltipContext-xBV0Wx8f.js";import"./Symbols-CRlDXm6y.js";import"./ActiveShapeUtils-DlVOZy2E.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DV7CNXNv.js";import"./useAnimationId-DURIfTWV.js";import"./Trapezoid-Bb17YseS.js";import"./Sector-DhfQ1iXA.js";import"./RegisterGraphicalItemId-D2_orhVu.js";import"./ErrorBarContext-D_EijXm5.js";import"./GraphicalItemClipPath-CceA_Jya.js";import"./SetGraphicalItem-CnsK4wo_.js";import"./CSSTransitionAnimate-DqI2qpPX.js";import"./useElementOffset-CbKJqfDk.js";import"./iteratee-BlIIsWpB.js";import"./Cross-CbLIuatD.js";import"./index-B2ii1mag.js";import"./ChartSizeDimensions-DBLPZq_x.js";import"./OffsetShower-D9qv0nDO.js";import"./PlotAreaShower-rpYBhLSK.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
