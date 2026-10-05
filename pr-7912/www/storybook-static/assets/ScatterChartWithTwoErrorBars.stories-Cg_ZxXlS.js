import{R as r}from"./iframe-zVk88q-r.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-BF6hPMGF.js";import{C as d}from"./CartesianGrid-ChAwnnD8.js";import{X as c}from"./XAxis-DfHugD0J.js";import{Y as y}from"./YAxis-BU4R0oLg.js";import{S as h}from"./Scatter-PGji7T8U.js";import{E as e}from"./ErrorBar-CyEytOZM.js";import{T as u}from"./Tooltip-yI4F6phI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C0-bRbC3.js";import"./zIndexSlice-DfutBn7L.js";import"./throttle-BmkgAj5t.js";import"./index-DsALRTV8.js";import"./index-Bk0bK2TA.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B_GPAkFH.js";import"./isWellBehavedNumber-C-ZPk_Xp.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CmXBEtTu.js";import"./d3-scale-CFGG9Jl0.js";import"./index-fUo0OINa.js";import"./index-DlbGxR67.js";import"./renderedTicksSlice-BX5u_Wlp.js";import"./index-C7LumEWu.js";import"./CartesianChart-CaeWlYzw.js";import"./chartDataContext-2A6w0qLe.js";import"./CategoricalChart-DJLnAv9C.js";import"./CartesianAxis-CfxKlxox.js";import"./Layer-lcnk2Jvi.js";import"./Text-Nx4ACQwF.js";import"./DOMUtils-Dnj4_Ujh.js";import"./useId-BC8SsZ2L.js";import"./useBackwardsCompatibleTheme-BjS2fGJi.js";import"./Label-CrnAbRyD.js";import"./ZIndexLayer-r6epNlFr.js";import"./types-gJ-qKTie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CE9fFFYl.js";import"./useAnimationId-DztKFKRO.js";import"./Curve-CDtDqQyg.js";import"./step-CBXY0TZz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-t_fGIXBw.js";import"./Symbols-CCBoxX71.js";import"./symbol-BjLCTHgg.js";import"./ActiveShapeUtils-a-OI7kZz.js";import"./RegisterGraphicalItemId-DbfLY7XL.js";import"./ErrorBarContext-DAwElSG5.js";import"./GraphicalItemClipPath-BL0H_9p-.js";import"./SetGraphicalItem-1sdGamMS.js";import"./useGraphicalItemIdentity-D7Hr4JLm.js";import"./dataEntryStyles-D5I8d5IK.js";import"./CSSTransitionAnimate-DLttr0RU.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-Dc53Yk5t.js";import"./uniqBy-54ckHNjc.js";import"./iteratee-CnMF74mw.js";import"./Cross-DBsBm5TM.js";import"./Rectangle-o8c6UGkH.js";import"./Sector-CaIcWj5Y.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
