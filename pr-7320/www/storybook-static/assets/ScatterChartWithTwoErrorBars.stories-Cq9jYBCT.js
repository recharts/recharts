import{e as r}from"./iframe-B5OZyTLO.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-BYRxDtGQ.js";import{C as d}from"./CartesianGrid-B88auzH8.js";import{X as c}from"./XAxis-zb4VUPh6.js";import{Y as y}from"./YAxis-Dux7TOCI.js";import{S as h}from"./Scatter-ztKL8NYW.js";import{E as e}from"./ErrorBar-C5wRvEmb.js";import{T as u}from"./Tooltip-Bk-yGqEO.js";import{R as f}from"./RechartsHookInspector-_hFKO12C.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CQQb0kbC.js";import"./arrayEqualityCheck-CWhdwSDm.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CAPxLZ6Q.js";import"./immer-TWt97Mx7.js";import"./PolarUtils-CTnnDHZv.js";import"./index-hV-3VpKL.js";import"./hooks-BezBw8uS.js";import"./axisSelectors-ABOgVma3.js";import"./d3-scale-CN5ZQXr4.js";import"./zIndexSlice-BhJZ8kMU.js";import"./renderedTicksSlice-D_AhA4OM.js";import"./CartesianChart-FhsaLguc.js";import"./chartDataContext-B484Lq8t.js";import"./CategoricalChart-zasF99ZZ.js";import"./CartesianAxis-DF2T2i1R.js";import"./Layer-DY3DBIYw.js";import"./Text-CpciUZWD.js";import"./DOMUtils-CaAH8jO5.js";import"./Label-DrAV5Ysg.js";import"./ZIndexLayer--mzOMN2C.js";import"./types-CBKdJqtE.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-50LnJO-z.js";import"./Curve-CZezSHJu.js";import"./step--d94ZHvF.js";import"./tooltipContext-DerfmUVJ.js";import"./Symbols-CYtIKOUS.js";import"./symbol-OBCxgJUM.js";import"./ActiveShapeUtils-wCZ0vcum.js";import"./isPlainObject-dgzqLzJz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CluG0cnR.js";import"./useAnimationId-C8kgPVjG.js";import"./Trapezoid-DfDBBk_X.js";import"./Sector-DWNWDgn6.js";import"./RegisterGraphicalItemId-DI_yJ9XE.js";import"./ErrorBarContext-Cy-UI2HL.js";import"./GraphicalItemClipPath-DqNQMvK4.js";import"./SetGraphicalItem-DtNxMT9p.js";import"./CSSTransitionAnimate-C1VLBuot.js";import"./useElementOffset-CMyZblD5.js";import"./uniqBy-Bjy84KJm.js";import"./iteratee-DcHlFybE.js";import"./Cross-Bo9V-nNr.js";import"./index-1eVRlG7n.js";import"./ChartSizeDimensions-UHLg_21n.js";import"./OffsetShower-C1QQvoSP.js";import"./PlotAreaShower-Bz0iMrs_.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
