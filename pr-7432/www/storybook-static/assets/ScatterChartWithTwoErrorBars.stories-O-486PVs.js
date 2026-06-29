import{R as r}from"./iframe-BAIqIWNA.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C0POspRc.js";import{C as d}from"./CartesianGrid-Cg-pZWhK.js";import{X as c}from"./XAxis-BESD5mtP.js";import{Y as y}from"./YAxis-Bm2PYPOq.js";import{S as h}from"./Scatter-B9kaXElY.js";import{E as e}from"./ErrorBar-Dr-3EeeC.js";import{T as u}from"./Tooltip-BP6t96w5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C_-Hq-nw.js";import"./zIndexSlice-CH0jeNcq.js";import"./throttle-RdvYAJ7W.js";import"./index-DEPXziQr.js";import"./index-8mm5rYzH.js";import"./get-BRwdZQjD.js";import"./resolveDefaultProps-i7ykL5qD.js";import"./isWellBehavedNumber-CNdP1Ytp.js";import"./PolarUtils-CTnnDHZv.js";import"./index-toxz65-Z.js";import"./index-CyrXrpRf.js";import"./renderedTicksSlice-BzbX13g0.js";import"./axisSelectors-DSdgiRZF.js";import"./d3-scale-XjdmCel8.js";import"./CartesianChart-rcoBq7rb.js";import"./chartDataContext-B9E6qJUl.js";import"./CategoricalChart-2sY7x5Tz.js";import"./CartesianAxis-C8GWRYR8.js";import"./Layer-B1lMYI05.js";import"./Text-zDVT9NAV.js";import"./DOMUtils-DVLfSCIT.js";import"./Label-Bax8HmP7.js";import"./ZIndexLayer-_81h3bN-.js";import"./types-CesEI09P.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C-tOmxqX.js";import"./useAnimationId-BLdV4NOG.js";import"./Curve-DkPKhJGD.js";import"./step-BUpdG0kT.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DGLSg2Ug.js";import"./Symbols-CVaSTbbY.js";import"./symbol-DX_EUXwT.js";import"./ActiveShapeUtils-Cmphxx7v.js";import"./RegisterGraphicalItemId-D75UFrcW.js";import"./ErrorBarContext-kr74OQbY.js";import"./GraphicalItemClipPath-hNmJpUVR.js";import"./SetGraphicalItem-CgGxkUt7.js";import"./CSSTransitionAnimate-0h74xWVd.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Y89N9bd1.js";import"./uniqBy-CLC5nVUH.js";import"./iteratee-D4GVextx.js";import"./Cross-CBjNFZem.js";import"./Rectangle-BcFE5tg_.js";import"./Sector-Bm_uS1EM.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
