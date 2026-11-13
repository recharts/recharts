import{R as t}from"./iframe-CXZlrf2U.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-I2w3cHIn.js";import{Y as r}from"./YAxis-DfNp35yd.js";import{R as l}from"./zIndexSlice-BjX2jCNd.js";import{C as x}from"./ComposedChart-Cd7Rssjf.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DPtL4Ihf.js";import{L as a}from"./Line-Dlj8YF05.js";import{X as c}from"./XAxis-CiwCXYrG.js";import{T as g}from"./Tooltip-Cyx-4zKK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DMZfCKi2.js";import"./Text-ypQmpcnA.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./ZIndexLayer-oMBe6LXA.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./throttle-CeMcgCrB.js";import"./axisSelectors-CXSRT8oe.js";import"./d3-scale-BmN7CMF4.js";import"./CartesianAxis-BaftQfIs.js";import"./Layer-cEFsn6Cd.js";import"./types-BoOwr3-k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./dataEntryStyles-CAbAzZrW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C40_qBeq.js";import"./useAnimationId-Bvdrz9cO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./tooltipContext-DbqUiVvs.js";import"./ErrorBarContext-Bx2AhXHF.js";import"./activeStyles-guaYkALv.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getZIndexFromUnknown-BB0YSVfx.js";import"./useEffectiveDataKey-ojW0Z0fn.js";import"./omit-BMiIzteC.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DIPpxfHS.js";import"./step-CMXLmVWU.js";import"./path-DyVhHtw_.js";import"./ActivePoints-BSxRgFzT.js";import"./Dot-jYZs8or3.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./getRadiusAndStrokeWidthFromDot-CwxjjF24.js";import"./useElementOffset-Cf7KVjqL.js";import"./uniqBy--p3p2aBD.js";import"./iteratee-BIhFTfdN.js";import"./Cross-FM7UdSZS.js";import"./Sector-C8LqmJ0g.js";const Rt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
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
