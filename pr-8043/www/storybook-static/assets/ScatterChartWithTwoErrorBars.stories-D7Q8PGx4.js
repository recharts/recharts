import{R as r}from"./iframe-BP-lIJn6.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DHx2Fo5l.js";import{C as d}from"./CartesianGrid-DjveYuJT.js";import{X as c}from"./XAxis-D7UL0yEG.js";import{Y as y}from"./YAxis-Dyx7Nivk.js";import{S as h}from"./Scatter-Di034WAw.js";import{E as e}from"./ErrorBar-DsSCTIKQ.js";import{T as u}from"./Tooltip-ChEod8ex.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BGn36pC9.js";import"./zIndexSlice-D3RgJgQF.js";import"./throttle-CRwrBkn8.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpLU83gk.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-B6bM08CR.js";import"./d3-scale-BUOxWIbI.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BmFIm_LJ.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./CartesianAxis-B7dTibl7.js";import"./Layer-Dh6XQbJK.js";import"./Text-sFd385s3.js";import"./pageBackground-BxeZOm5U.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./Label-eMzNaTJc.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./dataEntryStyles-DtR4SG-M.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./activeStyles-CaOdi5W_.js";import"./useAnimationId-BeUNfbh5.js";import"./Curve-B-WHWf6z.js";import"./step-1Avpntyj.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CR2ytdu7.js";import"./Symbols-D9c9uDF_.js";import"./symbol-DhQfft-S.js";import"./ActiveShapeUtils-QZxg5z0Q.js";import"./RegisterGraphicalItemId-CJi8bpow.js";import"./ErrorBarContext-BVsxDLFP.js";import"./GraphicalItemClipPath-_Vh94eGb.js";import"./SetGraphicalItem-CL36LKX_.js";import"./useEffectiveDataKey-C-3Q7bIW.js";import"./CSSTransitionAnimate-B4hXtlmZ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-B4j4ZMKA.js";import"./uniqBy-4sj4Loax.js";import"./iteratee-SNrVc_V2.js";import"./isArguments-yB-y1yaH.js";import"./Cross-HFdQ01ZH.js";import"./Rectangle-CNpXiGQR.js";import"./Sector-IagwWihv.js";const Or={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},kr=["WithErrorBarsAndExtendedDomain"];var a,i,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(n=(i=t.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Or as default};
