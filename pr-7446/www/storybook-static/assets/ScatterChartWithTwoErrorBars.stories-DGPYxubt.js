import{R as r}from"./iframe-DR9JYvo9.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DmozmbhG.js";import{C as d}from"./CartesianGrid-BcdMj9Ha.js";import{X as c}from"./XAxis-CkTBv7Vq.js";import{Y as y}from"./YAxis-njpk2nvi.js";import{S as h}from"./Scatter-DJacphKn.js";import{E as e}from"./ErrorBar-CPMoAIOK.js";import{T as u}from"./Tooltip-bHZNy_a0.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-xGluos2C.js";import"./zIndexSlice-C8us_33i.js";import"./immer-BibliqvJ.js";import"./index-BSI6txHD.js";import"./index-DDKROPpY.js";import"./get-cu4HmN_G.js";import"./resolveDefaultProps-BYvz8ioJ.js";import"./isWellBehavedNumber-CoRQ5I_Q.js";import"./PolarUtils-CTnnDHZv.js";import"./index-k7j0Xumv.js";import"./index-CU_PZZsV.js";import"./renderedTicksSlice-CyVH_MQq.js";import"./axisSelectors-DGVKCopH.js";import"./d3-scale-L0XByWhe.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BZ37_3cP.js";import"./chartDataContext-CejwtDPv.js";import"./CategoricalChart-BpqxHQTK.js";import"./CartesianAxis-Dipo9dl9.js";import"./Layer-BDZfdfVu.js";import"./Text-DBYgVn99.js";import"./DOMUtils-Bi5BI6KA.js";import"./Label-De6_no0_.js";import"./ZIndexLayer-BgzJVSii.js";import"./types-C_DqPfQs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-DwCxTPVO.js";import"./useAnimationId-BlaQudXH.js";import"./Curve-xdfXeJb-.js";import"./step-CM9yBmc1.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DJfuGMMl.js";import"./Symbols-CRp0uNKN.js";import"./symbol-DTdjZNyu.js";import"./ActiveShapeUtils-BwilYhsw.js";import"./RegisterGraphicalItemId-DV56rO-3.js";import"./ErrorBarContext-BO0-BSQI.js";import"./GraphicalItemClipPath-Vt_UhRqU.js";import"./SetGraphicalItem-DG2lsiaO.js";import"./CSSTransitionAnimate-BA_oYjb3.js";import"./useElementOffset-48OXgiQB.js";import"./uniqBy-06vWrWfm.js";import"./iteratee-laBcaYlX.js";import"./Cross-DbxsLtT0.js";import"./Rectangle-DCKYc31L.js";import"./Sector-0MJbS1dO.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
