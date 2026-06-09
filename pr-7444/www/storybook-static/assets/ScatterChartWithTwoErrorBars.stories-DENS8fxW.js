import{R as r}from"./iframe-Bvg5iw6Z.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C-79D4S7.js";import{C as d}from"./CartesianGrid-391TdCFj.js";import{X as c}from"./XAxis-DCRWzJVy.js";import{Y as y}from"./YAxis-DfqNaUIm.js";import{S as h}from"./Scatter-CCCqmNhq.js";import{E as e}from"./ErrorBar-C_NvJ5zm.js";import{T as u}from"./Tooltip-Lj7TyvUX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CHMdqOJQ.js";import"./zIndexSlice-Ds_NjbNn.js";import"./immer-DHoEBynv.js";import"./index-Ce12os93.js";import"./index-C7ALVEHS.js";import"./get-DHB3VUn4.js";import"./resolveDefaultProps-DdhPeWBo.js";import"./isWellBehavedNumber-BfXcmwrI.js";import"./PolarUtils-CTnnDHZv.js";import"./index-D6uOIfEh.js";import"./index-DjoxYWbz.js";import"./renderedTicksSlice-BOSAcKeB.js";import"./axisSelectors-ChUTyiTu.js";import"./d3-scale-C3JFNDzB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-B5xnpDkJ.js";import"./chartDataContext-C4maze1A.js";import"./CategoricalChart-D7IINMSs.js";import"./CartesianAxis-_p8UXmcr.js";import"./Layer-irp4ME8h.js";import"./Text-DjnMaOWq.js";import"./DOMUtils-DJUlICsZ.js";import"./Label-DkRUWIp2.js";import"./ZIndexLayer-BSVnK8Dt.js";import"./types-C-xtjdCV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BUtl3ij7.js";import"./useAnimationId-BOUeGlQ3.js";import"./Curve-C6rubuUm.js";import"./step-CEyafom-.js";import"./path-DyVhHtw_.js";import"./tooltipContext--wyt8dyf.js";import"./Symbols-Cq3i7-Qm.js";import"./symbol-ht2nF6AE.js";import"./ActiveShapeUtils-DAESvJMs.js";import"./RegisterGraphicalItemId-DtXuMSpf.js";import"./ErrorBarContext-CM-RxSPr.js";import"./GraphicalItemClipPath-VUPv1woh.js";import"./SetGraphicalItem-DwOFrAeq.js";import"./CSSTransitionAnimate-BPck5aiE.js";import"./useElementOffset-DAsw9AdB.js";import"./uniqBy-B9Wdfl7r.js";import"./iteratee-BBjRdKWi.js";import"./Cross-1MdmmQOd.js";import"./Rectangle-prsUXg1E.js";import"./Sector-DYXtSTxy.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
