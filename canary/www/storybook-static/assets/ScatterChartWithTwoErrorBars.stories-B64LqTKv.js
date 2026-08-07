import{R as r}from"./iframe-CLOWWJpx.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-6neem50C.js";import{C as d}from"./CartesianGrid-BvYfACiJ.js";import{X as c}from"./XAxis-5aclO3SU.js";import{Y as y}from"./YAxis-QbO3_x34.js";import{S as h}from"./Scatter-XBsz4u7m.js";import{E as e}from"./ErrorBar-DAFEmkOO.js";import{T as u}from"./Tooltip-CgTotejh.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-PtmXkiLl.js";import"./zIndexSlice-Chs4RMZ4.js";import"./throttle-NR7rmq0H.js";import"./index-D8vkw_WC.js";import"./index-CvPaOhKY.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DCKMEUHg.js";import"./isWellBehavedNumber-Bkt9PZby.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CoemtFTs.js";import"./index-gsgSuvG_.js";import"./axisSelectors-B6C-iAl6.js";import"./d3-scale-BWgGZ0ZC.js";import"./renderedTicksSlice-Dqa_BZU0.js";import"./CartesianChart-BghZLmrY.js";import"./chartDataContext-CMbA824e.js";import"./CategoricalChart--VJeMiVR.js";import"./CartesianAxis-Cg5r0ZYC.js";import"./Layer-GlnJsptq.js";import"./Text-CoBlae8g.js";import"./DOMUtils-cc_L-yud.js";import"./Label-DG_GQs1i.js";import"./ZIndexLayer-NdFk7Llr.js";import"./types-B-e_P8o7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CG7dbDKG.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DKcQidly.js";import"./useAnimationId-CXs0-Peu.js";import"./Curve-DZ0oaj1l.js";import"./step-CeEc6BtY.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DIMJSl8I.js";import"./Symbols-HF_kJStw.js";import"./symbol-TVKKDHlk.js";import"./ActiveShapeUtils-6rRdWU2Q.js";import"./RegisterGraphicalItemId-D8sZKmnj.js";import"./ErrorBarContext-zURr2Pa5.js";import"./GraphicalItemClipPath-CzZgXvBv.js";import"./SetGraphicalItem-DBtV5dO_.js";import"./CSSTransitionAnimate-B1uVDqnN.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BxZhDmns.js";import"./uniqBy-Cl6wEbNY.js";import"./iteratee-CSycNkZJ.js";import"./Cross-BhCc6GwU.js";import"./Rectangle-CzlrgWAJ.js";import"./Sector-q8Y4yAcM.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const Yr=["WithErrorBarsAndExtendedDomain"];export{t as WithErrorBarsAndExtendedDomain,Yr as __namedExportsOrder,Xr as default};
