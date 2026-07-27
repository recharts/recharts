import{R as r}from"./iframe-dVfgBJJs.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-D1NVpSTi.js";import{C as d}from"./CartesianGrid-S7mJlfqt.js";import{X as c}from"./XAxis-Dq_1Ikw5.js";import{Y as y}from"./YAxis-Bw51heiQ.js";import{S as h}from"./Scatter-CIbT878e.js";import{E as e}from"./ErrorBar-D2xJZatH.js";import{T as u}from"./Tooltip-CJSXK5by.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BUOG_0PT.js";import"./zIndexSlice-Cjn5-XTM.js";import"./throttle-B7XzNIu7.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BJYE31LD.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./axisSelectors-rruDH4Fs.js";import"./d3-scale-BnZ4Lirr.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./Label-Qwq3mE6t.js";import"./ZIndexLayer-CwGLm3MP.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./Curve-BS8zfYeH.js";import"./step-DuOmXCgZ.js";import"./path-DyVhHtw_.js";import"./tooltipContext-D6BeuZ0a.js";import"./Symbols-HSjwRIgd.js";import"./symbol-Jvzv5OcK.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./ErrorBarContext-CcM5piDn.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./CSSTransitionAnimate-2sSVdq_-.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./Cross-BdrRvahT.js";import"./Rectangle-CBvNSrWO.js";import"./Sector-CC1aczQ9.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Xr as __namedExportsOrder,Er as default};
