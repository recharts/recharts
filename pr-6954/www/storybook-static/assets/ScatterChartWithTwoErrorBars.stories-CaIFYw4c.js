import{e as r}from"./iframe-Bsm65lpu.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BQ_MGVXj.js";import{S as p}from"./ScatterChart-BBPZ1vgD.js";import{C as d}from"./CartesianGrid-B77oMTii.js";import{X as c}from"./XAxis-TRGWr1gg.js";import{Y as y}from"./YAxis-B-wKWhdg.js";import{S as h}from"./Scatter-KKp3nctA.js";import{E as e}from"./ErrorBar-DTfY3g_7.js";import{T as u}from"./Tooltip-DHYotQwp.js";import{R as f}from"./RechartsHookInspector-Clmx80vb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-De8mSPBF.js";import"./arrayEqualityCheck-pVpwfhw9.js";import"./resolveDefaultProps-rxG_-3GU.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-C8-QiYSZ.js";import"./axisSelectors-BL5_jCnI.js";import"./zIndexSlice-CyooY4AF.js";import"./CartesianChart-COAh2GwA.js";import"./chartDataContext-BzZNyNeo.js";import"./CategoricalChart-CpYGwsdd.js";import"./CartesianAxis-BtMXIbHW.js";import"./Layer-wMrNll4f.js";import"./Text-qBvU-JXf.js";import"./DOMUtils-D61cKDLm.js";import"./Label-BJg3D3z3.js";import"./ZIndexLayer-B9ntexjH.js";import"./types-DNFwz7vs.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dg23rHrH.js";import"./Curve-Dwdi27bs.js";import"./tooltipContext-CW6cq-3Y.js";import"./Symbols-lC3l514a.js";import"./ActiveShapeUtils-D74FXmj1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CqOp_VNA.js";import"./useAnimationId-dI2bK3sU.js";import"./Trapezoid-DD-HamH_.js";import"./Sector-BjJSeVtU.js";import"./RegisterGraphicalItemId-D7Q-Ng9s.js";import"./ErrorBarContext-ypCLG3pm.js";import"./GraphicalItemClipPath-DmxStlHE.js";import"./SetGraphicalItem-BK1cbA1C.js";import"./CSSTransitionAnimate-Czxw7uiz.js";import"./useElementOffset-F4mKjVmk.js";import"./iteratee-D5J6UOkd.js";import"./Cross-BQpIxuJM.js";import"./index-CU5fePgk.js";import"./ChartSizeDimensions-CraFDmRl.js";import"./OffsetShower-Cb2JVvak.js";import"./PlotAreaShower-Bu5CsAfQ.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
