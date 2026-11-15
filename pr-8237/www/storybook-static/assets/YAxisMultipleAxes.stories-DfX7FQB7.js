import{R as t}from"./iframe-C75BlFXB.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-CM0RKDPz.js";import{R as l}from"./zIndexSlice-4GxCw66H.js";import{C as x}from"./ComposedChart-Bw6iA5fE.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-HPLqlKYV.js";import{L as a}from"./Line-BTHOdtzg.js";import{X as c}from"./XAxis-bu4t9p5Z.js";import{T as g}from"./Tooltip-CsPa7k05.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-D2Ecv790.js";import"./Text-CFNdT-9W.js";import"./resolveDefaultProps-CF3TLSY4.js";import"./ZIndexLayer-SbUjc4VB.js";import"./index-Ce13AGyB.js";import"./index-CWJaW9bb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Dz-eHC-D.js";import"./throttle-BrgJpY2A.js";import"./axisSelectors-DvLkyA4P.js";import"./d3-scale-PhqlfAou.js";import"./CartesianAxis-Cq0K36Zo.js";import"./Layer-9txovic7.js";import"./types-B1z8Z6Cy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Culw3tiU.js";import"./index-BoIFErVW.js";import"./index-EzgMka2g.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Di9_KxKG.js";import"./index-aBb4My7l.js";import"./fillDefinitions-Bn6BAHMd.js";import"./CartesianChart-DnnmNz3w.js";import"./chartDataContext-BTXdmqoO.js";import"./CategoricalChart-FqiOzffn.js";import"./dataEntryStyles-D_1EIJ1_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-LhN5JgeO.js";import"./useAnimationId-BsyXEGTp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5rtEYr00.js";import"./tooltipContext-3pVC19GE.js";import"./ErrorBarContext-C2oPAhQ2.js";import"./activeStyles-DZYHYdm_.js";import"./SetGraphicalItem-CZU_HqN4.js";import"./getZIndexFromUnknown-BO0gfpbs.js";import"./useEffectiveDataKey-8cfDXulc.js";import"./omit-C9DhcYFD.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BlWbOZj8.js";import"./step--aXjfd4u.js";import"./path-DyVhHtw_.js";import"./ActivePoints-CHWcM_kG.js";import"./Dot-DNLFUQdl.js";import"./Symbols-DWw2Hw6G.js";import"./symbol-BbI-T7nn.js";import"./getRadiusAndStrokeWidthFromDot-DHebNLcs.js";import"./useElementOffset-ryIYl6el.js";import"./uniqBy-IpgSihwf.js";import"./iteratee-BtVXkLhx.js";import"./Cross-CNymXMwN.js";import"./Sector-DFCDDdkD.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
