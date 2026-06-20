import{R as r}from"./iframe-CbmcvRkz.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CqxVnVCG.js";import{C as d}from"./CartesianGrid-Dh9Qs3ud.js";import{X as c}from"./XAxis-BXkS-79Y.js";import{Y as y}from"./YAxis-C-NN2TSd.js";import{S as h}from"./Scatter-C-EjEkHA.js";import{E as e}from"./ErrorBar-Dfc05j0Q.js";import{T as u}from"./Tooltip-BI_aTt7z.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-C6OXESHp.js";import"./zIndexSlice-DoKZE_fT.js";import"./immer-BWk67B8y.js";import"./index-EVqr9zMt.js";import"./index-B4yUayYa.js";import"./get-prZAxsgN.js";import"./resolveDefaultProps-DSWLYRE0.js";import"./isWellBehavedNumber-D0V00cvg.js";import"./PolarUtils-CTnnDHZv.js";import"./index-NV2k7-9r.js";import"./index-B7UJplH4.js";import"./renderedTicksSlice-BID11n2_.js";import"./axisSelectors-BFflKNFi.js";import"./d3-scale-Cq5I-Lzi.js";import"./CartesianChart-C9d6soJe.js";import"./chartDataContext-AyeK8CTN.js";import"./CategoricalChart-CbA9DUlt.js";import"./CartesianAxis-Duc97zpX.js";import"./Layer-aQjZulmS.js";import"./Text-CQlqdYfu.js";import"./DOMUtils-D_6a5VHc.js";import"./Label-CMFdvkIW.js";import"./ZIndexLayer-ByjAgEa2.js";import"./types-aj_9xhUM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-C8brG2ut.js";import"./useAnimationId-Bg4LY1-F.js";import"./Curve-Ba6UoBvx.js";import"./step-qj-9nXS-.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dp_Ucbm_.js";import"./Symbols-B-Xu_6iF.js";import"./symbol-DbjlT6zf.js";import"./ActiveShapeUtils-yEY4r1E4.js";import"./RegisterGraphicalItemId-BlnWChFK.js";import"./ErrorBarContext-Cf-_Bhe_.js";import"./GraphicalItemClipPath-BhK5nGk3.js";import"./SetGraphicalItem-CVVFn7G6.js";import"./CSSTransitionAnimate-Co-oznB8.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CYZx6MBE.js";import"./uniqBy-UCX-Zdy2.js";import"./iteratee-DJKoVJ9l.js";import"./Cross-a0L3AOFH.js";import"./Rectangle-DL-7nMhN.js";import"./Sector-CTAwYSUQ.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
