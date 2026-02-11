import{e as r}from"./iframe-DAKkOQol.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-ClFjViyn.js";import{C as d}from"./CartesianGrid-mv357iBP.js";import{X as c}from"./XAxis-DHACXabx.js";import{Y as y}from"./YAxis-DShQZAzJ.js";import{S as h}from"./Scatter-qVTAZ85z.js";import{E as e}from"./ErrorBar-AkWoxVMV.js";import{T as u}from"./Tooltip-BX-71fBH.js";import{R as f}from"./RechartsHookInspector-BfHJy13b.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DReT11ch.js";import"./arrayEqualityCheck-NbiC3pou.js";import"./resolveDefaultProps-BL_LDYW6.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CgQhpM8Q.js";import"./axisSelectors-EdGkev_1.js";import"./zIndexSlice-ConFYYKV.js";import"./CartesianChart-ErdgDL_l.js";import"./chartDataContext-Byh5ybSM.js";import"./CategoricalChart-CO48ZeEI.js";import"./CartesianAxis-BHWsH5fF.js";import"./Layer-BguUBi1k.js";import"./Text-Tp-rAwzV.js";import"./DOMUtils-ngTPzyN_.js";import"./Label-CmclsLbQ.js";import"./ZIndexLayer-CBwJU_Ua.js";import"./types-Dtb0IVPy.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BWrOVeoB.js";import"./Curve-Jt8KljXD.js";import"./tooltipContext-CrkcFAQN.js";import"./Symbols-NCjlL2qf.js";import"./ActiveShapeUtils-DnsJnZjx.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CgMMN0ms.js";import"./useAnimationId-BJodvzW1.js";import"./Trapezoid-DpCkavyj.js";import"./Sector-BqcXv69K.js";import"./RegisterGraphicalItemId-DNcFFbXF.js";import"./ErrorBarContext-ig0ccB3h.js";import"./GraphicalItemClipPath-C0lJi0bX.js";import"./SetGraphicalItem-CWARA50H.js";import"./CSSTransitionAnimate-C00iiKu_.js";import"./useElementOffset-CDhsuukr.js";import"./iteratee-DOInHnjD.js";import"./Cross-CSeM4Pv8.js";import"./index-IHUVzBeJ.js";import"./ChartSizeDimensions-D219SLoR.js";import"./OffsetShower-Bf-TTVbw.js";import"./PlotAreaShower-2vui0Dg8.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
