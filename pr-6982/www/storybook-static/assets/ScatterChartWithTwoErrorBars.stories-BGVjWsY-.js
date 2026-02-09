import{e as r}from"./iframe-xqabyeMj.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-ChpDIWF7.js";import{C as d}from"./CartesianGrid-BBOEzBe7.js";import{X as c}from"./XAxis-DCnicXeQ.js";import{Y as y}from"./YAxis-DVjLQwct.js";import{S as h}from"./Scatter-CmgWSqGz.js";import{E as e}from"./ErrorBar-CTkxNA1V.js";import{T as u}from"./Tooltip-EgWC_rlN.js";import{R as f}from"./RechartsHookInspector-CFJUwZ9y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BiqM6SLb.js";import"./arrayEqualityCheck-8L6pkBib.js";import"./resolveDefaultProps-C4CpinzP.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DUKF9BS0.js";import"./axisSelectors-Dsv016Jw.js";import"./zIndexSlice-D0PgK1Qq.js";import"./CartesianChart-YoieVqbI.js";import"./chartDataContext-99M3a9R_.js";import"./CategoricalChart-5qGPlSyR.js";import"./CartesianAxis-DhN_DQtJ.js";import"./Layer-Bh77GRoo.js";import"./Text-CGJ1V4Sp.js";import"./DOMUtils-C4dT54L9.js";import"./Label-BONDDJIo.js";import"./ZIndexLayer-DT_FpcHY.js";import"./types-B39fGcYg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-bWGvhqKE.js";import"./Curve-DXgolxSe.js";import"./tooltipContext-vrzPBdCH.js";import"./Symbols-Co2bCSmq.js";import"./ActiveShapeUtils-CHTxT0Ma.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BnLG2ZKC.js";import"./useAnimationId-Cs8mC2Bw.js";import"./Trapezoid-CzCZCQIg.js";import"./Sector-BI2kwOQX.js";import"./RegisterGraphicalItemId-BRijqKHc.js";import"./ErrorBarContext-BxBXv2QU.js";import"./GraphicalItemClipPath-BDFMpOfU.js";import"./SetGraphicalItem-B2tkDh1g.js";import"./CSSTransitionAnimate-CLadEBg4.js";import"./useElementOffset-Cr7-bJ23.js";import"./iteratee-C2sEUqfR.js";import"./Cross-rpHVI9wh.js";import"./index-DIiQC_pi.js";import"./ChartSizeDimensions-gwsg2o-R.js";import"./OffsetShower-BIYWKZux.js";import"./PlotAreaShower-BBgrf_OL.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
