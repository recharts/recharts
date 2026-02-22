import{e as r}from"./iframe-CqeTTYgU.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CPCwk-iE.js";import{C as d}from"./CartesianGrid-yfJNILtK.js";import{X as c}from"./XAxis-BD3HY8Ew.js";import{Y as y}from"./YAxis-G7ixdQ8E.js";import{S as h}from"./Scatter-CnKN728u.js";import{E as e}from"./ErrorBar-Bv7cgNhv.js";import{T as u}from"./Tooltip-Cr2ndAdc.js";import{R as f}from"./RechartsHookInspector-DuqrKYC7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D6Akcaf8.js";import"./arrayEqualityCheck-Coc3X9xQ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cwp1jNVd.js";import"./immer-Bmaq1-Mg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BO_IR7-E.js";import"./hooks-BVZwqIsr.js";import"./axisSelectors-eZrQ8WsS.js";import"./d3-scale-BUPtB_Da.js";import"./zIndexSlice-B88Xz9xU.js";import"./renderedTicksSlice-8ohVO2kh.js";import"./CartesianChart-DZdtJPpm.js";import"./chartDataContext-Ldzwvxi_.js";import"./CategoricalChart-BJzA0W2C.js";import"./CartesianAxis-B73_0LJP.js";import"./Layer-BQFYDPNU.js";import"./Text-CnAhi5dg.js";import"./DOMUtils-CyUZ16Kt.js";import"./Label-CPRQ4lU_.js";import"./ZIndexLayer-3q_nDWL4.js";import"./types-Bq8qb-jz.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B-FxzwwC.js";import"./Curve-BysHPIUF.js";import"./step-D7PdYBbD.js";import"./tooltipContext-BI-Mou3E.js";import"./Symbols-CZaCanOC.js";import"./symbol-DUDKRTy9.js";import"./ActiveShapeUtils-DuOrrb61.js";import"./isPlainObject-D0uwI2wh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ns2TMUOg.js";import"./useAnimationId-qdD0Hx_g.js";import"./Trapezoid-CAvqiTd0.js";import"./Sector-DAbvgQ-I.js";import"./RegisterGraphicalItemId-BIO7eBqw.js";import"./ErrorBarContext-CkyHavp9.js";import"./GraphicalItemClipPath-CG5McJvS.js";import"./SetGraphicalItem--tjWfp6d.js";import"./CSSTransitionAnimate-DLZnpW57.js";import"./useElementOffset-BoMITrwv.js";import"./uniqBy-Cx5jog5w.js";import"./iteratee-DUK5kNMd.js";import"./Cross-7tIjJRue.js";import"./index-B3OxvjqV.js";import"./ChartSizeDimensions-VEbBqbyV.js";import"./OffsetShower-DVBsz6mw.js";import"./PlotAreaShower-DAW7_xjH.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
