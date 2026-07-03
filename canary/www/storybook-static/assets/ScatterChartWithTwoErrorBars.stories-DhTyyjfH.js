import{R as r}from"./iframe-DIEAN2hv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C65qtwmY.js";import{C as d}from"./CartesianGrid-CeGdZb4b.js";import{X as c}from"./XAxis-DiChMU6m.js";import{Y as y}from"./YAxis-D9ayUFuH.js";import{S as h}from"./Scatter-DmxrNXhU.js";import{E as e}from"./ErrorBar-CN6vD5Qn.js";import{T as u}from"./Tooltip-lQC9vtCe.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-a7tD0_PW.js";import"./zIndexSlice-h_BQOYV2.js";import"./throttle-DcPgljw6.js";import"./index-Ck53zJJh.js";import"./index-DM6nPyH7.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DUc1ArnZ.js";import"./isWellBehavedNumber-9xmYcKjE.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DbRgicKF.js";import"./index-BvKFxAi3.js";import"./renderedTicksSlice-CR60noDO.js";import"./axisSelectors-CGWz1F9h.js";import"./d3-scale-iAsu0ejP.js";import"./CartesianChart-GGBraKX7.js";import"./chartDataContext-DLLGaQBY.js";import"./CategoricalChart-Ceegmo7R.js";import"./CartesianAxis-BIjXN90W.js";import"./Layer-B-cLPPNh.js";import"./Text-BNRKLEiU.js";import"./DOMUtils-C1Qec3X5.js";import"./Label-LaTn0MyB.js";import"./ZIndexLayer-chy9WqcQ.js";import"./types-avIm2VNf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-CVRAeMdn.js";import"./useAnimationId-D28s5KK7.js";import"./Curve-DWZWWV6c.js";import"./step-B5sxv5_w.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CQxKll67.js";import"./Symbols-CRaBoqAe.js";import"./symbol-aEESUuL5.js";import"./ActiveShapeUtils-DzejIYqw.js";import"./RegisterGraphicalItemId-ZGmSkN-p.js";import"./ErrorBarContext-Clnj01jz.js";import"./GraphicalItemClipPath-B9S_-7Qm.js";import"./SetGraphicalItem-Dyls43Kb.js";import"./CSSTransitionAnimate-CpbzZWub.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BvrQ-UF9.js";import"./uniqBy-2YSsId_u.js";import"./iteratee-CbGVDYM_.js";import"./Cross-ajTZFrVl.js";import"./Rectangle-ChtQzbKm.js";import"./Sector-3i6lcn3h.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
