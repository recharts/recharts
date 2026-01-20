import{e as r}from"./iframe-BO2lV8Fr.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-BJpmjn08.js";import{S as p}from"./ScatterChart-f0BQu5lw.js";import{C as d}from"./CartesianGrid-okPqrjow.js";import{X as c}from"./XAxis-n0cJUWOz.js";import{Y as y}from"./YAxis-BHKkX64t.js";import{S as h}from"./Scatter-DkqakoOn.js";import{E as e}from"./ErrorBar-BGoj0H9j.js";import{T as u}from"./Tooltip-DSLeoLaw.js";import{R as f}from"./RechartsHookInspector-BaEmilk5.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CnX2hcx7.js";import"./arrayEqualityCheck-BPZLCCv_.js";import"./resolveDefaultProps-DHbskwPQ.js";import"./PolarUtils-CZtkokJH.js";import"./hooks-CyQEzp2Y.js";import"./axisSelectors-C55ZO64o.js";import"./zIndexSlice-OMKiStTn.js";import"./CartesianChart-BlrMuAtJ.js";import"./chartDataContext-Dtblt1is.js";import"./CategoricalChart-mKGFwIoi.js";import"./CartesianAxis-wvny4geP.js";import"./Layer-IoZ0rL1L.js";import"./Text-B2hif4xC.js";import"./DOMUtils-5fMbRa2e.js";import"./Label-4EeKD-N4.js";import"./ZIndexLayer-CKe6oR6h.js";import"./types-uDYlV2go.js";import"./ReactUtils-CB6ifrXE.js";import"./Curve-BbZIFp84.js";import"./tooltipContext-hiTRuGT_.js";import"./Symbols-BsRtfl74.js";import"./ActiveShapeUtils-DVU6eaup.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CuSLDrEq.js";import"./useAnimationId-B_L243Vk.js";import"./Trapezoid-DXmIi2NN.js";import"./Sector-BGeEC3JQ.js";import"./RegisterGraphicalItemId-wG1yfeVq.js";import"./ErrorBarContext-BB-sopap.js";import"./GraphicalItemClipPath-D6vjaQ-6.js";import"./SetGraphicalItem-BSkVMDfa.js";import"./CSSTransitionAnimate-dEK63Zc_.js";import"./useElementOffset-C67P8EXt.js";import"./iteratee-CKVmbhaC.js";import"./Cross-Cw0a3q2D.js";import"./index-Ci4CsAoU.js";import"./ChartSizeDimensions-BEuPB0uv.js";import"./OffsetShower-C3B37-9_.js";import"./PlotAreaShower-Bds63cu3.js";const hr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}),r.createElement(f,null))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ur=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,ur as __namedExportsOrder,hr as default};
