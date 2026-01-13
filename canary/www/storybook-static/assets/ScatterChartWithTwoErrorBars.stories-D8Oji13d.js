import{e as r}from"./iframe-1i9HA9RQ.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-bR53tm-C.js";import{C as h}from"./CartesianGrid-Do5nFotN.js";import{X as u}from"./XAxis-0WAwRzrH.js";import{Y as f}from"./YAxis-D6A0s1aE.js";import{S as w}from"./Scatter-BgV2zsf8.js";import{E as a}from"./ErrorBar-BgAi0K6Q.js";import{T as g}from"./Tooltip-D_dhj_K2.js";import{R as x}from"./RechartsHookInspector-CcKov_mq.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-Ca6atg1S.js";import"./arrayEqualityCheck-BwjFPiUr.js";import"./resolveDefaultProps-CuqYJHcO.js";import"./PolarUtils-B3zJ31hA.js";import"./hooks-y-J71LZD.js";import"./axisSelectors-B-ey3vYH.js";import"./zIndexSlice-kDjHMkcM.js";import"./CartesianChart-gPb3Ow7G.js";import"./chartDataContext-Cq6PbOHK.js";import"./CategoricalChart-fTOtoFif.js";import"./CartesianAxis-DT5pZ6h2.js";import"./Layer-TtoeX7Dg.js";import"./Text-CkIqO9jR.js";import"./DOMUtils-BvTgwRu6.js";import"./Label-B5L7e25b.js";import"./ZIndexLayer-CX343y-L.js";import"./types-BWGBotoG.js";import"./ReactUtils-CesYLNMs.js";import"./Curve-DYisYGAN.js";import"./tooltipContext-XPy447W1.js";import"./Symbols-Bn7dqeJu.js";import"./ActiveShapeUtils-CgjTEdkh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BaWdx0SZ.js";import"./useAnimationId-CKk3JzZu.js";import"./Trapezoid-GbRA1Hs7.js";import"./Sector-C3B07LHk.js";import"./RegisterGraphicalItemId-C0szZiML.js";import"./ErrorBarContext-B9-hedxb.js";import"./GraphicalItemClipPath-C-3gRK47.js";import"./SetGraphicalItem-DlpP7DnH.js";import"./CSSTransitionAnimate-B3vAG9XZ.js";import"./useElementOffset-BOAH7-ZQ.js";import"./iteratee-Dlx_Wmlz.js";import"./Cross-OCaIQ6zx.js";import"./index-BAAFpx__.js";import"./ChartSizeDimensions-BQPJaKjV.js";import"./OffsetShower-Bxqw5x-b.js";import"./PlotAreaShower-BqU9kqmb.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
