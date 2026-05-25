import{e as r}from"./iframe-Dnf4AlLR.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-CDaEoc7y.js";import{C as d}from"./CartesianGrid-DZQbzxdE.js";import{X as c}from"./XAxis-DLWfACul.js";import{Y as y}from"./YAxis-BV2CBSac.js";import{S as h}from"./Scatter-CJxV1xBs.js";import{E as e}from"./ErrorBar-BUCvzjTK.js";import{T as u}from"./Tooltip-DG62CmJD.js";import{R as f}from"./RechartsHookInspector-OLBh2oCI.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DAmqBWgG.js";import"./arrayEqualityCheck-UrcKYzS0.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BqkLROOU.js";import"./immer-DA9BPlnc.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D1BDiruz.js";import"./hooks-ByMCROpL.js";import"./axisSelectors-VRydpu3s.js";import"./d3-scale-Cb8N1VfB.js";import"./zIndexSlice-BgXAgJL3.js";import"./renderedTicksSlice-CTDdadeF.js";import"./CartesianChart-CTkTDluY.js";import"./chartDataContext-D6OzkCBP.js";import"./CategoricalChart-DESZNtyF.js";import"./CartesianAxis-DIOPUoh9.js";import"./Layer-V8ImnEZB.js";import"./Text-BH203wB1.js";import"./DOMUtils-DeOIiqB-.js";import"./Label-B_crGnD8.js";import"./ZIndexLayer-DOX2ldNu.js";import"./types-DHYQQjs9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C1SR2qhB.js";import"./Curve-Ca-XrmBQ.js";import"./step-BhFSNpdr.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CGp7KsnH.js";import"./Symbols-O2Q0mkdf.js";import"./symbol-D7jS4LBQ.js";import"./ActiveShapeUtils-D2qQQTmk.js";import"./RegisterGraphicalItemId-26wIU3J0.js";import"./ErrorBarContext-DnPqunZ7.js";import"./GraphicalItemClipPath-u2mX7OG7.js";import"./SetGraphicalItem-B1dso5Ln.js";import"./useAnimationId-Bo3VYg8c.js";import"./CSSTransitionAnimate-Cawkk99w.js";import"./useElementOffset-DRm8R7N4.js";import"./uniqBy-CLeN_urr.js";import"./iteratee-C1XNdihg.js";import"./Cross-BlvpUcTZ.js";import"./Rectangle-cwzKaFgR.js";import"./Sector-DaxOCZK_.js";import"./index-DhYdY39W.js";import"./ChartSizeDimensions-xg99Q5LG.js";import"./OffsetShower-CsmBnO90.js";import"./PlotAreaShower-CowJNvBY.js";const Yr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
