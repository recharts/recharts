import{e as r}from"./iframe-tnEFgkcx.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-BOhyOacI.js";import{C as d}from"./CartesianGrid-Cgu76c9S.js";import{X as c}from"./XAxis-DyD39sPk.js";import{Y as y}from"./YAxis-ExPMB155.js";import{S as h}from"./Scatter-B_8NVB1X.js";import{E as e}from"./ErrorBar-pAopGhDq.js";import{T as u}from"./Tooltip-CxICmXL5.js";import{R as f}from"./RechartsHookInspector-C8yNaUl0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-cR-RvqVo.js";import"./arrayEqualityCheck-DqJ8srhf.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BeZ1TWKo.js";import"./immer-ncBRdkeU.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B4jDL_1j.js";import"./hooks-DptPG5bY.js";import"./axisSelectors-KZFlWzxW.js";import"./d3-scale-ByLEGZpF.js";import"./zIndexSlice-CXrfbzcc.js";import"./renderedTicksSlice-D0-SyI8-.js";import"./CartesianChart-TKSiJtpn.js";import"./chartDataContext-qO9BwWme.js";import"./CategoricalChart-a9SFhw6w.js";import"./CartesianAxis-BAHnc_tG.js";import"./Layer-DvhQWyN1.js";import"./Text-BKpNJ0c7.js";import"./DOMUtils-Bml29IBx.js";import"./Label-DekpC_Fs.js";import"./ZIndexLayer-BcZ51bY1.js";import"./types-1yHH6o1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CCMVcigr.js";import"./Curve-DSeHhcSU.js";import"./step-BN--2jEq.js";import"./tooltipContext-C_CGt6pP.js";import"./Symbols-DUWbDiG2.js";import"./symbol-Bc_lVtCg.js";import"./ActiveShapeUtils-CgS0gI7T.js";import"./isPlainObject-CCD3tKcT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bj9CslW_.js";import"./useAnimationId-CMZ4Qpmu.js";import"./Trapezoid-DLvbqVqP.js";import"./Sector-BeRUQC1b.js";import"./RegisterGraphicalItemId-CBL_DLkS.js";import"./ErrorBarContext-BSDSa2Nb.js";import"./GraphicalItemClipPath-ByitOfMe.js";import"./SetGraphicalItem-B_lEpaDw.js";import"./CSSTransitionAnimate--W-evT4X.js";import"./useElementOffset-CM0UmlZT.js";import"./uniqBy-Cy1k0bpK.js";import"./iteratee-D1EoOH06.js";import"./Cross-5pil-r-2.js";import"./index-D_XUjRxy.js";import"./ChartSizeDimensions-CS0lJGsa.js";import"./OffsetShower-BTWXwS8x.js";import"./PlotAreaShower-CFtvb_hv.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
