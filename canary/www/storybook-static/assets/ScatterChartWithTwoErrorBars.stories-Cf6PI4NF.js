import{e as r}from"./iframe-DY46aw1T.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-7C5jbPko.js";import{C as d}from"./CartesianGrid-dk7kWvQd.js";import{X as c}from"./XAxis-_Mr4CO1Y.js";import{Y as y}from"./YAxis-DuAnuVSE.js";import{S as h}from"./Scatter-u6NsS-Lf.js";import{E as e}from"./ErrorBar-Bb181tge.js";import{T as u}from"./Tooltip-BIlPfuWE.js";import{R as f}from"./RechartsHookInspector-DkRCe0AE.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSeg5AQz.js";import"./arrayEqualityCheck-0_K9klWl.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Cb7Us82j.js";import"./immer-BvCcuZ6o.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D_nfX1S8.js";import"./hooks-nf1zKR0g.js";import"./axisSelectors-C9B6Wugz.js";import"./d3-scale-DfNPAUjz.js";import"./zIndexSlice-CoVcCSuo.js";import"./renderedTicksSlice-D-nZzoJO.js";import"./CartesianChart-DO22hXPG.js";import"./chartDataContext-DXzlJMXH.js";import"./CategoricalChart-DUj4pKmY.js";import"./CartesianAxis-CK3eGRof.js";import"./Layer-hFhQiM_L.js";import"./Text-BzNExQTR.js";import"./DOMUtils-DGEQ3O38.js";import"./Label-BXRSGziE.js";import"./ZIndexLayer-DnZ_K0Nx.js";import"./types-Dtzv1a1O.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Cz-9gufx.js";import"./Curve-DQutT_ql.js";import"./step-CyrTl9M_.js";import"./tooltipContext-DBoXDcOk.js";import"./Symbols-CVBOcrIt.js";import"./symbol-CEFOgOTV.js";import"./ActiveShapeUtils-C_pX6xWx.js";import"./isPlainObject-zUPa-N8J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BEP5-Dm7.js";import"./useAnimationId-Zdg7gWN0.js";import"./Trapezoid-vSPDkj38.js";import"./Sector-BAsKK7Vz.js";import"./RegisterGraphicalItemId-wZiFGjJl.js";import"./ErrorBarContext-BdBDnSnf.js";import"./GraphicalItemClipPath-BxX-Y-FU.js";import"./SetGraphicalItem-V1giDG84.js";import"./CSSTransitionAnimate-mhEoyHLN.js";import"./useElementOffset-DwWwMAQX.js";import"./uniqBy-CUYvsV5i.js";import"./iteratee-Dyz53KPO.js";import"./Cross-FrkejMi3.js";import"./index-Bfh64D8_.js";import"./ChartSizeDimensions-Cyi7sjqL.js";import"./OffsetShower-Ci2ghI7q.js";import"./PlotAreaShower-DdXIA49x.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
