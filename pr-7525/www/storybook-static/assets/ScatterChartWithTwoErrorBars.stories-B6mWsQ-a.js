import{R as r}from"./iframe-Dlbg_GZB.js";import{g as n}from"./utils-ePvtT4un.js";import{S as s}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-cfyYvCMB.js";import{C as d}from"./CartesianGrid-g5KYVCwt.js";import{X as c}from"./XAxis-g3Yqs_q0.js";import{Y as y}from"./YAxis-K45jOkJG.js";import{S as h}from"./Scatter-BgxzRrMD.js";import{E as e}from"./ErrorBar-COWHZjgz.js";import{T as u}from"./Tooltip-DcxPDA9e.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-_RHeF5kh.js";import"./zIndexSlice-CMn4Cwlm.js";import"./throttle-C3Y4hQMj.js";import"./index-CFtDWJsT.js";import"./index-C4pT71Bv.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CIJSTnSl.js";import"./isWellBehavedNumber-BSYl2eep.js";import"./PolarUtils-CTnnDHZv.js";import"./index-5rk_KAjc.js";import"./index-De4F06zW.js";import"./renderedTicksSlice-CsfsF6Cn.js";import"./axisSelectors-C_hiMAlk.js";import"./d3-scale-DJYjYDtT.js";import"./CartesianChart-DHiwjDYa.js";import"./chartDataContext-MC8Fu7xC.js";import"./CategoricalChart-BQo9vmvV.js";import"./CartesianAxis-dbSJQeo2.js";import"./Layer-DlhGxg7N.js";import"./Text-BLnCmUHB.js";import"./DOMUtils-vSgsVfRP.js";import"./Label-d3wc6rF5.js";import"./ZIndexLayer-feAlcx_0.js";import"./types-Ctdv5TaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./AnimatedItems-xmicP7QL.js";import"./useAnimationId-K2Oa5cBe.js";import"./Curve-Dcq__Vxv.js";import"./step-BcjH0w06.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DM-EFah7.js";import"./Symbols-CUnsQXWy.js";import"./symbol-BBKXJ5vn.js";import"./ActiveShapeUtils-BApyZjjc.js";import"./RegisterGraphicalItemId-Dj61QivB.js";import"./ErrorBarContext-BKnwTpIO.js";import"./GraphicalItemClipPath-8DGGiF_D.js";import"./SetGraphicalItem-jqk9vogH.js";import"./CSSTransitionAnimate-DFB8qR_b.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-CDDZoyN1.js";import"./uniqBy-DQCU_Q9Y.js";import"./iteratee-CC9cIx0G.js";import"./Cross-CxODRasK.js";import"./Rectangle-CRztim86.js";import"./Sector-trkJxZEY.js";const xr={component:p,argTypes:s,docs:{autodocs:!1}},t={render:o=>{const l=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:l,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:n(s),parameters:{controls:{include:["layout","allowDataOverflow"]}}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
