import{R as t}from"./iframe-Zh2ccugb.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DZs1fmzf.js";import{R as l}from"./zIndexSlice-DEmBd4ZB.js";import{C as x}from"./ComposedChart-Dd1MizuK.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-BP724zKh.js";import{L as a}from"./Line-xJRbfbkE.js";import{X as c}from"./XAxis-Csr8aJtN.js";import{T as g}from"./Tooltip-C94K6jr0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DiL3sO7Q.js";import"./Text-MWlHmKAn.js";import"./resolveDefaultProps-fH52x6Wq.js";import"./ZIndexLayer-Xr-T5Ltv.js";import"./index-DCPtMhny.js";import"./index-Bpm_0b-N.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-ODY0eR4B.js";import"./throttle-B3lkaQcW.js";import"./axisSelectors-CeETa2Oh.js";import"./d3-scale-oTva27Ef.js";import"./CartesianAxis-CIOwjTNM.js";import"./Layer-C95YSbsg.js";import"./types-aszg7ufr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DqNUbck1.js";import"./index-BTZK7nKb.js";import"./index-WmNaFkcT.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CwKOWqmW.js";import"./index-CMNAmNto.js";import"./fillDefinitions-CSMYcBHa.js";import"./CartesianChart-nM5gdBcu.js";import"./chartDataContext-CFkN0KVz.js";import"./CategoricalChart-DWn3sGtD.js";import"./dataEntryStyles-BE_TnqZR.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BZ898oCF.js";import"./useAnimationId-CwFbYXoE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-wgF5Hj2i.js";import"./tooltipContext-BIpiKwdI.js";import"./ErrorBarContext-f9PwKgv4.js";import"./activeStyles-D6kWvGgQ.js";import"./SetGraphicalItem-Dg3wmm6w.js";import"./getZIndexFromUnknown-DA2_TRCf.js";import"./useEffectiveDataKey-Ctjc01_U.js";import"./omit-B1CaXPmp.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CyvbP0E9.js";import"./step-BGLmz3Kf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-1_C8JWTD.js";import"./Dot-BIRUUIf4.js";import"./Symbols-S44HEmao.js";import"./symbol-UAwU-psM.js";import"./getRadiusAndStrokeWidthFromDot-B79813B8.js";import"./useElementOffset-Csv0_1PL.js";import"./uniqBy-FqU-5Unm.js";import"./iteratee-DDOrFaHy.js";import"./Cross-BgsKT80c.js";import"./Sector-MNccaZ7d.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
