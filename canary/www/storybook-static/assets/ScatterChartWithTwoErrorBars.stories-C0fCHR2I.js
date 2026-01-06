import{e as r}from"./iframe-I1Pz45Ny.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-h4DKB0dX.js";import{S as p}from"./ScatterChart-DfxTx9wu.js";import{C as h}from"./CartesianGrid-C73f4GUu.js";import{X as u}from"./XAxis-C686G_Ng.js";import{Y as f}from"./YAxis-yT2DhUCy.js";import{S as w}from"./Scatter-Xt0G2T_b.js";import{E as a}from"./ErrorBar-DELALPzA.js";import{T as g}from"./Tooltip-DEiFajup.js";import{R as x}from"./RechartsHookInspector-CR238VhK.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-CQuYL328.js";import"./RechartsWrapper-DCDr6Jqb.js";import"./arrayEqualityCheck-BssfPt5l.js";import"./resolveDefaultProps-Bq-o5tNM.js";import"./PolarUtils-DcZ6GJsX.js";import"./hooks-B674bzAM.js";import"./axisSelectors-BE-GMhoq.js";import"./zIndexSlice-BV16LNaQ.js";import"./CartesianChart-DRbFdOf0.js";import"./chartDataContext-CiPGF6pl.js";import"./CategoricalChart-Cv93x4E-.js";import"./CartesianAxis-BfHa-zKL.js";import"./Layer-DQZYEAka.js";import"./Text-DswTa9RV.js";import"./DOMUtils--5RVCy_u.js";import"./Label-BgdagQ_F.js";import"./ZIndexLayer-BcHuHMGr.js";import"./types-CrbLuNpc.js";import"./ReactUtils-_pBy8ldc.js";import"./Curve-CHlRnf3G.js";import"./tooltipContext-BuZCbxug.js";import"./Symbols-BVua8K5W.js";import"./ActiveShapeUtils-BdkX4Sau.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-JQHiIfjv.js";import"./useAnimationId-SAHxkggc.js";import"./Trapezoid-DAueh7ih.js";import"./Sector-B4M-Rhc-.js";import"./RegisterGraphicalItemId-S1t7FnBd.js";import"./ErrorBarContext-CapFOLPB.js";import"./GraphicalItemClipPath-CYavBbht.js";import"./SetGraphicalItem-B3UzWK5E.js";import"./CSSTransitionAnimate-CCF5I4DQ.js";import"./useElementOffset-BNdgrSNe.js";import"./iteratee-TGONUFdq.js";import"./Cross-BG3-gOpg.js";import"./index-DMBIHBp8.js";import"./ChartSizeDimensions-rQb-Z9Di.js";import"./OffsetShower-DqiW8ZGm.js";import"./PlotAreaShower-DtXJ5a61.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
