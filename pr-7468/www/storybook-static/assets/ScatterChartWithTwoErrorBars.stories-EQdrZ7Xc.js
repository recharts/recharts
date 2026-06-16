import{R as r}from"./iframe-Cgvurs-_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CC4rSILm.js";import{C as d}from"./CartesianGrid-CGp0VVQ0.js";import{X as c}from"./XAxis-CfwTV-KQ.js";import{Y as y}from"./YAxis-BXqkMu3a.js";import{S as h}from"./Scatter-DWw1XyN1.js";import{E as e}from"./ErrorBar-DovQdaeh.js";import{T as u}from"./Tooltip-DBJ0bUIr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dz-OqOgD.js";import"./zIndexSlice-B_EZWJad.js";import"./immer-BqIPbCUY.js";import"./index-qEaPtvJ4.js";import"./index-DUeZpKgX.js";import"./get-DKeAvde6.js";import"./resolveDefaultProps-CKD-pks7.js";import"./isWellBehavedNumber-wdbvvMft.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BumewqgT.js";import"./index-COSZGJYp.js";import"./renderedTicksSlice-CFCAMk-H.js";import"./axisSelectors-Qbk3cIqD.js";import"./d3-scale-C6AR89xW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-F9cdjQs_.js";import"./chartDataContext-D5SqleTT.js";import"./CategoricalChart-vxMjiHHj.js";import"./CartesianAxis-BZbrDelp.js";import"./Layer-BfP1S3qE.js";import"./Text-BoAtXQm_.js";import"./DOMUtils-DYR9owTl.js";import"./Label-CsnYNS62.js";import"./ZIndexLayer-CAbZgrje.js";import"./types-bZuMx1t8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DU8uToRY.js";import"./useAnimationId-DTgCoSkV.js";import"./Curve-fHqvHXD4.js";import"./step-BqWVDUYB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-d2crV3t8.js";import"./Symbols-Dm791b9Q.js";import"./symbol-DNYQHQcv.js";import"./ActiveShapeUtils-mXcowNCt.js";import"./RegisterGraphicalItemId-Dza9jiXm.js";import"./ErrorBarContext-h79zKdGg.js";import"./GraphicalItemClipPath-BYm3GjGL.js";import"./SetGraphicalItem-B22TqrnA.js";import"./CSSTransitionAnimate-B8KXgwNU.js";import"./useElementOffset-BwaQaS3A.js";import"./uniqBy-6bgl0NGd.js";import"./iteratee-_BM_Lsph.js";import"./Cross-sKVT2Eib.js";import"./Rectangle-SDGp320Q.js";import"./Sector-oFfzS_Kk.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
