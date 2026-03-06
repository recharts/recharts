import{e as r}from"./iframe-I81QGiZ0.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-B9036uhD.js";import{C as d}from"./CartesianGrid-D0gWY7Nf.js";import{X as c}from"./XAxis-CQKq-ex8.js";import{Y as y}from"./YAxis-w5mY6Ink.js";import{S as h}from"./Scatter-BlG6CDEj.js";import{E as e}from"./ErrorBar-rv8ENnQt.js";import{T as u}from"./Tooltip-UxmMbkYs.js";import{R as f}from"./RechartsHookInspector-CY8GaMGS.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DhPN24j4.js";import"./arrayEqualityCheck-DEF1A1K9.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CESK2sOz.js";import"./immer-Bx-m2dTE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-MTHTVMV2.js";import"./hooks-BwARZfYC.js";import"./axisSelectors-D3NUsEze.js";import"./d3-scale-BKQywhX-.js";import"./zIndexSlice-BTQopzha.js";import"./renderedTicksSlice-DjaQJSKB.js";import"./CartesianChart-BgVpH7Hp.js";import"./chartDataContext-DLJ8LOtf.js";import"./CategoricalChart-Dhxptkdp.js";import"./CartesianAxis-B00ihn4w.js";import"./Layer-nQYqqIOO.js";import"./Text-CYvk9Z-R.js";import"./DOMUtils-DRotObOj.js";import"./Label-LA2ogkfT.js";import"./ZIndexLayer-R3Wk8cgP.js";import"./types-CpBHwU86.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-bl8BpOYM.js";import"./Curve-COcp6alG.js";import"./step-DCb-mqT3.js";import"./tooltipContext-BkxoPcwr.js";import"./Symbols-MCFH85eq.js";import"./symbol-B5gXRZo2.js";import"./ActiveShapeUtils-C9oxgbzm.js";import"./isPlainObject-3DRjiOwk.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSAz1yWp.js";import"./useAnimationId-BTiaxNBH.js";import"./Trapezoid-BCwQCoIH.js";import"./Sector-CEDvP0Pt.js";import"./RegisterGraphicalItemId-ECNqkOOP.js";import"./ErrorBarContext-6fNIAsL2.js";import"./GraphicalItemClipPath-BVS2WqeA.js";import"./SetGraphicalItem-D5u-UCbo.js";import"./CSSTransitionAnimate-bxyYb83x.js";import"./useElementOffset-BIXhMv0f.js";import"./uniqBy-DtcJp7bW.js";import"./iteratee-Al1RcwZC.js";import"./Cross-9H6MLiUO.js";import"./index-DG9lLNBE.js";import"./ChartSizeDimensions-BL05aSMc.js";import"./OffsetShower-B9su28DB.js";import"./PlotAreaShower-D0Rx9exC.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
