import{e as r}from"./iframe-B5r3cecm.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-W-ITEED3.js";import{C as d}from"./CartesianGrid-DNHyoKf7.js";import{X as c}from"./XAxis-BkMRDr4M.js";import{Y as y}from"./YAxis-TYBY8JO1.js";import{S as h}from"./Scatter-2qIGgcAY.js";import{E as e}from"./ErrorBar-tbRAIPml.js";import{T as u}from"./Tooltip-BIQQ3nSZ.js";import{R as f}from"./RechartsHookInspector-DV5jRegM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CS6LSkHo.js";import"./arrayEqualityCheck-Czqc1yJH.js";import"./resolveDefaultProps-B0ReOK4v.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-Cgvn8GGi.js";import"./axisSelectors-DlyGXsEB.js";import"./zIndexSlice-BBl8Rk0R.js";import"./CartesianChart-ByljlebW.js";import"./chartDataContext-CLEPAMGZ.js";import"./CategoricalChart-BNRlOmyd.js";import"./CartesianAxis-Xf3h13YN.js";import"./Layer-5sA9M2a_.js";import"./Text-DBsFj5kG.js";import"./DOMUtils-BMUc0bMB.js";import"./Label-CuwvUyc2.js";import"./ZIndexLayer-CK5fYLk5.js";import"./types-0ytZb3l6.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CFOSv3NQ.js";import"./Curve-BkRyhV0i.js";import"./tooltipContext-BQbQDo2U.js";import"./Symbols-B2Id_P0j.js";import"./ActiveShapeUtils-4xjvutom.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CEg1ZuEo.js";import"./useAnimationId-BDFPsv26.js";import"./Trapezoid-B9ic5-qM.js";import"./Sector-Dx2gEVnp.js";import"./RegisterGraphicalItemId-C9-Dm0DM.js";import"./ErrorBarContext-VyPM_pF3.js";import"./GraphicalItemClipPath-BBRif3g7.js";import"./SetGraphicalItem-D_EjQgzP.js";import"./CSSTransitionAnimate-DAufW7d9.js";import"./useElementOffset-INb4C0IV.js";import"./iteratee-COsU9f0b.js";import"./Cross-DGUzgXKt.js";import"./index-BkOLfLi3.js";import"./ChartSizeDimensions-BCzYpqeT.js";import"./OffsetShower-BgXcnRpM.js";import"./PlotAreaShower-CbYe2LCs.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
