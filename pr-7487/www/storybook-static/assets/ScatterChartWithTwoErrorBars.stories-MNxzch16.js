import{R as r}from"./iframe-Dgfa45pO.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BISmfLzy.js";import{C as d}from"./CartesianGrid-DokpguUS.js";import{X as c}from"./XAxis-BSLC3Bv_.js";import{Y as y}from"./YAxis-XwOa9eE6.js";import{S as h}from"./Scatter-CxjffNdM.js";import{E as e}from"./ErrorBar-Buougv7y.js";import{T as u}from"./Tooltip-CE3KSJnj.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-XphNsNZ5.js";import"./zIndexSlice-C1KjhRe9.js";import"./immer-DVLCs_h8.js";import"./index-BgENuBix.js";import"./index-Bo_UbBqc.js";import"./get-BZICNy-w.js";import"./resolveDefaultProps-ChQrXTkd.js";import"./isWellBehavedNumber-BrMIbSaZ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-ksaWIuWX.js";import"./index-CBjnf8TP.js";import"./renderedTicksSlice-fSTgGnjG.js";import"./axisSelectors-4s-45b5o.js";import"./d3-scale-D3oEXvep.js";import"./CartesianChart-BC1ybKqz.js";import"./chartDataContext-xlhPPH5F.js";import"./CategoricalChart-BUu6OQ7Y.js";import"./CartesianAxis-DznDQPew.js";import"./Layer-BwLAkNRA.js";import"./Text-tvsjfW3h.js";import"./DOMUtils-C6RrxFOP.js";import"./Label-Dzw51f8E.js";import"./ZIndexLayer-Dy6LsEV1.js";import"./types-C1ZkWqT0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CIa4005N.js";import"./useAnimationId-CjXgi841.js";import"./Curve-DtYKQ2VH.js";import"./step-BZZfKQz_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-gANt9rxI.js";import"./Symbols-CMqY6tCx.js";import"./symbol-DjxHbtiD.js";import"./ActiveShapeUtils-B8QNpF57.js";import"./RegisterGraphicalItemId-DMVQPcLn.js";import"./ErrorBarContext-DUzmHtBE.js";import"./GraphicalItemClipPath-CGgVvw3m.js";import"./SetGraphicalItem-eSn4zQ3n.js";import"./CSSTransitionAnimate-S5R_skHz.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BqMobiPE.js";import"./uniqBy-A8hmwwhf.js";import"./iteratee-B2FVpM9G.js";import"./Cross-Cz3c5tUZ.js";import"./Rectangle-CQY8rJu-.js";import"./Sector-iD3Kd2J-.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
