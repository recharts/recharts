import{c as r}from"./iframe-fo49l_7F.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-PtyXArCw.js";import{C as d}from"./CartesianGrid-CiqNGoFT.js";import{X as c}from"./XAxis-BzBl98RW.js";import{Y as y}from"./YAxis-Dn27aIIS.js";import{S as h}from"./Scatter-Bn4b0O0L.js";import{E as e}from"./ErrorBar-BFav5HKX.js";import{T as u}from"./Tooltip-CluNubwH.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DNEpPwFB.js";import"./zIndexSlice-DRP-3MQ6.js";import"./immer-Cnd_vM0p.js";import"./index-Cq9JpdB2.js";import"./index-LHlEkonc.js";import"./get-BUAOm5zY.js";import"./resolveDefaultProps-CVMfvQ41.js";import"./isWellBehavedNumber-B0btAC56.js";import"./PolarUtils-CTnnDHZv.js";import"./index-3vxLE14G.js";import"./index-Dnm6qrQS.js";import"./renderedTicksSlice-DvOi1XF2.js";import"./axisSelectors-DA_mvJaq.js";import"./d3-scale-qag23egh.js";import"./CartesianChart-C_VrjQWn.js";import"./chartDataContext-DeCM2GRR.js";import"./CategoricalChart-Di0rvdap.js";import"./CartesianAxis-BLZxyXIk.js";import"./Layer-Cshlv-Qa.js";import"./Text-BTD0u6_t.js";import"./DOMUtils-7oUYJi4I.js";import"./Label-B622NV2p.js";import"./ZIndexLayer-D6UFvHMF.js";import"./types-Bblnl65_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-Bb0TLcRV.js";import"./Curve-C8R-he6_.js";import"./step-D7HygetQ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-AbOvBp5p.js";import"./Symbols-3fti8klF.js";import"./symbol-B4TcFWcH.js";import"./ActiveShapeUtils-nlm4-u2n.js";import"./RegisterGraphicalItemId-zZVZ96Iy.js";import"./ErrorBarContext-BBLhm3gp.js";import"./GraphicalItemClipPath-qLKfObJe.js";import"./SetGraphicalItem-BMqVgIbs.js";import"./useAnimationId-AS8JtY64.js";import"./CSSTransitionAnimate-DXLQRKx5.js";import"./useElementOffset-DrLD4_4t.js";import"./uniqBy-DCYBvHHV.js";import"./iteratee-COYh5OnJ.js";import"./Cross-CWdtNHCJ.js";import"./Rectangle-Bu1eqIwN.js";import"./Sector-CStgtrVQ.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
