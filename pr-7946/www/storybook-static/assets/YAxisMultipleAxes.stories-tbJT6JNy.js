import{R as t}from"./iframe-Cz1yxjbp.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-YGbQi-tl.js";import{R as l}from"./zIndexSlice-DX3VWAAP.js";import{C as x}from"./ComposedChart-B3FIpviW.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CNZItV1l.js";import{L as a}from"./Line-DOXtn5Fz.js";import{X as c}from"./XAxis-DTtwNRvk.js";import{T as g}from"./Tooltip-DIfKxzT5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CKYWHIAB.js";import"./Text-Ct14p3WC.js";import"./resolveDefaultProps-C4uWhlBE.js";import"./pageBackground-Aluj06Yi.js";import"./isWellBehavedNumber-DJ2sQW5i.js";import"./useId-BgDV8Bbk.js";import"./useBackwardsCompatibleTheme-DMuqWF8p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CpvAEusS.js";import"./index-Dy-7Z4OS.js";import"./index-BeLMDhbN.js";import"./RechartsWrapper-DNAVCaGG.js";import"./axisSelectors-aNzSC39T.js";import"./throttle-C8kMLDgG.js";import"./d3-scale-DcjoLk-1.js";import"./index-Cvw52HpG.js";import"./index-CrhYCmzz.js";import"./renderedTicksSlice-B4zhNEhU.js";import"./index-BH1YgSAq.js";import"./CartesianAxis-C6EZvJj2.js";import"./Layer-DX0-A7eX.js";import"./types-CaS-TM-K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bs3sClFN.js";import"./chartDataContext-D9TeAJoj.js";import"./CategoricalChart-L3mAew-j.js";import"./activeStyles-DBmoV7wT.js";import"./useAnimationId-Bstcgfr3.js";import"./dataEntryStyles-Cvogs2XX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DcCVFLvW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-TTXriytS.js";import"./tooltipContext-Dfsd04Pr.js";import"./ErrorBarContext-Dxzs7LXM.js";import"./GraphicalItemClipPath-C4RVkUJq.js";import"./SetGraphicalItem-DcIBNzJU.js";import"./getZIndexFromUnknown-D0hbVpGK.js";import"./useGraphicalItemIdentity-D9IvhHId.js";import"./Curve-BuFNKnyX.js";import"./step-BxjwmJ_I.js";import"./path-DyVhHtw_.js";import"./ActivePoints-fNvRWKnn.js";import"./Dot-FtP_Pc_K.js";import"./getRadiusAndStrokeWidthFromDot-CVKuJNBK.js";import"./useElementOffset-CcHwamEz.js";import"./uniqBy-BPDtNAS2.js";import"./iteratee-DKkbZcMa.js";import"./Cross-CAFBXUU8.js";import"./Sector-D3hQT5GS.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
