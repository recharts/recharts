import{e as r}from"./iframe-7yPApSvt.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-CaeXznmO.js";import{S as p}from"./ScatterChart-RlB8Rwxe.js";import{C as d}from"./CartesianGrid-Csd8Dh3x.js";import{X as c}from"./XAxis-D9IId5KY.js";import{Y as y}from"./YAxis-p892jm1t.js";import{S as h}from"./Scatter-2npMskTX.js";import{E as e}from"./ErrorBar-DCG-bRUs.js";import{T as u}from"./Tooltip-CMbwh4so.js";import{R as f}from"./RechartsHookInspector-BsW7gU1Y.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BuUb30Xi.js";import"./arrayEqualityCheck-BRhf3SEW.js";import"./resolveDefaultProps-BvQpsjiF.js";import"./PolarUtils-CTnnDHZv.js";import"./hooks-CULXbe6b.js";import"./axisSelectors-C9Ec7cF5.js";import"./zIndexSlice-CEDRpfjq.js";import"./CartesianChart-CIeTwbWT.js";import"./chartDataContext-ZZL8Xm-d.js";import"./CategoricalChart-BOXfpwGx.js";import"./CartesianAxis-bgrWTzp1.js";import"./Layer-uYiMe6t4.js";import"./Text-COZE0ykR.js";import"./DOMUtils-CSR616sr.js";import"./Label-DRJZdylN.js";import"./ZIndexLayer-Qq2hiEM9.js";import"./types-OVAUyZ3J.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-C9q2a11f.js";import"./Curve-DU3LHYbT.js";import"./tooltipContext-C-rSDLYt.js";import"./Symbols-Cj90JcMH.js";import"./ActiveShapeUtils-CcCS4fKT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-VDS0PGUg.js";import"./useAnimationId-DZFmgCE1.js";import"./Trapezoid-CDa1-n6T.js";import"./Sector-B6puIsbo.js";import"./RegisterGraphicalItemId-gdU_VBCL.js";import"./ErrorBarContext-DG4gMx-N.js";import"./GraphicalItemClipPath-cXovOiV2.js";import"./SetGraphicalItem-CGoReTbO.js";import"./CSSTransitionAnimate-ChzfJh9J.js";import"./useElementOffset-C_8-L3sE.js";import"./iteratee-DtH8F4-p.js";import"./Cross-DHHFHI5_.js";import"./index-CTyUbB7m.js";import"./ChartSizeDimensions-D-ngX-PE.js";import"./OffsetShower-BazP2SAL.js";import"./PlotAreaShower-BquTH6Fu.js";const ur={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
