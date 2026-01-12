import{e as r}from"./iframe-DS-q9W3A.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-DnlTiDRv.js";import{C as h}from"./CartesianGrid-uZbhVA3R.js";import{X as u}from"./XAxis-B6LMs64M.js";import{Y as f}from"./YAxis-Dl_2Ddpc.js";import{S as w}from"./Scatter-i2pxDT6Y.js";import{E as a}from"./ErrorBar-Bb9HiRyX.js";import{T as g}from"./Tooltip-jPfqbMk0.js";import{R as x}from"./RechartsHookInspector-BZrvl649.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-DIeOkYNI.js";import"./arrayEqualityCheck-uWyKn9kd.js";import"./resolveDefaultProps-DgJToWvf.js";import"./PolarUtils-COCiu7Zk.js";import"./hooks-CZGKc29x.js";import"./axisSelectors-CEsznBop.js";import"./zIndexSlice-B8xvBtUi.js";import"./CartesianChart-BrZvalbT.js";import"./chartDataContext-CBbbKlpZ.js";import"./CategoricalChart-KA7oDakA.js";import"./CartesianAxis-X7LfxDL5.js";import"./Layer-DiJfTFFC.js";import"./Text-BKgeGCuD.js";import"./DOMUtils-BrAhpHFL.js";import"./Label-C1I_KKaa.js";import"./ZIndexLayer-DOFsbkoZ.js";import"./types-COe7SjWu.js";import"./ReactUtils-W1w-s9kx.js";import"./Curve-MfRfs5dU.js";import"./tooltipContext-Ba-hLNMx.js";import"./Symbols-CinIOzBd.js";import"./ActiveShapeUtils-BebX3teJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DbmbV7wJ.js";import"./useAnimationId-T15aFfwj.js";import"./Trapezoid-Durh076j.js";import"./Sector-Dl9Lnkss.js";import"./RegisterGraphicalItemId-taQunXs-.js";import"./ErrorBarContext-BpDrXqd4.js";import"./GraphicalItemClipPath-gv1wFvhy.js";import"./SetGraphicalItem-nVnJshTd.js";import"./CSSTransitionAnimate-DIR2tx_-.js";import"./useElementOffset-D8o8xmBk.js";import"./iteratee-B2_klWfa.js";import"./Cross-CbUM0F1r.js";import"./index-BR8_Xxtj.js";import"./ChartSizeDimensions-DRXNeAaP.js";import"./OffsetShower-CYsEpPZo.js";import"./PlotAreaShower-Dt6Ccckl.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
