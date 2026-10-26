import{R as r}from"./iframe-zw95Jg5I.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart--sEJKE4e.js";import{C as d}from"./CartesianGrid-C41mXYJa.js";import{X as c}from"./XAxis-FSNVlg8z.js";import{Y as y}from"./YAxis-DxhDNNfO.js";import{S as h}from"./Scatter-S8vmv6XK.js";import{E as e}from"./ErrorBar-L6nLMhP6.js";import{T as u}from"./Tooltip-hAQMQs7N.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNF4noKd.js";import"./zIndexSlice-BhhR1tic.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-oavmg9-5.js";import"./throttle-Cgnp6_V2.js";import"./index-CWbrX-i7.js";import"./index-CWy5ARPc.js";import"./axisSelectors-DAhbEMcv.js";import"./polarAxisSelectors-DUH0PWke.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BXUDNojI.js";import"./index-BPsqxPXN.js";import"./index-BEzQf4L4.js";import"./renderedTicksSlice-BhGNFZVD.js";import"./index-bXT-B2Zu.js";import"./CartesianChart-CAbKVIox.js";import"./chartDataContext-DsEiNuFy.js";import"./CategoricalChart-DSpSOmf_.js";import"./CartesianAxis-Ps3DKwB1.js";import"./Layer-KXbvniH8.js";import"./Text-d1Lwh7G9.js";import"./pageBackground-04zbeTMB.js";import"./useId-CtBeXuXP.js";import"./ZIndexLayer-DT4lNh0N.js";import"./Label-B1gN_1pg.js";import"./dataEntryStyles-B6Pg3he4.js";import"./types-BkYRfFSe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-Dzq6_wuP.js";import"./useAnimationId-DHyavBGa.js";import"./Curve-D_d6vzaM.js";import"./step-Q9jA4NJI.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BlO69eeP.js";import"./Symbols-g6eOoLF6.js";import"./symbol-D4N1oQUq.js";import"./ActiveShapeUtils-KL7GHwh1.js";import"./RegisterGraphicalItemId-Ci1zbwmF.js";import"./ErrorBarContext-D3KXG5mH.js";import"./SetGraphicalItem-D5SILBm3.js";import"./useEffectiveDataKey-ak6DNGcC.js";import"./CSSTransitionAnimate-DsDCCi7d.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DSktO4lL.js";import"./uniqBy-BGk6LrH6.js";import"./iteratee-Dt64Sdjl.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C0WKTy_J.js";import"./Rectangle-B120DpgE.js";import"./Sector-B4pIaq7y.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
