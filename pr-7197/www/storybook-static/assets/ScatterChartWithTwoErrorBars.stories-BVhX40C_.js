import{e as r}from"./iframe-Bg9Z345n.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DLp_3q3d.js";import{C as d}from"./CartesianGrid-Dn3x157K.js";import{X as c}from"./XAxis-DhRZk_Mh.js";import{Y as y}from"./YAxis-BhiIVd-U.js";import{S as h}from"./Scatter-DzjzEoq4.js";import{E as e}from"./ErrorBar-IUoMZIIw.js";import{T as u}from"./Tooltip-BJk6GwsQ.js";import{R as f}from"./RechartsHookInspector-DZje97zi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-8iTtnHJd.js";import"./arrayEqualityCheck-CR8W5Kti.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-1kFCboKo.js";import"./immer-BVutyhQF.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DmHLw308.js";import"./hooks-BQaOS62t.js";import"./axisSelectors-26bP4L-h.js";import"./d3-scale-Dqhx0vW7.js";import"./zIndexSlice-peT_55F_.js";import"./renderedTicksSlice-By7COYk0.js";import"./CartesianChart-LuczCI7G.js";import"./chartDataContext-UodH6WPb.js";import"./CategoricalChart-DxtCX4Pl.js";import"./CartesianAxis-2wCCgYqS.js";import"./Layer-BdGV6vMM.js";import"./Text-DxC6lCk_.js";import"./DOMUtils-DkCGUMsy.js";import"./Label-CELZqSQs.js";import"./ZIndexLayer-DPL5778T.js";import"./types-B4W4ehrV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BmxePv9D.js";import"./Curve-CW_ra8M9.js";import"./step-DoGAfiJ-.js";import"./tooltipContext-BebsRlPR.js";import"./Symbols-tflhkrqf.js";import"./symbol-Bo8u8Uca.js";import"./ActiveShapeUtils-te7DRz-E.js";import"./isPlainObject-Bo6U1upe.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-EnxeHGuf.js";import"./useAnimationId-DlZyApEc.js";import"./Trapezoid-DbTvkq0k.js";import"./Sector-Cn3PZ_qJ.js";import"./RegisterGraphicalItemId-CQ218WRb.js";import"./ErrorBarContext-Cj6LG5IF.js";import"./GraphicalItemClipPath-DwPF2ph8.js";import"./SetGraphicalItem-H_2GMEv6.js";import"./CSSTransitionAnimate-aRjcpU0T.js";import"./useElementOffset-DW5Fjzna.js";import"./uniqBy-vl8O6EJ5.js";import"./iteratee-CDnMDBPk.js";import"./Cross-mvX4C_43.js";import"./index-CjwjTBDZ.js";import"./ChartSizeDimensions-Uo90Geyy.js";import"./OffsetShower-C3m1IvZt.js";import"./PlotAreaShower-CfpcGPOz.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
