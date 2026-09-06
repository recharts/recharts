import{R as t}from"./iframe-DPI0lJK_.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-kaLm4VRJ.js";import{R as l}from"./zIndexSlice-DaD71mPe.js";import{C as x}from"./ComposedChart-DjQUK1Js.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BT7xsBjn.js";import{L as a}from"./Line-D2DmyDPo.js";import{X as c}from"./XAxis-DfhI7JxR.js";import{T as g}from"./Tooltip-K2aBGj1S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtlIETXs.js";import"./Text-C3fZ5G2B.js";import"./resolveDefaultProps-DO_KkPbE.js";import"./DOMUtils-CbbnwRqi.js";import"./isWellBehavedNumber-BdpmJ8W0.js";import"./useId-DHEE7UYl.js";import"./useBackwardsCompatibleTheme-BwpcPfQP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B60U3eb3.js";import"./index-Ccm70UBL.js";import"./index-CCmLOwTb.js";import"./RechartsWrapper-9a7fYH3g.js";import"./axisSelectors-Cch7lJrg.js";import"./throttle-Bk9jlA84.js";import"./d3-scale-CLDzT5En.js";import"./index-DBJXL9j6.js";import"./index-DbAySsVp.js";import"./renderedTicksSlice-CXjOM9N8.js";import"./index-BlnGx-VT.js";import"./CartesianAxis-Dt2jxgOw.js";import"./Layer-vYxXJLXx.js";import"./types-BLM3hXld.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BZZn2Q8U.js";import"./chartDataContext-BIJOOMrT.js";import"./CategoricalChart-DSBOz4pd.js";import"./AnimatedItems-DshdCAFR.js";import"./useAnimationId-DHeK0bmN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DsDRrIHk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bg0Vulpa.js";import"./tooltipContext-COYOoKhj.js";import"./RegisterGraphicalItemId-D_AIaJ8K.js";import"./ErrorBarContext-DcryNH3m.js";import"./GraphicalItemClipPath-D7kbGJpV.js";import"./SetGraphicalItem-CPTpIfRJ.js";import"./getZIndexFromUnknown-C_aQ8Hc6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cgn6sHhH.js";import"./Curve-CU38nB5d.js";import"./step-V5YLtyHD.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BDBaYtXZ.js";import"./Dot-odAwlToN.js";import"./getRadiusAndStrokeWidthFromDot-zTtP77M2.js";import"./useElementOffset-BEd0h0Or.js";import"./uniqBy-BrJUdere.js";import"./iteratee-Dj8b9wE-.js";import"./Cross-CspjEJg6.js";import"./Sector-C5YQzuCE.js";const Rt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Lt=["WithLeftAndRightAxes"];export{e as WithLeftAndRightAxes,Lt as __namedExportsOrder,Rt as default};
