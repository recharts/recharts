import{e as r}from"./iframe-DuNEY226.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BtiTBXHU.js";import{C as d}from"./CartesianGrid-BNTlTqSI.js";import{X as c}from"./XAxis-DdwDbuRS.js";import{Y as y}from"./YAxis-QXoWtC2j.js";import{S as h}from"./Scatter-CzUQBdWu.js";import{E as e}from"./ErrorBar-BIaylR6C.js";import{T as u}from"./Tooltip-DzNFVnQe.js";import{R as f}from"./RechartsHookInspector-CfHmmsr6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEqZKjHf.js";import"./arrayEqualityCheck-DDMqu3f1.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-C-2Byojj.js";import"./immer-BVAwiqUd.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D7ubYLAP.js";import"./hooks-DB_oXYxy.js";import"./axisSelectors-DAR8t-c9.js";import"./d3-scale-CgGCPdr7.js";import"./zIndexSlice-CRDA7WbI.js";import"./renderedTicksSlice-BQwvsrpL.js";import"./CartesianChart-v-wDegKF.js";import"./chartDataContext-D8l2QHPQ.js";import"./CategoricalChart-C_g1w3w0.js";import"./CartesianAxis-BtkWVQbW.js";import"./Layer-D_n9WiuW.js";import"./Text-Dc6VXTKK.js";import"./DOMUtils-C-AY4UId.js";import"./Label-DKCGVJ9i.js";import"./ZIndexLayer-CZdiz2vD.js";import"./types-D9KOomKd.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DRluxBO3.js";import"./Curve-ipLw690D.js";import"./step-CHzygN7O.js";import"./tooltipContext-BUJfSZPi.js";import"./Symbols-Dk3gQBwn.js";import"./symbol-4CsV8iHb.js";import"./ActiveShapeUtils-BVtqisMr.js";import"./isPlainObject-DB3_XzF8.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CkXHm1Ql.js";import"./useAnimationId-DN_Wn8rj.js";import"./Trapezoid-BXsyVm6P.js";import"./Sector-b9d-huvK.js";import"./RegisterGraphicalItemId-BWMdn6qI.js";import"./ErrorBarContext-CbQdG_x_.js";import"./GraphicalItemClipPath-CeHrZ0UX.js";import"./SetGraphicalItem-CfNV3Vyt.js";import"./CSSTransitionAnimate-yH9_O7m0.js";import"./useElementOffset-Cw1qFCGU.js";import"./uniqBy-BfsRDBur.js";import"./iteratee-GcQQ2EFV.js";import"./Cross-DSA3TX4-.js";import"./index-CE1COEz0.js";import"./ChartSizeDimensions-CTe7q-3t.js";import"./OffsetShower-CpVXhOAG.js";import"./PlotAreaShower-CXvEQ9OL.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
