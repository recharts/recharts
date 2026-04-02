import{e as r}from"./iframe-BaY_xsSZ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-D2d0rTz3.js";import{C as d}from"./CartesianGrid-BHLdTw0l.js";import{X as c}from"./XAxis-ViYQKBdh.js";import{Y as y}from"./YAxis-BAjE4AI0.js";import{S as h}from"./Scatter-CjCDoNgY.js";import{E as e}from"./ErrorBar-CEHuhkJS.js";import{T as u}from"./Tooltip-CmuUZ6lx.js";import{R as f}from"./RechartsHookInspector-BZJAdbFr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DGEkw1V9.js";import"./arrayEqualityCheck-Bdjqc4Ae.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-VJ-BUAvR.js";import"./immer-BxBygCNY.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BSMrFEqd.js";import"./hooks-CRXiVztC.js";import"./axisSelectors-B-OR9MKB.js";import"./d3-scale-DIZez8ZA.js";import"./zIndexSlice-CtFEU_Ni.js";import"./renderedTicksSlice-B0xJlAOa.js";import"./CartesianChart-D3S0Vg1A.js";import"./chartDataContext-Dfnon4gt.js";import"./CategoricalChart-CR4gEzum.js";import"./CartesianAxis-CxJxU8_8.js";import"./Layer-04iznQcl.js";import"./Text-F1Mr-vkp.js";import"./DOMUtils-DVKXUmKU.js";import"./Label-B4b2gNZT.js";import"./ZIndexLayer-BzH8oXrO.js";import"./types-BZAl2150.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B7IYIUp3.js";import"./Curve-B7UPBPeR.js";import"./step-CLF9a_rc.js";import"./tooltipContext-CdWoiPQq.js";import"./Symbols-D6WgJo03.js";import"./symbol-N8c7H1tN.js";import"./ActiveShapeUtils-CAoRm2wW.js";import"./isPlainObject-DluGOkEU.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CHMEhJP1.js";import"./useAnimationId-CntPUL-4.js";import"./Trapezoid-DZ8rNB7q.js";import"./Sector-c_JEoVhU.js";import"./RegisterGraphicalItemId-x5Fjg9Mp.js";import"./ErrorBarContext-hvPjdfRQ.js";import"./GraphicalItemClipPath-C_oN7uRQ.js";import"./SetGraphicalItem-13HzTRgX.js";import"./CSSTransitionAnimate-vT-lsizw.js";import"./useElementOffset-CP6WPjsc.js";import"./uniqBy-CrxusMQm.js";import"./iteratee-BK5pxv5Q.js";import"./Cross-B8xeSogi.js";import"./index-D_Zsn0a-.js";import"./ChartSizeDimensions-Tq7694Qh.js";import"./OffsetShower-D7qcdJv9.js";import"./PlotAreaShower-DF_9siN1.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
