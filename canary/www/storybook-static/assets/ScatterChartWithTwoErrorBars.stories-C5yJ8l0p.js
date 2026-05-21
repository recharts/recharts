import{e as r}from"./iframe-Cn9771Nb.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DOM_I8qc.js";import{C as d}from"./CartesianGrid-GyJpwBAe.js";import{X as c}from"./XAxis-CdGr2Iem.js";import{Y as y}from"./YAxis-TQXh0mQm.js";import{S as h}from"./Scatter-BL-T5dfE.js";import{E as e}from"./ErrorBar-B3NOi-06.js";import{T as u}from"./Tooltip-CF355n77.js";import{R as f}from"./RechartsHookInspector-ByD7qz5q.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-1z_kIANU.js";import"./arrayEqualityCheck-D-ixwH56.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DDTNdovN.js";import"./immer-Dn_-MauB.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BoXkF8M8.js";import"./hooks-O4XLkxr8.js";import"./axisSelectors-BMVy_6Bx.js";import"./d3-scale-BZXwjMGy.js";import"./zIndexSlice-B5zV17Bd.js";import"./renderedTicksSlice-CwaBKoDv.js";import"./CartesianChart-B8UuiIR4.js";import"./chartDataContext-DlTJMN40.js";import"./CategoricalChart-Doln_IjV.js";import"./CartesianAxis-DUvQ6ZkT.js";import"./Layer-CoWJhcnT.js";import"./Text-Ds1KECTG.js";import"./DOMUtils-CumEt8nf.js";import"./Label-DQheKZVl.js";import"./ZIndexLayer-DUDNhmE-.js";import"./types-BeorWpRA.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CChdz-3q.js";import"./Curve-qT1eTXpe.js";import"./step-BLbmOldc.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Br-icOwL.js";import"./Symbols-7btMV5dQ.js";import"./symbol-Bxk0cYsM.js";import"./ActiveShapeUtils-CchfY29Y.js";import"./RegisterGraphicalItemId-BPnyUTiw.js";import"./ErrorBarContext-DTo-1FhF.js";import"./GraphicalItemClipPath-B_ckz-a6.js";import"./SetGraphicalItem-CgvN0HNW.js";import"./useAnimationId-5N3XsSyx.js";import"./CSSTransitionAnimate-C78cxO9o.js";import"./useElementOffset-BmhffW7B.js";import"./uniqBy-iZZmpyGq.js";import"./iteratee-DKSJObgo.js";import"./Cross-D8ACR-lS.js";import"./Rectangle-DHVB8KHg.js";import"./Sector-Z_tZKkWO.js";import"./index-CIRzOza-.js";import"./ChartSizeDimensions-BsavwcKk.js";import"./OffsetShower-mfqGnir7.js";import"./PlotAreaShower-DtKJCQsO.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
