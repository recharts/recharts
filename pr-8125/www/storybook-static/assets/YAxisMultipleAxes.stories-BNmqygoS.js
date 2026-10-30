import{R as t}from"./iframe-C9f0XnT9.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D9OAInhW.js";import{R as l}from"./zIndexSlice-CHa-NfW0.js";import{C as x}from"./ComposedChart-ta3a0B_A.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BpGF-611.js";import{L as a}from"./Line-DpXuZWHU.js";import{X as c}from"./XAxis-C5bj5GgQ.js";import{T as g}from"./Tooltip-DluwIS9N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-HDB1mOS9.js";import"./Text-BBa2fCF5.js";import"./resolveDefaultProps-OglZgdvE.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./throttle-KQYU95ys.js";import"./axisSelectors-DJl001RI.js";import"./d3-scale-BRci95pZ.js";import"./CartesianAxis-C2y0lK-Z.js";import"./Layer-BGqt9quM.js";import"./types-Cq0tVQAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-Bf7Rq1hF.js";import"./index-C_QD7AAh.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtDu-9p6.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./LabelList-CjS5fbS8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGCSZqUI.js";import"./useAnimationId-BNUZJ-Q8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./tooltipContext-DUeYh7_A.js";import"./dataEntryStyles-Bof1DRSv.js";import"./ErrorBarContext-BjUzcwSB.js";import"./activeStyles-BitiIAzx.js";import"./SetGraphicalItem-BKb40hJg.js";import"./getZIndexFromUnknown-BmwONUf1.js";import"./useEffectiveDataKey-B2_fgQbM.js";import"./omit-A9eYUcZ3.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BuH0ARbV.js";import"./step-D2_GuXTT.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CjTQST-x.js";import"./Dot-Dha_7IA1.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./getRadiusAndStrokeWidthFromDot-B1pkRXwd.js";import"./useElementOffset-BPNvSWcg.js";import"./uniqBy-DOejL97I.js";import"./iteratee-Bq0h_QlS.js";import"./Cross-o-VimJqX.js";import"./Sector-CaH0HsK_.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Tt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Tt as __namedExportsOrder,Lt as default};
