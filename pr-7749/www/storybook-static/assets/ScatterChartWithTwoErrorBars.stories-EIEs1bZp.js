import{R as r}from"./iframe-DTRlEa3u.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-DVckGNEz.js";import{S as p}from"./ScatterChart-DD1M06cJ.js";import{C as d}from"./CartesianGrid-Bk4uziU5.js";import{X as c}from"./XAxis-C0dwGi3V.js";import{Y as y}from"./YAxis-Ds-oNmVm.js";import{S as h}from"./Scatter-DNLvWZ26.js";import{E as e}from"./ErrorBar-DMIFJ57F.js";import{T as u}from"./Tooltip-DkkZSB2g.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-BBFKLgiK.js";import"./zIndexSlice-CDXLYYsJ.js";import"./throttle-D6N_0nid.js";import"./index-CS48B7tj.js";import"./index-o_WhDpRH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJzTCoJ3.js";import"./isWellBehavedNumber-BJiDbB8v.js";import"./PolarUtils-CTnnDHZv.js";import"./axisSelectors-DdPePiMV.js";import"./d3-scale-5lZtxq-z.js";import"./index-CpmklETy.js";import"./index-Cvz-VVDw.js";import"./renderedTicksSlice-CMohq2ew.js";import"./index-BE7ByIQm.js";import"./CartesianChart-C0fRKmIL.js";import"./chartDataContext-0lwkG_AO.js";import"./CategoricalChart-Br64IOu-.js";import"./CartesianAxis-CKsN-hMj.js";import"./Layer-Cxb9aykb.js";import"./Text-BwGttioZ.js";import"./DOMUtils-BlPhfohB.js";import"./useId-DA93zQ1i.js";import"./useBackwardsCompatibleTheme-Tyqh7EHZ.js";import"./Label-CwRVD2C4.js";import"./ZIndexLayer-B42FtzLK.js";import"./types-BPUiziHz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./AnimatedItems-D3NTNo-L.js";import"./useAnimationId-BQWcd1jo.js";import"./Curve-BqpssSWR.js";import"./step-jNVSHd8N.js";import"./path-DyVhHtw_.js";import"./tooltipContext-DfxumADO.js";import"./Symbols-COL8E8J0.js";import"./symbol-QVFjQA5Q.js";import"./ActiveShapeUtils-0NSyvuwL.js";import"./RegisterGraphicalItemId-NS8Y_EHr.js";import"./ErrorBarContext-B04e9oFc.js";import"./GraphicalItemClipPath-DCT6ZGzY.js";import"./SetGraphicalItem-D-a-mss5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CSSTransitionAnimate-B0XfHuaD.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DrFdHzWk.js";import"./uniqBy-C9ZtxYQ4.js";import"./iteratee-BjsuC6vd.js";import"./Cross-UjjRnaQl.js";import"./Rectangle-DwF3_6Yk.js";import"./Sector-BAFgBTSh.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
