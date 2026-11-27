import{R as r}from"./iframe-C6tckEdC.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B15uzAXS.js";import{C as d}from"./CartesianGrid-M5jX1B50.js";import{X as c}from"./XAxis-DzYRQrky.js";import{Y as y}from"./YAxis-rcBaqYZ7.js";import{S as h}from"./Scatter-lmQi623n.js";import{E as e}from"./ErrorBar-I_gikrhX.js";import{T as u}from"./Tooltip-DW-STvZa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-0oVlPs_v.js";import"./zIndexSlice-BRbRDCdD.js";import"./resolveDefaultProps-CSiVUs4x.js";import"./get-CjriyByo.js";import"./throttle-CU3FfpOW.js";import"./index-BzKVLmVc.js";import"./index-BR0KP3KE.js";import"./axisSelectors-BaS600qd.js";import"./polarAxisSelectors-BP0xU-X7.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-cNizIXDy.js";import"./index-DKLWww0Z.js";import"./index-DvK4dXF2.js";import"./renderedTicksSlice-gvMRVXAc.js";import"./index-Cqbhonwj.js";import"./fillDefinitions-D_qwa_ZF.js";import"./CartesianChart-Cl401OCs.js";import"./chartDataContext-BIkRUcpA.js";import"./CategoricalChart-BQKW_s0C.js";import"./CartesianAxis-HAEOo14B.js";import"./Layer-CZ4BpJHW.js";import"./Text-Wncpajm_.js";import"./ZIndexLayer-Duaj4w7a.js";import"./Label-DaLGTh2V.js";import"./types-DkdMor4N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-DEosnEmo.js";import"./activeStyles-Cw05xMjp.js";import"./useAnimationId-Cexbjbj0.js";import"./Curve-hlfhz3O_.js";import"./step-BdRt_Kf3.js";import"./path-BBMZd4YL.js";import"./tooltipContext-BhjHZJqr.js";import"./Symbols-BA4WcXcY.js";import"./symbol-CGpiEals.js";import"./ActiveShapeUtils-Cs4PiFBm.js";import"./ErrorBarContext-CFH2x5Ed.js";import"./SetGraphicalItem-L9dOpy2C.js";import"./useEffectiveDataKey-C_xG5lbB.js";import"./CSSTransitionAnimate-1IabRuAo.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-ox168otc.js";import"./uniqBy-BwUTEk2q.js";import"./iteratee-Chh9ZJty.js";import"./isArguments-yB-y1yaH.js";import"./Cross-tRfOgfn5.js";import"./Rectangle-J0TAD1ax.js";import"./Sector-aU80y0T4.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
