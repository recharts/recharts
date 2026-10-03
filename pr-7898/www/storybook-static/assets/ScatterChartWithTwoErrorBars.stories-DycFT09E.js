import{R as r}from"./iframe-DUCVYvuv.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-B1S_YbFj.js";import{C as d}from"./CartesianGrid-TluhHeGx.js";import{X as c}from"./XAxis-BzNdpJxM.js";import{Y as y}from"./YAxis-BmCbyRlC.js";import{S as h}from"./Scatter-DzIdhfhQ.js";import{E as e}from"./ErrorBar-CjqIUDdc.js";import{T as u}from"./Tooltip-BdFBoleX.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-iyGA1AMM.js";import"./zIndexSlice-Dv561aOb.js";import"./throttle-DlYjiwaM.js";import"./index-Drz1YEgP.js";import"./index-BF0qlZzJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DISImja8.js";import"./isWellBehavedNumber-CHfaFS22.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-RihwrwLn.js";import"./d3-scale-CipezK5C.js";import"./index-CU1FAq-q.js";import"./index-CF3yTXup.js";import"./renderedTicksSlice-DntZkvWg.js";import"./index-BB2mFlZ8.js";import"./CartesianChart-CMoCj0lC.js";import"./chartDataContext-C_0AmvZE.js";import"./CategoricalChart-BDtogWEQ.js";import"./CartesianAxis-CN04VyAD.js";import"./Layer-BYf2Lf2_.js";import"./Text-BvxoaAi_.js";import"./DOMUtils-CzBz7LPB.js";import"./useId-B9VN3-ij.js";import"./useBackwardsCompatibleTheme-CPdPW8lT.js";import"./Label-BxNjUR8n.js";import"./ZIndexLayer-CTDLevub.js";import"./types-Bor8UPlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-BEYVhKcg.js";import"./useAnimationId-CVoiYc0t.js";import"./Curve-BYkQNACV.js";import"./step-C8Z349xs.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dt3XeKo0.js";import"./Symbols-Bt5KQad5.js";import"./symbol-DBVnIE4b.js";import"./ActiveShapeUtils-Bh9qpD-D.js";import"./RegisterGraphicalItemId-BxtMrAn2.js";import"./ErrorBarContext-DZk5Pr6Y.js";import"./GraphicalItemClipPath-AZa4GZWr.js";import"./SetGraphicalItem-CMStLvM8.js";import"./useGraphicalItemIdentity-BZb16S3a.js";import"./dataEntryStyles-D1JhI92N.js";import"./CSSTransitionAnimate-B8b_T9YM.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BSSllVf1.js";import"./uniqBy-Xxc7DvXp.js";import"./iteratee-jOVAutlA.js";import"./Cross-Bgmo4ZsB.js";import"./Rectangle-CSIdxSg9.js";import"./Sector-EwYINvkJ.js";const Dr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Or=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};export{t as WithErrorBarsAndExtendedDomain,Or as __namedExportsOrder,Dr as default};
