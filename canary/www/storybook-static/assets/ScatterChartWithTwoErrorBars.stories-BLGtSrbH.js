import{e as r}from"./iframe-b3l0oylc.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BQ_MGVXj.js";import{S as p}from"./ScatterChart-D6sly08d.js";import{C as d}from"./CartesianGrid-BJVKZUb8.js";import{X as c}from"./XAxis-DQI4GC2q.js";import{Y as y}from"./YAxis-DBt_3tXp.js";import{S as h}from"./Scatter-mYSVJ31E.js";import{E as e}from"./ErrorBar-Dnnjz96J.js";import{T as u}from"./Tooltip-DleGnEqy.js";import{R as f}from"./RechartsHookInspector-XGSushi8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-IoQ4cwV3.js";import"./arrayEqualityCheck-CjMmMQbn.js";import"./resolveDefaultProps-DcvR48Du.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-oM9vQQeZ.js";import"./axisSelectors-CzoiwyvX.js";import"./zIndexSlice-6dxWRD0w.js";import"./CartesianChart-Cua76ACG.js";import"./chartDataContext-L6gYrL26.js";import"./CategoricalChart-CbwsmCPP.js";import"./CartesianAxis-BaEBZn5E.js";import"./Layer-2yxRimi5.js";import"./Text-BgZlmGMw.js";import"./DOMUtils-CVqp0zn7.js";import"./Label-DllavO7s.js";import"./ZIndexLayer-CtStE837.js";import"./types-DcS7TQb1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BwdRCLdj.js";import"./Curve-1kQ3M0AJ.js";import"./tooltipContext-Bg8AINqD.js";import"./Symbols-CncGFVbc.js";import"./ActiveShapeUtils-S04EWH8U.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DDSw7OX0.js";import"./useAnimationId-DdymZr7z.js";import"./Trapezoid-DOQrObtz.js";import"./Sector-BhL684me.js";import"./RegisterGraphicalItemId-oaPJX1wj.js";import"./ErrorBarContext-4m-euoOZ.js";import"./GraphicalItemClipPath-DZsikywZ.js";import"./SetGraphicalItem-DuxrODNH.js";import"./CSSTransitionAnimate-BstHgSC6.js";import"./useElementOffset-DmRsiLis.js";import"./iteratee-iYPIXGSq.js";import"./Cross-BZhUsTyA.js";import"./index-BKFod4yn.js";import"./ChartSizeDimensions-CUrkzphw.js";import"./OffsetShower-DDSZRjCY.js";import"./PlotAreaShower-BzpNRyRF.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
