import{R as t}from"./iframe-Bm_JRRDc.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-DkJzVEan.js";import{R as l}from"./zIndexSlice-CE1MC-Bj.js";import{C as x}from"./ComposedChart-B5oDJkIg.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-Drfa9bur.js";import{L as a}from"./Line-Dlo0KXIB.js";import{X as c}from"./XAxis-CYGYoqLr.js";import{T as g}from"./Tooltip-1PXtah1l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-v2uuRqjZ.js";import"./Text-nM-LHLsO.js";import"./resolveDefaultProps-Cwcw9Llo.js";import"./DOMUtils-C1tRULq9.js";import"./pageBackground-BcaJILnW.js";import"./ZIndexLayer-DBCQDkbL.js";import"./index-2pvHcFpK.js";import"./index-DwUcBVgp.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CFmXVpQm.js";import"./throttle-Di0g5pz3.js";import"./axisSelectors-CQbwMXjx.js";import"./d3-scale-_mEsQ66i.js";import"./CartesianAxis-D65lIMFu.js";import"./Layer-C38IBOtq.js";import"./types-BgOFnMuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DeG-maS7.js";import"./index-B22Nz6Ed.js";import"./index-C9h-Jb--.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CWqhr_G8.js";import"./index-CuKK0pvL.js";import"./CartesianChart-BtCYpchS.js";import"./ZIndexPortal-Cd4FT9ez.js";import"./CategoricalChart-Ue3TZSpb.js";import"./LabelList-CIhUYtSm.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DVcWQa2n.js";import"./fillDefinitions-D55-ziDc.js";import"./themeFill-DfZYoox_.js";import"./useAnimationId-7tWnytho.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DOiWWiaf.js";import"./tooltipContext-CKQTaHLn.js";import"./dataEntryStyles-p95uc1IW.js";import"./ErrorBarContext-Bvj-sJVI.js";import"./activeStyles-BuWIAazB.js";import"./SetGraphicalItem-IhBPl0xA.js";import"./getZIndexFromUnknown-CYHnsZcu.js";import"./useEffectiveDataKey-1gMAnkt8.js";import"./omit-XhcW-dlg.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Co0XT7xq.js";import"./step-Og4N4nQm.js";import"./path-DyVhHtw_.js";import"./ActivePoints-B-UlNM6M.js";import"./Dot-Cd58ma5-.js";import"./Symbols-CobU2W6x.js";import"./symbol-EG1r1dzp.js";import"./getRadiusAndStrokeWidthFromDot-Z8_eBFcz.js";import"./useElementOffset-DZtVmn8K.js";import"./uniqBy-CNiTKE7V.js";import"./iteratee-DH1QSUwA.js";import"./Cross-sceG4Hk0.js";import"./Sector-6h8eCDfu.js";const Xt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},bt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,bt as __namedExportsOrder,Xt as default};
