import{R as r}from"./iframe-Bd2Bk_ai.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-5OaQCRQJ.js";import{C as d}from"./CartesianGrid-Dgfbzh10.js";import{X as c}from"./XAxis-CypmBaco.js";import{Y as y}from"./YAxis-Dddzu0fc.js";import{S as h}from"./Scatter-CcnMKHDV.js";import{E as e}from"./ErrorBar-ClECRfA7.js";import{T as u}from"./Tooltip-DFK7qGgh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DzNno5mi.js";import"./zIndexSlice-CvsBboU2.js";import"./throttle-BgaPtkTt.js";import"./index-YOlWJ3UI.js";import"./index-BgWJcO-O.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BB0elGzE.js";import"./isWellBehavedNumber-DBLq0YlU.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-hjszmlUK.js";import"./d3-scale-DCtwXSpz.js";import"./index-DJuU84IJ.js";import"./index-nQQMczPK.js";import"./renderedTicksSlice-Cpd-xLFY.js";import"./index-Qipw3yHd.js";import"./CartesianChart-CrlTsjwB.js";import"./chartDataContext-BPm9-wzB.js";import"./CategoricalChart-CcrqLwDF.js";import"./CartesianAxis-DlgdGNPk.js";import"./Layer-Db-kRrip.js";import"./Text-oE3Ppk29.js";import"./pageBackground-S_W44ttK.js";import"./useId-CHbendDP.js";import"./useBackwardsCompatibleTheme-C0u865U4.js";import"./Label-O_u7VAtA.js";import"./ZIndexLayer-DQoX8EpG.js";import"./types-BTpVoC26.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./activeStyles-C6x8xDfA.js";import"./useAnimationId-Cm1DhMix.js";import"./dataEntryStyles-BtdfRJJQ.js";import"./Curve-5l5JQbBY.js";import"./step-BGDWO4Dz.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CVXk4v3Q.js";import"./Symbols-DBdPk1EU.js";import"./symbol-CUKHTr4k.js";import"./ActiveShapeUtils-Dy2jST-f.js";import"./ErrorBarContext-RrbFFwNs.js";import"./GraphicalItemClipPath-Dc7-6XW3.js";import"./SetGraphicalItem-Br5gILYL.js";import"./useEffectiveDataKey-_q65TZZ4.js";import"./CSSTransitionAnimate-DVBDo3Gj.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DD2zEOuZ.js";import"./uniqBy-DSxR1_ki.js";import"./iteratee-DmMpoBDe.js";import"./Cross-l8PQsr7L.js";import"./Rectangle-ChYeKnX_.js";import"./Sector-C7HxJjMo.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
