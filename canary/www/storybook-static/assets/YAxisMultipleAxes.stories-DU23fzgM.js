import{R as t}from"./iframe-BR9um8hy.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BaWzKsyn.js";import{R as l}from"./zIndexSlice-DInTlpQm.js";import{C as x}from"./ComposedChart-BVZ7f1kE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CIpcH6zZ.js";import{L as a}from"./Line-B2Y8w_7v.js";import{X as c}from"./XAxis-Df2VZum-.js";import{T as g}from"./Tooltip-D273-kUD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DksyNS0g.js";import"./Text-CRGxz7fL.js";import"./resolveDefaultProps-DqQmI4tj.js";import"./DOMUtils-Duc3pHlK.js";import"./isWellBehavedNumber-DRhRXNpZ.js";import"./useId-BgrQ9U0l.js";import"./useBackwardsCompatibleTheme-DOuVjsc2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BGQSpetD.js";import"./index-C-g-WGda.js";import"./index-DxJwgSab.js";import"./RechartsWrapper-Dp-C2Hzh.js";import"./axisSelectors-AyLSKa9B.js";import"./throttle-BcqT3vfz.js";import"./d3-scale-CDw_eAgY.js";import"./index-BkxIjOFS.js";import"./index-BFcGxk9F.js";import"./renderedTicksSlice-CoNN11f9.js";import"./index-DXgo6F3y.js";import"./CartesianAxis-Ctt1NdjE.js";import"./Layer-BBDuFZTy.js";import"./types-C8x07v5_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DZcLq4iA.js";import"./chartDataContext-Bt8Fe_rW.js";import"./CategoricalChart-DmGnRbfN.js";import"./AnimatedItems-DpNUe9OS.js";import"./useAnimationId-CK-e-_3G.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D94O9QXF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8gsJAZs.js";import"./tooltipContext-Cshj8m1b.js";import"./RegisterGraphicalItemId-BT1l9jKw.js";import"./ErrorBarContext-B2oMN3ea.js";import"./GraphicalItemClipPath-D0pxdHNA.js";import"./SetGraphicalItem-CjDcCpNq.js";import"./getZIndexFromUnknown-BC2sAx_4.js";import"./useGraphicalItemIdentity-BYoj9he0.js";import"./Curve-C4vXdRCg.js";import"./step-Dcjunjbb.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D1dlEVO6.js";import"./Dot-C4b3VHLo.js";import"./getRadiusAndStrokeWidthFromDot-D1WfNQgz.js";import"./useElementOffset-Buf92wBZ.js";import"./uniqBy-CLhcCcda.js";import"./iteratee-RhNK36r-.js";import"./Cross-5yNRVGnj.js";import"./Sector-CbKiosjF.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
