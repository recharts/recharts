import{R as r}from"./iframe-C0xznG0O.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DTONi6AR.js";import{C as d}from"./CartesianGrid-BpTIkxJ-.js";import{X as c}from"./XAxis-3Gc-ze43.js";import{Y as y}from"./YAxis-B6DY9sl9.js";import{S as h}from"./Scatter-toorAP82.js";import{E as e}from"./ErrorBar-D_371Dzr.js";import{T as u}from"./Tooltip-DiFOpZfZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVCjkFWi.js";import"./zIndexSlice-DJPgYMzR.js";import"./throttle-ca9JXI34.js";import"./index-3uxIGkdF.js";import"./index-D3C5hy7v.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BUVviTw0.js";import"./isWellBehavedNumber-LB6DsCms.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-KY5G3glE.js";import"./d3-scale-D_nuk9af.js";import"./index-_lyS6R2I.js";import"./index-DGO5Pcl1.js";import"./renderedTicksSlice-Bn386d_U.js";import"./index-BsyGVjbB.js";import"./CartesianChart-BilL1rox.js";import"./chartDataContext-r0-EMCxL.js";import"./CategoricalChart-AELfSP8z.js";import"./CartesianAxis-CXWr6EGM.js";import"./Layer-DEw218Et.js";import"./Text-DqaiwO2M.js";import"./DOMUtils-CfITjNXH.js";import"./useId-CG9ImVhA.js";import"./useBackwardsCompatibleTheme-Dw2k0O31.js";import"./Label-CdEwuWhi.js";import"./ZIndexLayer-Dqy54YGG.js";import"./types-CAt-4Uam.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-ykdNzwWW.js";import"./useAnimationId-DxkHkn8_.js";import"./Curve-BhnG6nXS.js";import"./step-GNpLhVcs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BDMF1Ufc.js";import"./Symbols-jn71a-FL.js";import"./symbol-Bc3vMSLI.js";import"./ActiveShapeUtils-s_Kx4tDI.js";import"./RegisterGraphicalItemId-CHswFd-U.js";import"./ErrorBarContext-BMmbs1Vg.js";import"./GraphicalItemClipPath-BwjkPZ9S.js";import"./SetGraphicalItem-BcdUc_t-.js";import"./useGraphicalItemIdentity-BPVVk20a.js";import"./CSSTransitionAnimate-B-nWyElE.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CJZMOgR9.js";import"./uniqBy-Ck71NLZs.js";import"./iteratee-B2v99DCQ.js";import"./Cross-BP0FfHwZ.js";import"./Rectangle-BUlwcvxX.js";import"./Sector-DmMCKaPf.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
