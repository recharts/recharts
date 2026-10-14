import{R as r}from"./iframe-Cy0y2ns8.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-GULG0c4G.js";import{C as d}from"./CartesianGrid-vQeV11Fy.js";import{X as c}from"./XAxis-I6ByZryQ.js";import{Y as y}from"./YAxis-CsAJfuiU.js";import{S as h}from"./Scatter-BhxreJVA.js";import{E as e}from"./ErrorBar-DeXT9efN.js";import{T as u}from"./Tooltip-EYcLPG4A.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-tnntysZI.js";import"./zIndexSlice-DIpYS2pc.js";import"./throttle-GHjNdOLX.js";import"./index-Cannfx1n.js";import"./index-MdLyaQUy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-W2SA8EIl.js";import"./isWellBehavedNumber-BHC-xMw7.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B794UmHN.js";import"./d3-scale-Bptb5_HU.js";import"./index-ed9S2gc_.js";import"./index-DMDvJQSi.js";import"./renderedTicksSlice-CcSlQNqm.js";import"./index-z8Y8cGgG.js";import"./CartesianChart-CkZRPVAF.js";import"./chartDataContext-_Lx0KL5V.js";import"./CategoricalChart-C4X2uKz7.js";import"./CartesianAxis-DZCowAwb.js";import"./Layer-Dt1c85pW.js";import"./Text-CR6ssGu_.js";import"./pageBackground-C3xeFLUy.js";import"./useId-DoEOHgvO.js";import"./useBackwardsCompatibleTheme-DoDvRsUd.js";import"./Label-VahG2YbD.js";import"./ZIndexLayer-DfeIwWxW.js";import"./types-es-lSoS7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-Cnxc9Yt_.js";import"./useAnimationId-DaE5gtmK.js";import"./dataEntryStyles-D42MsVUE.js";import"./Curve-5eCLnpsK.js";import"./step-aUPxj0fJ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-GJ6dETi4.js";import"./Symbols-DCYwnKrZ.js";import"./symbol-CMOY-E8i.js";import"./ActiveShapeUtils-XGy6Fbre.js";import"./ErrorBarContext-Cwi5XQfL.js";import"./GraphicalItemClipPath-ANLjpQPo.js";import"./SetGraphicalItem-jtlbfoJE.js";import"./useEffectiveDataKey-BEJg52qX.js";import"./CSSTransitionAnimate-DiiBCZmj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-sgSlwsLC.js";import"./uniqBy-9BG5xD31.js";import"./iteratee-D9gJLSIg.js";import"./Cross-c7XLk4es.js";import"./Rectangle-BAcsN_iB.js";import"./Sector-CnsMqGLC.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
