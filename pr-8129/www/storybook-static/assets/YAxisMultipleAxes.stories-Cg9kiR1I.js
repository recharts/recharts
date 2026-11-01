import{R as t}from"./iframe-0ard7KC3.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DAk7UonM.js";import{R as l}from"./zIndexSlice-D6_sdm0t.js";import{C as x}from"./ComposedChart-BAfLIPPg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DmSz-h98.js";import{L as a}from"./Line-D3ULcpWK.js";import{X as c}from"./XAxis-BVBrGZek.js";import{T as g}from"./Tooltip-CXNDKna3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bzl5TsqO.js";import"./Text-BVN9ck4W.js";import"./resolveDefaultProps-BPB9Gu5f.js";import"./DOMUtils-DPHrecH2.js";import"./pageBackground-C8Mqnqon.js";import"./ZIndexLayer-Xk93xkJ7.js";import"./index-BOEtp96n.js";import"./index-JVAEaqaY.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-3HyfX2K5.js";import"./throttle-1OYicAaw.js";import"./axisSelectors-Cr_3x7-m.js";import"./d3-scale-CLPwnwVf.js";import"./CartesianAxis-CO2WQovg.js";import"./Layer-C0FwdD0E.js";import"./types-DiLmbnVu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D50-krNg.js";import"./index-9PVjWb0J.js";import"./index-CsSqo8aU.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOxuYrqk.js";import"./index-ByhU0DDr.js";import"./CartesianChart-CQQLqvcY.js";import"./ZIndexPortal-Cak7rTbR.js";import"./CategoricalChart-DbqXM1OT.js";import"./LabelList-fTXqNJ75.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C4AL_ut7.js";import"./fillDefinitions-CarsCIb_.js";import"./useAnimationId-DI_YvP-u.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Uo1E3VyC.js";import"./tooltipContext-Z31KWbAp.js";import"./dataEntryStyles-BOdZqKVH.js";import"./ErrorBarContext-Dy4MR2nb.js";import"./activeStyles-7ntMjbeG.js";import"./SetGraphicalItem-CY1fZPiL.js";import"./getZIndexFromUnknown-DOthoFGW.js";import"./useEffectiveDataKey-BiPIBSbw.js";import"./omit-CZreW73s.js";import"./isArguments-yB-y1yaH.js";import"./Curve-N3TADMlP.js";import"./step-Qo2aOxrQ.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DWkJMBKo.js";import"./Dot-CmHWeTnm.js";import"./Symbols-lsHxNSE5.js";import"./symbol-BoiiS6VD.js";import"./getRadiusAndStrokeWidthFromDot-CnAH_jdf.js";import"./useElementOffset-DpbXbWGx.js";import"./uniqBy-BJs_UcfY.js";import"./iteratee-B5R2H-12.js";import"./Cross-CIO300v-.js";import"./Sector-CGQeWo1Z.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
