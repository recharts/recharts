import{R as t}from"./iframe-Gg4ukcCI.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DOuLffri.js";import{R as l}from"./zIndexSlice-DlNyh_xi.js";import{C as x}from"./ComposedChart-C1UNd2GX.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-tpFdtf-q.js";import{L as a}from"./Line-BjKthlHa.js";import{X as c}from"./XAxis-DOco_gcc.js";import{T as g}from"./Tooltip-B5lFn8QO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdUKW8N3.js";import"./Text-b8eoKvTG.js";import"./resolveDefaultProps-DhxEFOug.js";import"./ZIndexLayer-D5rwnqu2.js";import"./index-C2HXgDT0.js";import"./index-CXFDGi8T.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D8GOATX4.js";import"./throttle-CUgxKpyu.js";import"./axisSelectors-a1SI1Wf4.js";import"./d3-scale-Br8c0ClH.js";import"./CartesianAxis-BfWLv6d8.js";import"./Layer-BoT4M5vY.js";import"./types-BPcXCIuq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DvSqlga1.js";import"./index-HuopnsCQ.js";import"./index-BeAfusT4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D9XD6s1l.js";import"./index-BpeL0xzJ.js";import"./fillDefinitions-ihHkonIl.js";import"./CartesianChart-BjLEuFc_.js";import"./chartDataContext-CnuflyS8.js";import"./CategoricalChart-COQQ2eYQ.js";import"./dataEntryStyles-oHOQ7SK5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Csr5lTlg.js";import"./useAnimationId-DNK2Kfuo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DuHRv64l.js";import"./tooltipContext-C2W-FmQi.js";import"./ErrorBarContext-CJwSW4gu.js";import"./activeStyles-tWC5f0r5.js";import"./SetGraphicalItem-_cwLqG8F.js";import"./getZIndexFromUnknown-BVKy8b3G.js";import"./useEffectiveDataKey-DtjZjT7w.js";import"./omit-DmrPEJBR.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-DvraL6JM.js";import"./Curve-EfD-yUMs.js";import"./step-ClUmF8Xf.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BD-WR_m2.js";import"./Dot-KKWWgG3f.js";import"./Symbols-Dd8eQ8SU.js";import"./symbol-KoL4YSEk.js";import"./useElementOffset-D8U2qNR0.js";import"./uniqBy-By79vucy.js";import"./iteratee-DR_VEJPR.js";import"./Cross-CqlE0tP6.js";import"./Sector-lJs7IPNQ.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
