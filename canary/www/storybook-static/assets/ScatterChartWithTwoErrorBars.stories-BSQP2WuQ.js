import{R as r}from"./iframe-BW71A1Nl.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-4U2Ht0wo.js";import{C as d}from"./CartesianGrid-Cl49Y0EH.js";import{X as c}from"./XAxis-DjClnNcb.js";import{Y as y}from"./YAxis-CBUi58KC.js";import{S as h}from"./Scatter-D-6pT0y8.js";import{E as e}from"./ErrorBar-Dbu77lhY.js";import{T as u}from"./Tooltip-CbRCMo5d.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0unhTn-.js";import"./zIndexSlice-D0nATGhG.js";import"./immer-iZdzJVDj.js";import"./index-qgRbHTql.js";import"./index-CUqZ5NZx.js";import"./get-BsK8Vst9.js";import"./resolveDefaultProps-BwvNNDLm.js";import"./isWellBehavedNumber-6M6ThiRO.js";import"./PolarUtils-CTnnDHZv.js";import"./index-7I5wiu9M.js";import"./index-BeMOkAqZ.js";import"./renderedTicksSlice-BObQrIhG.js";import"./axisSelectors-CGn4mfga.js";import"./d3-scale-vdMRCf0o.js";import"./CartesianChart-CGswDKyQ.js";import"./chartDataContext-DixWbQnN.js";import"./CategoricalChart-C428T1Jl.js";import"./CartesianAxis-6UaBWKrc.js";import"./Layer-BmYZzoaR.js";import"./Text-DDeu8cp3.js";import"./DOMUtils-mo8tevis.js";import"./Label-7Nd_0-bw.js";import"./ZIndexLayer-B4CcndAw.js";import"./types-CoBkUvrA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D3llU_s4.js";import"./useAnimationId-L1gInTUa.js";import"./Curve-DRyRFJEG.js";import"./step-m-kUV5sp.js";import"./path-DyVhHtw_.js";import"./tooltipContext-V-tLLPbE.js";import"./Symbols-BuYDGlkC.js";import"./symbol-CvfymRh0.js";import"./ActiveShapeUtils-DnbIkStc.js";import"./RegisterGraphicalItemId-DpVIzNFe.js";import"./ErrorBarContext-Pp_bAm-i.js";import"./GraphicalItemClipPath-C8hys0YQ.js";import"./SetGraphicalItem-DVIO0q7q.js";import"./CSSTransitionAnimate-BOCx3aNl.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B07ItHDs.js";import"./uniqBy-DLbJkmvT.js";import"./iteratee-D3nwGriT.js";import"./Cross-BTbsn6cT.js";import"./Rectangle-D96ELsS-.js";import"./Sector-5Zp1hLTU.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
