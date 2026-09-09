import{R as r}from"./iframe-DsxZlU5r.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CHn94PQ0.js";import{C as d}from"./CartesianGrid-MyFoq73o.js";import{X as c}from"./XAxis-CYz9D79b.js";import{Y as y}from"./YAxis-BnTqZW5t.js";import{S as h}from"./Scatter-JRb4nasZ.js";import{E as e}from"./ErrorBar-BYGgvhLb.js";import{T as u}from"./Tooltip-Bi7KeNHc.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BwO2SplL.js";import"./zIndexSlice-C9X4WKOn.js";import"./throttle-UzrpYZZa.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-txR9uiFl.js";import"./isWellBehavedNumber-CTT7gzfy.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BqZ8E3_i.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./CartesianAxis-xh5AQvWr.js";import"./Layer-C9CQXPgt.js";import"./Text-rMrFJjxt.js";import"./DOMUtils-DeolnxnC.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./Label-W_BNIllg.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./types-DNLq32QI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D0Io6hoN.js";import"./useAnimationId-BTOaFYFg.js";import"./Curve-CSIe3S-R.js";import"./step-Dj6yUh6h.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CqKrYQht.js";import"./Symbols-C0ZgxGkt.js";import"./symbol-C5SjR8iA.js";import"./ActiveShapeUtils-DWfz214x.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./useGraphicalItemIdentity-DcyTJT25.js";import"./CSSTransitionAnimate-CJfHYcvQ.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CkmTikZn.js";import"./uniqBy-CaKEfqj9.js";import"./iteratee-Bn0tiKsf.js";import"./Cross-Bj59EFsY.js";import"./Rectangle-Y7TKK3zv.js";import"./Sector-BwPHwtT0.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Dr as __namedExportsOrder,Sr as default};
