import{e as r}from"./iframe-eZ9JX-07.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-1C3tJm7K.js";import{C as d}from"./CartesianGrid-DTESZ9zI.js";import{X as c}from"./XAxis-mp_eEoS6.js";import{Y as y}from"./YAxis-uS2rijQh.js";import{S as h}from"./Scatter-lIjDi1co.js";import{E as e}from"./ErrorBar-D1Bi0tzE.js";import{T as u}from"./Tooltip-CiYBkuPY.js";import{R as f}from"./RechartsHookInspector-BeG4gaTk.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUoHei1k.js";import"./arrayEqualityCheck-Cj2Is5Mm.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CliKq00o.js";import"./immer-Dr1bFi29.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CNMtCejR.js";import"./hooks-DpV54l8p.js";import"./axisSelectors-AGz0-S2g.js";import"./d3-scale-BKcomRju.js";import"./zIndexSlice-BusLYGIS.js";import"./renderedTicksSlice-CqnrbROG.js";import"./CartesianChart-BK9rkCv_.js";import"./chartDataContext-CvCw_h_X.js";import"./CategoricalChart-YrnJ6OFy.js";import"./CartesianAxis-DlLnH-y1.js";import"./Layer-B6nAt8jX.js";import"./Text-CRkMMQ59.js";import"./DOMUtils-D0fPz5DE.js";import"./Label-mBy1-y0R.js";import"./ZIndexLayer-DbJ2I37n.js";import"./types-CmytQtTQ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DWnSk2Q-.js";import"./Curve-rjvi0w8u.js";import"./step-CSEuamYk.js";import"./tooltipContext-DwVR6eY8.js";import"./Symbols-CvJdDdpZ.js";import"./symbol-CdZf4kom.js";import"./ActiveShapeUtils-BMNGvKsh.js";import"./isPlainObject-DLc4kyQA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-_vtEiEA1.js";import"./useAnimationId-CSNZHJ-3.js";import"./Trapezoid-BBUAydEo.js";import"./Sector-Dv17oJda.js";import"./RegisterGraphicalItemId-BAw53RVk.js";import"./ErrorBarContext-Bpf6-6dn.js";import"./GraphicalItemClipPath-vABmGIfK.js";import"./SetGraphicalItem-By9FetZz.js";import"./CSSTransitionAnimate-C0aM6yeM.js";import"./useElementOffset-DrYCL9O-.js";import"./uniqBy-CqnG_K8V.js";import"./iteratee-1GFPdpFT.js";import"./Cross-0ZaLtVSY.js";import"./index-0o7fnxnF.js";import"./ChartSizeDimensions-jqrtviWa.js";import"./OffsetShower-CGC6-4Ry.js";import"./PlotAreaShower-BaV83-c3.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
