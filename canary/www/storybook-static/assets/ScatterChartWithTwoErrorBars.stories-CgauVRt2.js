import{R as r}from"./iframe-gpTdtb3o.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-LJtfRs8m.js";import{C as d}from"./CartesianGrid-3cymI0rY.js";import{X as c}from"./XAxis-DYu-ZOyv.js";import{Y as y}from"./YAxis-CLFsfV71.js";import{S as h}from"./Scatter-C-PQ65ba.js";import{E as e}from"./ErrorBar-lVP2BFnB.js";import{T as u}from"./Tooltip-DafckEdq.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-D3qcdzr8.js";import"./zIndexSlice-B_W_5LRM.js";import"./throttle-hlhbAB_M.js";import"./index-Ca1MAT9x.js";import"./index-6dylaplf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B1pv53Kz.js";import"./isWellBehavedNumber-Cw4jxBns.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-CvE00xSD.js";import"./d3-scale-7NDnVj98.js";import"./index-nUwe86SZ.js";import"./index-DXV1xdLh.js";import"./renderedTicksSlice-DaEdYejM.js";import"./index-BMezmC1E.js";import"./CartesianChart-DPQqrhgz.js";import"./chartDataContext-BsKoSYgw.js";import"./CategoricalChart-f3aA9Jty.js";import"./CartesianAxis-CIlmhzaL.js";import"./Layer-D_tVd9Wv.js";import"./Text-ak0t_Bx4.js";import"./DOMUtils-Cn984pfG.js";import"./useId-ByjeVVFt.js";import"./useBackwardsCompatibleTheme-DCuKeaT8.js";import"./Label-Dvu_EEFs.js";import"./ZIndexLayer-DtPhgAmh.js";import"./types-DEtafNZH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-CmtCKI6D.js";import"./useAnimationId-BJpAmfdR.js";import"./Curve-lr3CvHTC.js";import"./step-Ywftl4vM.js";import"./path-DyVhHtw_.js";import"./tooltipContext-Dap5BI69.js";import"./Symbols-NpmPSUOW.js";import"./symbol-YRQzSnHu.js";import"./ActiveShapeUtils-DjV0uxAo.js";import"./RegisterGraphicalItemId-D6ws7CHx.js";import"./ErrorBarContext-Cyjjr4ja.js";import"./GraphicalItemClipPath-BJM_h44F.js";import"./SetGraphicalItem-C_pU6L7b.js";import"./useGraphicalItemIdentity-DKbxUJti.js";import"./CSSTransitionAnimate-C7BKqDQR.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-BHZkptX3.js";import"./uniqBy-DYlIInnP.js";import"./iteratee-CkkSmBRO.js";import"./Cross-fe2tev2Z.js";import"./Rectangle-CKEK9pt1.js";import"./Sector-BIT9pt3G.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
