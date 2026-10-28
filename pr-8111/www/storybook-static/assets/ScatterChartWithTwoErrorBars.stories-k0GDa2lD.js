import{R as r}from"./iframe-BGCZ_YYu.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BhxgQl8u.js";import{C as d}from"./CartesianGrid-JddCvUIB.js";import{X as c}from"./XAxis-CnHX8rYU.js";import{Y as y}from"./YAxis-QzbIIYXn.js";import{S as h}from"./Scatter-EzwdbJOc.js";import{E as e}from"./ErrorBar-45kT34FM.js";import{T as u}from"./Tooltip-Bz4_VSSX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzjZykj4.js";import"./zIndexSlice-cBJ2sUns.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./throttle-Dnn9iNkE.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./axisSelectors-BgHWKfZW.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-WNvBVnHd.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./Text-Cf8nBYte.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./Label-CG8eDc0p.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-D60Hhpwl.js";import"./activeStyles-CJOfqay0.js";import"./useAnimationId-D-9kXAza.js";import"./dataEntryStyles--27SN7qD.js";import"./Curve-BoHAwgnl.js";import"./step-QoITrG4U.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Bb3r7G0b.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./ErrorBarContext-B946Wqqn.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./CSSTransitionAnimate-DHyCiigQ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-rPBNT425.js";import"./uniqBy-DwLo8bza.js";import"./iteratee-BrjIAann.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C665WITi.js";import"./Rectangle-D8zVG-_m.js";import"./Sector-XH0zRT2M.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
