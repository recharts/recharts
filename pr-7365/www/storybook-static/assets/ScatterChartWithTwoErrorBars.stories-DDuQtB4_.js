import{e as r}from"./iframe-CivULM0O.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-Cx3N3BR2.js";import{C as d}from"./CartesianGrid-BLzOmJX0.js";import{X as c}from"./XAxis-CYAQkN2U.js";import{Y as y}from"./YAxis-ESVpGmgX.js";import{S as h}from"./Scatter-qe3hqF7N.js";import{E as e}from"./ErrorBar-CGblOMPI.js";import{T as u}from"./Tooltip-DgeDNHg1.js";import{R as f}from"./RechartsHookInspector-B13-Urqc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DwxV8M50.js";import"./arrayEqualityCheck-PbQt1vd_.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Bzl3TnEc.js";import"./immer-C3JSSs7p.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D77mCZEn.js";import"./hooks-O1Pz3D70.js";import"./axisSelectors-C5EVC_K9.js";import"./d3-scale-D4k2z_td.js";import"./zIndexSlice-DI8beG-i.js";import"./renderedTicksSlice-DkvK2F6A.js";import"./CartesianChart-DF7vNr1N.js";import"./chartDataContext-BWPeiq2n.js";import"./CategoricalChart-CaQLfBcJ.js";import"./CartesianAxis-G3eNrHbq.js";import"./Layer-BOVDUSvA.js";import"./Text-aFIbFVfW.js";import"./DOMUtils-D-P4J5bL.js";import"./Label-BAI4tr_y.js";import"./ZIndexLayer-CgUDZ3al.js";import"./types-CYA8PCW2.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-B75F0iOa.js";import"./Curve-CR9QitUx.js";import"./step-DozMZOeE.js";import"./path-DyVhHtw_.js";import"./tooltipContext-n77PxYR2.js";import"./Symbols-cGyzM8dQ.js";import"./symbol-DB8A-7yY.js";import"./ActiveShapeUtils-DzUFHSun.js";import"./RegisterGraphicalItemId-C8jduj3R.js";import"./ErrorBarContext-rnb_GXzV.js";import"./GraphicalItemClipPath-UzEv0mvn.js";import"./SetGraphicalItem-DhyPdJoF.js";import"./useAnimationId-DJJiEnXV.js";import"./CSSTransitionAnimate-BZXEV9We.js";import"./useElementOffset-CC9xhXxh.js";import"./uniqBy-Cwhcwtk-.js";import"./iteratee-UPOw9UnH.js";import"./Cross-P7L2JLrH.js";import"./Rectangle-d22AVGnL.js";import"./Sector-592Fkfg8.js";import"./index-kHVaJKAG.js";import"./ChartSizeDimensions-B7zlPcNh.js";import"./OffsetShower-BTGRafEk.js";import"./PlotAreaShower-BV6yuT_Y.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
