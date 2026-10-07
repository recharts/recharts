import{R as r}from"./iframe-C1V3amVF.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-1FmHYZj1.js";import{C as d}from"./CartesianGrid-iPOUv6eS.js";import{X as c}from"./XAxis-CUJJeScp.js";import{Y as y}from"./YAxis-CCWiCDwe.js";import{S as h}from"./Scatter-8kmO9scX.js";import{E as e}from"./ErrorBar-CU8KcDSC.js";import{T as u}from"./Tooltip-DwozMVE2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cc-bEMHs.js";import"./zIndexSlice-CxDitcfM.js";import"./throttle-DLY36_v2.js";import"./index-B41u_h9l.js";import"./index-B4ZIiFXx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-maTY1UNo.js";import"./isWellBehavedNumber-sSvUiVa0.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BX0vcNuG.js";import"./d3-scale-BOUMSuvG.js";import"./index-CssId3o7.js";import"./index-DnibiSA_.js";import"./renderedTicksSlice-D9YwC06X.js";import"./index-BGhjEBZe.js";import"./CartesianChart-6UNv2iJv.js";import"./chartDataContext-CaPayD00.js";import"./CategoricalChart-B25IDucc.js";import"./CartesianAxis-DtpXHVOF.js";import"./Layer-BYwPbOg9.js";import"./Text-C-wx4MGw.js";import"./DOMUtils-BorqH6Wm.js";import"./useId-CqxK22LB.js";import"./useBackwardsCompatibleTheme-DW9fdEyu.js";import"./Label-B5Mwu39-.js";import"./ZIndexLayer-3Hvhzeb3.js";import"./types-BJLf6sJx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-aGWDQ20-.js";import"./useAnimationId-CfyL2S79.js";import"./Curve-DehrnztG.js";import"./step-DAx8CwGE.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B8F29Znr.js";import"./Symbols-DCPONZ93.js";import"./symbol-DsoNMZia.js";import"./ActiveShapeUtils-MAleYnD7.js";import"./RegisterGraphicalItemId-DC_0c8kg.js";import"./ErrorBarContext-BBO43QIU.js";import"./GraphicalItemClipPath-CMqb799B.js";import"./SetGraphicalItem-BaWbpx0v.js";import"./useGraphicalItemIdentity-DMF19NMJ.js";import"./dataEntryStyles-B8wapxC1.js";import"./CSSTransitionAnimate-D5zBk1KH.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Cvn3bpJq.js";import"./uniqBy-CIEuKI_-.js";import"./iteratee-DBOMspHe.js";import"./Cross-BReV1fvT.js";import"./Rectangle-D28FxDHn.js";import"./Sector-Dx9uw-JU.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
