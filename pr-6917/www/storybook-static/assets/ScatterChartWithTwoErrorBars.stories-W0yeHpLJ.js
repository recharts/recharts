import{e as r}from"./iframe-A-0tKSWD.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-Bd27NBf_.js";import{C as d}from"./CartesianGrid-B7hvWmGU.js";import{X as c}from"./XAxis-BXhGyvV2.js";import{Y as y}from"./YAxis-DGY1JRVK.js";import{S as h}from"./Scatter-B6ce3Gtw.js";import{E as e}from"./ErrorBar-C2dvfs6W.js";import{T as u}from"./Tooltip-C_UMyDHa.js";import{R as f}from"./RechartsHookInspector-BiAUdU7M.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-SmBFshtg.js";import"./arrayEqualityCheck-Bi53fE_W.js";import"./resolveDefaultProps-DGQ-_Q5N.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-BIt-PEDd.js";import"./axisSelectors-BPBM-BQI.js";import"./zIndexSlice-BnuFP1kN.js";import"./CartesianChart-2alRd1pz.js";import"./chartDataContext-BdRC9Sc-.js";import"./CategoricalChart-El9GFkBl.js";import"./CartesianAxis-DX3J6okb.js";import"./Layer-CxQ6kbYz.js";import"./Text-DMK2KaGs.js";import"./DOMUtils-gTBfrWdN.js";import"./Label-C7autWsa.js";import"./ZIndexLayer-BJZUY29j.js";import"./types-BYDpjVEr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-ptTox43v.js";import"./Curve-BQURRmu9.js";import"./tooltipContext-DyV9aXyZ.js";import"./Symbols-C_xPmfi9.js";import"./ActiveShapeUtils-CxepjeQB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C9GYhQ17.js";import"./useAnimationId-CvIqeW01.js";import"./Trapezoid-B9ii8EyS.js";import"./Sector-BedQrfAt.js";import"./RegisterGraphicalItemId-DjlQV6Vi.js";import"./ErrorBarContext-9JUs1gmp.js";import"./GraphicalItemClipPath-Sdkq8hlz.js";import"./SetGraphicalItem-C1AKRyjE.js";import"./CSSTransitionAnimate-Cxs_wdk_.js";import"./useElementOffset-pOCC4UDR.js";import"./iteratee-CS8o6XLt.js";import"./Cross-B0Jg01iP.js";import"./index-B-Mvr0XH.js";import"./ChartSizeDimensions-22sFfi6P.js";import"./OffsetShower-C5qrbqGT.js";import"./PlotAreaShower-DXZIEGcd.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
