import{e as r}from"./iframe-Dnh1Ryvb.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-DX0EZhiL.js";import{C as h}from"./CartesianGrid-BznzeLYA.js";import{X as u}from"./XAxis-CR1tc-KL.js";import{Y as f}from"./YAxis-BShcefNK.js";import{S as w}from"./Scatter-COVhiFuH.js";import{E as a}from"./ErrorBar-Dt9EkB-E.js";import{T as g}from"./Tooltip-DMtaWOlD.js";import{R as x}from"./RechartsHookInspector-DMji7YUm.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-Ch8zJvUN.js";import"./arrayEqualityCheck-DCevfetv.js";import"./resolveDefaultProps-Coi4LBhI.js";import"./PolarUtils-Cgm959MD.js";import"./hooks-TRp6kMUA.js";import"./axisSelectors-CwAmoCkz.js";import"./zIndexSlice-BXugI2eB.js";import"./CartesianChart-B2M6TWiT.js";import"./chartDataContext-CqWHnJZ5.js";import"./CategoricalChart-BipcxAVd.js";import"./CartesianAxis-CXvREodt.js";import"./Layer-CG0lsnsl.js";import"./Text-DuqEZ_1u.js";import"./DOMUtils-Bor3dP_R.js";import"./Label-B-RHJFae.js";import"./ZIndexLayer-Bcm3_13n.js";import"./types-NxPc932w.js";import"./ReactUtils-09bip2qn.js";import"./Curve-CGOZKazJ.js";import"./tooltipContext-B6FP9cdT.js";import"./Symbols-Bi-3r2yZ.js";import"./ActiveShapeUtils-oJd1nGJX.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-lOgApOPv.js";import"./useAnimationId-DymxHjdh.js";import"./Trapezoid-DqrFuhKX.js";import"./Sector-CK7LUajO.js";import"./RegisterGraphicalItemId-vvLaBIlf.js";import"./ErrorBarContext-ELPHN1NQ.js";import"./GraphicalItemClipPath-DCk99Thz.js";import"./SetGraphicalItem-Dm7xV0AH.js";import"./CSSTransitionAnimate-DfbDbopU.js";import"./useElementOffset-JFxjDGnz.js";import"./iteratee-KFvQ-6kW.js";import"./Cross-Cjn-lYng.js";import"./index-BBrJvbdK.js";import"./ChartSizeDimensions-DbCZNQtH.js";import"./OffsetShower-DAcHGjow.js";import"./PlotAreaShower-5JxeAXKY.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
