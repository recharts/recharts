import{e as r}from"./iframe-BnepZbIT.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DoKXp1JQ.js";import{C as d}from"./CartesianGrid-BWyeFdf4.js";import{X as c}from"./XAxis-SiwesCXl.js";import{Y as y}from"./YAxis-GrlhSCw3.js";import{S as h}from"./Scatter-BCoFFy0U.js";import{E as e}from"./ErrorBar-ZMLhvUxf.js";import{T as u}from"./Tooltip-e6qES6Dq.js";import{R as f}from"./RechartsHookInspector-C4hunDdt.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DvbGdFiP.js";import"./arrayEqualityCheck-Bzj1NFbL.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CCq0BlxP.js";import"./immer-CMcm_nUx.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BYgM4v9S.js";import"./hooks-CP1-TJLt.js";import"./axisSelectors-DQBdr2e5.js";import"./d3-scale-rflYLnZy.js";import"./zIndexSlice-C8s-XU9n.js";import"./renderedTicksSlice-CSId2xIn.js";import"./CartesianChart-90suVU5n.js";import"./chartDataContext-DCbFY6Je.js";import"./CategoricalChart-Dkb_r9k9.js";import"./CartesianAxis-DimAd1iY.js";import"./Layer-Ca-NGzhu.js";import"./Text-CPTRxDfj.js";import"./DOMUtils-DlCDOcC9.js";import"./Label-CvQfGABs.js";import"./ZIndexLayer-CaJTwElI.js";import"./types-Df0IzV2Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-64sNutUM.js";import"./Curve-DKZiYoJj.js";import"./step-BFaHnM_e.js";import"./tooltipContext-CV7qY9mU.js";import"./Symbols-eksBr05G.js";import"./symbol-hzKkaagP.js";import"./ActiveShapeUtils-BrWeXoF9.js";import"./isPlainObject-BxGEMuWM.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-QDjYZ4Lh.js";import"./useAnimationId-0FE8S7Lc.js";import"./Trapezoid-CWH0SbFy.js";import"./Sector-CD_FNLgY.js";import"./RegisterGraphicalItemId-DInnBgXa.js";import"./ErrorBarContext-biD2FyQs.js";import"./GraphicalItemClipPath-BLvis0SJ.js";import"./SetGraphicalItem-Dwsy_PTG.js";import"./CSSTransitionAnimate-C6h50xnt.js";import"./useElementOffset-ChPfnl3W.js";import"./uniqBy-DQbVnFYw.js";import"./iteratee-CMSgm-8W.js";import"./Cross-DqNAQFtm.js";import"./index-D2gJFJUM.js";import"./ChartSizeDimensions-YfbBA8uv.js";import"./OffsetShower-DpIwysro.js";import"./PlotAreaShower-BdzDALPX.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
