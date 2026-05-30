import{c as r}from"./iframe-Cvf4U4wn.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-CKr2gT9q.js";import{C as d}from"./CartesianGrid-CyV206l1.js";import{X as c}from"./XAxis-l3Ov2KAu.js";import{Y as y}from"./YAxis-CMM495nD.js";import{S as h}from"./Scatter-BndMGErj.js";import{E as e}from"./ErrorBar-CnAI1DiF.js";import{T as u}from"./Tooltip-QaWAXfYX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-hVt29Fw0.js";import"./zIndexSlice-CO7DftJr.js";import"./immer-CBt7R_8A.js";import"./index-BqdhXxVe.js";import"./index-Ie5aROBq.js";import"./get-DcGEMmQ3.js";import"./resolveDefaultProps-_tlFTpxx.js";import"./isWellBehavedNumber-D1x3hQfA.js";import"./PolarUtils-CTnnDHZv.js";import"./index-_osGLyvR.js";import"./index-84gp7b_-.js";import"./renderedTicksSlice-C6GQfAg5.js";import"./axisSelectors-DVSbKCnr.js";import"./d3-scale-DPGKMlVi.js";import"./CartesianChart-DDk2GzyN.js";import"./chartDataContext-BwbL_Y5V.js";import"./CategoricalChart-Bqu7zn37.js";import"./CartesianAxis-BKWdoZud.js";import"./Layer-CDCy6J-l.js";import"./Text-Kfko65iu.js";import"./DOMUtils-0PFm0Zn3.js";import"./Label-DCVsgxMs.js";import"./ZIndexLayer-DmQbCY-Q.js";import"./types-CuBUAF5G.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-CtvGvrJ3.js";import"./Curve-DdUHzuyS.js";import"./step-_BMXLB8G.js";import"./path-DyVhHtw_.js";import"./tooltipContext-0Iqqd4zj.js";import"./Symbols-CgPS0jag.js";import"./symbol-DC3DdvQa.js";import"./ActiveShapeUtils-BFe2i1Jy.js";import"./RegisterGraphicalItemId-1iDEiZF0.js";import"./ErrorBarContext-d8hdoxRP.js";import"./GraphicalItemClipPath-D3CDUk-1.js";import"./SetGraphicalItem-wq1eCtaf.js";import"./useAnimationId-DtyIsMoa.js";import"./CSSTransitionAnimate-C58_nikV.js";import"./useElementOffset-WW4KUmBb.js";import"./uniqBy-BQjndAzO.js";import"./iteratee-CTJSODyf.js";import"./Cross-CLjsubSm.js";import"./Rectangle-DlZf8ANQ.js";import"./Sector-Cc3eSa_T.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
