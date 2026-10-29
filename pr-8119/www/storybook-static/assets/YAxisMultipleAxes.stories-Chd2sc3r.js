import{R as t}from"./iframe-FiuXs261.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CQrrt2_W.js";import{R as l}from"./zIndexSlice-D8yz0c_i.js";import{C as x}from"./ComposedChart-SOQGKxcc.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CUK0I8Rp.js";import{L as a}from"./Line-M2EO-pwK.js";import{X as c}from"./XAxis-Bb3iEGS4.js";import{T as g}from"./Tooltip-DNkwbJ_j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DgCFchF-.js";import"./Text-CNbe1Pgb.js";import"./resolveDefaultProps-BihUq3X9.js";import"./DOMUtils-DMtknFU5.js";import"./ZIndexLayer-BuK4cbp4.js";import"./index-LYf9fdMT.js";import"./index-CrJ_p8tR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C8b7BSTM.js";import"./throttle-CYeAiCIk.js";import"./axisSelectors-C9DIlOnm.js";import"./d3-scale-CtDFr3v-.js";import"./CartesianAxis-pVZ2WZ4j.js";import"./Layer-BMNQgcyM.js";import"./types-CG6SsZFp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B2WUnf26.js";import"./index-I95GPJkK.js";import"./index-CGxDoIWw.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-PYqIov25.js";import"./index-C5CBIWPP.js";import"./CartesianChart-BGhHw0Sw.js";import"./ZIndexPortal-a8T82K_T.js";import"./CategoricalChart-C7XeD-rb.js";import"./LabelList-DRqt9mVh.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdyI-Bgs.js";import"./useAnimationId-DgiqBF0b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D11w1Cqa.js";import"./tooltipContext-CC3jJT2U.js";import"./dataEntryStyles-BABJdaaS.js";import"./ErrorBarContext-GrhwdkVF.js";import"./activeStyles-DrCvysIi.js";import"./SetGraphicalItem-CXpshRR6.js";import"./getZIndexFromUnknown-BvK_lcqb.js";import"./useEffectiveDataKey-BS1bhAcI.js";import"./fillDefinitions-B2wKYMmC.js";import"./omit-mz84Hprx.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CjJsHvFZ.js";import"./step-AV-3KlMf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-Ddv2UM3f.js";import"./Dot-BFh-_60U.js";import"./Symbols-vnM3HbbD.js";import"./symbol-DlnVlajL.js";import"./getRadiusAndStrokeWidthFromDot-4di0vwKC.js";import"./useElementOffset-Cyn2xwTz.js";import"./uniqBy-Cb3-fOKb.js";import"./iteratee-DOdgceK_.js";import"./Cross-CAe0pQFZ.js";import"./Sector-DtW55Dmb.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Wt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Wt as __namedExportsOrder,Tt as default};
