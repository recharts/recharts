import{R as t}from"./iframe-Xtjdy8K6.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-C0P2yrRK.js";import{R as l}from"./zIndexSlice-Ca3_di9O.js";import{C as x}from"./ComposedChart-By0nh5Tu.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BtUwrZ5H.js";import{L as a}from"./Line-ClPESsPf.js";import{X as c}from"./XAxis-Dsuy05EW.js";import{T as g}from"./Tooltip-BaBPOWSY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BQUl4kmN.js";import"./Text-LNKD3nQn.js";import"./resolveDefaultProps-Boep7u7P.js";import"./DOMUtils-BmMu5huz.js";import"./isWellBehavedNumber-CZ785SIV.js";import"./useId-DBEZo7IS.js";import"./useBackwardsCompatibleTheme-JVp1trOZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B714zacF.js";import"./index-CD-q9qaf.js";import"./index-I4ONaVXX.js";import"./RechartsWrapper-DLU1mxV-.js";import"./axisSelectors-CubJTdeO.js";import"./throttle-BJfO_UKv.js";import"./d3-scale-DZ-m0TzD.js";import"./index-BwTAVpnp.js";import"./index-DLvKfnax.js";import"./renderedTicksSlice-BtArWvvy.js";import"./index-Cf61T-z_.js";import"./CartesianAxis-CmHtOK-l.js";import"./Layer-FeyHjh4s.js";import"./types-DxDlUmLu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-uyYSGYFX.js";import"./chartDataContext-h8VmgL2W.js";import"./CategoricalChart-BG0XVVA5.js";import"./AnimatedItems-CiMNNQac.js";import"./useAnimationId-CuSCtoXZ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BLk0GJfh.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-kAxIXwKe.js";import"./tooltipContext-DDJBG4_2.js";import"./RegisterGraphicalItemId-5IcKOSXK.js";import"./ErrorBarContext-DcFzK2E8.js";import"./GraphicalItemClipPath-CULhMThP.js";import"./SetGraphicalItem-BUfBrIkK.js";import"./getZIndexFromUnknown-DFZXDwtS.js";import"./useGraphicalItemIdentity-BFTytd0c.js";import"./dataEntryStyles-BP_gmuxC.js";import"./Curve-_q4HdrfF.js";import"./step-C43hkdfh.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B88QV3Sj.js";import"./Dot-D52dYvYg.js";import"./getRadiusAndStrokeWidthFromDot-DLeCgjsD.js";import"./useElementOffset-DRzU6VaK.js";import"./uniqBy-C0abLPcx.js";import"./iteratee-CxPVqHqK.js";import"./Cross-BOVKbuFH.js";import"./Sector-BUmVWEQm.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Lt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
