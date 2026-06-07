import{R as r}from"./iframe-BqYy1R0H.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-CEDzUJTT.js";import{C as d}from"./CartesianGrid-B4_mJDYh.js";import{X as c}from"./XAxis-BqSBdy-L.js";import{Y as y}from"./YAxis-BqslSc7g.js";import{S as h}from"./Scatter-BATnavw0.js";import{E as e}from"./ErrorBar-BfqMQzFJ.js";import{T as u}from"./Tooltip-CKKNj2xq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Cr-pgoDs.js";import"./zIndexSlice-V534Dm1F.js";import"./immer-Bl4OFMGN.js";import"./index-aB2rylH4.js";import"./index-C5sdWpfd.js";import"./get-BmpbLRXi.js";import"./resolveDefaultProps-DF5EmNm0.js";import"./isWellBehavedNumber-Bh7WW-St.js";import"./PolarUtils-CTnnDHZv.js";import"./index-Bep5EplS.js";import"./index--UqKWgbM.js";import"./renderedTicksSlice-DUFmYLd3.js";import"./axisSelectors-B5gEtu2k.js";import"./d3-scale-x-g3_XS_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-nuuk7Fog.js";import"./chartDataContext-Cg_GXcDk.js";import"./CategoricalChart-DKKEuBf1.js";import"./CartesianAxis-x5MMDJHG.js";import"./Layer-FvXx8y_M.js";import"./Text-Bb7f-h23.js";import"./DOMUtils-BM94Xuwo.js";import"./Label-NYQMjqVT.js";import"./ZIndexLayer-COarhLNo.js";import"./types-CKi3J98u.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-BbE46Kp8.js";import"./useAnimationId-BGeq3Yxk.js";import"./Curve-CjCX_hKZ.js";import"./step-eDccUZNe.js";import"./path-DyVhHtw_.js";import"./tooltipContext-uH5PM2pv.js";import"./Symbols-DGpoRht8.js";import"./symbol-DAUjfM40.js";import"./ActiveShapeUtils--vnzUd2H.js";import"./RegisterGraphicalItemId-CLltNWrh.js";import"./ErrorBarContext-DTNv6sWg.js";import"./GraphicalItemClipPath-CsvgNQl2.js";import"./SetGraphicalItem-CBYRQcWu.js";import"./CSSTransitionAnimate-HjOGv_Dm.js";import"./useElementOffset-ChEgaNUP.js";import"./uniqBy-CaGUEiLV.js";import"./iteratee-QgNCt4oW.js";import"./Cross-BuLADaE1.js";import"./Rectangle-BCODqy_s.js";import"./Sector-D7k5-18d.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
