import{e as r}from"./iframe-D10KqzUD.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-BJfdGvQu.js";import{C as d}from"./CartesianGrid-BamDRBTo.js";import{X as c}from"./XAxis-BQt1-o4i.js";import{Y as y}from"./YAxis-DR2gGzMh.js";import{S as h}from"./Scatter-CRn_m1xy.js";import{E as e}from"./ErrorBar-jivm0U2R.js";import{T as u}from"./Tooltip-qTD6wmE4.js";import{R as f}from"./RechartsHookInspector-D11PdPOv.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DmZaXDX9.js";import"./arrayEqualityCheck-BiFmrFlI.js";import"./resolveDefaultProps-9OrE3puy.js";import"./PolarUtils--rK1_r3m.js";import"./hooks-CD0TfSak.js";import"./axisSelectors-C2rRwI0J.js";import"./zIndexSlice-C09Fe5zh.js";import"./CartesianChart-BphZ3X7F.js";import"./chartDataContext-Dv1VUms-.js";import"./CategoricalChart-Cot6VJVX.js";import"./CartesianAxis-UUDtKWGi.js";import"./Layer-ht9SJGho.js";import"./Text-CCvRlOZV.js";import"./DOMUtils-6pjMFL45.js";import"./Label-NWVYeZEG.js";import"./ZIndexLayer-CJv48mZa.js";import"./types-DH2QYYrT.js";import"./ReactUtils-Bjqgxmj3.js";import"./Curve-BHXU1eAM.js";import"./tooltipContext-BnAKNcVt.js";import"./Symbols-DUUGs6sP.js";import"./ActiveShapeUtils-DYlzmj4y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DpWw-GEi.js";import"./useAnimationId-CbuLj6s5.js";import"./Trapezoid-DuyF-aaV.js";import"./Sector-C5ufK4tl.js";import"./RegisterGraphicalItemId-Da0N4p7t.js";import"./ErrorBarContext-D0gYYf11.js";import"./GraphicalItemClipPath-BK-RhyE8.js";import"./SetGraphicalItem-BG3i3hAQ.js";import"./CSSTransitionAnimate-S2Wt11LU.js";import"./useElementOffset-BpotpCoB.js";import"./iteratee-B19FyeeB.js";import"./Cross-DC2jpo78.js";import"./index-CvJ6Av4F.js";import"./ChartSizeDimensions-CrUVJUaS.js";import"./OffsetShower-CpYxr2Ft.js";import"./PlotAreaShower-B_BAjCHP.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
