import{R as t}from"./iframe-C8yGgO2d.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CkFD-fPK.js";import{R as l}from"./zIndexSlice-CuRdZ-8K.js";import{C as x}from"./ComposedChart-D2wyoHi-.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-C0m_JxaU.js";import{L as a}from"./Line-CY3J4eK2.js";import{X as c}from"./XAxis-DkqGLCT1.js";import{T as g}from"./Tooltip-Bx4PzmEf.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtCjiiK8.js";import"./Text-N9mhAN-H.js";import"./resolveDefaultProps-BEnwhFtj.js";import"./DOMUtils-BOgsOCmi.js";import"./isWellBehavedNumber-P0iskoF8.js";import"./useId-CKVmols2.js";import"./useBackwardsCompatibleTheme-AfUploH6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C7uHg4Vj.js";import"./index-DWs1UuF8.js";import"./index-B_Sqvp8j.js";import"./RechartsWrapper-DxEsBzKb.js";import"./axisSelectors-w7bw2H0b.js";import"./throttle-Dr0khojT.js";import"./d3-scale-Cb_6Er0t.js";import"./index-_ZrsSmBD.js";import"./index-C4w1OcUY.js";import"./renderedTicksSlice-D5n2q9tr.js";import"./index-_435W0Be.js";import"./CartesianAxis-BHyGAXdi.js";import"./Layer-tDZThP1f.js";import"./types-DDTipNBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-NwzcHRhr.js";import"./chartDataContext-CYKs2BJc.js";import"./CategoricalChart-3Evm6NoG.js";import"./AnimatedItems-DmW46OuC.js";import"./useAnimationId-Bie7xBo-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMqwvRGF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BmVfGkD_.js";import"./tooltipContext-D2TMP3rH.js";import"./RegisterGraphicalItemId-BaYY2Lpp.js";import"./ErrorBarContext-DNGGPxUD.js";import"./GraphicalItemClipPath-DlJK_MCm.js";import"./SetGraphicalItem-DHV9mQDm.js";import"./getZIndexFromUnknown-C_-Lvn3v.js";import"./useGraphicalItemIdentity-B0pPIliE.js";import"./Curve-B2EBLnIf.js";import"./step-B4o5Q5Gu.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C28DYC0S.js";import"./Dot-Ckq5Sos6.js";import"./getRadiusAndStrokeWidthFromDot-CC1av9L5.js";import"./useElementOffset-CgrUACTV.js";import"./uniqBy-DkfDDjH9.js";import"./iteratee-Bma5tZ2w.js";import"./Cross-COEIgewd.js";import"./Sector-mrYfdzE_.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
