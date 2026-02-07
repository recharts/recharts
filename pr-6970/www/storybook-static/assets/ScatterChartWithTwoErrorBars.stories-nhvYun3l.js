import{e as r}from"./iframe-DMofGbdh.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-PdFAF6gK.js";import{C as d}from"./CartesianGrid-BbwQGwf7.js";import{X as c}from"./XAxis-D0dacd78.js";import{Y as y}from"./YAxis-B_yG4ERH.js";import{S as h}from"./Scatter-k-cOlybk.js";import{E as e}from"./ErrorBar-BOe2iius.js";import{T as u}from"./Tooltip-66CrTFVH.js";import{R as f}from"./RechartsHookInspector-DJgQFG2f.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C7CsVMpm.js";import"./arrayEqualityCheck-CsoqXgVI.js";import"./resolveDefaultProps-Cr3Nq4ZU.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DQLTrr19.js";import"./axisSelectors-CeuWGW4U.js";import"./zIndexSlice-CsA5GGWo.js";import"./CartesianChart-DWOZMVOy.js";import"./chartDataContext-K-dQ-k-3.js";import"./CategoricalChart-D_GR9jLw.js";import"./CartesianAxis-BNGc91Ri.js";import"./Layer-BiV0mvq6.js";import"./Text-BOWHjgiZ.js";import"./DOMUtils-DCHqYg2a.js";import"./Label-DxmFoslz.js";import"./ZIndexLayer-CWIihq-M.js";import"./types-DMK1Hrm-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Dv6d3MQ5.js";import"./Curve-Dep4Vom7.js";import"./tooltipContext-D08fW7T9.js";import"./Symbols-iw9OdhhJ.js";import"./ActiveShapeUtils-D8pbFwx0.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DWfmzqul.js";import"./useAnimationId-CkpaA0hy.js";import"./Trapezoid-CRq1iTfA.js";import"./Sector-BMWgIsRC.js";import"./RegisterGraphicalItemId-D7ibYuhl.js";import"./ErrorBarContext-BGJbOelu.js";import"./GraphicalItemClipPath-mCG1gtli.js";import"./SetGraphicalItem-ttx2b7Qz.js";import"./CSSTransitionAnimate-BO1cTv5v.js";import"./useElementOffset-zXirM7Sf.js";import"./iteratee-D-sLGYHE.js";import"./Cross-yID6NUUz.js";import"./index-B5a3_tnM.js";import"./ChartSizeDimensions-qqjl0QHD.js";import"./OffsetShower-E8NqoCsg.js";import"./PlotAreaShower-DPYwAHFd.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const fr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,fr as __namedExportsOrder,ur as default};
