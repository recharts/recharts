import{R as t}from"./iframe-B8ANsApq.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DqEKkvv0.js";import{R as l}from"./zIndexSlice-Ce8NeCcb.js";import{C as x}from"./ComposedChart-DPkaGwQ5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-lmHej9Xd.js";import{L as a}from"./Line-Be9ktEtH.js";import{X as c}from"./XAxis-DCQ61JnD.js";import{T as g}from"./Tooltip-CJ1B1BAo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CKPEh0-k.js";import"./Text-BYXQaTCF.js";import"./resolveDefaultProps-CEZBLQnS.js";import"./DOMUtils-BNNcxOqL.js";import"./isWellBehavedNumber-C7ukF8ee.js";import"./useId-DgqgElmx.js";import"./useBackwardsCompatibleTheme-DqouWSCS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B21fZXtG.js";import"./index-D6PdJg6F.js";import"./index-DeFSUeff.js";import"./RechartsWrapper-soNVocgi.js";import"./axisSelectors-Cko3d0ja.js";import"./throttle-CG-pSLVK.js";import"./d3-scale-CsEPL9IW.js";import"./index-CLpz5dh6.js";import"./index-MxXQFx09.js";import"./renderedTicksSlice-DCIeAqty.js";import"./index-DgU7AYrg.js";import"./CartesianAxis-DOZB_H9C.js";import"./Layer-DqVYjNpd.js";import"./types-D5aIHjTg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dm1UL_JN.js";import"./chartDataContext-SNmeHJ5h.js";import"./CategoricalChart-ZRjbnEpi.js";import"./AnimatedItems-DxAfvNI2.js";import"./useAnimationId-DSZzieLY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFkr7nJy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-rZqGB1Eg.js";import"./tooltipContext-CRq4HCR_.js";import"./RegisterGraphicalItemId-BQAgbos5.js";import"./ErrorBarContext-mcf9_11T.js";import"./GraphicalItemClipPath-DhvNwCK-.js";import"./SetGraphicalItem-Dza8giNo.js";import"./getZIndexFromUnknown-VIKFuEtd.js";import"./useGraphicalItemIdentity-D-1HP-Kp.js";import"./Curve-CICfeEYZ.js";import"./step-BOqwoOFd.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BPsazN1k.js";import"./Dot-CY3bTNqg.js";import"./getRadiusAndStrokeWidthFromDot-DANmnsHn.js";import"./useElementOffset-DXmsQk-F.js";import"./uniqBy-BCJz43Xm.js";import"./iteratee-8dn2mDC1.js";import"./Cross-BQIxVhY3.js";import"./Sector-CElrKTPl.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
