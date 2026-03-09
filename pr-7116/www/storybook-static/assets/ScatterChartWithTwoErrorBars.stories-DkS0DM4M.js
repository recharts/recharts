import{e as r}from"./iframe-DkLawzFT.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BRCDzKp0.js";import{C as d}from"./CartesianGrid-DRBqNtxc.js";import{X as c}from"./XAxis-Bhs0VEqV.js";import{Y as y}from"./YAxis-DUSsUT3d.js";import{S as h}from"./Scatter-CVVwr7TT.js";import{E as e}from"./ErrorBar-BJA6fOWM.js";import{T as u}from"./Tooltip-N6gruFKC.js";import{R as f}from"./RechartsHookInspector-CP5-3lHb.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ZZ9SYGf8.js";import"./arrayEqualityCheck-D3l_Six5.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BrteeSnw.js";import"./immer-BgQ6ewOL.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BAEjUqpG.js";import"./hooks-mxsXvsXQ.js";import"./axisSelectors-WJrRsxNm.js";import"./d3-scale-CQPtLnPq.js";import"./zIndexSlice-D7gaPfmN.js";import"./renderedTicksSlice-CxLVT98p.js";import"./CartesianChart-B_kqxRby.js";import"./chartDataContext-BQhtyhGa.js";import"./CategoricalChart-ClWY8mqV.js";import"./CartesianAxis-B2aKO3V6.js";import"./Layer-D1t_xfer.js";import"./Text-Cnf9BrSi.js";import"./DOMUtils-CeS2jzYu.js";import"./Label-B8g-EXnh.js";import"./ZIndexLayer-BzQ04t8l.js";import"./types-BodbCBWC.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-0q8uPUdp.js";import"./Curve-BHXnsRVh.js";import"./step-BKMOa0zg.js";import"./tooltipContext-Dd3PQMFh.js";import"./Symbols-BESx1iMX.js";import"./symbol-yD_N7Rt-.js";import"./ActiveShapeUtils-CYrS0ywm.js";import"./isPlainObject-Dna09QVC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BmL8vsSC.js";import"./useAnimationId-ndVuSCuU.js";import"./Trapezoid-DgQekCnf.js";import"./Sector-CQDhqwWL.js";import"./RegisterGraphicalItemId-Sw1cCXMw.js";import"./ErrorBarContext-BlXGa7jj.js";import"./GraphicalItemClipPath-BMzTlgpv.js";import"./SetGraphicalItem-CQ9RSPfd.js";import"./CSSTransitionAnimate-BF_s3SLo.js";import"./useElementOffset-kARJ2Ib4.js";import"./uniqBy-De2uIt7f.js";import"./iteratee-py5Iz_wR.js";import"./Cross-BTts5VZh.js";import"./index-ClmqdCp3.js";import"./ChartSizeDimensions-sxZZm2vK.js";import"./OffsetShower-Bbq9KY1d.js";import"./PlotAreaShower-BpZ3JX6M.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
