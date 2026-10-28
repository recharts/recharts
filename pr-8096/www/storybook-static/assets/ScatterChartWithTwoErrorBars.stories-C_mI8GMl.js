import{R as r}from"./iframe-D0WJBe8B.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DhkWGnDT.js";import{C as d}from"./CartesianGrid-lchOI6TO.js";import{X as c}from"./XAxis-BEoxl3pM.js";import{Y as y}from"./YAxis-Hb99A8N1.js";import{S as h}from"./Scatter-BV0Jk-f0.js";import{E as e}from"./ErrorBar-CDUS8qEU.js";import{T as u}from"./Tooltip-BrlnzokM.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Y1sNfJdv.js";import"./zIndexSlice-BC6IeYNi.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Ct4EK5_T.js";import"./throttle-TSOlYDju.js";import"./index-Dp8m-Do0.js";import"./index-BtpfRbVN.js";import"./axisSelectors-D5taf4lI.js";import"./polarAxisSelectors-2QOn0rl8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-50ivSU0v.js";import"./index-DWGmacRx.js";import"./index-B5HS6UVy.js";import"./renderedTicksSlice-DMh9haUn.js";import"./index-CMOK-p3U.js";import"./CartesianChart-Be7keNxh.js";import"./ZIndexPortal-BSZE-89G.js";import"./CategoricalChart-HCg9oVJT.js";import"./CartesianAxis-C6mWkihq.js";import"./Layer-aO3gvgqI.js";import"./Text-CgQ4MHqj.js";import"./pageBackground-Dio0HZ8z.js";import"./ZIndexLayer-DSGy4-C8.js";import"./Label-B4KodQcW.js";import"./types-CgDj6Pcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-fY2HN2fJ.js";import"./activeStyles-DLjK0T5T.js";import"./useAnimationId-C0s3vBtu.js";import"./dataEntryStyles-BPWJkcwq.js";import"./Curve-D1Sg03qQ.js";import"./step-C85hYdLD.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B-_BmjfO.js";import"./Symbols-CFkQIAvh.js";import"./symbol-Dfoy6GJs.js";import"./ActiveShapeUtils-Bceipj14.js";import"./ErrorBarContext-CAdmSJ6x.js";import"./SetGraphicalItem-B8qCLUCf.js";import"./useEffectiveDataKey-D37O0kkX.js";import"./CSSTransitionAnimate-DUfiLFK0.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-evYz5hyu.js";import"./uniqBy-CnYb87CD.js";import"./iteratee-ph4JQmwi.js";import"./isArguments-yB-y1yaH.js";import"./Cross-boJjnotO.js";import"./Rectangle-7LooK13L.js";import"./Sector-BxtngjTW.js";const Ar={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Sr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      </ScatterChart>;
  },
  args: getStoryArgsFromArgsTypesObject(ScatterChartArgs),
  parameters: {
    controls: {
      include: ['layout', 'allowDataOverflow']
    }
  }
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Sr as __namedExportsOrder,Ar as default};
