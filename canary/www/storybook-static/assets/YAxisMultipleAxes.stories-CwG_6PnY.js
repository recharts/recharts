import{R as t}from"./iframe-CeCOqiJm.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-A7bYD_ch.js";import{R as l}from"./zIndexSlice-DdaMb5XG.js";import{C as x}from"./ComposedChart-DgluM-g0.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BJZl1kgz.js";import{L as a}from"./Line-C5ZRb_5H.js";import{X as c}from"./XAxis-C64KB_q-.js";import{T as g}from"./Tooltip-B4kC64qA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Xd_rxrmK.js";import"./Text-DDswsbtv.js";import"./resolveDefaultProps-CkuoYXav.js";import"./DOMUtils-BCUi_GUC.js";import"./isWellBehavedNumber-B7aD_M3c.js";import"./useId-Bah-b0hR.js";import"./useBackwardsCompatibleTheme-C_9NEiLi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQtw6wpF.js";import"./index-B9TMiPeS.js";import"./index-Dpi_zLnO.js";import"./RechartsWrapper-DkI5rWg4.js";import"./axisSelectors-DY_V65z5.js";import"./throttle-Bex5NkUv.js";import"./d3-scale-Cd6mqy1G.js";import"./index-D0EsppEB.js";import"./index-DrQMD2ku.js";import"./renderedTicksSlice-Bncz9dIB.js";import"./index-DRO0vfdx.js";import"./CartesianAxis-VCLAEQIg.js";import"./Layer-DpcMSheP.js";import"./types-m_9hz0N1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DsDUvZ6B.js";import"./chartDataContext-CJlR_4xR.js";import"./CategoricalChart-DiPqSwwe.js";import"./AnimatedItems-Di-68duO.js";import"./useAnimationId-CPtx5Z6n.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Td5JxEu-.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FS6Mn2Zl.js";import"./tooltipContext-Cy5-H8MU.js";import"./RegisterGraphicalItemId-BNFTgn8t.js";import"./ErrorBarContext-C_Gf5gdw.js";import"./GraphicalItemClipPath-CNDfJ_fQ.js";import"./SetGraphicalItem-DcgFqiOy.js";import"./getZIndexFromUnknown-CLviD0v0.js";import"./useGraphicalItemIdentity-BZQpyUJc.js";import"./dataEntryStyles-C8u8nikw.js";import"./Curve-ig6Db0bN.js";import"./step-D1fpC4Ci.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BK3_tt-0.js";import"./Dot-DoByF9sv.js";import"./getRadiusAndStrokeWidthFromDot-r7hnUPNX.js";import"./useElementOffset-CZclPecY.js";import"./uniqBy-BFlog4hA.js";import"./iteratee-DngjopU3.js";import"./Cross-BSxKHq8j.js";import"./Sector-CiPHfOJS.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
