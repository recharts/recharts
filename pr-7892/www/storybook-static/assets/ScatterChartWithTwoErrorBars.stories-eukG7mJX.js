import{R as r}from"./iframe-C0YxDW4G.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DyjGvMok.js";import{C as d}from"./CartesianGrid-Bb7zoqVW.js";import{X as c}from"./XAxis-Cpmqfpq_.js";import{Y as y}from"./YAxis-DweGkw3n.js";import{S as h}from"./Scatter-Cp0eBI37.js";import{E as e}from"./ErrorBar-DmWA0cZy.js";import{T as u}from"./Tooltip-zR4Uhk69.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./zIndexSlice-DZlnymAS.js";import"./throttle-DOQHZSoJ.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-nVTOJQip.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./Text-BVHk9liS.js";import"./DOMUtils-CbyUgj5a.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./Label-gEQqlFEh.js";import"./ZIndexLayer-D7SEoPy2.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./Curve-ID0kLGRf.js";import"./step-BuTfKpR_.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DYl4GNw5.js";import"./Symbols-CbOdKhju.js";import"./symbol-CwLocrbc.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./dataEntryStyles-BpByYVhN.js";import"./CSSTransitionAnimate-BNb4Nwi9.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";import"./Cross-DLa943FX.js";import"./Rectangle-Cdyy37-n.js";import"./Sector-iXZx7oIx.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
