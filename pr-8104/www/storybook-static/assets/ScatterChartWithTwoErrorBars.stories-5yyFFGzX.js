import{R as r}from"./iframe-Bc_TQ7zr.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DuPL_qrl.js";import{C as d}from"./CartesianGrid-CYUKirm5.js";import{X as c}from"./XAxis-DWAumGqR.js";import{Y as y}from"./YAxis-Dbf9f4fH.js";import{S as h}from"./Scatter-MYMW_NUC.js";import{E as e}from"./ErrorBar-CHQV26y5.js";import{T as u}from"./Tooltip-9IBuq1vJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./zIndexSlice-CO4_damr.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-urKJAClX.js";import"./throttle-DHt3nTHd.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./axisSelectors-BQX-Wl7f.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-2JXHcyFQ.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./CartesianAxis-C2icTJ4e.js";import"./Layer-Pn8de_pX.js";import"./Text-DL7i-IN9.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./Label-B9G7W81w.js";import"./types-CI1g0QBx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-aO6gLBJB.js";import"./activeStyles-CqnjEaUo.js";import"./useAnimationId-BaQxjUGX.js";import"./dataEntryStyles-CcDBy8RW.js";import"./Curve-BkI7sWgu.js";import"./step-Bz4sQ0ke.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DzjzWl1v.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./ErrorBarContext-C3uNXZgX.js";import"./SetGraphicalItem-m2XDPigg.js";import"./useEffectiveDataKey-BSvuchOk.js";import"./CSSTransitionAnimate-oM_RrBgl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-6rTFYDIL.js";import"./uniqBy-euoVOqhK.js";import"./iteratee-KP71SW6w.js";import"./isArguments-yB-y1yaH.js";import"./Cross-zt8H4zmm.js";import"./Rectangle-B4HzsWKb.js";import"./Sector-QL_PXW4W.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
