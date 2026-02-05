import{e as r}from"./iframe-CWWhV85a.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-J80AWyIo.js";import{C as d}from"./CartesianGrid-C3-6Xyui.js";import{X as c}from"./XAxis-Csdvagzn.js";import{Y as y}from"./YAxis-DfgzXKJt.js";import{S as h}from"./Scatter-Dy60YYiF.js";import{E as e}from"./ErrorBar-C4x2aZ_Z.js";import{T as u}from"./Tooltip-BIDBFQ2N.js";import{R as f}from"./RechartsHookInspector-C1-BzxNv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B76lvk5b.js";import"./arrayEqualityCheck-BrvYjDvj.js";import"./resolveDefaultProps-C1e51uNd.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./zIndexSlice-DakyRb4z.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./CartesianAxis-BLwbg9OG.js";import"./Layer-CEGJXWpg.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./Label-sj2OS_tg.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./types-HO0i5iTi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-erR6fuGc.js";import"./Curve-CEhuq5Wz.js";import"./tooltipContext-BFGNKkU0.js";import"./Symbols-D5GFnflg.js";import"./ActiveShapeUtils-D-wBc36w.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgoKSUUy.js";import"./useAnimationId--U2HKBmo.js";import"./Trapezoid-CadbmzeJ.js";import"./Sector-CjkT0xYm.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./ErrorBarContext-BiKvJSsP.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./CSSTransitionAnimate-Cs1Gg-NI.js";import"./useElementOffset-CDAAba6N.js";import"./iteratee-5pGWl1WW.js";import"./Cross-Cr6e7nmy.js";import"./index-1_XwddF_.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./OffsetShower-BriTQDS6.js";import"./PlotAreaShower-CFNBsBQe.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
