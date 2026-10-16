import{R as t}from"./iframe-Dw3JnrOz.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D8Dw7kMb.js";import{R as l}from"./zIndexSlice-DzgPoe88.js";import{C as x}from"./ComposedChart-Dn-ywIPu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-CY3ONHkO.js";import{L as a}from"./Line-DnOr9vmN.js";import{X as c}from"./XAxis-CeCu2pnu.js";import{T as g}from"./Tooltip-DLsW_sVW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cbir5i7I.js";import"./Text-DV8khfZM.js";import"./resolveDefaultProps-DK31nY-V.js";import"./pageBackground-tLsrP4n_.js";import"./isWellBehavedNumber-OYIp1mp-.js";import"./useId-BKsEmLHH.js";import"./useBackwardsCompatibleTheme-C2fZnq5O.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BbE4uISJ.js";import"./index-AkdZgKxJ.js";import"./index-Df7xC6ih.js";import"./axisSelectors-BViTer26.js";import"./throttle-KuOt2oEs.js";import"./d3-scale-DtTNlvys.js";import"./CartesianAxis-ChIBsRH5.js";import"./Layer-L7RVOPKy.js";import"./types-B5MEMPd3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CkYrDZg9.js";import"./index-NzzUdmM6.js";import"./index-eNZ0M5_3.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DgRfQaZT.js";import"./index-6yBVDhmv.js";import"./CartesianChart-jDDHmd1k.js";import"./chartDataContext-DUv1rr29.js";import"./CategoricalChart-CiCkCm9Q.js";import"./activeStyles-D2NfbCgD.js";import"./useAnimationId-w1IecijC.js";import"./dataEntryStyles-BN9XKvZb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdI5JjXa.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BJ0fejl7.js";import"./tooltipContext-Bpw82xyU.js";import"./ErrorBarContext-BDhr-5sg.js";import"./GraphicalItemClipPath-CB4KxVAO.js";import"./SetGraphicalItem-DfUVqQ_3.js";import"./getZIndexFromUnknown-BpbcoR1O.js";import"./useEffectiveDataKey-CnfRoJ-A.js";import"./Curve-CzvKCniC.js";import"./step-D848BMKt.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BwSbWjwk.js";import"./Dot-BIHGbHYm.js";import"./getRadiusAndStrokeWidthFromDot-5uL5_6G5.js";import"./useElementOffset-CR-G88er.js";import"./uniqBy-rRKFTRx_.js";import"./iteratee-BZWaCfv1.js";import"./Cross-CaPmRdVx.js";import"./Sector-DR8brdmt.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
