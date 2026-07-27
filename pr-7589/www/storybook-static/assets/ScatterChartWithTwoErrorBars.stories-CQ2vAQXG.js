import{R as r}from"./iframe-DsM5Snoh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-JkLaIeVe.js";import{C as d}from"./CartesianGrid-CR69ad4g.js";import{X as c}from"./XAxis-BP59MRl4.js";import{Y as y}from"./YAxis-AiKtCrqX.js";import{S as h}from"./Scatter-B2YvZIYI.js";import{E as e}from"./ErrorBar-SIMEHzIS.js";import{T as u}from"./Tooltip-BDoWEOKg.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCACJiBR.js";import"./zIndexSlice-Bw64GR0n.js";import"./throttle-BxJwdddW.js";import"./index-C1bUMSNa.js";import"./index-Cpv94xK3.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B889QW7F.js";import"./isWellBehavedNumber-BL4XxRG3.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DzyEvv1d.js";import"./index-Dme9ADAC.js";import"./renderedTicksSlice-C2lYgmQd.js";import"./axisSelectors-ZbRe1Fr2.js";import"./d3-scale-5xoUdZXJ.js";import"./CartesianChart-DHkgxIBG.js";import"./chartDataContext-ChNOSR4m.js";import"./CategoricalChart-C7zh0Rx-.js";import"./CartesianAxis-CVbxoQSN.js";import"./Layer-DJ-_hZeS.js";import"./Text-DTpoJfmA.js";import"./DOMUtils-bol6pq_B.js";import"./Label-COWFM_3h.js";import"./ZIndexLayer-8J4UOhVH.js";import"./types-C3s_AHHw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-B9cLBWaU.js";import"./useAnimationId-C3tGSe4h.js";import"./Curve-DtFyS1kb.js";import"./step-DmgaGYb6.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BUP9beLh.js";import"./Symbols-BASV0N3J.js";import"./symbol-DgUa4s6j.js";import"./ActiveShapeUtils-Crk25mmB.js";import"./RegisterGraphicalItemId-B77AAmB8.js";import"./ErrorBarContext-SZrR3kne.js";import"./GraphicalItemClipPath-DkDzGEyf.js";import"./SetGraphicalItem-HftiDrim.js";import"./CSSTransitionAnimate-Dgyi0m2M.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-D3ItBwVb.js";import"./uniqBy-DHqhlZDI.js";import"./iteratee-C3LESQL9.js";import"./Cross-pP9lI4hq.js";import"./Rectangle-BJ0VqAUA.js";import"./Sector-CR-Y1Tms.js";const Er={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
