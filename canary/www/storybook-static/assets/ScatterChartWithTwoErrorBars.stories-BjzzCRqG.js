import{e as r}from"./iframe-BMiRdtzi.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-Bxm12dUp.js";import{S as p}from"./ScatterChart-A6FmZgvp.js";import{C as d}from"./CartesianGrid-CM8CSWoO.js";import{X as c}from"./XAxis-zYIEy4Nj.js";import{Y as y}from"./YAxis-4AjIhGFV.js";import{S as h}from"./Scatter-Bi5SlX-d.js";import{E as e}from"./ErrorBar-XC18ftIV.js";import{T as u}from"./Tooltip-ifIBFrbc.js";import{R as f}from"./RechartsHookInspector-PXISS_9s.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D1Zuj5aj.js";import"./arrayEqualityCheck-Da9FQhP8.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-BbcxzGSI.js";import"./immer-CeUHRJUh.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CFZ_txX2.js";import"./hooks-Dj-8y2kZ.js";import"./axisSelectors-Dhmk1Apf.js";import"./d3-scale-lZPJgZrs.js";import"./zIndexSlice-DXZuZUhc.js";import"./renderedTicksSlice-DuZcooa-.js";import"./CartesianChart-hRI6eS0t.js";import"./chartDataContext-FBHrtSoZ.js";import"./CategoricalChart-DDM_7pl3.js";import"./CartesianAxis-B9OgjJ9q.js";import"./Layer-D9Oz3zOW.js";import"./Text-KMtMbVYS.js";import"./DOMUtils-D9vxTovY.js";import"./Label-BNGz4hpX.js";import"./ZIndexLayer-BSi_oIk9.js";import"./types-nLF0_SAW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-f9rIQTZx.js";import"./Curve-B8D8lFuj.js";import"./step-BA38JlTy.js";import"./tooltipContext-DA92YycH.js";import"./Symbols-DfsWCoSA.js";import"./symbol-Dypj6TZZ.js";import"./ActiveShapeUtils-ien1uv2Y.js";import"./isPlainObject-CocMjk2l.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-B7gjhdc4.js";import"./useAnimationId-5Oa7E8I_.js";import"./Trapezoid-YEyIDayp.js";import"./Sector-CiduAPVO.js";import"./RegisterGraphicalItemId-_26M4VR4.js";import"./ErrorBarContext-CzWKH65H.js";import"./GraphicalItemClipPath-DVqZ2J0u.js";import"./SetGraphicalItem-DG59MNm5.js";import"./CSSTransitionAnimate-WoZivmPm.js";import"./useElementOffset-DbucRiGe.js";import"./uniqBy-Cg_cRoCf.js";import"./iteratee-CxSAdzMH.js";import"./Cross-DeYqW9SV.js";import"./index-BxIeWHLt.js";import"./ChartSizeDimensions-CNT6A0OH.js";import"./OffsetShower-Bzn-sKNm.js";import"./PlotAreaShower-B0eURlXX.js";const Sr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
