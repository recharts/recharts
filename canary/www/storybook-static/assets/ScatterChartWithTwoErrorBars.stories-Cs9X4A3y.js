import{R as r}from"./iframe-Byz0CZgU.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BWF5Mlx2.js";import{C as d}from"./CartesianGrid-BUrM0Lzp.js";import{X as c}from"./XAxis-BUPL4hjC.js";import{Y as y}from"./YAxis-jlA8Ias5.js";import{S as h}from"./Scatter-DIyRpp6i.js";import{E as e}from"./ErrorBar-C79n4O-n.js";import{T as u}from"./Tooltip-DSf6lPPV.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D5qdTAip.js";import"./zIndexSlice-DotL-Jp7.js";import"./throttle-4aokm5Ko.js";import"./index-CK-fZH2A.js";import"./index-CQCdoqal.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-DuQSjIkO.js";import"./isWellBehavedNumber-B1YKzF79.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CNmE48Wz.js";import"./index-D4FuUZjH.js";import"./renderedTicksSlice-BW0ZnHiJ.js";import"./axisSelectors-CN4g76wg.js";import"./d3-scale-D3FDPfRZ.js";import"./CartesianChart-QxAb7wSw.js";import"./chartDataContext-E1G0KTyW.js";import"./CategoricalChart-Dqx0x7Kl.js";import"./CartesianAxis-B3F7THN1.js";import"./Layer-jJo0ut9m.js";import"./Text-DEkD8bId.js";import"./DOMUtils-DwTCLKyl.js";import"./Label-DuUl9C5P.js";import"./ZIndexLayer-DaxIl4jI.js";import"./types-DE0YJD6S.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DfGqi-Ay.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-2XdTa_Uh.js";import"./useAnimationId-CqGGvgKC.js";import"./Curve-BcJaCZSu.js";import"./step-Cb3pk4Rp.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ahP9ZnaZ.js";import"./Symbols-BVpfILPu.js";import"./symbol-CS8b5as0.js";import"./ActiveShapeUtils-RF04AL4M.js";import"./RegisterGraphicalItemId-CPoQFzzX.js";import"./ErrorBarContext-D4-M1cf3.js";import"./GraphicalItemClipPath-CC2ibiyE.js";import"./SetGraphicalItem-D0qKavYL.js";import"./CSSTransitionAnimate-Cp8zzuF8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dpa0V5po.js";import"./uniqBy-BOokmjAX.js";import"./iteratee-JxZPr5ba.js";import"./Cross-LlvlF_v1.js";import"./Rectangle-lPqfXVFD.js";import"./Sector-CGH0r-5N.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
