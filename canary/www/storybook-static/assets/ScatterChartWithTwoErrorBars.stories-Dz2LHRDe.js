import{R as r}from"./iframe-BFdjndOP.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BcPZ2QYm.js";import{C as d}from"./CartesianGrid-CywwPkVC.js";import{X as c}from"./XAxis-B63qJ9KH.js";import{Y as y}from"./YAxis-XZTx9iJE.js";import{S as h}from"./Scatter-DiMGvUb5.js";import{E as e}from"./ErrorBar-D2HlmMJm.js";import{T as u}from"./Tooltip-CiMTL7v1.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-H7T23RGg.js";import"./zIndexSlice-BMXGqLpb.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DJFCHaiN.js";import"./throttle--h3a_z5m.js";import"./index-LVwuga6J.js";import"./index-BW02vIAv.js";import"./axisSelectors-BPye2JbP.js";import"./polarAxisSelectors-CPTbaBCS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BbKZN6cQ.js";import"./index-C8219kEG.js";import"./index-CdY5oKLt.js";import"./renderedTicksSlice-BxVzVivR.js";import"./index-D4M5TsAW.js";import"./CartesianChart-CvXsANEo.js";import"./ZIndexPortal-BavuMFDc.js";import"./CategoricalChart-DpOkbqlx.js";import"./CartesianAxis-Ch7lNcAW.js";import"./Layer-lJQGFAu3.js";import"./Text-DOzJQY6l.js";import"./pageBackground-CKt6d5Bo.js";import"./ZIndexLayer-Di6AWmDg.js";import"./Label-fhEADZhw.js";import"./types-CW6mEad7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-mpaOdaxP.js";import"./activeStyles-ClW3aIEp.js";import"./useAnimationId-BieQKvQP.js";import"./dataEntryStyles-DDh9bN_s.js";import"./Curve-BhC7Tab4.js";import"./step-Ck_VDGQS.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CjS0ZJTI.js";import"./Symbols-oeWcvHGW.js";import"./symbol-DfxiLrYg.js";import"./ActiveShapeUtils-BL-a7-b7.js";import"./ErrorBarContext-ppRLi4g5.js";import"./SetGraphicalItem-B6LFxdSb.js";import"./useEffectiveDataKey-CN9bTgz2.js";import"./CSSTransitionAnimate-CtlbkHHb.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DAJ27Pif.js";import"./uniqBy-CG_-iAXC.js";import"./iteratee-CyrnsQ_T.js";import"./isArguments-yB-y1yaH.js";import"./Cross-D-Xwp2JL.js";import"./Rectangle-CI5ZTAqr.js";import"./Sector-CPd9IaIT.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
