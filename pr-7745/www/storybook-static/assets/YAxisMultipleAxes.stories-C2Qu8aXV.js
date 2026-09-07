import{R as t}from"./iframe-BkeN00Xj.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DJRwhJXR.js";import{R as l}from"./zIndexSlice-B-x7pTGs.js";import{C as x}from"./ComposedChart-o64gktPG.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-TEbFaxFg.js";import{L as a}from"./Line-BystEDAn.js";import{X as c}from"./XAxis-CtkFJuG7.js";import{T as g}from"./Tooltip-VC28gVlA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C5oKPJnD.js";import"./Text-B4YmNBvy.js";import"./resolveDefaultProps-DZDkJdvH.js";import"./DOMUtils-BtNtGSBk.js";import"./isWellBehavedNumber-DpaF5Qbq.js";import"./useId-CoUZj2D9.js";import"./useBackwardsCompatibleTheme-CO7BXTf3.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BM7jKjXD.js";import"./index-Ssjmhn91.js";import"./index-Doqq19He.js";import"./RechartsWrapper-C3Vxgl3Z.js";import"./axisSelectors-CdQeSFob.js";import"./throttle-DVvQgSvv.js";import"./d3-scale-59I2Ahhc.js";import"./index-Bp16jrAu.js";import"./index-CzDQGSqQ.js";import"./renderedTicksSlice-EekJT0xr.js";import"./index-BW_MIuEw.js";import"./CartesianAxis-LtwF5IC-.js";import"./Layer-CQvSRJEy.js";import"./types-CHY5UDxi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-HYPnZu6o.js";import"./chartDataContext-BeegK0cj.js";import"./CategoricalChart-acAC1yFW.js";import"./AnimatedItems-D-Ov5Ds2.js";import"./useAnimationId-DIIcOQR8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DByb3FOE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-KH5PmLPO.js";import"./tooltipContext-ztpyaTwC.js";import"./RegisterGraphicalItemId-SBK7zBb4.js";import"./ErrorBarContext-CjOXvaZb.js";import"./GraphicalItemClipPath-BVRs7DWi.js";import"./SetGraphicalItem-BLpQqeaN.js";import"./getZIndexFromUnknown-Db7dNzRv.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-CDfU_78w.js";import"./Curve-CqZmQlC4.js";import"./step-6rSS0kJE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BZpnaHk5.js";import"./Dot-BSZNpi6H.js";import"./getRadiusAndStrokeWidthFromDot-C0jg-2Bd.js";import"./useElementOffset-B7hTb3Ey.js";import"./uniqBy-CPVlAjhe.js";import"./iteratee-xMasKDoT.js";import"./Cross-DDcONwgE.js";import"./Sector-DAcF8V-6.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
