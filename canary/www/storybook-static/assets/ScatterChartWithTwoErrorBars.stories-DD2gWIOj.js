import{R as r}from"./iframe-CgifVdGo.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BQwDYk2Y.js";import{C as d}from"./CartesianGrid-Chud-6bi.js";import{X as c}from"./XAxis-CZyFu1IP.js";import{Y as y}from"./YAxis-CdCViLx5.js";import{S as h}from"./Scatter-B-MzXwHC.js";import{E as e}from"./ErrorBar-CDUVnnoA.js";import{T as u}from"./Tooltip-CqjX73dw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bdtf4nFv.js";import"./zIndexSlice-cYNAtEFZ.js";import"./throttle-RNDoIp5v.js";import"./index-CE-jOOb9.js";import"./index-2TSMvrpE.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BWqJsMaX.js";import"./isWellBehavedNumber-B5I1Y8ko.js";import"./PolarUtils-CTnnDHZv.js";import"./index-B-WSnDkr.js";import"./index-BIPnoVIq.js";import"./renderedTicksSlice-CdxlE0u2.js";import"./axisSelectors-BoKC2N9p.js";import"./d3-scale-B4rm30Tj.js";import"./CartesianChart-5X0OU6Ae.js";import"./chartDataContext-Cgkpv-Wp.js";import"./CategoricalChart-gWPq6G-r.js";import"./CartesianAxis-5D6mywdN.js";import"./Layer-CeyNxq54.js";import"./Text-CP2PjM28.js";import"./DOMUtils-D8x8v_7W.js";import"./Label-TzQ7qbgp.js";import"./ZIndexLayer-D9Ef8fDH.js";import"./types-IwSvkxMz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-wyY7R1ar.js";import"./useAnimationId-B2JL6a3u.js";import"./Curve-kzqc65C_.js";import"./step-BTn_xVWj.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B_rgmVpc.js";import"./Symbols-Cv5yDpJ-.js";import"./symbol-DQfiD1hp.js";import"./ActiveShapeUtils-PZHl54QD.js";import"./RegisterGraphicalItemId-DWqGyRZG.js";import"./ErrorBarContext-CK5Inlk3.js";import"./GraphicalItemClipPath-ChEyBJAa.js";import"./SetGraphicalItem-DiTEFY4D.js";import"./CSSTransitionAnimate-BkoJGJtl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Ddd5eBYU.js";import"./uniqBy-B-PlV6wf.js";import"./iteratee-Cmxxp19p.js";import"./Cross--7zgNnvK.js";import"./Rectangle-0uJ_DBQ4.js";import"./Sector-DZQjM1rK.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
