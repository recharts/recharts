import{e as r}from"./iframe-BBzssXFz.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-Ck7KeitT.js";import{C as d}from"./CartesianGrid-BQfmrOwT.js";import{X as c}from"./XAxis-BKkUGHg6.js";import{Y as y}from"./YAxis-DM7CZp2-.js";import{S as h}from"./Scatter-CLzwHR4j.js";import{E as e}from"./ErrorBar-Cc7NpfDk.js";import{T as u}from"./Tooltip-KN4fp32J.js";import{R as f}from"./RechartsHookInspector-Cq_u8Fnd.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CsBkMUfg.js";import"./arrayEqualityCheck-Bjl1KGHu.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Csr8SK85.js";import"./immer-7XFVXXFB.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CafXZux5.js";import"./hooks-Cdjbv1yZ.js";import"./axisSelectors-CFvd2CpI.js";import"./d3-scale-CV33LrVl.js";import"./zIndexSlice-BlJdEm2b.js";import"./renderedTicksSlice-D_eYSGtp.js";import"./CartesianChart-D4Tq8Mp4.js";import"./chartDataContext-DUrxX3r4.js";import"./CategoricalChart-B-bxACDj.js";import"./CartesianAxis-Dax8GbgD.js";import"./Layer-CAh1Kgp_.js";import"./Text-Boz5VXT5.js";import"./DOMUtils-DJmkFWFo.js";import"./Label-B9ZSBmHd.js";import"./ZIndexLayer-C1_Q11sr.js";import"./types-CER3-J_V.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CabJhVob.js";import"./Curve-Dzo1_9a0.js";import"./step-Dmy2-h0-.js";import"./tooltipContext-D0k-ChEM.js";import"./Symbols-CoEYrWYs.js";import"./symbol-C10iTT4Z.js";import"./ActiveShapeUtils-C0KQrGSC.js";import"./isPlainObject-CwCFEtjI.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnC0X1TR.js";import"./useAnimationId-G1z57dIT.js";import"./Trapezoid-CWYXYqYR.js";import"./Sector-DeNvZ5DZ.js";import"./RegisterGraphicalItemId-5EdXQ8V-.js";import"./ErrorBarContext-CM0hmmky.js";import"./GraphicalItemClipPath-DFMtaTzW.js";import"./SetGraphicalItem-C2_0J6B5.js";import"./CSSTransitionAnimate-C5XtX8Oh.js";import"./useElementOffset-CjjZnAan.js";import"./uniqBy-C66l8_Y0.js";import"./iteratee-41QGm2LS.js";import"./Cross-CsHBJT9I.js";import"./index-BMusN9RV.js";import"./ChartSizeDimensions-DX20IRBn.js";import"./OffsetShower-0ikHXz0q.js";import"./PlotAreaShower-ddoTAOnv.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
