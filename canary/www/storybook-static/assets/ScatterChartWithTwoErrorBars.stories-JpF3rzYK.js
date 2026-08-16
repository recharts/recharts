import{R as r}from"./iframe-Dc8RWhrw.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-tP-nXYNf.js";import{C as d}from"./CartesianGrid-EdnxPRMs.js";import{X as c}from"./XAxis-VfLZ80on.js";import{Y as y}from"./YAxis-DMp-u3Mu.js";import{S as h}from"./Scatter-Die4p3sb.js";import{E as e}from"./ErrorBar-7sjL8Obd.js";import{T as u}from"./Tooltip-B7ikUiQC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Ba4_XV41.js";import"./zIndexSlice-Cue9wPom.js";import"./throttle-Cgdnnn4b.js";import"./index-BX7yfnHr.js";import"./index-DHKxMT0C.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CQDlpFo_.js";import"./isWellBehavedNumber-DkJxcyfZ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BjTDJtXe.js";import"./index-D_nZwztl.js";import"./axisSelectors-Bp8YmQgj.js";import"./d3-scale-DDaZL63N.js";import"./renderedTicksSlice-CNJBn7mW.js";import"./CartesianChart-B63GIjUf.js";import"./chartDataContext-DlTklTQC.js";import"./CategoricalChart-CI6oyNVX.js";import"./CartesianAxis-l76NyjyY.js";import"./Layer-Cp8eUZax.js";import"./Text-rfXwlvlz.js";import"./DOMUtils-DSrFB3FI.js";import"./useBackwardsCompatibleTheme-CTZrd8Ez.js";import"./Label-DGIRTg37.js";import"./ZIndexLayer-BPoBYBwu.js";import"./types-D48DJ4qI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-HOD2wt3W.js";import"./useAnimationId-ljtrSyr1.js";import"./Curve-BbQ0Czte.js";import"./step-U7mgLYlb.js";import"./path-DyVhHtw_.js";import"./tooltipContext-ChMsabnz.js";import"./Symbols-GzXlAdpY.js";import"./symbol-DU6b7_X7.js";import"./ActiveShapeUtils-CqRtCd2Y.js";import"./RegisterGraphicalItemId-DxgWNIY4.js";import"./ErrorBarContext-Bc_XovT5.js";import"./GraphicalItemClipPath-vsH9TZYh.js";import"./SetGraphicalItem-Bhl9AfEO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-s9DlgbCb.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DHGkrUt4.js";import"./uniqBy-Di3gtafg.js";import"./iteratee-UaQdxZu-.js";import"./Cross-CDhtS5Tq.js";import"./Rectangle-CIo59f_q.js";import"./Sector-CL2E5vKM.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
