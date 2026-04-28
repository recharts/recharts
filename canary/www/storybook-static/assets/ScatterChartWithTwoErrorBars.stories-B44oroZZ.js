import{e as r}from"./iframe-CGwC73OO.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-CNMAj37P.js";import{C as d}from"./CartesianGrid-B2JXZgjN.js";import{X as c}from"./XAxis-KheqwHPS.js";import{Y as y}from"./YAxis-DJqKmGik.js";import{S as h}from"./Scatter-D1wVctp2.js";import{E as e}from"./ErrorBar-D9qspFNg.js";import{T as u}from"./Tooltip-87RqnmLF.js";import{R as f}from"./RechartsHookInspector-BOLymao4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DMSzhStw.js";import"./arrayEqualityCheck-BlziNjUk.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-2h9cia6B.js";import"./immer-CURee86N.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CByG6IuO.js";import"./hooks-C-sNjqxb.js";import"./axisSelectors-ClgkNKcu.js";import"./d3-scale-BH0-xThR.js";import"./zIndexSlice-Pvig-liy.js";import"./renderedTicksSlice-DBon5NFb.js";import"./CartesianChart-ChaOc86m.js";import"./chartDataContext-CmWRMrC9.js";import"./CategoricalChart-DtqXk2xy.js";import"./CartesianAxis-Bw03X_Zl.js";import"./Layer-BBc4ESPC.js";import"./Text-DyJrB0G7.js";import"./DOMUtils-C1ZRgIwE.js";import"./Label-CE6Oihdn.js";import"./ZIndexLayer-CAqiJgLq.js";import"./types-C_6Vkwi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CYVZdurj.js";import"./Curve-C4VRfueh.js";import"./step-zq2neHnY.js";import"./tooltipContext-CasRmE5I.js";import"./Symbols-DVb7nCyx.js";import"./symbol-zQKMiMKl.js";import"./ActiveShapeUtils-BoZw7F6l.js";import"./isPlainObject-CMDmT6Oo.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Qmwzuu0_.js";import"./useAnimationId-B3H-bs7p.js";import"./Trapezoid-3CdzbHVF.js";import"./Sector-C4mEqCcR.js";import"./RegisterGraphicalItemId-yX1pqnM-.js";import"./ErrorBarContext-a8CrbqxK.js";import"./GraphicalItemClipPath-CuaCHgKU.js";import"./SetGraphicalItem-CRoX03qV.js";import"./CSSTransitionAnimate-BFTZZuIH.js";import"./useElementOffset-DjtirxfO.js";import"./uniqBy-CKpTCRET.js";import"./iteratee-B30x_xh4.js";import"./Cross-DZTW7vLE.js";import"./index-CF2MM-Q8.js";import"./ChartSizeDimensions-BPnl0leJ.js";import"./OffsetShower-BHX9YNtn.js";import"./PlotAreaShower-CFsnprFU.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
