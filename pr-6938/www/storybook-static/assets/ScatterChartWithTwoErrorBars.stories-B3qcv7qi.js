import{e as r}from"./iframe-DE0S0nct.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BQ_MGVXj.js";import{S as p}from"./ScatterChart-xRRFlHAr.js";import{C as d}from"./CartesianGrid-xqUvOSJ7.js";import{X as c}from"./XAxis-HiP-oMgI.js";import{Y as y}from"./YAxis-ASXYxn9M.js";import{S as h}from"./Scatter-DabZIqnb.js";import{E as e}from"./ErrorBar-Bz4SDUqw.js";import{T as u}from"./Tooltip-c4RdN7f5.js";import{R as f}from"./RechartsHookInspector-dBbs_0nU.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C5KB-qxr.js";import"./arrayEqualityCheck-njkWtJmX.js";import"./resolveDefaultProps-DuoQUEeP.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-DWbbdqvJ.js";import"./axisSelectors-BfEHf8Yv.js";import"./zIndexSlice-Blf1dc2N.js";import"./CartesianChart-BBxR-i6W.js";import"./chartDataContext-CPGe86t4.js";import"./CategoricalChart-CSOSO7HJ.js";import"./CartesianAxis-CwKKuba7.js";import"./Layer-BleDqXEW.js";import"./Text-DM7a8pWI.js";import"./DOMUtils-A7wZFaJD.js";import"./Label-DgM-_lJi.js";import"./ZIndexLayer-Dp1Pf4so.js";import"./types-B8SW-iMR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BtFFfC7o.js";import"./Curve-BVDZfIkI.js";import"./tooltipContext-DoH9SX65.js";import"./Symbols-w5RZTm0Y.js";import"./ActiveShapeUtils-2Zcp-jd_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpQeIB4m.js";import"./useAnimationId-BumXreuS.js";import"./Trapezoid-BZphNEJe.js";import"./Sector-DcADG8WR.js";import"./RegisterGraphicalItemId-BfeEISo0.js";import"./ErrorBarContext-CdBsOezF.js";import"./GraphicalItemClipPath-JwwxWQFx.js";import"./SetGraphicalItem-DO-9Utur.js";import"./CSSTransitionAnimate-DG9WSzMj.js";import"./useElementOffset-G6wVWYzT.js";import"./iteratee-DE09Y-Is.js";import"./Cross-CpfL9XrS.js";import"./index-C9PHO12n.js";import"./ChartSizeDimensions-Bvtmd44U.js";import"./OffsetShower-6Tlh9GY1.js";import"./PlotAreaShower-C2nHCOpp.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
