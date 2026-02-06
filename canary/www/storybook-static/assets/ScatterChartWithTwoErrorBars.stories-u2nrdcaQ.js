import{e as r}from"./iframe-Isp5DByQ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-D0btnWIu.js";import{C as d}from"./CartesianGrid-B1FnrzVO.js";import{X as c}from"./XAxis-DbS-5SMi.js";import{Y as y}from"./YAxis-Earp8u6b.js";import{S as h}from"./Scatter-SB6KJ6_m.js";import{E as e}from"./ErrorBar-BPUIdtcB.js";import{T as u}from"./Tooltip-B72ehgGt.js";import{R as f}from"./RechartsHookInspector-BcUB3q5g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJiHoXCP.js";import"./arrayEqualityCheck-DcSZTGrK.js";import"./resolveDefaultProps-CktQcWs0.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CPGRTKzd.js";import"./axisSelectors-DKneri-4.js";import"./zIndexSlice-Kir1u83y.js";import"./CartesianChart-Ad36dtSp.js";import"./chartDataContext-CCLXwYwB.js";import"./CategoricalChart-Cd3v81B-.js";import"./CartesianAxis-CtKR5av8.js";import"./Layer-BzTi7EcX.js";import"./Text-B3hJnr-O.js";import"./DOMUtils-DDV6GWvc.js";import"./Label-BIeSPvzh.js";import"./ZIndexLayer-B7yLevK6.js";import"./types-BUXZfUBK.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BG9wPH-d.js";import"./Curve-BVujXptJ.js";import"./tooltipContext-PfS5Zao3.js";import"./Symbols-CRejWEVT.js";import"./ActiveShapeUtils-Ch4UNesV.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMTNFeQ6.js";import"./useAnimationId-BH36Yv-4.js";import"./Trapezoid-BhaWvkYr.js";import"./Sector-DXk8yocg.js";import"./RegisterGraphicalItemId-C0G4e2t3.js";import"./ErrorBarContext-CqPa7Fo7.js";import"./GraphicalItemClipPath-DhI7dbsH.js";import"./SetGraphicalItem-CEyRhP7A.js";import"./CSSTransitionAnimate-DjU2yh-4.js";import"./useElementOffset-CNEWPoc2.js";import"./iteratee-BCfRLSuG.js";import"./Cross-DvyKYPAa.js";import"./index-DhR5oTPc.js";import"./ChartSizeDimensions-CbTBC7na.js";import"./OffsetShower-34zfbzoW.js";import"./PlotAreaShower-DPXygzPM.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
