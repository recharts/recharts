import{e as r}from"./iframe-iwEL6Umv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-gFbSaKRh.js";import{C as d}from"./CartesianGrid-BBwa0t5D.js";import{X as c}from"./XAxis-Dgqn4iEv.js";import{Y as y}from"./YAxis-umZBaGOr.js";import{S as h}from"./Scatter-RkyHcqYs.js";import{E as e}from"./ErrorBar-D19P5Jju.js";import{T as u}from"./Tooltip-qaBxv0ZM.js";import{R as f}from"./RechartsHookInspector-CYTcWIXs.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-9n0f-4bA.js";import"./arrayEqualityCheck-BhZQM3Cp.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BCVuQ-Yr.js";import"./immer-Cr1rPGS6.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DLdiPLRr.js";import"./hooks-BKxqdv6E.js";import"./axisSelectors-OvY2hZ5X.js";import"./d3-scale-DtoPWeCi.js";import"./zIndexSlice-B2mfmoSl.js";import"./renderedTicksSlice-C2RN1S42.js";import"./CartesianChart-awM32UjI.js";import"./chartDataContext-GxGvfaB0.js";import"./CategoricalChart-DS_wxFYH.js";import"./CartesianAxis-BWMGM7_Q.js";import"./Layer-blbwcMF4.js";import"./Text-BGZOUB9S.js";import"./DOMUtils-DAlnAof2.js";import"./Label-D1qeHozD.js";import"./ZIndexLayer--muSGjRM.js";import"./types-CbKx0ZMp.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-sQyeAkyW.js";import"./Curve-_1pLvIld.js";import"./step-4pZgFtPk.js";import"./tooltipContext-Ct2699AQ.js";import"./Symbols-CT2be5W7.js";import"./symbol-Q9vYiwbO.js";import"./ActiveShapeUtils-C3Zx6KRY.js";import"./isPlainObject-Ddh5v3It.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CXew48xc.js";import"./useAnimationId-fTTqSava.js";import"./Trapezoid-CwbjlUlI.js";import"./Sector-CvrBUmaX.js";import"./RegisterGraphicalItemId-DquoBc_j.js";import"./ErrorBarContext-CgjFOrMU.js";import"./GraphicalItemClipPath-DN8WJV-C.js";import"./SetGraphicalItem-7qCAbAa9.js";import"./CSSTransitionAnimate-Bc0JSTNd.js";import"./useElementOffset-DNqle7pd.js";import"./uniqBy-B3qdkWVD.js";import"./iteratee-D_7LxRKv.js";import"./Cross-kcSx-bbP.js";import"./index-LsQkT41Y.js";import"./ChartSizeDimensions-CbGn3agI.js";import"./OffsetShower-DbewMYJd.js";import"./PlotAreaShower-DJ_CeKT6.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
