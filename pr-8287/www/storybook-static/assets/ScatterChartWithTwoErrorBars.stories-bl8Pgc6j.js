import{R as r}from"./iframe-CBRSMBnf.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-Cm0-D_Xg.js";import{C as d}from"./CartesianGrid-D7MRB-1A.js";import{X as c}from"./XAxis-hFmUjMoe.js";import{Y as y}from"./YAxis-DSUkkbnx.js";import{S as h}from"./Scatter-DTHpfmNb.js";import{E as e}from"./ErrorBar-B-GYIiXx.js";import{T as u}from"./Tooltip-iX0f_CtC.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CtIo7IeI.js";import"./zIndexSlice-G_MKhK64.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-rMq54uQA.js";import"./throttle-9ZU0NYV2.js";import"./index-BFSKO-j2.js";import"./index-Dr6qgTGt.js";import"./axisSelectors-Ca58SJJZ.js";import"./polarAxisSelectors-CmG6JvL9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-YF59ukCY.js";import"./index-1te-Kc2Q.js";import"./index-DGSnNf5w.js";import"./renderedTicksSlice-Dn7AqsKy.js";import"./index-AkU5pxMr.js";import"./fillDefinitions-1nZ0ZPs-.js";import"./CartesianChart-PQ4f033u.js";import"./chartDataContext-sCDQ5wEf.js";import"./CategoricalChart-BElxArO-.js";import"./CartesianAxis-BvwIwDWJ.js";import"./Layer-aUkXnOjv.js";import"./Text-DWGdTCGH.js";import"./ZIndexLayer-BCt1x8VL.js";import"./Label-BfZk-Sdf.js";import"./types-BEawq_c0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./dataEntryStyles-CAxQKe3A.js";import"./activeStyles-DpG6wBQs.js";import"./useAnimationId-cL_ennFP.js";import"./Curve--RPaNs4h.js";import"./step-DBVTJVz7.js";import"./path-BBMZd4YL.js";import"./tooltipContext-knuJxyd9.js";import"./Symbols-CQ03YMrb.js";import"./symbol-DcOuNSJt.js";import"./ActiveShapeUtils-DgOfPYb9.js";import"./ErrorBarContext-D6qhDPP-.js";import"./SetGraphicalItem-C5CBQIUL.js";import"./useEffectiveDataKey-CyhT1JOs.js";import"./CSSTransitionAnimate-Bjd75Eux.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DQ69DYSZ.js";import"./uniqBy-D0KCbpsR.js";import"./iteratee-Bc1Rf-mx.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CA-QcL5M.js";import"./Rectangle-J9wv2qAO.js";import"./Sector-3uuoL5-I.js";const Yr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Ar=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
