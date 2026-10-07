import{R as t}from"./iframe-Cs_QEvnb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BzFBF6j_.js";import{R as l}from"./zIndexSlice-DkQ_r41R.js";import{C as x}from"./ComposedChart-B4x9ib8K.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-5_odZ_ep.js";import{L as a}from"./Line-D7GW9opj.js";import{X as c}from"./XAxis-C6JaM3hk.js";import{T as g}from"./Tooltip-BNYQt66B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-AhMBQLf8.js";import"./Text-xCnIxjvW.js";import"./resolveDefaultProps-DexuDbrM.js";import"./DOMUtils-BYSGKLNe.js";import"./isWellBehavedNumber-Cid5nUs7.js";import"./useId-B0dpXwOa.js";import"./useBackwardsCompatibleTheme-CJoqqjxP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGjzOXsU.js";import"./index-CAK1Ad6q.js";import"./index-MOJSfEXi.js";import"./RechartsWrapper-LSBx4CxW.js";import"./axisSelectors-BjaL6nRE.js";import"./throttle-Dy_oOifq.js";import"./d3-scale-CEFQXImZ.js";import"./index-bdmoNa-p.js";import"./index-CyoiD9ix.js";import"./renderedTicksSlice-BwrC6eZ3.js";import"./index-CKqZwqIV.js";import"./CartesianAxis-Btqo2Ljv.js";import"./Layer-D-shTj0T.js";import"./types-C9b0uGu7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Der_Lez1.js";import"./chartDataContext-CDCJ_kQh.js";import"./CategoricalChart-CewNnnVL.js";import"./AnimatedItems-CbRljsJB.js";import"./useAnimationId-CXhRBgnj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9nz3j4B.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BhwN6W_6.js";import"./tooltipContext-DmYtpYej.js";import"./RegisterGraphicalItemId-rAn7D8nX.js";import"./ErrorBarContext-Ds3D9aj6.js";import"./GraphicalItemClipPath-DfPatAeC.js";import"./SetGraphicalItem-BtIj06CJ.js";import"./getZIndexFromUnknown-C8c2wd7P.js";import"./useGraphicalItemIdentity-DK8Vxub1.js";import"./dataEntryStyles-D2AkB34H.js";import"./Curve-CeUIPmBM.js";import"./step-B6gEEVRS.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BbHlS5_x.js";import"./Dot-BlS3hK8R.js";import"./getRadiusAndStrokeWidthFromDot-CPpHwE7T.js";import"./useElementOffset-BFIrW7Gj.js";import"./uniqBy-D0TPWZAb.js";import"./iteratee-B3WPktIR.js";import"./Cross-HvfR3zEO.js";import"./Sector-C5Q_SGqF.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
