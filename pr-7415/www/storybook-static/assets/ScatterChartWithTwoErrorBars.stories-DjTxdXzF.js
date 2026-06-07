import{R as r}from"./iframe-dVDPDAoI.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-C4GpCVKi.js";import{C as d}from"./CartesianGrid-B8Z3ho_x.js";import{X as c}from"./XAxis-Ra2gX97C.js";import{Y as y}from"./YAxis-BD3X1oHR.js";import{S as h}from"./Scatter-B0-hcRly.js";import{E as e}from"./ErrorBar-79aVNsrZ.js";import{T as u}from"./Tooltip-CVwsfvTx.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BD3vbn3c.js";import"./zIndexSlice-Bsc_tgY7.js";import"./immer-BdmkJOJr.js";import"./index-DKbSAh9L.js";import"./index-Dx5dPQRG.js";import"./get-VpXFggwN.js";import"./resolveDefaultProps-B9xmOxzf.js";import"./isWellBehavedNumber-CPNu7XeA.js";import"./PolarUtils-CTnnDHZv.js";import"./index-C_VdjUmv.js";import"./index-CnhhL7Zb.js";import"./renderedTicksSlice-DnkJLQvR.js";import"./axisSelectors-BILy-Fum.js";import"./d3-scale-Dow8MXGl.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rEvqbiLD.js";import"./chartDataContext-CZJe0GvZ.js";import"./CategoricalChart-CZjUsR6e.js";import"./CartesianAxis-BOKYqx2U.js";import"./Layer-M7jAw79j.js";import"./Text-Bi26GJyN.js";import"./DOMUtils-lc6v0qq-.js";import"./Label-BEOAhV_I.js";import"./ZIndexLayer-D86eoQTZ.js";import"./types-jcNKZDcp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BynH3EWp.js";import"./useAnimationId-DHcuBUhz.js";import"./Curve-Bib8lOHe.js";import"./step-BD-4s5qs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CiAj9sGp.js";import"./Symbols-9RqDgmZB.js";import"./symbol-0rLe6Tht.js";import"./ActiveShapeUtils-G5tYFgXR.js";import"./RegisterGraphicalItemId-BTF8QJ8M.js";import"./ErrorBarContext-DM0DtMrb.js";import"./GraphicalItemClipPath-DL50SU1R.js";import"./SetGraphicalItem-BvRajfM7.js";import"./CSSTransitionAnimate-egr-82lx.js";import"./useElementOffset-TBdqj4Y3.js";import"./uniqBy-Bo_ObW1a.js";import"./iteratee-DdGg6bBx.js";import"./Cross-DzdClftC.js";import"./Rectangle-Cm-MJcqD.js";import"./Sector-C5lQsPUE.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
