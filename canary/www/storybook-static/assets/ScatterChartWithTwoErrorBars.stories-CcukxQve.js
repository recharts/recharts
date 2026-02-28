import{e as r}from"./iframe-DU58YqXX.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-twDpneZ-.js";import{C as d}from"./CartesianGrid-CFA0soYO.js";import{X as c}from"./XAxis-CqmwPZ8Q.js";import{Y as y}from"./YAxis-DIF8wKFU.js";import{S as h}from"./Scatter-BafFtQhP.js";import{E as e}from"./ErrorBar-D-lzn4bf.js";import{T as u}from"./Tooltip-X58UL_5a.js";import{R as f}from"./RechartsHookInspector-bU2QYxIO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DCRQCspP.js";import"./arrayEqualityCheck-CPm_ZzNM.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BvRsDILo.js";import"./immer-CCty7oPO.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CAIf49bT.js";import"./hooks-BmHTCWu2.js";import"./axisSelectors-C_NSCJzf.js";import"./d3-scale-D66UOGri.js";import"./zIndexSlice-D06B5CMj.js";import"./renderedTicksSlice-C5yXBQp1.js";import"./CartesianChart-2UpvhmGK.js";import"./chartDataContext-C5MRHpth.js";import"./CategoricalChart-CnCv7GAg.js";import"./CartesianAxis-C18m4Bo_.js";import"./Layer-D-R-VvL4.js";import"./Text-BeOHNxA6.js";import"./DOMUtils--vhf8olX.js";import"./Label-1-xmv-OU.js";import"./ZIndexLayer-DrZECD3r.js";import"./types-BRRO6f_Y.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-qI72OB32.js";import"./Curve-CdKz9IVe.js";import"./step-DaNDWZj1.js";import"./tooltipContext-DbSMOeuq.js";import"./Symbols-CeuFr1Zm.js";import"./symbol-B759Rj27.js";import"./ActiveShapeUtils-CmjzNmwX.js";import"./isPlainObject-CFpSvqCv.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BiaAAf2E.js";import"./useAnimationId-hGktevsz.js";import"./Trapezoid-BQne9xH8.js";import"./Sector-NGcPnez7.js";import"./RegisterGraphicalItemId-BSQp396K.js";import"./ErrorBarContext-CYZNadIi.js";import"./GraphicalItemClipPath-D9N1r5H3.js";import"./SetGraphicalItem-XqVw1NHm.js";import"./CSSTransitionAnimate-CNj0Ec_T.js";import"./useElementOffset-CRKDW-Si.js";import"./uniqBy-B_be_HkH.js";import"./iteratee-Da9ZVL55.js";import"./Cross-Bz7Zr1I8.js";import"./index-D73aQCF4.js";import"./ChartSizeDimensions-DA9JA8Lt.js";import"./OffsetShower-OVwVH-bI.js";import"./PlotAreaShower-Yynvk9Up.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
