import{R as r}from"./iframe-BNNSts13.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CG1EExE3.js";import{C as d}from"./CartesianGrid-D9W-jp0X.js";import{X as c}from"./XAxis-CQLk361J.js";import{Y as y}from"./YAxis-BE5H5SGl.js";import{S as h}from"./Scatter-DyPFajd-.js";import{E as e}from"./ErrorBar-C5SCR-uD.js";import{T as u}from"./Tooltip-DHW7ZYPz.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CxhgYL0g.js";import"./zIndexSlice-B_0Vu2Ew.js";import"./throttle-CBpSFV7b.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./get-C9gxS0ZW.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./CartesianAxis-Bo6M1fU4.js";import"./Layer-BUN3jU8m.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./Label-B9RstaAA.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./types-CMjaNGyL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-u006QBg6.js";import"./useAnimationId-CPqzTwnW.js";import"./Curve-ByI9xGCG.js";import"./step-Brv0yDTW.js";import"./path-DyVhHtw_.js";import"./tooltipContext-20KYJakf.js";import"./Symbols-DzjVk4t8.js";import"./symbol-CA3p36J7.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./CSSTransitionAnimate-CvT2wRqE.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";import"./Cross-BHUS_DrE.js";import"./Rectangle-L3OxoeXe.js";import"./Sector-DQ8c-GNj.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
