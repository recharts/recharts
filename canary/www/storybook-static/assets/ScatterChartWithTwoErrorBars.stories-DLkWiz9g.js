import{R as r}from"./iframe-Bz6TqJnq.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DvDj3HdN.js";import{C as d}from"./CartesianGrid-BbGpbO3P.js";import{X as c}from"./XAxis-DVlM8vXe.js";import{Y as y}from"./YAxis-CRFRlUFA.js";import{S as h}from"./Scatter-CcGHHX7y.js";import{E as e}from"./ErrorBar-CNa3O1Vf.js";import{T as u}from"./Tooltip-BoaaN165.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper--vq1vTqI.js";import"./zIndexSlice-C-cqgMlF.js";import"./throttle-BuIt2HDm.js";import"./index-BQLoICSq.js";import"./index-beBiy9wx.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DEKZytWh.js";import"./isWellBehavedNumber-M6S8uXi3.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-BfBX80u0.js";import"./d3-scale-twe7FoUl.js";import"./index-etoInMv6.js";import"./index-DlUolpmt.js";import"./renderedTicksSlice-DQraWAfi.js";import"./index-C9aozdfF.js";import"./CartesianChart-DP7g5nZU.js";import"./chartDataContext-D2R1zViF.js";import"./CategoricalChart-CRL5ERGJ.js";import"./CartesianAxis-DH-w_D5j.js";import"./Layer-BX7MhZ6S.js";import"./Text-DOaj_kWf.js";import"./DOMUtils-Cex05Ge6.js";import"./useId-1b7xgL0h.js";import"./useBackwardsCompatibleTheme-yIhTdrUA.js";import"./Label-lSot61nz.js";import"./ZIndexLayer-DhhI2NR0.js";import"./types-4BkRWtr0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-DDH0_5C2.js";import"./useAnimationId-D4N1wqR_.js";import"./Curve-M6KVk8IF.js";import"./step-BK8r0hX3.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dr4d46Zs.js";import"./Symbols-BSgJkacr.js";import"./symbol-C6b2szSj.js";import"./ActiveShapeUtils-BxAOP67q.js";import"./RegisterGraphicalItemId-D64byefQ.js";import"./ErrorBarContext-CGc5rrEx.js";import"./GraphicalItemClipPath-CDFQRsft.js";import"./SetGraphicalItem-DzfWk83Z.js";import"./useGraphicalItemIdentity-CDqVZsrI.js";import"./CSSTransitionAnimate-0mCJV6n0.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DaMWcsMn.js";import"./uniqBy-CQ7Y-pcX.js";import"./iteratee-DSPWK7cC.js";import"./Cross-BznlOoGD.js";import"./Rectangle-nQBZL8n2.js";import"./Sector-B0YiLuYU.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
