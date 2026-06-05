import{R as r}from"./iframe-COvhlo3n.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DageGAJw.js";import{C as d}from"./CartesianGrid-DloNNRRy.js";import{X as c}from"./XAxis-CiJXThtt.js";import{Y as y}from"./YAxis-Xvc1KoDU.js";import{S as h}from"./Scatter-Bv36LHBV.js";import{E as e}from"./ErrorBar-CYtEKTeF.js";import{T as u}from"./Tooltip-Ja36Jf75.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dx2dgZSl.js";import"./zIndexSlice-UjQyxCBO.js";import"./immer-BpCohf0r.js";import"./index-HVKWfhx-.js";import"./index-S2en6f0x.js";import"./get-DcOFzyCK.js";import"./resolveDefaultProps-DJ7OALvu.js";import"./isWellBehavedNumber-y7VTG9QG.js";import"./PolarUtils-CTnnDHZv.js";import"./index-iNixOGJn.js";import"./index-DX1qvyWd.js";import"./renderedTicksSlice-DbzHTb4p.js";import"./axisSelectors-Zbm12FCw.js";import"./d3-scale-BlVLCp11.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Dy7YVWuh.js";import"./chartDataContext-iIol8Xhi.js";import"./CategoricalChart-CLWSl7gV.js";import"./CartesianAxis-s3bXG1ws.js";import"./Layer-B-6Is3nc.js";import"./Text-opN_hZQa.js";import"./DOMUtils-C6WNHbS7.js";import"./Label-Vr2WzXIC.js";import"./ZIndexLayer-B0TWuVZ-.js";import"./types-p5b3Q5GI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DpY5jibk.js";import"./useAnimationId-BKJNFkSk.js";import"./Curve-DZz8_CrJ.js";import"./step-hf0ZFvgG.js";import"./path-DyVhHtw_.js";import"./tooltipContext-tIqHNj-C.js";import"./Symbols-C20faFIm.js";import"./symbol-Bj1Ifcbm.js";import"./ActiveShapeUtils-C3R6UHJX.js";import"./RegisterGraphicalItemId-C7wd0umC.js";import"./ErrorBarContext-BHPD5mnS.js";import"./GraphicalItemClipPath-CI-F5EmQ.js";import"./SetGraphicalItem-CwV_dfS_.js";import"./CSSTransitionAnimate-B-cU_OZg.js";import"./useElementOffset-CQ-gJFbp.js";import"./uniqBy-CK_LJved.js";import"./iteratee-BnLCBSbQ.js";import"./Cross-CwUEY4tE.js";import"./Rectangle-WHK0iDu3.js";import"./Sector-D08ILJSY.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Er=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Er as __namedExportsOrder,xr as default};
