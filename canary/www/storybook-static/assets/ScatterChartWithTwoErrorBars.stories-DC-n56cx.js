import{R as r}from"./iframe-Dc30QV19.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BfhiHgOO.js";import{C as d}from"./CartesianGrid-ClmqShxo.js";import{X as c}from"./XAxis-BcaW8pnZ.js";import{Y as y}from"./YAxis-4iRuFsIi.js";import{S as h}from"./Scatter-9vg79mXw.js";import{E as e}from"./ErrorBar-CoOLmfvG.js";import{T as u}from"./Tooltip-lztVFhcX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BRR6oB9d.js";import"./zIndexSlice-CpA2ZBZb.js";import"./resolveDefaultProps-BBlVWROq.js";import"./get-CjriyByo.js";import"./throttle-WMkM63z_.js";import"./index-BBeDNEC1.js";import"./index-BhEbM2Je.js";import"./axisSelectors-BahrCffV.js";import"./polarAxisSelectors-DgLFgBab.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-BSORqksa.js";import"./index-C7W3-csu.js";import"./index-LKWh_pde.js";import"./renderedTicksSlice-ComULkWM.js";import"./index-BZTDCkN5.js";import"./fillDefinitions-k1q4zEei.js";import"./CartesianChart-DJeDin18.js";import"./chartDataContext-P9nX9sOh.js";import"./CategoricalChart-f6DbLMMc.js";import"./CartesianAxis-CybNaUvq.js";import"./Layer-Ckk2aNrm.js";import"./Text-B2SIM4yQ.js";import"./ZIndexLayer-FU_VBeuI.js";import"./Label-pzKHNVcm.js";import"./types-Df_aU1u_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-m1FbV_av.js";import"./activeStyles-CSTRknfO.js";import"./useAnimationId-dTayRcrW.js";import"./Curve-C3EkNIPD.js";import"./step-DiRHFC6W.js";import"./path-BBMZd4YL.js";import"./tooltipContext-CKfMhL_F.js";import"./Symbols-DoXC1ptL.js";import"./symbol-Bi8SUrQz.js";import"./ActiveShapeUtils-DX-4aapg.js";import"./ErrorBarContext-CnjMgqWz.js";import"./SetGraphicalItem-Bi2jD4aD.js";import"./useEffectiveDataKey-CqfC1MRQ.js";import"./CSSTransitionAnimate-C8DZvgZT.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-zZqt_kY_.js";import"./uniqBy-CFq97YsS.js";import"./iteratee-DUr8YIIJ.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CfZJmYUc.js";import"./Rectangle-iIoXGW1W.js";import"./Sector-D2Q0-3lo.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
