import{c as r}from"./iframe-BRX46Ivk.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-u6PyD6AJ.js";import{C as d}from"./CartesianGrid-D0aJguyw.js";import{X as c}from"./XAxis-BCLXDtwM.js";import{Y as y}from"./YAxis-DQxr8HwE.js";import{S as h}from"./Scatter-DQCSyvTc.js";import{E as e}from"./ErrorBar-C9Qz-tIh.js";import{T as u}from"./Tooltip-CVUewvSq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2N_lXXj.js";import"./zIndexSlice-DWdWmCIF.js";import"./immer-B8PXb0jM.js";import"./index-aVTX2b-6.js";import"./index-B93cWPAb.js";import"./get-Co_O7Bis.js";import"./resolveDefaultProps-yU7jT9_k.js";import"./isWellBehavedNumber-CB_DAa3f.js";import"./PolarUtils-CTnnDHZv.js";import"./index-WXfBYNk1.js";import"./index-C_nDec_P.js";import"./renderedTicksSlice-B8vMnOQc.js";import"./axisSelectors-CxAtIunO.js";import"./d3-scale--l5c2rdM.js";import"./CartesianChart-CXTTTHcm.js";import"./chartDataContext-Liihjxia.js";import"./CategoricalChart-CQuPTVMV.js";import"./CartesianAxis-D25s55eU.js";import"./Layer-CnAnt2-w.js";import"./Text-Dab8pblH.js";import"./DOMUtils-DYK5KdOd.js";import"./Label-BF8y58w-.js";import"./ZIndexLayer-CPddneQ7.js";import"./types-BPLmhp3x.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-CZBp5YIk.js";import"./Curve-DevGF9dB.js";import"./step-DohD2rXx.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DNGXltcD.js";import"./Symbols-B8Sp8m_P.js";import"./symbol-ByCVyfxY.js";import"./ActiveShapeUtils-DpAig7qv.js";import"./RegisterGraphicalItemId-D97Nzm32.js";import"./ErrorBarContext-OAvmaR3P.js";import"./GraphicalItemClipPath-BoMPcOm_.js";import"./SetGraphicalItem-Ddj-tLej.js";import"./useAnimationId-HcldwJQz.js";import"./CSSTransitionAnimate-7H5KAzQi.js";import"./useElementOffset-De3qQeYf.js";import"./uniqBy-CtWhPXaz.js";import"./iteratee-B6B5J5uM.js";import"./Cross-BvuakeTj.js";import"./Rectangle-BGEQUwuw.js";import"./Sector-DKv1-que.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,xr as __namedExportsOrder,gr as default};
