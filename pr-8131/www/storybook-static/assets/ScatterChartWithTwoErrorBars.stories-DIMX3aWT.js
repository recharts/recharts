import{R as r}from"./iframe-DRd8L1ij.js";import{g as l}from"./utils-ePvtT4un.js";import{S as m}from"./ScatterChartArgs-BpaDSsyX.js";import{S as p}from"./ScatterChart-DcjYWiJR.js";import{C as d}from"./CartesianGrid-5glYr1GN.js";import{X as c}from"./XAxis-DYHP_qTD.js";import{Y as y}from"./YAxis-Dzj0j6ti.js";import{S as h}from"./Scatter-D3qh9vzf.js";import{E as e}from"./ErrorBar-CqGEx2Jz.js";import{T as u}from"./Tooltip-CGl1c65o.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-CVHpNPrj.js";import"./zIndexSlice-DWK0mKBW.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps--2iGUKCh.js";import"./throttle-BZHSEq8k.js";import"./index-DuLNwG6c.js";import"./index-GNzKGxFd.js";import"./axisSelectors-DKYErlU4.js";import"./polarAxisSelectors-B7CzXU5n.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Degm7ixx.js";import"./index-BOBLZBKw.js";import"./index-BnUkaxQb.js";import"./renderedTicksSlice-VRZysoJN.js";import"./index-DZh8SmTQ.js";import"./fillDefinitions-BcJsDDFO.js";import"./CartesianChart-xzJeK0ZT.js";import"./ZIndexPortal-BX35EtJy.js";import"./CategoricalChart-C3H_aI_M.js";import"./CartesianAxis-BCEsA_1Q.js";import"./Layer-C-w_mvnX.js";import"./Text-DOqNkwx7.js";import"./DOMUtils-BMkGHkgN.js";import"./ZIndexLayer-BYH3DLDW.js";import"./Label-Dlqk38Aa.js";import"./types-99rmuj1o.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./LabelList-C56jidjO.js";import"./activeStyles-N3dA5laV.js";import"./useAnimationId-C1EYHtHK.js";import"./dataEntryStyles-CMr7JuEI.js";import"./Curve-B3UG50Pe.js";import"./step-CVL70ILG.js";import"./path-DyVhHtw_.js";import"./tooltipContext-B2CjN-pI.js";import"./Symbols-C10Tu53k.js";import"./symbol-CYG96CRr.js";import"./ActiveShapeUtils-Dj9_Xfwc.js";import"./ErrorBarContext-DGvI8kwC.js";import"./SetGraphicalItem-Cted8rHa.js";import"./useEffectiveDataKey-C0wXpfOI.js";import"./CSSTransitionAnimate-CPAkwZhy.js";import"./util-Dxo8gN5i.js";import"./useElementOffset-DvtLZm2w.js";import"./uniqBy-CQ6eO9fT.js";import"./iteratee-0XuJHBpI.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C3EgGr3a.js";import"./Rectangle-DdQ2_4X9.js";import"./Sector-BQUVlDaO.js";const Sr={component:p,argTypes:m,docs:{autodocs:!1}},t={render:o=>{const s=[{x:100,y:200,errorY:30,errorX:30},{x:120,y:100,errorY:[500,30],errorX:[200,30]},{x:170,y:300,errorY:[10,20],errorX:20},{x:140,y:250,errorY:30,errorX:20},{x:150,y:400,errorY:[20,300],errorX:30},{x:110,y:280,errorY:40,errorX:40}];return r.createElement(p,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20},layout:o.layout},r.createElement(d,null),r.createElement(c,{type:"number",dataKey:"x",name:"stature",unit:"cm",allowDataOverflow:o.allowDataOverflow}),r.createElement(y,{type:"number",dataKey:"y",name:"weight",unit:"kg",allowDataOverflow:o.allowDataOverflow}),r.createElement(h,{name:"A school",data:s,fill:"blue"},r.createElement(e,{dataKey:"errorX",width:2,strokeWidth:3,stroke:"green",direction:"x"}),r.createElement(e,{dataKey:"errorY",width:4,strokeWidth:2,stroke:"red",direction:"y"})),r.createElement(u,{cursor:{strokeDasharray:"3 3"}}))},args:l(m),parameters:{controls:{include:["layout","allowDataOverflow"]}}},Dr=["WithErrorBarsAndExtendedDomain"];var a,n,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
