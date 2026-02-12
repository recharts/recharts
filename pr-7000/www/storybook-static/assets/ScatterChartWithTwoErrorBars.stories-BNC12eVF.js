import{e as r}from"./iframe-CFT77Gxv.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-BPQcpLha.js";import{C as d}from"./CartesianGrid-CWZ25BdI.js";import{X as c}from"./XAxis-iSjPfIVk.js";import{Y as y}from"./YAxis-AxMvucM_.js";import{S as h}from"./Scatter-E0zCOH1P.js";import{E as e}from"./ErrorBar-BKuJ6_px.js";import{T as u}from"./Tooltip-DHPWMRqW.js";import{R as f}from"./RechartsHookInspector-BcoRzUX4.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C06tio3K.js";import"./arrayEqualityCheck-D0woyLdN.js";import"./resolveDefaultProps-BfLi8adI.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-yAz6J_Nf.js";import"./axisSelectors-DOMws57m.js";import"./zIndexSlice-Czz78II2.js";import"./CartesianChart-8phVSf5K.js";import"./chartDataContext-yQ3flajw.js";import"./CategoricalChart-BnvwGt9I.js";import"./CartesianAxis-BbU1esix.js";import"./Layer-MeOR0S7X.js";import"./Text-Bq7B7F5n.js";import"./DOMUtils-DtvoLBHD.js";import"./Label-BG9DvreX.js";import"./ZIndexLayer-uKRagXxd.js";import"./types-CpsEOU-X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BfhnJY8u.js";import"./Curve-D6lAkyMf.js";import"./tooltipContext-DyXLZ6PX.js";import"./Symbols-Cng0_jSU.js";import"./ActiveShapeUtils-CyY8Lu1y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxDot7kp.js";import"./useAnimationId-DgcLlBvC.js";import"./Trapezoid-DpyS5tZu.js";import"./Sector-DYvzTYWt.js";import"./RegisterGraphicalItemId-C7MUsBLo.js";import"./ErrorBarContext-TG4W3Nt0.js";import"./GraphicalItemClipPath-hpTG4Orq.js";import"./SetGraphicalItem-Bnzd430s.js";import"./CSSTransitionAnimate-UdGO0ICy.js";import"./useElementOffset-Bnm15LDE.js";import"./iteratee-BUNzxPV7.js";import"./Cross-CH72MCi9.js";import"./index-9FfrM9hg.js";import"./ChartSizeDimensions-DP7onZPk.js";import"./OffsetShower-BQl_FUQS.js";import"./PlotAreaShower-kI7aZSrk.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
