import{e as r}from"./iframe-DhkZ2o0m.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-n65C5RwG.js";import{C as d}from"./CartesianGrid-fnsXYIZE.js";import{X as c}from"./XAxis-C7MynCpy.js";import{Y as y}from"./YAxis-BaziairH.js";import{S as h}from"./Scatter-D9TJd2Qq.js";import{E as e}from"./ErrorBar-GWTnvYtE.js";import{T as u}from"./Tooltip-aXw6ArRT.js";import{R as f}from"./RechartsHookInspector-BuoZ4ObR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CmxS5fzr.js";import"./arrayEqualityCheck-DiorVL0F.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CSGl7VrG.js";import"./immer-Bkx33mOQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-SD_aaOBA.js";import"./hooks-OILl07sr.js";import"./axisSelectors-Cvg0ebzb.js";import"./d3-scale-q2jyLF3t.js";import"./zIndexSlice-DaOHrDE6.js";import"./renderedTicksSlice-D1lm_SFB.js";import"./CartesianChart-aiKFXcKI.js";import"./chartDataContext-B8muVvAS.js";import"./CategoricalChart-BQJMywxR.js";import"./CartesianAxis-Cd-ivPq_.js";import"./Layer-d6_qX3Uw.js";import"./Text-DrfD7ZzH.js";import"./DOMUtils-qE1uPIkW.js";import"./Label-5AtDVNzN.js";import"./ZIndexLayer-CshXapoA.js";import"./types-BTJpC2jO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BqOB82pn.js";import"./Curve-B6e_2wmJ.js";import"./step-BPbIkI3w.js";import"./tooltipContext-ILD7aXDO.js";import"./Symbols-BdtXuEdD.js";import"./symbol-DeXXZ1mf.js";import"./ActiveShapeUtils-BaWWvfWL.js";import"./isPlainObject-vBW-S9US.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C8JV8bc4.js";import"./useAnimationId-C7zWi5EW.js";import"./Trapezoid-C1XUw6XG.js";import"./Sector-8SUCxTQC.js";import"./RegisterGraphicalItemId--Yyxg6pn.js";import"./ErrorBarContext-e2M7C2yw.js";import"./GraphicalItemClipPath-yVVA2tQv.js";import"./SetGraphicalItem-_G_kPX0B.js";import"./CSSTransitionAnimate-Xmk77mKO.js";import"./useElementOffset-3zZsr7Mt.js";import"./uniqBy-urIHRb66.js";import"./iteratee-4UOx2hxl.js";import"./Cross-Cq1_dEfO.js";import"./index-CflVzEfn.js";import"./ChartSizeDimensions-lGHONQf_.js";import"./OffsetShower-DEQj44LB.js";import"./PlotAreaShower-DvHNujuQ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
