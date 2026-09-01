import{R as r}from"./iframe-eCr2-59Z.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-DHt8JpDc.js";import{C as d}from"./CartesianGrid-DV2mmc9Z.js";import{X as c}from"./XAxis-BeuO0xzQ.js";import{Y as y}from"./YAxis-Cuh1Lbu7.js";import{S as h}from"./Scatter-Cv2h2uDJ.js";import{E as e}from"./ErrorBar-C0Uc26kH.js";import{T as u}from"./Tooltip-Nk-JtxEK.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DoeZcTzK.js";import"./zIndexSlice-CD7Nzmbk.js";import"./throttle-CHiOBW5g.js";import"./index-DlVaZeCX.js";import"./index-CDbn5IN3.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLrpEwf5.js";import"./isWellBehavedNumber-BX5cDItw.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-XgUrcrj-.js";import"./d3-scale-DSuKdHKR.js";import"./index-D2uCi-Qk.js";import"./index-CyK8wlGY.js";import"./renderedTicksSlice-BlPrZ01d.js";import"./index-BuNBM-8V.js";import"./CartesianChart-DC1yVdgS.js";import"./chartDataContext-BNVmIje_.js";import"./CategoricalChart-w4Nfi_R8.js";import"./CartesianAxis-DM1SJqww.js";import"./Layer-B9Pm5ax2.js";import"./Text-Dt8yoLTw.js";import"./DOMUtils-CvaVkNT1.js";import"./useId-wEfkqppv.js";import"./useBackwardsCompatibleTheme-chYhM6Hr.js";import"./Label-Dt0yALiM.js";import"./ZIndexLayer-t0OZMtls.js";import"./types-CkIcctJW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-ObasoevI.js";import"./useAnimationId-BzRkh0x1.js";import"./Curve-_JaX0enx.js";import"./step-DPSpBZpB.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dnwvkrjr.js";import"./Symbols-CPNbxaWf.js";import"./symbol-CB8M2uMu.js";import"./ActiveShapeUtils-9F7-N6Ps.js";import"./RegisterGraphicalItemId-C5jGdxAH.js";import"./ErrorBarContext-CMzXWbdm.js";import"./GraphicalItemClipPath-C8yNHMes.js";import"./SetGraphicalItem-zq2UkTvM.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-Bjrod90S.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-MEJhTGNO.js";import"./uniqBy-U4NYpMNG.js";import"./iteratee-iLRiaLVh.js";import"./Cross-BfzXoIjE.js";import"./Rectangle-BNHBAKh_.js";import"./Sector-CE_l6vGe.js";const Sr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Dr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
