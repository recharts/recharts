import{e as r}from"./iframe-BL30a25n.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-DhIdtKOP.js";import{C as d}from"./CartesianGrid-NIG_z2rH.js";import{X as c}from"./XAxis-BuEHyROH.js";import{Y as y}from"./YAxis-97iCNCLl.js";import{S as h}from"./Scatter-BDBsY7W7.js";import{E as e}from"./ErrorBar-CIdWfxlF.js";import{T as u}from"./Tooltip-CGzfh5OP.js";import{R as f}from"./RechartsHookInspector-CKAPvAcq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CSatPt3_.js";import"./arrayEqualityCheck-CTdhw7v2.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dhgfu696.js";import"./immer-BLjYPncX.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DaX2Q3AK.js";import"./hooks-Bu6pJnUO.js";import"./axisSelectors-CmxwFFvW.js";import"./d3-scale-DN4NcrYH.js";import"./zIndexSlice-DuEq0Nzw.js";import"./renderedTicksSlice-BNblKiJo.js";import"./CartesianChart-DOXn6f_f.js";import"./chartDataContext-BvCVPcPU.js";import"./CategoricalChart-Cg95RMGg.js";import"./CartesianAxis-6XJOi0JN.js";import"./Layer-DbzzoT5W.js";import"./Text-Da5MrtOo.js";import"./DOMUtils-2S3W7qMd.js";import"./Label-tOosDzC9.js";import"./ZIndexLayer-Ct2VJKyV.js";import"./types-DngVF1gy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-CvEgiikN.js";import"./Curve-C9Gn1Z7l.js";import"./step-COhLjfgX.js";import"./tooltipContext-mHTb3ALE.js";import"./Symbols-DWmX7Ql_.js";import"./symbol-DiJYHTEZ.js";import"./ActiveShapeUtils-DyYtBEWy.js";import"./isPlainObject-DHekL-Pq.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dbi9MvBK.js";import"./useAnimationId-StTSWEFx.js";import"./Trapezoid-DF1LPrGo.js";import"./Sector-By56eltg.js";import"./RegisterGraphicalItemId-NIdQMjW7.js";import"./ErrorBarContext-C--UypnL.js";import"./GraphicalItemClipPath-CvO0vgi7.js";import"./SetGraphicalItem-DqX3zCIa.js";import"./CSSTransitionAnimate-_iNerMfe.js";import"./useElementOffset-BRFRz_JX.js";import"./uniqBy-DLUxpX6I.js";import"./iteratee-D6pKSZwg.js";import"./Cross-BqARO_ay.js";import"./index-CJGBDWaZ.js";import"./ChartSizeDimensions-tl2VnG3o.js";import"./OffsetShower-D6jdoegT.js";import"./PlotAreaShower-CDPFlOoQ.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
