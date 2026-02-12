import{e as r}from"./iframe-ByhUx3i5.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-B5mOXJyL.js";import{C as d}from"./CartesianGrid-cSH_-Fn1.js";import{X as c}from"./XAxis-BI5mxokc.js";import{Y as y}from"./YAxis-D42CMzIK.js";import{S as h}from"./Scatter-DZCgZeQG.js";import{E as e}from"./ErrorBar-x0_hXWg_.js";import{T as u}from"./Tooltip-DmR6kuQ8.js";import{R as f}from"./RechartsHookInspector-7ObrtXBg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CIwNTWTh.js";import"./arrayEqualityCheck-Dc2-6IGJ.js";import"./resolveDefaultProps-BXU9cl7Q.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-3yl5iFEg.js";import"./axisSelectors-NQs8EjRk.js";import"./zIndexSlice-D3kDw7sn.js";import"./CartesianChart-R5e0LOwa.js";import"./chartDataContext-BYf5RbAV.js";import"./CategoricalChart-5ePC_oFI.js";import"./CartesianAxis-Dz61qQ6A.js";import"./Layer-C6tXeN-I.js";import"./Text-D9qGFk_y.js";import"./DOMUtils-CN3Smf_c.js";import"./Label-CEJ3y0id.js";import"./ZIndexLayer-ktHWf7_5.js";import"./types-CJt6eGgj.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BmZRR5An.js";import"./Curve-CS0P1hcX.js";import"./tooltipContext-7NlN6gcD.js";import"./Symbols-C3LGHQVt.js";import"./ActiveShapeUtils-CvF1aWoR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxW-1m5M.js";import"./useAnimationId-aMq0pZgy.js";import"./Trapezoid-BUngsVtC.js";import"./Sector-BymBl_Im.js";import"./RegisterGraphicalItemId-CUDjPLNo.js";import"./ErrorBarContext-Coaa-8b_.js";import"./GraphicalItemClipPath-CCO6Hfg0.js";import"./SetGraphicalItem-d5ssc5Bz.js";import"./CSSTransitionAnimate-BGzcf0Mc.js";import"./useElementOffset-CNw39Ncf.js";import"./iteratee-k1Sg484z.js";import"./Cross-Bba_iUMz.js";import"./index-Bitkd77q.js";import"./ChartSizeDimensions-DxQjWf1j.js";import"./OffsetShower-DxCTP-c8.js";import"./PlotAreaShower-DB1zgg4x.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
