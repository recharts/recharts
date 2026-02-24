import{e as r}from"./iframe-KW6q1dC8.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-CRdkDzgf.js";import{C as d}from"./CartesianGrid-B0_0b3T8.js";import{X as c}from"./XAxis-CfKcv1L2.js";import{Y as y}from"./YAxis-BTdozUYh.js";import{S as h}from"./Scatter-DbxGNK4K.js";import{E as e}from"./ErrorBar-CjXYt0yh.js";import{T as u}from"./Tooltip-C-7pY7N_.js";import{R as f}from"./RechartsHookInspector-DHhOwwId.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-B3hZLvHH.js";import"./arrayEqualityCheck-CsL9oElz.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DHg0Gmry.js";import"./immer-DJQrWxfT.js";import"./PolarUtils-CTnnDHZv.js";import"./index-IRfq0wV0.js";import"./hooks-B87Kmuri.js";import"./axisSelectors-CGmw0y2t.js";import"./d3-scale-VvEjRtef.js";import"./zIndexSlice-BRzCHmzO.js";import"./renderedTicksSlice-4nv5xzpG.js";import"./CartesianChart-e0ar_JeY.js";import"./chartDataContext-BSoSHoQo.js";import"./CategoricalChart-DZLAbsgr.js";import"./CartesianAxis-CKh1nWaH.js";import"./Layer-6RQ8uR29.js";import"./Text-BNRPp-95.js";import"./DOMUtils-0gZHvISx.js";import"./Label-Bmj0n5iK.js";import"./ZIndexLayer-w4JJl7sJ.js";import"./types-Dwy1lCB-.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-_GmE1-On.js";import"./Curve-DF4GvF_O.js";import"./step-B042Wr1e.js";import"./tooltipContext-Dx_SB0W0.js";import"./Symbols-BNAk55Bs.js";import"./symbol-5c1t0HLC.js";import"./ActiveShapeUtils-CDAKapsu.js";import"./isPlainObject-j8d21_8Z.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-C2IbtLxi.js";import"./useAnimationId-D6KMdx62.js";import"./Trapezoid-DNVzy1-l.js";import"./Sector-CjdyVVOd.js";import"./RegisterGraphicalItemId-YsmU15H8.js";import"./ErrorBarContext-DmVYT152.js";import"./GraphicalItemClipPath-C4dlV5mW.js";import"./SetGraphicalItem-BYLwEs4Z.js";import"./CSSTransitionAnimate-CBzFVfZR.js";import"./useElementOffset-BZSwjmr-.js";import"./uniqBy-ZYepOa3_.js";import"./iteratee-C-vE-01O.js";import"./Cross-CtNRcITV.js";import"./index-8EwdUQHQ.js";import"./ChartSizeDimensions-RgqfN5JQ.js";import"./OffsetShower-BWgPsPSu.js";import"./PlotAreaShower-BcdTxtG3.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
