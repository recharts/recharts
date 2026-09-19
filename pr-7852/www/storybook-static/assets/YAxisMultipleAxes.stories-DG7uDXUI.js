import{R as t}from"./iframe-Bh4IukvS.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CydhA_LO.js";import{R as l}from"./zIndexSlice-BnhPp-nh.js";import{C as x}from"./ComposedChart-qa2sMwNO.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-ESxCekV8.js";import{L as a}from"./Line-f5GS_QI0.js";import{X as c}from"./XAxis-DTE5zt6_.js";import{T as g}from"./Tooltip-f0mGnhlc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B71mUMe3.js";import"./Text-ByHw94zt.js";import"./resolveDefaultProps-CS55fj5A.js";import"./DOMUtils-jG16kJ-0.js";import"./isWellBehavedNumber-COGARIBs.js";import"./useId-DUPaFVMq.js";import"./useBackwardsCompatibleTheme-BGwCHVGE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-HUNPQO7Y.js";import"./index-BAvBYzvL.js";import"./index-Bd7C7KEc.js";import"./RechartsWrapper-CloVGpsi.js";import"./axisSelectors-C8F9z3Z9.js";import"./throttle-CXYaw1-J.js";import"./d3-scale-BYEA786G.js";import"./index-BSsixbSb.js";import"./index-Xb0OYFJE.js";import"./renderedTicksSlice-DKLC06E4.js";import"./index-BoLfeuKb.js";import"./CartesianAxis-Ds6tzB92.js";import"./Layer-O2qI8LTc.js";import"./types-kFpO5oed.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BfQhJC72.js";import"./chartDataContext-BtR7OiSm.js";import"./CategoricalChart-Cv2qqsYa.js";import"./AnimatedItems-D-YvBlp4.js";import"./useAnimationId-DwO0dP0K.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CrdePQGE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DP7EI6-I.js";import"./tooltipContext-zkadhmnz.js";import"./RegisterGraphicalItemId-_cXLNg8O.js";import"./ErrorBarContext-CofrBm2P.js";import"./GraphicalItemClipPath-B9NNnVgG.js";import"./SetGraphicalItem-DSGRIbG0.js";import"./getZIndexFromUnknown-B2B-cbVB.js";import"./useGraphicalItemIdentity-Dsj7jE7N.js";import"./Curve-CAOammAF.js";import"./step-Dbp5foHF.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DirNCRmn.js";import"./Dot-C6mQoDM6.js";import"./getRadiusAndStrokeWidthFromDot-B2N3Oqao.js";import"./useElementOffset-DldO0h5h.js";import"./uniqBy-DsAZzQBt.js";import"./iteratee-DfIYWyJS.js";import"./Cross-D1wayU0t.js";import"./Sector-CNvaOfwH.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
