import{R as t}from"./iframe-C1V3amVF.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-CCWiCDwe.js";import{R as l}from"./zIndexSlice-CxDitcfM.js";import{C as x}from"./ComposedChart-B9ikdlAe.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Bav81Bkz.js";import{L as a}from"./Line-DBox68tq.js";import{X as c}from"./XAxis-CUJJeScp.js";import{T as g}from"./Tooltip-DwozMVE2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B5Mwu39-.js";import"./Text-C-wx4MGw.js";import"./resolveDefaultProps-maTY1UNo.js";import"./DOMUtils-BorqH6Wm.js";import"./isWellBehavedNumber-sSvUiVa0.js";import"./useId-CqxK22LB.js";import"./useBackwardsCompatibleTheme-DW9fdEyu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-3Hvhzeb3.js";import"./index-B41u_h9l.js";import"./index-B4ZIiFXx.js";import"./RechartsWrapper-Cc-bEMHs.js";import"./axisSelectors-BX0vcNuG.js";import"./throttle-DLY36_v2.js";import"./d3-scale-BOUMSuvG.js";import"./index-CssId3o7.js";import"./index-DnibiSA_.js";import"./renderedTicksSlice-D9YwC06X.js";import"./index-BGhjEBZe.js";import"./CartesianAxis-DtpXHVOF.js";import"./Layer-BYwPbOg9.js";import"./types-BJLf6sJx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-6UNv2iJv.js";import"./chartDataContext-CaPayD00.js";import"./CategoricalChart-B25IDucc.js";import"./AnimatedItems-aGWDQ20-.js";import"./useAnimationId-CfyL2S79.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D28FxDHn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-MAleYnD7.js";import"./tooltipContext-B8F29Znr.js";import"./RegisterGraphicalItemId-DC_0c8kg.js";import"./ErrorBarContext-BBO43QIU.js";import"./GraphicalItemClipPath-CMqb799B.js";import"./SetGraphicalItem-BaWbpx0v.js";import"./getZIndexFromUnknown-D4unsUMt.js";import"./useGraphicalItemIdentity-DMF19NMJ.js";import"./dataEntryStyles-B8wapxC1.js";import"./Curve-DehrnztG.js";import"./step-DAx8CwGE.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DuRb2Tsi.js";import"./Dot-CjGXKiL0.js";import"./getRadiusAndStrokeWidthFromDot-m1wPeMBb.js";import"./useElementOffset-Cvn3bpJq.js";import"./uniqBy-CIEuKI_-.js";import"./iteratee-DBOMspHe.js";import"./Cross-BReV1fvT.js";import"./Sector-Dx9uw-JU.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
