import{e as r}from"./iframe-BESbJ0y8.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-CTkY38WW.js";import{C as d}from"./CartesianGrid-BpXt6o3f.js";import{X as c}from"./XAxis-DXfH0Gay.js";import{Y as y}from"./YAxis-Cn9GoD8s.js";import{S as h}from"./Scatter-Csf4U-eq.js";import{E as e}from"./ErrorBar-_Nu5cgcN.js";import{T as u}from"./Tooltip-D7AQBugG.js";import{R as f}from"./RechartsHookInspector-BIrUgBA6.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DRe6KgwL.js";import"./arrayEqualityCheck-BJiY8zR4.js";import"./resolveDefaultProps-BrHDmjV-.js";import"./PolarUtils-BLb-h-71.js";import"./hooks-DB8ea1bc.js";import"./axisSelectors-C-Xtojaz.js";import"./zIndexSlice-Ce7G6X37.js";import"./CartesianChart-GUhdqmTM.js";import"./chartDataContext-CNhS_Wxw.js";import"./CategoricalChart-DLR87Qgk.js";import"./CartesianAxis-D-J9lWts.js";import"./Layer-C8CJBWmq.js";import"./Text-CP99-Bit.js";import"./DOMUtils-DhuQhbbK.js";import"./Label-qXVAmmrb.js";import"./ZIndexLayer-Dn-3v6xq.js";import"./types-CGrtFV1P.js";import"./ReactUtils-CdwmpjBo.js";import"./Curve-9nr7VYb2.js";import"./tooltipContext-D7tZ70Gw.js";import"./Symbols-D6ejZ83Z.js";import"./ActiveShapeUtils-Cfdp6Sqn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B0B57kHB.js";import"./useAnimationId-XfKJYBN0.js";import"./Trapezoid-BCkjDT6c.js";import"./Sector-DR905TlL.js";import"./RegisterGraphicalItemId-BqzerM7D.js";import"./ErrorBarContext-D0r4aWU5.js";import"./GraphicalItemClipPath-wHWKymHc.js";import"./SetGraphicalItem-DKXgGvLt.js";import"./CSSTransitionAnimate-D-zIPGYN.js";import"./useElementOffset-BAA_29pq.js";import"./iteratee-YMYAzx6R.js";import"./Cross-B3vlJZI-.js";import"./index-CUJCh7cc.js";import"./ChartSizeDimensions-DCOrE4X1.js";import"./OffsetShower-BYHO7i_w.js";import"./PlotAreaShower-CfCRjkmu.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
