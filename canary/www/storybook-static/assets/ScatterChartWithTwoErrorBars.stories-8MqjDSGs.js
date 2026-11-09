import{R as r}from"./iframe-CMDkES_H.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B9mCrFc8.js";import{C as d}from"./CartesianGrid-BqeRaqC0.js";import{X as c}from"./XAxis-B5q3F6Uy.js";import{Y as y}from"./YAxis-C3tuYQmx.js";import{S as h}from"./Scatter-BqBxzifo.js";import{E as e}from"./ErrorBar-DbBtEdxc.js";import{T as u}from"./Tooltip-kAPsWdL8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-YdCgLXYS.js";import"./zIndexSlice-CEXNkTXm.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BBu38DQb.js";import"./throttle-BV0akTiG.js";import"./index-nmLk2qd-.js";import"./index-Cycxm7rW.js";import"./axisSelectors-BgqFub1M.js";import"./polarAxisSelectors-B2-HhSnm.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Vem8QkvK.js";import"./index-CDFg-t_S.js";import"./index-CQ6GchDM.js";import"./renderedTicksSlice-BzpVxRSL.js";import"./index-Dwicv9nR.js";import"./fillDefinitions-aMvFJMZF.js";import"./CartesianChart-D9ZN9vwZ.js";import"./chartDataContext-U2SqLEu1.js";import"./CategoricalChart-CNCtCgVg.js";import"./CartesianAxis-KTct3My8.js";import"./Layer-Dxo4pAJK.js";import"./Text-CXN2lt2h.js";import"./ZIndexLayer-Dr7m0amd.js";import"./Label-DkUV91yB.js";import"./types-BRdSNrFn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CQKyrMQS.js";import"./activeStyles-uNCwuaQZ.js";import"./useAnimationId-Br5Fw6SL.js";import"./Curve-lt9C0hSq.js";import"./step-CtpAouP5.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BfYJ3kCm.js";import"./Symbols-KRGqLXgG.js";import"./symbol-CkUX_hdb.js";import"./ActiveShapeUtils-BI-HqHtF.js";import"./ErrorBarContext-DWVCzs9M.js";import"./SetGraphicalItem-BWtk-2FX.js";import"./useEffectiveDataKey-DEHLWy8h.js";import"./CSSTransitionAnimate-Dk1FkPj4.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CfLeRl1x.js";import"./uniqBy-CBQHwdan.js";import"./iteratee-DQxlQ_gO.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CQ724W_w.js";import"./Rectangle-B0Yk3Jnp.js";import"./Sector-CpmtdMyq.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
