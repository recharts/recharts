import{R as r}from"./iframe-C5hmF0To.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DNA6wKMy.js";import{C as d}from"./CartesianGrid-BtlMgpnR.js";import{X as c}from"./XAxis-C0QI0HXh.js";import{Y as y}from"./YAxis-8wMoNgQN.js";import{S as h}from"./Scatter-D1JgtBiC.js";import{E as e}from"./ErrorBar-DsCu_Qyj.js";import{T as u}from"./Tooltip-28ogAC6y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C2jsJsE5.js";import"./zIndexSlice-BixfUK5V.js";import"./throttle-teWCo3kp.js";import"./index-DPASLuit.js";import"./index-BrQaS3a5.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CdkFEDnC.js";import"./isWellBehavedNumber-DY0MczIS.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CJFfs8Zx.js";import"./index-B_hHrNFX.js";import"./renderedTicksSlice-Cp2rYryV.js";import"./axisSelectors-3ticTacJ.js";import"./d3-scale-B4bxyqZp.js";import"./CartesianChart-luY4Ugiw.js";import"./chartDataContext-BtJuej3V.js";import"./CategoricalChart-B7M_pOAg.js";import"./CartesianAxis-Co52JpOx.js";import"./Layer-CDmGCMyH.js";import"./Text-C5taNjiE.js";import"./DOMUtils-BTnNVt5T.js";import"./Label-Du636Igd.js";import"./ZIndexLayer-CCu8NHHi.js";import"./types-CeFfhpIK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-oPpqoGy7.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BcG4wu47.js";import"./useAnimationId-WdLJ0TXq.js";import"./Curve-cVSz_V8P.js";import"./step-AxYq5Lzl.js";import"./path-DyVhHtw_.js";import"./tooltipContext-6ft3c5Lu.js";import"./Symbols-BGaSP5QY.js";import"./symbol-DEC0z0TC.js";import"./ActiveShapeUtils-Bfj9ZkEg.js";import"./RegisterGraphicalItemId-Db5IkoaQ.js";import"./ErrorBarContext-BXXzJsD_.js";import"./GraphicalItemClipPath-DzTwh4wM.js";import"./SetGraphicalItem-CGZeJBQo.js";import"./CSSTransitionAnimate-CmxU96GA.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BvtQZ0-R.js";import"./uniqBy-BSE1jEQh.js";import"./iteratee-CTdVzveq.js";import"./Cross-CQZ99liq.js";import"./Rectangle-CcdSdsCc.js";import"./Sector-Bbn7YV2S.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
