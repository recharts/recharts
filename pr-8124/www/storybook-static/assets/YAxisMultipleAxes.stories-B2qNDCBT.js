import{R as t}from"./iframe-CO2wyIFg.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DxlVhyz4.js";import{R as l}from"./zIndexSlice-B1dwy21o.js";import{C as x}from"./ComposedChart-BcXhG0tA.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DvG8n9lo.js";import{L as a}from"./Line-BQshy5fI.js";import{X as c}from"./XAxis-CTUf16qw.js";import{T as g}from"./Tooltip-D1nNQVkK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DwmonuSB.js";import"./Text-9LTzebQz.js";import"./resolveDefaultProps-WHnVIT2p.js";import"./DOMUtils-BcfmvW5B.js";import"./ZIndexLayer-Bvl6Rs1y.js";import"./index-jOLD2CcF.js";import"./index-Ctoi-28y.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BTrk53y9.js";import"./throttle-Bs5LuV_m.js";import"./axisSelectors-6mrCXm_L.js";import"./d3-scale-CG4Qydf0.js";import"./CartesianAxis-yYNPW19G.js";import"./Layer-3FBX9WCC.js";import"./types-l0n7UaRD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BUJ996QC.js";import"./index-DihKhs0V.js";import"./index-Bz0Oikv7.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BPn-EIY7.js";import"./index-Bf8x0XIR.js";import"./CartesianChart-Bz4eFVMM.js";import"./ZIndexPortal-Ca53grIf.js";import"./CategoricalChart-hTdn61VM.js";import"./LabelList-ZxVwNU5Y.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQZYhZHi.js";import"./useAnimationId-80VZwTZw.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJm59VzC.js";import"./tooltipContext-fUkgDlwS.js";import"./dataEntryStyles-DJf9CEZB.js";import"./ErrorBarContext-BwMCHjXJ.js";import"./activeStyles-C1uCXth5.js";import"./SetGraphicalItem-DzHXsKbf.js";import"./getZIndexFromUnknown-0WmJRp_3.js";import"./themeFill-BkM1x4hA.js";import"./useEffectiveDataKey-0oKoD9E-.js";import"./fillDefinitions-BgaObCNr.js";import"./omit-Cno7eRU-.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Bk39tyeQ.js";import"./step-DLHEgf4y.js";import"./path-DyVhHtw_.js";import"./ActivePoints-C0WjGSw3.js";import"./Dot-1KNmnTx0.js";import"./Symbols-CiaG31nz.js";import"./symbol-DdfWm2fk.js";import"./getRadiusAndStrokeWidthFromDot-DxWBVjs4.js";import"./useElementOffset-Dv8qg2LV.js";import"./uniqBy-DNvTgJdx.js";import"./iteratee-0AEmZrhj.js";import"./Cross-Cqm6penG.js";import"./Sector-CAlOeohk.js";const Wt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Xt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Xt as __namedExportsOrder,Wt as default};
