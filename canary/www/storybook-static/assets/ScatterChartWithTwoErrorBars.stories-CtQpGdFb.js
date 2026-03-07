import{e as r}from"./iframe-BUt3wnEM.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DsLEYU2V.js";import{C as d}from"./CartesianGrid-BgL3q-w5.js";import{X as c}from"./XAxis-Ireg13eN.js";import{Y as y}from"./YAxis-BhjjKpsZ.js";import{S as h}from"./Scatter-BCVtTG2V.js";import{E as e}from"./ErrorBar-CzTqGw00.js";import{T as u}from"./Tooltip-Bzx5G5tF.js";import{R as f}from"./RechartsHookInspector-u0LRhk5N.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-z5ezD12U.js";import"./arrayEqualityCheck-DNOyFRmd.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dk1l2Vo6.js";import"./immer-Djj2d5DN.js";import"./PolarUtils-CTnnDHZv.js";import"./index-pWLF-s6P.js";import"./hooks-CaJZCr7l.js";import"./axisSelectors-B8r2gBVy.js";import"./d3-scale-BSxK4JDa.js";import"./zIndexSlice-7peEmfkk.js";import"./renderedTicksSlice-Cr17VpQE.js";import"./CartesianChart-BzRkrrXE.js";import"./chartDataContext-Cyy9MogO.js";import"./CategoricalChart-BpyTrJhB.js";import"./CartesianAxis-DLCN0lIN.js";import"./Layer-f0MP4yLB.js";import"./Text-D2qhx32y.js";import"./DOMUtils-Depo16NU.js";import"./Label-BNS9QM1w.js";import"./ZIndexLayer-CD2y65wD.js";import"./types-C3jmTsfH.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cta0-SSd.js";import"./Curve-BEPpct8h.js";import"./step-CelYc6K9.js";import"./tooltipContext-GQvEWUxC.js";import"./Symbols-1DUTRnJc.js";import"./symbol-x739FVZ2.js";import"./ActiveShapeUtils-Cy5NcMU8.js";import"./isPlainObject-BhaX48PC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CYFau3NF.js";import"./useAnimationId-0NKy_VJI.js";import"./Trapezoid-Bi5qBDT5.js";import"./Sector-CEgJ3DUB.js";import"./RegisterGraphicalItemId-Cwf1Uzb7.js";import"./ErrorBarContext-DOPfAlmD.js";import"./GraphicalItemClipPath-7Tn5wXWU.js";import"./SetGraphicalItem-DIiOAn_y.js";import"./CSSTransitionAnimate-BO3oDs0i.js";import"./useElementOffset-BQUAZa3L.js";import"./uniqBy-CsYmUuw-.js";import"./iteratee-CTh-iFMu.js";import"./Cross-BqZ9ZOi6.js";import"./index-vkdvzxS4.js";import"./ChartSizeDimensions-Ch1iJoza.js";import"./OffsetShower-Bgrzwk34.js";import"./PlotAreaShower-BgnhljdN.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
