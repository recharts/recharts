import{e as r}from"./iframe-1xuwxK0i.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DCXSCZl_.js";import{C as d}from"./CartesianGrid-DMIlunDz.js";import{X as c}from"./XAxis-BKyyM-a9.js";import{Y as y}from"./YAxis-DxhfNzZF.js";import{S as h}from"./Scatter-_-IpvrQ0.js";import{E as e}from"./ErrorBar-BB7YuY5A.js";import{T as u}from"./Tooltip-C00K2uSc.js";import{R as f}from"./RechartsHookInspector-DjsmwIRA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-5Ekcff7f.js";import"./arrayEqualityCheck-CASLlqQ3.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BeeagbIX.js";import"./immer-BoNsEynp.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DCwL0QiS.js";import"./hooks-BzE3zYbI.js";import"./axisSelectors-DyjHckMI.js";import"./d3-scale-DUQowLdF.js";import"./zIndexSlice-DPF7rmTT.js";import"./renderedTicksSlice-Dixyj9Jy.js";import"./CartesianChart-4woDVZs_.js";import"./chartDataContext-BwmW5feg.js";import"./CategoricalChart-CiWFX2uU.js";import"./CartesianAxis-DrIFSgXd.js";import"./Layer-HRVol_nO.js";import"./Text-BBwkToBR.js";import"./DOMUtils-BhlllvxT.js";import"./Label-EE46xwmi.js";import"./ZIndexLayer-C7GyPaOO.js";import"./types-UwWXE9AL.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B2i9al3C.js";import"./Curve-CAhCV73Q.js";import"./step-BCh-34yC.js";import"./tooltipContext-DzvdVHWv.js";import"./Symbols-C6y5KnTy.js";import"./symbol-BMBn4bHO.js";import"./ActiveShapeUtils-CDdbS846.js";import"./isPlainObject-DBcZBbuh.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B47wiU0M.js";import"./useAnimationId-CNQ0amde.js";import"./Trapezoid-Cr4fcElh.js";import"./Sector-2ltBV-lC.js";import"./RegisterGraphicalItemId-CklwmYhh.js";import"./ErrorBarContext-SjXcYHyD.js";import"./GraphicalItemClipPath-BmfpOWt-.js";import"./SetGraphicalItem-BECsf1z-.js";import"./CSSTransitionAnimate-FrpzUiIr.js";import"./useElementOffset-CwZilh1y.js";import"./uniqBy-CjLSqm-O.js";import"./iteratee-Dnw0ZN_g.js";import"./Cross-D3ed_C6s.js";import"./index-l66o8zNg.js";import"./ChartSizeDimensions-lZytJoNO.js";import"./OffsetShower-DHMDBhnx.js";import"./PlotAreaShower-Dete_MNu.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
