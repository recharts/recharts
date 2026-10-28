import{R as r}from"./iframe-PkW0ejx3.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BrlhbkCG.js";import{C as d}from"./CartesianGrid-q8L3bfBU.js";import{X as c}from"./XAxis-CyABI53G.js";import{Y as y}from"./YAxis-B7QgfXKC.js";import{S as h}from"./Scatter-B3TUDA1t.js";import{E as e}from"./ErrorBar-Hwx9RAFY.js";import{T as u}from"./Tooltip-CmeF5bAK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJcwwy7_.js";import"./zIndexSlice-CtEWDdkW.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CnX9VcG6.js";import"./throttle-DhIpRp7y.js";import"./index-2kQDiEg9.js";import"./index-CthbcSOz.js";import"./axisSelectors-CBaUhvBl.js";import"./polarAxisSelectors-DErot-vK.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C_GfRdoG.js";import"./index-bhfK5Tel.js";import"./index-DCKddudy.js";import"./renderedTicksSlice-BiYv8y7m.js";import"./index-DIk-TLTX.js";import"./CartesianChart-CtUUiyil.js";import"./ZIndexPortal-DB_x6J9o.js";import"./CategoricalChart-CFsdFZkP.js";import"./CartesianAxis-BJQP999U.js";import"./Layer-D2wEMTDW.js";import"./Text-DQ7hgPmk.js";import"./pageBackground-BxU5BZDR.js";import"./ZIndexLayer-wqGg5hkh.js";import"./Label-V19_IbKL.js";import"./types-iBZQammS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-BcjFKpxG.js";import"./activeStyles-RIXOH0Ky.js";import"./useAnimationId-JttpOibe.js";import"./dataEntryStyles-BkC7RZGO.js";import"./Curve-DU0fyPxy.js";import"./step-Ckyxmzdw.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Do4-zYB2.js";import"./Symbols-BgSbEpWI.js";import"./symbol-BJli0oSq.js";import"./ActiveShapeUtils-hU5Uvesj.js";import"./ErrorBarContext-RvIB7RYt.js";import"./SetGraphicalItem-rvzc4GbA.js";import"./useEffectiveDataKey-UMh99VlP.js";import"./CSSTransitionAnimate-CcIj_dxZ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset--mFjDBED.js";import"./uniqBy-Bm4ZTWFv.js";import"./iteratee-C7s5c1SC.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BKa6aCvQ.js";import"./Rectangle-DF26d-VT.js";import"./Sector-DFqqiOiZ.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
