import{R as r}from"./iframe-CCedNpIL.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-CGeYjKiH.js";import{C as d}from"./CartesianGrid-CigQqjXR.js";import{X as c}from"./XAxis-BXe8rtVd.js";import{Y as y}from"./YAxis-C1dIb0Dq.js";import{S as h}from"./Scatter-ChDPP7u4.js";import{E as e}from"./ErrorBar-ebVTeDUg.js";import{T as u}from"./Tooltip-Bw1DSCFw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3okQ-B8.js";import"./zIndexSlice-FaVG8kHH.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BU47eI4H.js";import"./throttle-Br1C3UWP.js";import"./index-a9wrUunR.js";import"./index-B1OaBK8_.js";import"./axisSelectors-BoL5XRtd.js";import"./polarAxisSelectors-Bk6LJwmt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-EyFZEVUo.js";import"./index-DKQhzlop.js";import"./index-CL5Xa_TG.js";import"./renderedTicksSlice-BWK-8Wbg.js";import"./index-D4SSZ3m3.js";import"./CartesianChart-CaGoIdwh.js";import"./ZIndexPortal-Bmj6fCDQ.js";import"./CategoricalChart-C8fCaDAg.js";import"./CartesianAxis-CVTWbWdI.js";import"./Layer-Cr1LK46x.js";import"./Text-B0ZPk73p.js";import"./pageBackground-pCtx7B-s.js";import"./ZIndexLayer-BPlzci0x.js";import"./Label-CBEI3-wb.js";import"./types-D0KlXew0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-cRyR8A9p.js";import"./activeStyles-DICcYqor.js";import"./useAnimationId-CcrjU78K.js";import"./dataEntryStyles-B3jzja7w.js";import"./Curve-CPRSU3Na.js";import"./step-BxzXSqS7.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BNwhBjw1.js";import"./Symbols-B_HwlHbC.js";import"./symbol-CpsCxClc.js";import"./ActiveShapeUtils-DzHDFOYU.js";import"./ErrorBarContext-BMxzBjzC.js";import"./SetGraphicalItem-CeKorW8q.js";import"./useEffectiveDataKey-Lst-3VK9.js";import"./CSSTransitionAnimate-B8rgN0kh.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Byj33S_L.js";import"./uniqBy-BqJ8xbG-.js";import"./iteratee-gXYAUoI2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BnLIW9Lf.js";import"./Rectangle-BX_KITs0.js";import"./Sector-BmGEMOh-.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
