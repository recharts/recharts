import{R as r}from"./iframe-DDlpcCnl.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DL8uxZeN.js";import{C as d}from"./CartesianGrid-Dq_IMNCb.js";import{X as c}from"./XAxis-BoZpTebr.js";import{Y as y}from"./YAxis-DLVtcSn1.js";import{S as h}from"./Scatter-DGPjY8O3.js";import{E as e}from"./ErrorBar-Dx-A8mJv.js";import{T as u}from"./Tooltip-KqHdu6QC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CEsAbTQz.js";import"./zIndexSlice-IyRnOGSL.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DdcIcuy0.js";import"./throttle-BEGaSLni.js";import"./index-BrGVAlaK.js";import"./index-DgZ0S6kR.js";import"./axisSelectors-DJ_js28E.js";import"./polarAxisSelectors-CmUB7T9A.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C8E3wvOe.js";import"./index-DQ5N6C5N.js";import"./index-CVLdebNc.js";import"./renderedTicksSlice-CDUEc77e.js";import"./index-DwERpMJ8.js";import"./fillDefinitions-B51hWH8m.js";import"./CartesianChart-EWd5fLMj.js";import"./ZIndexPortal-cCqCXZCV.js";import"./CategoricalChart-fIZxwY-X.js";import"./CartesianAxis-B9o_pqzh.js";import"./Layer-G7QHPTqV.js";import"./Text-BYHxKQhi.js";import"./DOMUtils-CEWteLOc.js";import"./ZIndexLayer-6Wt9kpTG.js";import"./Label-CZPjkQy2.js";import"./types-9pREsRXw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D8buJxhL.js";import"./activeStyles-cdXgOxXT.js";import"./useAnimationId-BvctuRLt.js";import"./dataEntryStyles-DFT_PI06.js";import"./Curve-BE_oIUBL.js";import"./step-8fTxxi9s.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DbT5aurG.js";import"./Symbols-CUes1UBB.js";import"./symbol-DbG6j_AG.js";import"./ActiveShapeUtils-9MmIWSgd.js";import"./ErrorBarContext-BKlvoAQJ.js";import"./SetGraphicalItem-tysqpR10.js";import"./useEffectiveDataKey-DdYNwp-E.js";import"./CSSTransitionAnimate-Cc4br1gm.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-C-qpYo5b.js";import"./uniqBy-5vufMWU3.js";import"./iteratee-DRvaSPOJ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DO5nm-k1.js";import"./Rectangle-CJnKnMxE.js";import"./Sector-BLL9Klsh.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
