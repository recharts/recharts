import{e as r}from"./iframe-RyyUADvi.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-C78bYaVu.js";import{C as d}from"./CartesianGrid-DWbw8Yjd.js";import{X as c}from"./XAxis-CoWhvSWs.js";import{Y as y}from"./YAxis-Un8vVQsB.js";import{S as h}from"./Scatter-CPC32Lm3.js";import{E as e}from"./ErrorBar-BAD2BP2h.js";import{T as u}from"./Tooltip-Df-5ziqW.js";import{R as f}from"./RechartsHookInspector-p0Yz6ifZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-oQCIJm_t.js";import"./arrayEqualityCheck-BK7ZKOIC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CwxDEkD6.js";import"./immer-DiJOv4tT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DS9IaigZ.js";import"./hooks-ZFjK5fyy.js";import"./axisSelectors-Bf3stQgf.js";import"./d3-scale-ZW2PW4r9.js";import"./zIndexSlice-I41T8JEG.js";import"./renderedTicksSlice-BUipPmkG.js";import"./CartesianChart-BVog2BC6.js";import"./chartDataContext-D7w4QAUg.js";import"./CategoricalChart-D1KFd6eK.js";import"./CartesianAxis-BpXuAb-I.js";import"./Layer-DGeVqCLc.js";import"./Text-BCjtKebt.js";import"./DOMUtils-CUy7YYLN.js";import"./Label-CQil7oNR.js";import"./ZIndexLayer-CXHEgDXB.js";import"./types-Bp-ZZqOO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BuUocuWo.js";import"./Curve-BOxvHyTd.js";import"./step-4PchhSUC.js";import"./tooltipContext-DHhWnKq3.js";import"./Symbols-C-qwK5A2.js";import"./symbol-BBBIWRyY.js";import"./ActiveShapeUtils-Db-WQFuK.js";import"./isPlainObject-Dd20guMq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BY6gKUrO.js";import"./useAnimationId-6eUUABj9.js";import"./Trapezoid-BnRug_7I.js";import"./Sector-CY4skt_U.js";import"./RegisterGraphicalItemId-BvOeRSvq.js";import"./ErrorBarContext-DoMKVMyl.js";import"./GraphicalItemClipPath-B8_DVnDn.js";import"./SetGraphicalItem-Cl0KJDHX.js";import"./CSSTransitionAnimate-Byxqw5Tb.js";import"./useElementOffset-DlEUeD5Q.js";import"./uniqBy-BEHYZLGg.js";import"./iteratee-z1tmzYKs.js";import"./Cross-DtIxRXka.js";import"./index-BPy7O-_m.js";import"./ChartSizeDimensions-B2WcmWF_.js";import"./OffsetShower-Cy4pmMeQ.js";import"./PlotAreaShower-CgXv_TiK.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
