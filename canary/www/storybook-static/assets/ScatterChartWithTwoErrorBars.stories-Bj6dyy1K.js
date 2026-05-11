import{e as r}from"./iframe-DrwMi_jY.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-hgvwXgg4.js";import{C as d}from"./CartesianGrid-BvNeKc46.js";import{X as c}from"./XAxis-31NaFi-n.js";import{Y as y}from"./YAxis-BCaqdjY5.js";import{S as h}from"./Scatter-CiofRjhj.js";import{E as e}from"./ErrorBar-B_e0Ff6-.js";import{T as u}from"./Tooltip-BHeWa7zj.js";import{R as f}from"./RechartsHookInspector-Dgz_6twg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BPsUoTC1.js";import"./arrayEqualityCheck-B-j0Xn6j.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-s4nUKxVc.js";import"./immer-CGi3HKm3.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BfRPVrJS.js";import"./hooks-DuA_RFk6.js";import"./axisSelectors-Df-PAYL2.js";import"./d3-scale-CR0wzDjj.js";import"./zIndexSlice-Cq0CmY1s.js";import"./renderedTicksSlice-6MUNcuFU.js";import"./CartesianChart-C-l714_S.js";import"./chartDataContext-Dpw29ePn.js";import"./CategoricalChart-Cnq8zR7d.js";import"./CartesianAxis-DnPHxzem.js";import"./Layer-DYkX7ETa.js";import"./Text-BDAX0lGk.js";import"./DOMUtils-JSRhYAW0.js";import"./Label-Y-xTk_cW.js";import"./ZIndexLayer-BvKo2Q94.js";import"./types-BfZOKs5E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-QKY7d0Xg.js";import"./Curve-B_0v1Aat.js";import"./step-8t-ymKLI.js";import"./tooltipContext-CU8PSybI.js";import"./Symbols-B6BVciUF.js";import"./symbol-B1XBVJt7.js";import"./ActiveShapeUtils-BuFEUH-Q.js";import"./isPlainObject-DaSvI5No.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-s1druNuz.js";import"./useAnimationId-BDrjbpdr.js";import"./Trapezoid-AXqmqz4r.js";import"./Sector-DniAdCyK.js";import"./RegisterGraphicalItemId-C8YIxCe8.js";import"./ErrorBarContext-DoWBXbsV.js";import"./GraphicalItemClipPath-CHSUdKNG.js";import"./SetGraphicalItem-Bw_3CFfP.js";import"./CSSTransitionAnimate-BT4Gw1S2.js";import"./useElementOffset-DJYK6Hsq.js";import"./uniqBy-b0QTBHFG.js";import"./iteratee-Dhe2fzDM.js";import"./Cross-6qCx2RC4.js";import"./index-CmbvRTYj.js";import"./ChartSizeDimensions-D4m-G81R.js";import"./OffsetShower-r4JmIKW8.js";import"./PlotAreaShower-CAZL1ycm.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
