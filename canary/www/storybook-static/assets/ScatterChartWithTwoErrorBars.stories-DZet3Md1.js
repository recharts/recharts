import{R as r}from"./iframe-CO2wOmL3.js";import{g as n}from"./utils-ePvtT4un.js";import{S as p}from"./ScatterChartArgs-DVckGNEz.js";import{S as s}from"./ScatterChart-Bt4Ft23j.js";import{C as d}from"./CartesianGrid-B_0lNO-S.js";import{X as c}from"./XAxis-D8l1zj0t.js";import{Y as y}from"./YAxis-DEg_MfYL.js";import{S as h}from"./Scatter-BQhytXUG.js";import{E as e}from"./ErrorBar-fT6jv09K.js";import{T as u}from"./Tooltip-CDtXcQXw.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-QtML1m_J.js";import"./zIndexSlice-CjYLmU03.js";import"./throttle-BF_C9j3I.js";import"./index-C2bFqevd.js";import"./index-vFvBy9sc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jUsiawGP.js";import"./isWellBehavedNumber-BQRlzWpP.js";import"./PolarUtils-CTnnDHZv.js";import"./index-di8y7Hm0.js";import"./index-_W7z4BVf.js";import"./axisSelectors-CX7Lxi19.js";import"./d3-scale-C9Gp2SJN.js";import"./renderedTicksSlice-BFOY10tL.js";import"./CartesianChart-CWwcrxvU.js";import"./chartDataContext-XcRgiNTG.js";import"./CategoricalChart-shIifM_V.js";import"./CartesianAxis-B8e0zgyu.js";import"./Layer-wYmixdFE.js";import"./Text-D02hyY3C.js";import"./DOMUtils-C9bi6LZn.js";import"./useBackwardsCompatibleTheme-DeUToV_i.js";import"./Label-DQLK-wuU.js";import"./ZIndexLayer-hD4R9Zay.js";import"./types-m7U1KOoZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D8MD0Tf6.js";import"./useAnimationId-C-2OrkuN.js";import"./Curve-C6VcPqEA.js";import"./step-Cwr2l1xw.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CvUp6qIL.js";import"./Symbols-Bw6Lb_U6.js";import"./symbol-BB5e3oBF.js";import"./ActiveShapeUtils-CGE1F6kM.js";import"./RegisterGraphicalItemId-CYj5gZOD.js";import"./ErrorBarContext-CkVZ1uFV.js";import"./GraphicalItemClipPath-Bz34Vg6G.js";import"./SetGraphicalItem-BUOFB7Tk.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-BEIf-vF2.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-U-2NXguD.js";import"./uniqBy-DnW7J1Px.js";import"./iteratee-BI2qvuKr.js";import"./Cross-Cq2Shus-.js";import"./Rectangle-a3w511z3.js";import"./Sector-BuW1e-GL.js";const Yr={component:s,argTypes:p,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(s,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(p),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
