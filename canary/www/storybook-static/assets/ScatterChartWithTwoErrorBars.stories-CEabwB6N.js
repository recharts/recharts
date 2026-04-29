import{e as r}from"./iframe-BDbjAAY0.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DRmquYju.js";import{C as d}from"./CartesianGrid-UHIgoZEp.js";import{X as c}from"./XAxis-DCFLoNQ-.js";import{Y as y}from"./YAxis-DaSpqUSS.js";import{S as h}from"./Scatter-8mj_JQ04.js";import{E as e}from"./ErrorBar-feCWU2EL.js";import{T as u}from"./Tooltip-CqZiP_Tp.js";import{R as f}from"./RechartsHookInspector-l9vgHPs1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Gh-MCRwt.js";import"./arrayEqualityCheck-DJY85fxA.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-D-Zx47ck.js";import"./immer-3ylQEXI_.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BhpTR8oZ.js";import"./hooks-C0v4GivV.js";import"./axisSelectors-DbWMAUln.js";import"./d3-scale-BNnaBGak.js";import"./zIndexSlice-CHJt3ZwD.js";import"./renderedTicksSlice-CKF1aMX1.js";import"./CartesianChart-CLKXkeKc.js";import"./chartDataContext-BKhnDKi8.js";import"./CategoricalChart-DHzD4_v9.js";import"./CartesianAxis-Cy9ephC4.js";import"./Layer-ChHYMtjc.js";import"./Text-BIZLV0ge.js";import"./DOMUtils-BrS2Cx0f.js";import"./Label-CjqdpviA.js";import"./ZIndexLayer-DzwMAaCJ.js";import"./types-rcyNgq1E.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BoM_s_He.js";import"./Curve-0uMvsclI.js";import"./step-EtEDGKHl.js";import"./tooltipContext-DhnNKd2C.js";import"./Symbols-DjgjaJLS.js";import"./symbol-CPmvNDGT.js";import"./ActiveShapeUtils-NUFnhrmW.js";import"./isPlainObject-BaMZfXSR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D6qTYq9W.js";import"./useAnimationId--rOGa3cY.js";import"./Trapezoid-DbFTD1xK.js";import"./Sector-Bpj1QdoM.js";import"./RegisterGraphicalItemId-C7xusUhZ.js";import"./ErrorBarContext-CdZbKyaL.js";import"./GraphicalItemClipPath-DAX0DDhK.js";import"./SetGraphicalItem-BNU0IRAh.js";import"./CSSTransitionAnimate-CCL8b_G3.js";import"./useElementOffset-BHa8bfm0.js";import"./uniqBy-BZHv82xD.js";import"./iteratee-CvEtAFnI.js";import"./Cross-ByzcQ9dV.js";import"./index-s419WJjU.js";import"./ChartSizeDimensions-DpPbcXoW.js";import"./OffsetShower-0WW1yvr8.js";import"./PlotAreaShower-BpI_n9Qg.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
