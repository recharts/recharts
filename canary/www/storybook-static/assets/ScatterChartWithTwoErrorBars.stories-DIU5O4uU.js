import{e as r}from"./iframe-DCHwmqK8.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-D_WGS0p5.js";import{C as d}from"./CartesianGrid-X_8lntYf.js";import{X as c}from"./XAxis-Dy9Xo9z7.js";import{Y as y}from"./YAxis-CKNZXN9_.js";import{S as h}from"./Scatter-C1k3hHIS.js";import{E as e}from"./ErrorBar-DKCpKj3G.js";import{T as u}from"./Tooltip-Bslvzh63.js";import{R as f}from"./RechartsHookInspector-DqPpRwC6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dam48Pnw.js";import"./arrayEqualityCheck-PCrDa-mZ.js";import"./resolveDefaultProps-9mPboPW3.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-C5KjLV4a.js";import"./axisSelectors-tq781mpa.js";import"./zIndexSlice-xa-TURHG.js";import"./renderedTicksSlice-DwhsECxN.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./CartesianAxis-BkIGBz3a.js";import"./Layer-7f0xQXhX.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./Label-BPyHNFQk.js";import"./ZIndexLayer-B-u8VTE_.js";import"./types-B1B-Xneg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CDXy_Xlj.js";import"./Curve-B04YTzst.js";import"./tooltipContext-DiLFHyIn.js";import"./Symbols-Bq3Wi3iy.js";import"./ActiveShapeUtils-BILPqCjw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CB4U0IVW.js";import"./useAnimationId-C8JLALld.js";import"./Trapezoid-Avw1E6Og.js";import"./Sector-Ch_o0ANK.js";import"./RegisterGraphicalItemId-BsQ61kmL.js";import"./ErrorBarContext-Cu1B03x6.js";import"./GraphicalItemClipPath-DITSj-MA.js";import"./SetGraphicalItem-ChCpVhsL.js";import"./CSSTransitionAnimate-DBRoGYxO.js";import"./useElementOffset-D_m576R-.js";import"./iteratee-Bn5DBhCx.js";import"./Cross-Bq2zFEQ4.js";import"./index-DsiXN0IX.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";const fr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const wr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,wr as __namedExportsOrder,fr as default};
