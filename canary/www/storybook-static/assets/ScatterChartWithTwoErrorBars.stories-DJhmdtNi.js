import{R as r}from"./iframe-D2OYENKH.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CBEWRoQO.js";import{C as d}from"./CartesianGrid-COFti2ZN.js";import{X as c}from"./XAxis-Pkmtv0hr.js";import{Y as y}from"./YAxis-BOZmPEET.js";import{S as h}from"./Scatter-CudT_gcU.js";import{E as e}from"./ErrorBar-BNqo6oIn.js";import{T as u}from"./Tooltip-DB7eXyiT.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BWgpx-pN.js";import"./zIndexSlice-D0ZhXs4m.js";import"./throttle-Bn9pRQ9R.js";import"./index-Dur45csw.js";import"./index-DuPaBThV.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-dYsmKBqC.js";import"./isWellBehavedNumber-CA6K8V7o.js";import"./PolarUtils-CTnnDHZv.js";import"./index-JR3rJPe5.js";import"./index-CVAOKIGV.js";import"./renderedTicksSlice-CAJ7-KA1.js";import"./axisSelectors-D5cpRxU3.js";import"./d3-scale-BX-yZ5Fv.js";import"./CartesianChart-D90Zb4X0.js";import"./chartDataContext-BdJZhmRg.js";import"./CategoricalChart-UC5rHyt5.js";import"./CartesianAxis-BVkShzhs.js";import"./Layer-D9vccuwA.js";import"./Text-Dw3wOnD-.js";import"./DOMUtils-DDs_Dfl9.js";import"./Label-BhTPc9li.js";import"./ZIndexLayer-Cf4JaxIV.js";import"./types-CP4OIotA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-B2FvzarN.js";import"./isBuffer-Crkas5dz.js";import"./AnimatedItems-DmNuH65D.js";import"./useAnimationId-INjmlW7n.js";import"./Curve-2nThZew5.js";import"./step-DWDRJwlo.js";import"./path-DyVhHtw_.js";import"./tooltipContext-C-XBREnG.js";import"./Symbols-zZY-dgPF.js";import"./symbol-B4rpbFe-.js";import"./ActiveShapeUtils-CzcMe4-S.js";import"./RegisterGraphicalItemId-B9FhgBpj.js";import"./ErrorBarContext-DK9yojOq.js";import"./GraphicalItemClipPath-BwblPJrN.js";import"./SetGraphicalItem-CS5ycuRe.js";import"./CSSTransitionAnimate-DBQTC51P.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CLBcQN83.js";import"./uniqBy-P6iSPcSj.js";import"./iteratee-1U3upCJW.js";import"./Cross-CacqqhTY.js";import"./Rectangle-xLYCPX3G.js";import"./Sector-BqNrUyRn.js";const Xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
