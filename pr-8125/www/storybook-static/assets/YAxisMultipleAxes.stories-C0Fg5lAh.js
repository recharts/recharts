import{R as t}from"./iframe-DofrrzSz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CsrZD7w1.js";import{R as l}from"./zIndexSlice-D4jXZr7P.js";import{C as x}from"./ComposedChart-CvgJm-V0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bfvx97hH.js";import{L as a}from"./Line-BTgeNYF6.js";import{X as c}from"./XAxis-eOTmMW_3.js";import{T as g}from"./Tooltip-BfuE3aDI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CuxsGsNv.js";import"./Text-CCxE4_21.js";import"./resolveDefaultProps-EpIoYf6A.js";import"./DOMUtils-CiyeVOwd.js";import"./ZIndexLayer-C9xNwEQ1.js";import"./index-CmvIzJTJ.js";import"./index-CiJIMcsu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B2VAv-kj.js";import"./throttle-Cv7JSN-h.js";import"./axisSelectors-pqZm8n4V.js";import"./d3-scale-BRGWuf4p.js";import"./CartesianAxis-BejCdWme.js";import"./Layer-29jH0q4c.js";import"./types-DwbSI8T9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C12QoSei.js";import"./index-BJz466Uq.js";import"./index-CebJFPbx.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-E_-kYNca.js";import"./index-MFcngAQ7.js";import"./CartesianChart-ofW7KWWn.js";import"./ZIndexPortal-D6LzzXvN.js";import"./CategoricalChart-swxT2d4I.js";import"./LabelList-CvvaVn8W.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DH-fHCjZ.js";import"./useAnimationId-DIc4f048.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C_2mrMKm.js";import"./tooltipContext-eCkchuHu.js";import"./dataEntryStyles-DuwvESx8.js";import"./themeFill-BkM1x4hA.js";import"./ErrorBarContext-Be2kUHyO.js";import"./activeStyles-DFxA9Zbs.js";import"./SetGraphicalItem-VPByvNpp.js";import"./getZIndexFromUnknown-whhWsiF3.js";import"./useEffectiveDataKey-kz6GzdqE.js";import"./omit-CEqwGjdZ.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CgPD96Nk.js";import"./step-B24WZLE3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DD_thTv0.js";import"./Dot-OjOZfNpf.js";import"./Symbols-DBYIMXup.js";import"./symbol-BNKxEPpC.js";import"./getRadiusAndStrokeWidthFromDot-Cwz8hFM3.js";import"./useElementOffset-4AYFNtWz.js";import"./uniqBy-DXDzCPGj.js";import"./iteratee-BW9bJqkP.js";import"./Cross-Ct78yXXS.js";import"./Sector-DZJ-f5iW.js";const Tt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
