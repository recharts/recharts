import{R as r}from"./iframe-Bv6Dcd9T.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CsGPlV5m.js";import{C as d}from"./CartesianGrid-AKWKW_lS.js";import{X as c}from"./XAxis-CSpcOKY2.js";import{Y as y}from"./YAxis-DHQaIYZw.js";import{S as h}from"./Scatter-cYsMqvKL.js";import{E as e}from"./ErrorBar-DovH5Z7_.js";import{T as u}from"./Tooltip-CYnE240g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DTS_6Eoq.js";import"./zIndexSlice-DGhXPr-9.js";import"./throttle-BcQ01sX8.js";import"./index-CcYReNCh.js";import"./index-CxI2Eqca.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-D_NqfWCM.js";import"./isWellBehavedNumber-CU7VWJn9.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DdiL_HAM.js";import"./index-DzmElQg1.js";import"./renderedTicksSlice-CJ-EtdQM.js";import"./axisSelectors-BcVMUp1z.js";import"./d3-scale-CClsGt0Z.js";import"./CartesianChart-DBwo_mBR.js";import"./chartDataContext-BjtAcLZf.js";import"./CategoricalChart-BwO0IaNH.js";import"./CartesianAxis-COkD_qks.js";import"./Layer-DlkJXe1G.js";import"./Text-00C33NA5.js";import"./DOMUtils-C-FPV1O8.js";import"./Label-CQaeTHfg.js";import"./ZIndexLayer-DxBey86b.js";import"./types-CAucql9k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-xeFS2cCQ.js";import"./useAnimationId-K5YFgJBV.js";import"./Curve-DpXmJzZj.js";import"./step-CRpvhJpW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CoPM4J4n.js";import"./Symbols-B944ltIA.js";import"./symbol-BDYSoGh9.js";import"./ActiveShapeUtils-BPmEcXgb.js";import"./RegisterGraphicalItemId-9ZN-jgk_.js";import"./ErrorBarContext-GKGPhv_o.js";import"./GraphicalItemClipPath-BS-sqKFj.js";import"./SetGraphicalItem-BQ96Q1Zd.js";import"./CSSTransitionAnimate-Dc8YwqzV.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DCBd45Il.js";import"./uniqBy-BjtflDCk.js";import"./iteratee-BrcS1bci.js";import"./Cross-BWGMhy9D.js";import"./Rectangle-CtFCyLS0.js";import"./Sector-CUkcaSYD.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
