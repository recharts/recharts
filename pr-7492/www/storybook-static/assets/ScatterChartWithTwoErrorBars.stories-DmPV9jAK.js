import{R as r}from"./iframe-Cmv2uZik.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-g3SkvrMj.js";import{C as d}from"./CartesianGrid-BV-bcAfI.js";import{X as c}from"./XAxis-BHNxMNK7.js";import{Y as y}from"./YAxis-BKFIWsdJ.js";import{S as h}from"./Scatter-C_TmIqqY.js";import{E as e}from"./ErrorBar-BYYKzSDC.js";import{T as u}from"./Tooltip-D3bM9iro.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B1y6zL6A.js";import"./zIndexSlice-kpWLrDSf.js";import"./immer-BpVJ12_R.js";import"./index-1nWXUQRt.js";import"./index-BODQ_clV.js";import"./get-26q7mLtB.js";import"./resolveDefaultProps-CVMWQw0A.js";import"./isWellBehavedNumber-DPLnuG7C.js";import"./PolarUtils-CTnnDHZv.js";import"./index-F92hSDpv.js";import"./index-Blrf4sdp.js";import"./renderedTicksSlice-De354RnA.js";import"./axisSelectors-DN7Qk49e.js";import"./d3-scale-C0Ts3d9o.js";import"./CartesianChart-Culr-Wpg.js";import"./chartDataContext-DDdGqXS2.js";import"./CategoricalChart-BzXggkHJ.js";import"./CartesianAxis-BCDXmj_o.js";import"./Layer-BSNuGngv.js";import"./Text-579iQBnG.js";import"./DOMUtils-BF0MLXBa.js";import"./Label-COZByZz9.js";import"./ZIndexLayer-D1dh8rie.js";import"./types-DtyijqTI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-lktoz8YW.js";import"./useAnimationId-9e7OJi4C.js";import"./Curve-DX9DZst-.js";import"./step-DGX6e4k6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BeMwIDSP.js";import"./Symbols-C9K35YDq.js";import"./symbol-UjsPHlP5.js";import"./ActiveShapeUtils-Dvr59oga.js";import"./RegisterGraphicalItemId-snzh5Pbt.js";import"./ErrorBarContext-kFIcQTi0.js";import"./GraphicalItemClipPath-BiRXHsBx.js";import"./SetGraphicalItem-HiTeWvOV.js";import"./CSSTransitionAnimate-BvJ0BDYM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CSu7wa8E.js";import"./uniqBy-Bk8Zomuw.js";import"./iteratee-DwbYjoyw.js";import"./Cross-CtkqI7lB.js";import"./Rectangle-OJfYPkwR.js";import"./Sector-DBPKh_N3.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
