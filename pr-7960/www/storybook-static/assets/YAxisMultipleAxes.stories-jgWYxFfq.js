import{R as t}from"./iframe-BuvSZiBU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-BWzjkf00.js";import{R as l}from"./zIndexSlice-CQnbxV7B.js";import{C as x}from"./ComposedChart-C5RBlYP6.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BQlEGNid.js";import{L as a}from"./Line-BUpD7j4-.js";import{X as c}from"./XAxis-BOfa2s22.js";import{T as g}from"./Tooltip-BZ4jR-Jc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-w8cJkoy5.js";import"./Text-BkZYuu7y.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./pageBackground-BDR7TGLv.js";import"./isWellBehavedNumber-B_8a6RB1.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CF-B9exK.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./axisSelectors-DGKzkChq.js";import"./throttle-Csayz_X_.js";import"./d3-scale-B4_DxsXg.js";import"./CartesianAxis-BUinM5G-.js";import"./Layer-DVAnIpPd.js";import"./types-EtJbnETm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DMwFRg1j.js";import"./index-Coj2gvLu.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./activeStyles-BmupzAye.js";import"./useAnimationId-CdC3v3R9.js";import"./dataEntryStyles-C1ODZzqS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSr8qKkL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FNOwuhtO.js";import"./tooltipContext-DYqSTMxA.js";import"./ErrorBarContext-PD-ezkzm.js";import"./GraphicalItemClipPath-a3qbNX5k.js";import"./SetGraphicalItem-DyRgogdT.js";import"./getZIndexFromUnknown-BrjENlMN.js";import"./useEffectiveDataKey-DUlUrCLD.js";import"./Curve-DvYuS0m6.js";import"./step-ozWCT_4L.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CYsghgN3.js";import"./Dot-BP5vqlI3.js";import"./getRadiusAndStrokeWidthFromDot-JbdAO9HR.js";import"./useElementOffset-tkb_p-rH.js";import"./uniqBy-BFPywt7W.js";import"./iteratee-DgIW1Mxm.js";import"./Cross-CJRlAvh_.js";import"./Sector-DP_bKBS8.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
