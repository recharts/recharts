import{R as t}from"./iframe-CvKbIuDU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DizKApNp.js";import{R as l}from"./zIndexSlice-DW-S4til.js";import{C as x}from"./ComposedChart-jlJOyNP5.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-k9Sfc-WZ.js";import{L as a}from"./Line-1Tl5OsJ3.js";import{X as c}from"./XAxis-Dp4FSOnR.js";import{T as g}from"./Tooltip-B_QeyoPN.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C9wGNRIk.js";import"./Text-B6N2t5jR.js";import"./resolveDefaultProps-DyOOAUIY.js";import"./pageBackground-ChMXawke.js";import"./isWellBehavedNumber-DlUs4F_M.js";import"./useId-6H2iqgtd.js";import"./useBackwardsCompatibleTheme-CkVmHcf-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4jXpx6X.js";import"./index-Z4qAt8Yv.js";import"./index-BVbsRhGr.js";import"./axisSelectors-BV2JW9EX.js";import"./throttle-BTM8S8gx.js";import"./d3-scale-C5aBguhN.js";import"./CartesianAxis-BYZAVmga.js";import"./Layer-BNmLXrt-.js";import"./types-ChWN3J9r.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BomOCwRS.js";import"./index-BexOrbLc.js";import"./index-BIyuXW6c.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Di3s7bBT.js";import"./index-B5qL6Iq2.js";import"./CartesianChart-CQJv70kz.js";import"./chartDataContext-CefKEXER.js";import"./CategoricalChart-BbjDOIaW.js";import"./activeStyles-Cf2oumzq.js";import"./useAnimationId-DTylORVO.js";import"./dataEntryStyles-DpltKyOE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ca8NWDZ8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DkA-OS5a.js";import"./tooltipContext-Cr6CIjgJ.js";import"./ErrorBarContext-DAV26R-G.js";import"./GraphicalItemClipPath-BmBLy2cz.js";import"./SetGraphicalItem-fk9D7m_b.js";import"./getZIndexFromUnknown-v3HFmQ3v.js";import"./useEffectiveDataKey-DWaNxJOV.js";import"./Curve-CkMLKDtn.js";import"./step-DZOnd08g.js";import"./path-DyVhHtw_.js";import"./ActivePoints-D5UTi5xW.js";import"./Dot-DCFEnowe.js";import"./getRadiusAndStrokeWidthFromDot-Dk6kygWL.js";import"./useElementOffset-Bml3kAbb.js";import"./uniqBy-CQiqXRxs.js";import"./iteratee-CRQDYF1S.js";import"./Cross-_edP6GcA.js";import"./Sector-YOyxb4oy.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
