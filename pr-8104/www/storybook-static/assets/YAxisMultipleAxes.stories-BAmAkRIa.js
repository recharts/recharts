import{R as t}from"./iframe-BaaAHsSG.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-ChlB0m7y.js";import{R as l}from"./zIndexSlice-BDxXfDj3.js";import{C as x}from"./ComposedChart-Be2dfBSe.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-V0hyFUrF.js";import{L as a}from"./Line-DieT9HS4.js";import{X as c}from"./XAxis-aYI2fpM3.js";import{T as g}from"./Tooltip-we4awqDz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Bv3DZIw1.js";import"./Text-DTGEXNgB.js";import"./resolveDefaultProps-Cr73uuZ7.js";import"./pageBackground-B7fTEEtp.js";import"./ZIndexLayer-CjMMPibs.js";import"./index-D4xmIBj5.js";import"./index-CE_XEtoH.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DEr0nz1I.js";import"./throttle-Dj8lvlLv.js";import"./axisSelectors-D3-EkVgN.js";import"./d3-scale-Ck8yTiZB.js";import"./CartesianAxis-DPnfQAxf.js";import"./Layer-CoUaFIbR.js";import"./types-B5Uvpfau.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BIfFMhm7.js";import"./index-H_I4rIPo.js";import"./index-wqmW4YDp.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-23oR8mwB.js";import"./index-DlVxU2VG.js";import"./CartesianChart-C2TNi3kH.js";import"./ZIndexPortal-uu5Z5Bf6.js";import"./CategoricalChart-BheijUwq.js";import"./LabelList-D5T0UDIp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D1p9HmGl.js";import"./useAnimationId-BBJNRgOy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BWukeBwd.js";import"./tooltipContext-DrhBuj3N.js";import"./dataEntryStyles-B1dajl5B.js";import"./ErrorBarContext-Cye9geJm.js";import"./activeStyles-NrCYIabX.js";import"./SetGraphicalItem-WQYWKVUP.js";import"./getZIndexFromUnknown-8sMKkH9-.js";import"./useEffectiveDataKey-Dr89jUol.js";import"./omit-D2HTLdwC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BPWuJn0g.js";import"./step-YRU5Bg_6.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BGknUoTd.js";import"./Dot-CzIAlgyO.js";import"./Symbols-D2tZDjg2.js";import"./symbol-BJVAlnOc.js";import"./getRadiusAndStrokeWidthFromDot-D47qw3YP.js";import"./useElementOffset-DBon_mrc.js";import"./uniqBy-D8VZiVkQ.js";import"./iteratee-C1Uno3VK.js";import"./Cross-fjJCby9T.js";import"./Sector-DLAMojSd.js";const Lt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
