import{e as r}from"./iframe-BxnpLNlI.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-6-6MjpjF.js";import{C as d}from"./CartesianGrid-CF0QmcFA.js";import{X as c}from"./XAxis-DivYk73O.js";import{Y as y}from"./YAxis-N3Hr219E.js";import{S as h}from"./Scatter-BHYzutoE.js";import{E as e}from"./ErrorBar-Dshfhnbu.js";import{T as u}from"./Tooltip--8SzPCJz.js";import{R as f}from"./RechartsHookInspector-BB1lEmoR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_MSRa_Ei.js";import"./arrayEqualityCheck-Ev4pEcaj.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-znjuu04v.js";import"./immer-BkCi42RL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-b30Cmp9V.js";import"./hooks-C-flJ6p6.js";import"./axisSelectors-CNXspQbT.js";import"./d3-scale-ClZ26DSd.js";import"./zIndexSlice--EK8Um__.js";import"./renderedTicksSlice-BJPmxvjH.js";import"./CartesianChart-C-nBds0D.js";import"./chartDataContext-j05r-NuJ.js";import"./CategoricalChart-DZvzXAdF.js";import"./CartesianAxis-xelplfqC.js";import"./Layer-CjPvoy9w.js";import"./Text-lfWzmX-o.js";import"./DOMUtils-BwcWjDda.js";import"./Label-BJJgujul.js";import"./ZIndexLayer-BFJ6fW_I.js";import"./types-gZ1RVbMB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BdNEbP_1.js";import"./Curve-Cd2m7ztB.js";import"./step-ClrTL6ck.js";import"./tooltipContext-SqfwDtSJ.js";import"./Symbols-7Di5jhUy.js";import"./symbol-CNSHwdEE.js";import"./ActiveShapeUtils-BFvjG2KX.js";import"./isPlainObject-B1iN99vF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvUDBcr-.js";import"./useAnimationId-BkMfgj6S.js";import"./Trapezoid-BVhmBeys.js";import"./Sector-B9qkET69.js";import"./RegisterGraphicalItemId-D2g_8__I.js";import"./ErrorBarContext-BbpRKECp.js";import"./GraphicalItemClipPath-BWEZTu7p.js";import"./SetGraphicalItem-legQuKyA.js";import"./CSSTransitionAnimate-pXFPelBA.js";import"./useElementOffset-qjVs9Par.js";import"./uniqBy-CKqIpa99.js";import"./iteratee-DIaIkoeV.js";import"./Cross-DI1x1Q9N.js";import"./index-D27xip60.js";import"./ChartSizeDimensions-CkjlP-Hw.js";import"./OffsetShower-tOvUkh5S.js";import"./PlotAreaShower-IShq8O5s.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
