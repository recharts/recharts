import{R as t}from"./iframe-B-cvRuUs.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-D8dVEXO3.js";import{R as l}from"./zIndexSlice-CMjvBZBG.js";import{C as x}from"./ComposedChart-CN8RK9qn.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Cx-2n8_Z.js";import{L as a}from"./Line-Csl9Oq_s.js";import{X as c}from"./XAxis-y94IxigF.js";import{T as g}from"./Tooltip-BWN-i7lv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-vDwlhiVA.js";import"./Text-CxPZ3A1T.js";import"./resolveDefaultProps-JrkDvvW3.js";import"./DOMUtils-3oIj9XlO.js";import"./isWellBehavedNumber-CUJFmfDc.js";import"./useId-aeSZs_FJ.js";import"./useBackwardsCompatibleTheme-HncKzdMk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DLKwVcRH.js";import"./index-wXQifNwN.js";import"./index-fP6QOzMc.js";import"./RechartsWrapper-Sn-pOtLi.js";import"./axisSelectors-BWIhKYR0.js";import"./throttle-CDbcUl2N.js";import"./d3-scale-DR_59xyj.js";import"./index-CfNq1WsM.js";import"./index-Cb6llO21.js";import"./renderedTicksSlice-h9-Npuy6.js";import"./index-43fZ4l-Z.js";import"./CartesianAxis-k7ozjxp6.js";import"./Layer-BuVUUS9m.js";import"./types-BMpC1VHb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-7OIiMPC1.js";import"./chartDataContext-D-4rsKBi.js";import"./CategoricalChart-sOR53Pms.js";import"./AnimatedItems-Dsd4czhw.js";import"./useAnimationId-Dhj6Z_Vv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-kx2mJ5WN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C9LbS6Cy.js";import"./tooltipContext-B1g6FgP3.js";import"./RegisterGraphicalItemId-DKARvEgF.js";import"./ErrorBarContext-B6INZz-c.js";import"./GraphicalItemClipPath-C12hutx0.js";import"./SetGraphicalItem-DuL8o0QU.js";import"./getZIndexFromUnknown-BkkeV9sV.js";import"./useGraphicalItemIdentity-BfmGadKt.js";import"./Curve-BQq91RH8.js";import"./step-D9kLagG3.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CQAXHfdf.js";import"./Dot-F1dblK_0.js";import"./getRadiusAndStrokeWidthFromDot-B-dIKKPR.js";import"./useElementOffset-DRlCn3Qn.js";import"./uniqBy-BHcpSUT2.js";import"./iteratee-DJT2RpEq.js";import"./Cross-ClEG0Ca2.js";import"./Sector-2VsF8zh6.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
