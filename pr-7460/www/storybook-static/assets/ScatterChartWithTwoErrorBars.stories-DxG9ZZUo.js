import{R as r}from"./iframe-CA6cNkus.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DmD29b-O.js";import{C as d}from"./CartesianGrid-vzqtg0Zj.js";import{X as c}from"./XAxis-C-xfE_6F.js";import{Y as y}from"./YAxis-CFfqmSxu.js";import{S as h}from"./Scatter-CQeErqh1.js";import{E as e}from"./ErrorBar-CijkVB4h.js";import{T as u}from"./Tooltip-CqtcjeX_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BrfCX34J.js";import"./zIndexSlice-O14BPpZi.js";import"./immer-Dmy9GJDo.js";import"./index-CfaPbByM.js";import"./index-DbciZ0iE.js";import"./get-CFJz0ojL.js";import"./resolveDefaultProps-C9L5vbOj.js";import"./isWellBehavedNumber-BkzajOOq.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DQmIhdua.js";import"./index-PI3smBoN.js";import"./renderedTicksSlice-DwJ0KlHq.js";import"./axisSelectors-BqSveJ2d.js";import"./d3-scale-C6_zgknL.js";import"./CartesianChart-B9pQBHyJ.js";import"./chartDataContext-D73bINqU.js";import"./CategoricalChart-D2WxsK_0.js";import"./CartesianAxis-Bnc9pIGx.js";import"./Layer-D-oRDXko.js";import"./Text-NUcA7Wwc.js";import"./DOMUtils-BVqsAse9.js";import"./Label-B1-Zgg5t.js";import"./ZIndexLayer-L_zBn_oX.js";import"./types-BSXU9Oqu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-B54-TdNS.js";import"./useAnimationId-b25y8QfL.js";import"./Curve-DAXRhNFX.js";import"./step-QPa8K90E.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B8e44Ric.js";import"./Symbols-C3aMVRD3.js";import"./symbol-DsCqIlHH.js";import"./ActiveShapeUtils-DCmnuM_G.js";import"./RegisterGraphicalItemId-pJmMrti4.js";import"./ErrorBarContext-arfdjlYp.js";import"./GraphicalItemClipPath-B1gJnBar.js";import"./SetGraphicalItem-BUx_zIn8.js";import"./CSSTransitionAnimate-DTZe0DLv.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-rnxS_oDH.js";import"./uniqBy-Clt69WpW.js";import"./iteratee-C8N0Znrl.js";import"./Cross-B4IxIp7C.js";import"./Rectangle-7u_GUvK2.js";import"./Sector-B7X01eOW.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
