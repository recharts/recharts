import{e as r}from"./iframe-CCMJ-7V4.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-h4DKB0dX.js";import{S as p}from"./ScatterChart-7ebjJS2a.js";import{C as h}from"./CartesianGrid-DyGIfdDj.js";import{X as u}from"./XAxis-R7Vv75w5.js";import{Y as f}from"./YAxis-BsjRKKqi.js";import{S as w}from"./Scatter-D6CakDHL.js";import{E as a}from"./ErrorBar-X5YmslZg.js";import{T as g}from"./Tooltip-BPXKEL5o.js";import{R as x}from"./RechartsHookInspector-CT184sGb.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-CQuYL328.js";import"./RechartsWrapper-Dlfj2KI1.js";import"./arrayEqualityCheck-EU51TFpx.js";import"./resolveDefaultProps-BNCKdsdg.js";import"./PolarUtils-JMmyzBBh.js";import"./hooks--Mj4Y-hQ.js";import"./axisSelectors-Bwyl_l9L.js";import"./zIndexSlice-D6TWR_2-.js";import"./CartesianChart-BWh3hsiv.js";import"./chartDataContext-BB33_ty3.js";import"./CategoricalChart-Cxiu0ZqS.js";import"./CartesianAxis-CjO0kaDg.js";import"./Layer-BEqohIF5.js";import"./Text-DT_EImOw.js";import"./DOMUtils-DS3HDMLJ.js";import"./Label-DYpMY_OX.js";import"./ZIndexLayer-DTuo7Di4.js";import"./types-CfBor7-V.js";import"./ReactUtils-CeY657n5.js";import"./Curve-CWiUvZCK.js";import"./tooltipContext-DYxg9AVX.js";import"./Symbols-BjLEgnQl.js";import"./ActiveShapeUtils-6YQyK9qF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DFaFQv7g.js";import"./useAnimationId-C67C_3Vf.js";import"./Trapezoid-iC4EoUjD.js";import"./Sector-CvpK-Ylm.js";import"./RegisterGraphicalItemId-DVKqMQCD.js";import"./ErrorBarContext-sxni0djP.js";import"./GraphicalItemClipPath-CYG_pIwh.js";import"./SetGraphicalItem-DBanf2OA.js";import"./CSSTransitionAnimate-M7U0Iu_K.js";import"./useElementOffset-CesAmAsq.js";import"./iteratee-DuUSmLFC.js";import"./Cross-Cn3uXrmE.js";import"./index-55iJ_lXJ.js";import"./ChartSizeDimensions-DrMr_UaN.js";import"./OffsetShower-0LfR1yxg.js";import"./PlotAreaShower-BAItckLJ.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
