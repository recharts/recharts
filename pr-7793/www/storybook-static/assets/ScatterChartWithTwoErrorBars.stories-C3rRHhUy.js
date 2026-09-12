import{R as r}from"./iframe-DqI8fZWc.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-wcl9lzKh.js";import{C as d}from"./CartesianGrid-CnIMtQFj.js";import{X as c}from"./XAxis-DN7qZjW9.js";import{Y as y}from"./YAxis-BOv489WA.js";import{S as h}from"./Scatter-D3ZM6VjQ.js";import{E as e}from"./ErrorBar-DG2o3EmT.js";import{T as u}from"./Tooltip-DIfzN9Q7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DQO3SMEw.js";import"./zIndexSlice-9oYbhSdQ.js";import"./throttle-BTCEGSKU.js";import"./index-MGrO6GOL.js";import"./index-CocOIjDa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DCvOVDv2.js";import"./isWellBehavedNumber-nhVdkpqH.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Degnf0cl.js";import"./d3-scale-dm0sSvQ9.js";import"./index-DPzk3hMl.js";import"./index-iQ4O5AGP.js";import"./renderedTicksSlice-DO7ESVP5.js";import"./index-DPm6oXEP.js";import"./CartesianChart-CVIppYKX.js";import"./chartDataContext-bZQzIS86.js";import"./CategoricalChart-Dc9zhX9p.js";import"./CartesianAxis-BLk0unaa.js";import"./Layer-Ckim_S0G.js";import"./Text-9XM6GnGO.js";import"./DOMUtils-C2uAcB2d.js";import"./useId-BEya5Sow.js";import"./useBackwardsCompatibleTheme-Cdm9q7mi.js";import"./Label-B6t_CsQ4.js";import"./ZIndexLayer-CmCgphBH.js";import"./types-D6uFqDQP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-rYif9Enh.js";import"./useAnimationId-sXalVax-.js";import"./Curve-BfuijxKL.js";import"./step-CpsUov4P.js";import"./path-DyVhHtw_.js";import"./tooltipContext-U_eZN8dc.js";import"./Symbols-CEX8TaeC.js";import"./symbol-CjwAsj25.js";import"./ActiveShapeUtils-Ba4zh4k1.js";import"./RegisterGraphicalItemId-BfKE_Ywq.js";import"./ErrorBarContext-CkD9Qczk.js";import"./GraphicalItemClipPath-BYdmvJgQ.js";import"./SetGraphicalItem-BIIukDTU.js";import"./useGraphicalItemIdentity-iLjVYJ7t.js";import"./CSSTransitionAnimate-DTMraYD3.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BmnmgRHV.js";import"./uniqBy-D9j1xmZr.js";import"./iteratee-Dfs9TkuY.js";import"./Cross-D9YNJK_K.js";import"./Rectangle-scNawCgP.js";import"./Sector-CYr5d1sJ.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
