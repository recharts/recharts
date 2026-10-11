import{R as r}from"./iframe-BR4M1uiR.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Dedki24Z.js";import{C as d}from"./CartesianGrid-CKu_uDPm.js";import{X as c}from"./XAxis-CcBq3_nh.js";import{Y as y}from"./YAxis-DWcZ5Lh0.js";import{S as h}from"./Scatter-E4sctY1R.js";import{E as e}from"./ErrorBar-CsqHZGGL.js";import{T as u}from"./Tooltip-fk4Y29bw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B0bWwFQm.js";import"./zIndexSlice-HrFSVAcv.js";import"./throttle-G6Y8pgni.js";import"./index-Ci_VIYcH.js";import"./index-BnaGZY2I.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BLjA4bYj.js";import"./isWellBehavedNumber-D_WQYNTo.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BqweAZHb.js";import"./d3-scale-CeZrfwiY.js";import"./index-YkNArcGN.js";import"./index-D8NvIHNM.js";import"./renderedTicksSlice-BfPj2XQ-.js";import"./index-CncCwIwt.js";import"./CartesianChart-q49HIkvw.js";import"./chartDataContext-BuFcKplQ.js";import"./CategoricalChart-2FTjt8Lf.js";import"./CartesianAxis-CHydPwh7.js";import"./Layer-DlfW1ESK.js";import"./Text-VnSH714e.js";import"./pageBackground-DPb5heYZ.js";import"./useId-pURs8c9G.js";import"./useBackwardsCompatibleTheme-D05qWzDc.js";import"./Label-XYAyrwIP.js";import"./ZIndexLayer-CLaDw56X.js";import"./types-B-qT5SDC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-WDF83Cdx.js";import"./useAnimationId-AG0wMyfL.js";import"./dataEntryStyles-DLaplEnq.js";import"./Curve-D8aJ7Tuc.js";import"./step-CbSh2F2e.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CAZrkwKt.js";import"./Symbols-Cam4rM4m.js";import"./symbol-Rv-yxBgO.js";import"./ActiveShapeUtils-CPXOp-Yk.js";import"./ErrorBarContext-DuGO1Y_l.js";import"./GraphicalItemClipPath-yRc51fA7.js";import"./SetGraphicalItem-BfeYb81m.js";import"./useEffectiveDataKey-B_fgXjH_.js";import"./CSSTransitionAnimate-CYEYto5X.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BgqvZiar.js";import"./uniqBy-Duhs8M_o.js";import"./iteratee-DjlDP_tJ.js";import"./Cross-Dq_SuLms.js";import"./Rectangle-uO21666K.js";import"./Sector-BI71AD0D.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
