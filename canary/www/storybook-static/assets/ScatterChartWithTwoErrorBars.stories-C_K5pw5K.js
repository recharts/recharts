import{R as r}from"./iframe-7RWUuhSd.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CmT0d_uI.js";import{C as d}from"./CartesianGrid-CTPNCTPZ.js";import{X as c}from"./XAxis-C-yl8jm9.js";import{Y as y}from"./YAxis-8kn4A2SS.js";import{S as h}from"./Scatter-BwLDQfU6.js";import{E as e}from"./ErrorBar-ClHxBWvm.js";import{T as u}from"./Tooltip-DVTWmIsy.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bxby6BNU.js";import"./zIndexSlice-C-1xueag.js";import"./throttle-C227k_Ys.js";import"./index-DH_Nh8tm.js";import"./index-ST-ozWV_.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DASEB5Wz.js";import"./isWellBehavedNumber-BpVUwl5Y.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BfsW4WVk.js";import"./index-CJpx5Qie.js";import"./axisSelectors-DDo2hoqB.js";import"./d3-scale-BsnTxIDO.js";import"./renderedTicksSlice-CZ8pQT90.js";import"./CartesianChart-Cp-UDomk.js";import"./chartDataContext-CBmAGHT1.js";import"./CategoricalChart-Dy4quV1E.js";import"./CartesianAxis-DWQJI5tm.js";import"./Layer-BumiLaGI.js";import"./Text-C5AxehkZ.js";import"./DOMUtils-CAVKjQcs.js";import"./RechartsThemeContext-ajl3dqdh.js";import"./Label-DVgNkXBe.js";import"./ZIndexLayer-CjyDq4Qz.js";import"./types-DB_EcD1u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-awhheCod.js";import"./useAnimationId-CBjNqWHO.js";import"./Curve-K5B3Xoou.js";import"./step-9lMeGmm4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CayA0wux.js";import"./Symbols-DKsKe8A2.js";import"./symbol-DIvMV5l6.js";import"./ActiveShapeUtils-DetKTjsC.js";import"./RegisterGraphicalItemId-1lBEDF1k.js";import"./ErrorBarContext-CFwTRIJP.js";import"./GraphicalItemClipPath-BA1h2NiZ.js";import"./SetGraphicalItem-90z5HlWu.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-Bi9EYRmj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BOAPUBRF.js";import"./uniqBy-CMb7Fqzi.js";import"./iteratee-0AIsNve9.js";import"./Cross-vsjs0DL_.js";import"./Rectangle-CHtXbmZu.js";import"./Sector-Bz26gwEi.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
