import{R as t}from"./iframe-DwjhlfMW.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DCYSznIj.js";import{R as l}from"./zIndexSlice-B1eqx357.js";import{C as x}from"./ComposedChart-Bfl28-Ka.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BwVjV1PL.js";import{L as a}from"./Line-LIz09oAh.js";import{X as c}from"./XAxis-BypJb1q6.js";import{T as g}from"./Tooltip-DyRyfAKd.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CDX3QCgQ.js";import"./Text-Fn7sKK4t.js";import"./resolveDefaultProps-CEwq-pLy.js";import"./DOMUtils-DNcH8Otg.js";import"./isWellBehavedNumber-Ck5vetYF.js";import"./useId-CjpXrJxi.js";import"./useBackwardsCompatibleTheme-B5uR-87m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D63gMRTb.js";import"./index-DEuGyOjS.js";import"./index-BGwBnv2j.js";import"./RechartsWrapper-DfYeCvHJ.js";import"./axisSelectors-BLfWrXUN.js";import"./throttle-KAp-qu0T.js";import"./d3-scale-ONQE_M5R.js";import"./index-1dx-TPak.js";import"./index-u7UrDuUK.js";import"./renderedTicksSlice-CYiI8XB-.js";import"./index-Di1osVNT.js";import"./CartesianAxis-_QUC34Jt.js";import"./Layer-Pu2wX4UR.js";import"./types-BUORd8J7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-nX1tU7iU.js";import"./chartDataContext-CIXOSwbU.js";import"./CategoricalChart-C8RwzjmY.js";import"./AnimatedItems-0LuF_asA.js";import"./useAnimationId-AvDok9ug.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Cug13k1c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRTLiydv.js";import"./tooltipContext-DeT4dGIe.js";import"./RegisterGraphicalItemId-LQahHGMW.js";import"./ErrorBarContext-D4j3Tcrr.js";import"./GraphicalItemClipPath-HnyZhYrt.js";import"./SetGraphicalItem-Ci5JV0yp.js";import"./getZIndexFromUnknown-BRqqzz0G.js";import"./useGraphicalItemIdentity-DLGtb43T.js";import"./Curve-CZFfEwwz.js";import"./step-DEQntpmi.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CmID2-UK.js";import"./Dot-_dbDJcAj.js";import"./getRadiusAndStrokeWidthFromDot-01qAW-aB.js";import"./useElementOffset-B8BeAmNT.js";import"./uniqBy-Dn3cwCom.js";import"./iteratee-Bva8E26b.js";import"./Cross-DbQYHN7d.js";import"./Sector-DxUcN2IJ.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
