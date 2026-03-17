import{e as r}from"./iframe-c0lvfgLm.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DYQKGXXC.js";import{C as d}from"./CartesianGrid-DB0HgFmD.js";import{X as c}from"./XAxis-BzKnXhRE.js";import{Y as y}from"./YAxis-CpBtSMnf.js";import{S as h}from"./Scatter-xF9HUqYO.js";import{E as e}from"./ErrorBar-Ch-dsCLB.js";import{T as u}from"./Tooltip-hdi9ZDlD.js";import{R as f}from"./RechartsHookInspector-5i7IBG_e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D7zqAgEz.js";import"./arrayEqualityCheck-DNZkspsy.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DX2cxMOG.js";import"./immer-DMEI_VCu.js";import"./PolarUtils-CTnnDHZv.js";import"./index-JTQ4PF_k.js";import"./hooks-ChUb4DZG.js";import"./axisSelectors-CPhAqa0q.js";import"./d3-scale-DyxWsOri.js";import"./zIndexSlice-B7Te91Jz.js";import"./renderedTicksSlice-CoATx-5v.js";import"./CartesianChart-B0tcceZf.js";import"./chartDataContext-D5ehU8Li.js";import"./CategoricalChart-CZL3Qa9D.js";import"./CartesianAxis-BPHeWl3o.js";import"./Layer-7iJmeUkd.js";import"./Text-Bx9IcEZb.js";import"./DOMUtils-lAJ9Yg9q.js";import"./Label-BLt0xOi5.js";import"./ZIndexLayer-FNmvAVY8.js";import"./types-Dylc_TMc.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CueXlXtD.js";import"./Curve-BXRCCM_V.js";import"./step-BpAcvZss.js";import"./tooltipContext-DWHuWuaq.js";import"./Symbols-DtF8_27w.js";import"./symbol-BFhqOZgB.js";import"./ActiveShapeUtils-DlPS2wY5.js";import"./isPlainObject-YzH8Qd1R.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CcbUzCSE.js";import"./useAnimationId-BHpMyUty.js";import"./Trapezoid-CQsqSlZw.js";import"./Sector-Bob5xxX4.js";import"./RegisterGraphicalItemId-B0SpB0cP.js";import"./ErrorBarContext-BIxtFArD.js";import"./GraphicalItemClipPath-BPFJLqSa.js";import"./SetGraphicalItem-DnhQPEpT.js";import"./CSSTransitionAnimate-CQhhAmnf.js";import"./useElementOffset-NhoGt6o4.js";import"./uniqBy-CZAEIT1t.js";import"./iteratee-C5EP3l3E.js";import"./Cross-X2t3Rau3.js";import"./index-B2Ds3Lof.js";import"./ChartSizeDimensions-biGDO6V4.js";import"./OffsetShower-bDiiPLh2.js";import"./PlotAreaShower-DfFE-FzJ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
        <RechartsHookInspector />
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const kr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,kr as __namedExportsOrder,Sr as default};
