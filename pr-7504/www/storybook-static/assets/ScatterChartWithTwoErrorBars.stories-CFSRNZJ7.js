import{R as r}from"./iframe-C8BOwi09.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D05q-cJ1.js";import{C as d}from"./CartesianGrid-AJeyYf-O.js";import{X as c}from"./XAxis-Dm5Odjs3.js";import{Y as y}from"./YAxis-5qfCryrA.js";import{S as h}from"./Scatter-B8xql8ko.js";import{E as e}from"./ErrorBar-DuC6LCYo.js";import{T as u}from"./Tooltip-Dc0rIQtR.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-A-Jl6gDU.js";import"./zIndexSlice-BhlUeiz9.js";import"./throttle-DKEMBEBf.js";import"./index-C1vV4PmY.js";import"./index-B-s74sFu.js";import"./get-Cxci_11r.js";import"./resolveDefaultProps-SXD4-6tw.js";import"./isWellBehavedNumber-lzhpgNRQ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CXTehsJH.js";import"./index-TdmA2U4u.js";import"./renderedTicksSlice-LkhfGRkv.js";import"./axisSelectors--BiFDCId.js";import"./d3-scale-Aru4SClR.js";import"./CartesianChart-CPjCvOHT.js";import"./chartDataContext-C3Wv6QtC.js";import"./CategoricalChart-qjM85PCb.js";import"./CartesianAxis-CWGT70cF.js";import"./Layer--iJ-Hj_L.js";import"./Text-DAXgjhqJ.js";import"./DOMUtils-Bk8mghFc.js";import"./Label-D4SfTv0v.js";import"./ZIndexLayer-CKEhnbZx.js";import"./types-BPAGzNH6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DJI9G60d.js";import"./useAnimationId-C1RCoeBd.js";import"./Curve-CCSLWrMV.js";import"./step-CUCFWzj3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dtceov_d.js";import"./Symbols-DAdykIXc.js";import"./symbol-C0S571ub.js";import"./ActiveShapeUtils-DN8fg87N.js";import"./RegisterGraphicalItemId-D2rzI2r-.js";import"./ErrorBarContext-DLDAFGHH.js";import"./GraphicalItemClipPath-DQUZZg6C.js";import"./SetGraphicalItem-544HumqF.js";import"./CSSTransitionAnimate-CWFGENiL.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D3uxDO7B.js";import"./uniqBy-DDmV_BGS.js";import"./iteratee-Br5fFLhE.js";import"./Cross-CKnG02mU.js";import"./Rectangle-B5iv9bX_.js";import"./Sector-cFQ9Aldc.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
