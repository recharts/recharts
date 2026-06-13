import{R as r}from"./iframe-ii_SdKaT.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CdyVUPFu.js";import{C as d}from"./CartesianGrid-C2fOlV2I.js";import{X as c}from"./XAxis-n_W7ptOo.js";import{Y as y}from"./YAxis-B_AHmNwM.js";import{S as h}from"./Scatter-BN2-eHvP.js";import{E as e}from"./ErrorBar-CdUXJntp.js";import{T as u}from"./Tooltip-CnFF0eY_.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BJ7nVo9I.js";import"./zIndexSlice-CewrGiZi.js";import"./immer-BRK5VplU.js";import"./index-CipO9bHT.js";import"./index-C9rA4SBW.js";import"./get-IlujCcRJ.js";import"./resolveDefaultProps-DmtqLCBR.js";import"./isWellBehavedNumber-Bl4DTDWz.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CoHu65TP.js";import"./index-BWUxHoQX.js";import"./renderedTicksSlice-6QIQv7lN.js";import"./axisSelectors-BEJlbTgh.js";import"./d3-scale-DqldvK9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-hQrjvxNc.js";import"./chartDataContext-WEDyGrAX.js";import"./CategoricalChart-BC-K0qUt.js";import"./CartesianAxis-C12Pbczw.js";import"./Layer-1o6wJcjz.js";import"./Text-D6jUUcir.js";import"./DOMUtils-CspLYEuU.js";import"./Label-CWAFalVX.js";import"./ZIndexLayer-C_pljZlN.js";import"./types-CROtPh6T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-Ddier9mI.js";import"./useAnimationId-DETjp9PR.js";import"./Curve-CvjftyU5.js";import"./step-CynPry_M.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BgC5UDk8.js";import"./Symbols-CiJzLKZW.js";import"./symbol-DDCaA_8n.js";import"./ActiveShapeUtils-_FaeFiVy.js";import"./RegisterGraphicalItemId-Bd8rL4_6.js";import"./ErrorBarContext-BbBngZhz.js";import"./GraphicalItemClipPath-BIR1mLdK.js";import"./SetGraphicalItem-Ke19tpjU.js";import"./CSSTransitionAnimate-DJSzv-mh.js";import"./useElementOffset-tGPEXiEv.js";import"./uniqBy--oKwp8uZ.js";import"./iteratee-DMX-jnSx.js";import"./Cross-Fj8WcxtO.js";import"./Rectangle-DzvlK_vY.js";import"./Sector-CCDTIu2s.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
