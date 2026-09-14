import{R as t}from"./iframe-C8hleUub.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-abD2mpGE.js";import{R as l}from"./zIndexSlice-vCE-ybpn.js";import{C as x}from"./ComposedChart-Aa5PC5fb.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BB6bVhwI.js";import{L as a}from"./Line-ByuQgILV.js";import{X as c}from"./XAxis-R1M6mi21.js";import{T as g}from"./Tooltip-Vor344cH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Dx4oA-8H.js";import"./Text-CGkuih9W.js";import"./resolveDefaultProps-K4N7KwiK.js";import"./DOMUtils-Chkxh9Pu.js";import"./isWellBehavedNumber-B3eGUodw.js";import"./useId-BChEDpq7.js";import"./useBackwardsCompatibleTheme-D4jGgcPz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFXWo7W3.js";import"./index-YGCqGUHr.js";import"./index-Ybsy0-7F.js";import"./RechartsWrapper-C_qv-3Hz.js";import"./axisSelectors-2_wVdrP-.js";import"./throttle-DqZhpB0B.js";import"./d3-scale-5YAUGhno.js";import"./index-BNE3_iNf.js";import"./index-DRei1T7T.js";import"./renderedTicksSlice-NbxY696c.js";import"./index-D7OGaE6M.js";import"./CartesianAxis-D9UtSAv7.js";import"./Layer-Bnkm0B65.js";import"./types-CanoAHyf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BMIYUzX5.js";import"./chartDataContext-CXErNkaS.js";import"./CategoricalChart-ZxlZFsha.js";import"./AnimatedItems-CjbyLJ1n.js";import"./useAnimationId-lPT865ra.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BI9aQQPe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDBm5gcU.js";import"./tooltipContext-Cum0KugD.js";import"./RegisterGraphicalItemId-BA4uM9gD.js";import"./ErrorBarContext-DZ7sAk5y.js";import"./GraphicalItemClipPath-LpKqTX6v.js";import"./SetGraphicalItem-KHbn2Vk7.js";import"./getZIndexFromUnknown-7Kw6C1Cj.js";import"./useGraphicalItemIdentity-FCLYk-L1.js";import"./Curve-CIcYFtSq.js";import"./step-DrIu7wrv.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CMDHZxxf.js";import"./Dot-CXjyuPw6.js";import"./getRadiusAndStrokeWidthFromDot-DVFiqn2t.js";import"./useElementOffset-BtmZHt_r.js";import"./uniqBy-Czc-xqRe.js";import"./iteratee-BftLTKNs.js";import"./Cross-DQsjb1RE.js";import"./Sector-D28aMowq.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
