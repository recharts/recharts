import{e as r}from"./iframe-DTYvDHnt.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-uIvYZuGg.js";import{C as d}from"./CartesianGrid-NSfsJ-pb.js";import{X as c}from"./XAxis-D4mtTZaA.js";import{Y as y}from"./YAxis-D1_iMkgA.js";import{S as h}from"./Scatter-BvEhZi2r.js";import{E as e}from"./ErrorBar-DDs3CdFF.js";import{T as u}from"./Tooltip-CD_Acrkl.js";import{R as f}from"./RechartsHookInspector-Pg_EkWGi.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_fFV3co.js";import"./arrayEqualityCheck-1nsmynxr.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DkSqodrF.js";import"./immer-D3GAE1ff.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B3wSVZ9D.js";import"./hooks-uuM42g5A.js";import"./axisSelectors-BgDhuMKt.js";import"./d3-scale-RiIvDOIa.js";import"./zIndexSlice-CBk7l9Bz.js";import"./renderedTicksSlice-B_O9XDCU.js";import"./CartesianChart-xLj2uFa2.js";import"./chartDataContext-BLIq9hU3.js";import"./CategoricalChart-DV8kXzgp.js";import"./CartesianAxis-BvJIB3EW.js";import"./Layer-D1ZUQvW9.js";import"./Text--JvpmNSB.js";import"./DOMUtils-BViGwjhG.js";import"./Label-Dl6pWHvn.js";import"./ZIndexLayer-DhriUgdb.js";import"./types-JQYj2LUa.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C-Mw6kzE.js";import"./Curve-D1NGPsms.js";import"./step-CL79bITl.js";import"./tooltipContext-BoDWUbo_.js";import"./Symbols-iaprTSLF.js";import"./symbol-Bx0PtbXY.js";import"./ActiveShapeUtils-vpnhlhYE.js";import"./isPlainObject-D_8yM-sa.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DrpDkrfm.js";import"./useAnimationId-CwNlC5fD.js";import"./Trapezoid-BdxbKZVQ.js";import"./Sector-BIC07wIa.js";import"./RegisterGraphicalItemId-o-_afPny.js";import"./ErrorBarContext-C4u9P8TO.js";import"./GraphicalItemClipPath-ByUNJAKI.js";import"./SetGraphicalItem-DcRf1D23.js";import"./CSSTransitionAnimate-j_Ohwr40.js";import"./useElementOffset-C3QFuFW6.js";import"./uniqBy-Cx8gc7BP.js";import"./iteratee-DofHrmgf.js";import"./Cross-Bs6X0R9T.js";import"./index-CrrTnEOk.js";import"./ChartSizeDimensions-Dx17ITl5.js";import"./OffsetShower-BCss9x5E.js";import"./PlotAreaShower-EDiIsOli.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
