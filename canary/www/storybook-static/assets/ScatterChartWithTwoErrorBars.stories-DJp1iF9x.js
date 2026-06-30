import{R as r}from"./iframe-C0ZUsupJ.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BcwqZQh1.js";import{C as d}from"./CartesianGrid-rH1uqcF0.js";import{X as c}from"./XAxis-CEau4At0.js";import{Y as y}from"./YAxis-DiMOUlNc.js";import{S as h}from"./Scatter-DJsWzU2e.js";import{E as e}from"./ErrorBar-DCL5amZy.js";import{T as u}from"./Tooltip-CllFbgj2.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BP4cUW8r.js";import"./zIndexSlice-OijFhdu6.js";import"./throttle-C0jUqI7U.js";import"./index-CWmFnIlt.js";import"./index-qQ2Np5IV.js";import"./get-DKb0zYvY.js";import"./resolveDefaultProps-CFzFI254.js";import"./isWellBehavedNumber-DY6SAaVJ.js";import"./PolarUtils-CTnnDHZv.js";import"./index-DMeIlV1g.js";import"./index-TZ5Clshf.js";import"./renderedTicksSlice-CdGxqG4t.js";import"./axisSelectors-DBehuelT.js";import"./d3-scale-Cab4s2n5.js";import"./CartesianChart-SF4H61CS.js";import"./chartDataContext-DULpfCbg.js";import"./CategoricalChart-BnZfW2OJ.js";import"./CartesianAxis-CRBuloTO.js";import"./Layer-BvM0W8cF.js";import"./Text-Rgvblv2w.js";import"./DOMUtils-C2N7ljjM.js";import"./Label-zyObFa2R.js";import"./ZIndexLayer-BTGgoWh-.js";import"./types-BB9QSyE9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BucsPXo8.js";import"./useAnimationId-gV_9QBVg.js";import"./Curve-Dx8uylpR.js";import"./step-Bvy6aUz4.js";import"./path-DyVhHtw_.js";import"./tooltipContext-FdpIVrln.js";import"./Symbols-B_Nb5BWp.js";import"./symbol-h31kQWcA.js";import"./ActiveShapeUtils-qSpTYyL4.js";import"./RegisterGraphicalItemId-kZ3u-TBa.js";import"./ErrorBarContext-CryOhevP.js";import"./GraphicalItemClipPath-CYUXkmtT.js";import"./SetGraphicalItem-BrVQB63z.js";import"./CSSTransitionAnimate-DumONi76.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DXpEJJ9m.js";import"./uniqBy-CHbMoB0U.js";import"./iteratee-DUmd7r17.js";import"./Cross-3JVi-ZEh.js";import"./Rectangle-D83EpkfQ.js";import"./Sector-Bn8GGJMt.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
