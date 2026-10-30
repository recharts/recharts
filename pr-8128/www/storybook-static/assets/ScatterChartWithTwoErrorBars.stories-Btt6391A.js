import{R as r}from"./iframe-C9xnj3fa.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CPVa8WDS.js";import{C as d}from"./CartesianGrid-Bgu7WhU1.js";import{X as c}from"./XAxis-CqLpIx_r.js";import{Y as y}from"./YAxis-CZieiH3_.js";import{S as h}from"./Scatter-ChI0XYXS.js";import{E as e}from"./ErrorBar-DhPaa7rm.js";import{T as u}from"./Tooltip-CVQ7tiwn.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTsf-RRm.js";import"./zIndexSlice-CcurngJa.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Brqxe2vY.js";import"./throttle-Brv_8OQk.js";import"./index-HR2zHK1s.js";import"./index-CGQL5uib.js";import"./axisSelectors-Ci_X7Owa.js";import"./polarAxisSelectors-D4sMq_tB.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Bt8PJZEG.js";import"./index-jCX_JL39.js";import"./index-DsrYsm3j.js";import"./renderedTicksSlice-w5XdGCx4.js";import"./index-HliY0Ktb.js";import"./CartesianChart-ZuYtKyhz.js";import"./ZIndexPortal-CioIZ4EI.js";import"./CategoricalChart-Dkc5AhoM.js";import"./CartesianAxis-CWptnmGh.js";import"./Layer-DDMBpFba.js";import"./Text-BlDPHkKw.js";import"./DOMUtils-rMdb-gP0.js";import"./pageBackground-BZHE6_vS.js";import"./ZIndexLayer-BqHotqUl.js";import"./Label-BDFDhH9S.js";import"./types-DG6esOZW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-JiW6eW7Z.js";import"./LabelList-Dl-1RIBv.js";import"./activeStyles-D9Ul1Rn7.js";import"./useAnimationId-CE3S5svQ.js";import"./dataEntryStyles-DUCKxZ4T.js";import"./Curve-CKzhw-Lm.js";import"./step-FdCzkuxT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CVOZ5wR7.js";import"./Symbols-Cm6DVkmF.js";import"./symbol-B6aiZ8Bc.js";import"./ActiveShapeUtils-3CPPp2aV.js";import"./ErrorBarContext-CpFpfUyn.js";import"./SetGraphicalItem-CW9QGr42.js";import"./useEffectiveDataKey-Bl0Ac7JR.js";import"./CSSTransitionAnimate-0bfwzmbj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BFo0ivMe.js";import"./uniqBy-DEkhL1Ig.js";import"./iteratee-BNbt2Vfj.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DXOgwnMG.js";import"./Rectangle-BnqXvc2P.js";import"./Sector-BXMfsR_X.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
