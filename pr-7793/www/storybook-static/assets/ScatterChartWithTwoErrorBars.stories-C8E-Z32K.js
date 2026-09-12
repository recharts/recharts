import{R as r}from"./iframe-BZt9gdNh.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-BVfXVFjj.js";import{C as d}from"./CartesianGrid-CqrZqBfx.js";import{X as c}from"./XAxis-C8XTecZS.js";import{Y as y}from"./YAxis-B6iDX6TN.js";import{S as h}from"./Scatter-CsBydkRQ.js";import{E as e}from"./ErrorBar-CJWwb5U8.js";import{T as u}from"./Tooltip-LN81swq8.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cay7o2ht.js";import"./zIndexSlice-XuBBmNUo.js";import"./throttle-B4vKrVKm.js";import"./index-Dp5cLYAc.js";import"./index-CaEFKWj4.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D9AqqL0J.js";import"./isWellBehavedNumber-Br3w71g0.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-Cl7dH9vF.js";import"./d3-scale-GcIZdCoT.js";import"./index-B_o6Jv3Z.js";import"./index-B5FMXu9L.js";import"./renderedTicksSlice-CswugCrI.js";import"./index-DjzlGcMj.js";import"./CartesianChart-B0JWnvwa.js";import"./chartDataContext-DfJ9Dq10.js";import"./CategoricalChart-qRJJqTbq.js";import"./CartesianAxis-Cv8lslC5.js";import"./Layer-DrcPzbE2.js";import"./Text-CeEgQkK1.js";import"./DOMUtils-CENtu6Ky.js";import"./useId-BpCkPPis.js";import"./useBackwardsCompatibleTheme-B33DH1wF.js";import"./Label-CgKCxMe1.js";import"./ZIndexLayer-BUepW3qO.js";import"./types-Rk0FsTZp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-dtI7DJaK.js";import"./useAnimationId-DFFh1fwK.js";import"./Curve-CNkmv-tl.js";import"./step-Cs04DkZC.js";import"./path-DyVhHtw_.js";import"./tooltipContext-BH9Rct5y.js";import"./Symbols-Bc8IP3E4.js";import"./symbol-CyhJoWFM.js";import"./ActiveShapeUtils-BSpPce9D.js";import"./RegisterGraphicalItemId-DHjWQaqm.js";import"./ErrorBarContext-Di40cu4W.js";import"./GraphicalItemClipPath-DFXU-IsT.js";import"./SetGraphicalItem-Bu5vFhfh.js";import"./useGraphicalItemIdentity-CraBFHaJ.js";import"./CSSTransitionAnimate-TkLdoNAU.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CNPicTEJ.js";import"./uniqBy-C655Zvfo.js";import"./iteratee-DgWSL6uQ.js";import"./Cross-Uqz2jl8U.js";import"./Rectangle-DP-CYR2k.js";import"./Sector-C75D8sD3.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
