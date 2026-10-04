import{R as r}from"./iframe-BRRwZ9OM.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Dgnq-1Vu.js";import{C as d}from"./CartesianGrid-B5pn1tCs.js";import{X as c}from"./XAxis-34NAxun3.js";import{Y as y}from"./YAxis-QWCMNG8w.js";import{S as h}from"./Scatter-hoh6UcbX.js";import{E as e}from"./ErrorBar-g5E_0d_p.js";import{T as u}from"./Tooltip-WSYZCHDJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BuRv36IR.js";import"./zIndexSlice-HqKAKynn.js";import"./throttle-CI7PhwKd.js";import"./index-C-3qUDzk.js";import"./index-dIUimeeY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CZ3dceSm.js";import"./isWellBehavedNumber-PSI2l2A6.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Duf7CX9E.js";import"./d3-scale-CSNIZQpC.js";import"./index-D46Km6-p.js";import"./index-BjAGoEo5.js";import"./renderedTicksSlice-D7aXzM-e.js";import"./index-Ce-PaXeC.js";import"./CartesianChart-DeYwOeaV.js";import"./chartDataContext-C1k0ydEu.js";import"./CategoricalChart-CWBsWl6U.js";import"./CartesianAxis-Dgab3bjn.js";import"./Layer-DaA93mOO.js";import"./Text-m4YXivgw.js";import"./DOMUtils-kcWo8Tu5.js";import"./useId-DqioIEDp.js";import"./useBackwardsCompatibleTheme-BRwc3p-N.js";import"./Label-BF1g4qnl.js";import"./ZIndexLayer-C1LIYZVJ.js";import"./types-BTYbdlsY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-Dxhu-tqD.js";import"./useAnimationId-WhlrcPo0.js";import"./Curve-BUEFktWE.js";import"./step-BB9R7jiY.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CxLEjHbB.js";import"./Symbols-BDXxh8ib.js";import"./symbol-CWxaNYuB.js";import"./ActiveShapeUtils-DiAhe8wn.js";import"./RegisterGraphicalItemId-x9sXDMnN.js";import"./ErrorBarContext-WHUbM02-.js";import"./GraphicalItemClipPath-5REgjKEh.js";import"./SetGraphicalItem-BVwAptcr.js";import"./useGraphicalItemIdentity-BCsXVCoB.js";import"./dataEntryStyles-rkDUn2gq.js";import"./CSSTransitionAnimate-Iu1P0BzY.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-j1dL7wm3.js";import"./uniqBy-Bc7r0gcZ.js";import"./iteratee-cCh71UMl.js";import"./Cross-DVB5iPY6.js";import"./Rectangle-DUtmhkWL.js";import"./Sector-B69zY3GL.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
