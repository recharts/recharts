import{e as r}from"./iframe-DMXQsXpg.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DMv6dWfr.js";import{C as d}from"./CartesianGrid-DbFmG4YY.js";import{X as c}from"./XAxis-BHFgUjmQ.js";import{Y as y}from"./YAxis-Do7NKWVh.js";import{S as h}from"./Scatter-BL3D_JRQ.js";import{E as e}from"./ErrorBar-DYKsbnyK.js";import{T as u}from"./Tooltip-Cf6bkA-T.js";import{R as f}from"./RechartsHookInspector-DV0idGEz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ChN5mZ6F.js";import"./arrayEqualityCheck-DpCaYOUy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BsNYhyCK.js";import"./immer-B5TQSQqr.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DZj5OYW4.js";import"./hooks-C4vpoiWQ.js";import"./axisSelectors-X23Vd1nJ.js";import"./d3-scale-Bobv8k5F.js";import"./zIndexSlice-Dh14LjCV.js";import"./renderedTicksSlice-BIIBkKaJ.js";import"./CartesianChart-C5uIkm2y.js";import"./chartDataContext-B6GLUasA.js";import"./CategoricalChart-DG_cN0Ky.js";import"./CartesianAxis-VGpTBjEt.js";import"./Layer-CsEtKw3I.js";import"./Text-DQkAUreQ.js";import"./DOMUtils-DhuzsS5O.js";import"./Label-Bs69Id3P.js";import"./ZIndexLayer-DFpiev-3.js";import"./types-B0XKp7Ez.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-L5lhC8e-.js";import"./Curve-GkC_ASL4.js";import"./step-H2086VjI.js";import"./tooltipContext-BSggaHro.js";import"./Symbols-CEd2p-EY.js";import"./symbol-Dzsckc01.js";import"./ActiveShapeUtils-CvI69Krw.js";import"./isPlainObject-BMubJZbB.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B4fRgx4g.js";import"./useAnimationId-VTFMqu0p.js";import"./Trapezoid-BZvlrAVr.js";import"./Sector-CxL9w9hl.js";import"./RegisterGraphicalItemId-oMcfFNkt.js";import"./ErrorBarContext-Bl-5rk6P.js";import"./GraphicalItemClipPath-D6CWKVU-.js";import"./SetGraphicalItem-Cl2qZBgg.js";import"./CSSTransitionAnimate-B3297eky.js";import"./useElementOffset-Bp1AeIZH.js";import"./uniqBy-DYyTxial.js";import"./iteratee-BAEyg1_s.js";import"./Cross-DVOx5HJq.js";import"./index-vcH36-MF.js";import"./ChartSizeDimensions-DEoCz00F.js";import"./OffsetShower-BjIJhAjd.js";import"./PlotAreaShower-DKns50Z6.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
