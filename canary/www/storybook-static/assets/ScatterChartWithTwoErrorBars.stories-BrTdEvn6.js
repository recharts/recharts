import{e as r}from"./iframe-Dim5_luC.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-BtHq9Ne1.js";import{C as d}from"./CartesianGrid-_WEiigJ6.js";import{X as c}from"./XAxis-CajpKvi_.js";import{Y as y}from"./YAxis-BX5wgPpW.js";import{S as h}from"./Scatter-Cl8qtZIn.js";import{E as e}from"./ErrorBar-Bz1jBNPa.js";import{T as u}from"./Tooltip-DC6wlv6_.js";import{R as f}from"./RechartsHookInspector-P8u42xZf.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BTGjRieY.js";import"./arrayEqualityCheck-DY4kDyOd.js";import"./resolveDefaultProps-D3nhBTU3.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-DQwyA4z1.js";import"./axisSelectors-CiSFc718.js";import"./zIndexSlice-DWwDEXe3.js";import"./CartesianChart-B-LiUj8Z.js";import"./chartDataContext-yPgkGQSE.js";import"./CategoricalChart-CIgbHOM5.js";import"./CartesianAxis-CuZKHGcg.js";import"./Layer-DsncGJyW.js";import"./Text-POGh3Ki-.js";import"./DOMUtils-OmeTbLvk.js";import"./Label-g1K_6191.js";import"./ZIndexLayer-D1v8rxBH.js";import"./types-BxKSV5b4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B4IuMLLa.js";import"./Curve-C8164FP7.js";import"./tooltipContext-CdUJRRJL.js";import"./Symbols-BQHr33CI.js";import"./ActiveShapeUtils-36K2bTf3.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BRrYL6fC.js";import"./useAnimationId-BMRzQV3k.js";import"./Trapezoid-BCUpEs0g.js";import"./Sector-DyfQSrST.js";import"./RegisterGraphicalItemId-BV1l7uMF.js";import"./ErrorBarContext-swBbnM0b.js";import"./GraphicalItemClipPath-D0CZwxPN.js";import"./SetGraphicalItem-BevZjJX4.js";import"./CSSTransitionAnimate-BqxBFXtC.js";import"./useElementOffset-DTeN2fqC.js";import"./iteratee-C63kfqEP.js";import"./Cross-C0n50i0p.js";import"./index-BcXSgkDx.js";import"./ChartSizeDimensions-DhXaHeyJ.js";import"./OffsetShower-BPrV8Xge.js";import"./PlotAreaShower-BgwWJf6_.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
