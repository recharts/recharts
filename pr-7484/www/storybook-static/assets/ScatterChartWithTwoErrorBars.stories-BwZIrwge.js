import{R as r}from"./iframe-DX1vtGMO.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-FIIUfTTm.js";import{C as d}from"./CartesianGrid-339ME1w1.js";import{X as c}from"./XAxis-DLegRWnR.js";import{Y as y}from"./YAxis-oQ2494Ky.js";import{S as h}from"./Scatter-B__IpflT.js";import{E as e}from"./ErrorBar-Bgi9bVyb.js";import{T as u}from"./Tooltip-B_SozOdJ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BbcqKMmx.js";import"./zIndexSlice-CBHqXPZu.js";import"./immer-CyjJLdoY.js";import"./index-CFOnPmwL.js";import"./index-BhJxPluG.js";import"./get-Cgjumwe9.js";import"./resolveDefaultProps-Evu9rMXK.js";import"./isWellBehavedNumber-BhjTCj8F.js";import"./PolarUtils-CTnnDHZv.js";import"./index-CfVXt8f5.js";import"./index-CNqf-i4f.js";import"./renderedTicksSlice-DGFQGuI_.js";import"./axisSelectors-CD5YpxWK.js";import"./d3-scale-D456QfQQ.js";import"./CartesianChart-mvs2MZhK.js";import"./chartDataContext-DPGZ1R2s.js";import"./CategoricalChart-DtbdNaQa.js";import"./CartesianAxis-BmLV-dG0.js";import"./Layer-D3wyNfAg.js";import"./Text-DdDBf3IT.js";import"./DOMUtils-9dw7u23l.js";import"./Label-D5WIiRBw.js";import"./ZIndexLayer-DdHbybrS.js";import"./types-wjbQlydb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-D5gtlj3g.js";import"./useAnimationId-3wGGsZoS.js";import"./Curve-B-MgiVxo.js";import"./step-d6ptEm-b.js";import"./path-DyVhHtw_.js";import"./tooltipContext-CvjXurKP.js";import"./Symbols-Cgj4MZk1.js";import"./symbol-B0aoDzxh.js";import"./ActiveShapeUtils-C5uepk-V.js";import"./RegisterGraphicalItemId-BdvIWiM6.js";import"./ErrorBarContext-BR5rkK2A.js";import"./GraphicalItemClipPath-CtH8IX0c.js";import"./SetGraphicalItem-DJ3AMYhJ.js";import"./CSSTransitionAnimate-CmpvGpaz.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DHGceypl.js";import"./uniqBy-DwA9whMp.js";import"./iteratee-BRHNmftS.js";import"./Cross-CTITRFSj.js";import"./Rectangle-m_tCbE2d.js";import"./Sector-B5U3iBwp.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
