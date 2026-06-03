import{c as r}from"./iframe-BL0vDUY1.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DQ1INOW1.js";import{C as d}from"./CartesianGrid-C7YJJUcu.js";import{X as c}from"./XAxis-BqoRDN9a.js";import{Y as y}from"./YAxis-DxphIXAP.js";import{S as h}from"./Scatter-DxzQH74O.js";import{E as e}from"./ErrorBar-DbAONXvF.js";import{T as u}from"./Tooltip-oByFuPe7.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DJ0hXPGE.js";import"./zIndexSlice-DAAOwj36.js";import"./immer-gfsZ7y3h.js";import"./index-vndO0F7c.js";import"./index-BQNr1vMH.js";import"./get-m6Gdqips.js";import"./resolveDefaultProps-ZSI9VFO3.js";import"./isWellBehavedNumber-C9kFBhSy.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C8Q9Qlzv.js";import"./index-B3rgiiof.js";import"./renderedTicksSlice-DgGULbP3.js";import"./axisSelectors-DLsK43Oc.js";import"./d3-scale-DCyWVOsR.js";import"./CartesianChart-BhVqKQAk.js";import"./chartDataContext-BU-8Dj6p.js";import"./CategoricalChart-Dx4CHgqj.js";import"./CartesianAxis-D1s0-vhb.js";import"./Layer-CaYvEIsW.js";import"./Text-0yUJxWRz.js";import"./DOMUtils-DBRkXAWK.js";import"./Label-C0g2piVD.js";import"./ZIndexLayer-BGBBuQwI.js";import"./types-C45pB88z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-2UhHZda9.js";import"./Curve-Cc4T7AcR.js";import"./step-BQd4YsZo.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C7vrrHS_.js";import"./Symbols-DGPx7_yq.js";import"./symbol-Chwe14Vf.js";import"./ActiveShapeUtils-BDjEEgo3.js";import"./RegisterGraphicalItemId-CkGBqTpZ.js";import"./ErrorBarContext-rpVVIvWF.js";import"./GraphicalItemClipPath-CzWahSjY.js";import"./SetGraphicalItem-CpMSDPev.js";import"./useAnimationId-Dpb32_8Y.js";import"./CSSTransitionAnimate-DmF1RPF0.js";import"./useElementOffset-ygCelvpZ.js";import"./uniqBy-BeGOK-hH.js";import"./iteratee-CLiHz7HZ.js";import"./Cross-CPBbOftl.js";import"./Rectangle-DISm3zYB.js";import"./Sector-BuBE9LFV.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const xr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,xr as __namedExportsOrder,gr as default};
