import{e as r}from"./iframe-Ct3-EmvQ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BQ_MGVXj.js";import{S as p}from"./ScatterChart-Lf6Xjyr9.js";import{C as d}from"./CartesianGrid-InnXGM-h.js";import{X as c}from"./XAxis-BUqB6c6n.js";import{Y as y}from"./YAxis-FGYgR9Es.js";import{S as h}from"./Scatter-zMDf3oPy.js";import{E as e}from"./ErrorBar-B1TzDSaR.js";import{T as u}from"./Tooltip-D9XcQfCI.js";import{R as f}from"./RechartsHookInspector-CNP9TKyO.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CgmBIBCZ.js";import"./arrayEqualityCheck-6IWQNVnF.js";import"./resolveDefaultProps-CLCYDClS.js";import"./PolarUtils-DdS5KPsI.js";import"./hooks-PlM3qON0.js";import"./axisSelectors-CMJXMyjC.js";import"./zIndexSlice-DuEz9NCx.js";import"./CartesianChart-DTOqEhzT.js";import"./chartDataContext-mVWnipwc.js";import"./CategoricalChart-DnvqP6Kl.js";import"./CartesianAxis-C_XdVR0m.js";import"./Layer-B8MEBogB.js";import"./Text-x40PBIRp.js";import"./DOMUtils-BkPW2gQA.js";import"./Label-DHx5gLtP.js";import"./ZIndexLayer-BPGi17AG.js";import"./types-_oa_IGij.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-DN8_9Eno.js";import"./Curve-C_yJ7Ryc.js";import"./tooltipContext-Wt6yWfLp.js";import"./Symbols-Bp94E4fO.js";import"./ActiveShapeUtils-BFvFZr_D.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BOfd_qYz.js";import"./useAnimationId-BJitn0wZ.js";import"./Trapezoid-DB54BMON.js";import"./Sector-C0TYwl3N.js";import"./RegisterGraphicalItemId-XVqhZVps.js";import"./ErrorBarContext-DASfBuRX.js";import"./GraphicalItemClipPath-m8qPdP4H.js";import"./SetGraphicalItem-DB0AUuOj.js";import"./CSSTransitionAnimate-DWa_X0uv.js";import"./useElementOffset-DDHtWwWX.js";import"./iteratee-BdHcd1Ka.js";import"./Cross-Di4ryU7U.js";import"./index-CtF0TcD5.js";import"./ChartSizeDimensions-DR7HU7h8.js";import"./OffsetShower-DsW7pfd1.js";import"./PlotAreaShower-CVlOaRsI.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
