import{R as r}from"./iframe-Dbaqfuxw.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-BSN84N_g.js";import{C as d}from"./CartesianGrid-BUjZkSQx.js";import{X as c}from"./XAxis-B8p6yjl5.js";import{Y as y}from"./YAxis-Dutac8df.js";import{S as h}from"./Scatter-nwn0B1TS.js";import{E as e}from"./ErrorBar-DJ65T4e2.js";import{T as u}from"./Tooltip-CIoI_ZFX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dl5FKPzp.js";import"./zIndexSlice-CcFmF_GZ.js";import"./throttle-Y8aMRwU5.js";import"./index-A3AcgQ4H.js";import"./index-CQt4Xl-S.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-xjFLpEsL.js";import"./isWellBehavedNumber-BxE9MI33.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Da5KZnpm.js";import"./index-BrtWnZP9.js";import"./axisSelectors-BumiVa5e.js";import"./d3-scale-HmOGYUjs.js";import"./renderedTicksSlice-DpL__K8R.js";import"./CartesianChart-BXfYtqIv.js";import"./chartDataContext-4k7YbnXG.js";import"./CategoricalChart-CFxz42EG.js";import"./CartesianAxis-DGjRHc2j.js";import"./Layer-BXzB5K08.js";import"./Text-Be1RjgkE.js";import"./DOMUtils-CWVgWmzu.js";import"./Label-BcEDWRMz.js";import"./ZIndexLayer-CpQayApT.js";import"./types-CVDIv1Cb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-60DgJeSx.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-y-MKsCpX.js";import"./useAnimationId-CsoHoZpG.js";import"./Curve-CTO_mN3-.js";import"./step-E3pvPVWS.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ahWnUwoa.js";import"./Symbols-DPxy7uEG.js";import"./symbol-xEsYg7em.js";import"./ActiveShapeUtils-BwZZXBow.js";import"./RegisterGraphicalItemId-BZO7dJhg.js";import"./ErrorBarContext-lpnJ7mOQ.js";import"./GraphicalItemClipPath-r0eQUgnA.js";import"./SetGraphicalItem-D1VXM8vc.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate--eUj5O8y.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D6a9Gzra.js";import"./uniqBy-C7E9iKzu.js";import"./iteratee-lFXD7-Os.js";import"./Cross-COTFQbMP.js";import"./Rectangle-CF0u-T5-.js";import"./Sector-B-9CEmPe.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
