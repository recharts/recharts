import{R as r}from"./iframe-DNXhgPY2.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B4ccZKUq.js";import{C as d}from"./CartesianGrid-lmi37WIP.js";import{X as c}from"./XAxis-CJs7Huhu.js";import{Y as y}from"./YAxis-DAJ4SxQ-.js";import{S as h}from"./Scatter-Cs_phGsK.js";import{E as e}from"./ErrorBar-gtjwpGC0.js";import{T as u}from"./Tooltip-DdJiayHr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C4y6DVLx.js";import"./zIndexSlice-C_G2hm8X.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DX55Ajk9.js";import"./throttle-OaXA1Z9W.js";import"./index-CfUX9U3P.js";import"./index-BHfOcO_x.js";import"./axisSelectors-CTPBeHC3.js";import"./polarAxisSelectors-z81ryBra.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B8LWxob5.js";import"./index-BF5Wrxm3.js";import"./index-BBIEjaB7.js";import"./renderedTicksSlice-By9MTVsP.js";import"./index-CjdFEwMf.js";import"./fillDefinitions-DJ3S14WH.js";import"./CartesianChart-Czh_fqoQ.js";import"./chartDataContext-BJtoY4FG.js";import"./CategoricalChart-DPAZKGgc.js";import"./CartesianAxis-Dr28b-wt.js";import"./Layer-EsfR_jDG.js";import"./Text-_51Pk49J.js";import"./ZIndexLayer-wMGGFAui.js";import"./Label-Ds6wWWz7.js";import"./types-DuvV7zSt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-Wu6ggnF0.js";import"./activeStyles-DSoUr8Vz.js";import"./useAnimationId-CljrEDcm.js";import"./Curve-DQsYvz2A.js";import"./step-DKewonm6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CfXnMrjv.js";import"./Symbols-d0jhdEjn.js";import"./symbol-D8br0DPp.js";import"./ActiveShapeUtils-B7gfZ4ip.js";import"./ErrorBarContext-j0Aj2Uq7.js";import"./SetGraphicalItem-COzEpMHH.js";import"./useEffectiveDataKey-CcJJJpcL.js";import"./CSSTransitionAnimate-Bm0XjMmr.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D5YMnEix.js";import"./uniqBy-ClVkJmze.js";import"./iteratee-DgvxGvrf.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DGGaRhQ1.js";import"./Rectangle-BDMoKugF.js";import"./Sector-KfbG1aLo.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
