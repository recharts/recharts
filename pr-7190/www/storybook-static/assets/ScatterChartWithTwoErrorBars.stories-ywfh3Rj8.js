import{e as r}from"./iframe-_tOEOrTB.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DArZ2ito.js";import{C as d}from"./CartesianGrid-x0d5UvjV.js";import{X as c}from"./XAxis-B99ydacs.js";import{Y as y}from"./YAxis-MKkirg66.js";import{S as h}from"./Scatter-Dyp1IDx-.js";import{E as e}from"./ErrorBar-v-_Om3wu.js";import{T as u}from"./Tooltip-FgVwiQpp.js";import{R as f}from"./RechartsHookInspector-BgNu5TE0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B4fVc8pz.js";import"./arrayEqualityCheck-B2ATAN_K.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-QC90EbHK.js";import"./immer-Ctu7T9Ma.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C8IxNL1D.js";import"./hooks-Dxc4ftFI.js";import"./axisSelectors-C0eqwsIc.js";import"./d3-scale-BYOnugJI.js";import"./zIndexSlice-CWqmREsN.js";import"./renderedTicksSlice-C1VyvUnW.js";import"./CartesianChart-BdgakOV8.js";import"./chartDataContext-Cj00HDaN.js";import"./CategoricalChart-uPJQTpzY.js";import"./CartesianAxis-DXWYS4eF.js";import"./Layer-DKn_t_OY.js";import"./Text-CLhNqgF1.js";import"./DOMUtils-Dp_xH288.js";import"./Label-DY2hHCUB.js";import"./ZIndexLayer-CgC8xk-g.js";import"./types-0739cztl.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D3WhBtDM.js";import"./Curve-BgKgFd6U.js";import"./step-rG5mhkUn.js";import"./tooltipContext-052PNqih.js";import"./Symbols-CXub2t2y.js";import"./symbol-BgrsGtcm.js";import"./ActiveShapeUtils-XLBlJtUm.js";import"./isPlainObject-jyHTfG6K.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-hCYFffPl.js";import"./useAnimationId-x2-6Yyy0.js";import"./Trapezoid-CqizPLb6.js";import"./Sector-Cruz6N8W.js";import"./RegisterGraphicalItemId-Dse9b0HT.js";import"./ErrorBarContext-DwAJtrMz.js";import"./GraphicalItemClipPath-DkwW047q.js";import"./SetGraphicalItem-FaJmXbmv.js";import"./CSSTransitionAnimate-Bgmx28Lt.js";import"./useElementOffset-BPo9O-tw.js";import"./uniqBy-P3VkkSyy.js";import"./iteratee-B2hoZeMP.js";import"./Cross-CZx91a-X.js";import"./index-BRj_naI3.js";import"./ChartSizeDimensions-DuqOm4SH.js";import"./OffsetShower-BuTy_q5n.js";import"./PlotAreaShower-DHEJGydW.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
