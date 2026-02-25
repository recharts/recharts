import{e as r}from"./iframe-DOwSMESw.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-wDfD4F51.js";import{C as d}from"./CartesianGrid-DEbxUIAb.js";import{X as c}from"./XAxis-BPbWU4yR.js";import{Y as y}from"./YAxis-DIarP6QG.js";import{S as h}from"./Scatter-DA0dU-hj.js";import{E as e}from"./ErrorBar-BCqkkiwC.js";import{T as u}from"./Tooltip-49ah_KvT.js";import{R as f}from"./RechartsHookInspector-CcCJcHZ5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-ls6tVJyv.js";import"./arrayEqualityCheck-CX9-bfYH.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ChqUwM3U.js";import"./immer-ZyDpTiiy.js";import"./PolarUtils-CTnnDHZv.js";import"./index-BBfb_97C.js";import"./hooks-xQD_-akz.js";import"./axisSelectors-BKSMdbwV.js";import"./d3-scale-D4rgCaup.js";import"./zIndexSlice-DitFxlYL.js";import"./renderedTicksSlice-B9YC84oJ.js";import"./CartesianChart-DFwJmcFp.js";import"./chartDataContext-CzK82F7Z.js";import"./CategoricalChart-CxUtgmSG.js";import"./CartesianAxis-BJnnwpTK.js";import"./Layer-Dw0puBgf.js";import"./Text-DHnTXj9j.js";import"./DOMUtils-DbGofJNd.js";import"./Label-CGJJW7mt.js";import"./ZIndexLayer-Dk3cu7q_.js";import"./types-BVuvkN0T.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-D4p-v0tr.js";import"./Curve-HyoTL5em.js";import"./step-CPI5XPf7.js";import"./tooltipContext-CgrK2lZY.js";import"./Symbols-Vm2a1c-r.js";import"./symbol-5SXgtl89.js";import"./ActiveShapeUtils-C94C_QYl.js";import"./isPlainObject-sPJsBjkd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CMknbwVL.js";import"./useAnimationId-B99eNrnj.js";import"./Trapezoid-AfdP-1uh.js";import"./Sector-BzLVEcjl.js";import"./RegisterGraphicalItemId-BYUuyceh.js";import"./ErrorBarContext-CtE8_zM3.js";import"./GraphicalItemClipPath-CYCx10_G.js";import"./SetGraphicalItem-CB9uDBjU.js";import"./CSSTransitionAnimate-CZvpoeIl.js";import"./useElementOffset-CFSq58AV.js";import"./uniqBy-ByHGQN-F.js";import"./iteratee-DHfnXdiR.js";import"./Cross-D1qFAUvf.js";import"./index-aBvahWCN.js";import"./ChartSizeDimensions-BCHrYjTL.js";import"./OffsetShower-DAQHvvGL.js";import"./PlotAreaShower-CtS1URyh.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
