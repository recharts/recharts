import{c as r}from"./iframe-ayfxMcMc.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DWgqGcPH.js";import{S as p}from"./ScatterChart-DWApwBVg.js";import{C as d}from"./CartesianGrid-Cu2hXhNs.js";import{X as c}from"./XAxis-CQCosfOX.js";import{Y as y}from"./YAxis-CboDD1HN.js";import{S as h}from"./Scatter-DJYrjVcF.js";import{E as e}from"./ErrorBar-C6Jzi3w_.js";import{T as u}from"./Tooltip-C25Z0DnF.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Dt3ctKzU.js";import"./zIndexSlice-CBS9H6Fq.js";import"./immer-CvfGnc1k.js";import"./index-ChfXHuaM.js";import"./index-uB2AF80P.js";import"./get-DE-GTO8K.js";import"./resolveDefaultProps-DUvm9h9z.js";import"./isWellBehavedNumber-0ySD8Cyp.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CnDnhuhh.js";import"./index-qYP6YSZE.js";import"./renderedTicksSlice-kyxhp8XW.js";import"./axisSelectors-DiADRWeJ.js";import"./d3-scale-DvksmR-t.js";import"./CartesianChart-asOappaa.js";import"./chartDataContext-ncJihXoM.js";import"./CategoricalChart-YvgC-s3M.js";import"./CartesianAxis-CJYfwd48.js";import"./Layer-DRx_WgZU.js";import"./Text-D472vA6a.js";import"./DOMUtils-DhrlxvLL.js";import"./Label-ii_PgfeB.js";import"./ZIndexLayer-ChQFeTnT.js";import"./types-DKuO6oNB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-D4TRRjvu.js";import"./Curve-CTFqdp98.js";import"./step-C4Edu8du.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CErG83J1.js";import"./Symbols-O67rkH-4.js";import"./symbol-DsIeXTTT.js";import"./ActiveShapeUtils-gZf-7tTS.js";import"./RegisterGraphicalItemId-B5JbPzoa.js";import"./ErrorBarContext-Cs3TpoeV.js";import"./GraphicalItemClipPath-D8mHMzmD.js";import"./SetGraphicalItem-B-R5cRe6.js";import"./useAnimationId-CPZ6UJKm.js";import"./CSSTransitionAnimate-Cq0joala.js";import"./useElementOffset-fSKqZFJ1.js";import"./uniqBy-CZ1HKjdU.js";import"./iteratee-CKfwSilq.js";import"./Cross-DZhq8NsE.js";import"./Rectangle-BlYO1MRZ.js";import"./Sector-B7K_t6uS.js";const gr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
