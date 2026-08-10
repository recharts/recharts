import{R as r}from"./iframe-BKvNh1h_.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-CTiibF8M.js";import{C as d}from"./CartesianGrid-CU7MDKqs.js";import{X as c}from"./XAxis-Cpwb-IQX.js";import{Y as y}from"./YAxis-TFOOT7wp.js";import{S as h}from"./Scatter-8yKUTbm-.js";import{E as e}from"./ErrorBar-BR2IaV46.js";import{T as u}from"./Tooltip-CH7VXEpY.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bjdqnb5s.js";import"./zIndexSlice-C45OUbld.js";import"./throttle-CCr4r-wz.js";import"./index-LbIdVRN9.js";import"./index-C8RhipGY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DkG3FLLb.js";import"./isWellBehavedNumber-CCuIO4aK.js";import"./PolarUtils-CTnnDHZv.js";import"./index-LDeJ6IyG.js";import"./index-Bs0U2hFi.js";import"./axisSelectors-CqcxQY1m.js";import"./d3-scale-C0LZPMhi.js";import"./renderedTicksSlice-CZ4-swon.js";import"./CartesianChart-BRsslnmW.js";import"./chartDataContext-CYnF151M.js";import"./CategoricalChart-ByQYOV-Z.js";import"./CartesianAxis-BURSUJ7n.js";import"./Layer-B8EPTqa2.js";import"./Text-Uy9kBT6v.js";import"./DOMUtils-B6CNM4ee.js";import"./Label-D2RnPYt_.js";import"./ZIndexLayer-Dc9WCXop.js";import"./types-BwPciZr7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-a-KGKEje.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-GpiTBXk9.js";import"./useAnimationId-B6MPcNoZ.js";import"./Curve-B1iKKL18.js";import"./step-CFL-eQno.js";import"./path-DyVhHtw_.js";import"./tooltipContext-qcIODcdl.js";import"./Symbols-CXb0Y0lK.js";import"./symbol-w5xUT4gq.js";import"./ActiveShapeUtils-Dl_5YuKK.js";import"./RegisterGraphicalItemId-D3RFuNNX.js";import"./ErrorBarContext-BdGaK5EK.js";import"./GraphicalItemClipPath-CWTvD5fd.js";import"./SetGraphicalItem-B2KPFtj4.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-C9AmIfJ3.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-16dn994i.js";import"./uniqBy-CpZLg9oD.js";import"./iteratee-CSiLF3kk.js";import"./Cross-DojD0aFs.js";import"./Rectangle-OKuxmDV_.js";import"./Sector-DJIrPNXW.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Ar=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Ar as __namedExportsOrder,Yr as default};
