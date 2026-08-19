import{R as r}from"./iframe-r_02-Jx1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CMXx9dCc.js";import{C as d}from"./CartesianGrid-DvK7iabw.js";import{X as c}from"./XAxis-CVgPbfXC.js";import{Y as y}from"./YAxis-Bi1VNLZO.js";import{S as h}from"./Scatter-BcokZN6W.js";import{E as e}from"./ErrorBar-DSnKVFO9.js";import{T as u}from"./Tooltip-D2rWhrrA.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BQFxUNUu.js";import"./zIndexSlice-DicCmdef.js";import"./throttle-BdAdSRQA.js";import"./index-1kThdQ6e.js";import"./index-wzqytK4Q.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DyxRtFzB.js";import"./isWellBehavedNumber-CBLlozNg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-N0rIL4Gt.js";import"./index-3jrDyBev.js";import"./axisSelectors-Dk3JE-i1.js";import"./d3-scale-ZwXuuq5P.js";import"./renderedTicksSlice-DFasVLMR.js";import"./CartesianChart-BGJHdGBf.js";import"./chartDataContext-BdayT2-p.js";import"./CategoricalChart-BXr2d9-i.js";import"./CartesianAxis-D3LO-u6r.js";import"./Layer-dybzDHm9.js";import"./Text-DCZHyyNe.js";import"./DOMUtils-BlgfTScp.js";import"./useBackwardsCompatibleTheme-WaqTwaFy.js";import"./Label-CNQryUt-.js";import"./ZIndexLayer-DmaqXjfN.js";import"./types-DPBZ02ip.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CW8FYpXu.js";import"./useAnimationId-R3ZNERdL.js";import"./Curve-BS9D-rBh.js";import"./step-CkxDYVc4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-spJlz4jn.js";import"./Symbols-BARhuu6m.js";import"./symbol-U42lp78U.js";import"./ActiveShapeUtils-BgiK615A.js";import"./RegisterGraphicalItemId-BP1XikYq.js";import"./ErrorBarContext-DmfoTXVm.js";import"./GraphicalItemClipPath-D_fliYIp.js";import"./SetGraphicalItem-ByUdxl3U.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-D6WLZ9Mr.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-slB8K9ts.js";import"./uniqBy-9Ezk50RS.js";import"./iteratee-Bv8d6n2u.js";import"./Cross-DUt1vd2f.js";import"./Rectangle-D-S66SPd.js";import"./Sector-Dgzpsjtf.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
