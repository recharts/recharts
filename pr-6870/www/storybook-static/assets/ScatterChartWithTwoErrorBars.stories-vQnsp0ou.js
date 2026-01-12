import{e as r}from"./iframe-C9kyXynm.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-CihbfxEv.js";import{C as h}from"./CartesianGrid-C8kB-52l.js";import{X as u}from"./XAxis-DlZ1onwt.js";import{Y as f}from"./YAxis-V3Y4BL5v.js";import{S as w}from"./Scatter-VdirnvMz.js";import{E as a}from"./ErrorBar-UAUZMzQD.js";import{T as g}from"./Tooltip-DWE8kPry.js";import{R as x}from"./RechartsHookInspector-CKajdCMN.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-ultCJT0w.js";import"./arrayEqualityCheck-BdbBdFIu.js";import"./resolveDefaultProps-BCZIpR14.js";import"./PolarUtils-B_1hBJ6O.js";import"./hooks-BzniDeZ2.js";import"./axisSelectors-50fqgJ0X.js";import"./zIndexSlice-cJxKJ8ug.js";import"./CartesianChart-EinDqxZ_.js";import"./chartDataContext-CZ4PAiww.js";import"./CategoricalChart-5uqkh1gH.js";import"./CartesianAxis-DH1-Rlhr.js";import"./Layer-LG3hnzpE.js";import"./Text-BcrXlrdS.js";import"./DOMUtils-CQZn70zK.js";import"./Label-C-oa8ua5.js";import"./ZIndexLayer-7ELyukPI.js";import"./types-BfqR7E8K.js";import"./ReactUtils-D_EEBxyT.js";import"./Curve-WEIhibNB.js";import"./tooltipContext-C1hlJFvg.js";import"./Symbols-DR9F1KQK.js";import"./ActiveShapeUtils-CGirhXo2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSM7deum.js";import"./useAnimationId-XLZTjrUv.js";import"./Trapezoid-91tzOikz.js";import"./Sector-D1DtIzuz.js";import"./RegisterGraphicalItemId-oP_vlkHV.js";import"./ErrorBarContext-CHSQnyV_.js";import"./GraphicalItemClipPath-DJAtFFUQ.js";import"./SetGraphicalItem-DyyRaUbx.js";import"./CSSTransitionAnimate-DlfW5Q82.js";import"./useElementOffset-CMzOGP_X.js";import"./iteratee-DoJqJKsx.js";import"./Cross-GDyFEfaG.js";import"./index-DVm8rubF.js";import"./ChartSizeDimensions-COOovYk2.js";import"./OffsetShower-D9P9ThB2.js";import"./PlotAreaShower-B7fr2_CT.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
