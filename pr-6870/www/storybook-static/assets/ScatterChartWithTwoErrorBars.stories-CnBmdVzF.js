import{e as r}from"./iframe-BMyqBDY5.js";import{g as d}from"./utils-ePvtT4un.js";import{X as e}from"./XAxisProps-d4szlzro.js";import{a as y}from"./ChartProps-Cvo8vJEE.js";import{S as p}from"./ScatterChart-xBaP67IE.js";import{C as h}from"./CartesianGrid-DttEQ19N.js";import{X as u}from"./XAxis-DrX_bmOT.js";import{Y as f}from"./YAxis-gYPGT0Um.js";import{S as w}from"./Scatter-XW-T-q2f.js";import{E as a}from"./ErrorBar-Bu_eWQz_.js";import{T as g}from"./Tooltip-C6aJHee-.js";import{R as x}from"./RechartsHookInspector-B_A0Uap_.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./EventHandlers-JVOOzquU.js";import"./RechartsWrapper-hMDICSaE.js";import"./arrayEqualityCheck-DuyxfREv.js";import"./resolveDefaultProps-BGKl1tyb.js";import"./PolarUtils-P_ZfIDsv.js";import"./hooks-CtyWZT2U.js";import"./axisSelectors-RxIOnnLe.js";import"./zIndexSlice-Dmm35KLy.js";import"./CartesianChart-Bf-CfsMF.js";import"./chartDataContext-DO_q_27U.js";import"./CategoricalChart-Bg_NZvOR.js";import"./CartesianAxis-zlmGf0lm.js";import"./Layer-DWAVkTpZ.js";import"./Text-C5dsmcfL.js";import"./DOMUtils-BxDLRwCB.js";import"./Label-Cc8j6S_C.js";import"./ZIndexLayer-BHQIN7jK.js";import"./types-C28cLjqk.js";import"./ReactUtils-DZSdNGLK.js";import"./Curve-CP_WuQoJ.js";import"./tooltipContext-CyNQvS7H.js";import"./Symbols-DAD_VKXg.js";import"./ActiveShapeUtils-HKM8HgOk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-MMr5z6jI.js";import"./useAnimationId-MgACKJ1I.js";import"./Trapezoid-DUIbc0mY.js";import"./Sector-Dnl75ukO.js";import"./RegisterGraphicalItemId-BGAui-Ym.js";import"./ErrorBarContext-MN1I2Bli.js";import"./GraphicalItemClipPath-CBIipGUv.js";import"./SetGraphicalItem-DXrsAiCv.js";import"./CSSTransitionAnimate-KN7Yf6yU.js";import"./useElementOffset-DF2WTDjY.js";import"./iteratee-C5e8BY8E.js";import"./Cross-C0Wr0_cY.js";import"./index-DIS5R2kz.js";import"./ChartSizeDimensions-BB84pelj.js";import"./OffsetShower-CeLLqloX.js";import"./PlotAreaShower-zjCOtUVv.js";const i={...y,layout:{description:"The layout of areas, bars, lines in the chart.",options:["horizontal","vertical"],control:{type:"radio"},table:{type:{summary:"horizontal | vertical"},defaultValue:"horizontal",category:"General"}}},n={layout:{...i.layout,table:{...i.layout.table,category:"ScatterChart props"}},allowDataOverflow:{...e.allowDataOverflow,table:{...e.allowDataOverflow.table,category:"XAxis + YAxis props"}}},Xr={component:p,argTypes:n,docs:{autodocs:!1}},t={render:o=>{const c=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(h,null),r.createElement(u,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(f,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(w,{name:"A school",data:c,fill:"blue"},r.createElement(a,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(a,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(g,{cursor:{strokeDasharray:"3 3"}}),r.createElement(x,null))},args:d(n),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var m,s,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
