import{R as r}from"./iframe-BZg1zG5B.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-Bdom_L7E.js";import{C as d}from"./CartesianGrid-u5mMmC7M.js";import{X as c}from"./XAxis-BFO1dJFq.js";import{Y as y}from"./YAxis-CworNICM.js";import{S as h}from"./Scatter-DOso17NP.js";import{E as e}from"./ErrorBar-BTF3Xehn.js";import{T as u}from"./Tooltip-DDR1rP_Z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DyRofC5m.js";import"./zIndexSlice-CkkPSViG.js";import"./throttle-DFHrPmFV.js";import"./index-BzAnTBpk.js";import"./index-Cmvzg-0C.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CI_HL12t.js";import"./isWellBehavedNumber-Bk-91M8w.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DuAyB1ct.js";import"./index-BSOub4mJ.js";import"./renderedTicksSlice-DxnsaDc8.js";import"./axisSelectors-CZQj26DE.js";import"./d3-scale-CHbHYnH2.js";import"./CartesianChart-NJt7vXp9.js";import"./chartDataContext-gkePnQjL.js";import"./CategoricalChart-CacFZjBO.js";import"./CartesianAxis-CqYm8UKw.js";import"./Layer-AM2ZERM9.js";import"./Text-K_EkIkuP.js";import"./DOMUtils-Bs3ZzMQS.js";import"./Label-D1KCxb60.js";import"./ZIndexLayer-oU6a0KMz.js";import"./types-CP45QuEc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C9XnYXoB.js";import"./useAnimationId-D8zRqkvh.js";import"./Curve-BscR4dmI.js";import"./step-DGy1Mip9.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Cpa5bPP9.js";import"./Symbols-DSd1EVM7.js";import"./symbol-RD3e_Ysr.js";import"./ActiveShapeUtils-9Jnofarx.js";import"./RegisterGraphicalItemId-CnFfEqxk.js";import"./ErrorBarContext-HRURTUgd.js";import"./GraphicalItemClipPath-DCZKfxi9.js";import"./SetGraphicalItem-DRJD094C.js";import"./CSSTransitionAnimate-CY804owM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-vOgnM54n.js";import"./uniqBy-38RNx4xl.js";import"./iteratee-OjymSSaI.js";import"./Cross-DTSM-pd8.js";import"./Rectangle-p2Bv9KHw.js";import"./Sector-CHRpWAnJ.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
